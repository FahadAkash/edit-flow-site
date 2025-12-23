import React from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Megaphone, Wifi, Gift, Calendar, Plus, Star, ArrowRight } from "lucide-react";

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
        {/* Background Gradients - Exact Match */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#581C87]/20 blur-[150px] rounded-full mix-blend-screen opacity-60" />
           {/* Abstract Circle Graphic Top Left */}
           <div className="absolute top-10 left-10 md:left-20 w-32 h-32 md:w-48 md:h-48 border-[1rem] border-purple-500/20 rounded-full blur-xl opacity-50 animate-pulse" />
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
            Be a <span className="font-serif italic font-light text-white">Monk!</span> Like us
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
                <div className="mt-2 w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Megaphone className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                
                <div className="flex-1 space-y-6">
                    <div>
                        <h3 className="text-3xl font-bold mb-4 group-hover:text-purple-300 transition-colors duration-300">Product Designer</h3>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
                            We're looking for a skilled Product Designer to work on impactful projects, craft user-centric solutions, and guide teams with clarity. 
                            You'll own the design process from start to finish, turning complex problems into intuitive experiences.
                        </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 pt-2">
                        {["UPTO BDT 80K", "2", "Full Time", "Remote"].map((tag, i) => (
                           <span key={i} className={`bg-white/5 border border-white/5 text-white/70 px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors ${i===1 && "w-8 h-8 !p-0 flex items-center justify-center font-serif italic"}`}>
                              {tag}
                           </span>
                        ))}
                    </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
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
                          "At Design Monks, we believe great design is",
                          "where creativity meets technology. Our",
                          "mantra? Fuse the magic of visuals with the",
                          "logic of development. We create",
                          "experiences that are visually aesthetic and",
                          "effortlessly developer-friendly."
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
                        <div className="flex gap-2 mb-6">
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center font-bold text-xl text-blue-600">G</div>
                            <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center font-bold text-xl text-indigo-600 -ml-5 border-4 border-white">C</div>
                        </div>
                        <div className="flex text-yellow-500 gap-1 mb-3">
                             {[...Array(5)].map((_, i) => <Star key={i} className="fill-current w-5 h-5" />)}
                        </div>
                        <h3 className="text-4xl font-bold mb-3 text-gray-900">4.9 Rating</h3>
                        <p className="text-gray-500 text-base leading-relaxed">A premier firm renowned for its outstanding design quality and exceptional client satisfaction.</p>
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
                        <h4 className="text-3xl font-bold mb-4 text-gray-900">Industries</h4>
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
                        icon: <Wifi className="w-8 h-8" strokeWidth={1.5} />, 
                        title: "Remote Work = Freedom", 
                        desc: "Stop being worried about missing your bus to the office, we've been remote since day one." 
                      },
                      { 
                        icon: <Gift className="w-8 h-8" strokeWidth={1.5} />, 
                        title: "Two Festival Bonuses", 
                        desc: "Twice the celebrations, twice the bonuses. You'll get 2 yearly bonuses each worth 50% of your gross salary." 
                      },
                      { 
                        icon: <Calendar className="w-8 h-8" strokeWidth={1.5} />, 
                        title: "Generous Leave Benefits", 
                        desc: "Annual breaks, sick days, and marriage leaves, our leave policies always let you balance your life." 
                      },
                      { 
                        icon: <Wifi className="w-8 h-8" strokeWidth={1.5} />, 
                        title: "Device & Internet Allowance", 
                        desc: "Design Monks helps employees stay productive with financial support for their devices and internet needs." 
                      },
                      { 
                        icon: <Plus className="w-8 h-8" strokeWidth={1.5} />, 
                        title: "Health & Wellness Allowance", 
                        desc: "We prioritize your health and your family's. Our medical allowance never leaves you alone at your worst time." 
                      },
                      { 
                        icon: <Star className="w-8 h-8" strokeWidth={1.5} />, 
                        title: "Performance Bonuses", 
                        desc: "Your hard work never goes unnoticed at Design Monks. You'll earn bonuses for outstanding contributions." 
                      },
                  ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="bg-[#0A0A0A]/50 border border-white/5 p-10 rounded-[2.5rem] hover:border-purple-500/40 hover:bg-[#0F0F0F] transition-all duration-300 group cursor-default relative overflow-hidden"
                      >
                          {/* Hover Gradient Shine */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                          <div className="mb-8 w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white/80 group-hover:text-purple-400 group-hover:scale-110 transition-all duration-300">
                              {item.icon}
                          </div>
                          <h3 className="text-2xl font-bold mb-4 leading-tight">{item.title}</h3>
                          <p className="text-gray-400 text-base leading-relaxed">
                              {item.desc}
                          </p>
                      </motion.div>
                  ))}
              </div>
          </div>
      </section>

      {/* 4. FLOATING BOTTOM NAV PILL - EXACT COPY */}
      <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center pointer-events-none">
         <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8, type: "spring" }}
            className="flex items-center gap-1 p-1.5 bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl pointer-events-auto"
         >
            {["Projects", "Services"].map((item) => (
               <button key={item} className="px-6 py-2.5 rounded-full text-sm font-semibold text-white/60 hover:text-white hover:bg-white/10 transition-all">
                  {item}
               </button>
            ))}
            <button className="px-6 py-2.5 rounded-full bg-[#7C3AED] text-white text-sm font-bold flex items-center gap-2 hover:bg-[#6D28D9] transition-all shadow-[0_0_20px_-5px_rgba(124,58,237,0.5)]">
               <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
               Start a Project
            </button>
            {["Pricing", "More"].map((item) => (
               <button key={item} className="px-6 py-2.5 rounded-full text-sm font-semibold text-white/60 hover:text-white hover:bg-white/10 transition-all">
                  {item}
               </button>
            ))}
         </motion.div>
      </div>

    </div>
  );
};

export default Careers;
