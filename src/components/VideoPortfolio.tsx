import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { motion } from "framer-motion";

const VideoPortfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const portfolioItems = [
    {
      id: 1,
      type: "dark",
      logo: { text: "D", color: "from-purple-500 to-blue-500" },
      company: "Data Council",
      date: '"10 years ago"',
      title: "THE WORLD'S 1ST\nDATA ENGINEERING\nCONFERENCE",
      speaker: "PETE SODERLING",
      thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=600&fit=crop",
      bgColor: "bg-slate-900"
    },
    {
      id: 2,
      type: "grayscale",
      logo: { text: "didn't", color: "from-yellow-500 to-orange-500" },
      company: "Client Portfolio",
      thumbnail: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=400&h=600&fit=crop",
      bgColor: "bg-gray-300",
      centered: true
    },
    {
      id: 3,
      type: "light",
      company: "Market Analysis",
      title: "Market Cap\nto GDP ratio",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop",
      bgColor: "bg-stone-200",
      hasMenu: true
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  // Get 3 visible cards
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
    <section className="relative py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Circular Arc Cards Container */}
        <div className="relative w-full h-[700px] flex items-center justify-center">

          {/* Cards positioned along arc */}
          <div className="relative w-full max-w-5xl h-full">
            {getVisibleCards().map((item) => {
              const isCenter = item.position === 0;
              const isLeft = item.position === -1;
              
              // Get arc position styles
              const getArcPosition = () => {
                if (isLeft) {
                  return { left: '70px', top: '120px', rotate: -15 };
                } else if (isCenter) {
                  return { left: '50%', top: '30px', translateX: '-50%', rotate: 0 };
                } else {
                  return { right: '70px', top: '120px', rotate: 15 };
                }
              };

              const position = getArcPosition();

              // Individual floating animation delays
              const floatingDelay = isLeft ? 0 : isCenter ? 0.3 : 0.6;

              return (
                <motion.div
                  key={`${item.id}-${item.position}`}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{
                    ...position,
                    scale: 1,
                    opacity: 1,
                    y: [0, -15, 0]
                  }}
                  whileHover={{
                    y: -25,
                    scale: 1.08,
                    rotateY: 5,
                    boxShadow: "0 30px 80px rgba(255, 179, 0, 0.3)"
                  }}
                  transition={{ 
                    duration: 0.5, 
                    ease: [0.175, 0.885, 0.32, 1.275],
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: floatingDelay
                    },
                    opacity: { duration: 0.6 },
                    scale: { duration: 0.6 }
                  }}
                  style={{
                    position: 'absolute',
                    zIndex: isCenter ? 20 : 10,
                    transformStyle: 'preserve-3d'
                  }}
                  className={`w-[380px] h-[540px] rounded-3xl shadow-2xl overflow-hidden ${item.bgColor} cursor-pointer transition-shadow duration-300`}
                >
                  {/* Card Content */}
                  <div className="relative w-full h-full p-6 flex flex-col">
                    
                    {/* Header with Logo/Company */}
                    {item.logo && (
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.logo.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                          {item.logo.text}
                        </div>
                        <div>
                          <div className="text-white font-semibold">{item.company}</div>
                          {item.date && <div className="text-gray-400 text-sm italic">{item.date}</div>}
                        </div>
                      </div>
                    )}

                    {/* Main Content Area */}
                    <div className="flex-1 flex items-center justify-center relative">
                      
                      {item.thumbnail && (
                        <div className="relative w-full">
                          <img 
                            src={item.thumbnail} 
                            alt={item.title || item.company}
                            className="w-full h-56 object-cover rounded-xl"
                          />
                          
                          {/* Play Button Overlay */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center shadow-lg hover:bg-yellow-400 transition-colors">
                              <Play className="w-8 h-8 text-black ml-1" fill="black" />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Title Overlay */}
                      {item.title && !item.centered && (
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-gradient-to-r from-yellow-400 to-green-500 text-black font-bold text-sm px-3 py-2 rounded-lg leading-tight">
                            {item.title.split('\n').map((line, idx) => (
                              <div key={idx}>{line}</div>
                            ))}
                          </div>
                        </div>
                      )}

                      {item.speaker && (
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-500 to-transparent py-2 px-4">
                          <div className="text-black font-bold text-center text-xs">{item.speaker}</div>
                        </div>
                      )}
                    </div>

                    {/* Footer with widia logo */}
                    <div className="flex justify-between items-center mt-4">
                      <div className="text-gray-600 text-xs flex items-center gap-1">
                        <div className="w-4 h-4 bg-gray-400 rounded"></div>
                        <span>↗</span>
                      </div>
                      <div className="flex items-center gap-1 text-yellow-600 font-semibold">
                        <span className="text-lg">≡</span>
                        <span>widia</span>
                      </div>
                    </div>

                    {/* Menu Dots (for light card) */}
                    {item.hasMenu && (
                      <div className="absolute top-6 right-6">
                        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                        </div>
                      </div>
                    )}
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
            className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {portfolioItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? "bg-white w-8" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoPortfolio;
