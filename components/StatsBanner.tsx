"use client";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// ── Configurable stat constants ─────────────────────────────────────────────
const STATS = [
  { value: 8, suffix: "+", label: "Products Built" },
  { value: 3, suffix: "+", label: "Awards Received" },
  { value: 5, suffix: "+", label: "Sectors Impacted" },
  { value: 1, suffix: "", label: "Country Served (Growing)" },
] as const;

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1400;
          const step = Math.ceil(duration / target);
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= target) clearInterval(timer);
          }, step);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBanner() {
  return (
    <section
      className="relative py-12 md:py-14 overflow-hidden"
      style={{
        background: "var(--brand-surface)",
        borderTop: "1px solid var(--brand-border)",
        borderBottom: "1px solid var(--brand-border)",
      }}
    >
      {/* Subtle gold accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent 0%, var(--brand-accent) 50%, transparent 100%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center gap-2 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span
                className="font-display text-4xl md:text-5xl font-bold tabular-nums"
                style={{ color: "var(--brand-accent)" }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} />
              </span>
              <span
                className="text-sm font-medium leading-snug max-w-[120px]"
                style={{ color: "var(--brand-text-muted)" }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
