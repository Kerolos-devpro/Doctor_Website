import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-muted">
              <span
                className="inline-flex h-2 w-2 rounded-full"
                style={{ backgroundColor: "var(--primary)" }}
                aria-hidden="true"
              />
              <span>جلدية وتجميل وليزر - حائل</span>
            </div>

            <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              رعاية طبية موثوقة بخبرة واهتمام
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              د. هبة الشريف - اختصاصية جلدية وتجميل وليزر. نوفّر خطة علاج
              واضحة، متابعة دقيقة، وتجربة حجز سهلة تناسب جميع الأجهزة.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/book" className="btn-accent">
                احجز موعد
              </Link>
              <Link href="/cv" className="btn-ghost">
                تعرف على الطبيب
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="card px-4 py-4">
                <div className="text-sm font-extrabold text-foreground">
                  استشارة أولية
                </div>
                <div className="mt-1 text-sm text-muted">
                  تشخيص وتوجيه علاجي واضح
                </div>
              </div>
              <div className="card px-4 py-4">
                <div className="text-sm font-extrabold text-foreground">
                  متابعة دورية
                </div>
                <div className="mt-1 text-sm text-muted">
                  خطّة علاج وتقييم للنتائج
                </div>
              </div>
              <div className="card px-4 py-4">
                <div className="text-sm font-extrabold text-foreground">
                  عناية تجميلية
                </div>
                <div className="mt-1 text-sm text-muted">
                  بروتوكولات آمنة وحديثة
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface shadow-sm">
              <div className="absolute inset-0 opacity-80">
                <div
                  className="h-full w-full"
                  style={{
                    background:
                      "radial-gradient(60% 60% at 70% 20%, rgba(37,99,235,0.18) 0%, transparent 60%), radial-gradient(55% 55% at 10% 90%, rgba(15,118,110,0.16) 0%, transparent 60%)",
                  }}
                />
              </div>
              <div className="relative p-4 sm:p-6">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80"
                    alt="صورة لطبيبة"
                    width={900}
                    height={1125}
                    className="h-full w-full object-cover"
                    priority
                    unoptimized
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl border border-border bg-background px-4 py-3">
                  <div>
                    <div className="text-sm font-extrabold text-foreground">
                      د. هبة الشريف
                    </div>
                    <div className="text-sm text-muted">
                      جلدية • تجميل • ليزر
                    </div>
                  </div>
                  <span className="badge-primary">حائل</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

