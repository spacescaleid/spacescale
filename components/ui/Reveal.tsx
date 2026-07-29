"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { easings } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  /** Delay in seconds */
  delay?: number;
  /** Y offset in pixels */
  y?: number;
  /** Custom className for wrapper */
  className?: string;
  /** Once = animate only once when visible */
  once?: boolean;
  /** Amount of element visible to trigger (0-1) */
  amount?: number;
  /** Animation duration */
  duration?: number;
  /** Animation type */
  variant?: "fadeUp" | "fadeIn" | "fadeRight" | "fadeLeft";
  /** Render as different element */
  as?: "div" | "section" | "article" | "header" | "li";
}

/**
 * Editorial reveal animation wrapper.
 * Respects prefers-reduced-motion automatically via Framer Motion.
 */
export function Reveal({
  children,
  delay = 0,
  y = 30,
  className,
  once = true,
  amount = 0.15,
  duration = 0.8,
  variant = "fadeUp",
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  const variants: Variants = {
    hidden: getHiddenState(variant, y),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: easings.smooth,
      },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      ref={ref as any}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </MotionTag>
  );
}

function getHiddenState(variant: RevealProps["variant"], y: number) {
  switch (variant) {
    case "fadeIn":
      return { opacity: 0 };
    case "fadeRight":
      return { opacity: 0, x: -40 };
    case "fadeLeft":
      return { opacity: 0, x: 40 };
    case "fadeUp":
    default:
      return { opacity: 0, y };
  }
}