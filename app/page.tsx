"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import {
  Brain, Eye, Heart, Leaf, LayoutGrid, Zap,
  ArrowRight, CheckCircle2, ChevronLeft, ChevronRight
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import PartnersBanner from "@/components/PartnersBanner";
import StatsBanner from "@/components/StatsBanner";
import SectionHeader from "@/components/SectionHeader";
import AwardsSection from "@/components/AwardsSection";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { products } from "@/data/products";

const iconMap: Record<string, React.ElementType> = {
  Brain, Eye, Heart, Leaf, LayoutGrid, Zap,
};

// Tonal dark-to-dark fade between adjacent sections
function Fade({ from, to, h = 72 }: { from: string; to: string; h?: number }) {
  return (
    <div
      aria-hidden="true"
      style={{
        height: h,
        background: `linear-gradient(to bottom, ${from}, ${to})`,
        marginTop: -1,
        marginBottom: -1,
        pointerEvents: "none",
      }}
    />
  );
}

const statusColors: Record<string, { text: string; bg: string }> = {
  Live:            { text: "#16a34a", bg: "rgba(22,163,74,0.08)"   },
  Beta:            { text: "#2563eb", bg: "rgba(37,99,235,0.08)"   },
  Research:        { text: "#0FC5BA", bg: "rgba(15,197,186,0.08)"  },
  "Award-Winning": { text: "#C9A84C", bg: "rgba(201,168,76,0.1)"   },
};

