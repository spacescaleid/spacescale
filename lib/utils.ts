import { type ClassValue, clsx } from "clsx";

/**
 * Merge class names utility.
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/**
 * WhatsApp link generator.
 */
export function whatsappLink(message?: string): string {
  const phone = "62895626827230"; 
  const text = message
    ? encodeURIComponent(message)
    : encodeURIComponent("Halo Spacescale, saya tertarik konsultasi");
  return `https://wa.me/${phone}?text=${text}`;
}

/**
 * Email link generator.
 */
export function emailLink(subject?: string): string {
  const email = "hello@spacescale.online";
  return subject ? `mailto:${email}?subject=${encodeURIComponent(subject)}` : `mailto:${email}`;
}

/**
 * Smooth scroll to element by ID.
 */
export function scrollToId(id: string, offset = 80): void {
  const el = document.querySelector(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

/**
 * Framer Motion easing presets.
 */
export const easings = {
  smooth: [0.4, 0, 0.2, 1] as [number, number, number, number],
  out: [0.16, 1, 0.3, 1] as [number, number, number, number],
  in: [0.7, 0, 0.84, 0] as [number, number, number, number],
} as const;

/**
 * Framer Motion variants.
 */
export const motionVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easings.smooth },
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: easings.smooth },
    },
  },
  staggerContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  },
} as const;

/**
 * Format currency in Indonesian style.
 */
export function formatPrice(amount: number, locale: "id" | "en" = "id"): string {
  if (locale === "id") {
    return `Rp ${amount.toLocaleString("id-ID")}`;
  }
  return `IDR ${amount.toLocaleString("en-US")}`;
}