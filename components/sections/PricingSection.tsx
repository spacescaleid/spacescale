"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const CATEGORY_ORDER = [
  "Paket Personal & Perayaan",
  "Paket Undangan Digital",
  "Paket Bisnis & UMKM",
  "Paket Portfolio Personal",
  "Paket Company Profile",
  "Paket Website Event",
  "Paket Bundel Terbaik",
] as const;

type PricingCategory = (typeof CATEGORY_ORDER)[number];

type PricingPackage = {
  category: PricingCategory;
  tier: string;
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  features: string[];
  ctaLabel: string;
};

const CATEGORY_COPY: Record<
  PricingCategory,
  {
    label: string;
    subtitle: string;
  }
> = {
  "Paket Personal & Perayaan": {
    label: "Kategori 01",
    subtitle:
      "Untuk kebutuhan personal, halaman perayaan, dan landing page sederhana yang cepat online.",
  },
  "Paket Undangan Digital": {
    label: "Kategori 02",
    subtitle:
      "Cocok untuk undangan online dengan tampilan rapi, mudah dibagikan, dan tetap elegan.",
  },
  "Paket Bisnis & UMKM": {
    label: "Kategori 03",
    subtitle:
      "Untuk promosi bisnis, penawaran layanan, dan kebutuhan konversi yang lebih profesional.",
  },
  "Paket Portfolio Personal": {
    label: "Kategori 04",
    subtitle:
      "Bangun personal branding untuk freelancer, kreator, profesional, dan talenta independen.",
  },
  "Paket Company Profile": {
    label: "Kategori 05",
    subtitle:
      "Website representatif untuk membangun trust, kredibilitas, dan presentasi perusahaan.",
  },
  "Paket Website Event": {
    label: "Kategori 06",
    subtitle:
      "Landing page event dengan informasi jelas, alur registrasi rapi, dan CTA yang kuat.",
  },
  "Paket Bundel Terbaik": {
    label: "Bundel Spesial",
    subtitle:
      "Kombinasi paket paling worth it untuk brand yang ingin tampil lebih lengkap sekaligus hemat.",
  },
};

