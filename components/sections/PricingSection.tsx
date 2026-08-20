"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n/useTranslation";
import type { Locale } from "@/lib/i18n/translations";

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

type LocalizedString = { id: string; en: string };

type PricingPackage = {
  category: PricingCategory;
  tier: string;
  title: LocalizedString;
  description: LocalizedString;
  price: string;
  originalPrice?: string;
  badge?: LocalizedString;
  features: LocalizedString[];
  ctaLabel: LocalizedString;
};

const CATEGORY_COPY: Record<
  PricingCategory,
  {
    labelKey: string;
    subtitleKey: string;
  }
> = {
  "Paket Personal & Perayaan": {
    labelKey: "pri.sec.cat.01",
    subtitleKey: "pri.sec.sub.01",
  },
  "Paket Undangan Digital": {
    labelKey: "pri.sec.cat.02",
    subtitleKey: "pri.sec.sub.02",
  },
  "Paket Bisnis & UMKM": {
    labelKey: "pri.sec.cat.03",
    subtitleKey: "pri.sec.sub.03",
  },
  "Paket Portfolio Personal": {
    labelKey: "pri.sec.cat.04",
    subtitleKey: "pri.sec.sub.04",
  },
  "Paket Company Profile": {
    labelKey: "pri.sec.cat.05",
    subtitleKey: "pri.sec.sub.05",
  },
  "Paket Website Event": {
    labelKey: "pri.sec.cat.06",
    subtitleKey: "pri.sec.sub.06",
  },
  "Paket Bundel Terbaik": {
    labelKey: "pri.sec.cat.bundle",
    subtitleKey: "pri.sec.sub.bundle",
  },
};

