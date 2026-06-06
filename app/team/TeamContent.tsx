"use client";
import SectionHeader from "@/components/SectionHeader";
import { TeamCard, GhostTeamCard } from "@/components/TeamCard";
import { team, openPositions } from "@/data/team";
import { motion } from "framer-motion";

export default function TeamContent() {
  return (
    <>
      {/* ── Hero band ─────────────────────────────────────────────────────── */}
      <section
        className="pt-32 pb-20 hex-grid-bg"
        style={{ background: "var(--brand-bg)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="The Team"
            title="The People Behind Arapai"
            subtitle="Engineers, researchers, and builders committed to technology that works for Africa."
          />
        </div>
      </section>

      {/* ── Team grid ─────────────────────────────────────────────────────── */}
      <section
        className="py-20 md:py-24"
        style={{ background: "var(--brand-surface)", borderTop: "1px solid var(--brand-border)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <TeamCard key={member.id} member={member} index={i} />
            ))}
            {Array.from({ length: openPositions }).map((_, i) => (
              <GhostTeamCard key={`ghost-${i}`} index={team.length + i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Culture strip ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24" style={{ background: "var(--brand-bg)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
          <SectionHeader
            label="Culture"
            title="How We Work"
            subtitle="A small, high-conviction team — moving fast with institution-grade precision."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                title: "Research-First",
                body: "Every product starts with deep domain research. We solve real problems, not imagined ones.",
              },
              {
                title: "Offline-Resilient",
                body: "We design for the infrastructure that exists: unreliable power, limited bandwidth, diverse devices.",
              },
              {
                title: "Open to Collaborate",
                body: "We partner with universities, NGOs, and development agencies to maximise impact at scale.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="flex flex-col gap-3 p-6 rounded-xl"
                style={{ background: "var(--brand-surface)", border: "1px solid var(--brand-border)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div
                  className="w-1 h-8 rounded-full"
                  style={{ background: "var(--brand-accent)" }}
                />
                <h3 className="font-display text-base font-semibold" style={{ color: "var(--brand-text)" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--brand-text-muted)" }}>
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
