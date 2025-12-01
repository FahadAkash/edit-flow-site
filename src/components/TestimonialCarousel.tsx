import { useState } from "react";
import { ChevronLeft, ChevronRight, Play, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CEO",
      company: "TechReview Pro",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "Our channel went from 50K to 2.5M subscribers in just 6 months. The editing quality and storytelling completely transformed our content strategy. The team doesn't just edit - they engineer viral content that resonates.",
      rating: 5,
      result: "2.5M subscribers gained",
      clientVideo: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=600&fit=crop",
      editedVideo: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=450&fit=crop"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Marketing Director",
      company: "FitLife Brand",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "The team doesn't just edit videos - they engineer viral content. Our engagement rates increased by 400% after working with them. Every video they produce hits the mark and drives real business results.",
      rating: 5,
      result: "400% engagement increase",
      clientVideo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=600&fit=crop",
      editedVideo: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&h=450&fit=crop"
    },
    {
      id: 3,
      name: "Lisa Rodriguez",
      role: "Founder",
      company: "CreativeCo Studio",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Professional, creative, and results-driven. They turned our boring product demos into compelling stories that actually convert. The ROI has been phenomenal and our brand has never looked better.",
      rating: 5,
      result: "300% conversion rate boost",
      clientVideo: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=600&fit=crop",
      editedVideo: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=450&fit=crop"
    }
  ];

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

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
      className="py-20 px-4 bg-gradient-to-b from-background to-muted/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-charcoal mb-4"
          >
            Before & <span className="text-coral-accent">After</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            See the transformation - raw footage to viral content
          </motion.p>
        </div>

        {/* Main Content - Video Comparison */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
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
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8"
            >
              {/* Left Column - Client Review Video (Vertical) */}
              <div className="lg:col-span-1">
                <div className="sticky-note sticky-peach p-6 h-full transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-charcoal mb-2">Client Review</h3>
                    <div className="h-1 w-20 bg-charcoal/20 rounded"></div>
                  </div>
                  
                  {/* Vertical Video Player */}
                  <div className="relative aspect-[9/16] bg-charcoal/5 rounded-lg overflow-hidden group border-4 border-charcoal/10">
                    <img 
                      src={currentTestimonial.clientVideo}
                      alt="Client's original video"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-charcoal ml-1" />
                      </div>
                    </div>
                    {/* Label */}
                    <div className="absolute top-4 left-4 bg-charcoal/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Before
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Our Edit + Review Text */}
              <div className="lg:col-span-2 space-y-6">
                {/* Top - Edited Video (Horizontal) */}
                <div className="sticky-note sticky-sky p-6 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-charcoal mb-2">Our Edit</h3>
                    <div className="h-1 w-20 bg-charcoal/20 rounded"></div>
                  </div>
                  
                  {/* Horizontal Video Player */}
                  <div className="relative aspect-video bg-charcoal/5 rounded-lg overflow-hidden group border-4 border-charcoal/10">
                    <img 
                      src={currentTestimonial.editedVideo}
                      alt="Our edited video"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-20 h-20 bg-tape-yellow rounded-full flex items-center justify-center shadow-lg">
                        <Play className="w-10 h-10 text-charcoal ml-1" />
                      </div>
                    </div>
                    {/* Label */}
                    <div className="absolute top-4 left-4 bg-coral-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                      After
                    </div>
                  </div>
                </div>

                {/* Bottom - Review Text */}
                <div className="sticky-note sticky-lemon p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-charcoal/10 flex-shrink-0">
                      <img 
                        src={currentTestimonial.avatar}
                        alt={currentTestimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Text Content */}
                    <div className="flex-1">
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-tape-yellow text-tape-yellow" />
                        ))}
                      </div>
                      
                      {/* Review Text */}
                      <p className="text-charcoal text-lg leading-relaxed mb-4 italic">
                        "{currentTestimonial.content}"
                      </p>
                      
                      {/* Author Info */}
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-charcoal text-lg">
                            {currentTestimonial.name}
                          </h4>
                          <p className="text-charcoal/60 text-sm">
                            {currentTestimonial.role}, {currentTestimonial.company}
                          </p>
                        </div>
                        
                        {/* Result Badge */}
                        <div className="bg-coral-accent text-white px-4 py-2 rounded-lg shadow-sm">
                          <p className="text-sm font-bold">
                            {currentTestimonial.result}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="rounded-full w-14 h-14 border-2 border-charcoal/30 bg-white hover:bg-tape-yellow hover:border-tape-yellow transition-colors flex items-center justify-center cursor-pointer shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-charcoal" strokeWidth={2} />
            </motion.button>
            
            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
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
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="rounded-full w-14 h-14 border-2 border-charcoal/30 bg-white hover:bg-tape-yellow hover:border-tape-yellow transition-colors flex items-center justify-center cursor-pointer shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-charcoal" strokeWidth={2} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TestimonialCarousel;