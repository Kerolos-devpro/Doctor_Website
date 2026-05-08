import Image from "next/image";

export function PartnersSection() {
  const partners = Array.from({ length: 12 }).map((_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return {
      name: `شريك ${n}`,
      image: `https://placehold.co/240x120/png?text=Partner+${n}`,
    };
  });

  return (
    <section className="section">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h2 className="section-title">شركاء النجاح</h2>
            <p className="section-subtitle">
              شبكات تعاون ودعم لضمان تجربة طبية متكاملة.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((p) => (
            <div
              key={p.name}
              className="group grid h-20 place-items-center rounded-2xl border border-border bg-surface px-4 transition hover:-translate-y-0.5 hover:shadow-sm"
            >
              <Image
                src={p.image}
                alt={p.name}
                width={240}
                height={120}
                className="h-10 w-auto object-contain opacity-80 grayscale transition group-hover:opacity-100 group-hover:grayscale-0"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

