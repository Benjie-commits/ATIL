"use client";
import Link from "next/link";
import Image from "next/image";
import { Globe, Mail, MapPin, ExternalLink } from "lucide-react";
import { company } from "@/data/company";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative mt-auto"
      style={{
        background: "var(--brand-surface)",
        borderTop: "1px solid var(--brand-border)",
      }}
    >
      {/* Gold top accent line */}
      <div className="h-[2px] w-full" style={{ background: "var(--brand-accent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 w-fit">
              <div className="relative w-10 h-10">
                <Image src={company.logoSvg} alt="Arapai Technologies logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display text-base font-bold" style={{ color: "var(--brand-text)" }}>
                  Arapai Technologies
                </span>
                <span className="font-mono text-[9px] tracking-widest uppercase" style={{ color: "var(--brand-accent)" }}>
                  International Ltd
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "var(--brand-text-muted)" }}>
              {company.description}
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href={company.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md transition-colors duration-200"
                style={{ background: "var(--brand-border)", color: "var(--brand-text-muted)" }}
                aria-label="LinkedIn"
              >
                <Globe size={16} />
              </a>
              <a
                href={`mailto:${company.email}`}
                className="p-2 rounded-md transition-colors duration-200"
                style={{ background: "var(--brand-border)", color: "var(--brand-text-muted)" }}
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <h3 className="font-mono text-xs tracking-[0.2em] uppercase" style={{ color: "var(--brand-accent)" }}>
              Navigation
            </h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors duration-200 hover:text-brand-accent"
                  style={{ color: "var(--brand-text-muted)" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact + Registration */}
          <div className="flex flex-col gap-3">
            <h3 className="font-mono text-xs tracking-[0.2em] uppercase" style={{ color: "var(--brand-accent)" }}>
              Contact
            </h3>
            <div className="flex flex-col gap-3 text-sm" style={{ color: "var(--brand-text-muted)" }}>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Mail size={14} className="flex-shrink-0" />
                {company.email}
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="flex-shrink-0" />
                {company.location}
              </div>
              <a
                href={company.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <ExternalLink size={14} className="flex-shrink-0" />
                LinkedIn
              </a>
            </div>

            {/* Legal registration block */}
            <div
              className="mt-4 p-3 rounded-md text-xs leading-relaxed"
              style={{
                background: "rgba(27,58,107,0.15)",
                border: "1px solid var(--brand-border)",
                color: "var(--brand-text-muted)",
              }}
            >
              <p className="font-mono">Reg. No. {company.registrationNo}</p>
              <p>{company.authority}</p>
              <p>Incorporated {company.registeredOn}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
          style={{
            borderTop: "1px solid var(--brand-border)",
            color: "var(--brand-text-muted)",
          }}
        >
          <p>
            © {year} {company.legalName}. All rights reserved.
          </p>
          <p className="font-mono tracking-widest uppercase text-[10px]" style={{ color: "var(--brand-accent)" }}>
            {company.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
