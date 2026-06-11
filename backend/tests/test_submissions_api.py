"""Integration tests for POST /api/v1/submissions (requires Postgres)."""
from __future__ import annotations

from sqlalchemy import func, select

from app.models import Submission
from tests.conftest import requires_db

pytestmark = requires_db

SCHOLAR = {
    "form_type": "contact",
    "variant": "scholar",
    "full_name": "Asha Rao",
    "email": "asha@example.edu",
    "institution": "Madras Univ",
    "research_area": "Genomics",
    "message": "Keen to collaborate.",
}


async def _count(session_factory) -> int:
    async with session_factory() as s:
        return (await s.execute(select(func.count()).select_from(Submission))).scalar_one()


async def test_contact_happy_path_persists_and_syncs(client, session_factory):
    r = await client.post("/api/v1/submissions", json=SCHOLAR)
    assert r.status_code == 201
    assert r.json()["status"] == "received"
    assert r.headers.get("X-Request-ID")

    async with session_factory() as s:
        row = (await s.execute(select(Submission))).scalar_one()
    assert row.form_type == "contact"
    assert row.variant == "scholar"
    assert row.email == "asha@example.edu"
    assert row.payload["research_area"] == "Genomics"
    assert row.synced is True  # sheets mocked -> background marked it
    assert len(client.appended) == 1  # type: ignore[attr-defined]


async def test_newsletter_happy_path(client, session_factory):
    r = await client.post(
        "/api/v1/submissions", json={"form_type": "newsletter", "email": "x@y.com"}
    )
    assert r.status_code == 201
    assert await _count(session_factory) == 1


async def test_validation_error_uses_envelope(client):
    bad = {**SCHOLAR, "email": "not-an-email"}
    r = await client.post("/api/v1/submissions", json=bad)
    assert r.status_code == 422
    err = r.json()["error"]
    assert err["code"] == "validation_error"
    assert err["fields"]
    assert any("email" in f["loc"] for f in err["fields"])


async def test_honeypot_silent_drop(client, session_factory):
    r = await client.post("/api/v1/submissions", json={**SCHOLAR, "website": "bot"})
    assert r.status_code == 201  # indistinguishable success
    assert await _count(session_factory) == 0  # but nothing stored
    assert len(client.appended) == 0  # type: ignore[attr-defined]


async def test_duplicate_is_idempotent(client, session_factory):
    r1 = await client.post("/api/v1/submissions", json=SCHOLAR)
    r2 = await client.post("/api/v1/submissions", json=SCHOLAR)
    assert r1.status_code == r2.status_code == 201
    assert r1.json()["id"] == r2.json()["id"]
    assert await _count(session_factory) == 1
    assert len(client.appended) == 1  # second post did not re-append  # type: ignore[attr-defined]
