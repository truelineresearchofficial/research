"""Unit tests for the Sheets layer: sanitizer, row manifest, sync bookkeeping (no DB)."""
from __future__ import annotations

from datetime import UTC, datetime
from uuid import uuid4

import pytest

from app.models import Submission
from app.services import sheets


def test_sanitize_cell_blocks_formula_injection():
    assert sheets.sanitize_cell("=SUM(A1:A9)") == "'=SUM(A1:A9)"
    assert sheets.sanitize_cell("+1") == "'+1"
    assert sheets.sanitize_cell("-1") == "'-1"
    assert sheets.sanitize_cell("@here") == "'@here"
    assert sheets.sanitize_cell("normal text") == "normal text"
    assert sheets.sanitize_cell(None) == ""
    assert sheets.sanitize_cell(123) == "123"


def _row(form_type="contact", variant="scholar", **payload):
    return Submission(
        id=uuid4(),
        form_type=form_type,
        variant=variant,
        email="a@b.com",
        name="Asha",
        payload=payload,
        created_at=datetime(2026, 6, 11, tzinfo=UTC),
        synced=False,
        sync_attempts=0,
    )


def test_contact_row_aligns_to_header():
    _, header, row_fn = sheets.MANIFEST["contact"]
    row = row_fn(_row(institution="IIT", research_area="ML", message="hi"))
    assert len(row) == len(header)
    assert row[header.index("Institution")] == "IIT"
    assert row[header.index("Research area")] == "ML"
    assert row[header.index("Email")] == "a@b.com"


def test_newsletter_row_shape():
    _, header, row_fn = sheets.MANIFEST["newsletter"]
    row = row_fn(_row(form_type="newsletter", variant="default"))
    assert len(row) == len(header) == 3


@pytest.mark.asyncio
async def test_try_append_marks_synced_on_success(monkeypatch):
    monkeypatch.setattr(sheets, "_append_blocking", lambda row: None)
    row = _row(form_type="newsletter", variant="default")
    ok = await sheets._try_append(row)
    assert ok is True
    assert row.synced is True
    assert row.synced_at is not None
    assert row.sync_attempts == 1


@pytest.mark.asyncio
async def test_try_append_records_error_on_failure(monkeypatch):
    def boom(row):
        raise RuntimeError("quota")

    monkeypatch.setattr(sheets, "_append_blocking", boom)
    row = _row(form_type="newsletter", variant="default")
    ok = await sheets._try_append(row)
    assert ok is False
    assert row.synced is False
    assert "quota" in row.sync_error
    assert row.sync_attempts == 1
