export interface Service {
  id: string;
  title: { id: string; en: string };
  description: { id: string; en: string };
  /** Lucide-style SVG icon name (rendered inline) */
  iconPath: string;
}

export const services: Service[] = [
  {
    id: "landing",
    title: { id: "Landing Page", en: "Landing Page" },
    description: {
      id: "Single page yang konversi tinggi untuk launching produk atau campaign Anda.",
      en: "High-converting single page for product launches or campaigns.",
    },
    iconPath: "M3 3h18v18H3zM3 9h18M9 21V9",
  },
  {
    id: "company",
    title: { id: "Company Profile", en: "Company Profile" },
    description: {
      id: "Multi-page website yang merepresentasikan brand Anda secara profesional.",
      en: "Multi-page website that represents your brand professionally.",
    },
    iconPath:
      "M3 12l2-2 4 4 8-8 4 4M3 12v6a2 2 0 002 2h14a2 2 0 002-2v-6",
  },
  {
    id: "redesign",
    title: { id: "Website Redesign", en: "Website Redesign" },
    description: {
      id: "Refresh website lama Anda jadi modern, cepat, dan mobile-friendly.",
      en: "Refresh your old website into something modern, fast, and mobile-friendly.",
    },
    iconPath:
      "M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83",
  },
  {
    id: "frontend",
    title: { id: "Frontend Development", en: "Frontend Development" },
    description: {
      id: "Convert design Figma jadi code Next.js berkualitas production. Pixel-perfect, responsive.",
      en: "Convert Figma design into production-quality Next.js code. Pixel-perfect, responsive.",
    },
    iconPath: "M16 18l6-6-6-6M8 6l-6 6 6 6",
  },
];

export interface ProcessStep {
  number: string;
  title: { id: string; en: string };
  description: { id: string; en: string };
  meta: { id: string; en: string };
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: { id: "Discovery Call", en: "Discovery Call" },
    description: {
      id: "Kita ngobrol 30 menit soal bisnis, target audience, dan goal Anda. Gratis, tanpa komitmen.",
      en: "Let's chat for 30 minutes about your business, target audience, and goals. Free, no commitment.",
    },
    meta: {
      id: "DURATION · 30 MIN · FREE",
      en: "DURATION · 30 MIN · FREE",
    },
  },
  {
    number: "02",
    title: { id: "Strategy & Wireframe", en: "Strategy & Wireframe" },
    description: {
      id: "Saya susun konsep, struktur halaman, dan flow user. Anda approve sebelum design dimulai.",
      en: "I structure the concept, page layout, and user flow. You approve before design starts.",
    },
    meta: { id: "DURATION · 2-3 DAYS", en: "DURATION · 2-3 DAYS" },
  },
  {
    number: "03",
    title: { id: "Design Phase", en: "Design Phase" },
    description: {
      id: "Visual design dengan iterasi 2-3 kali. Custom untuk brand Anda, bukan template adapt.",
      en: "Visual design with 2-3 iterations. Custom for your brand, not template adapted.",
    },
    meta: { id: "DURATION · 5-7 DAYS", en: "DURATION · 5-7 DAYS" },
  },
  {
    number: "04",
    title: { id: "Development", en: "Development" },
    description: {
      id: "Coding dengan best practice. Test di banyak device. Optimize performance dan SEO.",
      en: "Coding with best practices. Test on multiple devices. Optimize performance and SEO.",
    },
    meta: { id: "DURATION · 7-14 DAYS", en: "DURATION · 7-14 DAYS" },
  },
  {
    number: "05",
    title: { id: "Launch & Support", en: "Launch & Support" },
    description: {
      id: "Deploy ke domain Anda. Setup analytics. 30 hari support gratis untuk minor adjustments.",
      en: "Deploy to your domain. Setup analytics. 30 days free support for minor adjustments.",
    },
    meta: {
      id: "SUPPORT · 30 DAYS FREE",
      en: "SUPPORT · 30 DAYS FREE",
    },
  },
];

export interface WhyCard {
  number: string;
  category: string;
  title: { id: string; en: string };
  italic: { id: string; en: string };
  description: { id: string; en: string };
}

export const whyCards: WhyCard[] = [
  {
    number: "01",
    category: "DESIGN",
    title: { id: "Custom design,", en: "Custom design," },
    italic: { id: "bukan template.", en: "not templates." },
    description: {
      id: "Setiap pixel didesain khusus untuk brand Anda. Tidak ada 2 client kami dengan website yang sama. Estetika premium, tidak generik.",
      en: "Every pixel designed for your brand. No two clients with identical websites. Premium aesthetic, not generic.",
    },
  },
  {
    number: "02",
    category: "PERFORMANCE",
    title: { id: "Performance is a", en: "Performance is a" },
    italic: { id: "feature.", en: "feature." },
    description: {
      id: "Loading di bawah 2 detik. Lighthouse score 90+. Optimasi gambar, code splitting, lazy loading — semua sudah include.",
      en: "Loading under 2 seconds. Lighthouse score 90+. Image optimization, code splitting, lazy loading — all included.",
    },
  },
{
  number: "03",
  category: "CONVERSION",
  title: { id: "Designed dengan", en: "Designed with" },
  italic: { id: "intent yang jelas.", en: "clear intent." },
  description: {
    id: "Bukan sekadar cantik. Setiap section punya tujuan, setiap CTA dipikirkan. Kami terapkan prinsip conversion design — copywriting yang jelas, hierarki visual yang kuat, friction yang minim.",
    en: "Not just pretty. Every section has a purpose, every CTA is intentional. We apply conversion design principles — clear copywriting, strong visual hierarchy, minimal friction.",
  },
},
  {
    number: "04",
    category: "PARTNERSHIP",
    title: { id: "Konsultatif,", en: "Consultative," },
    italic: { id: "bukan order taker.", en: "not order taker." },
    description: {
      id: "Kami tanya tujuan bisnis Anda dulu, baru kita strategi-kan. Kalau permintaan Anda gak optimal, kami akan kasih saran jujur.",
      en: "We ask about your business goals first, then strategize. If your request isn't optimal, we'll give honest advice.",
    },
  },
];