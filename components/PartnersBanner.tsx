"use client";
import { motion } from "framer-motion";

const partners = [
  { name: "African Union",                   sub: "Strategic Partner"       },
  { name: "Bill & Melinda Gates Foundation", sub: "Funding Partner"         },
  { name: "UNDP",                            sub: "Development Partner"     },
  { name: "MIT",                             sub: "Research Collaborator"   },
  { name: "University of Washington",        sub: "Academic Partner"        },
] as const;

export default function PartnersBanner() {
  return (
    <section
      className="py-6 md:py-7"
      style={{
        background: "var(--canvas)",
        borderBottom: "1px solid var(--border-soft)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-0">
          <p
            className="font-mono text-[9px] tracking-[0.22em] uppercase whitespace-nowrap flex-shrink-0 sm:pr-7"
            style={{ color: "rgba(159,176,204,0.5)" }}
          >
            — Trusted by
          </p>
          <div
            className="hidden sm:block w-px h-7 flex-shrink-0 mr-3"
            style={{ background: "var(--border-soft)" }}
          />
          <div className="flex flex-wrap items-center justify-center sm:justify-start flex-1">
            {partners.map((p, i) => (
              <motion.div
                key={p.name}
                className="flex flex-col items-center px-5 md:px-7 py-1 gap-0.5"
                style={{
                  borderRight: i < partners.length - 1 ? "1px solid var(--border-soft)" : "none",
                }}
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <span
                  className="font-display text-sm font-semibold tracking-wide text-center"
                  style={{ color: "rgba(241,236,220,0.55)" }}
                >
                  {p.name}
                </span>
                <span
                  className="font-mono text-[8px] tracking-[0.15em] uppercase"
                  style={{ color: "rgba(159,176,204,0.38)" }}
                >
                  {p.sub}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
