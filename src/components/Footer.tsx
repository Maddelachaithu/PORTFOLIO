/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUp, Shield } from "lucide-react";
import { resumeData } from "../data/resume.js";

interface FooterProps {
  isDarkMode: boolean;
  onNavigateToSection: (sectionId: string) => void;
}

export default function Footer({ isDarkMode, onNavigateToSection }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-12 px-4 border-t relative overflow-hidden font-mono ${
      isDarkMode ? "bg-slate-950 border-slate-900" : "bg-white border-slate-100"
    }`}>
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-xs text-slate-500">
        
        {/* Branding & Security status */}
        <div className="flex items-center gap-2.5">
          <Shield className="w-4 h-4 text-[#00e5ff]" />
          <span>
            CHAITANYA_PORTFOLIO_v2.6 &copy; {currentYear}
          </span>
        </div>

        {/* Minimal Copyright details */}
        <div className="text-center md:text-left text-[10px] uppercase tracking-widest text-slate-600">
          DESIGNED_BY_ELITE_AGENCY_MADDELA_CHAITANYA
        </div>

        {/* Back to top button */}
        <button
          onClick={() => onNavigateToSection("hero")}
          id="footer-back-to-top-btn"
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border cursor-pointer transition-all ${
            isDarkMode
              ? "border-slate-800 text-slate-400 hover:text-[#00e5ff] hover:border-[#00e5ff] bg-slate-950/50"
              : "border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-600 bg-white"
          }`}
          aria-label="Back to top of page"
        >
          <span>[TOP]</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}
