"""Unit tests for the discriminated-union request schemas (no DB)."""
from __future__ import annotations

import pytest
from pydantic import ValidationError

from app.schemas import SubmissionRequest


def parse(data: dict):
    return SubmissionRequest.model_validate(data).root


def test_contact_scholar_valid():
    form = parse(
        {
            "form_type": "contact",
            "variant": "scholar",
            "full_name": "Asha Rao",
            "email": "asha@example.edu",
            "institution": "Madras Univ",
            "research_area": "Genomics",
            "message": "Keen to collaborate.",
        }
    )
    common = form.common()
    assert common["form_type"] == "contact"
    assert common["variant"] == "scholar"
    assert common["name"] == "Asha Rao"
    assert common["email"] == "asha@example.edu"
    assert common["payload"]["research_area"] == "Genomics"
    assert "website" not in common["payload"]


def test_contact_college_and_institution_map_columns():
    college = parse(
        {
            "form_type": "contact",
            "variant": "college",
            "name_role": "Dr Rao, HoD",
            "institution": "PSG",
            "department": "Biotech",
            "email": "hod@psg.edu",
            "message": "Set up a CoE.",
        }
    )
    assert college.common()["name"] == "Dr Rao, HoD"
    assert college.common()["organisation"] is None

    inst = parse(
        {
            "form_type": "contact",
            "variant": "institution",
            "name_role": "VP Research",
            "organisation": "Gulf Health",
            "country": "UAE",
            "email": "vp@gulf.ae",
            "message": "Partnership.",
        }
    )
    assert inst.common()["organisation"] == "Gulf Health"


def test_newsletter_minimal():
    form = parse({"form_type": "newsletter", "email": "x@y.com"})
    assert form.common()["form_type"] == "newsletter"
    assert form.common()["variant"] == "default"


def test_missing_required_field_raises():
    with pytest.raises(ValidationError):
        parse(
            {
                "form_type": "contact",
                "variant": "scholar",
                "full_name": "No Email",
                "institution": "X",
                "research_area": "Y",
                "message": "Z",
            }
        )


def test_invalid_email_raises():
    with pytest.raises(ValidationError):
        parse({"form_type": "newsletter", "email": "not-an-email"})


def test_unknown_variant_raises():
    with pytest.raises(ValidationError):
        parse({"form_type": "contact", "variant": "nope", "email": "a@b.com"})


def test_honeypot_flag():
    form = parse({"form_type": "newsletter", "email": "x@y.com", "website": "spam"})
    assert form.is_bot is True
    clean = parse({"form_type": "newsletter", "email": "x@y.com"})
    assert clean.is_bot is False


def test_dedupe_key_stable_and_content_sensitive():
    a = parse({"form_type": "newsletter", "email": "Dup@Y.com"})
    b = parse({"form_type": "newsletter", "email": "dup@y.com"})  # case-insensitive
    c = parse({"form_type": "newsletter", "email": "other@y.com"})
    assert a.dedupe_key() == b.dedupe_key()
    assert a.dedupe_key() != c.dedupe_key()
