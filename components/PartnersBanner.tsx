"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Partner/institution logos — rendered as styled text wordmarks
// since we don't have actual SVG assets for these
const partners = [
  { name: "African Union", abbr: "AU", acronym: true },
  { name: "Bill & Melinda Gates Foundation", abbr: "Gates Foundation", acronym: false },
  { name: "UNDP", abbr: "UNDP", acronym: true },
  { name: "MIT", abbr: "MIT", acronym: true },
  { name: "University of Washington", abbr: "U of W", acronym: false },
] as const;

export default function PartnersBanner() {
  return (
    <section
      className="py-5 md:py-6 border-y"
      style={{
        background: "rgba(255,255,255,0.03)",
        borderColor: "var(--brand-border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-5 md:gap-8">
          {/* Label */}
          <p
            className="font-mono text-[11px] tracking-[0.18em] uppercase whitespace-nowrap flex-shrink-0"
            style={{ color: "var(--brand-text-muted)" }}
          >
            Trusted by Institutions and Partners
          </p>

          {/* Divider */}
          <div
            className="hidden sm:block w-px h-6 flex-shrink-0"
            style={{ background: "var(--brand-border)" }}
          />

          {/* Partner wordmarks */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 md:gap-8 flex-1">
            {partners.map((p, i) => (
              <motion.div
                key={p.name}
                className="flex items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                {p.acronym ? (
                  <span
                    className="font-display text-sm font-bold tracking-wider"
                    style={{ color: "var(--brand-text-muted)" }}
                  >
                    {p.abbr}
                  </span>
                ) : (
                  <span
                    className="font-body text-xs font-semibold tracking-wide"
                    style={{ color: "var(--brand-text-muted)" }}
                  >
                    {p.abbr}
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Arrow chevron */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <ArrowRight size={14} style={{ color: "var(--brand-text-muted)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
