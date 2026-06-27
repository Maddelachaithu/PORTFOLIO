/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sun, Moon } from "lucide-react";
import { motion } from "motion/react";

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({ isDarkMode, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      id="theme-toggle-btn"
      className="fixed top-5 right-5 z-40 p-2.5 rounded-full border border-slate-800 bg-slate-950/80 backdrop-blur-md text-slate-300 hover:text-[#00e5ff] hover:border-[#00e5ff] transition-all cursor-pointer shadow-lg hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] focus:outline-none focus:ring-2 focus:ring-[#00e5ff]"
      aria-label="Toggle visual layout mode"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <motion.div
          initial={false}
          animate={{
            scale: isDarkMode ? 1 : 0,
            rotate: isDarkMode ? 0 : 90,
            opacity: isDarkMode ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          <Moon className="w-5 h-5 text-[#00e5ff]" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            scale: isDarkMode ? 0 : 1,
            rotate: isDarkMode ? -90 : 0,
            opacity: isDarkMode ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          <Sun className="w-5 h-5 text-amber-500" />
        </motion.div>
      </div>
    </button>
  );
}
