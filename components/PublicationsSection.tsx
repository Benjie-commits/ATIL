"use client";
import { motion } from "framer-motion";
import { BookOpen, ExternalLink, ArrowRight } from "lucide-react";
import { publications } from "@/data/publications";
import SectionHeader from "@/components/SectionHeader";

interface PublicationsSectionProps {
  showHeader?: boolean;
}

export default function PublicationsSection({ showHeader = true }: PublicationsSectionProps) {
  return (
    <section
      className="py-16 md:py-20"
      style={{
        background: "var(--brand-bg)",
        borderTop: "1px solid var(--brand-border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        {showHeader && (
          <SectionHeader
            label="Research"
            title="Publications"
            subtitle="Peer-reviewed research from the Arapai team — building the academic foundation for Africa-first AI."
          />
        )}

        <div className="flex flex-col gap-4">
          {publications.map((pub, i) => (
            <motion.div
              key={pub.id}
              className="card-lift flex flex-col sm:flex-row gap-5 p-5 md:p-6 rounded-xl"
              style={{
                background: "var(--brand-surface)",
                border: "1px solid var(--brand-border)",
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 self-start"
                style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}
              >
                <BookOpen size={18} style={{ color: "var(--brand-accent)" }} />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2.5 flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="font-mono text-[10px] tracking-wider px-2 py-0.5 rounded-full"
                    style={{ color: "var(--brand-accent)", background: "rgba(201,168,76,0.1)" }}
                  >
                    {pub.venue}
                  </span>
                  <span
                    className="font-mono text-[10px]"
                    style={{ color: "var(--brand-text-muted)" }}
                  >
                    {pub.year}
                  </span>
                </div>

                <h3
                  className="font-display text-sm md:text-base font-semibold leading-snug"
                  style={{ color: "var(--brand-text)" }}
                >
                  {pub.title}
                </h3>

                <p className="text-xs" style={{ color: "var(--brand-text-muted)" }}>
                  {pub.authors}
                </p>

                {pub.abstract && (
                  <p className="text-xs leading-relaxed" style={{ color: "var(--brand-text-muted)" }}>
                    {pub.abstract}
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-3 mt-1">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {pub.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[9px] tracking-wider px-1.5 py-0.5 rounded"
                        style={{
                          background: "rgba(27,58,107,0.3)",
                          color: "var(--brand-text-muted)",
                          border: "1px solid var(--brand-border)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* DOI link */}
                  {pub.url && (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-semibold ml-auto whitespace-nowrap transition-opacity hover:opacity-70"
                      style={{ color: "var(--brand-accent)" }}
                    >
                      Read Paper <ExternalLink size={11} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
