import { motion } from "framer-motion";

const HeroSection = () => {
  // Client images data with Instagram handles and followers
  const clientImages = [
    { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop", handle: "Daniel Del Carmen", followers: "25k+" },
    { img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop", handle: "Shalen", followers: "10k+" },
    { img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop", handle: "Andrew Ross Sorkin", followers: "66.5k+" },
    { img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=800&fit=crop", handle: "Sarah Chen", followers: "45k+" },
    { img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop", handle: "Mike Johnson", followers: "32k+" },
    { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop", handle: "Emma Wilson", followers: "58k+" },
    { img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop", handle: "Alex Martinez", followers: "21k+" },
    { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop", handle: "Lisa Anderson", followers: "39k+" },
  ];

  // Split images into 3 columns
  const column1 = clientImages.slice(0, 3);
  const column2 = clientImages.slice(3, 6);
  const column3 = clientImages.slice(6, 8);

  // Duplicate for infinite scroll effect
  const infiniteColumn1 = [...column1, ...column1, ...column1];
  const infiniteColumn2 = [...column2, ...column2, ...column2];
  const infiniteColumn3 = [...column3, ...column3, ...column3];

  return (
    <section className="min-h-screen bg-charcoal text-white relative overflow-hidden pt-24 pb-16">
      <div className="w-full px-4 lg:px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Content - Takes 5 columns */}
          <div className="lg:col-span-5 relative z-10">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <img 
                src="/logo/logo.png" 
                alt="Metro Media House" 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-10"
              style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
            >
              Helping Entrepreneurs build organic brands as{" "}
              <span className="text-[#FFB300]">niche authorities</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed"
              style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
            >
              Scaling brands for niche authorities with world class organic content. 
              Currently working with personal brands, funded startups, Crypto/trading ventures and much more.
            </motion.p>

            {/* Overlapping Entrepreneur Profiles - Social Proof */}
            <div className="mb-6 flex items-center gap-3">
              {/* Overlapping Profile Circles with Individual Animations */}
              <div className="flex items-center -space-x-4">
                <motion.img 
                  src="/entrepreneurs/1644180906552.png" 
                  alt="Entrepreneur" 
                  className="w-14 h-14 rounded-full border-2 border-charcoal object-cover"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.img 
                  src="/entrepreneurs/7HdwNsOD_400x400.png" 
                  alt="Entrepreneur" 
                  className="w-14 h-14 rounded-full border-2 border-charcoal object-cover"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                />
                <motion.div 
                  className="w-14 h-14 rounded-full border-2 border-charcoal bg-blue-600 flex items-center justify-center text-white font-bold text-xs"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                >
                  COURSE
                </motion.div>
                <motion.img 
                  src="/entrepreneurs/FR8QOqkdsCPqaLh59ht9JqMHlgjxEU3A5ATylOLLOSrsxem1zQY5HTUJ1R3nW6Os0J9Uos1wWAs900-c-k-c0x00ffffff-no-rj.png" 
                  alt="Entrepreneur" 
                  className="w-14 h-14 rounded-full border-2 border-charcoal object-cover"
                  animate={{ y: [0, -11, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                />
                <motion.img 
                  src="/entrepreneurs/VYCKwtkM9XtsZ2yy5JfT3PUzSXZYB1yuvOuYrDEj2HdL6RU47T4JAmC-9HL2rsoH_BUog1KaGgs900-c-k-c0x00ffffff-no-rj.png" 
                  alt="Entrepreneur" 
                  className="w-14 h-14 rounded-full border-2 border-charcoal object-cover"
                  animate={{ y: [0, -9, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
                <motion.div 
                  className="w-14 h-14 rounded-full border-2 border-charcoal bg-yellow-500 flex items-center justify-center"
                  animate={{ y: [0, -13, 0] }}
                  transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                >
                  <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11.75A2.25 2.25 0 1 1 11.25 14 2.25 2.25 0 0 1 9 11.75zM12.75 9A2.25 2.25 0 1 0 15 11.25 2.25 2.25 0 0 0 12.75 9zM8.25 9A2.25 2.25 0 1 0 6 11.25 2.25 2.25 0 0 0 8.25 9z"/>
                  </svg>
                </motion.div>
              </div>
              
              <p className="text-white/80 text-sm ml-2">
                <span className="font-semibold text-white">Trusted by 500+</span> entrepreneurs
              </p>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative inline-block"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FFB300] text-charcoal px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-shadow relative z-10"
              >
                Book a Discovery Call
              </motion.button>
              
              {/* Hand-drawn arrow "It's Free" */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -bottom-12 -right-8 text-white/80 text-sm font-handwriting"
              >
                <svg width="80" height="60" viewBox="0 0 80 60" className="absolute -top-4 -left-12">
                  <path
                    d="M 10 10 Q 25 5, 40 15 T 70 20"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.6"
                  />
                  <polygon points="68,16 75,20 68,24" fill="white" opacity="0.6" />
                </svg>
                <span className="relative z-10 italic">It's Free</span>
              </motion.div>
            </motion.div>


          </div>

          {/* Right - Scrolling Client Images - Takes 7 columns */}
          <div className="lg:col-span-7 relative h-[650px] lg:h-[750px] overflow-hidden">
            <div className="flex gap-8 h-full">
              
              {/* Column 1 - Scroll Down */}
              <motion.div
                animate={{
                  y: [0, -1400]
                }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="flex flex-col gap-6 w-1/2"
              >
                {infiniteColumn1.map((client, idx) => (
                  <div
                    key={`col1-${idx}`}
                    className="relative rounded-2xl overflow-hidden flex-shrink-0 h-[600px] shadow-2xl"
                  >
                    <img
                      src={client.img}
                      alt={client.handle}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://images.unsplash.com/photo-${1500000000000 + idx}?w=400&h=500&fit=crop`;
                      }}
                    />
                    
                    {/* Instagram Badge */}
                    <div className="absolute top-6 left-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-3 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>

                    {/* Name & Followers Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6">
                      <p className="text-white font-bold text-base mb-1">{client.handle}</p>
                      <p className="text-white/90 text-sm">{client.followers} Followers</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Column 2 - Scroll Up */}
              <motion.div
                animate={{
                  y: [-1500, 0]
                }}
                transition={{
                  duration: 26,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="flex flex-col gap-6 w-1/2"
              >
                {infiniteColumn2.map((client, idx) => (
                  <div
                    key={`col2-${idx}`}
                    className="relative rounded-2xl overflow-hidden flex-shrink-0 h-[650px] shadow-2xl"
                  >
                    <img
                      src={client.img}
                      alt={client.handle}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://images.unsplash.com/photo-${1600000000000 + idx}?w=400&h=550&fit=crop`;
                      }}
                    />
                    
                    {/* Instagram Badge */}
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-2">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>

                    {/* Name & Followers Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white font-bold text-sm">{client.handle}</p>
                      <p className="text-white/80 text-xs">{client.followers} Followers</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Column 3 - Scroll Down (Different Speed) */}
              <motion.div
                animate={{
                  y: [0, -1300]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="flex flex-col gap-6 w-1/3"
              >
                {infiniteColumn3.map((client, idx) => (
                  <div
                    key={`col3-${idx}`}
                    className="relative rounded-2xl overflow-hidden flex-shrink-0 h-[620px] shadow-2xl"
                  >
                    <img
                      src={client.img}
                      alt={client.handle}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://images.unsplash.com/photo-${1700000000000 + idx}?w=400&h=520&fit=crop`;
                      }}
                    />
                    
                    {/* Instagram Badge */}
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-2">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>

                    {/* Name & Followers Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white font-bold text-sm">{client.handle}</p>
                      <p className="text-white/80 text-xs">{client.followers} Followers</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Gradient Overlays for Smooth Fade */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-charcoal to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;