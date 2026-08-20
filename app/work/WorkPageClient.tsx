"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  projects,
  type Project,
  type ProjectCategory,
} from "@/lib/data/portfolio";
import { cn } from "@/lib/utils";

type FilterValue = "all" | ProjectCategory;

interface Filter {
  value: FilterValue;
  labelKey:
    | "work.filter.all"
    | "work.filter.web"
    | "work.filter.ecom"
    | "work.filter.brand";
}

const filters: Filter[] = [
  { value: "all", labelKey: "work.filter.all" },
  { value: "web", labelKey: "work.filter.web" },
  { value: "ecom", labelKey: "work.filter.ecom" },
  { value: "brand", labelKey: "work.filter.brand" },
];

export function WorkPageClient() {
  const { t, locale } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <section className="px-5 pb-12 pt-32 md:px-[5%] md:pb-16 md:pt-40">
        <div className="mx-auto max-w-wide">
          <SectionHeader
            align="left"
            label={t("work.label")}
            title={
              <>
                {t("work.title")}{" "}
                <span className="italic-serif text-brand-navy">
                  {t("work.italic")}
                </span>
              </>
            }
            subtitle={t("work.subtitle")}
          />

          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-2 border-t border-border-light pt-8">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value)}
                  className={cn(
                    "rounded-full px-5 py-2.5 font-sans text-body-sm font-semibold transition-all duration-300",
                    activeFilter === filter.value
                      ? "bg-text-primary text-bg-primary"
                      : "bg-bg-secondary text-text-secondary hover:bg-text-primary/10 hover:text-text-primary"
                  )}
                  aria-pressed={activeFilter === filter.value}
                >
                  {t(filter.labelKey)}
                </button>
              ))}
              <span className="ml-auto self-center font-mono text-meta-sm text-text-muted">
                {filteredProjects.length}{" "}
                {filteredProjects.length === 1 ? "project" : "projects"}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-32 md:px-[5%]">
        <div className="mx-auto max-w-wide">
          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-body-lg text-text-muted">
                {t("work.empty")}
              </p>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6"
            >
              {filteredProjects.map((project, i) => (
                <WorkCard
                  key={project.slug}
                  project={project}
                  index={i}
                  locale={locale}
                />
              ))}
            </motion.div>
          )}

          <Reveal className="mt-16 text-center" delay={0.2}>
            <Link
              href="/"
              className="group inline-flex items-center gap-2 font-sans text-body-md text-text-secondary transition-colors duration-300 hover:text-brand-navy"
            >
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-300 group-hover:-translate-x-1"
              >
                ←
              </span>
              {t("work.backHome")}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function WorkCard({
  project,
  index,
  locale,
}: {
  project: Project;
  index: number;
  locale: "id" | "en";
}) {
  const spanClass = getSpanClass(project.span);

  const projectAltTexts: Record<string, string> = {
    eqahku: "Website Eqahku dengan elemen 3D interaktif dibuat oleh Spacescale",
    lumera: "Website skincare brand Lumera dibuat oleh Spacescale",
    "midnight-roast": "Website Midnight Roast late-night cafe dibuat oleh Spacescale",
    "syari-laundry": "Website Syar'i Laundry dengan desain clean & mobile-first dibuat oleh Spacescale",
    naratama: "Website personal brand Naratama untuk executive coach dibuat oleh Spacescale",
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.6,
        delay: Math.min(index * 0.06, 0.4),
        ease: [0.4, 0, 0.2, 1],
      }}
      className={spanClass}
    >
      <Link
        href={`/work/${project.slug}`}
        aria-label={`View case study: ${project.name}`}
      >
        <article className="group relative overflow-hidden rounded-3xl border border-border-light bg-bg-card transition-all duration-500 ease-smooth hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(10,14,31,0.15)]">
          {/* Visual */}
          <div className="relative aspect-portfolio w-full overflow-hidden">
            {project.image ? (
              <div
                className="absolute inset-0 bg-cover bg-top transition-transform duration-700 ease-smooth group-hover:scale-105"
                style={{ backgroundImage: `url(${project.image})` }}
                role="img"
                aria-label={projectAltTexts[project.slug] || `${project.name} project screenshot`}
              />
            ) : (
              <div
                className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-smooth group-hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${project.visual.bgFrom} 0%, ${project.visual.bgTo} 100%)`,
                }}
              >
                <span
                  className="absolute bottom-7 font-serif text-2xl italic tracking-[0.1em]"
                  style={{ color: project.visual.accentColor }}
                >
                  {project.visual.label}
                </span>
                <div
                  className="h-24 w-24 rounded-full opacity-10"
                  style={{ backgroundColor: project.visual.accentColor }}
                />
              </div>
            )}

            {/* Hover overlay */}
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-text-primary/90 via-transparent to-transparent p-8 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
              <div className="translate-y-5 transition-transform duration-400 group-hover:translate-y-0">
                <div className="mb-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/15 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-white backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mb-1.5 font-sans text-2xl font-semibold text-white">
                  {project.name}
                </h3>
                <p className="text-body-sm text-white/85">
                  {project.tagline[locale]}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom info */}
          <div className="flex items-center justify-between border-t border-border-light px-8 py-5">
            <div>
              <h4 className="font-sans text-body-md font-semibold text-text-primary">
                {project.name}
              </h4>
              <p className="font-mono text-meta-sm uppercase tracking-[0.05em] text-text-muted">
                {project.year} · {project.category.toUpperCase()}
              </p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-secondary text-text-primary transition-all duration-300 group-hover:rotate-[-45deg] group-hover:bg-text-primary group-hover:text-bg-primary">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

function getSpanClass(span: 5 | 7 | 6 | 12): string {
  switch (span) {
    case 5:
      return "md:col-span-5";
    case 7:
      return "md:col-span-7";
    case 6:
      return "md:col-span-6";
    case 12:
      return "md:col-span-12";
  }
}
