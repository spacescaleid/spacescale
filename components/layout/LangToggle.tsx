"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";
import { cn } from "@/lib/utils";

/**
 * ID/EN language toggle.
 * Uses i18n context for state, persists to localStorage.
 */
export function LangToggle() {
  const { locale, setLocale } = useTranslation();

  return (
    <div
      className="flex rounded-full bg-text-primary/5 p-[3px] font-mono text-[0.7rem] font-semibold"
      role="group"
      aria-label="Language toggle"
    >
      <button
        type="button"
        onClick={() => setLocale("id")}
        className={cn(
          "rounded-full px-2.5 py-1.5 transition-all duration-300",
          locale === "id"
            ? "bg-text-primary text-bg-primary"
            : "text-text-muted hover:text-text-primary"
        )}
        aria-pressed={locale === "id"}
        aria-label="Bahasa Indonesia"
      >
        ID
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={cn(
          "rounded-full px-2.5 py-1.5 transition-all duration-300",
          locale === "en"
            ? "bg-text-primary text-bg-primary"
            : "text-text-muted hover:text-text-primary"
        )}
        aria-pressed={locale === "en"}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}