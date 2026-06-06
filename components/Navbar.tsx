"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { company } from "@/data/company";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/team", label: "Team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "var(--brand-bg)" : "rgba(7,14,27,0.7)",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid var(--brand-border)" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9 md:w-10 md:h-10 flex-shrink-0">
                <Image
                  src={company.logoSvg}
                  alt="Arapai Technologies logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span
                  className="font-display text-sm md:text-base font-bold tracking-wide"
                  style={{ color: "var(--brand-text)" }}
                >
                  Arapai Technologies
                </span>
                <span
                  className="font-mono text-[9px] tracking-[0.18em] uppercase hidden sm:block"
                  style={{ color: "var(--brand-accent)" }}
                >
                  International Ltd
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative font-body text-sm font-medium transition-colors duration-200 pb-0.5"
                    style={{ color: isActive ? "var(--brand-accent)" : "var(--brand-text-muted)" }}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
                        style={{ background: "var(--brand-accent)" }}
                      />
                    )}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="px-4 py-2 rounded-md text-sm font-semibold font-body transition-all duration-200"
                style={{
                  background: "var(--brand-accent)",
                  color: "var(--brand-bg)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--brand-accent-light)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--brand-accent)";
                }}
              >
                Contact Us
              </Link>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen((o) => !o)}
              className="md:hidden p-2 rounded-md transition-colors"
              style={{ color: "var(--brand-text)" }}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(7,14,27,0.85)" }}
          onClick={() => setOpen(false)}
        />
        {/* Drawer panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-72 flex flex-col pt-20 pb-8 px-6 transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
          style={{
            background: "var(--brand-surface)",
            borderLeft: "1px solid var(--brand-border)",
          }}
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 px-3 py-3 rounded-lg text-base font-medium transition-colors"
                  style={{
                    color: isActive ? "var(--brand-accent)" : "var(--brand-text)",
                    background: isActive ? "rgba(201,168,76,0.08)" : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-6 pt-6" style={{ borderTop: "1px solid var(--brand-border)" }}>
            <Link
              href="/contact"
              className="block text-center py-3 rounded-md font-semibold"
              style={{ background: "var(--brand-accent)", color: "var(--brand-bg)" }}
            >
              Contact Us
            </Link>
          </div>
          <p
            className="mt-auto text-xs text-center"
            style={{ color: "var(--brand-text-muted)" }}
          >
            {company.tagline}
          </p>
        </div>
      </div>
    </>
  );
}
