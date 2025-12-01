import HeroSection from "@/components/HeroSection";
import GrowthShowcase from "@/components/GrowthShowcase";
import ReelsCarousel from "@/components/ReelsCarousel";
import WorkGrid from "@/components/WorkGrid";
import CaseStudies from "@/components/CaseStudies";
import AboutSection from "@/components/AboutSection";
import AfterEffectsBackground from "@/components/AfterEffectsBackground";
import TimelineSection from "@/components/TimelineSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      {/* <GrowthShowcase /> */}
      
      <TestimonialCarousel />
      <CaseStudies />
      <ReelsCarousel />
      <SocialProof />
      
      <AboutSection />
      
      {/* After Effects Style Visual Break */}
      <AfterEffectsBackground />
      
      <TimelineSection />
      <Footer />
    </div>
  );
};

export default Index;