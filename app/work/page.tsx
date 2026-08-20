import type { Metadata } from "next";
import { WorkPageClient } from "./WorkPageClient";

export const metadata: Metadata = {
  title: "Portfolio & Case Study | Spacescale",
  description:
    "Lihat portfolio Spacescale — proyek website premium untuk brand Indonesia. Landing page, company profile, e-commerce, dan website custom dengan performa Lighthouse 90+.",
  openGraph: {
    title: "Portfolio & Case Study | Spacescale",
    description:
      "Proyek website premium untuk brand Indonesia. Lihat hasil kerja kami — dari landing page hingga company profile.",
    url: "https://spacescale.online/work",
    siteName: "Spacescale",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio & Case Study | Spacescale",
    description:
      "Proyek website premium untuk brand Indonesia. Lihat hasil kerja kami.",
  },
  alternates: {
    canonical: "https://spacescale.online/work",
    languages: {
      "id": "https://spacescale.online/work",
      "en": "https://spacescale.online/en/work",
    },
  },
};

export default function WorkPage() {
  return <WorkPageClient />;
}
