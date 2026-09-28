/*
 * AI Assistance Disclosure:
 * Tool: GitHub Copilot, date: 2026-09-28
 * Scope: Added a small client for the existing order-service GET /orders endpoint.
 *        Supplier, auth, credit, and mutation APIs were not invented where the backend is absent.
 * Author review:
 */
const API_ROOT = import.meta.env.VITE_API_ROOT || "/api";

async function request(path, options) {
  const response = await fetch(`${API_ROOT}${path}`, options);
  if (!response.ok) throw new Error(`Request failed (${response.status})`);
  return response.json();
}

export async function fetchOrders() {
  const payload = await request("/orders");
  return payload.orders || [];
}

export const backendGaps = [
  "Supplier catalogue endpoint",
  "Authentication session integration",
  "Credit balance and transaction endpoints",
];
