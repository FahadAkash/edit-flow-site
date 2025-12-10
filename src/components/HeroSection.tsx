import { motion } from "framer-motion";

const HeroSection = () => {
  // Column 1 Data: Client/Brand Images (Vertical 9:16)
  const clientImages = [
    { img: "/profile_brands/first.jpg", handle: "Coursera", followers: "Global Education" },
    { img: "/profile_brands/sec.jpg", handle: "Kreatures of Habit", followers: "Wellness Brand" },
    { img: "/profile_brands/thirds.jpg", handle: "Manna Vitality", followers: "Health & Vitality" },
    { img: "/profile_brands/5th.png", handle: "Microsoft Team", followers: "" },
    { img: "/profile_brands/sixth.jpg", handle: "*Create", followers: "" },
    { img: "/profile_brands/seven.jpg", handle: "Mara Labs", followers: "" },
    { img: "/profile_brands/eight.jpg", handle: "Organifi", followers: "" },
  ];

  // Column 2 Data: Reels/Shorts (Vertical 9:16)
  const shortsData = [
    { link: "https://www.youtube.com/shorts/jcqHNfjlo-U", handle: "alexanderfyoung", followers: "79k Followers", type: 'short' },
    { link: "https://www.youtube.com/shorts/tgUnQrQiaUk", handle: "Total Tech", followers: "90k Followers", type: 'short' },
    { link: "https://www.youtube.com/shorts/fNy-CAZdo4I", handle: "Suhit Amin", followers: "45k Followers", type: 'short' },
    { link: "https://www.youtube.com/shorts/IkQ_Wv0RBWg", handle: "Ten Thousand Miles", followers: "65k Followers", type: 'short' },
    { link: "https://www.youtube.com/shorts/0AVLNtMvJxg", handle: "Two Minute Papers", followers: "65k Followers", type: 'short' }
  ];

  // Column 3 Data: Standard YouTube Videos (Landscape 16:9) - Taken from ReelsCarousel
  const videosData = [
    { link: "https://www.youtube.com/embed/eOt0VgC8tks", handle: "Drake vs UMG", followers: "Music Industry", type: 'video' },
    { link: "https://www.youtube.com/embed/2iQ6clokEPo", handle: "Sales Career", followers: "Career Guide", type: 'video' },
    { link: "https://www.youtube.com/embed/u_12sSli1Uk", handle: "Trading Premium", followers: "Finance", type: 'video' },
    { link: "https://www.youtube.com/embed/sC8ydMWDSUM", handle: "Broke to $75k", followers: "Entrepreneurship", type: 'video' },
    { link: "https://www.youtube.com/embed/K7Wfih1vK00", handle: "TicketMaster", followers: "Case Study", type: 'video' }
  ];

  // Infinite Scroll Duplication
  const infiniteColumn1 = [...clientImages, ...clientImages];
  const infiniteColumn2 = [...shortsData, ...shortsData];
  const infiniteColumn3 = [...videosData, ...videosData];

  const getYoutubeId = (url: string) => {
    // Handle both short URLs and standard embed/watch URLs if needed, 
    // though here we are being specific with data sources.
    if (url.includes('shorts/')) {
        const match = url.match(/shorts\/([\w-]+)/);
        return match ? match[1] : "";
    }
    if (url.includes('embed/')) {
        const parts = url.split('embed/');
        return parts[1] || "";
    }
    return "";
  };

  const renderCard = (item: any, idx: number, aspectClass: string) => {
    const isVideo = item.type === 'short' || item.type === 'video';
    
    return (
      <div
        key={`${item.handle}-${idx}`}
        className={`relative rounded-2xl overflow-hidden flex-shrink-0 ${aspectClass} shadow-2xl mb-6 bg-black group`}
      >
        {isVideo ? (
          (() => {
            const videoId = getYoutubeId(item.link);
            return videoId ? (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&playsinline=1`}
                title={item.handle}
                className="w-full h-full object-cover pointer-events-none" 
                allow="autoplay; encrypted-media; loop"
              />
            ) : (
              <div className="w-full h-full bg-charcoal flex items-center justify-center">
                <p className="text-white">Video not available</p>
              </div>
            );
          })()
        ) : (
          <img
            src={item.img}
            alt={item.handle}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = `https://images.unsplash.com/photo-${1500000000000 + idx}?w=800&h=600&fit=crop`;
            }}
          />
        )}

        {/* YouTube Badge for videos */}
        {isVideo && (
          <div className="absolute top-4 left-4 bg-red-600 rounded-full p-2 z-10 shadow-lg">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>            </svg>
          </div>
        )}

        {/* Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 flex flex-col justify-end opacity-100 transition-opacity">
          <p className="text-white font-medium text-sm mb-0.5">{item.handle}</p>
          {item.followers && <p className="text-white/70 text-xs">{item.followers}</p>}
        </div>
      </div>
    );
  };

  return (
    <section className="min-h-screen bg-transparent text-white relative overflow-hidden pt-24 pb-16">
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
              className="text-5xl md:text-6xl lg:text-7xl font-normal leading-tight mb-10"
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
                  className="w-14 h-14 rounded-full border-2 border-charcoal bg-blue-600 flex items-center justify-center text-white font-normal text-xs"
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
                <span className="font-normal text-white">Trusted by 500+</span> entrepreneurs
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
                className="bg-[#FFB300] text-charcoal px-8 py-4 rounded-lg font-normal text-lg shadow-lg hover:shadow-xl transition-shadow relative z-10"
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
            <div className="flex gap-4 h-full">
              
              {/* Column 1 - Brands (Images) - 9:16 Vertical */}
              <motion.div
                animate={{ y: ["0%", "-50%"] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="flex flex-col w-1/3"
              >
                {infiniteColumn1.map((item, idx) => renderCard(item, idx, "aspect-[9/16]"))}
              </motion.div>

              {/* Column 2 - Shorts (Vertical Video) - 9:16 Vertical */}
              <motion.div
                animate={{ y: ["-50%", "0%"] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="flex flex-col w-1/3"
              >
                {infiniteColumn2.map((item, idx) => renderCard(item, idx, "aspect-[9/16]"))}
              </motion.div>

              {/* Column 3 - Videos (Landscape Video) - 16:9 Widescreen */}
              <motion.div
                animate={{ y: ["0%", "-50%"] }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                className="flex flex-col w-1/3"
              >
                {infiniteColumn3.map((item, idx) => renderCard(item, idx, "aspect-video"))}
              </motion.div>
            </div>

            {/* Gradient Overlays for Smooth Fade */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0908] to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0908] to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;