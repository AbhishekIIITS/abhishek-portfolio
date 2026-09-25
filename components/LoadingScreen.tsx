"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loading-screen"
          className="loading-screen"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
        >
          {/* Background glow */}
          <div className="loading-glow loading-glow-one" />
          <div className="loading-glow loading-glow-two" />

          <div className="loading-content">

            {/* AS Logo */}
            <motion.div
              className="loading-logo"
              initial={{
                opacity: 0,
                scale: 0.5,
                rotate: -10,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              AS
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 0.7,
                ease: "easeOut",
              }}
            >
              ABHISHEK SONKAR
            </motion.h1>

            {/* Profession */}
            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
                duration: 0.6,
              }}
            >
              SOFTWARE DEVELOPER
            </motion.p>

            {/* Loading bar */}
            <motion.div
              className="loading-bar"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                className="loading-progress"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 1.5,
                  delay: 1,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Status */}
            <motion.span
              className="loading-status"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              INITIALIZING PORTFOLIO...
            </motion.span>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
