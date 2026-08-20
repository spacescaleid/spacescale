import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n/useTranslation";
import { Loader } from "@/components/layout/Loader";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";

const geist = Inter({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  weight: ["400", "500"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://spacescale.online"),
  title: {
    default: "Jasa Pembuatan Website Premium Indonesia | Spacescale",
    template: "%s | Spacescale",
  },
  description:
    "Studio web premium untuk brand Indonesia. Landing page, company profile & website redesign dengan performa cepat (Lighthouse 90+) & fokus konversi. Konsultasi gratis 30 menit.",
  keywords: [
    "jasa pembuatan website",
    "website premium indonesia",
    "jasa buat website",
    "landing page indonesia",
    "company profile website",
    "website redesign",
    "web design indonesia",
    "custom website",
    "konversi tinggi",
    "next.js indonesia",
    "studio web indonesia",
    "jasa web profesional",
  ],
  authors: [{ name: "Spacescale" }],
  creator: "Spacescale",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://spacescale.online",
    title: "Spacescale — Jasa Website Premium untuk Brand Indonesia",
    description:
      "Beyond Templates. Built to Convert. Website custom, cepat, dan dirancang untuk konversi tinggi.",
    siteName: "Spacescale",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spacescale — Jasa Pembuatan Website Premium Indonesia",
    description:
      "Studio web premium untuk brand Indonesia. Landing page, company profile & website redesign dengan performa cepat.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://spacescale.online",
    languages: {
      "id": "https://spacescale.online",
      "en": "https://spacescale.online/en",
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Spacescale",
  description:
    "Studio web premium untuk brand Indonesia. Jasa pembuatan landing page, company profile, website redesign, dan frontend development dengan performa Lighthouse 90+.",
  url: "https://spacescale.online",
  logo: "https://spacescale.online/logo.svg",
  image: "https://spacescale.online/logo.svg",
  priceRange: "Rp700.000 - Rp1.200.000+",
  areaServed: {
    "@type": "Country",
    name: "Indonesia",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "ID",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+62895626827230",
    contactType: "customer service",
    availableLanguage: ["Indonesian", "English"],
  },
  email: "hello@spacescale.online",
  sameAs: [
    "https://instagram.com/spacescale.id",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan Pembuatan Website",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Landing Page",
          description: "Jasa pembuatan landing page untuk launching produk & campaign dengan conversion rate tinggi.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Company Profile",
          description: "Jasa website company profile multi-halaman yang merepresentasikan brand Anda secara profesional.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Redesign",
          description: "Jasa redesign website lama jadi modern, cepat, dan mobile-friendly.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Frontend Development",
          description: "Jasa convert desain Figma ke Next.js, pixel-perfect dan production-ready.",
        },
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Berapa lama pengerjaan website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tergantung scope: Landing Page sekitar 5–7 hari kerja, Company Profile 10–14 hari kerja. Timeline detail kita diskusi di awal project setelah scope jelas.",
      },
    },
    {
      "@type": "Question",
      name: "Sistem pembayarannya bagaimana?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DP 50% di awal setelah deal, sisanya 50% saat website live dan diserahterimakan. Pembayaran via transfer bank atau e-wallet.",
      },
    },
    {
      "@type": "Question",
      name: "Saya belum punya konten atau foto, bisa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Untuk foto, kami bantu sourcing dari stock photos premium (gratis dari Unsplash, Pexels, dll). Untuk copywriting, tersedia sebagai add-on Rp 250rb. Kalau Anda butuh foto profesional khusus brand, saran kami hire fotografer lokal sesuai budget Anda.",
      },
    },
    {
      "@type": "Question",
      name: "Saat ini layanan apa saja yang tersedia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Saat ini kami fokus di frontend development — Landing Page, Company Profile, Website Redesign, dan konversi Figma ke Next.js. Untuk kebutuhan backend, CMS, atau e-commerce kompleks, akan kami kerjasama dengan partner saat dibutuhkan.",
      },
    },
    {
      "@type": "Question",
      name: "Bisa update sendiri website-nya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Untuk konten yang sering berubah (artikel, produk), kami sediakan panduan editing dasar via file teks atau gambar. Untuk perubahan major (design, struktur), kami siap bantu sebagai layanan tambahan. Saat ini website yang kami buat bersifat static — bukan CMS — agar lebih cepat, aman, dan tahan lama.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah include hosting & domain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Domain dan hosting tidak include di paket. Untuk hosting, kami gratis bantu deploy di Vercel atau Netlify (free tier sudah cukup untuk traffic awal). Setup domain & hosting tersedia sebagai add-on Rp 200rb.",
      },
    },
    {
      "@type": "Question",
      name: "Apa promo 5 client pertama ini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sebagai studio baru yang membangun portofolio, kami buka slot khusus untuk 5 client pertama dengan harga lebih terjangkau. Hasil akhirnya tetap kualitas penuh, dan project boleh kami tampilkan sebagai portofolio. Setelah 5 client, harga kembali normal.",
      },
    },
    {
      "@type": "Question",
      name: "Apa garansi kalau hasilnya tidak sesuai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kami punya proses approval di setiap milestone (strategy, design, development). Kalau di tahap design Anda merasa tidak cocok, refund parsial bisa diproses sesuai kontrak. Kami lebih memilih project tidak lanjut daripada Anda tidak puas.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <head>
        <meta name="theme-color" content="#FAFAF7" />
        <link rel="canonical" href="https://spacescale.online" />
        <link rel="alternate" hrefLang="id" href="https://spacescale.online" />
        <link rel="alternate" hrefLang="en" href="https://spacescale.online/en" />
        <link rel="alternate" hrefLang="x-default" href="https://spacescale.online" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100000] focus:rounded focus:bg-brand-navy focus:px-4 focus:py-2 focus:text-bg-primary focus:font-semibold"
        >
          Skip to main content
        </a>

        <I18nProvider>
          <Loader />
          <ScrollProgress />
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </I18nProvider>
      </body>
    </html>
  );
}