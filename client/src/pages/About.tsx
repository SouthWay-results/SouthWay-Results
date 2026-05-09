/**
 * About Page — SouthWay Results
 * Sections: Page Hero | Story | Mission | Values | CTA
 */
import { Link } from "wouter";
import { motion } from "motion/react";
import { ArrowRight, Award, Heart, Zap } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

const VALUES = [
  { icon: <Zap size={24} />, title: "Results-Focused", desc: "Every strategy is designed to get your business more leads and sales without overpromising." },
  { icon: <Heart size={24} />, title: "Personal Approach", desc: "You work directly with me. I treat your business as if it were my own." },
  { icon: <Award size={24} />, title: "Transparent", desc: "No hidden fees or vanity metrics. We focus on what actually matters — real business growth." },
];

export default function About() {
  return (
    <main className="overflow-x-hidden">
      {/* ── PAGE HERO ──────────────────────────────────── */}
      <section
        className="relative pt-40 pb-24"
        style={{ background: "linear-gradient(135deg, #0A1628 0%, #0d2040 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(30,144,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(30,144,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="container relative z-10 text-center">
          <motion.p
            className="font-display font-600 text-sm uppercase tracking-widest mb-3"
            style={{ color: "#1E90FF" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Story
          </motion.p>
          <motion.h1
            className="font-display font-800 text-white mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            About SouthWay Results
          </motion.h1>
          <motion.p
            className="text-white/60 text-lg max-w-2xl mx-auto font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Dedicated digital marketing support for local businesses looking for real growth and personal attention.
          </motion.p>
        </div>
      </section>

      {/* ── STORY ──────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 20px 60px rgba(30,144,255,0.15)" }}>
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000"
                  alt="A dedicated workspace showing focus and marketing planning"
                  className="w-full h-auto"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <p className="font-display font-600 text-sm uppercase tracking-widest mb-3" style={{ color: "#1E90FF" }}>
                Who We Are
              </p>
              <h2 className="font-display font-800 text-3xl mb-6" style={{ color: "#0A1628" }}>
                A Personal Approach to Digital Marketing
              </h2>
              <div className="space-y-4 text-gray-600 font-body leading-relaxed">
                <p>
                  SouthWay Results was founded with a single purpose: to give local service businesses the same
                  competitive edge that big brands enjoy online, but with the personal touch of a dedicated partner.
                </p>
                <p>
                  We aren't a large, faceless agency. We're a highly effective one-man team, which means when you work with SouthWay Results, you work directly with me. This allows for a much more focused and agile approach to your marketing.
                </p>
                <p>
                  I've spent years testing and refining what works for local businesses in London — from plumbers and electricians to fitness studios and professional services. I handle everything from strategy to execution, ensuring your business gets the attention it deserves.
                </p>
                <p>
                  My goal is to build long-term partnerships based on <strong style={{ color: "#1E90FF" }}>real results</strong> and clear communication. No overpromising, just dedicated work to help your business grow.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── MISSION ────────────────────────────────────── */}
      <section
        className="py-20"
        style={{ background: "#f4f7ff" }}
      >
        <div className="container">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <p className="font-display font-600 text-sm uppercase tracking-widest mb-3" style={{ color: "#1E90FF" }}>
              Our Mission
            </p>
            <h2 className="font-display font-800 text-3xl mb-6" style={{ color: "#0A1628" }}>
              Effective Marketing for Every Local Business
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-body">
              We believe every local business deserves access to effective digital marketing. Our mission is to
              deliver high-quality ad strategies that make sense for small and medium businesses
              — with full transparency and a personal commitment to your success.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── VALUES ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container">
          <AnimatedSection className="text-center mb-14">
            <p className="font-display font-600 text-sm uppercase tracking-widest mb-2" style={{ color: "#1E90FF" }}>
              Our Values
            </p>
            <h2 className="font-display font-800 text-3xl" style={{ color: "#0A1628" }}>
              What Drives Everything I Do
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.12}>
                <div
                  className="card-glow rounded-2xl p-8 h-full"
                  style={{ background: "#f8faff", border: "1px solid #e8f0ff" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(30,144,255,0.1)", color: "#1E90FF" }}
                  >
                    {v.icon}
                  </div>
                  <h3 className="font-display font-700 text-xl mb-3" style={{ color: "#0A1628" }}>
                    {v.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed font-body">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #0A1628, #0d2a50)" }}
      >
        <div className="container text-center">
          <AnimatedSection>
            <h2
              className="font-display font-800 text-white mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
            >
              Ready to Grow Your Business?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-lg mx-auto font-body">
              Let's build a marketing strategy that gets your business real results.
            </p>
            <Link href="/contact">
              <button
                className="btn-cta font-display font-700 text-base px-8 py-4 rounded-full text-white inline-flex items-center gap-2"
                style={{ background: "linear-gradient(135deg, #1E90FF, #0066CC)" }}
              >
                Get in Touch
                <ArrowRight size={18} />
              </button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
