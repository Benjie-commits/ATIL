"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const partners = [
  { name: "African Union",                 abbr: "African Union",         bold: true },
  { name: "Bill & Melinda Gates Foundation", abbr: "Bill & Melinda\nGates Foundation", bold: false },
  { name: "UNDP",                          abbr: "UNDP",                  bold: true },
  { name: "MIT",                           abbr: "MIT",                   bold: true },
  { name: "University of Washington",      abbr: "University of\nWashington", bold: false },
] as const;

export default function PartnersBanner() {
  return (
    <section
      className="py-5 md:py-6"
      style={{
        background: "var(--brand-light-bg)",
        borderBottom: "1px solid var(--brand-light-border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-5 md:gap-8">
          <p
            className="font-mono text-[10px] tracking-[0.18em] uppercase whitespace-nowrap flex-shrink-0"
            style={{ color: "var(--brand-text-dark-muted)" }}
          >
            Trusted by Institutions and Partners
          </p>
          <div
            className="hidden sm:block w-px h-6 flex-shrink-0"
            style={{ background: "var(--brand-light-border)" }}
          />
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-7 md:gap-10 flex-1">
            {partners.map((p, i) => (
              <motion.div
                key={p.name}
                className="flex items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <span
                  className={p.bold ? "font-display text-sm font-bold tracking-wider" : "font-body text-xs font-semibold tracking-wide"}
                  style={{ color: "#374151", whiteSpace: "pre-line", textAlign: "center" }}
                >
                  {p.abbr}
                </span>
              </motion.div>
            ))}
          </div>
          <div className="hidden md:flex items-center flex-shrink-0">
            <ArrowRight size={14} style={{ color: "#94A3B8" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
