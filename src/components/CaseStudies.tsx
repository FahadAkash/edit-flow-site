import { useState } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Brand Transformation",
      client: "Sarah Mitchell",
      clientRole: "CEO, FashionForward",
      clientAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      comment: "Working with this team completely transformed our video content strategy. The editing quality and storytelling brought our products to life in ways we never imagined. Our engagement rates skyrocketed by 300% and sales increased by 250%. Every video they produce is a masterpiece that resonates with our audience.",
      videoThumbnail: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=675&fit=crop",
      result: "+300% Engagement Growth"
    },
    {
      id: 2,
      title: "Tech Startup Success Story",
      client: "Michael Chen",
      clientRole: "Founder, InnovateTech",
      clientAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      comment: "They took our complex technical product and created educational videos that anyone could understand. The animated graphics and clear explanations helped us reach 1.2 million views across platforms with a 40% conversion rate. The ROI has been incredible and continues to grow.",
      videoThumbnail: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=1200&h=675&fit=crop",
      result: "1.2M Total Views"
    },
    {
      id: 3,
      title: "Multi-Platform Campaign",
      client: "Emma Rodriguez",
      clientRole: "Marketing Director, GlobalBrand",
      clientAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      comment: "The team's expertise in creating platform-specific content was game-changing for us. Each video was perfectly tailored for its platform while maintaining our brand identity. We saw a 45% increase in brand awareness across all channels and our social media presence has never been stronger.",
      videoThumbnail: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&h=675&fit=crop",
      result: "+45% Brand Awareness"
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
              <div className="mb-6">
                <div className="relative aspect-video bg-charcoal/5 rounded-2xl overflow-hidden group border-4 border-charcoal/10 shadow-lg">
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