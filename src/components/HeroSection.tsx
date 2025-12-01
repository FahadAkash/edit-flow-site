import { Play, Pause } from "lucide-react";
import { useState, useEffect } from "react";
import heroVideoPoster from "@/assets/hero-video-poster.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const floatAnimation = {
    y: [0, -10, 0]
  };

  const floatTransition = {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut"
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={floatAnimation}
          transition={floatTransition}
          className="absolute top-20 left-10 w-2 h-2 bg-tape-yellow/20 rounded-full"
        />
        <motion.div 
          animate={floatAnimation}
          transition={{ ...floatTransition, delay: 1, duration: 7 }}
          className="absolute top-40 right-20 w-3 h-3 bg-coral-accent/20 rounded-full"
        />
        <motion.div 
          animate={floatAnimation}
          transition={{ ...floatTransition, delay: 2, duration: 5 }}
          className="absolute bottom-32 left-20 w-2 h-2 bg-tape-yellow/20 rounded-full"
        />
        <motion.div 
          animate={floatAnimation}
          transition={{ ...floatTransition, delay: 0.5, duration: 8 }}
          className="absolute bottom-20 right-10 w-3 h-3 bg-coral-accent/20 rounded-full"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div>
          {/* Logo with entrance animation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-6 flex justify-center"
          >
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              whileHover={{ scale: 1.05, rotate: 5 }}
            >
              <img 
                src="/logo/logo.png" 
                alt="Company Logo" 
                className="h-16 md:h-20 w-auto object-contain"
              />
            </motion.div>
          </motion.div>
          
          {/* Animated editing overlays */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="editing-overlay-left pointer-events-none absolute left-0 top-1/4 hidden lg:block"
            whileHover={{ scale: 1.1 }}
          >
            <svg viewBox="0 0 120 64" width="120" height="64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="8" width="36" height="24" rx="4" fill="#fff" opacity="0.95" />
              <rect x="44" y="8" width="36" height="24" rx="4" fill="#fff" opacity="0.9" />
              <rect x="84" y="8" width="36" height="24" rx="4" fill="#fff" opacity="0.85" />
              <rect x="6" y="36" width="100" height="8" rx="3" fill="#FFB300">
                <animate attributeName="width" values="6;100;6" dur="3s" repeatCount="indefinite" />
              </rect>
              <circle cx="6" cy="40" r="3" fill="#FF6F61">
                <animate attributeName="cx" from="6" to="100" dur="3s" repeatCount="indefinite" />
              </circle>
            </svg>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="editing-overlay-right pointer-events-none absolute right-0 top-1/4 hidden lg:block"
            whileHover={{ scale: 1.1 }}
          >
            <svg viewBox="0 0 120 64" width="120" height="64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="-12" y="8" width="36" height="24" rx="4" fill="#fff" opacity="0.95" />
              <rect x="28" y="8" width="36" height="24" rx="4" fill="#fff" opacity="0.9" />
              <rect x="68" y="8" width="36" height="24" rx="4" fill="#fff" opacity="0.85" />
              <rect x="6" y="36" width="100" height="8" rx="3" fill="#FFB300">
                <animate attributeName="width" values="100;6;100" dur="3.2s" repeatCount="indefinite" />
              </rect>
              <circle cx="100" cy="40" r="3" fill="#FFB300">
                <animate attributeName="cx" from="100" to="6" dur="3.2s" repeatCount="indefinite" />
              </circle>
            </svg>
          </motion.div>

          {/* Headline with staggered reveal */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-1 leading-tight relative -mt-6">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="block hover:text-tape-yellow transition-colors duration-300"
            >
               Launch a done-for-you
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-coral-accent block origin-center"
              whileHover={{ scale: 1.05 }}
            >
              Video Sales engine
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-tape-yellow block"
              whileHover={{ scale: 1.05 }}
            >
              this month.
            </motion.span>
            
            {/* Animated underline */}
            <svg className="absolute left-0 -bottom-2 w-full h-6 pointer-events-none" viewBox="0 0 400 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path 
                d="M10 20 Q 200 2 390 20" 
                stroke="#FFB300" 
                strokeWidth="4" 
                strokeLinecap="round" 
                className="drop-shadow-sm"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
              />
            </svg>
          </h1>

          {/* Entrepreneur avatars */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 flex justify-center"
          >
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="flex items-center -space-x-3">
                {[
                  "/entrepreneurs/7HdwNsOD_400x400.png",
                  "/entrepreneurs/1644180906552.png",
                  "/entrepreneurs/FR8QOqkdsCPqaLh59ht9JqMHlgjxEU3A5ATylOLLOSrsxem1zQY5HTUJ1R3nW6Os0J9Uos1wWAs900-c-k-c0x00ffffff-no-rj.png",
                  "/entrepreneurs/VYCKwtkM9XtsZ2yy5JfT3PUzSXZYB1yuvOuYrDEj2HdL6RU47T4JAmC-9HL2rsoH_BUog1KaGgs900-c-k-c0x00ffffff-no-rj.png"
                ].map((src, i) => (
                  <motion.img 
                    key={i}
                    src={src} 
                    alt="brand" 
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-sm relative z-10"
                    whileHover={{ scale: 1.15, zIndex: 20, boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)" }}
                  />
                ))}
                <div className="relative">
                  <motion.img 
                    src="/entrepreneurs/zS8KNLhN29kcM_wg0sriI0Jg4yMZS-GcIPSu8icVFIG82IC4dpwFaFn0dfVfWH4NB8Hlmli1Hgs900-c-k-c0x00ffffff-no-rj.png" 
                    alt="brand" 
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-sm relative z-10"
                    whileHover={{ scale: 1.15, zIndex: 20, boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)" }}
                  />
                  <motion.div 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-charcoal text-white text-xs font-bold flex items-center justify-center ring-2 ring-white shadow z-20"
                  >
                    465+
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Video Player - Commented out for later use */}
        {/* <motion.div ... video player code ... </motion.div> */}

        {/* Value Proposition Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 mb-6"
        >
          {/* Benefit Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            {[
              { icon: "🎬", title: "10+ Videos/Month", desc: "Consistent content flow" },
              { icon: "✨", title: "Done-For-You", desc: "We handle everything" },
              { icon: "📈", title: "Proven Results", desc: "500+ successful videos" }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + (i * 0.1) }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="sticky-note p-6 text-center group cursor-pointer"
              >
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-charcoal mb-2 group-hover:text-coral-accent transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-charcoal/70 text-sm">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 179, 0, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-tape-yellow hover:bg-tape-yellow/90 text-charcoal font-bold text-lg px-12 py-4 rounded-full shadow-lg transition-all duration-300"
            >
              Start Your Project Today
            </motion.button>
            <p className="text-charcoal/60 text-sm mt-4">
              No credit card required • Free consultation
            </p>
          </motion.div>
        </motion.div>

        {/* Brand logos */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2">
            <div className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 border-t-2 border-b-2 border-red-600 py-4 shadow-lg">
              <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-center gap-10 flex-wrap">
                  {[
                    "/brands/01HZPHHYKN7PRCHF92X9KV8BPG.png",
                    "/brands/1667599512761.png",
                    "/brands/acer-predator-logo-png_seeklogo-441422.png",
                    "/brands/DC_Logo_1640x624-d44ea81f-a7d0-4746-b50e-399afa2a81c9.png",
                    "/brands/Logo_Blackberry_Large_a979164e-916a-4c09-bbac-51df3d96f65a_1200x1200.png"
                  ].map((src, i) => (
                    <motion.img 
                      key={i}
                      src={src} 
                      alt="brand" 
                      className="max-h-12 object-contain filter brightness-0 invert"
                      whileHover={{ scale: 1.1, rotate: 5, filter: "brightness(0) invert(1) drop-shadow(0 0 8px rgba(255,255,255,0.5))" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;