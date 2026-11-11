# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Trueline Research marketing site (Vite + React + TS SPA) plus a small FastAPI
backend that captures every form submission to Postgres and mirrors it to a
Google Sheet (the read-only view for marketing/sales). Single domain in prod:
the SPA at `/`, the API at `/api` (host Nginx proxies `/api` to the backend
container). See `README.md` for the product overview and `DEPLOY.md` for
first-time server setup.

## Commands

Backend (`cd backend`):
```bash
pip install -e ".[dev]"
ruff check .                    # lint (rules: E,F,I,UP,B; line-length 100)
alembic upgrade head            # apply migrations
pytest -q                       # unit tests always run; integration tests need TEST_DATABASE_URL
pytest -q tests/test_schemas.py::test_name   # single test
```
Integration tests (anything hitting Postgres) are **skipped unless
`TEST_DATABASE_URL` is set** — e.g.
`TEST_DATABASE_URL=postgresql+asyncpg://test:test@localhost:5432/test`.

Frontend (`cd frontend`):
```bash
npm ci
npm run typecheck               # tsc -b
npm run test                    # vitest run
npm run dev                     # http://localhost:5175
npm run build                   # tsc -b && vite build
```

Full stack (needs `backend/.env` + `backend/secrets/google_sa.json`):
```bash
cp backend/.env.example backend/.env    # fill values, chmod 600
docker compose up -d --build
curl -s localhost:8100/api/health        # {"status":"ok"}
```

## Architecture

**One ingest endpoint, one table.** Every form on the site POSTs to
`POST /api/v1/submissions` via the shared helper `frontend/src/lib/submit.ts`.
All submissions land in a single Postgres `submissions` table (typed common
columns + a `jsonb` payload) and mirror to Google Sheet tabs.

**Discriminated union request schema** (`backend/app/schemas/submissions.py`):
nested Pydantic v2 union — outer discriminator `form_type`
(`contact` | `newsletter`), inner (contact) discriminator `variant`
(`scholar` | `college` | `institution`). Each concrete model projects itself
into DB columns via `.common()` and a content-hash `.dedupe_key()`. To add a
form: add a model here, wire it into the union, and add a Sheets column
manifest entry (below). The router receives the union directly via `Body(...)`
— **do not** add `from __future__ import annotations` to
`routers/submissions.py` or wrap in a RootModel; both break FastAPI's OpenAPI
handling of the nested union.

**Durable Sheets sync — DB is source of truth** (`services/sheets.py` +
`services/reconciler.py`). Two paths write to Sheets:
1. Append-on-insert: the request handler schedules a `BackgroundTask`
   (`sync_submission`) for speed.
2. Reconciler loop: a lifespan-managed background task
   (`reconciler_loop`, every `RECONCILER_INTERVAL_SECONDS`) re-drives any row
   left `synced=false` up to `SYNC_MAX_ATTEMPTS`, using
   `SELECT ... FOR UPDATE SKIP LOCKED` so it never races the insert-time task.

   A Sheets/API outage therefore never loses a lead. Per-form-type Sheets
   columns are defined in the `MANIFEST` dict in `sheets.py`. All cell values
   pass through `sanitize_cell` (formula-injection guard).

**Idempotency:** `crud.insert_submission` uses `INSERT ... ON CONFLICT
(dedupe_key) DO NOTHING RETURNING`. `created=False` means a duplicate — the
Sheets append is gated on `created` so re-submits are not re-appended.

**Anti-abuse:** honeypot field `website` (bots get an indistinguishable success,
no persistence); slowapi rate limits (`RATE_LIMIT_SUBMIT`, in-memory — hence the
single uvicorn worker in `entrypoint.sh`); body-size guard in `main.py`
middleware.

**Error envelope:** all errors return `{"error": {code, message, fields,
request_id}}` via the exception handlers in `main.py`. Every request carries an
`X-Request-ID` (structlog-bound). The frontend surfaces `error.message` to users.

## Config & secrets

Backend config is `pydantic-settings` from `backend/.env` (see `.env.example`).
Never commit `.env` or `backend/secrets/google_sa.json` (gitignored; SA JSON is
host-mounted read-only, never baked into the image). `sheets.py` accepts either
a service-account JSON or an OAuth authorized-user token. Toggle
`SHEETS_SYNC_ENABLED=false` to pause syncing without a redeploy.

## Deploy

CI (`.github/workflows/ci.yml`) is **test → build-on-server** (no registry).
Push to `main` (prod) or `dev` (staging): lint + typecheck + tests run, then a
deploy job SSHes to the server and, **after backing up the DB and code**, runs
`git pull && docker compose build && alembic upgrade head && up -d`. Migrations
run automatically on container start (`entrypoint.sh`). See `DEPLOY.md` for
server setup, rollback, and backup-restore procedures.
