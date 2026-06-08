"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Brain, Eye, Heart, Leaf, LayoutGrid, Zap,
  ArrowRight, CheckCircle2
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import PartnersBanner from "@/components/PartnersBanner";
import StatsBanner from "@/components/StatsBanner";
import SectionHeader from "@/components/SectionHeader";
import AwardsSection from "@/components/AwardsSection";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { products } from "@/data/products";

// Icon map for services
const iconMap: Record<string, React.ElementType> = {
  Brain, Eye, Heart, Leaf, LayoutGrid, Zap,
};

// Status pill colours
const statusColors: Record<string, { text: string; bg: string }> = {
  Live:           { text: "#4ade80", bg: "rgba(74,222,128,0.1)" },
  Beta:           { text: "#93c5fd", bg: "rgba(147,197,253,0.1)" },
  Research:       { text: "#c4b5fd", bg: "rgba(196,181,253,0.1)" },
  "Award-Winning":{ text: "#C9A84C", bg: "rgba(201,168,76,0.12)" },
};

// ── Section: About preview ───────────────────────────────────────────────────
function AboutSection() {
  return (
    <section className="py-20 md:py-24" style={{ background: "var(--brand-bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h2
              className="font-display text-3xl md:text-4xl font-bold leading-snug"
              style={{ color: "var(--brand-text)" }}
            >
              About Arapai Technologies International
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--brand-text-muted)" }}>
              {company.aboutSummary}
            </p>
            <ul className="flex flex-col gap-3 mt-1">
              {company.capabilities.map((cap) => (
                <li key={cap} className="flex items-center gap-3">
                  <CheckCircle2 size={16} style={{ color: "var(--brand-accent)", flexShrink: 0 }} />
                  <span className="text-sm" style={{ color: "var(--brand-text)" }}>{cap}</span>
                </li>
              ))}
            </ul>
            <div className="mt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-200"
                style={{
                  border: "1px solid var(--brand-accent)",
                  color: "var(--brand-accent)",
                  background: "transparent",
                }}
              >
                Learn Our Story <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>

          {/* Right: Mission + Vision dark card with globe visual */}
          <motion.div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "var(--brand-surface)",
              border: "1px solid var(--brand-border)",
            }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            {/* Brand image top */}
            <div className="relative w-full aspect-[16/7] overflow-hidden">
              <Image
                src="/brand-identity.jpg"
                alt="Arapai Technologies brand"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to bottom, transparent 30%, var(--brand-surface) 100%)" }}
              />
            </div>
            {/* Content */}
            <div className="p-6 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <p className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--brand-accent)" }}>
                  Our Mission
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--brand-text)" }}>
                  {company.mission}
                </p>
              </div>
              <div
                className="h-px w-full"
                style={{ background: "var(--brand-border)" }}
              />
              <div className="flex flex-col gap-2">
                <p className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--brand-accent)" }}>
                  Our Vision
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--brand-text)" }}>
                  {company.vision}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Section: What We Build ───────────────────────────────────────────────────
function WhatWeBuildSection() {
  return (
    <section
      className="py-20 md:py-24"
      style={{
        background: "var(--brand-surface)",
        borderTop: "1px solid var(--brand-border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        <SectionHeader
          label="Solutions"
          title="What We Build"
          subtitle="Intelligent solutions for Africa's most critical challenges."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] ?? Brain;
            return (
              <motion.div
                key={s.id}
                className="card-lift flex flex-col items-center gap-3 p-5 rounded-xl text-center cursor-default"
                style={{
                  background: "var(--brand-bg)",
                  border: "1px solid var(--brand-border)",
                }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}
                >
                  <Icon size={20} style={{ color: "var(--brand-accent)" }} />
                </div>
                <p className="font-display text-[11px] font-semibold leading-snug" style={{ color: "var(--brand-text)" }}>
                  {s.title}
                </p>
                <p className="text-[11px] leading-snug hidden sm:block" style={{ color: "var(--brand-text-muted)" }}>
                  {s.description.split("—")[0].trim().slice(0, 60)}…
                </p>
              </motion.div>
            );
          })}
        </div>
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: "var(--brand-accent)" }}
          >
            View All Solutions <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Section: Flagship Solutions ──────────────────────────────────────────────
function FlagshipSection() {
  return (
    <section
      className="py-20 md:py-24"
      style={{ background: "var(--brand-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        <div className="flex items-end justify-between">
          <SectionHeader
            label="Products"
            title="Flagship Solutions"
            subtitle="Products and platforms engineered for impact."
            align="left"
          />
          <Link
            href="/portfolio"
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold flex-shrink-0 mb-1"
            style={{ color: "var(--brand-accent)" }}
          >
            View All Products <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {products.map((product, i) => {
            const sc = statusColors[product.status] ?? statusColors["Beta"];
            return (
              <motion.div
                key={product.id}
                className="card-lift group flex flex-col rounded-xl overflow-hidden"
                style={{
                  background: "var(--brand-surface)",
                  border: "1px solid var(--brand-border)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
              >
                {/* Thumbnail */}
                <div
                  className="relative h-32 flex items-center justify-center"
                  style={{ background: product.gradient }}
                >
                  <div className="flex flex-col items-center gap-2 px-4">
                    <span
                      className="font-display text-xs font-bold tracking-widest uppercase text-center"
                      style={{ color: "rgba(201,168,76,0.6)" }}
                    >
                      {product.category}
                    </span>
                    <span
                      className="font-display text-sm font-bold text-center leading-tight"
                      style={{ color: "var(--brand-text)" }}
                    >
                      {product.name}
                    </span>
                  </div>
                  {/* Gold corner accent */}
                  <div
                    className="absolute top-0 right-0 w-10 h-10"
                    style={{
                      background: "linear-gradient(225deg, rgba(201,168,76,0.3) 0%, transparent 60%)",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 p-4 flex-1">
                  {/* Status + category */}
                  <div className="flex items-center gap-2">
                    <span
                      className="font-mono text-[10px] tracking-wider px-2 py-0.5 rounded-full"
                      style={{ color: sc.text, background: sc.bg }}
                    >
                      {product.status}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed flex-1" style={{ color: "var(--brand-text-muted)" }}>
                    {product.description}
                  </p>
                  <Link
                    href="/portfolio"
                    className="flex items-center gap-1 text-xs font-semibold mt-auto transition-opacity hover:opacity-70"
                    style={{ color: "var(--brand-accent)" }}
                  >
                    Learn More <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="sm:hidden text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm font-semibold"
            style={{ color: "var(--brand-accent)" }}
          >
            View All Products <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Section: CTA strip ───────────────────────────────────────────────────────
function CTAStrip() {
  return (
    <section
      className="py-14 md:py-16"
      style={{
        background: "var(--brand-surface)",
        borderTop: "1px solid var(--brand-border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <h2
              className="font-display text-2xl md:text-3xl font-bold"
              style={{ color: "var(--brand-text)" }}
            >
              Let&apos;s build the future together.
            </h2>
            <p className="text-sm" style={{ color: "var(--brand-text-muted)" }}>
              Partner with us to solve real-world challenges with AI and technology.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm transition-all duration-200 glow-accent-hover"
            style={{ background: "var(--brand-accent)", color: "var(--brand-bg)" }}
          >
            Get In Touch <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Home page composition ────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PartnersBanner />
      <AboutSection />
      <WhatWeBuildSection />
      <FlagshipSection />
      <StatsBanner />
      {/* Compact awards strip — highlight-only, full list on About page */}
      <AwardsSection compact={true} />
      <CTAStrip />
    </>
  );
}
