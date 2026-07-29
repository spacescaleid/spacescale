export interface FaqItem {
  question: { id: string; en: string };
  answer: { id: string; en: string };
}

export const faqs: FaqItem[] = [
  {
    question: {
      id: "Berapa lama pengerjaan website?",
      en: "How long does development take?",
    },
    answer: {
      id: "Tergantung scope: Landing Page sekitar 5–7 hari kerja, Company Profile 10–14 hari kerja. Timeline detail kita diskusi di awal project setelah scope jelas.",
      en: "Depends on scope: Landing Page around 5–7 business days, Company Profile 10–14 business days. Detailed timeline discussed at project start after scope is clear.",
    },
  },
  {
    question: {
      id: "Sistem pembayarannya bagaimana?",
      en: "How does payment work?",
    },
    answer: {
      id: "DP 50% di awal setelah deal, sisanya 50% saat website live dan diserahterimakan. Pembayaran via transfer bank atau e-wallet.",
      en: "50% upfront after deal, remaining 50% upon website launch and handover. Payment via bank transfer or e-wallet.",
    },
  },
  {
    question: {
      id: "Saya belum punya konten atau foto, bisa?",
      en: "I don't have content or photos, can you help?",
    },
    answer: {
      id: "Untuk foto, kami bantu sourcing dari stock photos premium (gratis dari Unsplash, Pexels, dll). Untuk copywriting, tersedia sebagai add-on Rp 250rb. Kalau Anda butuh foto profesional khusus brand, saran kami hire fotografer lokal sesuai budget Anda.",
      en: "For photos, we help source from premium stock photos (free from Unsplash, Pexels, etc). For copywriting, available as add-on Rp 250k. If you need brand-specific professional photos, we recommend hiring a local photographer based on your budget.",
    },
  },
  {
    question: {
      id: "Saat ini layanan apa saja yang tersedia?",
      en: "What services are currently available?",
    },
    answer: {
      id: "Saat ini kami fokus di frontend development — Landing Page, Company Profile, Website Redesign, dan konversi Figma ke Next.js. Untuk kebutuhan backend, CMS, atau e-commerce kompleks, akan kami kerjasama dengan partner saat dibutuhkan.",
      en: "Currently we focus on frontend development — Landing Page, Company Profile, Website Redesign, and Figma to Next.js conversion. For backend, CMS, or complex e-commerce needs, we partner with specialists when required.",
    },
  },
  {
  question: {
    id: "Bisa update sendiri website-nya?",
    en: "Can I update the website myself?",
  },
  answer: {
    id: "Untuk konten yang sering berubah (artikel, produk), kami sediakan panduan editing dasar via file teks atau gambar. Untuk perubahan major (design, struktur), kami siap bantu sebagai layanan tambahan. Saat ini website yang kami buat bersifat static — bukan CMS — agar lebih cepat, aman, dan tahan lama.",
    en: "For frequently changing content (articles, products), we provide basic editing guide via text files or images. For major changes (design, structure), we offer as additional service. Currently our websites are static — not CMS — for better speed, security, and longevity.",
  },
},
  {
    question: {
      id: "Apakah include hosting & domain?",
      en: "Are hosting & domain included?",
    },
    answer: {
      id: "Domain dan hosting tidak include di paket. Untuk hosting, kami gratis bantu deploy di Vercel atau Netlify (free tier sudah cukup untuk traffic awal). Setup domain & hosting tersedia sebagai add-on Rp 200rb.",
      en: "Domain and hosting are not included. For hosting, we help deploy for free on Vercel or Netlify (free tier is enough for initial traffic). Domain & hosting setup available as add-on Rp 200k.",
    },
  },
  {
    question: {
      id: "Apa promo 5 client pertama ini?",
      en: "What's this first 5 clients promo?",
    },
    answer: {
      id: "Sebagai studio baru yang membangun portofolio, kami buka slot khusus untuk 5 client pertama dengan harga lebih terjangkau. Hasil akhirnya tetap kualitas penuh, dan project boleh kami tampilkan sebagai portofolio. Setelah 5 client, harga kembali normal.",
      en: "As a new studio building portfolio, we open special slots for first 5 clients at lower price. Final quality remains full, and projects can be showcased as our portfolio. After 5 clients, prices return to normal.",
    },
  },
  {
    question: {
      id: "Apa garansi kalau hasilnya tidak sesuai?",
      en: "What's the guarantee if results don't match?",
    },
    answer: {
      id: "Kami punya proses approval di setiap milestone (strategy, design, development). Kalau di tahap design Anda merasa tidak cocok, refund parsial bisa diproses sesuai kontrak. Kami lebih memilih project tidak lanjut daripada Anda tidak puas.",
      en: "We have approval processes at every milestone (strategy, design, development). If you're unsatisfied at design phase, partial refund per contract. We'd rather not continue than have you unsatisfied.",
    },
  },
];