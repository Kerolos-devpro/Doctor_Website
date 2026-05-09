"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

type HeroImageOnceProps = {
  className?: string;
  storageKey?: string;
};

export function HeroImageOnce({
  className,
  storageKey = "hero-image-animated-once",
}: HeroImageOnceProps) {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    try {
      const wasAnimated = sessionStorage.getItem(storageKey) === "1";
      if (!wasAnimated) {
        setShouldAnimate(true);
        sessionStorage.setItem(storageKey, "1");
      }
    } catch {
      // If storage is unavailable, fall back to animating once per mount.
      setShouldAnimate(true);
    }
  }, [storageKey]);

  const content = useMemo(() => {
    return (
      <Image
        src="/images/doctor.png"
        alt="صورة الدكتور زكي الحفظي"
        width={900}
        height={1125}
        className="h-full w-full object-cover"
        priority
      />
    );
  }, []);

  if (!shouldAnimate) {
    return <div className={className}>{content}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 10, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {content}
    </motion.div>
  );
}

