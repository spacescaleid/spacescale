import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  label?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  /** Override label color (e.g., for dark sections) */
  labelClassName?: string;
  /** Override title color */
  titleClassName?: string;
  /** Override subtitle color */
  subtitleClassName?: string;
  className?: string;
}

/**
 * Reusable editorial section header.
 * Consistent typography hierarchy across all sections.
 */
export function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  labelClassName,
  titleClassName,
  subtitleClassName,
  className,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <header
      className={cn(
        "mb-16 md:mb-20",
        isCenter
          ? "max-w-[720px] mx-auto text-center"
          : "max-w-[700px] text-left",
        className
      )}
    >
      {label && (
        <Reveal>
          <span className={cn("section-label", labelClassName)}>{label}</span>
        </Reveal>
      )}

      <Reveal delay={0.1}>
        <h2
          className={cn(
            "font-sans font-bold text-display-md mb-5",
            titleClassName
          )}
        >
          {title}
        </h2>
      </Reveal>

      {subtitle && (
        <Reveal delay={0.2}>
          <p
            className={cn(
              "text-body-lg text-text-secondary",
              isCenter && "max-w-[600px] mx-auto",
              subtitleClassName
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </header>
  );
}