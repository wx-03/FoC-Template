<!--
  AI Assistance Disclosure:
  Tool: GitHub Copilot, date: 2026-09-28
  Scope: Recorded the frontend implementation request and actions taken in this folder.
  Author review:
-->

# AI notes — `frontend/`

## 2026-09-28 — Create the product frontend from the mockup

**Prompt/request (verbatim):**

> I want to turn our existing `foc-mockup/` into the starting point for the actual frontend.
> First, inspect the repo and understand the existing frontend, backend, Docker/Compose setup, and the structure of `foc-mockup/`.
> Keep `foc-mockup/`; create a new `frontend/`; remove dummy data from the real frontend; connect to existing APIs or clearly document missing backend APIs; add frontend Docker/Compose setup; keep original mockup AI notes; create `frontend/AI_NOTES.md`; verify frontend and Compose.

**Actions taken:**

- Inspected the mockup, backend routes, Dockerfiles, Compose files, and repository AI policy.
- Kept `foc-mockup/` unchanged, including its data and `AI-NOTES.md`.
- Created a Vite/React/Tailwind frontend that reuses the mockup stylesheet, logo, and button components.
- Added a real client for the existing order-service `GET /orders` endpoint.
- Added explicit status documentation for supplier, auth, credit, and mutation APIs that do not yet exist.
- Added a multi-stage frontend Dockerfile, nginx SPA fallback/proxy, Compose service wiring, and a Docker build ignore file.

**Files changed:**

- `frontend/` (created: application, reused Logo/Button primitives, build configuration, Docker files, README, and this log)
- `compose.yaml` and `compose.dev.yaml` (frontend service wiring)
- `README.md` and `ai/usage-log.md` (required project-level disclosure index)

**Verification:** `npm install`, `npm run build`, `npm run lint`, production Docker build, `docker compose config --quiet`, Compose startup with `frontend order-db order-service`, frontend HTTP probe, and proxied `/api/orders` HTTP probe all passed. The existing mockup directory was unchanged.

**Author review:**

## 2026-09-28 — Fix localhost connection after Compose target switch

**Prompt/request:**

> localhost refused to connect.

**Actions taken:**

- Found that the running container was the development Vite image without a published host port, while the production Compose configuration expected nginx on port `5173`.
- Rebuilt and recreated the production frontend container; it now publishes `5173:80` and returns HTTP 200.
- Gave the dev override its own `foc-frontend-dev` image tag so development and production images cannot be accidentally reused interchangeably.

**Verification:** `docker compose build frontend`, production container recreation, nginx command inspection, and `curl http://localhost:5173/` all passed. Existing order database and order service remained healthy.

**Author review:**

## 2026-09-28 — Fix Compose Watch frontend port mapping

**Prompt/request:**

> it's not working with `docker compose -f compose.yaml -f compose.dev.yaml up --build --watch`

**Actions taken:**

- Reproduced the exact command and found the merged dev configuration inherited both `5173:80` and `5173:5173`.
- Changed the dev override to replace the production port list, leaving only `5173:5173` for Vite.
- Restarted Compose Watch with the corrected configuration.

**Verification:** Compose Watch builds and starts successfully; the frontend publishes `0.0.0.0:5173->5173/tcp` and `curl http://localhost:5173/` returns HTTP 200.

**Author review:**