const PRICING_PACKAGES: PricingPackage[] = [
  // ── Paket Personal & Perayaan ──
  {
    category: "Paket Personal & Perayaan",
    tier: "Starter",
    title: "Website Ucapan Ulang Tahun",
    description:
      "Halaman ucapan spesial yang interaktif dan berkesan.",
    price: "Rp99.000",
    originalPrice: "Rp149.000",
    features: [
      "1 halaman ucapan custom",
      "Animasi konfeti & efek interaktif",
      "Musik latar pilihan",
      "Upload foto pribadi",
      "Link aktif 30 hari",
      "Gratis 1x revisi",
    ],
    ctaLabel: "Pesan Sekarang",
  },
  {
    category: "Paket Personal & Perayaan",
    tier: "Plus",
    title: "Website Ucapan Ulang Tahun Premium",
    description:
      "Versi lebih lengkap untuk momen yang lebih berkesan.",
    price: "Rp149.000",
    originalPrice: "Rp199.000",
    features: [
      "Semua fitur Starter",
      "Galeri foto (maks. 10 foto)",
      "Pesan dari keluarga & teman",
      "Countdown ulang tahun",
      "Link aktif 60 hari",
      "Gratis 2x revisi",
    ],
    ctaLabel: "Pesan Sekarang",
  },

  // ── Paket Undangan Digital ──
  {
    category: "Paket Undangan Digital",
    tier: "Starter",
    title: "Undangan Digital Simpel",
    description:
      "Elegan, hemat kertas, dan mudah dibagikan.",
    price: "Rp129.000",
    originalPrice: "Rp199.000",
    features: [
      "Desain elegan pilihan",
      "Countdown acara",
      "Tombol Google Maps lokasi",
      "Mobile-friendly",
      "Link mudah dibagikan",
      "Gratis 2x revisi",
    ],
    ctaLabel: "Pesan Sekarang",
  },
  {
    category: "Paket Undangan Digital",
    tier: "Pro",
    title: "Undangan Digital Premium",
    description:
      "Lengkap dengan RSVP dan fitur tamu.",
    price: "Rp249.000",
    originalPrice: "Rp349.000",
    features: [
      "Semua fitur Simpel",
      "Form RSVP online",
      "Nama tamu otomatis",
      "Galeri foto & love story",
      "Musik latar romantis",
      "Gratis 3x revisi",
    ],
    ctaLabel: "Pesan Sekarang",
  },

  // ── Paket Bisnis & UMKM ──
  {
    category: "Paket Bisnis & UMKM",
    tier: "Pro",
    title: "Landing Page UMKM Basic",
    description:
      "Cocok untuk toko online dan usaha kecil.",
    price: "Rp299.000",
    originalPrice: "Rp499.000",
    features: [
      "1 halaman landing page",
      "Tombol WhatsApp langsung",
      "Menampilkan hingga 6 produk/jasa",
      "Integrasi Google Maps",
      "Desain mobile-first",
      "Gratis 3x revisi",
    ],
    ctaLabel: "Pesan Sekarang",
  },
  {
    category: "Paket Bisnis & UMKM",
    tier: "Pro",
    title: "Landing Page UMKM Plus",
    description:
      "Untuk meningkatkan konversi dan jangkauan bisnis.",
    price: "Rp449.000",
    originalPrice: "Rp699.000",
    features: [
      "Semua fitur Basic",
      "Produk/jasa tanpa batas",
      "Form pemesanan online",
      "Testimoni pelanggan",
      "SEO dasar terpasang",
      "Gratis 5x revisi",
    ],
    ctaLabel: "Pesan Sekarang",
  },

  // ── Paket Portfolio Personal ──
  {
    category: "Paket Portfolio Personal",
    tier: "Pro",
    title: "Portfolio Personal Starter",
    description:
      "Tampilkan karya dan keahlian Anda secara profesional.",
    price: "Rp349.000",
    originalPrice: "Rp599.000",
    features: [
      "3 halaman (Home, Portfolio, Kontak)",
      "Galeri karya visual",
      "Profil & keahlian",
      "Form kontak aktif",
      "Desain responsif",
      "Gratis 3x revisi",
    ],
    ctaLabel: "Pesan Sekarang",
  },
  {
    category: "Paket Portfolio Personal",
    tier: "Premium",
    title: "Portfolio Personal Premium",
    description:
      "Portfolio lengkap untuk freelancer dan profesional muda.",
    price: "Rp549.000",
    originalPrice: "Rp799.000",
    badge: "⭐ Populer",
    features: [
      "5+ halaman lengkap",
      "Filter kategori karya",
      "Halaman CV digital",
      "Integrasi media sosial",
      "Google Analytics",
      "Gratis 5x revisi",
    ],
    ctaLabel: "Pesan Sekarang",
  },

  // ── Paket Company Profile ──
  {
    category: "Paket Company Profile",
    tier: "Pro",
    title: "Company Profile Basic",
    description:
      "Perkuat citra dan kredibilitas bisnis Anda.",
    price: "Rp499.000",
    originalPrice: "Rp799.000",
    features: [
      "4 halaman (Home, Tentang, Layanan, Kontak)",
      "Profil perusahaan",
      "Daftar layanan/produk",
      "Form kontak aktif",
      "Desain profesional",
      "Gratis 3x revisi",
    ],
    ctaLabel: "Pesan Sekarang",
  },
  {
    category: "Paket Company Profile",
    tier: "Premium",
    title: "Company Profile Premium",
    description:
      "Representasi bisnis yang lebih profesional dan eksklusif.",
    price: "Rp799.000",
    originalPrice: "Rp1.200.000",
    features: [
      "6+ halaman lengkap",
      "Profil tim & struktur organisasi",
      "Portfolio proyek",
      "Blog/berita perusahaan",
      "SEO & Google Analytics",
      "Revisi unlimited selama 7 hari",
    ],
    ctaLabel: "Pesan Sekarang",
  },

  // ── Paket Website Event ──
  {
    category: "Paket Website Event",
    tier: "Pro",
    title: "Website Event Basic",
    description:
      "Ideal untuk seminar, workshop, dan komunitas.",
    price: "Rp399.000",
    originalPrice: "Rp699.000",
    features: [
      "Halaman event lengkap",
      "Countdown acara",
      "Form registrasi online",
      "Profil pembicara",
      "Jadwal & lokasi acara",
      "Gratis 3x revisi",
    ],
    ctaLabel: "Pesan Sekarang",
  },
  {
    category: "Paket Website Event",
    tier: "Premium",
    title: "Website Event Premium",
    description:
      "Registrasi dan manajemen peserta yang terintegrasi.",
    price: "Rp649.000",
    originalPrice: "Rp999.000",
    features: [
      "Semua fitur Basic",
      "Dashboard manajemen peserta",
      "E-ticket otomatis via email",
      "Multi sesi & rundown acara",
      "Integrasi pembayaran",
      "Gratis 5x revisi",
    ],
    ctaLabel: "Pesan Sekarang",
  },

  // ── Paket Bundel Terbaik ──
  {
    category: "Paket Bundel Terbaik",
    tier: "⭐ Bundel",
    title: "Paket Bisnis Siap Online",
    description:
      "Landing Page + Company Profile + SEO — hemat Rp400.000.",
    price: "Rp699.000",
    originalPrice: "Rp1.100.000",
    badge: "⭐ Populer",
    features: [
      "Landing page konversi tinggi",
      "Company Profile 4 halaman",
      "Setup SEO & Google Business Profile",
      "Domain .com gratis 1 tahun",
      "Hosting gratis 1 tahun",
      "Revisi unlimited selama 7 hari",
    ],
    ctaLabel: "Mulai Sekarang",
  },
  {
    category: "Paket Bundel Terbaik",
    tier: "Bundel",
    title: "Paket Event Lengkap",
    description:
      "Website Event + Undangan Digital — hemat Rp178.000.",
    price: "Rp499.000",
    originalPrice: "Rp677.000",
    features: [
      "Website event lengkap",
      "Countdown acara",
      "RSVP & form registrasi",
      "Profil pembicara & rundown",
      "Gratis 5x revisi",
    ],
    ctaLabel: "Pesan Sekarang",
  },
  {
    category: "Paket Bundel Terbaik",
    tier: "Bundel",
    title: "Paket Kreator Digital",
    description:
      "Portfolio Personal + Landing Page Bisnis — hemat Rp250.000.",
    price: "Rp549.000",
    originalPrice: "Rp798.000",
    features: [
      "Portfolio personal 3 halaman",
      "Landing page bisnis/jasa",
      "Galeri karya profesional",
      "Form pemesanan online",
      "Integrasi WhatsApp & media sosial",
      "Gratis 5x revisi",
    ],
    ctaLabel: "Pesan Sekarang",
  },
];

