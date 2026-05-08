"use client";

import { motion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";

type StaggerContainerProps = {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
  duration?: number;
} & Omit<MotionProps, "children">;

/**
 * Parent container that staggers animations for its motion children.
 * Use with child components that define `variants` (e.g. a motion.div FadeIn item).
 */
export function StaggerContainer({
  children,
  className,
  delayChildren = 0.05,
  staggerChildren = 0.08,
  duration = 0.5,
  ...motionProps
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            duration,
            delayChildren,
            staggerChildren,
          },
        },
      }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}

