import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Megaphone, Wifi, Gift, Calendar, Plus, Star, ArrowRight } from "lucide-react";

/**
 * Careers Page
 * Matches specific UI requirements provided in screenshots (Hero, Motive, Benefits).
 */

const Careers = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#FFB300]/30 font-sans">
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full" />
           <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-4 py-1.5 rounded-full border border-green-500/30 text-green-400 bg-green-500/10 text-xs font-medium uppercase tracking-wider mb-6"
            >
              Openings
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
            >
              Be a <span className="font-serif italic font-normal text-white">Monk!</span> Like us
            </motion.h1>
          </div>

          {/* Job Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-4xl mx-auto p-[1px] rounded-3xl bg-gradient-to-r from-purple-500/50 via-blue-500/30 to-purple-500/50"
          >
            <div className="bg-[#0A0A0A] rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:bg-[#0f0f0f] transition-colors">
              {/* Inner Glow */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-600/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-purple-600/20 transition-all duration-500" />
              
              <div className="flex flex-col md:flex-row gap-6 md:items-start relative z-10">
                <div className="mt-1">
                    <Megaphone className="w-8 h-8 text-white/80" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-4">Product Designer</h3>
                    <p className="text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        We're looking for a skilled Product Designer to work on impactful projects, craft user-centric solutions, and guide teams with clarity. 
                        You'll own the design process from start to finish, turning complex problems into intuitive experiences. If you're a Figma pro, think...
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                        <span className="bg-white/5 border border-white/5 hover:border-white/20 text-white/70 px-4 py-1.5 rounded-full text-sm transition-colors cursor-default">UPTO BDT 80K</span>
                        <span className="bg-white/5 border border-white/5 hover:border-white/20 text-white/70 w-8 h-8 flex items-center justify-center rounded-full text-sm font-serif italic transition-colors cursor-default">2</span>
                        <span className="bg-white/5 border border-white/5 hover:border-white/20 text-white/70 px-4 py-1.5 rounded-full text-sm transition-colors cursor-default">Full Time</span>
                        <span className="bg-white/5 border border-white/5 hover:border-white/20 text-white/70 px-4 py-1.5 rounded-full text-sm transition-colors cursor-default">Remote</span>
                    </div>
                </div>
                <div className="self-center md:self-start">
                     {/* Placeholder for action arrow or similar if needed */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. MOTIVE & GOALS SECTION (Light) */}
      <section className="bg-white py-24 px-6 md:px-12 text-black relative">
         <div className="max-w-7xl mx-auto">
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="mb-8"
             >
                 <span className="px-4 py-1.5 rounded-full border border-green-500/30 text-green-700 bg-green-500/10 text-xs font-medium uppercase tracking-wider">
                    Our story
                 </span>
             </motion.div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                 {/* Left Text */}
                 <div>
                     <motion.h2 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                           hidden: { opacity: 0, y: 20 },
                           visible: {
                              opacity: 1,
                              y: 0,
                              transition: {
                                 type: "spring",
                                 stiffness: 50,
                                 staggerChildren: 0.1
                              }
                           }
                        }}
                        className="text-5xl md:text-6xl font-bold mb-8 leading-tight"
                     >
                        {/* Word-by-word reveal */}
                        {["Our", "Motive", "&", "Goals"].map((word, i) => (
                           <motion.span 
                              key={i} 
                              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                              className={i === 1 || i === 2 || i === 3 ? "font-serif italic font-normal inline-block mr-3" : "inline-block mr-3"}
                           >
                              {word}
                           </motion.span>
                        ))}
                     </motion.h2>

                     {/* Text color fill animation on scroll */}
                     <motion.p
                        initial={{ opacity: 0.2 }} // Start dim
                        whileInView={{ opacity: 1 }} // Fade to full opacity
                        viewport={{ once: true, margin: "-10%" }} // Trigger a bit earlier
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="text-gray-900 text-xl md:text-2xl leading-relaxed font-light bg-clip-text text-transparent bg-gradient-to-r from-black to-black/60"
                        style={{
                           // Fallback for non-supporting browsers or simpler implementation
                           color: '#111'
                        }}
                     >
                        <motion.span 
                          initial={{ opacity: 0 }} 
                          whileInView={{ opacity: 1 }} 
                          viewport={{ once: true }} 
                          transition={{ duration: 0.8, delay: 0.2 }}
                        >
                           At Design Monks, we believe great design is where creativity meets technology. 
                        </motion.span>
                        <motion.span 
                           initial={{ opacity: 0 }} 
                           whileInView={{ opacity: 1 }} 
                           viewport={{ once: true }} 
                           transition={{ duration: 0.8, delay: 0.4 }}
                           className="text-gray-500"
                        >
                           {" "}Our mantra? Fuse the magic of visuals with the logic of development.
                        </motion.span>
                        <motion.span 
                           initial={{ opacity: 0 }} 
                           whileInView={{ opacity: 1 }} 
                           viewport={{ once: true }} 
                           transition={{ duration: 0.8, delay: 0.6 }}
                        >
                           {" "}We create experiences that are visually aesthetic and effortlessly developer-friendly.
                        </motion.span>
                     </motion.p>
                 </div>

                 {/* Right Cards */}
                 <div className="space-y-6">
                     {/* Card 1 - Pop Up Animation */}
                     <motion.div
                       initial={{ opacity: 0, scale: 0.8, y: 50 }}
                       whileInView={{ opacity: 1, scale: 1, y: 0 }}
                       viewport={{ once: true, margin: "-50px" }}
                       transition={{ type: "spring", stiffness: 100, damping: 20 }}
                       whileHover={{ y: -10, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)" }}
                       className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm transform-gpu"
                     >
                        <div className="flex gap-1 mb-4">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">C</div>
                            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center font-bold text-red-600 -ml-4 border-2 border-white">G</div>
                        </div>
                        <div className="flex text-yellow-400 gap-1 mb-2">
                             {[...Array(5)].map((_, i) => (
                                <motion.div
                                   key={i}
                                   initial={{ opacity: 0, scale: 0 }}
                                   whileInView={{ opacity: 1, scale: 1 }}
                                   transition={{ delay: 0.5 + (i * 0.1) }}
                                >
                                   <Star className="fill-current w-4 h-4" />
                                </motion.div>
                             ))}
                        </div>
                        <h3 className="text-3xl font-bold mb-2">4.9 Rating</h3>
                        <p className="text-gray-500 text-sm">A premier firm renowned for its outstanding design quality and exceptional client satisfaction.</p>
                     </motion.div>

                     {/* Card 2 - Pop Up with Delay */}
                     <motion.div
                       initial={{ opacity: 0, scale: 0.8, y: 50 }}
                       whileInView={{ opacity: 1, scale: 1, y: 0 }}
                       viewport={{ once: true, margin: "-50px" }}
                       transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                       whileHover={{ y: -10, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)" }}
                       className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm transform-gpu"
                     >
                        <div className="mb-4">
                           {/* Simple infinity logo SVG approximation */}
                           <svg width="48" height="24" viewBox="0 0 100 50" className="text-purple-600">
                               <path d="M25,25 C10,25 10,0 25,0 C40,0 40,25 50,25 C60,25 60,0 75,0 C90,0 90,25 75,25 C60,25 60,50 50,50 C40,50 40,25 25,25" fill="none" stroke="url(#grad1)" strokeWidth="8" strokeLinecap="round" />
                               <defs>
                                   <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                     <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity : 1 }} />
                                     <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity : 1 }} />
                                   </linearGradient>
                               </defs>
                           </svg>
                        </div>
                        <h3 className="text-3xl font-bold mb-2">20+</h3>
                        <h4 className="text-2xl font-bold mb-2">Industries</h4>
                        <p className="text-gray-500 text-sm">A proven track record of expertise and reliability in delivering successful projects.</p>
                     </motion.div>
                 </div>
             </div>
         </div>
      </section>


      {/* 3. BENEFITS GRID (Dark) */}
      <section className="py-24 px-6 relative bg-[#050505]">
          <div className="absolute inset-0 bg-transparent">
             {/* Glows behind grid */}
             <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-900/20 blur-[150px] rounded-full pointer-events-none" />
             <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                        icon: <Wifi className="w-8 h-8" strokeWidth={1.5} />, // Using Wifi again for Device/Internet as generic 
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
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(124, 58, 237, 0.2)" }}
                        className="bg-[#0f0f0f] border border-white/5 p-8 rounded-[32px] hover:border-purple-500/30 transition-all duration-300 group"
                      >
                          <div className="mb-6 text-white group-hover:text-purple-400 transition-colors">
                              {item.icon}
                          </div>
                          <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                          <p className="text-gray-400 text-sm leading-relaxed">
                              {item.desc}
                          </p>
                      </motion.div>
                  ))}
              </div>
          </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