function getGridClassName(count: number) {
  return cn(
    "grid grid-cols-1 gap-6 md:grid-cols-2",
    count === 1 && "lg:grid-cols-1",
    count === 2 && "lg:grid-cols-2",
    count >= 3 && "lg:grid-cols-3"
  );
}

export function PricingSection() {
  const groupedCategories = CATEGORY_ORDER.map((category) => ({
    category,
    items: PRICING_PACKAGES.filter((item) => item.category === category),
  })).filter((group) => group.items.length > 0);

  return (
    <section id="pricing" className="bg-bg-primary py-section">
      <div className="mx-auto max-w-content px-6">
        <SectionHeader
          label="Harga Layanan"
          title={
            <>
              Pilih paket{" "}
              <span className="italic-serif text-brand-navy">
                website
              </span>{" "}
              sesuai kebutuhan brand Anda
            </>
          }
          subtitle="Semua paket dirancang untuk tampil profesional, mudah diakses, dan siap membantu brand Anda terlihat lebih meyakinkan secara online."
          className="mb-16"
        />

        {groupedCategories.length === 0 ? (
          <Reveal
            variant="fadeUp"
            className="rounded-2xl border border-border-light bg-bg-card p-6 shadow-sm"
          >
            <p className="text-body-md text-text-secondary">
              Tempelkan data paket baru ke <span className="font-semibold">PRICING_PACKAGES</span>{" "}
              di file ini.
            </p>
          </Reveal>
        ) : (
          <div className="space-y-16">
            {groupedCategories.map(({ category, items }) => {
              const isBundleCategory = category === "Paket Bundel Terbaik";
              const categoryMeta = CATEGORY_COPY[category];

              return (
                <div
                  key={category}
                  className={cn(
                    "space-y-8",
                    isBundleCategory && "rounded-2xl bg-bg-secondary p-6 md:p-8"
                  )}
                >
                  <SectionHeader
                    label={categoryMeta.label}
                    title={category}
                    subtitle={categoryMeta.subtitle}
                    align="left"
                    className="max-w-3xl"
                  />

                  <div className={getGridClassName(items.length)}>
                    {items.map((pkg, index) => {
                      const isPopular =
                        pkg.badge?.toLowerCase().includes("populer") ?? false;

                      return (
                        <Reveal
                          key={`${pkg.category}-${pkg.tier}-${pkg.title}`}
                          as="article"
                          variant="fadeUp"
                          delay={index * 0.1}
                          className="h-full"
                        >
                          <div
                            className={cn(
                              "flex h-full flex-col rounded-2xl border bg-bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
                              isPopular
                                ? "border-accent-electric shadow-md md:scale-105"
                                : "border-border-light hover:border-brand-navy"
                            )}
                          >
                            <div className="mb-6 flex items-start justify-between gap-3">
                              <span className="inline-flex rounded-full border border-border-light bg-bg-secondary px-3 py-1 text-meta-sm font-semibold uppercase tracking-wide text-text-secondary">
                                {pkg.tier}
                              </span>

                              {pkg.badge ? (
                                <span
                                  className={cn(
                                    "inline-flex rounded-full px-3 py-1 text-meta-sm font-semibold text-text-on-dark",
                                    isPopular
                                      ? "bg-accent-electric animate-pulse"
                                      : "bg-accent-pop"
                                  )}
                                >
                                  {pkg.badge}
                                </span>
                              ) : null}
                            </div>

                            <div className="mb-6 space-y-3">
                              <h3 className="font-sans text-body-lg font-bold text-text-primary">
                                {pkg.title}
                              </h3>
                              <p className="text-body-sm text-text-secondary">
                                {pkg.description}
                              </p>
                            </div>

                            <div className="mb-6 border-b border-border-light pb-6">
                              <div className="flex flex-wrap items-end">
                                <span className="font-serif text-display-sm text-text-primary md:text-display-md">
                                  {pkg.price}
                                </span>

                                {pkg.originalPrice ? (
                                  <span className="ml-2 text-body-sm text-text-muted line-through">
                                    {pkg.originalPrice}
                                  </span>
                                ) : null}
                              </div>
                            </div>

                            <ul className="mb-8 space-y-3">
                              {pkg.features.map((feature) => (
                                <li
                                  key={`${pkg.title}-${feature}`}
                                  className="flex items-start gap-3"
                                >
                                  <Check
                                    className="mt-0.5 h-4 w-4 shrink-0 text-accent-success"
                                    aria-hidden="true"
                                  />
                                  <span className="text-body-sm text-text-secondary">
                                    {feature}
                                  </span>
                                </li>
                              ))}
                            </ul>

                            <Button
                              href="#kontak"
                              variant={isPopular ? "electric" : "primary"}
                              size="md"
                              withArrow
                              className="mt-auto w-full justify-center"
                            >
                              {pkg.ctaLabel}
                            </Button>
                          </div>
                        </Reveal>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default PricingSection;