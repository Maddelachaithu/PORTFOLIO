/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Quote, Shield, Lock, Fingerprint } from "lucide-react";

interface MyPhilosophyProps {
  isDarkMode: boolean;
}

export default function MyPhilosophy({ isDarkMode }: MyPhilosophyProps) {
  return (
    <section
      id="my-philosophy"
      className={`py-28 px-4 border-t relative overflow-hidden ${
        isDarkMode ? "bg-slate-900/20 border-slate-900" : "bg-slate-50 border-slate-200"
      }`}
    >
      {/* Absolute Decorative Security Grids */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#00e5ff]/20 to-transparent" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      <div className="w-full max-w-4xl mx-auto relative z-10 text-center space-y-12">
        {/* Floating security icons with scanning lines */}
        <div className="flex items-center justify-center gap-6">
          <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className={`p-3.5 rounded-full border ${
              isDarkMode ? "bg-slate-950 border-slate-800 text-[#00e5ff]" : "bg-white border-slate-200 text-blue-600"
            }`}
          >
            <Lock className="w-5 h-5" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className={`p-4 rounded-full border -mt-4 relative ${
              isDarkMode 
                ? "bg-slate-950 border-[#00e5ff] text-[#00e5ff] shadow-[0_0_15px_rgba(0,229,255,0.2)]" 
                : "bg-white border-blue-600 text-blue-600 shadow-md"
            }`}
          >
            <Shield className="w-7 h-7" />
            <span className="absolute -inset-0.5 rounded-full border border-cyan-500/30 animate-ping [animation-duration:3s]" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            className={`p-3.5 rounded-full border ${
              isDarkMode ? "bg-slate-950 border-slate-800 text-[#00e5ff]" : "bg-white border-slate-200 text-blue-600"
            }`}
          >
            <Fingerprint className="w-5 h-5" />
          </motion.div>
        </div>

        {/* Section Heading */}
        <div className="space-y-1.5">
          <span className={`font-mono text-[10px] tracking-widest uppercase ${
            isDarkMode ? "text-slate-500" : "text-slate-400"
          }`}>
            [ SEC_MINDSET_POSTULATE ]
          </span>
          <h2 className="text-xl font-bold font-mono tracking-tight text-slate-300 dark:text-slate-300 light:text-slate-700">
            My Security Philosophy
          </h2>
        </div>

        {/* Big Quote Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`relative p-8 sm:p-12 rounded-3xl border text-center max-w-3xl mx-auto ${
            isDarkMode 
              ? "bg-slate-950/80 border-slate-800/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]" 
              : "bg-white border-slate-200 shadow-xl"
          }`}
        >
          {/* Accent Giant Quote Mark */}
          <div className="absolute top-4 left-6 sm:left-10 text-slate-800/25 dark:text-slate-800/25 light:text-slate-100 select-none">
            <Quote className="w-14 h-14 rotate-180" />
          </div>

          <div className="relative space-y-6 z-10">
            <p className={`text-base sm:text-lg md:text-xl font-display font-medium leading-relaxed italic ${
              isDarkMode ? "text-slate-100" : "text-slate-800"
            }`}>
              "Security isn't about stopping every single attack—it is about building highly resilient, transparently audited systems that continuously adapt and heal."
            </p>

            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-8 bg-[#00e5ff]" />
              <span className={`font-mono text-xs tracking-wider uppercase ${
                isDarkMode ? "text-cyan-400" : "text-blue-600"
              }`}>
                Maddela Chaitanya Kumar
              </span>
              <div className="h-px w-8 bg-[#00e5ff]" />
            </div>

            <p className={`text-xs max-w-lg mx-auto ${
              isDarkMode ? "text-slate-500" : "text-slate-400"
            }`}>
              By integrating defensive code auditing with predictive threat modeling and security-first engineering, we transform compliance from a checklist into a live, organic shield.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
