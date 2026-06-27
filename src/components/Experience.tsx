/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Shield, Calendar, MapPin, Award, CheckCircle } from "lucide-react";
import { resumeData } from "../data/resume.js";

interface ExperienceProps {
  isDarkMode: boolean;
}

export default function Experience({ isDarkMode }: ExperienceProps) {
  const experiences = resumeData.experience;
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section
      id="experience"
      className={`py-24 px-4 border-t relative overflow-hidden ${
        isDarkMode ? "bg-[#030712] border-slate-900" : "bg-slate-50 border-slate-100"
      }`}
    >
      <div className="w-full max-w-5xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <Shield className={`w-4 h-4 ${isDarkMode ? "text-[#00e5ff]" : "text-blue-600"} animate-pulse`} />
            <span className={`font-mono text-xs tracking-widest uppercase ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
              [02] SEC_EXPERIENCE_MODULE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
            Professional Cybersecurity Milestones
          </h2>
        </div>

        {/* Interactive Milestone Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation Track - Col span 4 */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className={`font-mono text-[10px] tracking-widest uppercase mb-1 ${
              isDarkMode ? "text-slate-500" : "text-slate-400"
            }`}>
              Select Milestone:
            </span>
            {experiences.map((exp, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`p-4 rounded-xl text-left transition-all border font-mono cursor-pointer relative group flex flex-col justify-start gap-1.5 focus:outline-none focus:ring-1 focus:ring-[#00e5ff] ${
                  activeIdx === idx
                    ? isDarkMode
                      ? "bg-slate-900 border-[#00e5ff] text-white shadow-[0_0_15px_rgba(0,229,255,0.15)]"
                      : "bg-white border-blue-600 text-blue-900 shadow-sm"
                    : isDarkMode
                      ? "bg-slate-950/60 border-slate-900 text-slate-400 hover:text-slate-200 hover:border-slate-800"
                      : "bg-slate-100/60 border-slate-200 text-slate-600 hover:text-slate-800 hover:border-slate-300"
                }`}
              >
                {/* Active Indicator Pin */}
                {activeIdx === idx && (
                  <motion.div
                    layoutId="active-experience-indicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-2/3 bg-[#00e5ff] rounded-r"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                
                <span className="text-xs font-semibold tracking-wider opacity-60">
                  {exp.duration}
                </span>
                <span className={`text-sm sm:text-base font-bold ${
                  activeIdx === idx
                    ? isDarkMode ? "text-[#00e5ff]" : "text-blue-600"
                    : ""
                }`}>
                  {exp.role}
                </span>
                <span className="text-xs opacity-80">
                  {exp.company}
                </span>
              </button>
            ))}
          </div>

          {/* Right Card Panel - Col span 8 */}
          <div className="lg:col-span-8 min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className={`p-6 sm:p-8 rounded-2xl border relative overflow-hidden ${
                  isDarkMode 
                    ? "bg-slate-900/40 border-slate-800 shadow-2xl" 
                    : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

                {/* Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 mb-6 gap-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                      {experiences[activeIdx].role}
                    </h3>
                    <p className={`text-sm mt-1 font-mono ${
                      isDarkMode ? "text-[#00e5ff]" : "text-blue-600"
                    }`}>
                      @{experiences[activeIdx].company}
                    </p>
                  </div>
                  <div className="flex flex-col text-xs sm:text-sm text-slate-400 font-mono gap-1">
                    <div className="flex items-center gap-1.5 justify-start sm:justify-end">
                      <Calendar className="w-4 h-4 shrink-0 text-slate-500" />
                      <span>{experiences[activeIdx].duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 justify-start sm:justify-end">
                      <MapPin className="w-4 h-4 shrink-0 text-slate-500" />
                      <span>{experiences[activeIdx].location}</span>
                    </div>
                  </div>
                </div>

                {/* Content Sections */}
                <div className="space-y-6">
                  {/* Responsibilities */}
                  <div className="space-y-3">
                    <h4 className={`font-mono text-xs uppercase tracking-widest ${
                      isDarkMode ? "text-slate-400" : "text-slate-500"
                    }`}>
                      [KEY_RESPONSIBILITIES]
                    </h4>
                    <ul className="space-y-2.5">
                      {experiences[activeIdx].responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex gap-3 text-xs sm:text-sm leading-relaxed">
                          <CheckCircle className="w-4 h-4 text-[#00e5ff] shrink-0 mt-0.5" />
                          <span className={isDarkMode ? "text-slate-300" : "text-slate-600"}>
                            {resp}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  {experiences[activeIdx].achievements && experiences[activeIdx].achievements.length > 0 && (
                    <div className="space-y-3">
                      <h4 className={`font-mono text-xs uppercase tracking-widest ${
                        isDarkMode ? "text-slate-400" : "text-slate-500"
                      }`}>
                        [KEY_ACHIEVEMENTS]
                      </h4>
                      <ul className="space-y-2.5">
                        {experiences[activeIdx].achievements.map((ach, aIdx) => (
                          <li key={aIdx} className="flex gap-3 text-xs sm:text-sm leading-relaxed">
                            <Award className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                            <span className={isDarkMode ? "text-slate-300" : "text-slate-600"}>
                              {ach}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="space-y-3 pt-2">
                    <h4 className={`font-mono text-xs uppercase tracking-widest ${
                      isDarkMode ? "text-slate-400" : "text-slate-500"
                    }`}>
                      [TECHNOLOGIES_DEPLOYED]
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experiences[activeIdx].technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className={`font-mono text-xs px-2.5 py-1 rounded-full border ${
                            isDarkMode
                              ? "bg-slate-950 border-slate-800 text-slate-400"
                              : "bg-slate-100 border-slate-200 text-slate-600"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
