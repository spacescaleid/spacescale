"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { getFeaturedProjects, type Project } from "@/lib/data/portfolio";
import { cn } from "@/lib/utils";

export function PortfolioSection() {
  const { t, locale } = useTranslation();
  const featuredProjects = getFeaturedProjects();

  return (
    <section
      id="portfolio"
      className="section-pad bg-bg-primary"
      aria-labelledby="portfolio-title"
    >
      <div className="mx-auto max-w-wide">
        <SectionHeader
          align="left"
          label={t("pf.label")}
          title={
            <>
              {t("pf.title")}{" "}
              <span className="italic-serif text-brand-navy">
                {t("pf.italic")}
              </span>
            </>
          }
          subtitle={t("pf.subtitle")}
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
          {featuredProjects.map((project, i) => (
            <Reveal
              key={project.slug}
              delay={i * 0.08}
              className={cn(getSpanClass(project.span))}
            >
              <ProjectCard project={project} locale={locale} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center" delay={0.4}>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 rounded-full border border-border-light bg-bg-card px-7 py-3.5 font-sans text-body-md font-semibold text-text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-navy hover:shadow-[0_8px_20px_rgba(26,43,107,0.15)]"
          >
            {t("pf.viewAll")}
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
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

interface ProjectCardProps {
  project: Project;
  locale: "id" | "en";
}

function ProjectCard({ project, locale }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      aria-label={`View case study: ${project.name}`}
    >
      <article className="group relative cursor-pointer overflow-hidden rounded-3xl border border-border-light bg-bg-card transition-all duration-500 ease-smooth hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(10,14,31,0.15)]">
        {/* Visual */}
        <div className="relative aspect-portfolio w-full overflow-hidden">
          {project.image ? (
            <div
              className="absolute inset-0 bg-cover bg-top transition-transform duration-700 ease-smooth group-hover:scale-105"
              style={{ backgroundImage: `url(${project.image})` }}
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
              <p className="mb-4 text-body-sm text-white/85">
                {project.tagline[locale]}
              </p>
              {project.liveUrl && (
                <span className="inline-flex items-center gap-1.5 text-body-sm font-semibold text-white">
                  Lihat Live →
                </span>
              )}
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
              {project.tags.join(" · ")}
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
  );
}