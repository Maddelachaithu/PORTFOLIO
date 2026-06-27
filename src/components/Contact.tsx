/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, ShieldCheck } from "lucide-react";
import { resumeData } from "../data/resume.js";

interface ContactProps {
  isDarkMode: boolean;
}

export default function Contact({ isDarkMode }: ContactProps) {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", text: "Please supply all required fields." });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    // Simulate secure transmission over mock pgp handshake
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({
        type: "success",
        text: "SECURE_TRANSMISSION: Completed. Thank you for your message, I will respond within 12 hours!"
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className={`py-24 px-4 border-t relative overflow-hidden ${
        isDarkMode ? "bg-slate-950 border-slate-900" : "bg-white border-slate-100"
      }`}
    >
      <div className="w-full max-w-5xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <Mail className={`w-4 h-4 ${isDarkMode ? "text-[#00e5ff]" : "text-blue-600"}`} />
            <span className={`font-mono text-xs tracking-widest uppercase ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
              [09] SEC_CONTACT_MODULE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
            Initiate Secure Communication
          </h2>
        </div>

        {/* Form & Sidebar Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Contact Details Column - Col span 4 */}
          <div className="md:col-span-5 space-y-8 font-mono text-xs sm:text-sm">
            <p className={`leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
              Please transmit your request using the secure console on the right, or establish contact directly through the public keys provided below.
            </p>

            <div className="space-y-5">
              <div className={`p-4 rounded-xl border flex items-center gap-4 ${
                isDarkMode ? "bg-slate-900/40 border-slate-850" : "bg-slate-100 border-slate-200"
              }`}>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${
                  isDarkMode ? "bg-slate-950 border-slate-800" : "bg-white border-slate-200"
                }`}>
                  <Mail className={`w-5 h-5 ${isDarkMode ? "text-[#00e5ff]" : "text-blue-600"}`} />
                </div>
                <div>
                  <span className="text-slate-500 text-[10px] uppercase block">[EMAIL_ADDRESS]</span>
                  <a href={`mailto:${resumeData.email}`} className="text-slate-200 hover:text-[#00e5ff] text-xs sm:text-sm font-semibold truncate block max-w-[220px]">
                    {resumeData.email}
                  </a>
                </div>
              </div>

              <div className={`p-4 rounded-xl border flex items-center gap-4 ${
                isDarkMode ? "bg-slate-900/40 border-slate-850" : "bg-slate-100 border-slate-200"
              }`}>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${
                  isDarkMode ? "bg-slate-950 border-slate-800" : "bg-white border-slate-200"
                }`}>
                  <MapPin className={`w-5 h-5 ${isDarkMode ? "text-[#00e5ff]" : "text-blue-600"}`} />
                </div>
                <div>
                  <span className="text-slate-500 text-[10px] uppercase block">[NODE_LOCATION]</span>
                  <span className="text-slate-200 text-xs sm:text-sm font-semibold">
                    {resumeData.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Verification Block */}
            <div className={`p-4 rounded-xl border flex gap-3.5 items-start ${
              isDarkMode ? "bg-slate-950/60 border-slate-900" : "bg-slate-50 border-slate-250"
            }`}>
              <ShieldCheck className="w-5 h-5 text-green-500 shrink-0 mt-0.5 animate-pulse" />
              <div className="space-y-1">
                <span className="text-white text-xs font-bold font-sans">Strict SSL Configuration</span>
                <p className="text-[10px] text-slate-500 leading-normal">
                  All transmissions are fully integrity-checked and protected against MITM tampering.
                </p>
              </div>
            </div>
          </div>

          {/* Secure Contact Console Form - Col span 7 */}
          <div className="md:col-span-7">
            <form
              onSubmit={handleSubmit}
              className={`p-6 sm:p-8 rounded-2xl border space-y-5 relative ${
                isDarkMode ? "bg-slate-900/40 border-slate-800" : "bg-slate-50 border-slate-200 shadow-sm"
              }`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5 font-mono text-xs">
                  <label htmlFor="name" className="text-slate-400 font-bold block">
                    [NAME] <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Recruiter or Company Name"
                    className={`w-full p-3 rounded-lg border text-white font-sans text-sm focus:outline-none focus:ring-1 focus:ring-[#00e5ff] ${
                      isDarkMode ? "bg-slate-950 border-slate-850" : "bg-white border-slate-300 text-slate-800"
                    }`}
                  />
                </div>

                <div className="space-y-1.5 font-mono text-xs">
                  <label htmlFor="email" className="text-slate-400 font-bold block">
                    [EMAIL_HANDSHAKE] <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="recruiter@company.com"
                    className={`w-full p-3 rounded-lg border text-white font-sans text-sm focus:outline-none focus:ring-1 focus:ring-[#00e5ff] ${
                      isDarkMode ? "bg-slate-950 border-slate-850" : "bg-white border-slate-300 text-slate-800"
                    }`}
                  />
                </div>
              </div>

              <div className="space-y-1.5 font-mono text-xs">
                <label htmlFor="subject" className="text-slate-400 font-bold block">
                  [SUBJECT_TAG]
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Security Assessment / SOC Opportunity"
                  className={`w-full p-3 rounded-lg border text-white font-sans text-sm focus:outline-none focus:ring-1 focus:ring-[#00e5ff] ${
                    isDarkMode ? "bg-slate-950 border-slate-850" : "bg-white border-slate-300 text-slate-800"
                  }`}
                />
              </div>

              <div className="space-y-1.5 font-mono text-xs">
                <label htmlFor="message" className="text-slate-400 font-bold block">
                  [SECURE_MESSAGE_PAYLOAD] <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Input detailed payload message or opportunity briefs..."
                  className={`w-full p-3 rounded-lg border text-white font-sans text-sm focus:outline-none focus:ring-1 focus:ring-[#00e5ff] ${
                    isDarkMode ? "bg-slate-950 border-slate-850" : "bg-white border-slate-300 text-slate-800"
                  }`}
                />
              </div>

              {/* Status Alert logs */}
              {status && (
                <div className={`p-4 rounded-lg font-mono text-xs border ${
                  status.type === "success"
                    ? "bg-green-500/10 border-green-500/20 text-green-400"
                    : "bg-red-500/10 border-red-500/20 text-red-400"
                }`}>
                  {status.text}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                id="contact-submit-btn"
                className={`w-full py-3.5 rounded-lg font-mono text-xs tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer border-2 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-blue-700 to-[#00e5ff] text-white border-transparent hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] disabled:opacity-55"
                    : "bg-blue-600 text-white border-transparent hover:bg-blue-700 disabled:opacity-55"
                }`}
              >
                {isSubmitting ? (
                  <span>[TRANSMITTING_PAYLOAD...]</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 shrink-0" />
                    <span>[TRANSMIT_SECURE_PACKET]</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
