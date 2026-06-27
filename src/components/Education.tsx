/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";
import { resumeData } from "../data/resume.js";

interface EducationProps {
  isDarkMode: boolean;
}

export default function Education({ isDarkMode }: EducationProps) {
  const eduList = resumeData.education;

  return (
    <section
      id="education"
      className={`py-24 px-4 border-t relative overflow-hidden ${
        isDarkMode ? "bg-[#030712] border-slate-900" : "bg-slate-50 border-slate-100"
      }`}
    >
      <div className="w-full max-w-5xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <GraduationCap className={`w-4 h-4 ${isDarkMode ? "text-[#00e5ff]" : "text-blue-600"}`} />
            <span className={`font-mono text-xs tracking-widest uppercase ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
              [06] SEC_EDUCATION_MODULE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
            Academic Background
          </h2>
        </div>

        {/* Education Item Grid layout */}
        <div className="space-y-8">
          {eduList.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-6 sm:p-8 rounded-2xl border ${
                isDarkMode ? "bg-slate-900/40 border-slate-800" : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                
                {/* Meta details column */}
                <div className="md:col-span-4 space-y-4 font-mono text-xs sm:text-sm text-slate-400">
                  <div className="space-y-1">
                    <span className="text-[#00e5ff] font-bold block">[UNIVERSITY]</span>
                    <h3 className="text-base sm:text-lg font-bold text-white font-sans">
                      {edu.university}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-slate-500" />
                    <span>{edu.location}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-slate-500" />
                    <span>{edu.duration}</span>
                  </div>

                  {edu.gpa && (
                    <div className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 rounded-lg text-xs font-bold">
                      GPA: {edu.gpa}
                    </div>
                  )}
                </div>

                {/* Coursework details column */}
                <div className="md:col-span-8 space-y-6 border-t md:border-t-0 md:border-l border-slate-800/60 pt-6 md:pt-0 md:pl-8">
                  <div className="space-y-2">
                    <span className="font-mono text-xs text-blue-400 uppercase tracking-widest block">
                      [DEGREE_PROGRAM]
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                      {edu.degree}
                    </h4>
                  </div>

                  {/* Program bulletins */}
                  <div className="space-y-3">
                    <span className="font-mono text-xs text-slate-500 uppercase tracking-widest block">
                      [PROGRAM_DETAILS]
                    </span>
                    <ul className="space-y-2">
                      {edu.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex gap-2.5 text-xs sm:text-sm leading-relaxed text-slate-300">
                          <span className="text-blue-500 font-bold shrink-0">&bull;</span>
                          <span className={isDarkMode ? "text-slate-300" : "text-slate-600"}>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
