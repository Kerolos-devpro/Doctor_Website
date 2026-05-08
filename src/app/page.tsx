import {
  CtaSection,
  DoctorIntroSection,
  HeroSection,
  PartnersSection,
  ServicesSection,
  TestimonialsSection,
} from "@/components/home";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <DoctorIntroSection />
      <ServicesSection />
      <PartnersSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}
