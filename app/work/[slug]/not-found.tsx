import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center px-5 py-32 md:px-[5%]">
      <div className="text-center">
        <p className="mb-4 font-mono text-meta-sm uppercase tracking-[0.2em] text-text-muted">
          404
        </p>
        <h1 className="mb-6 font-sans text-display-lg font-bold tracking-tight">
          Project tidak ditemukan
        </h1>
        <p className="mx-auto mb-10 max-w-md text-body-md text-text-secondary">
          Mungkin link-nya salah, atau project belum dipublish. Coba cek
          portfolio lengkap kami.
        </p>
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 rounded-full bg-text-primary px-7 py-3.5 font-sans text-body-sm font-semibold text-bg-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-navy"
        >
          Lihat Semua Karya
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>
    </section>
  );
}