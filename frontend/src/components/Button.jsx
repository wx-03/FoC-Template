/*
 * AI Assistance Disclosure:
 * Tool: GitHub Copilot, date: 2026-09-28
 * Scope: Reused the mockup button component in the product frontend.
 *        No requirements, architecture, schema, or API decisions were made by the AI tool.
 * Author review:
 */
const VARIANTS = {
  primary:
    "bg-ink text-white border border-ink hover:bg-ink-70 hover:border-ink-70",
  secondary: "bg-surface text-ink border border-line hover:border-ink",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  as: As = "button",
  ...props
}) {
  const sizes = {
    sm: "min-h-[44px] md:min-h-0 h-11 md:h-9 px-3 text-sm",
    md: "h-11 px-4 text-sm",
    lg: "h-12 px-6 text-base",
  };
  const disabledStyle =
    "bg-surface-alt text-ink-40 border border-line cursor-not-allowed";
  return (
    <As
      className={`inline-flex items-center justify-center gap-2 rounded-btn font-medium transition-colors duration-150 select-none ${sizes[size]} ${disabled ? disabledStyle : VARIANTS[variant]} ${className}`}
      disabled={As === "button" ? disabled : undefined}
      aria-disabled={disabled || undefined}
      {...props}
    />
  );
}
