/*
 * AI Assistance Disclosure:
 * Tool: GitHub Copilot, date: 2026-09-28
 * Scope: Reused the mockup logo component in the product frontend.
 *        No requirements, architecture, schema, or API decisions were made by the AI tool.
 * Author review:
 */
import { Link } from "react-router-dom";

export default function Logo({
  size = "md",
  showWordmark = true,
  asLink = true,
}) {
  const px = size === "sm" ? 24 : 32;
  const mark = (
    <svg
      width={px}
      height={px}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="10" fill="#000000" />
      <path
        d="M9.5 22.5C9.5 15.5 14.5 11.5 21.5 11.5"
        stroke="#FFFFFF"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="9.5" cy="22.5" r="2.4" fill="#FFFFFF" />
      <circle cx="21.5" cy="11.5" r="3.6" fill="#EF7C00" />
    </svg>
  );
  const inner = (
    <span className="inline-flex items-center gap-2">
      {mark}
      {showWordmark && (
        <span className="font-display hidden text-xl font-bold text-ink min-[400px]:inline">
          FoC
        </span>
      )}
      <span className="sr-only">FoC</span>
    </span>
  );
  if (!asLink) return inner;
  return (
    <Link
      to="/"
      className="inline-flex min-h-[44px] min-w-[44px] items-center rounded md:min-h-0 md:min-w-0"
      aria-label="FoC home"
    >
      {inner}
    </Link>
  );
}
