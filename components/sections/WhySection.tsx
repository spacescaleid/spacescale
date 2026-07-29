"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { whyCards } from "@/lib/data/services";

/**
 * "Why us" section — dark background for emphasis.
 * 2-column grid of value proposition cards.
 */
export function WhySection() {
  const { t, locale } = useTranslation();

  return (
    <section
      className="section-pad bg-bg-dark text-text-on-dark"
      aria-labelledby="why-title"
    >
      <div className="mx-auto max-w-wide">
        <SectionHeader
          label={t("why.label")}
          labelClassName="!bg-accent-electric/15 !text-accent-electric"
          title={
            <span className="text-text-on-dark">
              {t("why.title.1")}
              <br />
              <span className="italic-serif text-accent-electric">
                {t("why.italic")}
              </span>
            </span>
          }
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {whyCards.map((card, i) => (
            <Reveal key={card.number} delay={i * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-border-dark bg-white/[0.04] p-10 transition-all duration-400 hover:-translate-y-1 hover:border-accent-electric hover:bg-white/[0.06]">
                {/* Number / Category label */}
                <div className="mb-4 font-mono text-meta-sm uppercase tracking-[0.2em] text-accent-electric">
                  {card.number} / {card.category}
                </div>

                {/* Title with italic emphasis */}
                <h3 className="mb-3 font-sans text-2xl font-semibold leading-tight">
                  {card.title[locale]}{" "}
                  <span className="italic-serif text-accent-electric">
                    {card.italic[locale]}
                  </span>
                </h3>

                {/* Description */}
                <p className="text-body-md leading-relaxed text-text-on-dark/70">
                  {card.description[locale]}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}