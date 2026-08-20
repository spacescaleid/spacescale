"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { Reveal } from "@/components/ui/Reveal";
import { whatsappLink, emailLink } from "@/lib/utils";
import Image from "next/image";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const exploreLinks: FooterLink[] = [
    { label: t("ftr.approach"), href: "/#showcase" },
    { label: t("ftr.work"), href: "/work" },
    { label: t("ftr.services"), href: "/#services" },
    { label: t("ftr.pricing"), href: "/#pricing" },
  ];

  const resourceLinks: FooterLink[] = [
    { label: t("ftr.process"), href: "/#process" },
    { label: t("ftr.faq"), href: "/#faq" },
  ];

  const contactLinks: FooterLink[] = [
    { label: "hello@spacescale.online", href: emailLink(), external: false },
    { label: "WhatsApp", href: whatsappLink(), external: true },
    {
      label: t("ftr.instagram"),
      href: "https://instagram.com/spacescale.id",
      external: true,
    },
  ];

  return (
    <footer
      className="border-t border-border-light bg-bg-secondary px-5 pb-8 pt-20 md:px-[5%]"
      role="contentinfo"
    >
      <div className="mx-auto mb-12 grid max-w-wide gap-12 md:grid-cols-12 md:gap-8">
        {/* Brand */}
        <Reveal className="md:col-span-5">
          <div className="mb-4 flex items-center gap-2">
  <Image
    src="/logo.svg"
    alt="Logo Spacescale - Jasa Pembuatan Website Premium Indonesia"
    width={32}
    height={32}
    className="h-8 w-8"
  />
  <span className="font-sans text-xl font-bold tracking-tight text-text-primary">
    Space<span className="text-brand-navy">Scale</span>
  </span>
</div>
          <p className="mb-6 max-w-[320px] text-body-sm leading-relaxed text-text-secondary">
            {t("ftr.desc")}
          </p>
          <div className="flex gap-2.5">
            <SocialLink
              href="https://instagram.com/spacescale.id"
              label="Instagram"
              icon={<InstagramIcon />}
            />
          </div>
        </Reveal>

        {/* Explore */}
        <Reveal className="md:col-span-2 md:col-start-7" delay={0.08}>
          <FooterColumn title={t("ftr.explore")} links={exploreLinks} />
        </Reveal>

        {/* Resources */}
        <Reveal className="md:col-span-2" delay={0.16}>
          <FooterColumn
            title={t("ftr.resources")}
            links={resourceLinks}
          />
        </Reveal>

        {/* Contact */}
        <Reveal className="md:col-span-2" delay={0.24}>
          <FooterColumn title={t("ftr.contact")} links={contactLinks} />
        </Reveal>
      </div>

      {/* Bottom bar */}
      <Reveal className="mx-auto max-w-wide" delay={0.32}>
        <div className="flex flex-col items-start justify-between gap-4 border-t border-border-light pt-8 md:flex-row md:items-center">
          <p className="text-body-sm text-text-muted">
            {t("ftr.copyright")}
          </p>
          <div className="flex gap-3 font-mono text-meta-sm text-text-muted">
            <span>v1.0</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent-success" />
              {t("ftr.status")}
            </span>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div>
      <h4 className="mb-4 font-mono text-meta-sm uppercase tracking-[0.2em] text-text-muted">
        {title}
      </h4>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-sm text-text-secondary transition-colors duration-300 hover:text-brand-navy"
              >
                {link.label}
              </a>
            ) : link.href.startsWith("/#") || link.href.startsWith("mailto:") ? (
              <a
                href={link.href}
                className="text-body-sm text-text-secondary transition-colors duration-300 hover:text-brand-navy"
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                className="text-body-sm text-text-secondary transition-colors duration-300 hover:text-brand-navy"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border-light bg-bg-card text-text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-navy hover:bg-brand-navy hover:text-bg-primary"
    >
      {icon}
    </a>
  );
}

function FooterLogoSvg() {
  return (
    <svg viewBox="0 0 100 100" className="h-8 w-8" fill="none">
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

function InstagramIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

