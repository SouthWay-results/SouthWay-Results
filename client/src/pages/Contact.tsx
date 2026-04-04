/**
 * Contact Page — SouthWay Results
 * Sections: Page Hero | Contact Form | Map | Contact Info
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email is required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setSubmitted(true);
  }

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
            Let's Talk
          </motion.p>
          <motion.h1
            className="font-display font-800 text-white mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-white/60 text-lg max-w-2xl mx-auto font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to grow your business? Fill in the form below and we'll get back to you within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* ── FORM + INFO ────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              {submitted ? (
                <div
                  className="rounded-2xl p-12 text-center"
                  style={{ background: "#f4f7ff", border: "1px solid #e0eaff" }}
                >
                  <CheckCircle size={56} className="mx-auto mb-4" style={{ color: "#1E90FF" }} />
                  <h3 className="font-display font-800 text-2xl mb-3" style={{ color: "#0A1628" }}>
                    Message Sent!
                  </h3>
                  <p className="text-gray-500 font-body">
                    Thank you for reaching out. We'll be in touch within 24 hours to book your free strategy session.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl p-8"
                  style={{ background: "#f8faff", border: "1px solid #e0eaff" }}
                  noValidate
                >
                  <h2 className="font-display font-800 text-2xl mb-6" style={{ color: "#0A1628" }}>
                    Send Your Message
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block font-display font-600 text-sm mb-1.5" style={{ color: "#0A1628" }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="John Smith"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm font-body outline-none transition-all"
                        style={{
                          background: "#fff",
                          border: errors.name ? "1.5px solid #EF4444" : "1.5px solid #e0eaff",
                          color: "#333",
                        }}
                        onFocus={(e) => (e.currentTarget.style.border = "1.5px solid #1E90FF")}
                        onBlur={(e) => (e.currentTarget.style.border = errors.name ? "1.5px solid #EF4444" : "1.5px solid #e0eaff")}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block font-display font-600 text-sm mb-1.5" style={{ color: "#0A1628" }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm font-body outline-none transition-all"
                        style={{
                          background: "#fff",
                          border: errors.email ? "1.5px solid #EF4444" : "1.5px solid #e0eaff",
                          color: "#333",
                        }}
                        onFocus={(e) => (e.currentTarget.style.border = "1.5px solid #1E90FF")}
                        onBlur={(e) => (e.currentTarget.style.border = errors.email ? "1.5px solid #EF4444" : "1.5px solid #e0eaff")}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="block font-display font-600 text-sm mb-1.5" style={{ color: "#0A1628" }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+44 7700 000000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm font-body outline-none transition-all"
                      style={{
                        background: "#fff",
                        border: "1.5px solid #e0eaff",
                        color: "#333",
                      }}
                      onFocus={(e) => (e.currentTarget.style.border = "1.5px solid #1E90FF")}
                      onBlur={(e) => (e.currentTarget.style.border = "1.5px solid #e0eaff")}
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block font-display font-600 text-sm mb-1.5" style={{ color: "#0A1628" }}>
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your business and what you're looking to achieve..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm font-body outline-none transition-all resize-none"
                      style={{
                        background: "#fff",
                        border: errors.message ? "1.5px solid #EF4444" : "1.5px solid #e0eaff",
                        color: "#333",
                      }}
                      onFocus={(e) => (e.currentTarget.style.border = "1.5px solid #1E90FF")}
                      onBlur={(e) => (e.currentTarget.style.border = errors.message ? "1.5px solid #EF4444" : "1.5px solid #e0eaff")}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="btn-cta w-full font-display font-700 text-base px-6 py-4 rounded-xl text-white flex items-center justify-center gap-2"
                    style={{ background: "linear-gradient(135deg, #1E90FF, #0066CC)" }}
                  >
                    Send Your Message
                    <Send size={18} />
                  </button>
                </form>
              )}
            </AnimatedSection>

            {/* Contact info */}
            <AnimatedSection className="lg:col-span-2" delay={0.15}>
              <div className="space-y-6">
                <div>
                  <h3 className="font-display font-800 text-xl mb-5" style={{ color: "#0A1628" }}>
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    {[
                      { icon: <Mail size={20} />, label: "Email", value: "southwayresults@gmail.com", href: "mailto:southwayresults@gmail.com" },
                      { icon: <Phone size={20} />, label: "Phone", value: "+44 7729 653253", href: "tel:+447729653253" },
                      { icon: <MapPin size={20} />, label: "Location", value: "London, England", href: null },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-4">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                          style={{ background: "rgba(30,144,255,0.1)", color: "#1E90FF" }}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <div className="font-display font-600 text-xs uppercase tracking-widest text-gray-400 mb-0.5">
                            {item.label}
                          </div>
                          {item.href ? (
                            <a href={item.href} className="font-body text-gray-700 hover:text-blue-500 transition-colors">
                              {item.value}
                            </a>
                          ) : (
                            <span className="font-body text-gray-700">{item.value}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Response time */}
                <div
                  className="rounded-2xl p-5"
                  style={{ background: "rgba(30,144,255,0.05)", border: "1px solid rgba(30,144,255,0.15)" }}
                >
                  <div className="font-display font-700 text-sm mb-1" style={{ color: "#1E90FF" }}>
                    ⚡ Fast Response Guaranteed
                  </div>
                  <p className="text-gray-500 text-sm font-body">
                    We respond to all enquiries within 24 hours. For urgent matters, call us directly.
                  </p>
                </div>

                {/* Urgency */}
                <div
                  className="rounded-2xl p-5"
                  style={{ background: "rgba(245,158,11,0.05)", border: "1px solid rgba(245,158,11,0.2)" }}
                >
                  <div className="font-display font-700 text-sm mb-1" style={{ color: "#F59E0B" }}>
                    ⚡ Limited Spots Available
                  </div>
                  <p className="text-gray-500 text-sm font-body">
                    We only take on a limited number of new clients each month to ensure quality. Book your spot today.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── MAP ────────────────────────────────────────── */}
      <section className="pb-24 bg-white">
        <div className="container">
          <AnimatedSection>
            <div
              className="rounded-2xl overflow-hidden"
              style={{ height: "400px", border: "1px solid #e0eaff" }}
            >
              <iframe
                title="SouthWay Results Location — London, England"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317715.7119164842!2d-0.3817765!3d51.5285582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
