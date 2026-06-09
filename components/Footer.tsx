"use client";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Globe, GitBranch } from "lucide-react";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { products } from "@/data/products";

const researchLinks = [
  { href: "/about",     label: "Publications"    },
  { href: "/portfolio", label: "Projects"        },
  { href: "/contact",   label: "Collaborations"  },
  { href: "/about",     label: "Conferences"     },
];

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="font-mono text-[9.5px] tracking-[0.25em] uppercase mb-4" style={{ color: "var(--gold)" }}>
      — {children}
    </h4>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block text-sm leading-relaxed transition-colors duration-150 hover:text-[var(--text)]"
      style={{ color: "var(--text-muted)" }}
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative parchment-grain"
      style={{
        background: "var(--ink)",
        borderTop: "2px solid var(--gold)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-8">

          {/* ── Brand column ─────────────────────────────── */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3 w-fit group">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image src={company.logoSvg} alt="Arapai Technologies logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-[14px] font-bold tracking-wide" style={{ color: "var(--text)" }}>
                  ARAPAI
                </span>
                <span className="font-mono text-[7.5px] tracking-[0.18em] uppercase" style={{ color: "var(--gold)" }}>
                  Technologies International
                </span>
              </div>
            </Link>

            {/* Serif italic tagline */}
            <p className="font-display italic text-lg leading-snug" style={{ color: "rgba(241,236,220,0.65)" }}>
              Applied AI.<br />
              <span style={{ color: "var(--gold)" }}>Intelligent Systems.</span>
            </p>

            <p className="text-xs leading-relaxed max-w-[28ch]" style={{ color: "var(--text-muted)" }}>
              Engineering intelligent solutions for Africa's most critical challenges.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2 mt-1">
              {[
                { href: company.linkedin, label: "LinkedIn",   icon: <Globe size={13} /> },
                { href: company.twitter,  label: "Twitter / X", icon: <span className="text-[11px] font-bold leading-none">𝕏</span> },
                { href: company.github,   label: "GitHub",      icon: <GitBranch size={13} /> },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-md transition-all duration-150"
                  style={{
                    background: "rgba(201,168,76,0.08)",
                    border: "1px solid var(--border)",
                    color: "var(--text-muted)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)";
                    e.currentTarget.style.color = "var(--text)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--text-muted)";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Solutions column ──────────────────────────── */}
          <div>
            <FooterHeading>Solutions</FooterHeading>
            <div className="flex flex-col gap-2.5">
              {services.map((s) => (
                <FooterLink key={s.id} href="/services">{s.shortTitle}</FooterLink>
              ))}
            </div>
          </div>

          {/* ── Products + Research ───────────────────────── */}
          <div className="flex flex-col gap-8">
            <div>
              <FooterHeading>Products</FooterHeading>
              <div className="flex flex-col gap-2.5">
                {products.map((p) => (
                  <FooterLink key={p.id} href="/portfolio">{p.name}</FooterLink>
                ))}
              </div>
            </div>
            <div>
              <FooterHeading>Research</FooterHeading>
              <div className="flex flex-col gap-2.5">
                {researchLinks.map((l) => (
                  <FooterLink key={l.label} href={l.href}>{l.label}</FooterLink>
                ))}
              </div>
            </div>
          </div>

          {/* ── Contact column ────────────────────────────── */}
          <div>
            <FooterHeading>Contact</FooterHeading>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${company.companyEmail}`}
                className="flex items-start gap-2.5 text-sm transition-colors hover:text-[var(--text)]"
                style={{ color: "var(--text-muted)" }}
              >
                <Mail size={13} className="mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }} />
                {company.companyEmail}
              </a>
              <div className="flex items-start gap-2.5 text-sm" style={{ color: "var(--text-muted)" }}>
                <Phone size={13} className="mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }} />
                {company.phone}
              </div>
              <div className="flex items-start gap-2.5 text-sm" style={{ color: "var(--text-muted)" }}>
                <MapPin size={13} className="mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }} />
                {company.location}
              </div>
              <div className="pt-3 mt-1" style={{ borderTop: "1px solid var(--border-soft)" }}>
                <Link
                  href="/contact"
                  className="btn-parchment inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs"
                >
                  Work With Us →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ───────────────────────────────────── */}
        <div
          className="mt-12 pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ borderTop: "1px solid var(--border-soft)" }}
        >
          <div className="flex flex-col gap-1.5">
            <p className="text-xs" style={{ color: "rgba(159,176,204,0.55)" }}>
              © {year} {company.legalName}. All rights reserved.
            </p>
            <p className="font-mono text-[9px] tracking-wider" style={{ color: "rgba(159,176,204,0.35)" }}>
              URSB Reg. No. {company.registrationNo} · {company.act}
            </p>
          </div>
          <div className="flex items-center gap-5 text-xs" style={{ color: "rgba(159,176,204,0.45)" }}>
            <Link href="/about" className="hover:opacity-80 transition-opacity">Privacy Policy</Link>
            <Link href="/about" className="hover:opacity-80 transition-opacity">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
