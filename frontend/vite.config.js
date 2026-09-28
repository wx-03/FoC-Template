/*
 * AI Assistance Disclosure:
 * Tool: GitHub Copilot, date: 2026-09-28
 * Scope: Added the local development proxy for the existing order-service API.
 *        No requirements, architecture, schema, or API decisions were made by the AI tool.
 * Author review:
 */
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: env.FRONTEND_API_PROXY_TARGET || "http://localhost:3002",
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
