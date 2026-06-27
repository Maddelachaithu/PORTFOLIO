/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ShieldCheck, Cpu, Code2, GraduationCap, Award, HelpCircle } from "lucide-react";

interface WhyHireMeProps {
  isDarkMode: boolean;
}

export default function WhyHireMe({ isDarkMode }: WhyHireMeProps) {
  const coreValues = [
    {
      icon: ShieldCheck,
      title: "Tactical Security Mindset",
      subtitle: "VAPT & Incident Remediation",
      description: "Proven track record of identifying high-severity web vulnerabilities (SQLi, XSS) and optimizing attack surfaces by 40% using packet analysis and system hardening. Sourced entirely from real lab experience and secure configurations.",
      tag: "CORE_SKILL"
    },
    {
      icon: Cpu,
      title: "AI Security Integration",
      subtitle: "Securing LLMs & AI Automation",
      description: "Designing advanced tools like SentinelAI to pre-filter high-velocity networks and mitigate LLM prompt injections. Exploring proactive, self-healing defenses that bridge security analyst logic with machine learning.",
      tag: "FUTURE_SEC"
    },
    {
      icon: Code2,
      title: "Secure Software (DevSecOps)",
      subtitle: "Bridging Code with Forensics",
      description: "Developing compliance scanners (CloudGuard) that parse Terraform HCL and validate AWS environments against CIS Benchmarks. Automating security scanning directly into CI/CD pipelines.",
      tag: "DEV_OPS"
    },
    {
      icon: GraduationCap,
      title: "Aggressive Learning & Growth",
      subtitle: "Continuous Upskilling",
      description: "Acquiring AWS Cloud Practitioner, Google Cyber Security, and CEH credentials. Spent hundreds of hours mastering PortSwigger Labs, TryHackMe, and HackTheBox to stay ahead of modern threat vectors.",
      tag: "SELF_IMPROVEMENT"
    },
    {
      icon: Award,
      title: "Ethical & Proven Posture",
      subtitle: "Responsible Disclosures",
      description: "Maintained clear disclosure paths, reporting 10+ critical misconfigurations to organizations. Consistently ranked in the national Top 50 for CTF challenges, validating real-world exploit capability.",
      tag: "PROOF_OF_WORK"
    },
    {
      icon: HelpCircle,
      title: "Analytic Problem Solving",
      subtitle: "Root Cause & Remediation",
      description: "Translating complex security anomalies into clean, actionable, high-impact technical documentation. Reducing discovery cycle times by 35% through custom automated Python parsers.",
      tag: "PROBLEM_SOLVER"
    }
  ];

  return (
    <section
      id="why-hire-me"
      className={`py-24 px-4 border-t relative overflow-hidden ${
        isDarkMode ? "bg-slate-950 border-slate-900" : "bg-white border-slate-100"
      }`}
    >
      {/* Visual background decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <div className={`absolute top-1/2 left-0 w-80 h-80 rounded-full blur-[8rem] ${
          isDarkMode ? "bg-cyan-500/10" : "bg-blue-200/20"
        }`} />
        <div className={`absolute bottom-0 right-0 w-96 h-96 rounded-full blur-[10rem] ${
          isDarkMode ? "bg-blue-600/10" : "bg-cyan-100/20"
        }`} />
      </div>

      <div className="w-full max-w-5xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono tracking-widest uppercase bg-cyan-500/5 text-cyan-400 border-cyan-500/20">
            <span>[ VALUE_PROPOSITION ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight">
            Why Hire Me
          </h2>
          <p className={`max-w-2xl mx-auto text-sm sm:text-base ${
            isDarkMode ? "text-slate-400" : "text-slate-600"
          }`}>
            An elite combination of defensive security skills, automation proficiency, and an relentless passion for secure architecture. Here is the concrete value I bring.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value, idx) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className={`p-6 rounded-2xl border flex flex-col justify-between transition-all duration-300 ${
                  isDarkMode
                    ? "bg-slate-900/30 border-slate-800/80 hover:border-[#00e5ff]/50 hover:bg-slate-900/50 hover:shadow-[0_0_20px_rgba(0,229,255,0.06)]"
                    : "bg-slate-50 border-slate-200 hover:border-blue-500 hover:bg-white hover:shadow-lg"
                }`}
              >
                <div className="space-y-4">
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl border ${
                      isDarkMode 
                        ? "bg-slate-950 border-slate-800 text-[#00e5ff]" 
                        : "bg-white border-slate-200 text-blue-600"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`font-mono text-[9px] px-2 py-0.5 rounded border ${
                      isDarkMode
                        ? "bg-slate-950/80 text-slate-400 border-slate-800"
                        : "bg-white text-slate-500 border-slate-200"
                    }`}>
                      {value.tag}
                    </span>
                  </div>

                  {/* Card Text */}
                  <div className="space-y-1">
                    <h3 className="text-base font-bold font-display tracking-tight text-slate-100 dark:text-white light:text-slate-900">
                      {value.title}
                    </h3>
                    <p className={`text-xs font-mono ${
                      isDarkMode ? "text-cyan-400/80" : "text-blue-600"
                    }`}>
                      {value.subtitle}
                    </p>
                  </div>

                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    isDarkMode ? "text-slate-400" : "text-slate-600"
                  }`}>
                    {value.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-dashed border-slate-800 dark:border-slate-800/60 light:border-slate-200 flex items-center justify-between text-[10px] font-mono">
                  <span className={isDarkMode ? "text-slate-500" : "text-slate-400"}>Remediation Posture:</span>
                  <span className="text-green-500 font-bold">100% SECURE</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
