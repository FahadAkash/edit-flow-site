import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { motion } from "framer-motion";

const VideoPortfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const portfolioItems = [
    {
      id: 1,
      name: "Pete Soderling",
      flowers: "2.4M",
      logo: { text: "D", color: "from-purple-500 to-blue-500" },
      company: "Data Council",
      video: "/video/videoplayback_2.mp4",
      bgColor: "bg-black"
    },
    {
      id: 2,
      name: "Sarah Chen",
      flowers: "1.8M",
      logo: { text: "S", color: "from-yellow-500 to-orange-500" },
      company: "Tech Trends",
      video: "/video/videoplayback_2.mp4",
      bgColor: "bg-zinc-900"
    },
    {
      id: 3,
      name: "Market Watch",
      flowers: "500K",
      logo: { text: "M", color: "from-green-500 to-emerald-700" },
      company: "Daily Brief",
      video: "/video/videoplayback_2.mp4",
      bgColor: "bg-slate-900"
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
    <section className="relative py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Featured <span className="text-primary">Work</span>
        </h2>
        
        {/* Circular Arc Cards Container */}
        <div className="relative w-full h-[600px] flex items-center justify-center">

          {/* Cards positioned along arc */}
          <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
            {getVisibleCards().map((item) => {
              const isCenter = item.position === 0;
              const isLeft = item.position === -1;
              
              const getArcPosition = () => {
                if (isLeft) {
                  return { x: -350, z: -100, rotate: -15, scale: 0.85, opacity: 0.6 };
                } else if (isCenter) {
                  return { x: 0, z: 0, rotate: 0, scale: 1, opacity: 1 };
                } else {
                  return { x: 350, z: -100, rotate: 15, scale: 0.85, opacity: 0.6 };
                }
              };

              const position = getArcPosition();

              return (
                <motion.div
                  key={`${item.id}-${item.position}`}
                  initial={position}
                  animate={position}
                  transition={{ 
                    duration: 0.5, 
                    ease: "easeInOut"
                  }}
                  className={`absolute w-[320px] h-[560px] rounded-3xl overflow-hidden shadow-2xl ${item.bgColor} border border-white/10`}
                >
                  <div className="relative w-full h-full">
                    
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

                  </div>
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
      </div>
    </section>
  );
};

export default VideoPortfolio;
