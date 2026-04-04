/**
 * Home Page — SouthWay Results
 * Sections: Hero | Features | Metrics | Social Proof | CTA Banner
 * Design: Deep navy hero, asymmetric layout, animated counters, diagonal dividers
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Facebook, Instagram, Target, Users, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

// Animated counter hook
function useCounter(target: number, duration = 2000, inView = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return count;
}

function MetricCard({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const count = useCounter(value, 2000, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="metric-card"
    >
      <div className="font-display font-800 text-4xl mb-1" style={{ color: "#1E90FF" }}>
        {count}{suffix}
      </div>
      <div className="text-sm text-white/60 font-body">{label}</div>
    </motion.div>
  );
}

const FEATURES = [
  {
    icon: <Facebook size={28} />,
    title: "Facebook Ads",
    desc: "Reach your ideal customers and increase sales with optimised campaigns built for maximum ROI.",
  },
  {
    icon: <Instagram size={28} />,
    title: "Instagram Ads",
    desc: "Engage your audience and grow brand visibility with scroll-stopping visual campaigns.",
  },
  {
    icon: <Target size={28} />,
    title: "Lead Generation",
    desc: "Turn visitors into real paying customers efficiently with proven funnel strategies.",
  },
  {
    icon: <Users size={28} />,
    title: "Consultation",
    desc: "Personalised marketing strategy tailored to your business goals and local market.",
  },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center clip-diagonal-bottom"
        style={{
          background: "linear-gradient(135deg, #0A1628 0%, #0d2040 60%, #0A1628 100%)",
          paddingTop: "120px",
          paddingBottom: "80px",
        }}
      >
        {/* Background grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(30,144,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(30,144,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <span
                  className="inline-block font-display font-700 text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
                  style={{ background: "rgba(30,144,255,0.15)", color: "#1E90FF", border: "1px solid rgba(30,144,255,0.3)" }}
                >
                  #1 Digital Marketing Agency in London
                </span>
              </motion.div>

              <motion.h1
                className="font-display font-800 text-white leading-tight mb-6"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                Grow Your Business with{" "}
                <span style={{ color: "#1E90FF" }}>High-Converting</span> Ads
              </motion.h1>

              <motion.p
                className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg font-body"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                We help local businesses get more leads and sales using Facebook &
                Instagram marketing. Real results. No fluff.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
              >
                <Link href="/contact">
                  <button
                    className="btn-cta font-display font-700 text-base px-7 py-3.5 rounded-full text-white flex items-center gap-2"
                    style={{ background: "linear-gradient(135deg, #1E90FF, #0066CC)" }}
                  >
                    Book Your Free Consultation
                    <ArrowRight size={18} />
                  </button>
                </Link>
                <Link href="/results">
                  <button
                    className="font-display font-600 text-base px-7 py-3.5 rounded-full text-white flex items-center gap-2 transition-all hover:bg-white/10"
                    style={{ border: "1px solid rgba(255,255,255,0.25)" }}
                  >
                    See Our Results
                  </button>
                </Link>
              </motion.div>

              {/* Trust bullets */}
              <motion.div
                className="flex flex-wrap gap-4 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                {["No long-term contracts", "Free strategy call", "Results in 30 days"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-sm text-white/60">
                    <CheckCircle size={15} style={{ color: "#1E90FF" }} />
                    {t}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Dashboard image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="rounded-2xl overflow-hidden"
                style={{ boxShadow: "0 20px 80px rgba(30,144,255,0.25)" }}
              >
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663513800441/agWqedNbfuZ7b2gsrVcK6B/hero-dashboard-YFkPyUXcHDvZJMMqUF67QJ.webp"
                  alt="Facebook and Instagram marketing analytics dashboard showing ROAS 4.2x, 312 leads, 5.8% CTR"
                  className="w-full h-auto"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -left-4 rounded-xl px-4 py-3 text-white"
                style={{
                  background: "rgba(10,22,40,0.95)",
                  border: "1px solid rgba(30,144,255,0.3)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="font-display font-700 text-lg" style={{ color: "#1E90FF" }}>4.2x</div>
                <div className="text-xs text-white/60">Average ROAS</div>
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-4 rounded-xl px-4 py-3 text-white"
                style={{
                  background: "rgba(10,22,40,0.95)",
                  border: "1px solid rgba(245,158,11,0.3)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="font-display font-700 text-lg" style={{ color: "#F59E0B" }}>312+</div>
                <div className="text-xs text-white/60">Leads / Month</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── METRICS ──────────────────────────────────────── */}
      <section
        style={{ background: "#0A1628", paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <div className="container">
          <AnimatedSection className="text-center mb-12">
            <p className="font-display font-600 text-sm uppercase tracking-widest mb-2" style={{ color: "#1E90FF" }}>
              Trusted by local businesses in London
            </p>
            <h2 className="font-display font-800 text-white text-3xl">
              Numbers That Speak for Themselves
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard value={150} suffix="+" label="Clients Served" delay={0} />
            <MetricCard value={4} suffix=".2x" label="Average ROAS" delay={0.1} />
            <MetricCard value={5000} suffix="+" label="Leads Generated" delay={0.2} />
            <MetricCard value={98} suffix="%" label="Client Satisfaction" delay={0.3} />
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <p className="font-display font-600 text-sm uppercase tracking-widest mb-2" style={{ color: "#1E90FF" }}>
              What We Do
            </p>
            <h2 className="font-display font-800 text-3xl mb-4" style={{ color: "#0A1628" }}>
              Everything You Need to Scale
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto font-body">
              From ad creation to lead nurturing, we handle the full funnel so you can focus on running your business.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.1}>
                <div
                  className="card-glow rounded-2xl p-7 h-full"
                  style={{ background: "#f8faff", border: "1px solid #e8f0ff" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(30,144,255,0.1)", color: "#1E90FF" }}
                  >
                    {f.icon}
                  </div>
                  <h3 className="font-display font-700 text-lg mb-3" style={{ color: "#0A1628" }}>
                    {f.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-body">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ─────────────────────────────────── */}
      <section
        style={{ background: "#f4f7ff" }}
        className="py-20"
      >
        <div className="container">
          <AnimatedSection className="text-center mb-12">
            <p className="font-display font-600 text-sm uppercase tracking-widest mb-2" style={{ color: "#1E90FF" }}>
              Trusted Partners
            </p>
            <h2 className="font-display font-800 text-2xl" style={{ color: "#0A1628" }}>
              Trusted by Local Businesses Across London
            </h2>
          </AnimatedSection>

          {/* Placeholder client logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["Plumber Pro", "LDN Fitness", "Capital Roofing", "Swift Cleaners", "Metro Legal", "City Dental"].map((brand) => (
              <div
                key={brand}
                className="px-6 py-3 rounded-lg font-display font-700 text-sm"
                style={{ background: "#fff", color: "#0A1628", border: "1px solid #dde5f5" }}
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A1628, #0d2a50)" }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(30,144,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(30,144,255,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container relative z-10 text-center">
          <AnimatedSection>
            <span
              className="inline-block font-display font-700 text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
              style={{ background: "rgba(245,158,11,0.15)", color: "#F59E0B", border: "1px solid rgba(245,158,11,0.3)" }}
            >
              ⚡ Limited Spots Available
            </span>
            <h2
              className="font-display font-800 text-white mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
            >
              Ready to Get More Leads & Sales?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-lg mx-auto font-body">
              Book your free 30-minute strategy call today. We'll show you exactly how we'd grow your business.
            </p>
            <Link href="/contact">
              <button
                className="btn-cta font-display font-700 text-base px-8 py-4 rounded-full text-white inline-flex items-center gap-2"
                style={{ background: "linear-gradient(135deg, #1E90FF, #0066CC)" }}
              >
                Claim Your Free Strategy Session
                <ArrowRight size={18} />
              </button>
            </Link>
            <p className="text-white/30 text-xs mt-4 font-body">No commitment required. 100% free.</p>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
