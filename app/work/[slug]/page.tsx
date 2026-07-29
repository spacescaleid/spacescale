import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects, getProjectBySlug } from "@/lib/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { whatsappLink } from "@/lib/utils";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.name} — Case Study`,
    description: project.tagline.id,
    openGraph: {
      title: `${project.name} — Spacescale.id`,
      description: project.tagline.id,
      images: project.image ? [project.image] : [],
    },
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const nextProject = projects[currentIndex + 1] ?? projects[0];

  return (
    <>
      {/* Hero */}
      <section className="px-5 pb-16 pt-32 md:px-[5%] md:pt-40">
        <div className="mx-auto max-w-narrow">
          <Reveal>
            <Link
              href="/work"
              className="group mb-8 inline-flex items-center gap-2 font-mono text-meta-sm uppercase tracking-[0.1em] text-text-muted transition-colors hover:text-brand-navy"
            >
              <span
                aria-hidden="true"
                className="transition-transform group-hover:-translate-x-1"
              >
                ←
              </span>
              All Work
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mb-4 flex flex-wrap items-center gap-3 font-mono text-meta-sm uppercase tracking-[0.15em] text-text-muted">
              <span>{project.year}</span>
              <span aria-hidden="true">·</span>
              <span>{project.category}</span>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="mb-6 font-sans text-display-lg font-bold tracking-tight">
              {project.name}
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="max-w-2xl text-body-lg text-text-secondary">
              {project.description.id}
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-bg-secondary px-3 py-1.5 font-mono text-meta-sm uppercase tracking-wider text-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hero visual */}
      <section className="px-5 pb-20 md:px-[5%] md:pb-32">
        <div className="mx-auto max-w-wide">
          <Reveal delay={0.2}>
            {project.image ? (
              <div
                className="relative aspect-portfolio w-full overflow-hidden rounded-3xl bg-cover bg-top"
                style={{ backgroundImage: `url(${project.image})` }}
                role="img"
                aria-label={`${project.name} screenshot`}
              />
            ) : (
              <div
                className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-3xl"
                style={{
                  background: `linear-gradient(135deg, ${project.visual.bgFrom} 0%, ${project.visual.bgTo} 100%)`,
                }}
              >
                <span
                  className="font-serif text-6xl italic tracking-[0.1em] md:text-8xl"
                  style={{ color: project.visual.accentColor }}
                >
                  {project.visual.label}
                </span>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* Project details */}
      <section className="px-5 pb-20 md:px-[5%] md:pb-32">
        <div className="mx-auto max-w-narrow">
          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            <Reveal>
              <p className="mb-1 font-mono text-meta-sm uppercase tracking-[0.15em] text-text-muted">
                Project
              </p>
              <p className="font-sans text-body-md text-text-primary">
                {project.name}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mb-1 font-mono text-meta-sm uppercase tracking-[0.15em] text-text-muted">
                Year
              </p>
              <p className="font-sans text-body-md text-text-primary">
                {project.year}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mb-1 font-mono text-meta-sm uppercase tracking-[0.15em] text-text-muted">
                Category
              </p>
              <p className="font-sans text-body-md capitalize text-text-primary">
                {project.category}
              </p>
            </Reveal>
          </div>

          {project.liveUrl && (
            <Reveal delay={0.3}>
              <div className="mt-12 border-t border-border-light pt-12">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-text-primary px-7 py-4 font-sans text-body-md font-semibold text-bg-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-navy"
                >
                  Visit Live Site
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>
            </Reveal>
          )}

          <Reveal delay={0.2}>
            <div className="mt-20 space-y-6 text-body-md leading-relaxed text-text-secondary">
              <h2 className="font-sans text-display-sm font-bold text-text-primary">
                The Brief
              </h2>
              <p>{project.description.id}</p>
              <p className="text-text-muted italic">
                Case study lengkap segera hadir. Untuk diskusi project
                serupa, hubungi kami via WhatsApp.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Next project + CTA */}
      <section className="border-t border-border-light bg-bg-secondary px-5 py-20 md:px-[5%] md:py-32">
        <div className="mx-auto max-w-wide">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <p className="mb-3 font-mono text-meta-sm uppercase tracking-[0.2em] text-text-muted">
                Next Project
              </p>
              <Link
                href={`/work/${nextProject.slug}`}
                className="group block"
              >
                <h3 className="mb-3 font-sans text-display-sm font-bold text-text-primary transition-colors group-hover:text-brand-navy">
                  {nextProject.name}
                </h3>
                <p className="mb-6 text-body-md text-text-secondary">
                  {nextProject.tagline.id}
                </p>
                <span className="inline-flex items-center gap-2 font-sans text-body-sm font-semibold text-brand-navy">
                  View Case
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mb-3 font-mono text-meta-sm uppercase tracking-[0.2em] text-text-muted">
                Got a project?
              </p>
              <h3 className="mb-3 font-sans text-display-sm font-bold text-text-primary">
                Mari bicara.
              </h3>
              <p className="mb-6 text-body-md text-text-secondary">
                Konsultasi gratis 30 menit. Kita diskusi goal Anda dengan
                jujur.
              </p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-text-primary px-7 py-3.5 font-sans text-body-sm font-semibold text-bg-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-navy"
              >
                Mulai Diskusi
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}