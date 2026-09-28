/*
 * AI Assistance Disclosure:
 * Tool: GitHub Copilot, date: 2026-09-28
 * Scope: Created the product frontend mount point and router provider.
 *        No requirements, architecture, schema, or API decisions were made by the AI tool.
 * Author review:
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
