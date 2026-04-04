import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex items-center justify-center text-center"
      style={{ background: "linear-gradient(135deg, #0A1628, #0d2040)", paddingTop: "80px" }}
    >
      <div className="container">
        <div className="font-display font-800 text-8xl mb-4" style={{ color: "rgba(30,144,255,0.3)" }}>
          404
        </div>
        <h1 className="font-display font-800 text-white text-3xl mb-4">Page Not Found</h1>
        <p className="text-white/50 mb-8 font-body">
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <Link href="/">
          <button
            className="btn-cta font-display font-700 text-base px-8 py-4 rounded-full text-white inline-flex items-center gap-2"
            style={{ background: "linear-gradient(135deg, #1E90FF, #0066CC)" }}
          >
            Back to Home
            <ArrowRight size={18} />
          </button>
        </Link>
      </div>
    </main>
  );
}
