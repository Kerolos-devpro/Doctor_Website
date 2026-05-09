"use client";

import { motion, type MotionProps, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  amount?: number;
} & Omit<MotionProps, "children">;

/**
 * Reveals content once it enters the viewport (whileInView).
 * Intended for sections/blocks without heavy effects.
 */
export function SectionReveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  y = 16,
  amount = 0.2,
  ...motionProps
}: SectionRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}

