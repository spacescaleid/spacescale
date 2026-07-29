"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/data/services";

/**
 * Services grid — 4 columns on desktop, 2 on tablet, 1 on mobile.
 * Hover effects: lift + animated top border + icon rotation.
 */
export function ServicesSection() {
  const { t, locale } = useTranslation();

  return (
    <section
      id="services"
      className="section-pad bg-bg-secondary"
      aria-labelledby="services-title"
    >
      <div className="mx-auto max-w-wide">
        <SectionHeader
          label={t("srv.label")}
          title={
            <>
              {t("srv.title")}{" "}
              <span className="italic-serif text-brand-navy">
                {t("srv.italic")}
              </span>
            </>
          }
          subtitle={t("srv.subtitle")}
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border-light bg-bg-card p-8 transition-all duration-400 ease-smooth hover:-translate-y-1.5 hover:border-brand-navy hover:shadow-[0_20px_40px_rgba(10,14,31,0.08)]">
                {/* Animated top border */}
                <div
                  className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-brand-navy to-accent-electric transition-transform duration-400 group-hover:scale-x-100"
                  aria-hidden="true"
                />

                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-bg-secondary text-brand-navy transition-all duration-300 group-hover:rotate-[-5deg] group-hover:bg-brand-navy group-hover:text-bg-primary">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d={service.iconPath} />
                  </svg>
                </div>

                {/* Title & Description */}
                <h3 className="mb-2 font-sans text-[1.15rem] font-semibold text-text-primary">
                  {service.title[locale]}
                </h3>
                <p className="text-body-sm leading-relaxed text-text-secondary">
                  {service.description[locale]}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}