"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "@/components/animations/SectionReveal";
import { StaggerContainer } from "@/components/animations/StaggerContainer";

type Testimonial = {
  name: string;
  rating: number;
  text: string;
};

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      name: "محمد - أبها",
      rating: 5,
      text: "تشخيص دقيق وشرح واضح للخطة العلاجية. المتابعة بعد الإجراء كانت ممتازة وشعرت بتحسن ملحوظ.",
    },
    {
      name: "سارة - أبها",
      rating: 5,
      text: "اهتمام بالتفاصيل وطمأنة مستمرة. تم توضيح الخيارات بشكل واضح وتم اختيار الأنسب لحالتي.",
    },
    {
      name: "عبدالله - أبها",
      rating: 4,
      text: "العيادة منظمة والحجز سهل. إرشادات ما بعد الجراحة كانت دقيقة وساعدتني في التعافي بشكل أفضل.",
    },
    {
      name: "نورة - أبها",
      rating: 5,
      text: "تجربة ممتازة من التشخيص إلى المتابعة. أنصح به لكل من يبحث عن استشاري عظام بخبرة وثقة.",
    },
  ];

  return (
    <section className="section bg-surface">
      <div className="container-page">
        <SectionReveal duration={0.6} y={14}>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="section-title">آراء العملاء</h2>
              <p className="section-subtitle">
                كلمات من المرضى عن تجربة العلاج والمتابعة.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-muted">
              <Stars rating={5} />
              <span>متوسط التقييم 4.9</span>
            </div>
          </div>
        </SectionReveal>

        <StaggerContainer
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          staggerChildren={0.08}
          delayChildren={0.05}
          duration={0.6}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="card card-hover p-6 transition-all duration-300 ease-out hover:shadow-lg"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-extrabold text-foreground">
                  {t.name}
                </div>
                <Stars rating={t.rating} />
              </div>
              <p className="mt-4 text-sm leading-7 text-muted">{t.text}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function Stars({ rating }: { rating: number }) {
  const safe = Math.max(0, Math.min(5, rating));
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`تقييم ${safe} من 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            show: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.35, delay: i * 0.03, ease: "easeOut" },
            },
          }}
        >
          <Star filled={i < safe} />
        </motion.span>
      ))}
    </span>
  );
}

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill={filled ? "var(--accent)" : "transparent"}
      stroke={filled ? "var(--accent)" : "color-mix(in srgb, var(--muted) 60%, transparent)"}
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M12 17.3 6.8 20l1-5.9L3 9.9l5.9-.9L12 3.6l3.1 5.4 5.9.9-4.8 4.2 1 5.9z" />
    </svg>
  );
}

