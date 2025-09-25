import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "They tailor their solutions to our specific needs and goals.",
    name: "Denis Slavska",
    title: "CTO, Ailitic",
    location: "New York City, New York",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format",
    company: "Velocity"
  },
  {
    id: 2,
    quote: "They organized their work and internal management was outstanding.",
    name: "Jahan Melad",
    title: "Project Manager, Buildwave",
    location: "New York City, New York", 
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format",
    company: "Vortex"
  },
  {
    id: 3,
    quote: "Exceptional creativity and attention to detail in every project delivery.",
    name: "Sarah Mitchell",
    title: "Marketing Director, TechFlow",
    location: "San Francisco, California",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=100&h=100&fit=crop&crop=face&auto=format",
    company: "TechFlow"
  },
  {
    id: 4,
    quote: "Professional team that consistently delivers beyond expectations.",
    name: "Michael Chen",
    title: "CEO, InnovateLab",
    location: "Austin, Texas",
    avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face&auto=format",
    company: "InnovateLab"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 2) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24 relative" 
      style={{
        background: 'linear-gradient(to bottom, #f8f6f0, #f5f2e8)',
        backgroundImage: `
          radial-gradient(circle at 20% 50%, rgba(139, 69, 19, 0.03) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(101, 67, 33, 0.02) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(160, 82, 45, 0.02) 0%, transparent 50%)
        `
      }}
    >
      {/* Paper texture overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute inset-0" 
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(139, 69, 19, 0.1) 2px,
              rgba(139, 69, 19, 0.1) 4px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(139, 69, 19, 0.05) 2px,
              rgba(139, 69, 19, 0.05) 4px
            )
          `
        }}
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative inline-block"
          >
            {/* Animated ink splatter effects */}
            <motion.div 
              initial={{ scale: 0, rotate: 0 }}
              whileInView={{ scale: 1, rotate: 12 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-orange-300 opacity-40"
            ></motion.div>
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 1.2 }}
              className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-amber-400 opacity-60"
            ></motion.div>
            
            <motion.div 
              initial={{ rotateZ: -1, scale: 0.95 }}
              whileInView={{ rotateZ: -1, scale: 1 }}
              whileHover={{ rotateZ: 0, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border-2 border-amber-200 shadow-lg"
              style={{
                boxShadow: '4px 4px 0px rgba(139, 69, 19, 0.2)',
                background: 'linear-gradient(135deg, #ffffff 0%, #fefbf3 100%)'
              }}
            >
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-sm font-medium text-amber-700 mb-2 tracking-wider"
              >
                CLIENT EXPERIENCES
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
              >
                What our <span className="text-orange-500 relative">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    clients
                  </motion.span>
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-200 opacity-70 -skew-x-12 origin-left"
                  ></motion.div>
                </span> say about us
              </motion.h2>
            </motion.div>
          </motion.div>
        </div>

        {/* Testimonials Container */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Buttons */}
          <motion.button 
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border-2 border-amber-200 hover:bg-amber-50 transition-all duration-200"
            style={{ boxShadow: '2px 2px 0px rgba(139, 69, 19, 0.2)' }}
          >
            <motion.svg 
              whileHover={{ x: -2 }}
              className="w-6 h-6 mx-auto text-gray-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </motion.svg>
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border-2 border-amber-200 hover:bg-amber-50 transition-all duration-200"
            style={{ boxShadow: '2px 2px 0px rgba(139, 69, 19, 0.2)' }}
          >
            <motion.svg 
              whileHover={{ x: 2 }}
              className="w-6 h-6 mx-auto text-gray-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.button>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8 px-16">
            <AnimatePresence mode="wait">
              {testimonials.slice(currentIndex, currentIndex + 2).concat(
                currentIndex + 2 >= testimonials.length ? testimonials.slice(0, Math.max(0, (currentIndex + 2) - testimonials.length)) : []
              ).slice(0, 2).map((testimonial, index) => (
                <motion.div 
                  key={`${testimonial.id}-${currentIndex}`}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.95 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="group"
                >
                  {/* Company Badge */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="flex items-center gap-3 mb-6"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium"
                    >
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                        className="w-2 h-2 bg-white rounded-full"
                      ></motion.div>
                      {testimonial.company}
                    </motion.div>
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-200 shadow-md"
                    >
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </motion.div>

                  {/* Testimonial Card */}
                  <motion.div 
                    initial={{ rotateY: -15, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    whileHover={{ 
                      rotateZ: -1, 
                      scale: 1.02,
                      boxShadow: "8px 8px 0px rgba(139, 69, 19, 0.25)"
                    }}
                    className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border-2 border-amber-200 shadow-lg transition-all duration-300"
                    style={{
                      boxShadow: '6px 6px 0px rgba(139, 69, 19, 0.15)',
                      background: 'linear-gradient(135deg, #ffffff 0%, #fefbf3 100%)'
                    }}
                  >
                    {/* Quote */}
                    <div className="mb-6">
                      <motion.svg 
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                        className="w-8 h-8 text-orange-300 mb-3" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.7 }}
                        className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed"
                      >
                        "{testimonial.quote}"
                      </motion.p>
                    </div>

                    {/* Author Info */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.9 }}
                      className="border-t-2 border-amber-100 pt-6"
                    >
                      <h4 className="text-lg font-bold text-gray-800 mb-1">{testimonial.name}</h4>
                      <p className="text-gray-600 mb-1">{testimonial.title}</p>
                      <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    </motion.div>

                    {/* Decorative elements */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 1.2 }}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-300 rounded-full opacity-60 transform rotate-45"
                    ></motion.div>
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 1.4 }}
                      className="absolute -bottom-1 -left-1 w-3 h-3 bg-orange-300 rounded-full opacity-40"
                    ></motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center mt-8 gap-2"
          >
            {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setCurrentIndex(index * 2);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full border-2 border-amber-300 transition-all duration-300 ${
                  Math.floor(currentIndex / 2) === index ? 'bg-amber-400' : 'bg-white hover:bg-amber-100'
                }`}
              >
                {Math.floor(currentIndex / 2) === index && (
                  <motion.div
                    layoutId="activeDot"
                    className="w-full h-full bg-amber-400 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Progress Bar for Auto-play */}
          {isAutoPlaying && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center mt-4"
            >
              <div className="w-32 h-1 bg-amber-200 rounded-full overflow-hidden">
                <motion.div
                  key={currentIndex}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 5, ease: "linear" }}
                  className="h-full bg-amber-400 rounded-full origin-left"
                />
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;