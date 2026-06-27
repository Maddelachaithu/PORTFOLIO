/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FolderGit2, Github, ExternalLink, ShieldCheck, X, AlertTriangle, Lightbulb } from "lucide-react";
import { resumeData, ProjectItem } from "../data/resume.js";

interface ProjectsProps {
  isDarkMode: boolean;
}

export default function Projects({ isDarkMode }: ProjectsProps) {
  const projects = resumeData.projects;
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section
      id="projects"
      className={`py-24 px-4 border-t relative overflow-hidden ${
        isDarkMode ? "bg-[#030712] border-slate-900" : "bg-slate-50 border-slate-100"
      }`}
    >
      <div className="w-full max-w-5xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <FolderGit2 className={`w-4 h-4 ${isDarkMode ? "text-[#00e5ff]" : "text-blue-600"}`} />
            <span className={`font-mono text-xs tracking-widest uppercase ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
              [04] SEC_PROJECTS_MODULE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
            High-Impact Security Case Studies
          </h2>
        </div>

        {/* Project Card Grid Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className={`rounded-2xl border overflow-hidden flex flex-col group cursor-pointer transition-all ${
                isDarkMode 
                  ? "bg-slate-900/40 border-slate-800 hover:border-[#00e5ff] shadow-2xl" 
                  : "bg-white border-slate-200 hover:border-blue-600 shadow-sm"
              }`}
              onClick={() => setSelectedProject(proj)}
            >
              {/* Thumbnail Frame */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={proj.thumbnail}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Glowing Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                
                {/* Category Pin */}
                <span className="absolute top-4 left-4 font-mono text-[10px] bg-[#00e5ff]/15 text-[#00e5ff] border border-[#00e5ff]/30 px-2 py-1 rounded-md backdrop-blur-md">
                  {proj.category}
                </span>
              </div>

              {/* Card Summary content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className={`text-lg font-bold tracking-tight ${
                    isDarkMode ? "text-white" : "text-slate-900"
                  }`}>
                    {proj.title}
                  </h3>
                  <p className={`text-xs sm:text-sm line-clamp-3 leading-relaxed ${
                    isDarkMode ? "text-slate-400" : "text-slate-600"
                  }`}>
                    {proj.problem}
                  </p>
                </div>

                {/* Tags and CTA */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className={`font-mono text-[10px] px-2 py-0.5 rounded ${
                          isDarkMode ? "bg-slate-950 text-slate-400" : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {proj.technologies.length > 3 && (
                      <span className="font-mono text-[10px] text-slate-500 self-center">
                        +{proj.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <span className={`font-mono text-xs font-semibold block transition-all ${
                    isDarkMode ? "text-[#00e5ff] group-hover:text-glow" : "text-blue-600"
                  }`}>
                    [READ_CASE_STUDY] &rarr;
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Case Study Overlay Modal Dialog */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl border p-6 sm:p-8 space-y-6 relative ${
                  isDarkMode ? "bg-slate-950 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-900"
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 p-2 rounded-full border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all cursor-pointer"
                  aria-label="Close Case Study"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Title and Categories */}
                <div className="space-y-2 pr-10">
                  <span className="font-mono text-xs text-blue-400 uppercase tracking-widest block">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-tight">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Hero visual banner inside modal */}
                <div className="h-64 sm:h-80 w-full rounded-xl overflow-hidden border border-slate-800 relative">
                  <img
                    src={selectedProject.thumbnail}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                </div>

                {/* Case Study Details Grid Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
                  
                  {/* Left Column - Core Analysis (7/12 cols) */}
                  <div className="md:col-span-8 space-y-6">
                    
                    {/* Problem Statement */}
                    <div className="space-y-2">
                      <h4 className="font-mono text-xs text-red-400 uppercase tracking-widest flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4" /> [THE_PROBLEM]
                      </h4>
                      <p className={`text-sm sm:text-base leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                        {selectedProject.problem}
                      </p>
                    </div>

                    {/* Solution Statement */}
                    <div className="space-y-2">
                      <h4 className="font-mono text-xs text-green-400 uppercase tracking-widest flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4" /> [THE_SOLUTION]
                      </h4>
                      <p className={`text-sm sm:text-base leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                        {selectedProject.solution}
                      </p>
                    </div>

                    {/* Technical Challenges */}
                    <div className="space-y-2">
                      <h4 className="font-mono text-xs text-amber-500 uppercase tracking-widest flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4" /> [TECHNICAL_CHALLENGE]
                      </h4>
                      <p className={`text-sm sm:text-base leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                        {selectedProject.challenges}
                      </p>
                    </div>

                    {/* Outcomes */}
                    <div className="space-y-2">
                      <h4 className="font-mono text-xs text-[#00e5ff] uppercase tracking-widest flex items-center gap-1.5">
                        <Lightbulb className="w-4 h-4" /> [RELIABILITY_OUTCOMES]
                      </h4>
                      <p className={`text-sm sm:text-base leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                        {selectedProject.outcomes}
                      </p>
                    </div>
                  </div>

                  {/* Right Column - Specs & Links (4/12 cols) */}
                  <div className="md:col-span-4 space-y-6">
                    
                    {/* Action Links */}
                    <div className="flex flex-col gap-3">
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-mono text-xs text-white bg-slate-900 border border-slate-800 hover:border-white transition-all text-center"
                      >
                        <Github className="w-4 h-4" />
                        <span>[GITHUB_REPOSITORY]</span>
                      </a>
                    </div>

                    {/* Key Technical Features */}
                    <div className="space-y-2">
                      <h4 className={`font-mono text-xs uppercase tracking-widest ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                        [KEY_FEATURES]
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feat, idx) => (
                          <li key={idx} className="flex gap-2 text-xs leading-relaxed text-slate-300">
                            <span className="text-[#00e5ff]">&bull;</span>
                            <span className={isDarkMode ? "text-slate-300" : "text-slate-600"}>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Full Tech Stack Spec */}
                    <div className="space-y-2">
                      <h4 className={`font-mono text-xs uppercase tracking-widest ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                        [TECH_STACK_SPEC]
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className={`font-mono text-[10px] px-2.5 py-1 rounded border ${
                              isDarkMode ? "bg-slate-900 border-slate-800 text-slate-400" : "bg-slate-100 border-slate-200 text-slate-600"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
