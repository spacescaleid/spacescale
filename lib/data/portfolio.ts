export type ProjectCategory = "web" | "ecom" | "brand" | "service";

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  tagline: { id: string; en: string };
  description: { id: string; en: string };
  tags: string[];
  liveUrl?: string;
  year: string;
  /** Path to screenshot in /public/images/portfolio/ */
  image?: string;
  /** Visual identity for placeholder card (fallback if no image) */
  visual: {
    bgFrom: string;
    bgTo: string;
    accentColor: string;
    label: string;
    glyph?: string;
  };
  featured: boolean;
  span: 5 | 7 | 6 | 12;
}

export const projects: Project[] = [
  {
    slug: "eqahku",
    name: "Eqahku",
    category: "service",
    tagline: {
      id: "Brand aqiqah modern dengan domba 3D interaktif.",
      en: "Modern aqiqah brand with interactive 3D sheep.",
    },
    description: {
      id: "Reimagining layanan aqiqah dengan pendekatan digital-first. Pengalaman 3D yang playful tanpa kehilangan respect terhadap nilai religius.",
      en: "Reimagining aqiqah service with a digital-first approach. A playful 3D experience without losing respect for religious values.",
    },
    tags: ["Next.js", "3D Interactive", "Premium"],
    liveUrl: "http://eqahku.spacescale.online/",
    year: "2026",
    image: "/images/portfolio/eqahku.jpg",
    visual: {
      bgFrom: "#FAF6EF",
      bgTo: "#F0E8D9",
      accentColor: "#2A1F18",
      label: "EQAHKU",
    },
    featured: true,
    span: 7,
  },
  {
    slug: "lumera",
    name: "Lumera",
    category: "ecom",
    tagline: {
      id: "Skincare brand dengan conversion strategy.",
      en: "Skincare brand with conversion strategy.",
    },
    description: {
      id: "E-commerce skincare premium dengan fokus pada storytelling produk dan optimasi conversion funnel.",
      en: "Premium skincare e-commerce focused on product storytelling and conversion funnel optimization.",
    },
    tags: ["E-commerce", "Conversion"],
    liveUrl: "https://lumera.spacescale.online/",
    year: "2026",
    image: "/images/portfolio/lumera.jpg",
    visual: {
      bgFrom: "#F5EFE6",
      bgTo: "#EDE4D3",
      accentColor: "#B5654A",
      label: "LUMERA",
    },
    featured: true,
    span: 5,
  },
  {
    slug: "midnight-roast",
    name: "Midnight Roast",
    category: "brand",
    tagline: {
      id: "Late-night cafe dengan vibe premium.",
      en: "Late-night cafe with premium vibe.",
    },
    description: {
      id: "Membangun identitas digital untuk cafe yang buka hingga dini hari di Kemang. Atmospheric, cinematic, intimate.",
      en: "Building a digital identity for a late-night cafe in Kemang. Atmospheric, cinematic, intimate.",
    },
    tags: ["Premium", "F&B", "Atmospheric"],
    liveUrl: "http://midnight-roast.spacescale.online/",
    year: "2026",
    image: "/images/portfolio/midnight-roast.jpg",
    visual: {
      bgFrom: "#0F0D0B",
      bgTo: "#1A1612",
      accentColor: "#D4A857",
      label: "MIDNIGHT ROAST",
    },
    featured: true,
    span: 5,
  },
  {
    slug: "syari-laundry",
    name: "Syar'i Laundry",
    category: "service",
    tagline: {
      id: "Niche positioning untuk market Muslim.",
      en: "Niche positioning for Muslim market.",
    },
    description: {
      id: "Local laundry service dengan positioning syar'i — clean design, clear value proposition, mobile-first.",
      en: "Local laundry service with syar'i positioning — clean design, clear value proposition, mobile-first.",
    },
    tags: ["Niche", "Local Service", "WordPress"],
    liveUrl: "http://syarilaundry.spacescale.online/",
    year: "2026",
    image: "/images/portfolio/syari-laundry.jpg",
    visual: {
      bgFrom: "#F0FDF4",
      bgTo: "#DCFCE7",
      accentColor: "#14532D",
      label: "SYAR'I LAUNDRY",
    },
    featured: true,
    span: 7,
  },
  {
    slug: "naratama",
    name: "Naratama",
    category: "web",
    tagline: {
      id: "Personal brand untuk executive coach.",
      en: "Personal brand for executive coach.",
    },
    description: {
      id: "Editorial-driven website untuk executive coach senior. Restraint, tipografi-driven, premium tanpa berlebihan.",
      en: "Editorial-driven website for senior executive coach. Restraint, typography-driven, premium without excess.",
    },
    tags: ["Editorial", "Personal Brand"],
    liveUrl: "http://naratama.spacescale.online/",
    year: "2026",
    image: "/images/portfolio/naratama.jpg",
    visual: {
      bgFrom: "#F5F2EC",
      bgTo: "#ECE7DD",
      accentColor: "#2E4A3C",
      label: "NARATAMA",
    },
    featured: false,
    span: 6,
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(
  category: ProjectCategory | "all"
): Project[] {
  if (category === "all") return projects;
  return projects.filter((p) => p.category === category);
}