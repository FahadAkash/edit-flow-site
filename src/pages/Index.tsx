import Navbar from "@/components/Navbar";
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
import MeetTheFounder from "@/components/MeetTheFounder";
import StudioPreview from "@/components/StudioPreview";
import VideoPortfolio from "@/components/VideoPortfolio";
import BrandLogos from "@/components/BrandLogos";
import ManagingDirector from "@/components/ManagingDirector";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <BrandLogos />
      {/* <GrowthShowcase /> */}
      {/* <TestimonialCarousel /> */}
      <div id="portfolio">
        <VideoPortfolio/>
      </div>
      <div id="case-studies">
        <CaseStudies/>
      </div>
      <div id="shorts">
        <ReelsCarousel/>
      </div>
      <SocialProof/>
      <div id="founder">
        <MeetTheFounder/>
      </div>
      <ManagingDirector />
      <StudioPreview />
      <AboutSection/>
      {/* After Effects Style Visual Break */}
      {/* <AfterEffectsBackground /> */}
      <div id="process">
        <TimelineSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
