"use client";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const STATS = [
  { value: 25, suffix: "+",  label: "Projects Completed"    },
  { value: 1,  suffix: "M+", label: "People Impacted"       },
  { value: 50, suffix: "+",  label: "Institutions Served"   },
  { value: 20, suffix: "+",  label: "Research Publications" },
  { value: 15, suffix: "+",  label: "African Countries"     },
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
          const steps = Math.min(target, 60);
          const interval = 1400 / steps;
          const increment = target / steps;
          const timer = setInterval(() => {
            cur += increment;
            if (cur >= target) { setCount(target); clearInterval(timer); }
            else { setCount(Math.floor(cur)); }
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
      className="py-16 md:py-20"
      style={{ background: "var(--canvas-warm)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          className="text-center font-mono text-[10px] tracking-[0.28em] uppercase mb-12"
          style={{ color: "var(--gold)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          — Our Impact
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center gap-2 text-center px-4 py-4"
              style={{
                borderRight: i < STATS.length - 1 ? "1px solid var(--border-soft)" : "none",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.09 }}
            >
              {/* Giant parchment numeral */}
              <span
                className="font-display font-bold tabular-nums leading-none"
                style={{
                  color: "var(--parchment)",
                  fontSize: "clamp(3rem, 5.5vw, 5rem)",
                  textShadow: "0 2px 24px rgba(244,237,220,0.12)",
                }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} />
              </span>

              {/* Label with gold underline */}
              <div className="relative pt-3">
                <span
                  className="font-mono text-[9.5px] tracking-[0.2em] uppercase"
                  style={{ color: "var(--text-muted)" }}
                >
                  {stat.label}
                </span>
                <div
                  className="absolute left-0 bottom-0 w-full h-px"
                  style={{ background: "linear-gradient(to right, transparent, var(--gold), transparent)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