// ── Section: About preview ───────────────────────────────────────────────────
function AboutSection() {
  return (
    <section className="py-20 md:py-24" style={{ background: "var(--canvas-warm)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

          {/* Left — text */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="font-mono text-[10px] tracking-[0.28em] uppercase" style={{ color: "var(--gold)" }}>
              — About Us
            </span>
            <h2
              className="font-display text-3xl md:text-4xl font-bold leading-snug"
              style={{ color: "var(--text)" }}
            >
              About Arapai Technologies International
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {company.aboutSummary}
            </p>
            <ul className="flex flex-col gap-3">
              {company.capabilities.map((cap) => (
                <li key={cap} className="flex items-center gap-3">
                  <CheckCircle2 size={15} style={{ color: "var(--gold)", flexShrink: 0 }} />
                  <span className="text-sm" style={{ color: "var(--text)" }}>{cap}</span>
                </li>
              ))}
            </ul>
            <div className="mt-1">
              <Link
                href="/about"
                className="btn-parchment inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm"
              >
                Learn Our Story <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* Right — parchment Mission/Vision card overlapping image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            {/* Brand image */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid var(--border)" }}
            >
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src="/brand-identity.jpg"
                  alt="Arapai Technologies brand"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(11,21,48,0.7) 100%)" }}
                />
              </div>
            </div>

            {/* Floating parchment card — overlaps bottom-left of image */}
            <div
              className="absolute -bottom-6 -left-4 sm:-left-6 w-[85%] max-w-xs rounded-xl p-5 parchment-grain"
              style={{
                background: "var(--parchment)",
                boxShadow: "0 20px 60px rgba(11,21,48,0.45), 0 0 0 1px rgba(201,168,76,0.2)",
              }}
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="font-mono text-[9px] tracking-[0.22em] uppercase" style={{ color: "var(--gold-deep)" }}>
                    — Mission
                  </p>
                  <p className="text-xs leading-relaxed font-medium" style={{ color: "var(--canvas)" }}>
                    {company.mission}
                  </p>
                </div>
                <div className="h-px w-full" style={{ background: "rgba(138,111,44,0.2)" }} />
                <div className="flex flex-col gap-1">
                  <p className="font-mono text-[9px] tracking-[0.22em] uppercase" style={{ color: "var(--gold-deep)" }}>
                    — Vision
                  </p>
                  <p className="text-xs leading-relaxed font-medium" style={{ color: "var(--canvas)" }}>
                    {company.vision}
                  </p>
                </div>
              </div>
            </div>

            {/* Spacer for card overflow */}
            <div className="h-16" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Section: What We Build — bento grid ────────────────────────────────────
function WhatWeBuildSection() {
  return (
    <section className="py-20 md:py-24" style={{ background: "var(--canvas)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        <SectionHeader
          label="Solutions"
          title="What We Build"
          subtitle="Intelligent solutions for Africa's most critical challenges."
        />

        {/* Bento grid: 4-column, first + last service featured (col-span-2) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-auto">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] ?? Brain;
            const isFeatured = i === 0 || i === services.length - 1;
            return (
              <motion.div
                key={s.id}
                className="card-lift group flex flex-col gap-4 p-5 rounded-xl cursor-default"
                style={{
                  gridColumn: isFeatured ? "span 2" : "span 1",
                  background: isFeatured ? "var(--surface-raised)" : "var(--surface)",
                  border: "1px solid var(--border)",
                  minHeight: isFeatured ? 180 : 140,
                }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: isFeatured ? "rgba(201,168,76,0.15)" : "rgba(201,168,76,0.09)",
                      border: "1px solid rgba(201,168,76,0.2)",
                    }}
                  >
                    <Icon size={20} style={{ color: "var(--gold)" }} />
                  </div>
                  {isFeatured && (
                    <span
                      className="ml-auto font-mono text-[8px] tracking-[0.2em] uppercase px-2 py-0.5 rounded"
                      style={{ color: "var(--gold)", background: "rgba(201,168,76,0.1)" }}
                    >
                      Featured
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-1.5">
                  <p
                    className="font-display text-sm font-bold leading-snug"
                    style={{ color: "var(--text)" }}
                  >
                    {s.title}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {isFeatured
                      ? s.description.split("—")[0].trim()
                      : s.description.split("—")[0].trim().slice(0, 70) + "…"}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-75"
            style={{ color: "var(--gold)" }}
          >
            View All Solutions <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Section: Flagship Solutions — scroll-snap carousel ─────────────────────
function FlagshipSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector("[data-card]") as HTMLElement | null;
    const step = (card?.offsetWidth ?? 300) + 20;
    trackRef.current.scrollBy({ left: dir === "right" ? step : -step, behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-24" style={{ background: "var(--canvas-warm)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        <div className="flex items-end justify-between">
          <SectionHeader
            label="Products"
            title="Flagship Solutions"
            subtitle="Platforms and products engineered for impact."
            align="left"
          />
          <div className="hidden sm:flex items-center gap-2 mb-1 flex-shrink-0">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-lg transition-all duration-150"
              style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-muted)" }}
              aria-label="Scroll left"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-lg transition-all duration-150"
              style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-muted)" }}
              aria-label="Scroll right"
            >
              <ChevronRight size={16} />
            </button>
            <Link
              href="/portfolio"
              className="ml-3 flex items-center gap-1.5 text-sm font-semibold"
              style={{ color: "var(--gold)" }}
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Scroll-snap track */}
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto pb-4"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {products.map((product, i) => {
            const sc = statusColors[product.status] ?? statusColors["Beta"];
            return (
              <motion.div
                key={product.id}
                data-card
                className="card-lift flex-shrink-0 flex flex-col rounded-xl overflow-hidden"
                style={{
                  scrollSnapAlign: "start",
                  width: "clamp(260px, 30vw, 320px)",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
              >
                {/* Gradient thumbnail */}
                <div
                  className="relative h-32 flex items-center justify-center"
                  style={{ background: product.gradient }}
                >
                  <div className="flex flex-col items-center gap-1.5 px-4">
                    <span
                      className="font-mono text-[8px] tracking-[0.22em] uppercase"
                      style={{ color: "rgba(201,168,76,0.7)" }}
                    >
                      {product.category}
                    </span>
                    <span
                      className="font-display text-sm font-bold text-center leading-tight"
                      style={{ color: "rgba(255,255,255,0.92)" }}
                    >
                      {product.name}
                    </span>
                  </div>
                  <div
                    className="absolute top-0 right-0 w-10 h-10"
                    style={{ background: "linear-gradient(225deg, rgba(201,168,76,0.3) 0%, transparent 65%)" }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 p-4 flex-1">
                  <span
                    className="font-mono text-[10px] tracking-wider px-2 py-0.5 rounded-full w-fit"
                    style={{ color: sc.text, background: sc.bg }}
                  >
                    {product.status}
                  </span>
                  <p className="text-xs leading-relaxed flex-1" style={{ color: "var(--text-muted)" }}>
                    {product.description}
                  </p>
                  <Link
                    href="/portfolio"
                    className="flex items-center gap-1 text-xs font-semibold transition-opacity hover:opacity-70"
                    style={{ color: "var(--gold)" }}
                  >
                    Learn More <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile nav */}
        <div className="sm:hidden flex items-center justify-between">
          <div className="flex gap-2">
            <button onClick={() => scroll("left")} className="p-2 rounded-lg" style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>
              <ChevronLeft size={16} />
            </button>
            <button onClick={() => scroll("right")} className="p-2 rounded-lg" style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>
              <ChevronRight size={16} />
            </button>
          </div>
          <Link href="/portfolio" className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: "var(--gold)" }}>
            View All Products <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Section: CTA strip — earned parchment moment ────────────────────────────
function CTAStrip() {
  return (
    <section
      className="py-16 md:py-20 parchment-grain relative overflow-hidden"
      style={{ background: "var(--parchment)" }}
    >
      {/* Subtle architectural pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(11,21,48,0.04) 1.5px, transparent 1.5px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Gold corner accent */}
      <div
        className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
        style={{ background: "radial-gradient(circle at top right, rgba(201,168,76,0.18) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[9.5px] tracking-[0.25em] uppercase" style={{ color: "var(--gold-deep)" }}>
              — Work With Us
            </span>
            <h2
              className="font-display text-2xl md:text-3xl font-bold italic leading-snug"
              style={{ color: "var(--canvas)" }}
            >
              Let&apos;s build the future together.
            </h2>
            <p className="text-sm leading-relaxed max-w-[50ch]" style={{ color: "rgba(16,29,61,0.65)" }}>
              Partner with us to solve real-world challenges with AI and intelligent systems.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
              style={{
                background: "var(--canvas)",
                color: "var(--parchment)",
                boxShadow: "0 4px 20px rgba(11,21,48,0.3)",
              }}
            >
              Get In Touch <ArrowRight size={15} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
              style={{
                border: "1px solid rgba(11,21,48,0.2)",
                color: "var(--canvas)",
                background: "transparent",
              }}
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Home page composition ────────────────────────────────────────────────────
export default function HomePage() {
  // All dark tonal transitions — no light/dark cuts
  const ink         = "#0B1530";
  const canvas      = "#101D3D";
  const canvasWarm  = "#152546";
  const parchment   = "#F4EDDC";

  return (
    <>
      <HeroSection />
      {/* hero (ink) → partners (canvas) */}
      <Fade from={ink} to={canvas} h={64} />
      <PartnersBanner />
      {/* canvas → about (canvas-warm) */}
      <Fade from={canvas} to={canvasWarm} h={64} />
      <AboutSection />
      {/* canvas-warm → solutions (canvas) */}
      <Fade from={canvasWarm} to={canvas} h={64} />
      <WhatWeBuildSection />
      {/* canvas → flagship (canvas-warm) */}
      <Fade from={canvas} to={canvasWarm} h={64} />
      <FlagshipSection />
      {/* canvas-warm → stats (canvas-warm) — same tone, minimal */}
      <Fade from={canvasWarm} to={canvasWarm} h={0} />
      <StatsBanner />
      {/* canvas-warm → awards (canvas) */}
      <Fade from={canvasWarm} to={canvas} h={64} />
      <AwardsSection compact={true} />
      {/* canvas → parchment CTA — dramatic light lift */}
      <Fade from={canvas} to={parchment} h={80} />
      <CTAStrip />
      {/* parchment → ink footer — dramatic drop */}
    </>
  );
}
