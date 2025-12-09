import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const VideoPortfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const portfolioItems = [
    {
      id: 1,
      name: "Mellanda Review",
      flowers: "2.4M",
      logo: { text: "M", color: "from-purple-500 to-blue-500" },
      company: "Mellanda Review",
      video: "/testmonial/Mellanda Review.mp4",
      bgColor: "bg-black",
      testimonial: "The editing flow is seamless. My engagement has tripled since we started working together.",
      profileImage: "/testmonial/testmonial_pic/Mellanda Review 0-2 screenshot.png"
    },
    {
      id: 2,
      name: "Bryan Review",
      flowers: "1.8M",
      logo: { text: "B", color: "from-yellow-500 to-orange-500" },
      company: "Bryan Review",
      video: "/testmonial/Bryan Review.mp4",
      bgColor: "bg-zinc-900",
      testimonial: "Professional, fast, and exactly the vibe we needed. Highly recommended for any serious creator.",
      profileImage: "/testmonial/testmonial_pic/brayen.png"
    },
    {
      id: 3,
      name: "MO",
      flowers: "500K",
      logo: { text: "M", color: "from-green-500 to-emerald-700" },
      company: "Medical Insights",
      video: "/testmonial/MO Review.mp4",
      bgColor: "bg-slate-900",
      testimonial: "They understand how to present complex medical topics in an engaging, digestible format.",
      profileImage: "/testmonial/testmonial_pic/mo.png"
    },
    {
      id: 4,
      name: "Kamil",
      flowers: "1.2M",
      logo: { text: "E", color: "from-red-500 to-pink-500" },
      company: "Creator Hub",
      video: "/testmonial/Kamil Review.mp4",
      bgColor: "bg-neutral-900",
      testimonial: "Top-tier editing that keeps retention high. My average view duration is up 40%.",
      profileImage: "/testmonial/testmonial_pic/kamil.png"
    },
     
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  const getVisibleCards = () => {
    const cards = [];
    // Changed to loop only -1 to 1 (3 items total)
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + portfolioItems.length) % portfolioItems.length;
      cards.push({ 
        ...portfolioItems[index], 
        position: i
      });
    }
    return cards;
  };

  return (
    <section className="relative py-20 bg-[0a0908] overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-[1400px] mx-auto px-4"
      >
        <h2 className="text-4xl md:text-5xl  text-center mb-16 text-foreground">
          What Our <span className="text-primary">Client Says</span>
        </h2>
        
        {/* Circular Arc Cards Container */}
        <div className="relative w-full h-[600px] flex items-center justify-center">

          {/* Cards positioned along arc */}
          <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
            {getVisibleCards().map((item) => {
              const isCenter = item.position === 0;
              const isLeft = item.position === -1;
              const isRight = item.position === 1;
              
              const getArcPosition = () => {
                if (isCenter) {
                  return { x: 0, z: 0, rotate: 0, scale: 1, opacity: 1 };
                } else if (isLeft) {
                  return { x: -380, z: -100, rotate: -15, scale: 0.85, opacity: 0.8 };
                } else {
                  // isRight
                  return { x: 380, z: -100, rotate: 15, scale: 0.85, opacity: 0.8 };
                }
              };

              const position = getArcPosition();
              const delay = Math.abs(item.position) * 0.1; // Stagger effect

              return (
                <motion.div
                  key={`${item.id}-${item.position}`}
                  initial={{ x: 0, z: -200, rotate: 0, scale: 0.5, opacity: 0 }}
                  whileInView={position}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    damping: 24,
                    delay: delay
                  }}
                  whileHover={{ 
                    scale: isCenter ? 1.05 : 0.9,
                    zIndex: isCenter ? 30 : 20,
                    filter: "brightness(1.1)",
                    transition: { duration: 0.2 }
                  }}
                  className={`absolute w-[320px] h-[560px] rounded-3xl overflow-hidden shadow-2xl ${item.bgColor} border border-white/10`}
                >
                  <motion.div 
                    className="relative w-full h-full"
                    animate={{ 
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 3 + (item.id % 3), // Random duration based on ID
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: item.id % 2 // Random delay start
                    }}
                  >
                    
                    {/* Video Header / Company */}
                    <div className="absolute top-4 left-4 right-4 z-20 flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.logo.color} flex items-center justify-center text-white font-normal shadow-lg text-xs`}>
                        {item.logo.text}
                      </div>
                      <div className="text-white text-xs font-normal drop-shadow-md bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm">
                        {item.company}
                      </div>
                    </div>

                    {/* Video Player */}
                    <div className="absolute inset-0 bg-black">
                      <video
                        src={item.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover opacity-80"
                      />
                    </div>

                    {/* Simple Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                    
                    {/* Play Button Overlay (Center only) */}
                     {isCenter && (
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all cursor-pointer group z-30 border border-white/20">
                        <Play className="w-6 h-6 text-white ml-1 fill-white group-hover:scale-110 transition-transform" />
                      </div>
                     )}

                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Active Testimonial / Detail Box */}
        <div className="max-w-3xl mx-auto mt-12 relative z-20">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left shadow-2xl"
                >
                    {/* Profile Image */}
                    <div className="relative shrink-0">
                        <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-br from-primary via-purple-500 to-blue-500">
                            <div className="w-full h-full rounded-full overflow-hidden border-2 border-black bg-black">
                                <img 
                                    src={portfolioItems[currentIndex].profileImage} 
                                    alt={portfolioItems[currentIndex].name}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${portfolioItems[currentIndex].name}&background=random`;
                                    }}
                                />
                            </div>
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5 shadow-lg">
                            <span className="text-secondary font-normal text-sm">{portfolioItems[currentIndex].flowers}</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                        <div className="space-y-1">
                            <h3 className="text-2xl font-normal text-white">{portfolioItems[currentIndex].name}</h3>
                            <p className="text-primary font-normal">{portfolioItems[currentIndex].company}</p>
                        </div>
                        
                        <div className="relative">
                            <p className="text-gray-300 text-lg leading-relaxed italic">
                                "{portfolioItems[currentIndex].testimonial}"
                            </p>
                        </div>
                    </div>

                </motion.div>
            </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-12">
          <button
            onClick={prevSlide}
            className="w-14 h-14 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center transition-all text-white hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="w-14 h-14 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center transition-all text-white hover:scale-105 active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default VideoPortfolio;
