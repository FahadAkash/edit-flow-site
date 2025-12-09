import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { motion } from "framer-motion";

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
      bgColor: "bg-black"
    },
    {
      id: 2,
      name: "Compton ALV",
      flowers: "1.8M",
      logo: { text: "C", color: "from-yellow-500 to-orange-500" },
      company: "Urban Pulse",
      video: "/video/Compton ALV1.mp4",
      bgColor: "bg-zinc-900"
    },
    {
      id: 3,
      name: "Dr. Lockhart",
      flowers: "500K",
      logo: { text: "D", color: "from-green-500 to-emerald-700" },
      company: "Medical Insights",
      video: "/video/Dr Lockhart S 01.mp4",
      bgColor: "bg-slate-900"
    },
    {
      id: 4,
      name: "Elijah Kanoho",
      flowers: "1.2M",
      logo: { text: "E", color: "from-red-500 to-pink-500" },
      company: "Creator Hub",
      video: "/video/Elijah Kanoho 9 16.mp4",
      bgColor: "bg-neutral-900"
    },
    {
      id: 5,
      name: "Finished Track",
      flowers: "900K",
      logo: { text: "F", color: "from-blue-400 to-cyan-500" },
      company: "Audio Visual",
      video: "/video/Finished Track Video.mp4",
      bgColor: "bg-stone-900"
    },
    {
      id: 6,
      name: "Formula 1",
      flowers: "3.5M",
      logo: { text: "F", color: "from-red-600 to-orange-600" },
      company: "Racing Daily",
      video: "/video/Formula 1 Principle.mp4",
      bgColor: "bg-black"
    },
    {
      id: 7,
      name: "GetKing",
      flowers: "750K",
      logo: { text: "G", color: "from-purple-600 to-indigo-600" },
      company: "Lifestyle",
      video: "/video/Getking ALV.mp4",
      bgColor: "bg-zinc-900"
    },
    {
      id: 8,
      name: "Law Firm Owners",
      flowers: "420K",
      logo: { text: "L", color: "from-slate-500 to-slate-700" },
      company: "Legal Growth",
      video: "/video/Law firm owners 2.mp4",
      bgColor: "bg-slate-900"
    },
    {
      id: 9,
      name: "Lifestyle Vlog",
      flowers: "1.1M",
      logo: { text: "L", color: "from-pink-400 to-rose-500" },
      company: "Daily Vlog",
      video: "/video/Life Style Vlog Style video.mp4",
      bgColor: "bg-neutral-900"
    },
    {
      id: 10,
      name: "Devin Style",
      flowers: "880K",
      logo: { text: "D", color: "from-amber-400 to-yellow-600" },
      company: "Tech Master",
      video: "/video/Mastering Devin Style.mp4",
      bgColor: "bg-stone-900"
    },
    {
      id: 11,
      name: "Nano Tech",
      flowers: "2.1M",
      logo: { text: "N", color: "from-cyan-400 to-blue-600" },
      company: "Science Today",
      video: "/video/Nano Tech.mp4",
      bgColor: "bg-black"
    },
    {
      id: 12,
      name: "Proven System",
      flowers: "600K",
      logo: { text: "P", color: "from-emerald-400 to-green-600" },
      company: "Growth Hacking",
      video: "/video/Proven System Finale.mp4",
      bgColor: "bg-zinc-900"
    },
    {
      id: 13,
      name: "Real Estate",
      flowers: "1.5M",
      logo: { text: "R", color: "from-teal-400 to-cyan-600" },
      company: "Property Pro",
      video: "/video/Real estate.mp4",
      bgColor: "bg-slate-900"
    },
    {
      id: 14,
      name: "Thrive Revival",
      flowers: "300K",
      logo: { text: "T", color: "from-violet-400 to-purple-600" },
      company: "Retail News",
      video: "/video/Thrive Revival Walmart.mp4",
      bgColor: "bg-neutral-900"
    },
    {
      id: 15,
      name: "Testimonial",
      flowers: "950K",
      logo: { text: "T", color: "from-indigo-400 to-blue-600" },
      company: "Client Success",
      video: "/video/testimonial lockhart.mp4",
      bgColor: "bg-stone-900"
    },
    {
      id: 16,
      name: "Playback Demo",
      flowers: "120K",
      logo: { text: "P", color: "from-gray-400 to-slate-600" },
      company: "Demo Reel",
      video: "/video/videoplayback_2.mp4",
      bgColor: "bg-black"
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
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.logo.color} flex items-center justify-center text-white font-bold shadow-lg`}>
                        {item.logo.text}
                      </div>
                      <div className="text-white text-sm font-medium drop-shadow-md">
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

                    {/* Stats Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-300 text-sm">Flowers Total:</span>
                          <span className="text-secondary font-bold text-lg">{item.flowers}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-300 text-sm">Name:</span>
                          <span className="text-white font-bold text-lg">{item.name}</span>
                        </div>
                      </div>
                      
                      {/* Play Button Overlay (Decorative) */}
                       {isCenter && (
                        <div className="absolute top-[-200%] left-1/2 -translate-x-1/2 w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm">
                          <Play className="w-8 h-8 text-white ml-1 fill-white" />
                        </div>
                       )}
                    </div>

                    {/* Menu Gradient Top */}
                    <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none" />

                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-card hover:bg-card/80 border border-border rounded-full flex items-center justify-center transition-colors text-foreground"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-card hover:bg-card/80 border border-border rounded-full flex items-center justify-center transition-colors text-foreground"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default VideoPortfolio;
