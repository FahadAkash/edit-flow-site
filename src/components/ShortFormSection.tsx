import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const shorts = [
  {
    id: 1,
    url: 'https://youtube.com/shorts/dRfEYs-SFPE',
    thumbnail: 'https://i.ytimg.com/vi/dRfEYs-SFPE/maxresdefault.jpg'
  },
  {
    id: 2,
    url: 'https://youtube.com/shorts/CSw91MyV5Ig',
    thumbnail: 'https://i.ytimg.com/vi/CSw91MyV5Ig/maxresdefault.jpg'
  },
  {
    id: 3,
    url: 'https://youtube.com/shorts/9EoL1YkEIG8',
    thumbnail: 'https://i.ytimg.com/vi/9EoL1YkEIG8/maxresdefault.jpg'
  },
  {
    id: 4,
    url: 'https://youtube.com/shorts/I4DfnXOWu6E',
    thumbnail: 'https://i.ytimg.com/vi/I4DfnXOWu6E/maxresdefault.jpg'
  },
];

const ShortFormSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isHovered) return;

    let animationFrameId: number;
    let lastTimestamp = 0;
    const scrollSpeed = 0.15; // pixels per millisecond - slowed down for smoother scrolling

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      setScrollPosition((prev) => {
        const newPosition = prev + scrollSpeed * deltaTime;
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        return newPosition >= maxScroll ? 0 : newPosition;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isHovered]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  return (
    <section className="py-24 bg-gradient-to-b from-charcoal/5 to-charcoal/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="sticky-note p-8 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Short-Form <span className="text-coral-accent">Magic</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Bite-sized content that packs a punch and drives engagement
            </p>
          </div>
        </div>

        {/* Shorts Gallery */}
        <div 
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-6 overflow-x-hidden relative py-4"
        >
          {/* Duplicate the shorts array for continuous scrolling */}
          {[...shorts, ...shorts, ...shorts].map((short, index) => (
            <div 
              key={`${short.id}-${index}`} 
              className="flex-none w-[280px] group"
            >
              <a 
                href={short.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative aspect-[9/16] rounded-xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105"
              >
                {/* Thumbnail */}
                <img 
                  src={short.thumbnail} 
                  alt="Short video thumbnail" 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="p-2 bg-tape-yellow rounded-lg w-10 h-10 flex items-center justify-center mb-2">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShortFormSection;