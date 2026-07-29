"use client";

import { ReactNode, MouseEvent, AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark" | "electric";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "size"> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href: string;
  /** Show arrow on the right with hover translate */
  withArrow?: boolean;
  /** Icon on the left */
  leftIcon?: ReactNode;
  /** External link target */
  external?: boolean;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-text-primary text-bg-primary hover:bg-brand-navy hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(26,43,107,0.3)]",
  secondary:
    "bg-transparent text-text-primary border border-border-light hover:border-text-primary hover:bg-bg-card",
  ghost:
    "bg-transparent text-text-secondary hover:text-text-primary",
  dark:
    "bg-bg-primary text-text-primary hover:bg-bg-secondary",
  electric:
    "bg-accent-electric text-white hover:bg-accent-pop hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(255,107,53,0.4)]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-body-sm",
  md: "px-7 py-3.5 text-[0.95rem]",
  lg: "px-9 py-4 text-body-md",
};

/**
 * Universal button — always rendered as <a> for SEO/semantic clarity.
 * Supports internal links, external links, and anchor scroll.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  withArrow,
  leftIcon,
  external,
  className,
  onClick,
  ...rest
}: ButtonProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Smooth scroll for anchor links
    if (href.startsWith("#") && typeof window !== "undefined") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const top =
          target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
    onClick?.(e);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold whitespace-nowrap font-sans",
        "transition-all duration-300 ease-smooth cursor-pointer",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...rest}
    >
      {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {withArrow && (
        <span
          aria-hidden="true"
          className="inline-block transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      )}
    </a>
  );
}