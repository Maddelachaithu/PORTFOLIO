/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ShieldAlert, Cpu, Terminal, CheckCircle2 } from "lucide-react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [percent, setPercent] = useState(0);
  const [decryptedText, setDecryptedText] = useState("");
  const [logs, setLogs] = useState<string[]>([]);

  const targetText = "SYSTEM INITIALIZATION: CHAITANYA_SECURITY_CORE_v2.6";
  const chars = "ABCDEF0123456789!@#$%^&*()_+{}|:<>?-[]";

  const loadingSteps = [
    "Spinning up sandboxed environment...",
    "Securing handshake protocol...",
    "Mounting local database nodes...",
    "Establishing firewall routes...",
    "Initializing Gemini AI Digital Twin...",
    "Access granted. Initializing port 3000..."
  ];

  useEffect(() => {
    // Percentage counter
    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Decryption text simulation
    let iteration = 0;
    const interval = setInterval(() => {
      setDecryptedText(
        targetText
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return targetText[index];
            }
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= targetText.length) {
        clearInterval(interval);
      }
      iteration += 1 / 2;
    }, 20);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Logs simulation
    const logTimers: NodeJS.Timeout[] = [];
    loadingSteps.forEach((step, idx) => {
      const logTimer = setTimeout(() => {
        setLogs((prev) => [...prev, step]);
      }, idx * 400 + 100);
      logTimers.push(logTimer);
    });

    const completionTimer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      logTimers.forEach(clearTimeout);
      clearTimeout(completionTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#030712] z-50 flex flex-col items-center justify-center font-mono p-6">
      <div className="w-full max-w-2xl border border-slate-800 bg-[#070b19] p-6 rounded-lg shadow-2xl relative overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-slate-400">secure_boot.sh</span>
          </div>
          <div>CONSOLE V2.6</div>
        </div>

        {/* Binary Overlay Grid Background */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none text-[8px] text-emerald-500 leading-none overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="truncate">
              {Array.from({ length: 120 }).map(() => (Math.random() > 0.5 ? "1" : "0")).join("")}
            </div>
          ))}
        </div>

        {/* Main Terminal Window */}
        <div className="space-y-4 relative z-10">
          {/* Title */}
          <div className="text-[#00e5ff] font-bold text-sm sm:text-base md:text-lg min-h-[2.5rem] tracking-tight">
            {decryptedText}
            <span className="terminal-cursor ml-1" />
          </div>

          {/* Code Loading steps */}
          <div className="space-y-1.5 h-36 overflow-y-auto text-xs text-slate-400 scrollbar-none">
            {logs.map((log, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
                className="flex items-center gap-2"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
                <span className="font-mono text-slate-300">{log}</span>
              </motion.div>
            ))}
          </div>

          {/* Progress Bar Container */}
          <div className="space-y-2 mt-6">
            <div className="flex justify-between text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                <span>BOOT_STATUS: SECURE_COMPILED</span>
              </div>
              <span className="text-[#00e5ff] font-bold">{percent}%</span>
            </div>
            
            <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 to-[#00e5ff] rounded-full"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>

          {/* Security details bottom HUD */}
          <div className="flex flex-wrap items-center justify-between border-t border-slate-800 pt-4 mt-4 text-[10px] text-slate-500 gap-4">
            <div className="flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-red-500" />
              <span>TLS: STRICT_SECURE_MODE</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-blue-400 animate-spin [animation-duration:6s]" />
              <span>CORE_ENGINE: ACTIVE</span>
            </div>
            <span>LOC_IP: 127.0.0.1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
