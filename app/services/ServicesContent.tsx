"use client";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesContent() {
  return (
    <>
      {/* ── Hero band ─────────────────────────────────────────────────────── */}
      <section
        className="pt-32 pb-20 hex-grid-bg"
        style={{ background: "var(--brand-bg)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="What We Build"
            title="Our Services"
            subtitle="Six domains. One company. Institution-grade systems built end-to-end for African challenges."
          />
        </div>
      </section>

      {/* ── Services grid ─────────────────────────────────────────────────── */}
      <section
        className="py-20 md:py-24"
        style={{ background: "var(--brand-surface)", borderTop: "1px solid var(--brand-border)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Process strip ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24" style={{ background: "var(--brand-bg)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          <SectionHeader
            label="How We Work"
            title="Our Delivery Process"
            subtitle="From requirements to production — our engineering process is designed for reliability and transparency."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: "01", title: "Discovery", body: "Deep requirements gathering: stakeholder interviews, infrastructure audit, and constraint mapping." },
              { step: "02", title: "Architecture", body: "System design optimised for offline-first operation, scalability, and low-resource environments." },
              { step: "03", title: "Build & Iterate", body: "Agile delivery with staged milestones, regular demos, and rapid feedback cycles." },
              { step: "04", title: "Deploy & Support", body: "On-site deployment support, staff training, and ongoing maintenance packages." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                className="flex flex-col gap-3 p-5 rounded-xl"
                style={{ background: "var(--brand-surface)", border: "1px solid var(--brand-border)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span
                  className="font-display text-3xl font-bold"
                  style={{ color: "rgba(201,168,76,0.25)" }}
                >
                  {item.step}
                </span>
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

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section
        className="py-16 text-center"
        style={{ background: "var(--brand-surface)", borderTop: "1px solid var(--brand-border)" }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--brand-text)" }}>
            Ready to commission a system?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-md font-semibold transition-all duration-200 glow-accent-hover"
            style={{ background: "var(--brand-accent)", color: "var(--brand-bg)" }}
          >
            Start a Conversation <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
