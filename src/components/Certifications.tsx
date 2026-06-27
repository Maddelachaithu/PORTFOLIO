/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Award, Cloud, Shield, CheckCircle } from "lucide-react";
import { resumeData } from "../data/resume.js";

interface CertificationsProps {
  isDarkMode: boolean;
}

export default function Certifications({ isDarkMode }: CertificationsProps) {
  const certs = resumeData.certifications;

  const getCertIcon = (type: string) => {
    switch (type) {
      case "cloud":
        return <Cloud className="w-5 h-5 text-blue-400" />;
      case "security":
        return <Shield className="w-5 h-5 text-[#00e5ff]" />;
      default:
        return <Award className="w-5 h-5 text-green-400" />;
    }
  };

  return (
    <section
      id="certifications"
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
              [05] SEC_CERTIFICATIONS_MODULE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
            Professional Industry Credentials
          </h2>
        </div>

        {/* Certifications Flow Card Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className={`p-6 rounded-2xl border flex flex-col justify-between space-y-6 transition-all ${
                isDarkMode
                  ? "bg-slate-900/40 border-slate-800 hover:border-[#00e5ff] shadow-lg"
                  : "bg-slate-50 border-slate-200 hover:border-blue-600 shadow-sm"
              }`}
            >
              {/* Header Icon / Title */}
              <div className="space-y-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${
                  isDarkMode ? "bg-slate-950 border-slate-800" : "bg-white border-slate-200"
                }`}>
                  {getCertIcon(cert.iconType)}
                </div>

                <div className="space-y-1">
                  <h3 className={`text-base sm:text-lg font-bold tracking-tight ${
                    isDarkMode ? "text-white" : "text-slate-900"
                  }`}>
                    {cert.name}
                  </h3>
                  <p className={`text-xs font-mono ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Status / Verification Block */}
              <div className="space-y-4 border-t border-slate-800/40 pt-4">
                <div className="flex justify-between items-center text-xs font-mono text-slate-500">
                  <span>Issued:</span>
                  <span className="text-slate-300">{cert.date}</span>
                </div>
                
                {cert.credentialId && (
                  <div className="flex justify-between items-center text-xs font-mono text-slate-500">
                    <span>ID:</span>
                    <span className="text-slate-300 truncate max-w-[150px]">{cert.credentialId}</span>
                  </div>
                )}

                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2 rounded-lg font-mono text-xs text-center border block cursor-pointer transition-all ${
                    isDarkMode
                      ? "bg-slate-950 border-slate-800 text-slate-300 hover:border-[#00e5ff] hover:text-[#00e5ff]"
                      : "bg-white border-slate-200 text-slate-600 hover:border-blue-600 hover:text-blue-600"
                  }`}
                >
                  [VERIFY_CREDENTIAL]
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