const PRICING_PACKAGES: PricingPackage[] = [
  {
    category: "Paket Personal & Perayaan",
    tier: "Starter",
    title: { id: "Website Ucapan Ulang Tahun", en: "Birthday Greeting Website" },
    description: { id: "Halaman ucapan spesial yang interaktif dan berkesan.", en: "A special interactive greeting page that leaves an impression." },
    price: "Rp99.000",
    originalPrice: "Rp149.000",
    features: [
      { id: "1 halaman ucapan custom", en: "1 custom greeting page" },
      { id: "Animasi konfeti & efek interaktif", en: "Confetti animation & interactive effects" },
      { id: "Musik latar pilihan", en: "Background music options" },
      { id: "Upload foto pribadi", en: "Upload personal photos" },
      { id: "Link aktif 30 hari", en: "Link active for 30 days" },
      { id: "Gratis 1x revisi", en: "Free 1 revision" },
    ],
    ctaLabel: { id: "Pesan Sekarang", en: "Order Now" },
  },
  {
    category: "Paket Personal & Perayaan",
    tier: "Plus",
    title: { id: "Website Ucapan Ulang Tahun Premium", en: "Premium Birthday Greeting Website" },
    description: { id: "Versi lebih lengkap untuk momen yang lebih berkesan.", en: "A more complete version for a more memorable moment." },
    price: "Rp149.000",
    originalPrice: "Rp199.000",
    features: [
      { id: "Semua fitur Starter", en: "All Starter features" },
      { id: "Galeri foto (maks. 10 foto)", en: "Photo gallery (max. 10 photos)" },
      { id: "Pesan dari keluarga & teman", en: "Messages from family & friends" },
      { id: "Countdown ulang tahun", en: "Birthday countdown" },
      { id: "Link aktif 60 hari", en: "Link active for 60 days" },
      { id: "Gratis 2x revisi", en: "Free 2 revisions" },
    ],
    ctaLabel: { id: "Pesan Sekarang", en: "Order Now" },
  },
  {
    category: "Paket Undangan Digital",
    tier: "Starter",
    title: { id: "Undangan Digital Simpel", en: "Simple Digital Invitation" },
    description: { id: "Elegan, hemat kertas, dan mudah dibagikan.", en: "Elegant, paper-saving, and easy to share." },
    price: "Rp129.000",
    originalPrice: "Rp199.000",
    features: [
      { id: "Desain elegan pilihan", en: "Elegant design options" },
      { id: "Countdown acara", en: "Event countdown" },
      { id: "Tombol Google Maps lokasi", en: "Google Maps location button" },
      { id: "Mobile-friendly", en: "Mobile-friendly" },
      { id: "Link mudah dibagikan", en: "Easy to share link" },
      { id: "Gratis 2x revisi", en: "Free 2 revisions" },
    ],
    ctaLabel: { id: "Pesan Sekarang", en: "Order Now" },
  },
  {
    category: "Paket Undangan Digital",
    tier: "Pro",
    title: { id: "Undangan Digital Premium", en: "Premium Digital Invitation" },
    description: { id: "Lengkap dengan RSVP dan fitur tamu.", en: "Complete with RSVP and guest features." },
    price: "Rp249.000",
    originalPrice: "Rp349.000",
    features: [
      { id: "Semua fitur Simpel", en: "All Simple features" },
      { id: "Form RSVP online", en: "Online RSVP form" },
      { id: "Nama tamu otomatis", en: "Automatic guest names" },
      { id: "Galeri foto & love story", en: "Photo gallery & love story" },
      { id: "Musik latar romantis", en: "Romantic background music" },
      { id: "Gratis 3x revisi", en: "Free 3 revisions" },
    ],
    ctaLabel: { id: "Pesan Sekarang", en: "Order Now" },
  },
  {
    category: "Paket Bisnis & UMKM",
    tier: "Pro",
    title: { id: "Landing Page UMKM Basic", en: "SME Landing Page Basic" },
    description: { id: "Cocok untuk toko online dan usaha kecil.", en: "Perfect for online stores and small businesses." },
    price: "Rp299.000",
    originalPrice: "Rp499.000",
    features: [
      { id: "1 halaman landing page", en: "1 landing page" },
      { id: "Tombol WhatsApp langsung", en: "Direct WhatsApp button" },
      { id: "Menampilkan hingga 6 produk/jasa", en: "Display up to 6 products/services" },
      { id: "Integrasi Google Maps", en: "Google Maps integration" },
      { id: "Desain mobile-first", en: "Mobile-first design" },
      { id: "Gratis 3x revisi", en: "Free 3 revisions" },
    ],
    ctaLabel: { id: "Pesan Sekarang", en: "Order Now" },
  },
  {
    category: "Paket Bisnis & UMKM",
    tier: "Pro",
    title: { id: "Landing Page UMKM Plus", en: "SME Landing Page Plus" },
    description: { id: "Untuk meningkatkan konversi dan jangkauan bisnis.", en: "To boost business conversion and reach." },
    price: "Rp449.000",
    originalPrice: "Rp699.000",
    features: [
      { id: "Semua fitur Basic", en: "All Basic features" },
      { id: "Produk/jasa tanpa batas", en: "Unlimited products/services" },
      { id: "Form pemesanan online", en: "Online order form" },
      { id: "Testimoni pelanggan", en: "Customer testimonials" },
      { id: "SEO dasar terpasang", en: "Basic SEO installed" },
      { id: "Gratis 5x revisi", en: "Free 5 revisions" },
    ],
    ctaLabel: { id: "Pesan Sekarang", en: "Order Now" },
  },
  {
    category: "Paket Portfolio Personal",
    tier: "Pro",
    title: { id: "Portfolio Personal Starter", en: "Personal Portfolio Starter" },
    description: { id: "Tampilkan karya dan keahlian Anda secara profesional.", en: "Showcase your work and skills professionally." },
    price: "Rp349.000",
    originalPrice: "Rp599.000",
    features: [
      { id: "3 halaman (Home, Portfolio, Kontak)", en: "3 pages (Home, Portfolio, Contact)" },
      { id: "Galeri karya visual", en: "Visual work gallery" },
      { id: "Profil & keahlian", en: "Profile & skills" },
      { id: "Form kontak aktif", en: "Active contact form" },
      { id: "Desain responsif", en: "Responsive design" },
      { id: "Gratis 3x revisi", en: "Free 3 revisions" },
    ],
    ctaLabel: { id: "Pesan Sekarang", en: "Order Now" },
  },
  {
    category: "Paket Portfolio Personal",
    tier: "Premium",
    title: { id: "Portfolio Personal Premium", en: "Personal Portfolio Premium" },
    description: { id: "Portfolio lengkap untuk freelancer dan profesional muda.", en: "Complete portfolio for freelancers and young professionals." },
    price: "Rp549.000",
    originalPrice: "Rp799.000",
    badge: { id: "Populer", en: "Popular" },
    features: [
      { id: "5+ halaman lengkap", en: "5+ complete pages" },
      { id: "Filter kategori karya", en: "Work category filter" },
      { id: "Halaman CV digital", en: "Digital CV page" },
      { id: "Integrasi media sosial", en: "Social media integration" },
      { id: "Google Analytics", en: "Google Analytics" },
      { id: "Gratis 5x revisi", en: "Free 5 revisions" },
    ],
    ctaLabel: { id: "Pesan Sekarang", en: "Order Now" },
  },
  {
    category: "Paket Company Profile",
    tier: "Pro",
    title: { id: "Company Profile Basic", en: "Company Profile Basic" },
    description: { id: "Perkuat citra dan kredibilitas bisnis Anda.", en: "Strengthen your business image and credibility." },
    price: "Rp499.000",
    originalPrice: "Rp799.000",
    features: [
      { id: "4 halaman (Home, Tentang, Layanan, Kontak)", en: "4 pages (Home, About, Services, Contact)" },
      { id: "Profil perusahaan", en: "Company profile" },
      { id: "Daftar layanan/produk", en: "Service/product listing" },
      { id: "Form kontak aktif", en: "Active contact form" },
      { id: "Desain profesional", en: "Professional design" },
      { id: "Gratis 3x revisi", en: "Free 3 revisions" },
    ],
    ctaLabel: { id: "Pesan Sekarang", en: "Order Now" },
  },
  {
    category: "Paket Company Profile",
    tier: "Premium",
    title: { id: "Company Profile Premium", en: "Company Profile Premium" },
    description: { id: "Representasi bisnis yang lebih profesional dan eksklusif.", en: "A more professional and exclusive business representation." },
    price: "Rp799.000",
    originalPrice: "Rp1.200.000",
    features: [
      { id: "6+ halaman lengkap", en: "6+ complete pages" },
      { id: "Profil tim & struktur organisasi", en: "Team profile & org structure" },
      { id: "Portfolio proyek", en: "Project portfolio" },
      { id: "Blog/berita perusahaan", en: "Company blog/news" },
      { id: "SEO & Google Analytics", en: "SEO & Google Analytics" },
      { id: "Revisi unlimited selama 7 hari", en: "Unlimited revisions for 7 days" },
    ],
    ctaLabel: { id: "Pesan Sekarang", en: "Order Now" },
  },
  {
    category: "Paket Website Event",
    tier: "Pro",
    title: { id: "Website Event Basic", en: "Event Website Basic" },
    description: { id: "Ideal untuk seminar, workshop, dan komunitas.", en: "Ideal for seminars, workshops, and communities." },
    price: "Rp399.000",
    originalPrice: "Rp699.000",
    features: [
      { id: "Halaman event lengkap", en: "Complete event page" },
      { id: "Countdown acara", en: "Event countdown" },
      { id: "Form registrasi online", en: "Online registration form" },
      { id: "Profil pembicara", en: "Speaker profiles" },
      { id: "Jadwal & lokasi acara", en: "Schedule & event location" },
      { id: "Gratis 3x revisi", en: "Free 3 revisions" },
    ],
    ctaLabel: { id: "Pesan Sekarang", en: "Order Now" },
  },
  {
    category: "Paket Website Event",
    tier: "Premium",
    title: { id: "Website Event Premium", en: "Event Website Premium" },
    description: { id: "Registrasi dan manajemen peserta yang terintegrasi.", en: "Integrated registration and attendee management." },
    price: "Rp649.000",
    originalPrice: "Rp999.000",
    features: [
      { id: "Semua fitur Basic", en: "All Basic features" },
      { id: "Dashboard manajemen peserta", en: "Attendee management dashboard" },
      { id: "E-ticket otomatis via email", en: "Auto e-ticket via email" },
      { id: "Multi sesi & rundown acara", en: "Multi-session & event rundown" },
      { id: "Integrasi pembayaran", en: "Payment integration" },
      { id: "Gratis 5x revisi", en: "Free 5 revisions" },
    ],
    ctaLabel: { id: "Pesan Sekarang", en: "Order Now" },
  },
  {
    category: "Paket Bundel Terbaik",
    tier: "Bundel",
    title: { id: "Paket Bisnis Siap Online", en: "Ready Online Business Package" },
    description: { id: "Landing Page + Company Profile + SEO — hemat Rp400.000.", en: "Landing Page + Company Profile + SEO — save Rp400k." },
    price: "Rp699.000",
    originalPrice: "Rp1.100.000",
    badge: { id: "Populer", en: "Popular" },
    features: [
      { id: "Landing page konversi tinggi", en: "High-converting landing page" },
      { id: "Company Profile 4 halaman", en: "4-page Company Profile" },
      { id: "Setup SEO & Google Business Profile", en: "SEO & Google Business Profile setup" },
      { id: "Domain .com gratis 1 tahun", en: "Free .com domain for 1 year" },
      { id: "Hosting gratis 1 tahun", en: "Free hosting for 1 year" },
      { id: "Revisi unlimited selama 7 hari", en: "Unlimited revisions for 7 days" },
    ],
    ctaLabel: { id: "Mulai Sekarang", en: "Get Started" },
  },
  {
    category: "Paket Bundel Terbaik",
    tier: "Bundel",
    title: { id: "Paket Event Lengkap", en: "Complete Event Package" },
    description: { id: "Website Event + Undangan Digital — hemat Rp178.000.", en: "Event Website + Digital Invitation — save Rp178k." },
    price: "Rp499.000",
    originalPrice: "Rp677.000",
    features: [
      { id: "Website event lengkap", en: "Complete event website" },
      { id: "Countdown acara", en: "Event countdown" },
      { id: "RSVP & form registrasi", en: "RSVP & registration form" },
      { id: "Profil pembicara & rundown", en: "Speaker profiles & rundown" },
      { id: "Gratis 5x revisi", en: "Free 5 revisions" },
    ],
    ctaLabel: { id: "Pesan Sekarang", en: "Order Now" },
  },
  {
    category: "Paket Bundel Terbaik",
    tier: "Bundel",
    title: { id: "Paket Kreator Digital", en: "Digital Creator Package" },
    description: { id: "Portfolio Personal + Landing Page Bisnis — hemat Rp250.000.", en: "Personal Portfolio + Business Landing Page — save Rp250k." },
    price: "Rp549.000",
    originalPrice: "Rp798.000",
    features: [
      { id: "Portfolio personal 3 halaman", en: "3-page personal portfolio" },
      { id: "Landing page bisnis/jasa", en: "Business/service landing page" },
      { id: "Galeri karya profesional", en: "Professional work gallery" },
      { id: "Form pemesanan online", en: "Online order form" },
      { id: "Integrasi WhatsApp & media sosial", en: "WhatsApp & social media integration" },
      { id: "Gratis 5x revisi", en: "Free 5 revisions" },
    ],
    ctaLabel: { id: "Pesan Sekarang", en: "Order Now" },
  },
];

