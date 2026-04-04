/**
 * Services Page — SouthWay Results
 * Sections: Page Hero | Service Cards | Process | CTA
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Facebook, Instagram, Target, Users, CheckCircle, ArrowRight } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

const SERVICES = [
  {
    icon: <Facebook size={32} />,
    title: "Facebook Ads",
    tagline: "Reach Your Ideal Customers",
    desc: "Reach your ideal customers and boost sales with campaigns optimised for performance. We handle everything from audience research and creative production to A/B testing and daily optimisation.",
    features: [
      "Custom audience targeting",
      "Lookalike audience creation",
      "Conversion-optimised ad creatives",
      "Daily campaign monitoring",
      "Weekly performance reports",
    ],
  },
  {
    icon: <Instagram size={32} />,
    title: "Instagram Ads",
    tagline: "Engage & Convert",
    desc: "Engage your audience with highly-targeted visual campaigns that convert. From Stories to Reels, we create scroll-stopping content that drives real business results.",
    features: [
      "Story & Reel ad formats",
      "Visual creative production",
      "Influencer-style content",
      "Retargeting campaigns",
      "Engagement optimisation",
    ],
  },
  {
    icon: <Target size={32} />,
    title: "Lead Generation",
    tagline: "Turn Traffic into Customers",
    desc: "Turn website visitors and social media traffic into real leads for your business. We build and optimise full lead generation funnels — from the first ad impression to the booked appointment.",
    features: [
      "Landing page strategy",
      "Lead magnet creation",
      "CRM integration",
      "Follow-up automation",
      "Cost-per-lead optimisation",
    ],
  },
  {
    icon: <Users size={32} />,
    title: "Strategy Consultation",
    tagline: "Your Personal Marketing Blueprint",
    desc: "Get a personalised marketing strategy tailored to your business goals. Our expert consultants analyse your market, competitors, and current performance to build a roadmap for growth.",
    features: [
      "Competitor analysis",
      "Market positioning",
      "Budget allocation strategy",
      "90-day growth roadmap",
      "Monthly strategy reviews",
    ],
  },
];

const PROCESS = [
  { step: "01", title: "Discovery Call", desc: "We learn about your business, goals, and current marketing efforts." },
  { step: "02", title: "Strategy Build", desc: "We create a custom advertising strategy and campaign structure." },
  { step: "03", title: "Launch & Test", desc: "We launch your campaigns and run rapid A/B tests to find winners." },
  { step: "04", title: "Scale & Optimise", desc: "We scale what works and continuously optimise for lower costs and higher returns." },
];

export default function Services() {
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
            What We Offer
          </motion.p>
          <motion.h1
            className="font-display font-800 text-white mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-white/60 text-lg max-w-2xl mx-auto font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive digital marketing solutions designed to get your local business more leads and sales.
          </motion.p>
        </div>
      </section>

      {/* ── SERVICE CARDS ──────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="space-y-16">
            {SERVICES.map((s, i) => (
              <AnimatedSection key={s.title} delay={0.05}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
                >
                  {/* Icon + title block */}
                  <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                      style={{ background: "rgba(30,144,255,0.1)", color: "#1E90FF" }}
                    >
                      {s.icon}
                    </div>
                    <p className="font-display font-600 text-sm uppercase tracking-widest mb-2" style={{ color: "#1E90FF" }}>
                      {s.tagline}
                    </p>
                    <h2 className="font-display font-800 text-3xl mb-4" style={{ color: "#0A1628" }}>
                      {s.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6 font-body">{s.desc}</p>
                    <Link href="/contact">
                      <button
                        className="btn-cta font-display font-700 text-sm px-6 py-3 rounded-full text-white inline-flex items-center gap-2"
                        style={{ background: "linear-gradient(135deg, #1E90FF, #0066CC)" }}
                      >
                        Request Your Free Strategy Session
                        <ArrowRight size={16} />
                      </button>
                    </Link>
                  </div>

                  {/* Features list */}
                  <div
                    className={`rounded-2xl p-8 ${i % 2 === 1 ? "lg:col-start-1" : ""}`}
                    style={{ background: "#f4f7ff", border: "1px solid #e0eaff" }}
                  >
                    <h4 className="font-display font-700 text-base mb-5" style={{ color: "#0A1628" }}>
                      What's Included:
                    </h4>
                    <ul className="space-y-3">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-gray-700 font-body">
                          <CheckCircle size={18} style={{ color: "#1E90FF", flexShrink: 0 }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────────── */}
      <section
        className="py-24"
        style={{ background: "#0A1628" }}
      >
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <p className="font-display font-600 text-sm uppercase tracking-widest mb-2" style={{ color: "#1E90FF" }}>
              How It Works
            </p>
            <h2 className="font-display font-800 text-white text-3xl">
              Our Simple 4-Step Process
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((p, i) => (
              <AnimatedSection key={p.step} delay={i * 0.1}>
                <div className="metric-card h-full">
                  <div
                    className="font-display font-800 text-4xl mb-3"
                    style={{ color: "rgba(30,144,255,0.3)" }}
                  >
                    {p.step}
                  </div>
                  <h3 className="font-display font-700 text-white text-lg mb-2">{p.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed font-body">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container text-center">
          <AnimatedSection>
            <span
              className="inline-block font-display font-700 text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
              style={{ background: "rgba(245,158,11,0.1)", color: "#F59E0B", border: "1px solid rgba(245,158,11,0.3)" }}
            >
              ⚡ Limited Spots Available
            </span>
            <h2
              className="font-display font-800 mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "#0A1628" }}
            >
              Start Getting More Leads Today
            </h2>
            <p className="text-gray-500 text-lg mb-8 max-w-lg mx-auto font-body">
              Book a free strategy session and we'll show you exactly how we'd grow your business.
            </p>
            <Link href="/contact">
              <button
                className="btn-cta font-display font-700 text-base px-8 py-4 rounded-full text-white inline-flex items-center gap-2"
                style={{ background: "linear-gradient(135deg, #1E90FF, #0066CC)" }}
              >
                Request Your Free Strategy Session
                <ArrowRight size={18} />
              </button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
