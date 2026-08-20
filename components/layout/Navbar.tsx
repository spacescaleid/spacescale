"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { LangToggle } from "./LangToggle";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface NavLink {
  labelKey:
    | "nav.approach"
    | "nav.work"
    | "nav.services"
    | "nav.pricing"
    | "nav.faq";
  href: string;
}

const navLinks: NavLink[] = [
  { labelKey: "nav.approach", href: "/#showcase" },
  { labelKey: "nav.work", href: "/work" },
  { labelKey: "nav.services", href: "/#services" },
  { labelKey: "nav.pricing", href: "/#pricing" },
  { labelKey: "nav.faq", href: "/#faq" },
];

/**
 * Floating pill navbar with backdrop blur.
 * Mobile: full-screen menu overlay.
 */
export function Navbar() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const closeMobile = useCallback(() => setIsMobileOpen(false), []);

  // Smooth scroll for hash links on homepage
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      // Only intercept hash links when on homepage
      if (href.startsWith("/#") && pathname === "/") {
        e.preventDefault();
        const id = href.replace("/#", "#");
        const target = document.querySelector(id);
        if (target) {
          const top =
            target.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: "smooth" });
        }
        closeMobile();
      }
    },
    [pathname, closeMobile]
  );

  return (
    <>
      {/* Floating pill navbar */}
      <header
        className="fixed left-1/2 top-4 z-[1000] w-[calc(100%-32px)] max-w-[900px] -translate-x-1/2"
        role="banner"
      >
        <nav
          className={cn(
            "flex items-center gap-4 md:gap-8",
            "rounded-full border border-border-light bg-bg-primary/85",
            "py-2 pl-6 pr-2",
            "shadow-[0_8px_32px_rgba(10,14,31,0.08)]",
            "backdrop-blur-xl backdrop-saturate-150",
            "transition-all duration-400"
          )}
          aria-label="Main navigation"
        >
          {/* Logo */}
<Link
  href="/"
  className="flex flex-shrink-0 items-center gap-2"
  aria-label="Spacescale — Home"
>
  <Image
    src="/logo.svg"
    alt="Logo Spacescale - Jasa Pembuatan Website Premium Indonesia"
    width={28}
    height={28}
    priority
    className="h-7 w-7"
  />
  <span className="font-sans text-base font-bold tracking-tight text-text-primary">
    Space<span className="text-brand-navy">Scale</span>
  </span>
</Link>
          {/* Desktop links */}
          <div className="ml-auto hidden items-center gap-7 text-body-sm md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="group relative font-medium text-text-secondary transition-colors duration-300 hover:text-brand-navy"
              >
                {t(link.labelKey)}
                <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-brand-navy transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right cluster */}
          <div className="ml-auto flex items-center gap-2 md:ml-0">
            <LangToggle />
            <Link
              href="/#cta"
              onClick={(e) => handleNavClick(e, "/#cta")}
              className={cn(
                "hidden items-center gap-1.5 rounded-full bg-text-primary px-4 py-2.5",
                "text-[0.85rem] font-semibold text-bg-primary",
                "transition-all duration-300",
                "hover:-translate-y-px hover:bg-brand-navy hover:shadow-[0_8px_20px_rgba(26,43,107,0.3)]",
                "sm:inline-flex"
              )}
            >
              {t("nav.cta")} <span aria-hidden="true">→</span>
            </Link>

            {/* Mobile burger */}
            <button
              type="button"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="relative flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
            >
              <motion.span
                className="block h-[1.5px] w-5 bg-text-primary"
                animate={{
                  rotate: isMobileOpen ? 45 : 0,
                  y: isMobileOpen ? 3 : 0,
                }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              />
              <motion.span
                className="block h-[1.5px] w-5 bg-text-primary"
                animate={{
                  rotate: isMobileOpen ? -45 : 0,
                  y: isMobileOpen ? -3 : 0,
                }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-[999] flex flex-col justify-center bg-bg-primary px-6 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-col gap-7">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + i * 0.06,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-baseline gap-3 font-sans text-3xl font-semibold text-text-primary"
                  >
                    <span className="font-mono text-meta-sm text-text-muted">
                      0{i + 1}
                    </span>
                    {t(link.labelKey)}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                className="mt-8 border-t border-border-light pt-8"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <Link
                  href="/#cta"
                  onClick={(e) => handleNavClick(e, "/#cta")}
                  className="inline-flex items-center gap-2 rounded-full bg-text-primary px-7 py-3.5 text-body-md font-semibold text-bg-primary"
                >
                  {t("nav.cta")} <span aria-hidden="true">→</span>
                </Link>
              </motion.div>
            </nav>

            <motion.div
              className="absolute bottom-8 left-6 right-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <p className="font-mono text-meta-sm text-text-muted">
                Spacescale · Premium Web Studio
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLogoSvg() {
  return (
    <svg viewBox="0 0 100 100" className="h-7 w-7" fill="none">
      <path
        d="M30 25C30 25 60 20 65 35C70 50 30 50 30 65C30 80 70 75 70 75"
        stroke="#1A2B6B"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M70 30L80 20M80 20L75 18M80 20L82 25"
        stroke="#1A2B6B"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}