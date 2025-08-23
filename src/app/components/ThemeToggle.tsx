"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"; // Heroicons (isteğe bağlı)

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center  h-8 rounded-full bg-gray-500 p-1"
      initial={false}
      animate={{ backgroundColor: isDark ? "#374151" : "#d1d5db" }}
      transition={{ duration: 0.3 }}
    >
      {/* Toggle Circle */}
      <motion.div
        className="w-6 h-6 rounded-full dark:bg-yellow-500 bg-white shadow-md flex items-center justify-center"
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              <MoonIcon className="w-4 h-4 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.3 }}
            >
              <SunIcon className="w-4 h-4 text-yellow-500" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  );
}
