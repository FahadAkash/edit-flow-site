import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const VideoPortfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const portfolioItems = [
    {
      id: 1,
      name: "Aliyah Hook",
      flowers: "2.4M",
      logo: { text: "A", color: "from-purple-500 to-blue-500" },
      company: "Viral Content",
      video: "/video/Aliyah hook 5.mp4",
      bgColor: "bg-black",
      testimonial: "The editing flow is seamless. My engagement has tripled since we started working together.",
      profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: 2,
      name: "Compton ALV",
      flowers: "1.8M",
      logo: { text: "C", color: "from-yellow-500 to-orange-500" },
      company: "Urban Pulse",
      video: "/video/Compton ALV1.mp4",
      bgColor: "bg-zinc-900",
      testimonial: "Professional, fast, and exactly the vibe we needed. Highly recommended for any serious creator.",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: 3,
      name: "Dr. Lockhart",
      flowers: "500K",
      logo: { text: "D", color: "from-green-500 to-emerald-700" },
      company: "Medical Insights",
      video: "/video/Dr Lockhart S 01.mp4",
      bgColor: "bg-slate-900",
      testimonial: "They understand how to present complex medical topics in an engaging, digestible format.",
      profileImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: 4,
      name: "Elijah Kanoho",
      flowers: "1.2M",
      logo: { text: "E", color: "from-red-500 to-pink-500" },
      company: "Creator Hub",
      video: "/video/Elijah Kanoho 9 16.mp4",
      bgColor: "bg-neutral-900",
      testimonial: "Top-tier editing that keeps retention high. My average view duration is up 40%.",
      profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: 5,
      name: "Finished Track",
      flowers: "900K",
      logo: { text: "F", color: "from-blue-400 to-cyan-500" },
      company: "Audio Visual",
      video: "/video/Finished Track Video.mp4",
      bgColor: "bg-stone-900",
      testimonial: "Incredible attention to beat drops and visual sync. A masterpiece of editing.",
      profileImage: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: 6,
      name: "Formula 1",
      flowers: "3.5M",
      logo: { text: "F", color: "from-red-600 to-orange-600" },
      company: "Racing Daily",
      video: "/video/Formula 1 Principle.mp4",
      bgColor: "bg-black",
      testimonial: "Fast-paced editing that matches the speed of the sport. Simply exhilarating.",
      profileImage: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: 7,
      name: "GetKing",
      flowers: "750K",
      logo: { text: "G", color: "from-purple-600 to-indigo-600" },
      company: "Lifestyle",
      video: "/video/Getking ALV.mp4",
      bgColor: "bg-zinc-900",
      testimonial: "Turning everyday moments into cinematic experiences. The best decision for my brand.",
      profileImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: 8,
      name: "Law Firm Owners",
      flowers: "420K",
      logo: { text: "L", color: "from-slate-500 to-slate-700" },
      company: "Legal Growth",
      video: "/video/Law firm owners 2.mp4",
      bgColor: "bg-slate-900",
      testimonial: "Professionalism meets creativity. They make corporate content feel fresh and exciting.",
      profileImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: 9,
      name: "Lifestyle Vlog",
      flowers: "1.1M",
      logo: { text: "L", color: "from-pink-400 to-rose-500" },
      company: "Daily Vlog",
      video: "/video/Life Style Vlog Style video.mp4",
      bgColor: "bg-neutral-900",
      testimonial: "Captured the essence of my daily life perfectly. The storytelling is unmatched.",
      profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: 10,
      name: "Devin Style",
      flowers: "880K",
      logo: { text: "D", color: "from-amber-400 to-yellow-600" },
      company: "Tech Master",
      video: "/video/Mastering Devin Style.mp4",
      bgColor: "bg-stone-900",
      testimonial: "Technical accuracy with a flair for design. Exactly what a tech channel needs.",
      profileImage: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: 11,
      name: "Nano Tech",
      flowers: "2.1M",
      logo: { text: "N", color: "from-cyan-400 to-blue-600" },
      company: "Science Today",
      video: "/video/Nano Tech.mp4",
      bgColor: "bg-black",
      testimonial: "Complex concepts explained simply through brilliant visuals. A game changer.",
      profileImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: 12,
      name: "Proven System",
      flowers: "600K",
      logo: { text: "P", color: "from-emerald-400 to-green-600" },
      company: "Growth Hacking",
      video: "/video/Proven System Finale.mp4",
      bgColor: "bg-zinc-900",
      testimonial: "Results-driven editing. We saw a conversion bump immediately after launch.",
      profileImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: 13,
      name: "Real Estate",
      flowers: "1.5M",
      logo: { text: "R", color: "from-teal-400 to-cyan-600" },
      company: "Property Pro",
      video: "/video/Real estate.mp4",
      bgColor: "bg-slate-900",
      testimonial: "Showcasing properties has never looked this good. Clients love the virtual tour feel.",
      profileImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: 14,
      name: "Thrive Revival",
      flowers: "300K",
      logo: { text: "T", color: "from-violet-400 to-purple-600" },
      company: "Retail News",
      video: "/video/Thrive Revival Walmart.mp4",
      bgColor: "bg-neutral-900",
      testimonial: "A fresh look for our retail news. Crisp, clean, and perfectly paced.",
      profileImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: 15,
      name: "Testimonial",
      flowers: "950K",
      logo: { text: "T", color: "from-indigo-400 to-blue-600" },
      company: "Client Success",
      video: "/video/testimonial lockhart.mp4",
      bgColor: "bg-stone-900",
      testimonial: "Literally the best ROI we've had on video production. Start working with them now.",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: 16,
      name: "Playback Demo",
      flowers: "120K",
      logo: { text: "P", color: "from-gray-400 to-slate-600" },
      company: "Demo Reel",
      video: "/video/videoplayback_2.mp4",
      bgColor: "bg-black",
      testimonial: "Smooth, dynamic, and engaging. The demo reel really shows off the capabilities.",
      profileImage: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=150&h=150&fit=crop&crop=faces"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = -2; i <= 2; i++) {
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
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Featured <span className="text-primary">Work</span>
        </h2>
        
        {/* Circular Arc Cards Container */}
        <div className="relative w-full h-[600px] flex items-center justify-center">

          {/* Cards positioned along arc */}
          <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
            {getVisibleCards().map((item) => {
              const isCenter = item.position === 0;
              const isLeft = item.position === -1;
              const isFarLeft = item.position === -2;
              const isRight = item.position === 1;
              const isFarRight = item.position === 2;
              
              const getArcPosition = () => {
                if (isCenter) {
                  return { x: 0, z: 0, rotate: 0, scale: 1, opacity: 1 };
                } else if (isLeft) {
                  return { x: -380, z: -100, rotate: -15, scale: 0.85, opacity: 0.8 };
                } else if (isRight) {
                  return { x: 380, z: -100, rotate: 15, scale: 0.85, opacity: 0.8 };
                } else if (isFarLeft) {
                  return { x: -700, z: -250, rotate: -25, scale: 0.7, opacity: 0.5 };
                } else {
                  return { x: 700, z: -250, rotate: 25, scale: 0.7, opacity: 0.5 };
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
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.logo.color} flex items-center justify-center text-white font-bold shadow-lg text-xs`}>
                        {item.logo.text}
                      </div>
                      <div className="text-white text-xs font-medium drop-shadow-md bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm">
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
                            <span className="text-secondary font-bold text-sm">{portfolioItems[currentIndex].flowers}</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                        <div className="space-y-1">
                            <h3 className="text-2xl font-bold text-white">{portfolioItems[currentIndex].name}</h3>
                            <p className="text-primary font-medium">{portfolioItems[currentIndex].company}</p>
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
