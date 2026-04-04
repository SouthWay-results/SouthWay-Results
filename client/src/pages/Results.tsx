/**
 * Results Page — SouthWay Results
 * Sections: Page Hero | Case Studies | Metrics | CTA
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, DollarSign } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

const CASE_STUDIES = [
  {
    client: "London Plumbing Co.",
    industry: "Home Services",
    color: "#1E90FF",
    problem:
      "A local plumbing business was relying entirely on word-of-mouth referrals. They had zero online presence and were losing jobs to competitors who appeared first in social media feeds.",
    solution:
      "We launched a targeted Facebook Ads campaign focused on homeowners within a 10-mile radius. We created urgency-driven creatives highlighting same-day service and competitive pricing, paired with a streamlined lead capture form.",
    result: "312 qualified leads in 60 days at £4.20 cost per lead. Monthly revenue increased by 68%.",
    metrics: [
      { label: "Leads Generated", value: "312" },
      { label: "Cost Per Lead", value: "£4.20" },
      { label: "Revenue Increase", value: "+68%" },
      { label: "ROAS", value: "5.1x" },
    ],
  },
  {
    client: "Capital Fitness Studio",
    industry: "Health & Fitness",
    color: "#F59E0B",
    problem:
      "A boutique fitness studio in South London was struggling to fill classes after the pandemic. Their Instagram account had followers but zero conversions to paid memberships.",
    solution:
      "We redesigned their Instagram ad strategy with before/after transformation content and a limited-time free trial offer. We retargeted website visitors and Instagram engagers with a compelling membership deal.",
    result: "87 new members signed up in 30 days. Instagram engagement tripled. Cost per acquisition dropped to £18.",
    metrics: [
      { label: "New Members", value: "87" },
      { label: "Cost Per Acquisition", value: "£18" },
      { label: "Engagement Increase", value: "3x" },
      { label: "ROAS", value: "4.8x" },
    ],
  },
  {
    client: "Swift Cleaners",
    industry: "Cleaning Services",
    color: "#10B981",
    problem:
      "A commercial and residential cleaning company had a great service but couldn't break through in a crowded London market. Their previous agency delivered clicks but no actual bookings.",
    solution:
      "We built a full lead generation funnel — Facebook and Instagram ads driving to a dedicated landing page with a free quote form. We implemented follow-up email sequences and retargeting to maximise conversion.",
    result: "Over 200 new booking enquiries in 45 days. Booking rate increased from 12% to 34%.",
    metrics: [
      { label: "Booking Enquiries", value: "200+" },
      { label: "Booking Rate", value: "34%" },
      { label: "Cost Per Lead", value: "£6.80" },
      { label: "ROAS", value: "3.9x" },
    ],
  },
];

export default function Results() {
  return (
    <main className="overflow-x-hidden">
      {/* ── PAGE HERO ──────────────────────────────────── */}
      <section
        className="relative pt-40 pb-24"
        style={{ background: "linear-gradient(135deg, #0A1628 0%, #0d2040 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663513800441/agWqedNbfuZ7b2gsrVcK6B/results-hero-WCDachZ8JcUCR5HA9qWnSa.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(10,22,40,0.9), rgba(13,32,64,0.85))" }}
        />
        <div className="container relative z-10 text-center">
          <motion.p
            className="font-display font-600 text-sm uppercase tracking-widest mb-3"
            style={{ color: "#1E90FF" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Proven Track Record
          </motion.p>
          <motion.h1
            className="font-display font-800 text-white mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Real Results for Local Businesses
          </motion.h1>
          <motion.p
            className="text-white/60 text-lg max-w-2xl mx-auto font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Don't take our word for it — see exactly how we've helped local businesses across London generate more leads and revenue.
          </motion.p>
        </div>
      </section>

      {/* ── AGGREGATE METRICS ──────────────────────────── */}
      <section style={{ background: "#0A1628" }} className="py-16">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Users size={20} />, value: "5,000+", label: "Total Leads Generated" },
              { icon: <TrendingUp size={20} />, value: "4.2x", label: "Average ROAS" },
              { icon: <DollarSign size={20} />, value: "£2M+", label: "Revenue Generated" },
              { icon: <Users size={20} />, value: "150+", label: "Businesses Helped" },
            ].map((m, i) => (
              <AnimatedSection key={m.label} delay={i * 0.1}>
                <div className="metric-card text-center">
                  <div className="flex justify-center mb-2" style={{ color: "#1E90FF" }}>
                    {m.icon}
                  </div>
                  <div className="font-display font-800 text-3xl text-white mb-1">{m.value}</div>
                  <div className="text-xs text-white/50 font-body">{m.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ───────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <p className="font-display font-600 text-sm uppercase tracking-widest mb-2" style={{ color: "#1E90FF" }}>
              Case Studies
            </p>
            <h2 className="font-display font-800 text-3xl" style={{ color: "#0A1628" }}>
              How We Deliver Results
            </h2>
          </AnimatedSection>

          <div className="space-y-12">
            {CASE_STUDIES.map((cs, i) => (
              <AnimatedSection key={cs.client} delay={0.05}>
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{ border: "1px solid #e0eaff" }}
                >
                  {/* Header */}
                  <div
                    className="px-8 py-5 flex items-center justify-between"
                    style={{ background: cs.color, color: "#fff" }}
                  >
                    <div>
                      <div className="font-display font-800 text-xl">{cs.client}</div>
                      <div className="text-white/70 text-sm font-body">{cs.industry}</div>
                    </div>
                    <div className="hidden sm:flex gap-3">
                      {cs.metrics.map((m) => (
                        <div key={m.label} className="text-center px-4 py-2 rounded-lg" style={{ background: "rgba(255,255,255,0.15)" }}>
                          <div className="font-display font-700 text-lg">{m.value}</div>
                          <div className="text-xs text-white/70 font-body">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8" style={{ background: "#f8faff" }}>
                    <div>
                      <div
                        className="font-display font-700 text-xs uppercase tracking-widest mb-3"
                        style={{ color: cs.color }}
                      >
                        The Problem
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed font-body">{cs.problem}</p>
                    </div>
                    <div>
                      <div
                        className="font-display font-700 text-xs uppercase tracking-widest mb-3"
                        style={{ color: cs.color }}
                      >
                        Our Solution
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed font-body">{cs.solution}</p>
                    </div>
                    <div>
                      <div
                        className="font-display font-700 text-xs uppercase tracking-widest mb-3"
                        style={{ color: cs.color }}
                      >
                        The Result
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed font-body font-600">{cs.result}</p>
                    </div>
                  </div>

                  {/* Mobile metrics */}
                  <div className="sm:hidden px-8 pb-6 grid grid-cols-2 gap-3" style={{ background: "#f8faff" }}>
                    {cs.metrics.map((m) => (
                      <div key={m.label} className="text-center p-3 rounded-lg" style={{ background: "#fff", border: "1px solid #e0eaff" }}>
                        <div className="font-display font-700 text-lg" style={{ color: cs.color }}>{m.value}</div>
                        <div className="text-xs text-gray-500 font-body">{m.label}</div>
                      </div>
                    ))}
                  </div>
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
              Want Results Like These?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-lg mx-auto font-body">
              Book a free strategy call and let's talk about how we can do the same for your business.
            </p>
            <Link href="/contact">
              <button
                className="btn-cta font-display font-700 text-base px-8 py-4 rounded-full text-white inline-flex items-center gap-2"
                style={{ background: "linear-gradient(135deg, #1E90FF, #0066CC)" }}
              >
                Get My Free Strategy Session
                <ArrowRight size={18} />
              </button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
