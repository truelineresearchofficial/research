"""Request schemas for POST /api/v1/submissions (Trueline Research).

A nested Pydantic v2 discriminated union:
  outer discriminator  = form_type  (contact | newsletter)
  inner (contact) disc = variant    (scholar | college | institution)

Each concrete model knows how to project itself into a DB record
(common typed columns + a normalized jsonb `payload`) and a content-based
dedupe key for idempotency.
"""
from __future__ import annotations

import hashlib
import json
from typing import Annotated, ClassVar, Literal

from pydantic import BaseModel, ConfigDict, EmailStr, Field, RootModel

Str120 = Annotated[str, Field(min_length=1, max_length=120)]
Str200 = Annotated[str, Field(min_length=1, max_length=200)]
Text5k = Annotated[str, Field(min_length=1, max_length=5000)]

# control keys never stored in the jsonb payload
_CONTROL = {"website", "form_type", "variant"}


class FormBase(BaseModel):
    """Common behaviour for every form variant."""

    model_config = ConfigDict(extra="ignore", str_strip_whitespace=True)

    # honeypot: real users leave this empty. Checked in the handler (silent drop),
    # not validated to error, so bots get an indistinguishable success.
    website: str = Field("", max_length=200)

    # subclasses point these at the field that best fills the typed columns
    NAME_FIELD: ClassVar[str | None] = None
    ORG_FIELD: ClassVar[str | None] = None

    @property
    def is_bot(self) -> bool:
        return bool(self.website.strip())

    def normalized(self) -> dict:
        """All submitted form fields, minus control keys -> jsonb payload."""
        return self.model_dump(exclude=_CONTROL)

    def common(self) -> dict:
        """Typed common columns for the submissions row."""
        name = getattr(self, self.NAME_FIELD) if self.NAME_FIELD else None
        org = getattr(self, self.ORG_FIELD) if self.ORG_FIELD else None
        return {
            "form_type": self.form_type,
            "variant": self.variant,
            "email": self.email,
            "name": name,
            "organisation": org,
            "payload": self.normalized(),
        }

    def dedupe_key(self) -> str:
        """Content-based idempotency key (collapses identical re-submits).

        Email is lower-cased here (only) so case variants dedupe together,
        without mutating the stored payload.
        """
        payload = dict(self.normalized())
        if "email" in payload:
            payload["email"] = str(payload["email"]).lower()
        basis = json.dumps(
            {
                "f": self.form_type,
                "v": self.variant,
                "p": payload,
            },
            sort_keys=True,
            separators=(",", ":"),
            default=str,
        )
        return hashlib.sha256(basis.encode()).hexdigest()


# ----- contact: 3 variants -----
class ContactScholar(FormBase):
    form_type: Literal["contact"] = "contact"
    variant: Literal["scholar"] = "scholar"
    full_name: Str120
    email: EmailStr
    institution: Str200
    research_area: Str200
    message: Text5k
    NAME_FIELD = "full_name"


class ContactCollege(FormBase):
    form_type: Literal["contact"] = "contact"
    variant: Literal["college"] = "college"
    name_role: Str200
    institution: Str200
    department: Str200
    email: EmailStr
    message: Text5k
    NAME_FIELD = "name_role"


class ContactInstitution(FormBase):
    form_type: Literal["contact"] = "contact"
    variant: Literal["institution"] = "institution"
    name_role: Str200
    organisation: Str200
    country: Str120
    email: EmailStr
    message: Text5k
    NAME_FIELD = "name_role"
    ORG_FIELD = "organisation"


# ----- newsletter -----
class Newsletter(FormBase):
    form_type: Literal["newsletter"] = "newsletter"
    variant: Literal["default"] = "default"
    email: EmailStr


ContactUnion = Annotated[
    ContactScholar | ContactCollege | ContactInstitution,
    Field(discriminator="variant"),
]

SubmissionUnion = Annotated[
    ContactUnion | Newsletter,
    Field(discriminator="form_type"),
]


class SubmissionRequest(RootModel[SubmissionUnion]):
    """Validated request body; `.root` is the concrete form model."""


class SubmissionAck(BaseModel):
    id: str
    status: Literal["received"] = "received"
