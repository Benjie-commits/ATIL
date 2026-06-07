"use client";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Globe, GitBranch } from "lucide-react";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { products } from "@/data/products";

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/about", label: "Our Mission" },
  { href: "/team", label: "Our Team" },
  { href: "/team", label: "Careers" },
  { href: "/contact", label: "News" },
];

const researchLinks = [
  { href: "/about", label: "Publications" },
  { href: "/portfolio", label: "Projects" },
  { href: "/contact", label: "Collaborations" },
  { href: "/about", label: "Conferences" },
  { href: "/about", label: "Resources" },
];

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h4
        className="font-mono text-xs tracking-[0.2em] uppercase font-bold"
        style={{ color: "var(--brand-text)" }}
      >
        {title}
      </h4>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm transition-opacity hover:opacity-80"
      style={{ color: "var(--brand-text-muted)" }}
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative mt-auto"
      style={{ background: "var(--brand-surface)", borderTop: "1px solid var(--brand-border)" }}
    >
      {/* Gold accent line */}
      <div className="h-[2px]" style={{ background: "var(--brand-accent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">

          {/* Brand — spans 1 column on lg */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 w-fit">
              <div className="relative w-9 h-9">
                <Image src={company.logoSvg} alt="Arapai Technologies logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-[12px] font-bold tracking-wide" style={{ color: "var(--brand-text)" }}>
                  ARAPAI
                </span>
                <span className="font-mono text-[8px] tracking-[0.12em] uppercase" style={{ color: "var(--brand-accent)" }}>
                  Technologies International
                </span>
              </div>
            </Link>
            <p className="text-xs leading-relaxed" style={{ color: "var(--brand-text-muted)" }}>
              {company.tagline}
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5 mt-1">
              <a
                href={company.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md transition-opacity hover:opacity-70"
                style={{ background: "var(--brand-border)", color: "var(--brand-text-muted)" }}
                aria-label="LinkedIn"
              >
                <Globe size={14} />
              </a>
              <a
                href={company.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md transition-opacity hover:opacity-70"
                style={{ background: "var(--brand-border)", color: "var(--brand-text-muted)" }}
                aria-label="Twitter / X"
              >
                {/* X / Twitter icon as text since lucide doesn't have it */}
                <span className="text-[12px] font-bold leading-none">𝕏</span>
              </a>
              <a
                href={company.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md transition-opacity hover:opacity-70"
                style={{ background: "var(--brand-border)", color: "var(--brand-text-muted)" }}
                aria-label="GitHub"
              >
                <GitBranch size={14} />
              </a>
            </div>
          </div>

          {/* Company */}
          <FooterColumn title="Company">
            {companyLinks.map((l) => (
              <FooterLink key={l.label} href={l.href}>{l.label}</FooterLink>
            ))}
          </FooterColumn>

          {/* Solutions */}
          <FooterColumn title="Solutions">
            {services.map((s) => (
              <FooterLink key={s.id} href="/services">{s.shortTitle}</FooterLink>
            ))}
          </FooterColumn>

          {/* Products */}
          <FooterColumn title="Products">
            {products.map((p) => (
              <FooterLink key={p.id} href="/portfolio">{p.name}</FooterLink>
            ))}
          </FooterColumn>

          {/* Research */}
          <FooterColumn title="Research">
            {researchLinks.map((l) => (
              <FooterLink key={l.label} href={l.href}>{l.label}</FooterLink>
            ))}
          </FooterColumn>

          {/* Contact */}
          <FooterColumn title="Contact">
            <a
              href={`mailto:${company.email}`}
              className="text-sm flex items-start gap-2 transition-opacity hover:opacity-80"
              style={{ color: "var(--brand-text-muted)" }}
            >
              <Mail size={13} className="mt-0.5 flex-shrink-0" />
              {company.email}
            </a>
            <div className="flex items-start gap-2 text-sm" style={{ color: "var(--brand-text-muted)" }}>
              <Phone size={13} className="mt-0.5 flex-shrink-0" />
              {company.phone}
            </div>
            <div className="flex items-start gap-2 text-sm" style={{ color: "var(--brand-text-muted)" }}>
              <MapPin size={13} className="mt-0.5 flex-shrink-0" />
              {company.location}
            </div>
            <div
              className="mt-3 pt-3"
              style={{ borderTop: "1px solid var(--brand-border)" }}
            >
              <Link
                href="/contact"
                className="text-sm font-semibold"
                style={{ color: "var(--brand-accent)" }}
              >
                Work With Us →
              </Link>
            </div>
          </FooterColumn>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: "1px solid var(--brand-border)", color: "var(--brand-text-muted)" }}
        >
          <p>© {year} {company.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:opacity-80 transition-opacity">Privacy Policy</Link>
            <Link href="/about" className="hover:opacity-80 transition-opacity">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
