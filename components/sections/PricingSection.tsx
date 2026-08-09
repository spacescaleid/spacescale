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
  // TODO:
  // Paste seluruh data paket "Jasa Pembuatan Website Profesional" di sini
  // dengan format object seperti contoh berikut:
  //
  // {
  //   category: "Paket Personal & Perayaan",
  //   tier: "Starter",
  //   title: "Nama Paket",
  //   description: "Deskripsi singkat paket.",
  //   price: "Rp99.000",
  //   originalPrice: "Rp149.000",
  //   badge: "⭐ Populer",
  //   features: [
  //     "1 halaman website",
  //     "Desain responsif",
  //     "Tombol WhatsApp",
  //   ],
  //   ctaLabel: "Pesan Sekarang",
  // },
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
    <section id="pricing" className="bg-primary py-section">
      <div className="mx-auto max-w-content px-6">
        <SectionHeader
          label="Harga Layanan"
          title="Pilih paket website yang sesuai dengan kebutuhan brand Anda"
          subtitle="Semua paket dirancang untuk tampil profesional, mudah diakses, dan siap membantu brand Anda terlihat lebih meyakinkan secara online."
          className="mb-16"
        />

        {groupedCategories.length === 0 ? (
          <Reveal
            variant="fadeUp"
            className="rounded-2xl border border-light bg-card p-6 shadow-sm"
          >
            <p className="text-body-md text-secondary">
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
                    isBundleCategory && "rounded-2xl bg-secondary p-6 md:p-8"
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
                              "flex h-full flex-col rounded-2xl border bg-card p-6 shadow-sm transition-transform duration-300",
                              isPopular
                                ? "border-accent-electric shadow-md md:scale-105"
                                : "border-light"
                            )}
                          >
                            <div className="mb-6 flex items-start justify-between gap-3">
                              <span className="inline-flex rounded-full border border-light bg-secondary px-3 py-1 text-meta-sm font-semibold uppercase tracking-wide text-secondary">
                                {pkg.tier}
                              </span>

                              {pkg.badge ? (
                                <span
                                  className={cn(
                                    "inline-flex rounded-full px-3 py-1 text-meta-sm font-semibold text-on-dark",
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
                              <h3 className="font-sans text-body-lg font-bold text-primary">
                                {pkg.title}
                              </h3>
                              <p className="text-body-sm text-secondary">
                                {pkg.description}
                              </p>
                            </div>

                            <div className="mb-6 border-b border-light pb-6">
                              <div className="flex flex-wrap items-end">
                                <span className="font-serif text-display-sm text-primary md:text-display-md">
                                  {pkg.price}
                                </span>

                                {pkg.originalPrice ? (
                                  <span className="ml-2 text-body-sm text-muted line-through">
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
                                  <span className="text-body-sm text-secondary">
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