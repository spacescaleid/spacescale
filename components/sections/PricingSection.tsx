"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { pricingTiers, type PricingTier } from "@/lib/data/pricing";
import { whatsappLink, cn } from "@/lib/utils";

/**
 * Pricing section — 3 tiers with featured middle tier.
 * Promo pricing: crossed-out original price + bold promo price + savings note.
 */
export function PricingSection() {
  const { t } = useTranslation();

  return (
    <section
      id="pricing"
      className="section-pad bg-bg-primary"
      aria-labelledby="pricing-title"
    >
      <div className="mx-auto max-w-wide">
        <SectionHeader
          label={t("pri.label")}
          title={
            <>
              {t("pri.title")}{" "}
              <span className="italic-serif text-brand-navy">
                {t("pri.italic")}
              </span>
            </>
          }
          subtitle={t("pri.subtitle")}
        />

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <Reveal key={tier.id} delay={i * 0.1}>
              <PricingCard tier={tier} />
            </Reveal>
          ))}
        </div>

        {/* Note */}
        <Reveal className="mt-12 text-center" delay={0.4}>
          <p className="mx-auto max-w-2xl text-body-sm text-text-muted">
            {t("pri.note")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function PricingCard({ tier }: { tier: PricingTier }) {
  const { t, locale } = useTranslation();
  const featured = tier.featured;

  const message =
    locale === "id"
      ? `Halo Spacescale, saya tertarik diskusi paket ${tier.name.id}`
      : `Hi Spacescale, I'd like to discuss the ${tier.name.en} package`;

  return (
    <article
      className={cn(
        "relative h-full rounded-3xl border p-10 transition-all duration-400",
        featured
          ? "scale-[1.04] border-text-primary bg-text-primary text-text-on-dark shadow-[0_20px_50px_rgba(10,14,31,0.2)] hover:scale-[1.04] hover:-translate-y-1.5 md:scale-[1.04]"
          : "border-border-light bg-bg-card hover:-translate-y-1.5 hover:shadow-[0_30px_60px_rgba(10,14,31,0.1)]"
      )}
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-pop px-3.5 py-1.5 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-white">
          {t("pri.badge")}
        </div>
      )}

      {/* Tier label */}
      <div
        className={cn(
          "mb-3 font-mono text-meta-sm uppercase tracking-[0.2em]",
          featured ? "text-text-on-dark/60" : "text-text-muted"
        )}
      >
        {tier.tier}
      </div>

      {/* Tier name */}
      <div className="mb-4 font-sans text-[1.75rem] font-bold tracking-tight">
        {tier.name[locale]}
      </div>

      {/* Price area */}
      <div className="mb-2">
        {tier.pricingType === "from" && tier.priceFrom ? (
          <>
            <div
              className={cn(
                "mb-1 font-mono text-meta-sm uppercase tracking-[0.15em]",
                featured ? "text-text-on-dark/50" : "text-text-muted"
              )}
            >
              {t("pri.startingFrom")}
            </div>

            {/* Crossed out original price */}
            {tier.originalPrice && tier.originalPriceUnit && (
              <div
                className={cn(
                  "mb-1 font-sans text-[1rem] line-through decoration-2",
                  featured ? "text-text-on-dark/40" : "text-text-muted"
                )}
              >
                Rp {tier.originalPrice} {tier.originalPriceUnit}
              </div>
            )}

            {/* Current/promo price */}
            <div className="flex items-baseline gap-1.5">
              <span
                className={cn(
                  "font-mono text-[0.85rem]",
                  featured ? "text-text-on-dark/50" : "text-text-muted"
                )}
              >
                Rp
              </span>
              <span className="font-sans text-[2.5rem] font-bold leading-none tracking-tight">
                {tier.priceFrom}
                {tier.priceUnit}
              </span>
            </div>

            {/* Promo savings note */}
            {tier.promoNote && (
              <div
                className={cn(
                  "mt-2 font-sans text-body-sm font-medium",
                  featured ? "text-accent-electric" : "text-accent-success"
                )}
              >
                {tier.promoNote[locale]}
              </div>
            )}
          </>
        ) : (
          <div className="font-sans text-[2rem] font-bold leading-none tracking-tight">
            {t("pri.onRequest")}
          </div>
        )}
      </div>

      {/* Description */}
      <p
        className={cn(
          "mb-6 mt-4 border-b pb-6 text-body-sm",
          featured
            ? "border-text-on-dark/10 text-text-on-dark/70"
            : "border-border-light text-text-secondary"
        )}
      >
        {tier.description[locale]}
      </p>

      {/* Features */}
      <ul className="mb-8 space-y-2.5">
        {tier.features[locale].map((feature) => (
          <li
            key={feature}
            className={cn(
              "flex items-start gap-3 text-body-sm",
              featured ? "text-text-on-dark/85" : "text-text-secondary"
            )}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={cn(
                "mt-0.5 flex-shrink-0",
                featured ? "text-accent-electric" : "text-brand-navy"
              )}
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "block w-full rounded-xl py-3.5 text-center font-sans text-body-sm font-semibold transition-all duration-300",
          featured
            ? "bg-accent-electric text-white hover:bg-accent-pop"
            : "bg-bg-secondary text-text-primary hover:bg-text-primary hover:text-bg-primary"
        )}
      >
        {t("pri.cta")}
      </a>
    </article>
  );
}