/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, Send, X, MessageSquare, Bot, AlertTriangle, ShieldCheck } from "lucide-react";
import { resumeData } from "../data/resume.js";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface AiAssistantProps {
  isDarkMode: boolean;
}

export default function AiAssistant({ isDarkMode }: AiAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "SYSTEM SECURE LOGON: Hello, I am Chaitanya's AI Twin threat-analysis intelligence bot. I have read Chaitanya's complete resume database. Ask me anything about his projects, skills, internship achievements, or certifications!"
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const presetQuestions = [
    "What is your experience in cybersecurity?",
    "Tell me about your SentinelAI project.",
    "What core programming languages do you use?",
    "How can I set up an interview?"
  ];

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: Message = { role: "user", content: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          history: messages.slice(1) // skip initial greeting
        })
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "ERROR: Connection handshake timed out. Check local port configurations and environment secrets."
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Activation Button */}
      <button
        onClick={() => setIsOpen(true)}
        id="ai-twin-activate-btn"
        className="fixed bottom-5 right-5 z-40 p-4 rounded-full border bg-slate-950/90 text-white cursor-pointer shadow-2xl hover:scale-105 transition-all flex items-center gap-2 group hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] border-slate-800 hover:border-[#00e5ff]"
        aria-label="Talk with Chaitanya's AI Twin"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
        </span>
        <Bot className="w-5 h-5 text-[#00e5ff]" />
        <span className="font-mono text-xs max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300 ease-out whitespace-nowrap text-slate-300">
          [AI_TWIN_SEC]
        </span>
      </button>

      {/* Embedded Terminal Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end p-4 bg-slate-950/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className={`w-full sm:w-[420px] h-[580px] rounded-2xl border flex flex-col justify-between overflow-hidden shadow-2xl relative ${
                isDarkMode ? "bg-slate-950 border-slate-800" : "bg-white border-slate-200"
              }`}
            >
              {/* Terminal Header */}
              <div className="p-4 border-b border-slate-800 bg-[#070b19] flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#00e5ff] animate-pulse" />
                  <span className="font-bold text-slate-200">AI_SEC_TWIN_SHELL v1.2</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-md border border-slate-800 text-slate-500 hover:text-white hover:border-slate-600 transition-all cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Chat Output Frame */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-none bg-[#030611]/90">
                {messages.map((msg, index) => {
                  const isUser = msg.role === "user";
                  return (
                    <div
                      key={index}
                      className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
                    >
                      {/* Speaker Tag */}
                      <span className="font-mono text-[8px] text-slate-500 mb-1">
                        {isUser ? "[CLIENT_USER]" : "[CHAITANYA_AI_CORE]"}
                      </span>
                      
                      {/* Bubble Text */}
                      <div className={`p-3 rounded-xl max-w-[90%] text-xs font-mono leading-relaxed border ${
                        isUser
                          ? isDarkMode
                            ? "bg-blue-950/40 border-blue-900/40 text-blue-300"
                            : "bg-blue-100 border-blue-200 text-blue-900"
                          : isDarkMode
                            ? "bg-slate-900/60 border-slate-800 text-slate-300"
                            : "bg-slate-100 border-slate-200 text-slate-800"
                      }`}>
                        {msg.content}
                      </div>
                    </div>
                  );
                })}
                
                {isTyping && (
                  <div className="flex flex-col items-start animate-pulse">
                    <span className="font-mono text-[8px] text-slate-500 mb-1">[CHAITANYA_AI_CORE]</span>
                    <div className="p-3 rounded-xl bg-slate-900/30 border border-slate-800/40 text-xs font-mono text-slate-400">
                      Processing security query...<span className="terminal-cursor ml-1" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Preset Prompts Helper */}
              <div className="p-3 bg-slate-950/80 border-t border-slate-900/40 space-y-1.5 shrink-0">
                <span className="font-mono text-[8px] text-slate-500 block uppercase">[SUGGESTED_QUERIES]</span>
                <div className="flex flex-wrap gap-1.5 max-h-16 overflow-y-auto scrollbar-none">
                  {presetQuestions.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(q)}
                      className="px-2 py-1 rounded bg-[#00e5ff]/5 border border-[#00e5ff]/15 text-[#00e5ff] font-mono text-[9px] hover:bg-[#00e5ff]/15 cursor-pointer text-left transition-all max-w-[200px] truncate"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input console */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(input);
                }}
                className="p-3 bg-[#070b19] border-t border-slate-800 flex gap-2 shrink-0 items-center"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a security question..."
                  className="flex-1 p-2 bg-slate-950 border border-slate-850 rounded-lg text-xs font-mono text-white focus:outline-none focus:ring-1 focus:ring-[#00e5ff]"
                />
                <button
                  type="submit"
                  id="ai-twin-send-btn"
                  className="p-2.5 rounded-lg bg-[#00e5ff] text-slate-950 hover:bg-[#00e5ff]/80 cursor-pointer shadow-lg transition-all"
                  aria-label="Send query"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
