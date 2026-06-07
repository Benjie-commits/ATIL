"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { company } from "@/data/company";
import { services } from "@/data/services";

const topLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  // Solutions has a dropdown
  { href: "/products", label: "Products" },
  { href: "/research", label: "Research" },
  { href: "/impact", label: "Impact" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setDrawerOpen(false); setSolutionsOpen(false); }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isActive = (href: string) => pathname === href;
  const linkStyle = (href: string): React.CSSProperties => ({
    color: isActive(href) ? "var(--brand-accent)" : "var(--brand-text-muted)",
    fontWeight: isActive(href) ? 600 : 400,
  });

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "var(--brand-bg)" : "rgba(7,14,27,0.75)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid var(--brand-border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-[68px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="relative w-8 h-8 md:w-9 md:h-9">
                <Image src={company.logoSvg} alt="Arapai Technologies logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-[13px] font-bold tracking-wide" style={{ color: "var(--brand-text)" }}>
                  ARAPAI
                </span>
                <span className="font-mono text-[8px] tracking-[0.15em] uppercase" style={{ color: "var(--brand-accent)" }}>
                  Technologies International
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
              <Link href="/" className="text-[13px] transition-colors" style={linkStyle("/")}>Home</Link>
              <Link href="/about" className="text-[13px] transition-colors" style={linkStyle("/about")}>About</Link>

              {/* Solutions dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setSolutionsOpen((o) => !o)}
                  className="flex items-center gap-1 text-[13px] transition-colors"
                  style={{ color: solutionsOpen ? "var(--brand-accent)" : "var(--brand-text-muted)" }}
                >
                  Solutions
                  <ChevronDown
                    size={13}
                    className="transition-transform duration-200"
                    style={{ transform: solutionsOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>

                {solutionsOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 rounded-xl overflow-hidden shadow-2xl"
                    style={{
                      background: "var(--brand-surface)",
                      border: "1px solid var(--brand-border)",
                    }}
                  >
                    <div className="p-2">
                      {services.map((s) => (
                        <Link
                          key={s.id}
                          href="/services"
                          className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-[13px] transition-colors hover:bg-brand-surface-hover"
                          style={{ color: "var(--brand-text-muted)" }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: "var(--brand-accent)" }}
                          />
                          {s.shortTitle}
                        </Link>
                      ))}
                    </div>
                    <div
                      className="px-4 py-2.5 flex items-center justify-between"
                      style={{ borderTop: "1px solid var(--brand-border)" }}
                    >
                      <Link
                        href="/services"
                        className="text-[12px] font-semibold"
                        style={{ color: "var(--brand-accent)" }}
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/portfolio" className="text-[13px] transition-colors" style={linkStyle("/portfolio")}>Products</Link>
              <Link href="/about" className="text-[13px] transition-colors" style={{ color: "var(--brand-text-muted)" }}>Research</Link>
              <Link href="/about" className="text-[13px] transition-colors" style={{ color: "var(--brand-text-muted)" }}>Impact</Link>
              <Link href="/team" className="text-[13px] transition-colors" style={{ color: "var(--brand-text-muted)" }}>Careers</Link>
              <Link href="/contact" className="text-[13px] transition-colors" style={linkStyle("/contact")}>Contact</Link>
            </nav>

            {/* Get In Touch CTA */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="px-4 py-2 rounded-md text-[13px] font-semibold transition-all duration-200 glow-accent-hover"
                style={{ background: "var(--brand-accent)", color: "var(--brand-bg)" }}
              >
                Get In Touch
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setDrawerOpen((o) => !o)}
              className="lg:hidden p-2 rounded-md"
              style={{ color: "var(--brand-text)" }}
              aria-label="Toggle menu"
            >
              {drawerOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div
          className="absolute inset-0"
          style={{ background: "rgba(7,14,27,0.88)" }}
          onClick={() => setDrawerOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-72 flex flex-col pt-20 pb-8 px-5 transition-transform duration-300 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
          style={{ background: "var(--brand-surface)", borderLeft: "1px solid var(--brand-border)" }}
        >
          <nav className="flex flex-col gap-1">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services", label: "Solutions" },
              { href: "/portfolio", label: "Products" },
              { href: "/about", label: "Research" },
              { href: "/about", label: "Impact" },
              { href: "/team", label: "Careers" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center px-3 py-3 rounded-lg text-sm font-medium transition-colors"
                style={{
                  color: pathname === link.href ? "var(--brand-accent)" : "var(--brand-text)",
                  background: pathname === link.href ? "rgba(201,168,76,0.08)" : "transparent",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 pt-5" style={{ borderTop: "1px solid var(--brand-border)" }}>
            <Link
              href="/contact"
              className="block text-center py-3 rounded-md font-semibold text-sm"
              style={{ background: "var(--brand-accent)", color: "var(--brand-bg)" }}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
