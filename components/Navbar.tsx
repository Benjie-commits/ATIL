"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { company } from "@/data/company";
import { services } from "@/data/services";

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

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setSolutionsOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(16, 29, 61, 0.95)"
            : "rgba(11, 21, 48, 0.7)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled
            ? "1px solid rgba(244,237,220,0.08)"
            : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-[68px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="relative w-8 h-8 md:w-9 md:h-9">
                <Image src={company.logoSvg} alt="Arapai" fill className="object-contain" />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="font-display text-[14px] font-bold tracking-wide"
                  style={{ color: "var(--text)" }}
                >
                  ARAPAI
                </span>
                <span
                  className="font-mono text-[7.5px] tracking-[0.18em] uppercase"
                  style={{ color: "var(--gold)" }}
                >
                  Technologies International
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[13px] transition-colors duration-200"
                  style={{ color: isActive(href) ? "var(--gold)" : "var(--text-muted)" }}
                >
                  {label}
                </Link>
              ))}

              {/* Solutions dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setSolutionsOpen((o) => !o)}
                  className="flex items-center gap-1 text-[13px] transition-colors duration-200"
                  style={{ color: solutionsOpen ? "var(--gold)" : "var(--text-muted)" }}
                >
                  Solutions
                  <ChevronDown
                    size={12}
                    className="transition-transform duration-200"
                    style={{ transform: solutionsOpen ? "rotate(180deg)" : "none" }}
                  />
                </button>
                {solutionsOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 rounded-xl overflow-hidden shadow-2xl"
                    style={{
                      background: "var(--canvas-warm)",
                      border: "1px solid var(--border)",
                      boxShadow: "0 20px 60px rgba(11,21,48,0.7), 0 0 0 1px var(--border)",
                    }}
                  >
                    <div className="p-2">
                      {services.map((s) => (
                        <Link
                          key={s.id}
                          href="/services"
                          className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] transition-colors duration-150"
                          style={{ color: "var(--text-muted)" }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(201,168,76,0.07)";
                            e.currentTarget.style.color = "var(--text)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = "var(--text-muted)";
                          }}
                        >
                          <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--gold)" }} />
                          {s.shortTitle}
                        </Link>
                      ))}
                    </div>
                    <div className="px-4 py-2.5" style={{ borderTop: "1px solid var(--border)" }}>
                      <Link href="/services" className="text-[11px] font-semibold font-mono tracking-wider" style={{ color: "var(--gold)" }}>
                        VIEW ALL SOLUTIONS →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {[
                { href: "/portfolio", label: "Products" },
                { href: "/about",     label: "Research" },
                { href: "/about",     label: "Impact" },
                { href: "/team",      label: "Careers" },
                { href: "/contact",   label: "Contact" },
              ].map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-[13px] transition-colors duration-200"
                  style={{ color: isActive(href) ? "var(--gold)" : "var(--text-muted)" }}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Parchment CTA */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="btn-parchment px-5 py-2 rounded-lg text-[13px] font-semibold"
              >
                Get In Touch
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setDrawerOpen((o) => !o)}
              className="lg:hidden p-2 rounded-md transition-colors"
              style={{ color: "var(--text)" }}
              aria-label="Toggle menu"
            >
              {drawerOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(11,21,48,0.85)" }}
          onClick={() => setDrawerOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-72 flex flex-col pt-20 pb-8 px-5 transition-transform duration-300 ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ background: "var(--canvas-warm)", borderLeft: "1px solid var(--border)" }}
        >
          <nav className="flex flex-col gap-1">
            {[
              { href: "/",        label: "Home" },
              { href: "/about",   label: "About" },
              { href: "/services",label: "Solutions" },
              { href: "/portfolio",label: "Products" },
              { href: "/about",   label: "Research" },
              { href: "/about",   label: "Impact" },
              { href: "/team",    label: "Careers" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="flex items-center px-3 py-3 rounded-lg text-sm font-medium transition-colors"
                style={{
                  color: pathname === href ? "var(--gold)" : "var(--text)",
                  background: pathname === href ? "rgba(201,168,76,0.07)" : "transparent",
                }}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 pt-5" style={{ borderTop: "1px solid var(--border)" }}>
            <Link href="/contact" className="btn-parchment block text-center py-3 rounded-lg text-sm">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
