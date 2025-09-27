import HeroSection from "@/components/HeroSection";
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
      <GrowthShowcase />
      <ReelsCarousel />
  <WorkGrid />
  <TestimonialCarousel />
  <CaseStudies />
  <AboutSection />
  <TimelineSection />
      <Footer />
    </div>
  );
};

export default Index;