/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ShieldAlert, Compass, Target, Sparkles, BookOpen, Clock } from "lucide-react";
import { resumeData } from "../data/resume.js";

interface AboutProps {
  isDarkMode: boolean;
}

export default function About({ isDarkMode }: AboutProps) {
  const { journey, passion, mission, goals, strengths, learningTimeline } = resumeData.about;

  return (
    <section
      id="about"
      className={`py-24 px-4 border-t relative overflow-hidden ${
        isDarkMode ? "bg-slate-950 border-slate-900" : "bg-white border-slate-100"
      }`}
    >
      <div className="w-full max-w-5xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <Compass className={`w-4 h-4 ${isDarkMode ? "text-[#00e5ff]" : "text-blue-600"} animate-spin [animation-duration:10s]`} />
            <span className={`font-mono text-xs tracking-widest uppercase ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
              [01] SEC_ABOUT_MODULE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
            Career Journey & Personal Mission
          </h2>
        </div>

        {/* Bento-style Premium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Left Column - Journey & Mission (7/12 cols) */}
          <div className="md:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl border ${
                isDarkMode ? "bg-slate-900/40 border-slate-800" : "bg-slate-50 border-slate-200"
              }`}
            >
              <h3 className={`font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-2 ${
                isDarkMode ? "text-[#00e5ff]" : "text-blue-600"
              }`}>
                <BookOpen className="w-4 h-4" /> // CAREER_JOURNEY
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                {journey}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl border ${
                isDarkMode ? "bg-slate-900/40 border-slate-800" : "bg-slate-50 border-slate-200"
              }`}
            >
              <h3 className={`font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-2 ${
                isDarkMode ? "text-[#00e5ff]" : "text-blue-600"
              }`}>
                <ShieldAlert className="w-4 h-4" /> // PASSION_&_MISSION
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                {passion} <span className="font-semibold block mt-4">{mission}</span>
              </p>
            </motion.div>

            {/* Strengths List */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className={`font-mono text-xs uppercase tracking-widest ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                [CORE_STRENGTHS]
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {strengths.map((str, index) => (
                  <div
                    key={index}
                    className={`p-3.5 rounded-lg border text-xs sm:text-sm font-mono flex items-center gap-3 transition-all ${
                      isDarkMode
                        ? "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-[#00e5ff] hover:text-[#00e5ff]"
                        : "bg-slate-100 border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600"
                    }`}
                  >
                    <Sparkles className="w-4 h-4 text-green-500 shrink-0" />
                    <span>{str}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Learning Timeline & Goals (5/12 cols) */}
          <div className="md:col-span-5 space-y-8">
            
            {/* Learning Timeline */}
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? "bg-slate-900/30 border-slate-800" : "bg-slate-50 border-slate-200"
            }`}>
              <h3 className={`font-mono text-xs uppercase tracking-widest mb-6 flex items-center gap-2 ${
                isDarkMode ? "text-[#00e5ff]" : "text-blue-600"
              }`}>
                <Clock className="w-4 h-4 animate-pulse" /> // LEARNING_TIMELINE
              </h3>

              <div className="relative border-l border-slate-700 ml-2 pl-4 space-y-6">
                {learningTimeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Glowing active node */}
                    <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#00e5ff] border-2 border-slate-950 animate-ping" />
                    <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#00e5ff] border border-slate-950" />
                    
                    <span className="font-mono text-[10px] bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
                      {item.year}
                    </span>
                    <h4 className="font-mono text-xs font-bold text-slate-200 mt-2">
                      {item.event}
                    </h4>
                    <p className={`text-xs mt-1 leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                      {item.details}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Goals Checklist */}
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? "bg-slate-900/30 border-slate-800" : "bg-slate-50 border-slate-200"
            }`}>
              <h3 className={`font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-2 ${
                isDarkMode ? "text-[#00e5ff]" : "text-blue-600"
              }`}>
                <Target className="w-4 h-4" /> // STRATEGIC_GOALS
              </h3>
              <ul className="space-y-3">
                {goals.map((g, index) => (
                  <li key={index} className="flex gap-2 text-xs leading-relaxed text-slate-400">
                    <span className="text-green-500 font-bold shrink-0">✓</span>
                    <span className={isDarkMode ? "text-slate-300" : "text-slate-600"}>{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
