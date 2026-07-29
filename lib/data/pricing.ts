export interface PricingTier {
  id: string;
  tier: string;
  name: { id: string; en: string };
  /** "from" = show "Starting from X". "request" = show "On Request" */
  pricingType: "from" | "request";
  /** Promo/current price (displayed prominently) — in numerical form (e.g., 700 for 700rb, 1.5 for 1.5jt) */
  priceFrom?: number;
  /** Unit: "rb" for thousand, "jt" for million */
  priceUnit?: "rb" | "jt";
  /** Original price (will be crossed out for promo) */
  originalPrice?: number;
  originalPriceUnit?: "rb" | "jt";
  /** Promo savings note */
  promoNote?: { id: string; en: string };
  description: { id: string; en: string };
  features: { id: string[]; en: string[] };
  featured: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "landing",
    tier: "PAKET 01",
    name: { id: "Landing Page", en: "Landing Page" },
    pricingType: "from",
    priceFrom: 700,
    priceUnit: "rb",
    originalPrice: 1.5,
    originalPriceUnit: "jt",
    promoNote: {
      id: "Hemat hingga Rp 800rb",
      en: "Save up to Rp 800k",
    },
    description: {
      id: "Single page yang konversi tinggi untuk launching produk, campaign, atau personal brand.",
      en: "High-converting single page for product launches, campaigns, or personal brands.",
    },
    features: {
      id: [
        "1 halaman, 5–7 section",
        "Custom design (bukan template)",
        "Mobile responsive",
        "Tombol WhatsApp + form kontak",
        "Basic onsite SEO",
        "Gratis deploy (Vercel/Netlify)",
        "2x revisi major",
        "7 hari support pasca launch",
        "Selesai dalam 5–7 hari kerja",
      ],
      en: [
        "1 page, 5–7 sections",
        "Custom design (not template)",
        "Mobile responsive",
        "WhatsApp button + contact form",
        "Basic onsite SEO",
        "Free deploy (Vercel/Netlify)",
        "2 major revisions",
        "7 days post-launch support",
        "Delivered in 5–7 business days",
      ],
    },
    featured: false,
  },
  {
    id: "company",
    tier: "PAKET 02",
    name: { id: "Multi-Page Website", en: "Multi-Page Website" },
    pricingType: "from",
    priceFrom: 1.5,
    priceUnit: "jt",
    originalPrice: 3.5,
    originalPriceUnit: "jt",
    promoNote: {
      id: "Hemat hingga Rp 2 juta",
      en: "Save up to Rp 2 million",
    },
    description: {
      id: "Multi-page website yang merepresentasikan brand Anda secara profesional dan terstruktur.",
      en: "Multi-page website that represents your brand professionally and structured.",
    },
    features: {
      id: [
        "4–5 halaman (home, about, layanan, kontak)",
        "Custom design premium",
        "Animasi smooth (Framer Motion)",
        "Mobile responsive",
        "Full onsite SEO + heading structure",
        "WhatsApp + form + Google Maps embed",
        "Gratis deploy + panduan pengelolaan",
        "3x revisi + 14 hari support",
        "Selesai dalam 10–14 hari kerja",
      ],
      en: [
        "4–5 pages (home, about, services, contact)",
        "Premium custom design",
        "Smooth animations (Framer Motion)",
        "Mobile responsive",
        "Full onsite SEO + heading structure",
        "WhatsApp + form + Google Maps embed",
        "Free deploy + management guide",
        "3 revisions + 14 days support",
        "Delivered in 10–14 business days",
      ],
    },
    featured: true,
  },
  {
    id: "custom",
    tier: "TAMBAHAN",
    name: { id: "Upgrade & Extras", en: "Upgrade & Extras" },
    pricingType: "request",
    description: {
      id: "Bisa ditambahkan ke paket manapun untuk kebutuhan ekstra.",
      en: "Can be added to any package for extra needs.",
    },
    features: {
      id: [
        "Halaman tambahan — Rp 300rb/hal",
        "Revisi tambahan — Rp 150rb/sesi",
        "Extended support 30 hari — Rp 300rb",
        "Setup domain & hosting — Rp 200rb",
        "Copywriting konten — Rp 250rb",
        "Custom animation kompleks — diskusi",
      ],
      en: [
        "Additional page — Rp 300k/page",
        "Additional revision — Rp 150k/session",
        "Extended support 30 days — Rp 300k",
        "Domain & hosting setup — Rp 200k",
        "Content copywriting — Rp 250k",
        "Custom complex animation — by request",
      ],
    },
    featured: false,
  },
];