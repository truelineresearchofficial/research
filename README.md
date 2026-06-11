# Trueline Research — website + lead-capture backend

Marketing site (Vite + React) plus a small FastAPI backend that captures every
form submission to Postgres and mirrors it to a Google Sheet (the read-only view
for the marketing/sales team). Single domain: the site at `/`, the API at `/api`.

```
trueline-research/
├─ frontend/            Vite + React + TS SPA (the existing site)
│  ├─ Dockerfile        multi-stage: node build -> nginx:alpine
│  ├─ nginx/default.conf  SPA fallback (no /api proxy; host nginx does that)
│  └─ src/lib/submit.ts  shared POST helper used by every form
├─ backend/            FastAPI + SQLAlchemy 2.0 (async) + Alembic
│  ├─ app/             schemas (discriminated union), crud, sheets, reconciler
│  ├─ migrations/      alembic
│  ├─ tests/           pytest (unit + integration)
│  └─ Dockerfile
├─ docker-compose.yml  frontend + api + db (Postgres)
└─ .github/workflows/ci.yml  test -> build-on-server deploy
```

## Forms captured

| form_type | where | fields |
|---|---|---|
| `contact` (`scholar`/`college`/`institution`) | `/contact` | name, email, org/dept/country, message |
| `newsletter` | `/insights` | email |

All go to one Postgres table (`submissions`, typed columns + jsonb payload) and
to the Google Sheet tabs `Contact` / `Newsletter`.

## Local development

Backend tests (no Docker needed — uses a throwaway DB):

```bash
cd backend
python -m venv .venv && . .venv/bin/activate    # on exFAT use a venv off the SSD
pip install -e ".[dev]"
ruff check .
pytest -q                                        # integration tests need TEST_DATABASE_URL
```

Frontend:

```bash
cd frontend
npm ci
npm run typecheck && npm run test
npm run dev                                      # http://localhost:5175
```

Full stack via Docker (needs `backend/.env` + `backend/secrets/google_sa.json`):

```bash
cp backend/.env.example backend/.env             # fill in values, chmod 600
docker compose up -d --build
curl -s localhost:8100/api/health                # {"status":"ok"}
```

## Deploy (contabo-damu)

CI = GitHub Actions, **test → build on server**. On push to `main`: lint +
typecheck + tests run, then a deploy job SSHes to the box and, **after backing up
the DB and code**, runs `git pull && docker compose build && alembic upgrade head
&& up -d`. See `DEPLOY.md` for first-time server setup (PAT, secrets, Nginx vhost,
certbot). No container registry — images build on the host.

- Live at `https://truelineresearch.yazhl.dpdns.org`
- Ports (loopback): api `8100`, frontend `8110`, postgres `5447`
- Per-deploy backups: `/var/backups/trueline-research/` (last 10)

## Required GitHub secrets

`DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_SSH_KEY` (+ optional `DEPLOY_SSH_PORT`).
The GitHub **PAT** is server-side only (git credential store) for `git pull`; it
is never a CI secret.

Origin: `git@github.com:truelineresearchofficial/research.git` (SSH for local
push; the server pulls the same repo over HTTPS with the PAT). See `DEPLOY.md`.
