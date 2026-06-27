/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail, Shield, ShieldCheck, Terminal } from "lucide-react";
import { resumeData } from "../data/resume.js";

interface HeroProps {
  isDarkMode: boolean;
  onNavigateToSection: (sectionId: string) => void;
}

export default function Hero({ isDarkMode, onNavigateToSection }: HeroProps) {
  const [typedTitle, setTypedTitle] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Cyber Security Analyst",
    "Ethical Hacking Enthusiast",
    "AI Security Developer",
    "Cloud Security Learner",
    "Future SOC Analyst & Penetration Tester"
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 65;

    const handleTyping = () => {
      if (!isDeleting) {
        setTypedTitle(currentRole.substring(0, typedTitle.length + 1));
        if (typedTitle === currentRole) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 1800);
          return;
        }
      } else {
        setTypedTitle(currentRole.substring(0, typedTitle.length - 1));
        if (typedTitle === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }

      timer = setTimeout(handleTyping, typingSpeed);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedTitle, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className={`min-h-screen relative flex flex-col justify-center items-center px-4 overflow-hidden pt-20 pb-16 ${
        isDarkMode ? "cyber-grid bg-[#030712]" : "cyber-grid-light bg-slate-50"
      }`}
    >
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[25rem] sm:w-[35rem] h-[25rem] sm:h-[35rem] rounded-full blur-[10rem] opacity-30 ${
            isDarkMode ? "bg-gradient-to-r from-[#00e5ff] to-blue-600" : "bg-gradient-to-r from-blue-300 to-indigo-200"
          }`}
        />
      </div>

      <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center relative z-10 text-center space-y-8">
        {/* Futuristic personal brand profile logo/avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative group cursor-pointer"
        >
          {/* Glowing background ring */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#00e5ff] to-blue-600 opacity-75 blur-md group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
          
          <div className={`relative w-28 h-28 sm:w-32 sm:h-32 rounded-full flex items-center justify-center border-2 ${
            isDarkMode ? "bg-[#090f20] border-[#00e5ff]" : "bg-white border-blue-600"
          }`}>
            {/* Holographic scanner effect line */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-[#00e5ff] opacity-60 animate-[bounce_3.5s_infinite]" />
            
            {/* Inside branding content */}
            <div className="flex flex-col items-center justify-center">
              <Shield className={`w-12 h-12 ${isDarkMode ? "text-[#00e5ff]" : "text-blue-600"} animate-[pulse_2s_infinite]`} />
              <span className={`text-[10px] font-mono tracking-widest mt-1 ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                SEC_LEVEL: 1
              </span>
            </div>
          </div>
        </motion.div>

        {/* Name and titles */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-5 h-5 text-green-500 animate-pulse" />
            <span className={`font-mono text-xs tracking-widest ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
              IDENTITY_VERIFIED: OK
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight ${
              isDarkMode ? "text-white text-glow" : "text-slate-900"
            }`}
          >
            {resumeData.fullName}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="min-h-[2rem] flex items-center justify-center"
          >
            <div className={`font-mono text-sm sm:text-lg md:text-xl flex items-center gap-2 ${
              isDarkMode ? "text-[#00e5ff]" : "text-blue-600"
            }`}>
              <Terminal className="w-4 h-4 shrink-0" />
              <span>{typedTitle}</span>
              <span className="terminal-cursor" />
            </div>
          </motion.div>
        </div>

        {/* Brand Statement */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={`max-w-2xl text-sm sm:text-base leading-relaxed ${
            isDarkMode ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {resumeData.brandStatement}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <button
            onClick={() => onNavigateToSection("projects")}
            id="hero-view-projects-btn"
            className={`px-6 py-3 rounded-lg font-mono text-sm tracking-wide cursor-pointer transition-all border-2 ${
              isDarkMode
                ? "bg-gradient-to-r from-blue-700 to-[#00e5ff] text-white border-transparent hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]"
                : "bg-blue-600 text-white border-transparent hover:bg-blue-700 shadow-md"
            }`}
          >
            [VIEW_PROJECTS]
          </button>

          <button
            onClick={() => window.print()}
            id="hero-download-resume-btn"
            className={`px-6 py-3 rounded-lg font-mono text-sm tracking-wide cursor-pointer transition-all border-2 ${
              isDarkMode
                ? "bg-slate-950 text-slate-300 border-slate-800 hover:border-[#00e5ff] hover:text-white"
                : "bg-white text-slate-700 border-slate-300 hover:border-blue-600 hover:text-blue-600"
            }`}
          >
            [PRINT_RESUME]
          </button>
        </motion.div>

        {/* Social Links Panel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex items-center justify-center gap-6 pt-4"
        >
          <a
            href={resumeData.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full border transition-all ${
              isDarkMode
                ? "border-slate-800 text-slate-400 hover:text-[#00e5ff] hover:border-[#00e5ff] bg-slate-950/50"
                : "border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-600 bg-white"
            }`}
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={resumeData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full border transition-all ${
              isDarkMode
                ? "border-slate-800 text-slate-400 hover:text-[#00e5ff] hover:border-[#00e5ff] bg-slate-950/50"
                : "border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-600 bg-white"
            }`}
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <button
            onClick={() => onNavigateToSection("contact")}
            className={`p-2 rounded-full border transition-all cursor-pointer ${
              isDarkMode
                ? "border-slate-800 text-slate-400 hover:text-[#00e5ff] hover:border-[#00e5ff] bg-slate-950/50"
                : "border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-600 bg-white"
            }`}
            aria-label="Contact Section"
          >
            <Mail className="w-5 h-5" />
          </button>
        </motion.div>
      </div>

      {/* Animated Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer text-xs"
        onClick={() => onNavigateToSection("about")}
      >
        <span className={`font-mono text-[10px] tracking-widest ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>
          SCROLL_DOWN
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className={`w-4 h-4 ${isDarkMode ? "text-slate-500" : "text-slate-400"}`} />
        </motion.div>
      </motion.div>
    </section>
  );
}
