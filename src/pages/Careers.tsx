import React from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Megaphone, Wifi, Gift, Calendar, Plus, Star, ArrowRight, Coffee, Gamepad2, Trophy } from "lucide-react";

/**
 * Careers Page
 * Matches specific UI requirements provided in screenshots (Hero, Motive, Benefits).
 */

const Careers = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#7C3AED]/30 font-sans cursor-default">
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-32 px-6 overflow-hidden min-h-[90vh] flex flex-col items-center justify-center">
        {/* Background Gradients & Floating Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
           {/* Base Glow */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#581C87]/20 blur-[150px] rounded-full mix-blend-screen opacity-60" />
           {/* Floating Background Element 1 (Left Showcase) */}
           <motion.div 
             animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-1/2 -translate-y-1/2 left-0 w-[500px] md:w-[800px] opacity-60 blur-sm mix-blend-normal"
             style={{ 
               maskImage: "radial-gradient(circle, black 40%, transparent 70%)", 
               WebkitMaskImage: "radial-gradient(circle, black 40%, transparent 70%)" 
             }}
           >
              <img src="https://media.discordapp.net/attachments/778188386262581288/1453265213225701467/3.png?ex=694cd233&is=694b80b3&hm=93f6c41a0694be9cd2bf32b98b447d9655bd6c203e5cc19891a57212cb90818b&=&format=webp&quality=lossless&width=902&height=902" alt="" className="w-full h-full object-contain opacity-80" />
           </motion.div>

           {/* Floating Background Element 2 (Right Showcase) */}
           <motion.div 
             animate={{ y: [0, 30, 0], rotate: [0, -2, 0] }}
             transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             className="absolute top-1/2 -translate-y-1/2 right-0 w-[500px] md:w-[800px] opacity-60 blur-sm mix-blend-normal"
             style={{ 
               maskImage: "radial-gradient(circle, black 40%, transparent 70%)", 
               WebkitMaskImage: "radial-gradient(circle, black 40%, transparent 70%)" 
             }}
           >
              <img src="https://media.discordapp.net/attachments/778188386262581288/1453265214102569031/4.png?ex=694cd233&is=694b80b3&hm=3d6038f6dd79cbc7e4779a920ebbc54b6d569c8ad06df9c88e2d3f3b46c4cb69&=&format=webp&quality=lossless&width=902&height=902" alt="" className="w-full h-full object-contain opacity-80" />
           </motion.div>
        </div>

        <div className="max-w-[1200px] w-full mx-auto relative z-10 flex flex-col items-center">
          {/* Animated "Openings" Tag */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="px-5 py-1.5 rounded-full border border-[#4ADE80]/30 text-[#4ADE80] bg-[#4ADE80]/5 text-[11px] font-bold uppercase tracking-widest mb-8"
          >
            Openings
          </motion.div>
          
          {/* Main Title - Mixed Typography */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-bold tracking-tight mb-16 text-center leading-tight"
          >
            Be an <span className="font-serif italic font-light text-white">Editing Rockstar!</span> <br /> Like Us
          </motion.h1>

          {/* Job Card - Glassmorphism Masterpiece */}
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="w-full max-w-5xl group cursor-pointer"
          >
            <div className="relative rounded-[2rem] bg-[#0A0A0A]/80 border border-white/10 p-10 md:p-14 overflow-hidden backdrop-blur-xl transition-all duration-300 hover:border-purple-500/30 hover:shadow-[0_0_50px_-15px_rgba(124,58,237,0.15)]">
              {/* Internal Glow Effect */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-80" />
              
              <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                <motion.div 
                  initial={{ scale: 0, rotate: -20 }} 
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  className="mt-2 w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0"
                >
                    <Megaphone className="w-6 h-6 text-white" strokeWidth={1.5} />
                </motion.div>
                
                <div className="flex-1 space-y-6">
                    <div>
                        <motion.h3 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6, duration: 0.5 }}
                          viewport={{ once: true }}
                          className="text-3xl font-bold mb-4 group-hover:text-purple-300 transition-colors duration-300"
                        >
                            Video Editor
                        </motion.h3>
                        <motion.p 
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.7, duration: 0.6 }}
                          viewport={{ once: true }}
                          className="text-gray-400 text-lg leading-relaxed max-w-3xl"
                        >
                            We’re looking for a skilled Video Editor to craft high-impact content, transform raw footage into engaging stories, and elevate videos through pacing, visuals, and sound. You’ll own the editing process end-to-end, turning ideas into polished content that holds attention and delivers results.
                        </motion.p>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 pt-2">
                        {["UP TO BDT 50K", "Full Time", "In-House"].map((tag, i) => (
                           <motion.span 
                             key={i} 
                             initial={{ opacity: 0, scale: 0.8 }}
                             whileInView={{ opacity: 1, scale: 1 }}
                             transition={{ delay: 0.8 + (i * 0.1), type: "spring" }}
                             viewport={{ once: true }}
                             className={`bg-white/5 border border-white/5 text-white/70 px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors hover:bg-white/10 cursor-default`}
                           >
                              {tag}
                           </motion.span>
                        ))}
                    </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Blend Gradient to White Section */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-white pointer-events-none z-20" />
      </section>

      {/* 2. MOTIVE & GOALS SECTION - Precise Layout Match */}
      <section className="bg-white py-32 px-6 md:px-12 text-black relative">
         <div className="max-w-[1240px] mx-auto">
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="mb-12"
             >
                 <span className="px-5 py-2 rounded-full border border-green-600/20 text-green-700 bg-green-50 text-xs font-bold uppercase tracking-widest">
                    Our story
                 </span>
             </motion.div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                 {/* Left Text Column */}
                 <div className="max-w-xl">
                     <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-7xl font-bold mb-10 leading-[1.1] tracking-tight"
                     >
                         Our <span className="font-serif italic font-light inline-block relative">Motive & Goals
                            {/* Decorative underline could go here if needed */}
                         </span>
                     </motion.h2>

                     {/* Scroll-Triggered Text Reveal */}
                     <div className="text-xl md:text-[1.7rem] leading-[1.6] font-medium text-gray-300 space-y-1">
                        {[
                          "At Kontent Protocol, we believe great videos come",
                          "from focus and intention. Our goal is",
                          "simple: turn raw footage into clear,",
                          "high-impact content through disciplined",
                          "editing and high standards."
                        ].map((line, i) => (
                          <div key={i} className="overflow-hidden">
                             <motion.div
                               initial={{ y: "100%", opacity: 0 }}
                               whileInView={{ y: 0, opacity: 1 }}
                               viewport={{ once: true, margin: "-10%" }}
                               transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                               className="text-[#111]" // High contrast black
                             >
                                {line}
                             </motion.div>
                          </div>
                        ))}
                     </div>
                 </div>

                 {/* Right Cards Column - Staggered Slide In */}
                 <div className="space-y-8 lg:mt-24">
                     {/* Rating Card */}
                     <motion.div
                       initial={{ opacity: 0, y: 40 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true, margin: "-100px" }}
                       transition={{ duration: 0.6, ease: "easeOut" }}
                       whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.1)" }}
                       className="bg-[#F9FAFB] p-10 rounded-[2rem] border border-gray-100 shadow-sm cursor-pointer group transition-all"
                     >
                        <div className="flex gap-4 mb-8 items-center">
                            {/* Fiverr Logo - Full Bleed */}
                            <div className="w-14 h-14 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-lg shadow-gray-100/50 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK4OfAtnOKgbngp1-P4gnncqdnzzVUWrlvXA&s" alt="Fiverr" className="w-full h-full object-cover scale-110" />
                            </div>

                            {/* Upwork Logo - Full Bleed */}
                            <div className="w-14 h-14 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-lg shadow-gray-100/50 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                                <img src="https://www.citypng.com/public/uploads/preview/upwork-round-logo-icon-png-7017516949686332n4bo69bd8.png" alt="Upwork" className="w-full h-full object-cover scale-110" />
                            </div>

                            {/* Google Logo - Fixed Clean 'G' Icon */}
                            <div className="w-14 h-14 rounded-full bg-white border border-gray-100 flex items-center justify-center p-3 shadow-lg shadow-gray-100/50 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt="Google" className="w-full h-full object-contain" />
                            </div>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900 tracking-tight">2000+</h3>
                        <p className="text-gray-500 text-lg font-medium">5-Star Verified Reviews</p>
                     </motion.div>

                     {/* Stats Card */}
                     <motion.div
                       initial={{ opacity: 0, y: 40 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true, margin: "-100px" }}
                       transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                       whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.1)" }}
                       className="bg-[#F9FAFB] p-10 rounded-[2rem] border border-gray-100 shadow-sm cursor-pointer group transition-all"
                     >
                        <div className="mb-6 w-14 h-8 relative">
                           {/* Infinity Logo Graphic */}
                           <div className="absolute inset-0 border-2 border-purple-600 rounded-full skew-x-12 opacity-80" />
                           <div className="absolute inset-0 border-2 border-blue-500 rounded-full -skew-x-12 opacity-80" />
                        </div>
                        <h3 className="text-4xl font-bold mb-2 text-gray-900">20+</h3>
                        <h4 className="text-3xl font-bold mb-4 text-gray-900">Clients</h4>
                        <p className="text-gray-500 text-base leading-relaxed">A proven track record of expertise and reliability in delivering successful projects.</p>
                     </motion.div>
                 </div>
             </div>
         </div>
      </section>

      {/* 3. BENEFITS GRID - Dark with Purple Glows */}
      <section className="py-32 px-6 relative bg-[#050505] overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-purple-900/10 blur-[200px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1240px] mx-auto relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Benefit Items */}
                  {[
                      { 
                        icon: <Gift className="w-6 h-6" strokeWidth={1.5} />, 
                        title: "Festival Bonuses", 
                        desc: "Values that matter. We reward hard work with festival bonuses and performance incentives. 🎁",
                        image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800&auto=format&fit=crop"
                      },
                      { 
                        icon: <Calendar className="w-6 h-6" strokeWidth={1.5} />, 
                        title: "Generous Leave Policy", 
                        desc: "Annual leaves, sick leaves, and flexible breaks for a healthy work-life balance. ✈️",
                        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop"
                      },
                      { 
                        icon: <Plus className="w-6 h-6" strokeWidth={1.5} />, 
                        title: "Premium Resources", 
                        desc: "Full access to a massive library of premium assets, stock footage, and editing tools. 💎",
                        image: "https://images.unsplash.com/photo-1626785774573-4b7993143a2d?q=80&w=800&auto=format&fit=crop"
                      },
                      { 
                        icon: <Wifi className="w-6 h-6" strokeWidth={1.5} />, 
                        title: "Supportive Environment", 
                        desc: "A collaborative team culture with zero micro-management. We trust you. 🤝",
                        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                      },
                      { 
                        icon: <Star className="w-6 h-6" strokeWidth={1.5} />, 
                        title: "Emergency Fund", 
                        desc: "We stand by our long-term team members with financial support when life happens. 🛡️",
                        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=800&auto=format&fit=crop"
                      },
                      { 
                        icon: <Megaphone className="w-6 h-6" strokeWidth={1.5} />, 
                        title: "Fast Skill Growth", 
                        desc: "Rapid skill development through dedicated training and international client exposure. 🚀",
                        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop"
                      },
                      { 
                        icon: <Coffee className="w-6 h-6" strokeWidth={1.5} />, 
                        title: "Snacks & Beverages", 
                        desc: "Unlimited tea, coffee, and quality snacks to keep you energized. ☕",
                        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop"
                      },
                      { 
                        icon: <Gamepad2 className="w-6 h-6" strokeWidth={1.5} />, 
                        title: "Rest & Gaming Zone", 
                        desc: "A dedicated rest zone featuring a PS5 (coming soon) for your breaks. 🎮",
                        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=800&auto=format&fit=crop"
                      },
                      { 
                        icon: <Trophy className="w-6 h-6" strokeWidth={1.5} />, 
                        title: "Indoor Sports", 
                        desc: "Unwind with table tennis, pool, and other indoor games. 🏓",
                        image: "https://images.unsplash.com/photo-1534158914592-07fc701cb5a6?q=80&w=800&auto=format&fit=crop"
                      },
                  ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -8 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: idx * 0.1, duration: 0.5, type: "spring" }}
                        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0A0A0A] h-full min-h-[300px] group"
                      >
                          {/* Background Image with Zoom Effect */}
                          <div className="absolute inset-0 z-0">
                             <motion.img 
                               src={item.image} 
                               alt={item.title}
                               className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                               whileHover={{ scale: 1.1 }}
                               transition={{ duration: 0.7 }}
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-black via-[#050505]/90 to-transparent" />
                          </div>

                          {/* Content */}
                          <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                              <div className="mb-6 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:bg-[#7C3AED] group-hover:border-[#7C3AED] transition-all duration-300 shadow-lg">
                                  {item.icon}
                              </div>
                              <h3 className="text-2xl font-bold mb-3 text-white leading-tight group-hover:text-purple-300 transition-colors">{item.title}</h3>
                              <p className="text-gray-400 text-sm leading-relaxed max-w-[90%]">
                                  {item.desc}
                              </p>
                          </div>
                      </motion.div>
                  ))}
              </div>
          </div>
      </section>



    </div>
  );
};

export default Careers;