function getGridClassName(count: number) {
  return cn(
    "grid grid-cols-1 gap-5 sm:grid-cols-2",
    count === 1 && "lg:grid-cols-1 max-w-md",
    count === 2 && "lg:grid-cols-2",
    count >= 3 && "lg:grid-cols-3"
  );
}

function CategoryAccordion({
  category,
  items,
  isOpen,
  onToggle,
  locale,
}: {
  category: PricingCategory;
  items: PricingPackage[];
  isOpen: boolean;
  onToggle: () => void;
  locale: Locale;
}) {
  const { t } = useTranslation();
  const isBundleCategory = category === "Paket Bundel Terbaik";
  const categoryMeta = CATEGORY_COPY[category];
  const panelId = `pricing-panel-${category}`;
  const triggerId = `pricing-trigger-${category}`;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-3xl border transition-all duration-300",
        isOpen
          ? "border-brand-navy shadow-[0_8px_30px_rgba(10,14,31,0.06)]"
          : "border-border-light hover:border-text-primary/15",
        isBundleCategory && "bg-bg-secondary"
      )}
    >
      <h3>
        <button
          type="button"
          id={triggerId}
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-4 p-7 text-left transition-colors duration-200 hover:bg-bg-secondary/40 md:p-8"
        >
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="font-mono text-meta-sm uppercase tracking-[0.15em] text-text-muted">
                {t(categoryMeta.labelKey as any)}
              </span>
              <h4 className="font-sans text-display-sm font-bold leading-tight text-text-primary">
                {category}
              </h4>
            </div>
          </div>
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
            <div className="px-7 pb-8 md:px-8 md:pb-10">
              <p className="mb-8 max-w-xl text-body-md leading-relaxed text-text-secondary">
                {t(categoryMeta.subtitleKey as any)}
              </p>

              <div className={getGridClassName(items.length)}>
                {items.map((pkg) => {
                  const isPopular =
                    (pkg.badge?.id.toLowerCase().includes("populer") ?? false) ||
                    (pkg.badge?.en.toLowerCase().includes("popular") ?? false);

                  return (
                    <article
                      key={`${pkg.category}-${pkg.tier}-${pkg.title.id}`}
                      className="h-full"
                    >
                      <div
                        className={cn(
                          "group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-bg-card transition-all duration-400 ease-smooth hover:-translate-y-1.5",
                          isPopular
                            ? "border-accent-electric shadow-[0_20px_40px_rgba(79,142,247,0.15)] md:scale-[1.02]"
                            : "border-border-light hover:border-brand-navy hover:shadow-[0_20px_40px_rgba(10,14,31,0.08)]"
                        )}
                      >
                        <div
                          className={cn(
                            "absolute left-0 top-0 h-1 w-full origin-left scale-x-0 transition-transform duration-400 group-hover:scale-x-100",
                            isPopular
                              ? "bg-gradient-to-r from-accent-electric to-accent-pop"
                              : "bg-gradient-to-r from-brand-navy to-accent-electric"
                          )}
                          aria-hidden="true"
                        />

                        {isPopular && (
                          <div
                            className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent-electric/10 blur-3xl"
                            aria-hidden="true"
                          />
                        )}

                        <div className="relative flex flex-1 flex-col p-6 md:p-7">
                          <div className="mb-5 flex items-center justify-between">
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-border-light bg-bg-secondary px-3.5 py-1.5 font-mono text-meta-sm font-semibold uppercase tracking-[0.1em] text-text-secondary">
                              {pkg.tier}
                            </span>
                            {pkg.badge && (
                              <span
                                className={cn(
                                  "inline-flex items-center gap-1 rounded-full px-3 py-1.5 font-sans text-[0.7rem] font-bold uppercase tracking-wider shadow-sm",
                                  isPopular
                                    ? "bg-gradient-to-r from-accent-electric to-accent-pop text-white"
                                    : "bg-accent-pop text-white"
                                )}
                              >
                                {pkg.badge[locale]}
                              </span>
                            )}
                          </div>

                          <h5 className="mb-2 font-sans text-[1.2rem] font-bold leading-snug text-text-primary group-hover:text-brand-navy transition-colors duration-300">
                            {pkg.title[locale]}
                          </h5>
                          <p className="mb-6 text-body-sm leading-relaxed text-text-secondary">
                            {pkg.description[locale]}
                          </p>

                          <div className="mb-6 rounded-2xl bg-bg-secondary/50 px-4 py-4 text-center">
                            <span className="font-serif text-2xl font-bold text-text-primary md:text-3xl">
                              {pkg.price}
                            </span>
                            {pkg.originalPrice && (
                              <span className="mt-1 block text-xs text-text-muted line-through">
                                {pkg.originalPrice}
                              </span>
                            )}
                          </div>

                          <ul className="mb-6 flex-1 space-y-2">
                            {pkg.features.map((feature) => (
                              <li
                                key={`${pkg.title.id}-${feature.id}`}
                                className="flex items-start gap-2.5"
                              >
                                <Check
                                  className="mt-0.5 h-4 w-4 shrink-0 text-accent-success"
                                  aria-hidden="true"
                                />
                                <span className="text-[0.82rem] leading-snug text-text-primary/80">
                                  {feature[locale]}
                                </span>
                              </li>
                            ))}
                          </ul>

                          <Button
                            href="#kontak"
                            variant={isPopular ? "electric" : "primary"}
                            size="md"
                            withArrow
                            className="w-full justify-center"
                          >
                            {pkg.ctaLabel[locale]}
                          </Button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function PricingSection() {
  const { t, locale } = useTranslation();

  const groupedCategories = CATEGORY_ORDER.map((category) => ({
    category,
    items: PRICING_PACKAGES.filter((item) => item.category === category),
  })).filter((group) => group.items.length > 0);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section id="pricing" className="section-pad bg-bg-primary">
      <div className="mx-auto max-w-wide px-6">
        <SectionHeader
          label={t("pri.sec.label")}
          title={
            <>
              {t("pri.sec.title")}{" "}
              <span className="italic-serif text-brand-navy">{t("pri.sec.italic")}</span>{" "}
              {t("pri.sec.titleSuffix")}
            </>
          }
          subtitle={t("pri.sec.subtitle")}
        />

        <div className="mx-auto max-w-editorial space-y-3">
          {groupedCategories.map(({ category, items }, i) => (
            <Reveal key={category} delay={i * 0.05}>
              <CategoryAccordion
                category={category}
                items={items}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
                locale={locale}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
