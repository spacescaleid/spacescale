"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { Button } from "@/components/ui/Button";
import { easings } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: easings.smooth },
  }),
};

interface Stat {
  number: string;
  labelKey:
    | "hero.stat.1"
    | "hero.stat.2"
    | "hero.stat.3"
    | "hero.stat.4";
}

const stats: Stat[] = [
  { number: "4+", labelKey: "hero.stat.1" },
  { number: "100%", labelKey: "hero.stat.2" },
  { number: "90+", labelKey: "hero.stat.3" },
  { number: "<2s", labelKey: "hero.stat.4" },
];

/**
 * Hero section with mouse-reactive blob, decorative grid, and stats row.
 * Loader-aware: triggers reveal after initial load.
 */
export function HeroSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [mounted, setMounted] = useState(false);
  const [blobPos, setBlobPos] = useState({ x: 0, y: 0 });

  // Trigger animation after loader hides (1500ms + buffer)
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 1600);
    return () => clearTimeout(timer);
  }, []);

  // Mouse-reactive blob (desktop only)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isMobile || reducedMotion) {
      // Center static
      setBlobPos({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
      return;
    }

    const section = sectionRef.current;
    if (!section) return;

    let rafId: number;
    const handleMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        setBlobPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      });
    };

    section.addEventListener("mousemove", handleMove, { passive: true });
    return () => {
      section.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const animate = mounted && isInView;

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 md:px-[5%] md:pb-24 md:pt-32"
      aria-label="Hero"
    >
      {/* Mouse-reactive blob */}
      <div
        className="pointer-events-none absolute z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[40px] transition-transform duration-300 ease-out"
        style={{
          background:
            "radial-gradient(circle, rgba(79, 142, 247, 0.15), transparent 60%)",
          transform: `translate(${blobPos.x}px, ${blobPos.y}px) translate(-50%, -50%)`,
        }}
        aria-hidden="true"
      />

      {/* Decorative grid background — primary */}
<div
  className="absolute inset-0 z-[1]"
  style={{
    backgroundImage:
      "linear-gradient(rgba(10, 14, 31, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(10, 14, 31, 0.08) 1px, transparent 1px)",
    backgroundSize: "70px 70px",
    maskImage:
      "radial-gradient(ellipse 70% 60% at center, black 20%, transparent 90%)",
    WebkitMaskImage:
      "radial-gradient(ellipse 70% 60% at center, black 20%, transparent 90%)",
  }}
  aria-hidden="true"
/>

{/* Subtle finer grid overlay */}
<div
  className="absolute inset-0 z-[1] opacity-50"
  style={{
    backgroundImage:
      "linear-gradient(rgba(10, 14, 31, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(10, 14, 31, 0.04) 1px, transparent 1px)",
    backgroundSize: "14px 14px",
    maskImage:
      "radial-gradient(ellipse 50% 50% at center, black 10%, transparent 70%)",
    WebkitMaskImage:
      "radial-gradient(ellipse 50% 50% at center, black 10%, transparent 70%)",
  }}
  aria-hidden="true"
/>

      <div className="container-wide relative z-10">
        <div className="mx-auto w-full text-center">
          {/* Status badge */}
          <motion.div
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border-light bg-bg-card px-4 py-2 shadow-[0_4px_20px_rgba(10,14,31,0.04)]"
            variants={fadeUp}
            initial="hidden"
            animate={animate ? "visible" : "hidden"}
            custom={0}
          >
            <span
              className="h-2 w-2 animate-pulse rounded-full bg-accent-success shadow-[0_0_8px_#10B981]"
              aria-hidden="true"
            />
            <span className="font-mono text-meta-sm uppercase tracking-[0.1em] text-text-secondary">
              {t("hero.badge")}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="mb-7 font-sans text-display-xl font-bold tracking-tight text-text-primary"
            variants={fadeUp}
            initial="hidden"
            animate={animate ? "visible" : "hidden"}
            custom={0.15}
          >
            {t("hero.title.1")}
            <br />
            <span className="italic-serif gradient-text">
              {t("hero.title.2")}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mx-auto mb-10 max-w-[620px] text-body-lg leading-relaxed text-text-secondary"
            variants={fadeUp}
            initial="hidden"
            animate={animate ? "visible" : "hidden"}
            custom={0.3}
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mb-16 flex flex-wrap justify-center gap-3"
            variants={fadeUp}
            initial="hidden"
            animate={animate ? "visible" : "hidden"}
            custom={0.45}
          >
            <Button href="/work" variant="primary" withArrow>
              {t("hero.cta.primary")}
            </Button>
            <Button href="/#cta" variant="secondary">
              {t("hero.cta.secondary")}
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mx-auto grid max-w-[800px] grid-cols-2 gap-6 border-y border-border-light py-8 md:grid-cols-4 md:gap-8"
            variants={fadeUp}
            initial="hidden"
            animate={animate ? "visible" : "hidden"}
            custom={0.6}
          >
            {stats.map((stat) => (
              <div key={stat.labelKey} className="text-center">
                <div className="mb-1.5 font-sans text-[clamp(1.5rem,2.5vw,2.25rem)] font-bold leading-none tracking-tight text-text-primary">
                  {stat.number}
                </div>
                <div className="font-mono text-meta-sm uppercase tracking-[0.1em] text-text-muted">
                  {t(stat.labelKey)}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}