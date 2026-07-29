"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";
import { Reveal } from "@/components/ui/Reveal";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Framer Motion",
  "WordPress",
  "Three.js",
  "GSAP",
];

export function TechBar() {
  const { t } = useTranslation();

  return (
    <div className="border-y border-border-light bg-bg-secondary px-5 py-10 md:px-[5%]">
      <div className="mx-auto flex max-w-wide flex-wrap items-center justify-between gap-8">
        <Reveal variant="fadeRight">
          <span className="font-mono text-meta-sm uppercase tracking-[0.2em] text-text-muted">
            {t("tech.label")}
          </span>
        </Reveal>

        <Reveal variant="fadeLeft" delay={0.1}>
          <div className="flex flex-wrap items-center gap-x-12 gap-y-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="cursor-default font-sans text-body-md font-semibold text-text-secondary opacity-70 transition-all duration-300 hover:text-brand-navy hover:opacity-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}