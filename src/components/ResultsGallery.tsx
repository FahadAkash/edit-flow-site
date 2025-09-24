import { motion } from "framer-motion";
import { useState, useRef } from "react";
import youtubeGrowth from "../assets/youtube-growth.jpg";
import { useIntersection } from "@/hooks/use-intersection";

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  views: string;
  category: string;
}

const galleryData: GalleryItem[][] = [
  // First Group
  [
    {
      id: 1,
      image: youtubeGrowth,
      title: "YouTube Growth Campaign",
      views: "2.5M Views",
      category: "Social Growth"
    },
    {
      id: 2,
      image: youtubeGrowth,
      title: "Viral TikTok Series",
      views: "1M+ Shares",
      category: "Viral Content"
    },
    {
      id: 3,
      image: youtubeGrowth,
      title: "Brand Story Feature",
      views: "500K Engagement",
      category: "Branding"
    },
    {
      id: 4,
      image: youtubeGrowth,
      title: "Product Launch",
      views: "3.2M Impressions",
      category: "Marketing"
    }
  ],
  // Second Group
  [
    {
      id: 5,
      image: youtubeGrowth,
      title: "Influencer Campaign",
      views: "4.8M Views",
      category: "Influencer"
    },
    {
      id: 6,
      image: youtubeGrowth,
      title: "Educational Series",
      views: "1.5M Watch Time",
      category: "Education"
    },
    {
      id: 7,
      image: youtubeGrowth,
      title: "Event Coverage",
      views: "800K Reach",
      category: "Events"
    },
    {
      id: 8,
      image: youtubeGrowth,
      title: "Documentary Style",
      views: "2.1M Views",
      category: "Documentary"
    }
  ]
];

const GalleryCard = ({ item, index, isVisible }: { item: GalleryItem; index: number; isVisible: boolean }) => {
  const staggerDelay = index * 0.15;
  
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
      {/* Image with Ink Effect */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: staggerDelay }}
        className="relative w-full h-full group"
      >
        {/* Ink Splatter Overlay */}
        <div 
          className="absolute inset-0 bg-black/30 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0"
          style={{ filter: 'url(#ink-splatter)' }}
        />

        {/* Background Image */}
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
          {/* Top Category - Rotates in */}
          <motion.div
            initial={{ opacity: 0, rotate: -10 }}
            animate={isVisible ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: -10 }}
            transition={{ duration: 0.5, delay: staggerDelay + 0.2 }}
            className="self-start"
          >
            <span className="inline-block px-3 py-1 bg-tape-yellow text-charcoal text-sm font-medium rounded transform -rotate-2">
              {item.category}
            </span>
          </motion.div>

          {/* Bottom Content - Slides up */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: staggerDelay + 0.4 }}
            className="space-y-2"
          >
            <h3 className="text-xl font-bold text-white">
              {item.title}
            </h3>
            <p className="text-tape-yellow font-semibold">
              {item.views}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const ResultsGallery = () => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const { elementRef, isIntersecting } = useIntersection({ threshold: 0.2 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto advance gallery groups
  useState(() => {
    if (isIntersecting) {
      const interval = setInterval(() => {
        setCurrentGroup((prev) => (prev + 1) % galleryData.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  });

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-charcoal to-charcoal/95 overflow-hidden" ref={elementRef}>
      {/* SVG Filter for Ink Effect */}
      <svg className="hidden">
        <defs>
          <filter id="ink-splatter">
            <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" />
          </filter>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sticky-note p-8 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real Results for Real{" "}
            <span className="text-tape-yellow">Clients</span>
          </h2>
          <p className="text-xl text-gray-300">
            We don't just edit videos—we engineer viral content that drives measurable growth
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div ref={containerRef} className="relative">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ x: "100%" }}
            animate={{ x: currentGroup === 0 ? "0%" : "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {galleryData[currentGroup].map((item, index) => (
              <GalleryCard 
                key={item.id} 
                item={item} 
                index={index}
                isVisible={isIntersecting}
              />
            ))}
          </motion.div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {galleryData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentGroup(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                currentGroup === index 
                  ? "bg-tape-yellow scale-110" 
                  : "bg-gray-600 hover:bg-gray-400"
              }`}
              aria-label={`View gallery group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsGallery;