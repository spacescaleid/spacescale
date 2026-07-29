"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/lib/data/services";

/**
 * Process timeline — vertical list with serif numbers.
 * Editorial style: thin border between items, hover slides right slightly.
 */
export function ProcessSection() {
  const { t, locale } = useTranslation();

  return (
    <section
      id="process"
      className="section-pad bg-bg-primary"
      aria-labelledby="process-title"
    >
      <div className="mx-auto max-w-wide">
        <SectionHeader
          label={t("prc.label")}
          title={
            <>
              {t("prc.title")}{" "}
              <span className="italic-serif text-brand-navy">
                {t("prc.italic")}
              </span>
            </>
          }
          subtitle={t("prc.subtitle")}
        />

        <div className="mx-auto max-w-narrow">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.06}>
              <article
                className={`group grid grid-cols-[60px_1fr] gap-4 border-border-light py-8 transition-all duration-300 hover:pl-4 md:grid-cols-[80px_1fr] md:gap-8 md:py-8 ${
                  i === processSteps.length - 1 ? "" : "border-b"
                }`}
              >
                {/* Number — serif italic */}
                <div className="font-serif text-[2.5rem] italic leading-none text-brand-navy md:text-[3.5rem]">
                  {step.number}
                </div>

                {/* Content */}
                <div>
                  <h3 className="mb-2 font-sans text-xl font-semibold text-text-primary md:text-2xl">
                    {step.title[locale]}
                  </h3>
                  <p className="mb-3 leading-relaxed text-text-secondary">
                    {step.description[locale]}
                  </p>
                  <div className="font-mono text-meta-sm uppercase tracking-[0.1em] text-text-muted">
                    {step.meta[locale]}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}