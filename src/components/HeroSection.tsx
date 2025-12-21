import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import CachedVideo from "./CachedVideo";

// Helper to extract ID
const getYoutubeId = (url: string) => {
  if (!url) return null;
  let videoId = "";
  if (url.includes('shorts/')) {
      const match = url.match(/shorts\/([\w-]+)/);
      videoId = match ? match[1] : "";
  } else if (url.includes('embed/')) {
      const parts = url.split('embed/');
      videoId = parts[1] || "";
  }
  if (videoId.includes('?')) {
      videoId = videoId.split('?')[0];
  }
  return videoId;
};

const HeroCard = ({ item, idx, aspectClass, isColumn1 }: { item: any, idx: number, aspectClass: string, isColumn1?: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isLocalVideo = item.link && item.link.endsWith('.mp4');
  const isInstagram = item.type === 'instagram';
  const youtubeId = !isLocalVideo && !isInstagram ? getYoutubeId(item.link) : null;

  return (
    <motion.div
      key={`${item.handle}-${idx}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05, y: -5, zIndex: 10 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`relative rounded-2xl overflow-hidden flex-shrink-0 ${aspectClass} mb-6 bg-[#0a0a0a] group border border-white/10 shadow-lg transition-all duration-300`}
    >
      {/* Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#FFB300]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20" />

      {/* --- MEDIA RENDERING --- */}
      {isLocalVideo ? (
         <CachedVideo
             src={item.link}
             fallbackSrc={item.youtubeLink}
             autoPlay
             muted
             loop
             playsInline
             preload="metadata" 
             className="w-full h-full object-cover opacity-80 grayscale-[30%] group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
         />
      ) : isInstagram ? (
         <iframe 
           src={`${item.link}embed`}
           className="w-full h-full object-cover pointer-events-none opacity-80 grayscale-[30%] group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
           title={item.handle}
           frameBorder="0" 
           scrolling="no" 
           loading="lazy"
           allowTransparency={true}
         />
      ) : youtubeId ? (
          /* YOUTUBE OPTIMIZATION: Thumbnail by default, Iframe on Hover */
          <div className="w-full h-full relative group-hover:scale-110 transition-transform duration-700">
             {isHovered ? (
                <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeId}&playsinline=1&rel=0&showinfo=0&modestbranding=1`}
                title={item.handle}
                className="w-full h-full object-cover absolute inset-0 z-10"
                allow="autoplay; encrypted-media; loop"
                loading="lazy"
              />
             ) : (
               <>
                 <img 
                   src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
                   alt={item.handle}
                   loading="lazy"
                   decoding="async"
                   className="w-full h-full object-cover opacity-80 grayscale-[30%] group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                 />
                 {/* Play Icon Overlay */}
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                       <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                 </div>
               </>
             )}
          </div>
      ) : (
        /* FALLBACK / STATIC IMAGE CARD */
        <>
          <img
            src={item.img}
            alt={item.handle}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover opacity-80 grayscale-[30%] group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
            onError={(e) => {
              e.currentTarget.src = `https://images.unsplash.com/photo-${1500000000000 + idx}?w=800&h=600&fit=crop`;
            }}
          />
          {/* Logo Overlay for Brand Cards */}
          {item.logo && (
            <div className={`absolute top-6 left-1/2 -translate-x-1/2 z-20 ${isColumn1 ? 'w-48 h-24' : 'w-32 h-16'} flex items-center justify-center pointer-events-none`}>
               <img 
                 src={item.logo} 
                 alt="Brand Logo" 
                 loading="lazy"
                 className="w-full h-full object-contain grayscale contrast-125 invert mix-blend-screen opacity-70 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-xl"
               />
            </div>
          )}
        </>
      )}

      {/* Cinematic Bottom Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none z-10" />

      {/* Content Info */}
      <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out z-30">
        <div className={`flex ${isColumn1 ? 'flex-col items-start gap-2.5' : 'items-center gap-3'} w-full`}>
          {item.profileImg && (
            <div className="relative group-hover:scale-110 transition-transform duration-300">
              {!isColumn1 && (
                <div className="absolute inset-0 bg-[#FFB300] rounded-full blur-[6px] opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
              )}
              <img 
                src={item.profileImg} 
                alt={item.handle} 
                loading="lazy"
                className={`relative ${isColumn1 ? 'w-32 h-16 object-contain filter brightness-0 invert' : 'w-10 h-10 rounded-full border border-white/20 object-cover'}`} 
                style={!isColumn1 ? { backgroundColor: item.profileBg || '#18181b' } : {}}
              />
            </div>
          )}
          
          {!isColumn1 && (
            <div className="flex flex-col justify-center">
              <p className="text-white font-bold text-sm leading-tight drop-shadow-md group-hover:text-[#FFB300] transition-colors duration-300">
                {item.handle}
              </p>
              {item.followers && (
                <p className="text-white/60 text-xs font-medium tracking-wide mt-0.5">
                   {item.followers}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const HeroSection = () => {
  // Column 1 Data: Client/Brand Images (Vertical 9:16)
  // Column 1 Data: Brand Shorts (Vertical 9:16)
  const clientImages = [
    { link: "/videos/compreess_short_column1/Neutonic_Ad_1.mp4", handle: "NEUTONIC", followers: "Productivity", type: 'short', profileImg: "/brands/01HZPHHYKN7PRCHF92X9KV8BPG.png", profileBg: "#3b82f6" }, // Blue
    { link: "/videos/compreess_short_column1/DANGER_COFFEE_MINERALS_VID_APR_9X16_V1.mp4", handle: "DANGER KOFFEE", followers: "Lifestyle", type: 'short', profileImg: "/brands/DC_Logo_1640x624-d44ea81f-a7d0-4746-b50e-399afa2a81c9.png", profileBg: "#ef4444" }, // Red
    { link: "/videos/compreess_short_column1/ATTN_Labs_Air.mp4", handle: "KOH", followers: "Wellness Brand", type: 'short', logo: "/brands/1667599512761.png", profileImg: "/brands/01HZPHHYKN7PRCHF92X9KV8BPG.png", profileBg: "#ffffff" }, // White
    { link: "/videos/compreess_short_column1/Neutonic_Ad_1.mp4", handle: "MANNA", followers: "Health & Vitality", type: 'short', logo: "/brands/DC_Logo_1640x624-d44ea81f-a7d0-4746-b50e-399afa2a81c9.png", profileImg: "/brands/1667599512761.png", profileBg: "#3b82f6" }, // Blue
  ];

  // Column 2 Data: Reels/Shorts (Vertical 9:16)
  const shortsData = [
    { link: "/videos/compressed_shorts/short_01_Suhit_Amin_20k.mp4", handle: "Suhit Amin", followers: "20k", type: 'short', profileImg: "/hero/comun3/channels4_profile.jpg" },
    { link: "/videos/compressed_shorts/short_02_Transfer_Kingdom_20k.mp4", handle: "Transfer Kingdom", followers: "20k", type: 'short', profileImg: "/hero/transer_kindom.jpg" },
    { link: "/videos/compressed_shorts/short_04_DMVAUL_21k.mp4", handle: "DMVAUL", followers: "21k", type: 'short', profileImg: "/entrepreneurs/7HdwNsOD_400x400.png" },
    { link: "/videos/compressed_shorts/short_05_Spine_Surgeon_1.07M.mp4", handle: "Spine Surgeon", followers: "1.07M", type: 'short', profileImg: "/entrepreneurs/FR8QOqkdsCPqaLh59ht9JqMHlgjxEU3A5ATylOLLOSrsxem1zQY5HTUJ1R3nW6Os0J9Uos1wWAs900-c-k-c0x00ffffff-no-rj.png" },
    { link: "/videos/compressed_shorts/short_06_Microsoft_Tech_Giant.mp4", handle: "Microsoft", followers: "Tech Giant", type: 'short', profileImg: "/brands/microsoft.png" },
    { link: "/videos/compressed_shorts/short_07_Acer_Gaming.mp4", handle: "Acer", followers: "Gaming", type: 'short', profileImg: "/brands/acer-predator-logo-png_seeklogo-441422.png" },
    { link: "/videos/compressed_shorts/short_10_MANNA_Health_Vitality.mp4", handle: "MANNA", followers: "Health & Vitality", type: 'short', profileImg: "/brands/1667599512761.png" }
  ];

  // Column 3 Data: Standard YouTube Videos (Landscape 16:9) - Taken from ReelsCarousel
  const videosData = [
    { link: "/videos/compressed_long_videos/01_Suhit_Amin_30K_Followers.mp4", youtubeLink: "https://www.youtube.com/embed/sw32JXFdGV8", handle: "Suhit Amin", followers: "30K+ Followers", type: 'video', profileImg: "/hero/comun3/channels4_profile.jpg" },
    { link: "/videos/compressed_long_videos/dr_antoniowebbmd_new.mp4", youtubeLink: "https://www.youtube.com/embed/IypyqrD8b5s", handle: "Dr Antonio J. Webb, M.D", followers: "1.43 Mil", type: 'video', profileImg: "/entrepreneurs/1644180906552.png" },
    { link: "/videos/compressed_long_videos/03_Lifestyle_Video_Premium_30K.mp4", youtubeLink: "https://www.youtube.com/embed/ZyY5xKs8fkU", handle: "Lukas Schanderl", followers: "30K+", type: 'video', profileImg: "/hero/comun3/third.png" },
    { link: "/videos/compressed_long_videos/04_Total_Tech_90K.mp4", youtubeLink: "https://www.youtube.com/embed/BcWScmU0IbQ", handle: "Total Tech", followers: "90K+", type: 'video', profileImg: "/hero/comun3/second.png" },
    { link: "/videos/compressed_long_videos/05_ALEX_YOUNG_84k.mp4", youtubeLink: "https://www.youtube.com/embed/tl3as05qpmM", handle: "ALEX YOUNG", followers: "84k", type: 'video', profileImg: "/hero/comun3/first.png" }
  ];

  // Infinite Scroll Duplication (3x for seamless loop - simpler and more efficient)
  const infiniteColumn1 = [...clientImages, ...clientImages, ...clientImages];
  const infiniteColumn2 = [...shortsData, ...shortsData, ...shortsData];
  const infiniteColumn3 = [...videosData, ...videosData, ...videosData];

  // Detect if reduced motion is preferred (typically on mobile/touch devices)
  const shouldReduceMotion = useReducedMotion();
  
  // Adjust animation durations based on device type
  const column1Duration = shouldReduceMotion ? 15 : 25;
  const column2Duration = shouldReduceMotion ? 20 : 35;
  const column3Duration = shouldReduceMotion ? 18 : 30;

  return (
    <section className="min-h-screen bg-[#050505] text-white relative overflow-hidden pt-24 pb-16 selection:bg-[#FFB300]/30">
      
      {/* --- TECH BACKGROUND LAYER --- */}
      
      {/* 1. Base Grid Pattern (The "Workspace" look) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0"></div>
      
      {/* 2. Abstract "Video Timeline" UI Elements (Floating in background) */}
      <div className="absolute top-20 left-[-5%] w-[600px] h-[400px] opacity-[0.15] pointer-events-none -rotate-12 blur-[2px] z-0 select-none hidden md:block">
          {/* Track 1 */}
          <motion.div 
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-12 bg-white/5 rounded-lg mb-4 flex overflow-hidden border border-white/5"
          >
             <div className="w-1/3 h-full bg-[#FFB300]/20 border-r border-[#FFB300]/30"></div>
             <div className="w-1/4 h-full bg-transparent mx-4 border-x border-white/10"></div>
          </motion.div>
          
          {/* Track 2 (Active Clip) */}
          <motion.div 
             animate={{ x: [0, -15, 0] }}
             transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             className="w-[80%] ml-12 h-12 bg-[#FFB300]/10 rounded-lg mb-4 border-l-4 border-[#FFB300] flex items-center px-4"
          >
              <div className="w-full h-[2px] bg-[#FFB300]/20"></div>
          </motion.div>

          {/* Track 3 */}
          <div className="w-full h-12 bg-white/5 rounded-lg mb-4 flex items-center space-x-2 px-2">
             {[1,2,3,4].map(i => <div key={i} className="h-8 w-8 bg-white/10 rounded-sm" />)}
          </div>
          
          {/* Playhead Line */}
          <motion.div 
            animate={{ x: [0, 200, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-20px] bottom-[-20px] left-1/3 w-[2px] bg-[#FFB300]/50 shadow-[0_0_10px_#FFB300]"
          >
             <div className="absolute top-0 -translate-x-1/2 -ml-[4px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#FFB300]"></div>
          </motion.div>
      </div>

       {/* 3. Floating "Keyframe" Diamonds */}
       <motion.div 
         animate={{ y: [0, -20, 0], opacity: [0.1, 0.3, 0.1] }}
         transition={{ duration: 4, repeat: Infinity }}
         className="absolute top-1/2 left-[10%] w-6 h-6 border-2 border-[#FFB300] rotate-45 opacity-20 pointer-events-none z-0 hidden md:block"
       />
       <motion.div 
         animate={{ y: [0, 30, 0], opacity: [0.1, 0.2, 0.1] }}
         transition={{ duration: 6, repeat: Infinity, delay: 2 }}
         className="absolute bottom-1/3 right-[45%] w-4 h-4 bg-[#FFB300] rotate-45 opacity-10 pointer-events-none z-0 hidden md:block"
       />

      {/* 4. Ambient Colored Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#FFB300]/10 opacity-60 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-[#212121] opacity-100 blur-[100px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[30%] w-[20%] h-[20%] bg-[#FFB300]/5 opacity-40 blur-[80px] rounded-full pointer-events-none z-0 hidden md:block" />

      {/* 5. Vignette Overlay to Focus Center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] pointer-events-none z-10" />


      <div className="w-full px-4 lg:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Content - Takes full width on mobile, 5 columns on desktop */}
          <div className="lg:col-span-5 relative z-10 pl-0 md:pl-2">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-2 flex justify-center md:justify-start"
            >
              <img 
                src="/logo/logo.png" 
                alt="Metro Media House" 
                className="h-16 md:h-20 w-auto object-contain opacity-90"
              />
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-hero font-bold leading-[1.1] mb-6 tracking-tight text-center md:text-left"
              style={{ fontFamily: "'Inter', -apple-system, sans-serif" }}
            >
              Reach a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB300] to-[#FFDA85]">Loyal, Paying Audience</span> on YouTube in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB300] to-[#FFDA85]">Just 30 Days</span> <br/> <span className="text-white/90 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mt-2 block">– Completely Hands-Off & Done-For-You</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg text-gray-400 mb-8 max-w-lg leading-relaxed font-light text-center md:text-left mx-auto md:mx-0"
            >
              Scaling brands for <span className="text-gray-200 font-medium">niche authorities</span> with world class organic content. 
              Currently working with personal brands, funded startups, Crypto/trading ventures.
            </motion.p>

            {/* Overlapping Entrepreneur Profiles - Social Proof */}
            <div className="mb-10 flex flex-col items-center md:items-start">
              <div className="flex items-center -space-x-4 mb-4">
                {[
                  { src: "/entrepreneurs/1644180906552.png", delay: 0 },
                  { src: "/entrepreneurs/7HdwNsOD_400x400.png", delay: 0.1 },
                  { src: "/entrepreneurs/zS8KNLhN29kcM_wg0sriI0Jg4yMZS-GcIPSu8icVFIG82IC4dpwFaFn0dfVfWH4NB8Hlmli1Hgs900-c-k-c0x00ffffff-no-rj.png", delay: 0.2 },
                  { src: "/entrepreneurs/VYCKwtkM9XtsZ2yy5JfT3PUzSXZYB1yuvOuYrDEj2HdL6RU47T4JAmC-9HL2rsoH_BUog1KaGgs900-c-k-c0x00ffffff-no-rj.png", delay: 0.3 }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + item.delay }}
                    className="relative"
                  >
                    <img 
                      src={item.src} 
                      alt="Entrepreneur" 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-black object-cover ring-2 ring-white/10"
                    />
                  </motion.div>
                ))}
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-black bg-gradient-to-br from-[#FFB300] to-[#FF9000] flex items-center justify-center text-black font-bold text-xs shadow-lg z-10"
                >
                  500+
                </motion.div>
              </div>
              
              <div className="flex flex-col items-center md:items-start">
                <div className="flex gap-1 mb-2">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-4 h-4 text-[#FFB300] fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/60 text-sm font-medium">
                  Trusted by top entrepreneurs
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative inline-block group mx-auto md:mx-0"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FFB300] to-[#FF8000] rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative bg-[#FFB300] hover:bg-[#ffae00] text-black px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-xl shadow-[#FFB300]/20 flex items-center gap-2 sm:gap-3 transition-all w-full sm:w-auto justify-center"
              >
                Book a Discovery Call
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
              
              {/* Abstract Arrow - Hidden on mobile */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -bottom-10 -right-4 pointer-events-none hidden md:block"
              >
                  <svg width="80" height="60" viewBox="0 0 80 60" className="absolute -top-4 -left-12 rotate-12">
                    <path
                      d="M 10 10 Q 25 5, 40 15 T 70 20"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.4"
                    />
                    <polygon points="68,16 75,20 68,24" fill="white" opacity="0.4" />
                  </svg>
                 <span className="text-white/40 font-handwriting text-sm absolute top-2 left-6 -rotate-12 whitespace-nowrap">It's Free</span>
              </motion.div>
            </motion.div>

          </div>

          {/* Right - Scrolling Client Images - Takes full width on mobile, 7 columns on desktop */}
          <div className="lg:col-span-7 relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] overflow-hidden mask-gradient-vertical mt-6 md:mt-10 lg:mt-0">
             {/* Gradient Masks for Top/Bottom Fading */}
             <div className="absolute top-0 left-0 right-0 h-16 sm:h-20 lg:h-40 bg-gradient-to-b from-black via-black/80 to-transparent z-20 pointer-events-none" />
             <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 lg:h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />

            <div className="flex gap-2 sm:gap-3 lg:gap-5 h-full transform opacity-90 hover:opacity-100 transition-opacity duration-700 justify-center">
              
              {/* Column 1 - Brands (Images) - 9:16 Vertical - Hidden on mobile, shown on md and above */}
              <motion.div
                animate={{ y: ["0%", "-66.666%"] }}
                transition={{ duration: column1Duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}
                className="hidden md:flex flex-col w-[28%] gap-4 sm:gap-5 pt-8 sm:pt-10"
              >
                {infiniteColumn1.map((item, idx) => <HeroCard key={`${item.handle}-c1-${idx}`} item={item} idx={idx} aspectClass="aspect-[9/16]" isColumn1 />)}
              </motion.div>

              {/* Column 2 - Shorts (Vertical Video) - 9:16 Vertical - Full width on mobile */}
              <motion.div
                animate={{ y: ["-10%", "-86.666%"] }}
                transition={{ duration: column2Duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}
                className="flex flex-col w-full sm:w-2/3 md:w-1/2 lg:w-[28%] gap-4 sm:gap-5 pt-0"
              >
                {infiniteColumn2.map((item, idx) => <HeroCard key={`${item.handle}-c2-${idx}`} item={item} idx={idx} aspectClass="aspect-[9/16]" />)}
              </motion.div>

              {/* Column 3 - Videos (Landscape Video) - 16:9 Widescreen - Hidden on mobile, shown on lg and above */}
              <motion.div
                animate={{ y: ["-30%", "26.666%"] }}
                transition={{ duration: column3Duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}
                className="hidden lg:flex flex-col w-[44%] gap-4 sm:gap-5 pt-16 sm:pt-20"
              >
                {infiniteColumn3.map((item, idx) => <HeroCard key={`${item.handle}-c3-${idx}`} item={item} idx={idx} aspectClass="aspect-video" />)}
              </motion.div>
            </div>
            
          </div>
        </div>
      </div>
      

    </section>
  );
};

export default HeroSection;