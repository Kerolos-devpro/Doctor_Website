import {
  CtaSection,
  DoctorIntroSection,
  HeroSection,
  ServicesSection,
  TestimonialsSection,
} from "@/components/home";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <DoctorIntroSection />
      <ServicesSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}
