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
  metadataBase: new URL("https://spacescale.id"),
  title: {
    default: "Spacescale.id — Premium Web Studio | Beyond Templates",
    template: "%s — Spacescale.id",
  },
  description:
    "Studio web premium untuk brand Indonesia yang serius tumbuh. Custom design, performance-first, conversion-focused. Bukan template biasa.",
  keywords: [
    "web design indonesia",
    "premium website",
    "jasa pembuatan website",
    "custom website",
    "landing page",
    "konversi tinggi",
    "next.js indonesia",
  ],
  authors: [{ name: "Spacescale.id" }],
  creator: "Spacescale.id",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://spacescale.id",
    title: "Spacescale.id — Premium Web Studio",
    description:
      "Beyond Templates. Built to Convert. Studio web premium untuk brand Indonesia yang serius tumbuh.",
    siteName: "Spacescale.id",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spacescale.id — Premium Web Studio",
    description: "Beyond Templates. Built to Convert.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Spacescale.id",
              description: "Premium web design studio Indonesia",
              url: "https://spacescale.id",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressCountry: "ID",
              },
            }),
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