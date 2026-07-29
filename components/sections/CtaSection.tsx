"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { whatsappLink, emailLink, easings } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: easings.smooth },
  }),
};

/**
 * Final CTA section — dark background with radial glow.
 * High-emphasis closing section before footer.
 */
export function CtaSection() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="cta"
      ref={ref}
      className="relative overflow-hidden bg-bg-dark px-5 py-section text-text-on-dark md:px-[5%]"
      aria-labelledby="cta-title"
    >
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(79, 142, 247, 0.2) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(250,250,247,0.4) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-[2] mx-auto max-w-3xl text-center">
        {/* Badge */}
        <motion.div
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-dark bg-text-on-dark/[0.08] px-5 py-2"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
        >
          <span aria-hidden="true" className="text-accent-electric">
            ✦
          </span>
          <span className="font-mono text-meta-sm uppercase tracking-[0.15em] text-accent-electric">
            {t("cta.badge")}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          id="cta-title"
          className="mb-6 font-sans text-display-lg font-bold leading-[1.05] tracking-tight"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.12}
        >
          {t("cta.title.1")}
          <br />
          <span className="italic-serif text-accent-electric">
            {t("cta.italic")}
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="mx-auto mb-10 max-w-[500px] text-body-lg text-text-on-dark/70"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.24}
        >
          {t("cta.subtitle")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.36}
        >
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full bg-accent-electric px-9 py-4 font-sans text-body-md font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-pop hover:shadow-[0_12px_30px_rgba(255,107,53,0.4)]"
          >
            <WhatsAppIcon />
            {t("cta.btn.1")}
          </a>
          <a
            href={emailLink("Project Inquiry")}
            className="group inline-flex items-center gap-2.5 rounded-full border border-text-on-dark/20 px-9 py-4 font-sans text-body-md font-semibold text-text-on-dark transition-all duration-300 hover:border-text-on-dark hover:bg-white/5"
          >
            <EmailIcon />
            {t("cta.btn.2")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}