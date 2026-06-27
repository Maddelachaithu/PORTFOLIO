/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen.js";
import ThemeToggle from "./components/ThemeToggle.js";
import CyberBackground from "./components/CyberBackground.js";
import Hero from "./components/Hero.js";
import WhyHireMe from "./components/WhyHireMe.js";
import About from "./components/About.js";
import MyPhilosophy from "./components/MyPhilosophy.js";
import Experience from "./components/Experience.js";
import Skills from "./components/Skills.js";
import Projects from "./components/Projects.js";
import Certifications from "./components/Certifications.js";
import Education from "./components/Education.js";
import Achievements from "./components/Achievements.js";
import GithubDashboard from "./components/GithubDashboard.js";
import Contact from "./components/Contact.js";
import AiAssistant from "./components/AiAssistant.js";
import Footer from "./components/Footer.js";
import { Shield } from "lucide-react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Set visual mode class on html root element
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleNavigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className={`min-h-screen relative flex flex-col selection:bg-cyan-500/30 selection:text-white ${
      isDarkMode ? "bg-[#030712] text-slate-100" : "bg-white text-slate-800"
    }`}>
      {/* Accessibility Skip Link */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-cyan-500 focus:text-slate-950 focus:rounded-md focus:font-mono focus:text-xs"
      >
        [SKIP_TO_CONTENT]
      </a>

      {/* Global Terminal Scanlines Effect Overlay */}
      <div className="scanline" />

      {/* Interactive Node Background Canvas */}
      <CyberBackground isDarkMode={isDarkMode} />

      {/* Floating Theme Selector Button */}
      <ThemeToggle isDarkMode={isDarkMode} onToggle={() => setIsDarkMode(!isDarkMode)} />

      {/* Main Structural Layout Wrapper */}
      <main className="flex-1 relative z-10">
        <Hero isDarkMode={isDarkMode} onNavigateToSection={handleNavigateToSection} />
        <WhyHireMe isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <MyPhilosophy isDarkMode={isDarkMode} />
        <Experience isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Certifications isDarkMode={isDarkMode} />
        <Education isDarkMode={isDarkMode} />
        <Achievements isDarkMode={isDarkMode} />
        <GithubDashboard isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </main>

      {/* Persistent AI Digital Twin Interactive Console */}
      <AiAssistant isDarkMode={isDarkMode} />

      {/* Minimal Agency Footer */}
      <Footer isDarkMode={isDarkMode} onNavigateToSection={handleNavigateToSection} />
    </div>
  );
}
