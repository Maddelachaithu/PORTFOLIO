/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, Eye, Code, Cloud, Terminal, Database, Sparkles, Server } from "lucide-react";
import { resumeData } from "../data/resume.js";

interface SkillsProps {
  isDarkMode: boolean;
}

export default function Skills({ isDarkMode }: SkillsProps) {
  const categories = resumeData.skills;
  const [activeCategory, setActiveCategory] = useState<string>(categories[0].category);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Cyber Security":
        return <Eye className="w-4 h-4 shrink-0 text-[#00e5ff]" />;
      case "Programming & Web":
        return <Code className="w-4 h-4 shrink-0 text-[#00e5ff]" />;
      case "Tools & Cloud":
        return <Cloud className="w-4 h-4 shrink-0 text-[#00e5ff]" />;
      case "AI, Data & Databases":
        return <Cpu className="w-4 h-4 shrink-0 text-[#00e5ff]" />;
      default:
        return <Sparkles className="w-4 h-4 shrink-0 text-[#00e5ff]" />;
    }
  };

  const activeSkills = categories.find((cat) => cat.category === activeCategory)?.skills || [];

  return (
    <section
      id="skills"
      className={`py-24 px-4 border-t relative overflow-hidden ${
        isDarkMode ? "bg-slate-950 border-slate-900" : "bg-white border-slate-100"
      }`}
    >
      <div className="w-full max-w-5xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <Cpu className={`w-4 h-4 ${isDarkMode ? "text-[#00e5ff]" : "text-blue-600"} animate-spin [animation-duration:12s]`} />
            <span className={`font-mono text-xs tracking-widest uppercase ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
              [03] SEC_SKILLS_MODULE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
            Security Core & Technical Capabilities
          </h2>
        </div>

        {/* HUD Radar Screen & Interactive Skill Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          {/* Tactical Radar HUD Console - Left col span 5 */}
          <div className="md:col-span-5 flex flex-col items-center justify-center">
            <div className={`relative w-64 h-64 sm:w-72 sm:h-72 rounded-full border flex items-center justify-center radar-sweep ${
              isDarkMode ? "border-slate-800 bg-[#060a17]" : "border-slate-200 bg-slate-50"
            }`}>
              {/* Radar Grid Concentric Circles */}
              <div className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-slate-800/40" />
              <div className="absolute w-[60%] h-[60%] rounded-full border border-slate-800/20" />
              <div className="absolute w-[40%] h-[40%] rounded-full border border-dashed border-slate-800/10" />
              
              {/* Crosshair Axes */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-0.5 bg-slate-800/30" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="h-full w-0.5 bg-slate-800/30" />
              </div>

              {/* Dynamic glowing target nodes representing core modules */}
              <div className="absolute top-[20%] left-[30%] w-3 h-3 rounded-full bg-[#00e5ff] animate-ping" />
              <div className="absolute top-[20%] left-[30%] w-2.5 h-2.5 rounded-full bg-[#00e5ff] border border-slate-950" />
              <span className="absolute top-[12%] left-[26%] font-mono text-[9px] text-[#00e5ff] opacity-80">
                [VAPT_ACTIVE]
              </span>

              <div className="absolute bottom-[35%] right-[22%] w-3 h-3 rounded-full bg-green-500 animate-ping [animation-delay:1.5s]" />
              <div className="absolute bottom-[35%] right-[22%] w-2.5 h-2.5 rounded-full bg-green-500 border border-slate-950" />
              <span className="absolute bottom-[28%] right-[10%] font-mono text-[9px] text-green-400 opacity-80">
                [AI_SEC_INIT]
              </span>

              <div className="absolute top-[45%] right-[18%] w-3 h-3 rounded-full bg-blue-500 animate-ping [animation-delay:0.8s]" />
              <div className="absolute top-[45%] right-[18%] w-2.5 h-2.5 rounded-full bg-blue-500 border border-slate-950" />
              <span className="absolute top-[52%] right-[10%] font-mono text-[9px] text-blue-400 opacity-80">
                [CLOUD_SCAN]
              </span>

              {/* Center System Status Core */}
              <div className={`relative z-10 w-20 h-20 rounded-full flex flex-col items-center justify-center border-2 shadow-inner ${
                isDarkMode ? "bg-slate-950 border-slate-800" : "bg-white border-slate-200"
              }`}>
                <Terminal className={`w-6 h-6 animate-pulse ${isDarkMode ? "text-[#00e5ff]" : "text-blue-600"}`} />
                <span className={`text-[8px] font-mono tracking-widest mt-1 uppercase ${
                  isDarkMode ? "text-slate-500" : "text-slate-400"
                }`}>
                  SYS_OK
                </span>
              </div>
            </div>
            <p className={`font-mono text-[10px] tracking-widest uppercase mt-4 text-center ${
              isDarkMode ? "text-slate-500" : "text-slate-400"
            }`}>
              [MONITOR_HUD: ACTIVE_SCAN_CONTINUOUS]
            </p>
          </div>

          {/* Interactive Skills Progress List - Right col span 7 */}
          <div className="md:col-span-7 space-y-6">
            
            {/* Category Select Toggles */}
            <div className="flex flex-wrap gap-2.5">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(cat.category)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs cursor-pointer border transition-all ${
                    activeCategory === cat.category
                      ? isDarkMode
                        ? "bg-slate-900 border-[#00e5ff] text-[#00e5ff] shadow-[0_0_12px_rgba(0,229,255,0.15)]"
                        : "bg-blue-600 border-blue-600 text-white"
                      : isDarkMode
                        ? "bg-slate-950/60 border-slate-900 text-slate-400 hover:text-slate-200 hover:border-slate-800"
                        : "bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-800"
                  }`}
                >
                  {getCategoryIcon(cat.category)}
                  <span>{cat.category}</span>
                </button>
              ))}
            </div>

            {/* Selected Skills Progress Dashboard */}
            <div className={`p-6 sm:p-8 rounded-2xl border ${
              isDarkMode ? "bg-slate-900/40 border-slate-800" : "bg-slate-50 border-slate-200"
            }`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 gap-6"
                >
                  {activeSkills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-2">
                      <div className="flex items-center justify-between font-mono text-xs sm:text-sm">
                        <span className={`font-medium ${isDarkMode ? "text-slate-200" : "text-slate-700"}`}>
                          {skill.name}
                        </span>
                        <span className={isDarkMode ? "text-[#00e5ff] font-bold" : "text-blue-600 font-bold"}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Skill Bar Outer */}
                      <div className={`w-full h-2 rounded-full overflow-hidden border ${
                        isDarkMode ? "bg-slate-950 border-slate-900" : "bg-slate-200 border-transparent"
                      }`}>
                        {/* Skill Bar Inner */}
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className={`h-full rounded-full ${
                            isDarkMode
                              ? "bg-gradient-to-r from-blue-700 to-[#00e5ff]"
                              : "bg-blue-600"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
