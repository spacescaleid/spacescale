"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { faqs } from "@/lib/data/faq";
import { cn } from "@/lib/utils";

/**
 * FAQ accordion section.
 * Smooth height animation, accessible (aria-expanded, role region).
 */
export function FaqSection() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section
      id="faq"
      className="section-pad bg-bg-secondary"
      aria-labelledby="faq-title"
    >
      <div className="mx-auto max-w-wide">
        <SectionHeader
          label={t("faq.label")}
          title={
            <>
              {t("faq.title")}{" "}
              <span className="italic-serif text-brand-navy">
                {t("faq.italic")}
              </span>
            </>
          }
        />

        <div className="mx-auto max-w-editorial">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <FaqItem
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={toggle}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[number];
  index: number;
  isOpen: boolean;
  onToggle: (i: number) => void;
}) {
  const { locale } = useTranslation();
  const triggerId = `faq-trigger-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <div
      className={cn(
        "mb-3 overflow-hidden rounded-2xl border bg-bg-card transition-all duration-300",
        isOpen
          ? "border-brand-navy"
          : "border-border-light hover:border-text-primary/15"
      )}
    >
      <h3>
        <button
          type="button"
          id={triggerId}
          onClick={() => onToggle(index)}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-4 p-7 text-left font-sans text-[1.05rem] font-semibold text-text-primary"
        >
          <span>{faq.question[locale]}</span>
          <motion.span
            className={cn(
              "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xl leading-none transition-colors duration-300",
              isOpen
                ? "bg-brand-navy text-bg-primary"
                : "bg-bg-secondary text-text-primary"
            )}
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            aria-hidden="true"
          >
            +
          </motion.span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={triggerId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
              opacity: { duration: 0.3, delay: 0.1 },
            }}
            className="overflow-hidden"
          >
            <p className="px-7 pb-7 text-body-md leading-relaxed text-text-secondary">
              {faq.answer[locale]}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}