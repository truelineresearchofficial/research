# DEPLOY — Trueline Research (first-time server setup)

Target: **contabo-damu** (45.136.17.109, Ubuntu 24.04, Nginx + Docker).
Domain: **truelineresearch.yazhl.dpdns.org**. Ports (loopback): api `8100`,
frontend `8110`, postgres `5447`. Install path: `/var/www/tools/trueline-research`.

> Publisher repo is identical with: domain `truelinepublishers.yazhl.dpdns.org`,
> ports `8101 / 8111 / 5446`, path `/var/www/tools/trueline-publisher`, image
> `trueline-publisher-api`, backups `/var/backups/trueline-publisher`.

---

## 0. DNS (do first — certbot needs it resolving)

Add an A record: `truelineresearch.yazhl.dpdns.org → 45.136.17.109`. Verify:

```bash
dig +short truelineresearch.yazhl.dpdns.org   # -> 45.136.17.109
```

## 1. GitHub repo (org `truelineresearchofficial`, repo `research`)

Local push uses **SSH** (your keys). The server pulls via **PAT over HTTPS**
(§2) — the two clones are independent, so both preferences hold.

```bash
git init
git config user.name  "Damu"
git config user.email "damu.tealorca@gmail.com"
git add -A
git commit -m "feat: forms backend + dockerised stack + CI/CD"
git branch -M main
git remote add origin git@github.com:truelineresearchofficial/research.git
git push -u origin main
```

## 2. Fine-grained PAT (server-side `git pull` only — NOT a CI secret)

On github.com → Settings → Developer settings → **Fine-grained tokens**:
- Resource owner: **truelineresearchofficial**; Repository access: only `research`
- Permissions: **Contents → Read-only**; set a 90-day expiry.

On the server, clone over **HTTPS with the PAT** (independent of the SSH origin)
so `git pull` is non-interactive:

```bash
sudo install -d -o $USER -g $USER /var/www/tools
cd /var/www/tools
git config --global credential.helper store
# clone into the expected dir name; HTTPS+PAT, credential.helper persists it
git clone https://<PAT>@github.com/truelineresearchofficial/research.git trueline-research
chmod 600 ~/.git-credentials
```

## 3. SSH deploy key (GitHub Actions → server)

```bash
# on your machine
ssh-keygen -t ed25519 -f trueline_deploy -N "" -C "trueline-actions"
# add the PUBLIC half to the deploy user on the server:
ssh contabo-damu 'cat >> ~/.ssh/authorized_keys' < trueline_deploy.pub
```

In the GitHub repo → Settings → Secrets and variables → Actions:

| Secret | Value |
|---|---|
| `DEPLOY_HOST` | `45.136.17.109` |
| `DEPLOY_USER` | the deploy user |
| `DEPLOY_SSH_KEY` | contents of the **private** `trueline_deploy` |
| `DEPLOY_SSH_PORT` | (optional, if not 22) |

> The PAT is **not** here — Actions checks out via its built-in `GITHUB_TOKEN`.

## 4. Secrets + env on the server

```bash
cd /var/www/tools/trueline-research/backend
cp .env.example .env
#  - set POSTGRES_PASSWORD to a generated value (openssl rand -hex 24)
#  - set the SAME password inside DATABASE_URL
#  - set SHEETS_DOC_ID to the Research Google Sheet's id
chmod 600 .env

# Google service account JSON (Sheets API) -> mounted read-only by compose
install -d -m 700 secrets
#  paste the SA json:
nano secrets/google_sa.json   # then:
chmod 600 secrets/google_sa.json
```

**Google setup:** create a service account, enable the **Google Sheets API**,
create the Research Sheet doc, and **share that doc with the SA's email**
(Editor). Scope the SA to only this doc — no Drive-wide access.

## 5. Backups dir

```bash
sudo install -d -m 700 -o $USER /var/backups/trueline-research
```

## 6. First build + run

```bash
cd /var/www/tools/trueline-research
docker compose up -d --build      # entrypoint runs `alembic upgrade head`
docker compose ps
curl -s http://127.0.0.1:8100/api/health   # {"status":"ok"}
curl -s http://127.0.0.1:8110/ | head      # SPA html
```

## 7. Host Nginx vhost + TLS

Create `/etc/nginx/sites-available/truelineresearch.yazhl.dpdns.org`:

```nginx
server {
    listen 80;
    server_name truelineresearch.yazhl.dpdns.org;
    location /.well-known/acme-challenge/ { root /var/www/certbot; }
    location / { return 301 https://$host$request_uri; }
}

server {
    listen 443 ssl http2;
    server_name truelineresearch.yazhl.dpdns.org;

    ssl_certificate     /etc/letsencrypt/live/truelineresearch.yazhl.dpdns.org/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/truelineresearch.yazhl.dpdns.org/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    add_header Strict-Transport-Security "max-age=63072000" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "DENY" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    client_max_body_size 32k;

    location /api/ {
        proxy_pass http://127.0.0.1:8100;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 30s;
    }
    location / {
        proxy_pass http://127.0.0.1:8110;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/truelineresearch.yazhl.dpdns.org /etc/nginx/sites-enabled/
sudo install -d /var/www/certbot
# issue the cert (DNS must resolve first):
sudo certbot certonly --webroot -w /var/www/certbot -d truelineresearch.yazhl.dpdns.org
sudo nginx -t && sudo systemctl reload nginx
```

Renewal is automatic via the existing `certbot.timer` (same webroot path).

## 8. Smoke test (end-to-end)

```bash
curl -s https://truelineresearch.yazhl.dpdns.org/api/health        # {"status":"ok"}
# submit a newsletter from the live site, then:
docker compose exec db psql -U "$POSTGRES_USER" -d "$POSTGRES_DB" \
  -c "select form_type,variant,email,synced from submissions order by created_at desc limit 5;"
# within ~60s the row should also appear in the Research Sheet (Newsletter tab)
```

Also verify: deep-link refresh (`/about`) → 200; invalid email → inline error.

## 9. Day-2

- **Deploys** are automatic: push to `main` → CI tests → SSH deploy (backs up
  DB + code to `/var/backups/trueline-research` first, keeps last 10).
- **Rollback** (bad deploy): `cd /var/www/tools/trueline-research && git checkout <prev-sha>
  && docker compose up -d --build` — or swap to the saved image:
  `docker tag trueline-research-api:rollback trueline-research-api:latest && docker compose up -d --no-deps api`.
- **Restore a backup:** `pg_restore --no-owner -d <db>` the chosen `db-*.dump`.
- **Pause Sheets sync** without redeploy: set `SHEETS_SYNC_ENABLED=false` in `.env`
  and `docker compose up -d --no-deps api`.

## 10. Update the server profile

Record ports `8100/8110/5447`, the new vhost, and the backup path in
`.claude/deployment-knowledge/server-profiles/contabo-damu.md`.
