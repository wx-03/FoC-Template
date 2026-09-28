<!--
 * AI Assistance Disclosure:
 * Tool: GitHub Copilot, date: 2026-09-28
 * Scope: Documented the actual frontend run commands, reused mockup assets, API coverage, and backend gaps.
 *        No requirements, architecture, schema, or API decisions were made by the AI tool.
 * Author review:
 -->

# FoC frontend

This is the product frontend starting point. It uses the same Vite, React 18, JavaScript, Tailwind,
and `lucide-react` stack as `foc-mockup/`. The mockup remains unchanged and keeps its original
AI notes and demo data.

## Run locally

```bash
cd frontend
npm install
npm run dev
```

The development proxy maps `/api/orders` to `http://localhost:3002/orders`. Start the order service
with the repository Compose setup first if you want live order data.

## Run with Compose

```bash
docker compose up --build frontend order-db order-service
```

Open `http://localhost:5173`. The production container serves the SPA with nginx and proxies its
order request to the Compose `order-service` container.

## Current API coverage

The frontend calls the existing `GET /orders` endpoint only. It does not copy demo suppliers,
requests, users, wallet transactions, or messages from the mockup. Supplier catalogue, auth session,
credit balance/transactions, and order mutations still need backend API contracts and implementation
before those screens can be connected.
