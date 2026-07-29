"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Top scroll progress bar.
 * Spring-smoothed for that premium feel.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[9998] h-[2px] origin-left bg-gradient-to-r from-brand-navy to-accent-electric"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}