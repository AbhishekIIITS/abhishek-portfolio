"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type HeroAnimationProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function HeroAnimation({
  children,
  delay = 0,
  className = "",
}: HeroAnimationProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}