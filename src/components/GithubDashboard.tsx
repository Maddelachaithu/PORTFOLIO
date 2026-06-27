/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { Github, Star, GitFork, BookOpen, Terminal, CheckCircle } from "lucide-react";
import { resumeData } from "../data/resume.js";

interface GithubDashboardProps {
  isDarkMode: boolean;
}

export default function GithubDashboard({ isDarkMode }: GithubDashboardProps) {
  const [hoveredDay, setHoveredDay] = useState<{ count: number; date: string } | null>(null);

  // Re-create realistic GitHub contributions heatmap data (26 weeks x 7 days)
  const contributionGrid = Array.from({ length: 26 }).map((_, weekIdx) => {
    return Array.from({ length: 7 }).map((_, dayIdx) => {
      // Generate some realistic commit counts with more coding on weekdays
      const isWeekend = dayIdx === 0 || dayIdx === 6;
      const baseChance = isWeekend ? 0.25 : 0.75;
      const count = Math.random() < baseChance ? Math.floor(Math.random() * 8) : 0;
      
      const date = new Date();
      date.setDate(date.getDate() - (26 - weekIdx) * 7 + dayIdx);
      const dateString = date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
      
      return { count, date: dateString };
    });
  });

  // Commit messages logs for hacking console feel
  const activityLogs = [
    { time: "2 hours ago", repo: "sentinel-ai", msg: "Patched memory hazard inside Scapy packet sniffer queue." },
    { time: "Yesterday", repo: "cloud-guard", msg: "Added AWS wildcard policy checker under CIS 1.4 Benchmark." },
    { time: "3 days ago", repo: "pwn-lab", msg: "Configured secure Docker bridge networks & host isolation rules." },
    { time: "1 week ago", repo: "sentinel-ai", msg: "Connected Gemini API analytical agent with threat-summary template." },
    { time: "2 weeks ago", repo: "security-core", msg: "Implemented TLS handshake protocol helper." }
  ];

  return (
    <section
      id="github"
      className={`py-24 px-4 border-t relative overflow-hidden ${
        isDarkMode ? "bg-[#030712] border-slate-900" : "bg-slate-50 border-slate-100"
      }`}
    >
      <div className="w-full max-w-5xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <Github className={`w-4 h-4 ${isDarkMode ? "text-[#00e5ff]" : "text-blue-600"}`} />
            <span className={`font-mono text-xs tracking-widest uppercase ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
              [08] SEC_GITHUB_MONITOR
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
            Developer Activity & Repository Status
          </h2>
        </div>

        {/* Console Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Heatmap & Logs Console Panel - Col span 8 */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* GitHub Heatmap Grid Card */}
            <div className={`p-5 sm:p-6 rounded-2xl border ${
              isDarkMode ? "bg-slate-900/40 border-slate-800" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div className="flex items-center justify-between border-b border-slate-800/60 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Terminal className={`w-4 h-4 ${isDarkMode ? "text-[#00e5ff]" : "text-blue-600"}`} />
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                    CONTRIBUTION_HEATMAP
                  </span>
                </div>
                <span className="font-mono text-[10px] text-slate-500">[LAST_6_MONTHS]</span>
              </div>

              {/* Grid Box */}
              <div className="relative overflow-x-auto pb-2 scrollbar-none">
                <div className="flex gap-[3px] min-w-[500px]">
                  {contributionGrid.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-[3px]">
                      {week.map((day, dIdx) => {
                        // Classify density
                        let colorClass = isDarkMode ? "bg-slate-950" : "bg-slate-100";
                        if (day.count > 0 && day.count <= 2) {
                          colorClass = isDarkMode ? "bg-emerald-950/70 border border-emerald-900/30" : "bg-emerald-100";
                        } else if (day.count > 2 && day.count <= 5) {
                          colorClass = isDarkMode ? "bg-emerald-800" : "bg-emerald-300";
                        } else if (day.count > 5) {
                          colorClass = isDarkMode ? "bg-[#00e5ff] text-glow" : "bg-blue-600";
                        }

                        return (
                          <div
                            key={dIdx}
                            className={`w-[11px] h-[11px] rounded-[2px] transition-all duration-150 cursor-pointer hover:ring-1 hover:ring-white ${colorClass}`}
                            onMouseEnter={() => setHoveredDay(day)}
                            onMouseLeave={() => setHoveredDay(null)}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              {/* Heatmap Tooltip HUD */}
              <div className="flex justify-between items-center mt-3 text-[10px] font-mono text-slate-500 h-4">
                <div>
                  {hoveredDay ? (
                    <span className="text-emerald-400">
                      &gt; {hoveredDay.count} commits on {hoveredDay.date}
                    </span>
                  ) : (
                    <span>&gt; Hover blocks to inspect traffic logs</span>
                  )}
                </div>
                <div className="flex items-center gap-1.5">
                  <span>Less</span>
                  <div className="w-2.5 h-2.5 bg-slate-950 rounded-[1px]" />
                  <div className="w-2.5 h-2.5 bg-emerald-900 rounded-[1px]" />
                  <div className="w-2.5 h-2.5 bg-emerald-700 rounded-[1px]" />
                  <div className="w-2.5 h-2.5 bg-[#00e5ff] rounded-[1px]" />
                  <span>More</span>
                </div>
              </div>
            </div>

            {/* Scrolling Technical Logs Terminal */}
            <div className={`p-5 rounded-2xl border ${
              isDarkMode ? "bg-slate-950 border-slate-800" : "bg-slate-100 border-slate-200"
            }`}>
              <div className="flex items-center gap-2 border-b border-slate-800/60 pb-2 mb-3 text-xs font-mono text-slate-400">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>SECURE_CODE_PIPELINE: ACTIVE</span>
              </div>
              
              <div className="space-y-3 h-40 overflow-y-auto font-mono text-xs scrollbar-none pr-2">
                {activityLogs.map((log, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 leading-relaxed text-slate-400">
                    <span className="text-slate-600 shrink-0 select-none">[{log.time}]</span>
                    <span className="text-blue-400 shrink-0">&lt;{log.repo}&gt;</span>
                    <span className={isDarkMode ? "text-slate-300" : "text-slate-700"}>{log.msg}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Languages Profile & Repositories list - Right col span 4 */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Pinned Repos list */}
            <div className={`p-5 rounded-2xl border flex flex-col gap-4 ${
              isDarkMode ? "bg-slate-900/40 border-slate-800" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <h3 className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-400" /> [PINNED_REPOSITORIES]
              </h3>

              <div className="space-y-3">
                {resumeData.projects.map((proj) => (
                  <a
                    key={proj.id}
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl border block transition-all cursor-pointer hover:-translate-y-0.5 ${
                      isDarkMode
                        ? "bg-slate-950/80 border-slate-800 hover:border-[#00e5ff]"
                        : "bg-slate-50 border-slate-200 hover:border-blue-600"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono font-bold mb-1 text-slate-200">
                      <span>{proj.id}</span>
                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <span className="flex items-center gap-0.5">
                          <Star className="w-3 h-3" /> 12
                        </span>
                        <span className="flex items-center gap-0.5">
                          <GitFork className="w-3 h-3" /> 4
                        </span>
                      </div>
                    </div>
                    <p className={`text-[10px] line-clamp-2 ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                      {proj.title}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            {/* Language Profile breakdown */}
            <div className={`p-5 rounded-2xl border flex flex-col gap-4 ${
              isDarkMode ? "bg-slate-900/40 border-slate-800" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <h3 className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">
                [LANGUAGE_PROFILE]
              </h3>
              
              <div className="space-y-3.5 font-mono text-xs text-slate-300">
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span>Python</span>
                    <span className="text-[#00e5ff] font-bold">65%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                    <div className="h-full bg-[#00e5ff]" style={{ width: "65%" }} />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span>Bash / Shell</span>
                    <span className="text-green-500 font-bold">20%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: "20%" }} />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span>TypeScript</span>
                    <span className="text-blue-500 font-bold">15%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500" style={{ width: "15%" }} />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
