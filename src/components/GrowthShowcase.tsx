import { TrendingUp, Users, Eye, MessageCircle, BarChart3, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import youtubeGrowth from "@/assets/youtube-growth.jpg";

const GrowthShowcase = () => {
  const [currentSet, setCurrentSet] = useState(0);
  
  const imageSets = [
    // Set 1
    {
      main: youtubeGrowth,
      scattered: [
        { src: youtubeGrowth, position: "-top-10 -left-8", rotate: "-rotate-6" },
        { src: youtubeGrowth, position: "top-20 -right-4", rotate: "rotate-3" },
        { src: youtubeGrowth, position: "bottom-0 -left-12", rotate: "rotate-6" },
        { src: youtubeGrowth, position: "bottom-10 -right-8", rotate: "-rotate-3" }
      ]
    },
    // Set 2
    {
      main: youtubeGrowth,
      scattered: [
        { src: youtubeGrowth, position: "-top-8 -right-10", rotate: "rotate-6" },
        { src: youtubeGrowth, position: "top-16 -left-8", rotate: "-rotate-4" },
        { src: youtubeGrowth, position: "bottom-4 -right-12", rotate: "-rotate-6" },
        { src: youtubeGrowth, position: "bottom-12 -left-6", rotate: "rotate-3" }
      ]
    },
    // Set 3
    {
      main: youtubeGrowth,
      scattered: [
        { src: youtubeGrowth, position: "-top-12 left-1/4", rotate: "-rotate-3" },
        { src: youtubeGrowth, position: "top-24 right-1/4", rotate: "rotate-6" },
        { src: youtubeGrowth, position: "bottom-8 left-1/3", rotate: "-rotate-6" },
        { src: youtubeGrowth, position: "bottom-16 right-1/3", rotate: "rotate-4" }
      ]
    }
  ];

  const nextSet = () => {
    setCurrentSet((prev) => (prev + 1) % imageSets.length);
  };

  const prevSet = () => {
    setCurrentSet((prev) => (prev - 1 + imageSets.length) % imageSets.length);
  };
  const stats = [
    {
      icon: Users,
      label: "Subscriber Growth",
      value: "+2.5M",
      change: "+150% in 6 months",
      color: "text-tape-yellow"
    },
    {
      icon: Eye,
      label: "Total Views",
      value: "47M",
      change: "+300% increase",
      color: "text-coral-accent"
    },
    {
      icon: MessageCircle,
      label: "Engagement Rate",
      value: "12.8%",
      change: "+85% improvement",
      color: "text-primary"
    },
    {
      icon: BarChart3,
      label: "Revenue Growth",
      value: "$2.1M",
      change: "+400% ROI",
      color: "text-tape-yellow"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="sticky-mint paper-clip rotate-random-1 p-8 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Real Results for 
              <span className="text-coral-accent"> Real Clients</span>
            </h2>
            <p className="text-xl text-charcoal/70">
              We don't just edit videos—we engineer viral content that drives measurable growth
            </p>
          </div>
        </div>

        {/* Scattered images showcase */}
        <div className="relative min-h-[600px] mb-16">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentSet}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Main central image */}
              <motion.div 
                className="sticky-note p-6 max-w-4xl mx-auto z-10 relative"
              >
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={imageSets[currentSet].main}
                    alt="YouTube growth analytics dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Scattered images */}
              {imageSets[currentSet].scattered.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`sticky-note p-4 w-64 absolute ${image.position} transform hover:z-20 hover:scale-105 transition-all`}
                >
                  <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                    <img src={image.src} alt={`Growth metrics ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                </motion.div>
              ))}

              {/* Decorative elements */}
              <div className="absolute top-1/4 right-1/3 w-20 h-6 bg-tape-yellow/80 transform rotate-45 z-30"></div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSet}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-tape-yellow rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
          >
            <ChevronLeft className="w-6 h-6 text-charcoal" />
          </button>
          <button 
            onClick={nextSet}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-tape-yellow rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
          >
            <ChevronRight className="w-6 h-6 text-charcoal" />
          </button>

          {/* Navigation Dots */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {imageSets.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSet(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSet === index ? 'bg-tape-yellow' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const colors = ['sticky-peach', 'sticky-sky', 'sticky-lavender', 'sticky-lemon'];
            const accessories = ['paper-clip', 'push-pin', '', 'paper-clip'];
            const rotations = ['rotate-random-1', 'rotate-random-3', 'rotate-random-2', 'rotate-random-4'];
            
            return (
              <div key={index} className={`${colors[index]} ${accessories[index]} ${rotations[index]} p-6 hover:scale-105 transition-transform duration-300`}>
                <Card className="border-none shadow-none bg-transparent p-0">
                  <div className="text-center">
                    <div className={`inline-flex p-3 rounded-full bg-charcoal/10 mb-4 ${stat.color}`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div className="text-3xl font-bold text-charcoal mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-charcoal/70 mb-2">
                      {stat.label}
                    </div>
                    <div className={`text-sm font-semibold ${stat.color}`}>
                      {stat.change}
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Client testimonial snippet */}
        <div className="mt-16 text-center">
          <div className="sticky-note p-6 max-w-2xl mx-auto bg-accent">
            <blockquote className="text-lg italic text-charcoal mb-4">
              "Our channel went from 50K to 2.5M subscribers in just 6 months. 
              The editing quality and storytelling completely transformed our content."
            </blockquote>
            <div className="text-sm font-semibold text-coral-accent">
              — Sarah Chen, TechReview Pro
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthShowcase;