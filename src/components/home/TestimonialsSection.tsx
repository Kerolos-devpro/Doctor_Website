type Testimonial = {
  name: string;
  rating: number;
  text: string;
};

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      name: "سارة - حائل",
      rating: 5,
      text: "تعامل راقٍ وتشخيص واضح. الخطة كانت مفهومة والنتائج ظهرت تدريجيًا بشكل ممتاز.",
    },
    {
      name: "نورة - حائل",
      rating: 5,
      text: "متابعة دقيقة واهتمام بالتفاصيل. شعرت بالطمأنينة من أول زيارة.",
    },
    {
      name: "ريم - حائل",
      rating: 4,
      text: "العيادة منظمة والحجز سهل. الخدمة ممتازة والنصائح كانت عملية ومفيدة.",
    },
    {
      name: "أمل - حائل",
      rating: 5,
      text: "اهتمام واضح وشرح مبسط. أنصح بها لكل من يبحث عن عناية جلدية موثوقة.",
    },
  ];

  return (
    <section className="section bg-surface">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="section-title">آراء العملاء</h2>
            <p className="section-subtitle">
              كلمات من المرضى عن التجربة (Placeholder قابلة للتعديل لاحقًا).
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-muted">
            <Stars rating={5} />
            <span>متوسط التقييم 4.9</span>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div key={t.name} className="card card-hover p-6">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-extrabold text-foreground">
                  {t.name}
                </div>
                <Stars rating={t.rating} />
              </div>
              <p className="mt-4 text-sm leading-7 text-muted">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stars({ rating }: { rating: number }) {
  const safe = Math.max(0, Math.min(5, rating));
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`تقييم ${safe} من 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} filled={i < safe} />
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

