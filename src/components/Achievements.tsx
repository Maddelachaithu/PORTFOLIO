/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Award, Zap, Shield, Search } from "lucide-react";
import { resumeData } from "../data/resume.js";

interface AchievementsProps {
  isDarkMode: boolean;
}

// Custom animated counter component that counts up to a target number
function AnimatedCounter({ value, duration = 1500 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Extract number from string, e.g. "Top 50" -> 50, "10+" -> 10, "200+" -> 200
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  const isPlus = value.includes("+");
  const isTop = value.toLowerCase().includes("top");

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = numericValue;
    if (start === end) return;

    const totalSteps = 50;
    const stepTime = Math.max(10, Math.floor(duration / totalSteps));
    const increment = Math.ceil(end / totalSteps);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, numericValue, duration]);

  const renderValue = () => {
    if (isTop) return `Top ${count}`;
    if (isPlus) return `${count}+`;
    return count;
  };

  return <span ref={ref}>{renderValue()}</span>;
}

export default function Achievements({ isDarkMode }: AchievementsProps) {
  const achievements = resumeData.achievements;

  const getCardIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Zap className="w-6 h-6 text-[#00e5ff]" />;
      case 1:
        return <Search className="w-6 h-6 text-green-400" />;
      default:
        return <Shield className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section
      id="achievements"
      className={`py-24 px-4 border-t relative overflow-hidden ${
        isDarkMode ? "bg-slate-950 border-slate-900" : "bg-white border-slate-100"
      }`}
    >
      <div className="w-full max-w-5xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <Award className={`w-4 h-4 ${isDarkMode ? "text-[#00e5ff]" : "text-blue-600"}`} />
            <span className={`font-mono text-xs tracking-widest uppercase ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
              [07] SEC_ACHIEVEMENTS_MODULE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
            Accomplishments & Key Milestones
          </h2>
        </div>

        {/* Counters / Highlights Card Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((ach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-2xl border flex flex-col justify-between space-y-6 ${
                isDarkMode ? "bg-slate-900/40 border-slate-800 shadow-xl" : "bg-slate-50 border-slate-200 shadow-sm"
              }`}
            >
              {/* Metric Icon & Label */}
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                  isDarkMode ? "bg-slate-950 border-slate-800" : "bg-white border-slate-200"
                }`}>
                  {getCardIcon(index)}
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-blue-400 uppercase tracking-widest block">
                    {ach.metric}
                  </span>
                  <h3 className={`text-4xl sm:text-5xl font-display font-extrabold tracking-tight ${
                    isDarkMode ? "text-white text-glow" : "text-slate-900"
                  }`}>
                    <AnimatedCounter value={ach.value} />
                  </h3>
                </div>
              </div>

              {/* Description Block */}
              <div className="border-t border-slate-800/40 pt-4">
                <h4 className="font-mono text-xs text-slate-400 font-bold mb-1">
                  {ach.title}
                </h4>
                <p className={`text-xs sm:text-sm leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                  {ach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
