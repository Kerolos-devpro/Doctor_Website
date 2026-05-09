"use client";

import { motion, type MotionProps, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
} & Omit<MotionProps, "children">;

/**
 * Fade + translateY helper.
 * Lightweight defaults suitable for general UI elements.
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.5,
  y = 12,
  ...motionProps
}: FadeInProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}

