"use client";
import { motion } from "framer-motion";
import { Newspaper, PlayCircle, Building2, Trophy, ExternalLink, ArrowRight } from "lucide-react";
import { mediaItems, MediaType } from "@/data/media";
import SectionHeader from "@/components/SectionHeader";

const typeConfig: Record<MediaType, { icon: React.ElementType; color: string; bg: string; label: string }> = {
  News:       { icon: Newspaper, color: "#93c5fd", bg: "rgba(147,197,253,0.1)", label: "Press" },
  Video:      { icon: PlayCircle, color: "#f87171", bg: "rgba(248,113,113,0.1)", label: "Video" },
  Exhibition: { icon: Building2, color: "#C9A84C", bg: "rgba(201,168,76,0.12)", label: "Exhibition" },
  Social:     { icon: Trophy,    color: "#4ade80", bg: "rgba(74,222,128,0.1)",  label: "Feature" },
};

export default function MediaSection() {
  return (
    <section
      className="py-20 md:py-24"
      style={{
        background: "var(--brand-surface)",
        borderTop: "1px solid var(--brand-border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        <SectionHeader
          label="Press & Recognition"
          title="In the Media"
          subtitle="Coverage, exhibitions, and video features documenting Arapai's innovations in the field."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mediaItems.map((item, i) => {
            const cfg = typeConfig[item.type];
            const Icon = cfg.icon;
            return (
              <motion.div
                key={item.id}
                className="card-lift flex flex-col gap-4 p-5 rounded-xl"
                style={{
                  background: "var(--brand-bg)",
                  border: "1px solid var(--brand-border)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-2">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: cfg.bg, border: `1px solid ${cfg.color}30` }}
                  >
                    <Icon size={16} style={{ color: cfg.color }} />
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span
                      className="font-mono text-[10px] tracking-wider px-2 py-0.5 rounded-full"
                      style={{ color: cfg.color, background: cfg.bg }}
                    >
                      {cfg.label}
                    </span>
                    <span className="text-[10px]" style={{ color: "var(--brand-text-muted)" }}>
                      {item.date}
                    </span>
                  </div>
                </div>

                {/* Outlet */}
                <p
                  className="font-mono text-[10px] tracking-wider uppercase"
                  style={{ color: "var(--brand-accent)" }}
                >
                  {item.outlet}
                </p>

                {/* Headline */}
                <h3
                  className="font-display text-sm font-semibold leading-snug flex-1"
                  style={{ color: "var(--brand-text)" }}
                >
                  {item.headline}
                </h3>

                {/* Description */}
                <p className="text-xs leading-relaxed" style={{ color: "var(--brand-text-muted)" }}>
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[9px] tracking-wider px-1.5 py-0.5 rounded"
                      style={{
                        background: "rgba(27,58,107,0.3)",
                        color: "var(--brand-text-muted)",
                        border: "1px solid var(--brand-border)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-semibold mt-auto transition-opacity hover:opacity-70"
                    style={{ color: cfg.color }}
                  >
                    {item.urlLabel ?? "View Coverage"} <ExternalLink size={11} />
                  </a>
                ) : (
                  <p
                    className="flex items-center gap-1 text-xs italic mt-auto"
                    style={{ color: "rgba(123,155,196,0.5)" }}
                  >
                    Coverage link to be added
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
