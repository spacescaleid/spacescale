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
    title: `${project.name} — Case Study | Spacescale`,
    description: `${project.name}: ${project.description.id}. Dibuat oleh Spacescale — studio web premium Indonesia.`,
    openGraph: {
      title: `${project.name} — Case Study | Spacescale`,
      description: project.tagline.id,
      url: `https://spacescale.online/work/${project.slug}`,
      siteName: "Spacescale",
      images: project.image ? [{ url: project.image }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — Case Study | Spacescale`,
      description: project.tagline.id,
    },
    alternates: {
      canonical: `https://spacescale.online/work/${project.slug}`,
      languages: {
        "id": `https://spacescale.online/work/${project.slug}`,
        "en": `https://spacescale.online/en/work/${project.slug}`,
      },
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://spacescale.online",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Work",
        item: "https://spacescale.online/work",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.name,
        item: `https://spacescale.online/work/${project.slug}`,
      },
    ],
  };

  const projectAltTexts: Record<string, string> = {
    eqahku: "Website Eqahku dengan elemen 3D interaktif dibuat oleh Spacescale",
    lumera: "Website skincare brand Lumera dibuat oleh Spacescale",
    "midnight-roast": "Website Midnight Roast late-night cafe dibuat oleh Spacescale",
    "syari-laundry": "Website Syar'i Laundry dengan desain clean & mobile-first dibuat oleh Spacescale",
    naratama: "Website personal brand Naratama untuk executive coach dibuat oleh Spacescale",
  };

  const altText = projectAltTexts[project.slug] || `Project ${project.name} dibuat oleh Spacescale`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <link rel="canonical" href={`https://spacescale.online/work/${project.slug}`} />

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
                aria-label={altText}
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
            <div className="mt-20 space-y-8 text-body-md leading-relaxed text-text-secondary">
              <h2 className="font-sans text-display-sm font-bold text-text-primary">
                The Brief
              </h2>
              <p>{project.description.id}</p>

              {/* Problem */}
              <div className="border-t border-border-light pt-8">
                <h3 className="mb-3 font-sans text-xl font-semibold text-text-primary">
                  Problem
                </h3>
                <p>
                  {getProjectProblem(project.slug)}
                </p>
              </div>

              {/* Strategy */}
              <div className="border-t border-border-light pt-8">
                <h3 className="mb-3 font-sans text-xl font-semibold text-text-primary">
                  Strategy
                </h3>
                <p>
                  {getProjectStrategy(project.slug)}
                </p>
              </div>

              {/* Result */}
              <div className="border-t border-border-light pt-8">
                <h3 className="mb-3 font-sans text-xl font-semibold text-text-primary">
                  Result
                </h3>
                <p>
                  {getProjectResult(project.slug)}
                </p>
              </div>
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

function getProjectProblem(slug: string): string {
  const problems: Record<string, string> = {
    eqahku: "Eqahku membutuhkan pendekatan digital-first untuk layanan aqiqah yang tradisional. Tantangannya adalah membuat pengalaman yang modern dan playful tanpa kehilangan rasa hormat terhadap nilai-nilai religius. Brand ini perlu menonjol di pasar yang sudah jenuh dengan website aqiqah konvensional.",
    lumera: "Sebagai brand skincare baru, Lumera membutuhkan website e-commerce yang tidak hanya menampilkan produk, tetapi juga membangun trust melalui storytelling. Tantangannya adalah menciptakan conversion funnel yang efektif sambil mempertahankan estetika premium brand.",
    "midnight-roast": "Midnight Roast, cafe late-night di Kemang, membutuhkan identitas digital yang mencerminkan suasana atmospheric dan intimate. Tantangannya adalah membuat website yang bisa menyampaikan vibe cafe melalui layar — sesuatu yang sulit dicapai dengan template biasa.",
    "syari-laundry": "Syar'i Laundry ingin memposisikan diri sebagai layanan laundry syar'i yang profesional di pasar lokal. Tantangannya adalah membuat website yang terlihat kredibel dan modern untuk bisnis lokal, dengan value proposition yang jelas tentang keunggulan syar'i.",
    naratama: "Sebagai executive coach senior, Naratama membutuhkan website personal brand yang memancarkan otoritas dan kredibilitas tanpa terlihat berlebihan. Tantangannya adalah menciptakan estetika editorial-driven yang elegan dan restraint.",
  };
  return problems[slug] || "Tantangan spesifik yang dihadapi klien dalam kebutuhan digital mereka.";
}

function getProjectStrategy(slug: string): string {
  const strategies: Record<string, string> = {
    eqahku: "Spacescale mengembangkan pendekatan digital-first dengan elemen 3D interaktif yang playful. Setiap halaman dirancang untuk memandu user dari curiosity hingga conversion, dengan navigasi yang intuitif dan visual storytelling yang kuat.",
    lumera: "Strategi yang diterapkan adalah product storytelling-first dengan conversion funnel yang terstruktur. Setiap section website dirancang untuk membangun trust secara bertahap, dari brand story hingga social proof dan CTA yang jelas.",
    "midnight-roast": "Pendekatan atmospheric design dengan cinematographic visual approach. Website dirancang seperti entering the cafe — setiap scroll menghadirkan experience yang intimate dan memorable, dengan palette warna yang warm dan typography treatment yang premium.",
    "syari-laundry": "Clean design dengan clear value proposition dan mobile-first approach. Website fokus pada conversion — memudahkan pelanggan untuk langsung menghubungi via WhatsApp, dengan informasi layanan yang tersusun rapi dan mudah dipahami.",
    naratama: "Editorial-driven design dengan tipografi sebagai hero element. Setiap halaman dirancang dengan restraint yang disengaja — minimal decoration, maximum impact. Color palette yang sophisticated dan spacing yang generous mencerminkan otoritas.",
  };
  return strategies[slug] || "Spacescale menerapkan pendekatan strategis yang disesuaikan dengan kebutuhan unik setiap klien.";
}

function getProjectResult(slug: string): string {
  const results: Record<string, string> = {
    eqahku: "Website berhasil menghadirkan pengalaman aqiqah yang modern dan digital-first. Performa Lighthouse score mencapai 95+ dengan loading time di bawah 2 detik. Elemen 3D interaktif berjalan smooth di mobile tanpa mengorbankan performa.",
    lumera: "E-commerce Lumera diluncurkan dengan conversion-optimized design. Website menampilkan product storytelling yang compelling dengan performa Lighthouse 90+ dan loading time yang cepat untuk pengalaman belanja yang seamless.",
    "midnight-roast": "Website Midnight Roast berhasil menangkap atmosfer cafe melalui digital experience. Dengan performa Lighthouse 95+ dan visual storytelling yang cinematic, website ini menjadi representasi digital yang sempurna dari brand.",
    "syari-laundry": "Website Syar'i Laundry diluncurkan dengan clean design dan mobile-first approach. Performa Lighthouse 90+ dengan conversion flow yang jelas — pengunjung bisa langsung menghubungi via WhatsApp dalam satu klik.",
    naratama: "Personal brand website untuk Naratama berhasil menghadirkan estetika editorial yang premium. Dengan performa Lighthouse 95+ dan tipografi-driven design, website ini memancarkan otoritas tanpa berlebihan.",
  };
  return results[slug] || "Project berhasil diluncurkan dengan performa dan kualitas yang sesuai standar premium Spacescale.";
}