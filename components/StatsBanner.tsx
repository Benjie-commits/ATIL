"use client";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FolderOpen, Users, Building2, BookOpen, Globe } from "lucide-react";

// ── Configurable impact stats ─────────────────────────────────────────────────
const STATS = [
  { value: 25, suffix: "+", label: "Projects Completed", icon: FolderOpen },
  { value: 1,  suffix: "M+", label: "People Impacted",   icon: Users },
  { value: 50, suffix: "+", label: "Institutions Served", icon: Building2 },
  { value: 20, suffix: "+", label: "Research Publications", icon: BookOpen },
  { value: 15, suffix: "+", label: "African Countries",   icon: Globe },
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
          let cur = 0;
          const duration = 1200;
          const steps = Math.min(target, 60);
          const interval = duration / steps;
          const increment = target / steps;
          const timer = setInterval(() => {
            cur += increment;
            if (cur >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(cur));
            }
          }, interval);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsBanner() {
  return (
    <section
      className="py-14 md:py-16"
      style={{
        background: "var(--brand-bg)",
        borderTop: "1px solid var(--brand-border)",
        borderBottom: "1px solid var(--brand-border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          className="text-center font-mono text-xs tracking-[0.25em] uppercase mb-10"
          style={{ color: "var(--brand-accent)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Impact
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-4">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center gap-3 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}
                >
                  <Icon size={18} style={{ color: "var(--brand-accent)" }} />
                </div>
                <span
                  className="font-display text-3xl md:text-4xl font-bold tabular-nums"
                  style={{ color: "var(--brand-accent)" }}
                >
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </span>
                <span
                  className="text-xs font-medium leading-snug max-w-[110px]"
                  style={{ color: "var(--brand-text-muted)" }}
                >
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
