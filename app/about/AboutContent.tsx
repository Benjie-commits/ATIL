"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Zap, Globe, Lightbulb, FileText, Building2, Calendar, Hash } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { company } from "@/data/company";

const whyUs = [
  {
    icon: Shield,
    title: "Institution-Grade Quality",
    body: "We build systems that meet the rigour expected by universities, hospitals, and government agencies — not MVPs that need rebuilding in 12 months.",
  },
  {
    icon: Zap,
    title: "Built for African Realities",
    body: "Offline-first architectures, low-bandwidth optimisation, and MoMo/USSD integrations — our stack is designed for the infrastructure that actually exists.",
  },
  {
    icon: Globe,
    title: "Cross-Domain Expertise",
    body: "From embedded firmware to cloud-deployed AI models, our team spans the full technology stack with real deployments across energy, agriculture, education, and finance.",
  },
  {
    icon: Lightbulb,
    title: "Research-Backed Innovation",
    body: "We couple applied engineering with ongoing research — including award-winning AI projects and published NLP work on low-resource Ugandan languages.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
};

export default function AboutContent() {
  return (
    <>
      {/* ── Hero band ─────────────────────────────────────────────────────── */}
      <section
        className="pt-32 pb-20 hex-grid-bg"
        style={{ background: "var(--brand-bg)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="About Us"
            title="Engineering Solutions for Africa's Challenges"
            subtitle="We are a Ugandan technology company building scalable, institution-grade digital systems — from IoT energy devices to AI-powered agricultural platforms."
          />
        </div>
      </section>

      {/* ── Story + Visual ────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24" style={{ background: "var(--brand-surface)", borderTop: "1px solid var(--brand-border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <motion.div className="flex flex-col gap-6" {...fadeUp}>
              <span
                className="font-mono text-xs tracking-[0.25em] uppercase"
                style={{ color: "var(--brand-accent)" }}
              >
                Our Story
              </span>
              <h2
                className="font-display text-2xl md:text-3xl font-bold leading-snug"
                style={{ color: "var(--brand-text)" }}
              >
                Founded in Uganda.
                <br />
                <span style={{ color: "var(--brand-accent)" }}>Built for Africa.</span>
              </h2>
              <div className="flex flex-col gap-4 text-base leading-relaxed" style={{ color: "var(--brand-text-muted)" }}>
                <p>
                  Arapai Technologies International Ltd was founded with a clear conviction: Africa does not need
                  technology adapted from elsewhere — it needs technology engineered from within. We are based in
                  Soroti, Uganda, building systems that address the specific constraints and opportunities of East
                  African institutions.
                </p>
                <p>
                  Our portfolio spans prepaid energy systems, AI translation for indigenous languages, university
                  ERPs, AgriTech risk platforms, and industrial automation. Every product is built with the
                  understanding that our users may face unreliable power, limited bandwidth, and complex
                  multi-stakeholder environments.
                </p>
                <p>
                  We are registered under the Companies Act, 2012 (Uganda) and operate with the governance
                  standards of an institution-grade technology firm — because our clients deserve no less.
                </p>
              </div>

              {/* Mission */}
              <div
                className="p-5 rounded-xl"
                style={{
                  background: "rgba(27,58,107,0.15)",
                  border: "1px solid var(--brand-border)",
                  borderLeft: "3px solid var(--brand-accent)",
                }}
              >
                <p className="font-display text-sm font-semibold mb-1" style={{ color: "var(--brand-accent)" }}>
                  Our Mission
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--brand-text)" }}>
                  {company.mission}
                </p>
              </div>
            </motion.div>

            {/* Visual card */}
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Brand identity image */}
              <div className="relative rounded-xl overflow-hidden aspect-video">
                <Image
                  src="/brand-identity.jpg"
                  alt="Arapai Technologies brand identity"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(7,14,27,0.7) 0%, transparent 60%)" }}
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <p
                    className="font-display text-sm font-bold"
                    style={{ color: "var(--brand-text)" }}
                  >
                    Arapai Technologies International Ltd
                  </p>
                  <p
                    className="font-mono text-[10px] tracking-widest uppercase"
                    style={{ color: "var(--brand-accent)" }}
                  >
                    {company.tagline}
                  </p>
                </div>
              </div>

              {/* Registration details card */}
              <div
                className="p-5 rounded-xl flex flex-col gap-3"
                style={{
                  background: "var(--brand-surface)",
                  border: "1px solid var(--brand-border)",
                }}
              >
                <p
                  className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: "var(--brand-accent)" }}
                >
                  Registration Details
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  {[
                    { icon: Building2, label: "Legal Name", value: company.legalName },
                    { icon: Hash, label: "Reg. Number", value: company.registrationNo },
                    { icon: FileText, label: "Authority", value: company.authority },
                    { icon: Calendar, label: "Incorporated", value: company.registeredOn },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-1.5">
                        <Icon size={11} style={{ color: "var(--brand-accent)" }} />
                        <span className="font-mono text-[10px] tracking-wider uppercase" style={{ color: "var(--brand-text-muted)" }}>
                          {label}
                        </span>
                      </div>
                      <span className="text-xs font-medium pl-4" style={{ color: "var(--brand-text)" }}>
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why Arapai ───────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24" style={{ background: "var(--brand-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          <SectionHeader
            label="Why Us"
            title="Why Arapai?"
            subtitle="Four things that distinguish how we engineer."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="card-lift flex flex-col gap-4 p-6 rounded-xl"
                  style={{
                    background: "var(--brand-surface)",
                    border: "1px solid var(--brand-border)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}
                  >
                    <Icon size={20} style={{ color: "var(--brand-accent)" }} />
                  </div>
                  <h3 className="font-display text-base font-semibold" style={{ color: "var(--brand-text)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--brand-text-muted)" }}>
                    {item.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
