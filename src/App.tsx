import { BookGrid } from "./components/BookGrid";
import { HonorableMentions } from "./components/HonorableMentions";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Right-side page note */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 rotate-90 origin-right z-50">
        <a
          href="https://thearjunagarwal.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-300 text-sm tracking-widest hover:text-white transition px-2"
        >
          Made by Arjun Maneesh Agarwal
        </a>
      </div>

      {/* Wavy background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#1e293b', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#0f172a', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#020617', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grad1)" />
          <path
            d="M0,160 C320,300,420,100,740,200 C1060,300,1120,100,1440,200 L1440,0 L0,0 Z"
            fill="rgba(30, 58, 138, 0.5)"
          />
          <path
            d="M0,320 C360,200,480,400,720,320 C960,240,1200,400,1440,320 L1440,800 L0,800 Z"
            fill="rgba(15, 23, 42, 0.8)"
          />
          <path
            d="M0,500 C240,420,480,580,720,500 C960,420,1200,580,1440,500 L1440,800 L0,800 Z"
            fill="rgba(2, 6, 23, 0.6)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-7xl relative z-10">
        <header className="text-center mb-16">
          <h1 className="text-white mb-4 text-5xl md:text-6xl lg:text-7xl">The Winter I Turned Well Read</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            An curated book list for the cold months by the CMI Lit Club and Book Discussion club.
          </p>
        </header>

        <BookGrid />

        <div className="my-16 mx-auto max-w-3xl">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
        </div>

        <HonorableMentions />
      </div>
    </div>
  );
}