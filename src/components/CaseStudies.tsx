import { useState } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type VideoFormat = "short" | "long";

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "Alex Wlbberley Success Story",
      client: "alex_wlbberley",
      clientRole: "Content Creator",
      clientAvatar: "/alex_wlbberley.jpg",
      comment: "Amazing video editing service that transformed my content! The quality is outstanding and the turnaround time exceeded my expectations. Highly recommend for anyone looking to elevate their video presence.",
      videoUrl: "https://drive.google.com/file/d/13kRQoKOhsT85MLFkIYc7W5lTMFqi_FnD/preview",
      videoThumbnail: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=675&fit=crop",
      result: "Outstanding Results",
      videoFormat: "short" as VideoFormat
    },
    {
      id: 2,
      title: "Amytangerine Success Story",
      client: "amytangerine",
      clientRole: "Social Media Influencer",
      clientAvatar: "/amytangerine.jpg",
      comment: "Working with this team elevated my content to a whole new level! The professional editing and creative touch made my videos stand out. My engagement skyrocketed and my followers love the new quality!",
      videoUrl: "https://www.instagram.com/p/DQ75eWXkiDn/embed/",
      videoThumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=675&fit=crop",
      result: "Amazing Growth",
      videoFormat: "short" as VideoFormat
    },
    {
      id: 3,
      title: "Bryan Guerra Success Story",
      client: "Bryan Guerra",
      clientRole: "YouTube Entrepreneur",
      clientAvatar: "/bryan_guerra.jpg",
      comment: "Incredible video editing that took my YouTube channel to the next level! The attention to detail and professional quality helped me grow my audience significantly. Highly recommend their services!",
      videoUrl: "https://www.youtube.com/embed/cyabAl8I0bA",
      videoThumbnail: "https://img.youtube.com/vi/cyabAl8I0bA/maxresdefault.jpg",
      result: "Channel Growth",
      videoFormat: "long" as VideoFormat
    },
    {
      id: 4,
      title: "Culture Code Music Success Story",
      client: "culturecodemusic",
      clientRole: "Music Producer & Artist",
      clientAvatar: "/culturecodemusic.jpg",
      comment: "The video production quality exceeded all my expectations! They perfectly captured the essence of my music and created visuals that resonate with my audience. My music videos have never looked better!",
      videoUrl: "https://www.youtube.com/embed/UC_ZDK12twU",
      videoThumbnail: "https://img.youtube.com/vi/UC_ZDK12twU/maxresdefault.jpg",
      result: "Viral Music Video",
      videoFormat: "long" as VideoFormat
    },
    {
      id: 5,
      title: "Culture Code Music - Second Video",
      client: "culturecodemusic",
      clientRole: "Music Producer & Artist",
      clientAvatar: "/culturecodemusic2.jpg",
      comment: "Another amazing collaboration! The creativity and professionalism never disappoints. Each project brings something fresh and exciting. Can't wait to work on more videos together!",
      videoUrl: "https://www.youtube.com/embed/4t0golxJb8A",
      videoThumbnail: "https://img.youtube.com/vi/4t0golxJb8A/maxresdefault.jpg",
      result: "Hit Track Visual",
      videoFormat: "long" as VideoFormat
    },
    {
      id: 6,
      title: "Culture Code Music - Short Clip",
      client: "culturecodemusic",
      clientRole: "Music Producer & Artist",
      clientAvatar: "/culturecodemusic3.jpg",
      comment: "Perfect for social media! They know exactly how to create engaging short-form content that captures attention instantly. My reels and shorts are getting way more views now!",
      videoUrl: "https://www.youtube.com/embed/UC_ZDK12twU",
      videoThumbnail: "https://img.youtube.com/vi/UC_ZDK12twU/maxresdefault.jpg",
      result: "Viral Short",
      videoFormat: "short" as VideoFormat
    },
    {
      id: 7,
      title: "Culture Code Music - Shorts Special",
      client: "culturecodemusic",
      clientRole: "Music Producer & Artist",
      clientAvatar: "/culturecodemusic4.jpg",
      comment: "The short-form content they create is absolutely fire! Every clip is perfectly optimized for maximum engagement. My YouTube Shorts are blowing up thanks to their editing magic!",
      videoUrl: "https://www.youtube.com/embed/hxwegX1x6uk",
      videoThumbnail: "https://img.youtube.com/vi/hxwegX1x6uk/maxresdefault.jpg",
      result: "Shorts Viral",
      videoFormat: "short" as VideoFormat
    },
    {
      id: 8,
      title: "Hellcat Priime Success Story",
      client: "hellcatpriime",
      clientRole: "Gaming Content Creator",
      clientAvatar: "/hellcatpriime.jpg",
      comment: "These guys are absolute legends! They transformed my gaming content into cinematic masterpieces. The editing style is exactly what I was looking for - dynamic, engaging, and professional!",
      videoUrl: "https://www.youtube.com/embed/YUDeFFUHglc",
      videoThumbnail: "https://img.youtube.com/vi/YUDeFFUHglc/maxresdefault.jpg",
      result: "Gaming Legend",
      videoFormat: "long" as VideoFormat
    },
    {
      id: 9,
      title: "Hellcat Priime - Short Content",
      client: "hellcatpriime",
      clientRole: "Gaming Content Creator",
      clientAvatar: "/culturecodemusic4.jpg",
      comment: "Short-form gaming content done right! They capture the most epic moments and turn them into viral clips. My TikTok and YouTube Shorts are crushing it!",
      videoUrl: "https://www.youtube.com/embed/hxwegX1x6uk",
      videoThumbnail: "https://img.youtube.com/vi/hxwegX1x6uk/maxresdefault.jpg",
      result: "Gaming Clips",
      videoFormat: "short" as VideoFormat
    },
    {
      id: 10,
      title: "E-commerce Brand Transformation",
      client: "Sarah Mitchell",
      clientRole: "CEO, FashionForward",
      clientAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      comment: "Working with this team completely transformed our video content strategy. The editing quality and storytelling brought our products to life in ways we never imagined. Our engagement rates skyrocketed by 300% and sales increased by 250%. Every video they produce is a masterpiece that resonates with our audience.",
      videoThumbnail: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=675&fit=crop",
      result: "+300% Engagement Growth",
      videoFormat: "long" as VideoFormat
    },
    {
      id: 11,
      title: "Tech Startup Success Story",
      client: "Michael Chen",
      clientRole: "Founder, InnovateTech",
      clientAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      comment: "They took our complex technical product and created educational videos that anyone could understand. The animated graphics and clear explanations helped us reach 1.2 million views across platforms with a 40% conversion rate. The ROI has been incredible and continues to grow.",
      videoThumbnail: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=1200&h=675&fit=crop",
      result: "1.2M Total Views",
      videoFormat: "long" as VideoFormat
    },
    {
      id: 12,
      title: "Multi-Platform Campaign",
      client: "Emma Rodriguez",
      clientRole: "Marketing Director, GlobalBrand",
      clientAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      comment: "The team's expertise in creating platform-specific content was game-changing for us. Each video was perfectly tailored for its platform while maintaining our brand identity. We saw a 45% increase in brand awareness across all channels and our social media presence has never been stronger.",
      videoThumbnail: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&h=675&fit=crop",
      result: "+45% Brand Awareness",
      videoFormat: "long" as VideoFormat
    }
  ];

  const nextCase = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentCase = caseStudies[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-12 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-charcoal mb-3"
          >
            <span className="text-coral-accent">Success</span> Stories
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            Real challenges, creative solutions, measurable results
          </motion.p>
        </div>

        {/* Video and Client Comments */}
        <div className="max-w-5xl mx-auto relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
            >
              {/* Video Player */}
              <div className="mb-6 flex justify-center">
                <div className={`relative ${
                  currentCase.videoFormat === "short" 
                    ? "aspect-[9/16] w-full max-w-md" 
                    : "aspect-video w-full"
                } bg-charcoal/5 rounded-2xl overflow-hidden group border-4 border-charcoal/10 shadow-lg`}>
                  {currentCase.videoUrl ? (
                    <iframe
                      src={currentCase.videoUrl}
                      className="w-full h-full"
                      allow="autoplay"
                      title={currentCase.title}
                    />
                  ) : (
                    <>
                      <img 
                        src={currentCase.videoThumbnail}
                        alt={currentCase.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <motion.div 
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-24 h-24 bg-tape-yellow rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
                        >
                          <Play className="w-12 h-12 text-charcoal ml-2" />
                        </motion.div>
                      </div>
                    </>
                  )}
                  
                  {/* Title overlay */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-charcoal/80 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                      <p className="text-lg font-bold">{currentCase.title}</p>
                    </div>
                  </div>

                  {/* Result Badge */}
                  <div className="absolute bottom-6 right-6">
                    <div className="bg-coral-accent text-white px-4 py-2 rounded-lg">
                      <p className="text-sm font-bold">{currentCase.result}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Client Comment Card */}
              <div className="sticky-note sticky-lavender p-8 max-w-3xl mx-auto">
                <div className="flex flex-col items-center">
                  {/* Client Avatar */}
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-charcoal/10 mb-4">
                    <img 
                      src={currentCase.clientAvatar}
                      alt={currentCase.client}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Client Name */}
                  <div className="text-center mb-4">
                    <h4 className="text-2xl font-bold text-charcoal mb-1">
                      {currentCase.client}
                    </h4>
                    <p className="text-charcoal/60">
                      {currentCase.clientRole}
                    </p>
                  </div>

                  {/* Comment Text */}
                  <p className="text-charcoal text-lg leading-relaxed text-center italic">
                    "{currentCase.comment}"
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevCase}
              className="rounded-full w-12 h-12 border-2 border-charcoal/30 bg-white hover:bg-tape-yellow hover:border-tape-yellow transition-all flex items-center justify-center cursor-pointer"
              aria-label="Previous case study"
            >
              <ChevronLeft className="w-5 h-5 text-charcoal" strokeWidth={2} />
            </motion.button>
            
            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`transition-all rounded-full ${
                    currentIndex === index 
                      ? 'w-8 h-3 bg-coral-accent' 
                      : 'w-3 h-3 bg-charcoal/20 hover:bg-charcoal/40'
                  }`}
                  aria-label={`Go to case study ${index + 1}`}
                />
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextCase}
              className="rounded-full w-12 h-12 border-2 border-charcoal/30 bg-white hover:bg-tape-yellow hover:border-tape-yellow transition-all flex items-center justify-center cursor-pointer"
              aria-label="Next case study"
            >
              <ChevronRight className="w-5 h-5 text-charcoal" strokeWidth={2} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CaseStudies;