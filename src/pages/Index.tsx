import HeroSection from "@/components/HeroSection";
import PartnerLogos from "@/components/PartnerLogos";
import ShortFormSection from "@/components/ShortFormSection";
import GrowthShowcase from "@/components/GrowthShowcase";
import ReelsCarousel from "@/components/ReelsCarousel";
import WorkGrid from "@/components/WorkGrid";
import CaseStudies from "@/components/CaseStudies";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PartnerLogos />
      <ShortFormSection />
      <GrowthShowcase />
      <ReelsCarousel />
      <WorkGrid />
      <CaseStudies />
      <AboutSection />
      <TimelineSection />
      <TestimonialCarousel />
      <Footer />
    </div>
  );
};

export default Index;