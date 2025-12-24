import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import { Megaphone, Wifi, Gift, Calendar, Plus, Star, ArrowRight, Coffee, Gamepad2, Trophy, Sparkles, Zap } from "lucide-react";

/**
 * Careers Page - Premium Modern UI/UX
 * Enhanced with sophisticated animations, glassmorphism, and premium visual effects
 */

const Careers = () => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.95]);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#7C3AED]/30 font-sans cursor-default">
      <Navbar />
      
      {/* 1. HERO SECTION - Enhanced with Parallax */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative pt-32 pb-32 px-6 overflow-hidden min-h-[90vh] flex flex-col items-center justify-center"
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(124, 58, 237, 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Multiple Gradient Orbs with Animation */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-purple-600/30 blur-[150px] rounded-full"
          />
          
          <motion.div 
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-20 w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full"
          />

          <motion.div 
            animate={{ 
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-pink-500/20 blur-[130px] rounded-full"
          />

          {/* Floating Showcase Images */}
          <motion.div 
            animate={{ y: [0, -30, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 -translate-y-1/2 left-0 w-[500px] md:w-[700px] opacity-40 blur-[2px]"
            style={{ 
              maskImage: "radial-gradient(circle, black 30%, transparent 65%)", 
              WebkitMaskImage: "radial-gradient(circle, black 30%, transparent 65%)" 
            }}
          >
            <img src="https://media.discordapp.net/attachments/778188386262581288/1453265213225701467/3.png?ex=694cd233&is=694b80b3&hm=93f6c41a0694be9cd2bf32b98b447d9655bd6c203e5cc19891a57212cb90818b&=&format=webp&quality=lossless&width=902&height=902" alt="" className="w-full h-full object-contain" />
          </motion.div>

          <motion.div 
            animate={{ y: [0, 40, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute top-1/2 -translate-y-1/2 right-0 w-[500px] md:w-[700px] opacity-40 blur-[2px]"
            style={{ 
              maskImage: "radial-gradient(circle, black 30%, transparent 65%)", 
              WebkitMaskImage: "radial-gradient(circle, black 30%, transparent 65%)" 
            }}
          >
            <img src="https://media.discordapp.net/attachments/778188386262581288/1453265214102569031/4.png?ex=694cd233&is=694b80b3&hm=3d6038f6dd79cbc7e4779a920ebbc54b6d569c8ad06df9c88e2d3f3b46c4cb69&=&format=webp&quality=lossless&width=902&height=902" alt="" className="w-full h-full object-contain" />
          </motion.div>

          {/* Floating Particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-[1200px] w-full mx-auto relative z-10 flex flex-col items-center">
          {/* Animated Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-8 group"
          >
            <div className="absolute inset-0 bg-[#4ADE80] blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative px-6 py-2 rounded-full border border-[#4ADE80]/40 text-[#4ADE80] bg-black/40 backdrop-blur-xl text-[11px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-green-500/20">
              <Sparkles className="w-3 h-3 animate-pulse" />
              We're Hiring
            </div>
          </motion.div>
          
          {/* Main Title with Gradient & Animation */}
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl font-bold tracking-tight mb-16 text-center leading-[1.1]"
          >
            Be an{" "}
            <span className="relative inline-block">
              <span className="font-serif italic font-light bg-gradient-to-r from-red-500 via-pink-500 to-red-600 bg-clip-text text-transparent animate-gradient">
                Editing
              </span>
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 blur-2xl -z-10"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </span>{" "}
            <span className="font-serif italic font-light">Rockstar!</span>
            <br />
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Like Us
            </span>
          </motion.h1>

          {/* Enhanced Job Card */}
          <motion.a 
            href="https://forms.gle/E6gHyKiCQjVPQDiP8"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -10 }}
            className="w-full max-w-5xl group cursor-pointer block"
          >
            <div className="relative rounded-[2.5rem] bg-gradient-to-br from-[#0F0F0F] to-[#0A0A0A] border border-white/10 p-12 md:p-16 overflow-hidden backdrop-blur-2xl transition-all duration-500 hover:border-red-500/50 hover:shadow-[0_0_80px_-15px_rgba(239,68,68,0.4)] group">
              {/* Animated Gradient Background */}
              <motion.div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 70%)',
                }}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Glowing orbs */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/20 blur-[120px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-500/15 blur-[100px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="flex flex-col md:flex-row gap-10 items-start relative z-10">
                {/* Animated Icon */}
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="mt-2 w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-white/20 flex items-center justify-center shrink-0 shadow-lg shadow-red-500/20 group-hover:shadow-red-500/40 transition-shadow"
                >
                  <Megaphone className="w-7 h-7 text-white" strokeWidth={1.5} />
                </motion.div>
                
                <div className="flex-1 space-y-7">
                  <div>
                    <motion.h3 
                      className="text-4xl font-bold mb-5 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-white transition-all duration-300"
                    >
                      Video Editor
                    </motion.h3>
                    <motion.p 
                      className="text-gray-400 text-lg leading-relaxed max-w-3xl group-hover:text-gray-300 transition-colors"
                    >
                      We're looking for a skilled Video Editor to craft high-impact content, transform raw footage into engaging stories, and elevate videos through pacing, visuals, and sound. You'll own the editing process end-to-end, turning ideas into polished content that holds attention and delivers results.
                    </motion.p>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 pt-2">
                    {[
                      { label: "UP TO BDT 50K", icon: <Zap className="w-3 h-3" /> },
                      { label: "Full Time", icon: <Star className="w-3 h-3" /> },
                      { label: "In-House", icon: <Trophy className="w-3 h-3" /> }
                    ].map((tag, i) => (
                      <motion.span 
                        key={i}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="bg-white/5 border border-white/10 text-white/80 px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all hover:bg-white/10 hover:border-red-500/30 cursor-default flex items-center gap-2 shadow-lg"
                      >
                        {tag.icon}
                        {tag.label}
                      </motion.span>
                    ))}
                  </div>

                  {/* CTA Arrow */}
                  <motion.div 
                    className="flex items-center gap-2 text-red-500 font-semibold pt-4 transition-colors duration-300 hover:text-red-400 group"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    Apply Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.a>
        </div>

        {/* Smooth Gradient Transition */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-white/50 to-white pointer-events-none z-20" />
      </motion.section>

      {/* 2. MOTIVE & GOALS SECTION - Enhanced */}
      <section className="bg-white py-32 px-6 md:px-12 text-black relative overflow-hidden">
        {/* Subtle Pattern Background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }} />

        <div className="max-w-[1240px] mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-red-600/30 text-red-700 bg-gradient-to-r from-red-50 to-orange-50 text-xs font-bold uppercase tracking-widest shadow-sm">
              <Sparkles className="w-3 h-3" />
              Our story
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            {/* Left Text Column */}
            <div className="max-w-xl">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-7xl font-bold mb-12 leading-[1.05] tracking-tight"
              >
                Our{" "}
                <span className="font-serif italic font-light inline-block relative">
                  Motive & Goals
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-orange-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </span>
              </motion.h2>

              {/* Animated Text Lines - Enhanced Copy */}
              <div className="text-xl md:text-[1.8rem] leading-[1.5] font-medium space-y-3">
                {[
                  <>At <span className="text-red-600 font-bold">Kontent Protocol</span>, we are re-defining the DNA of digital storytelling.</>,
                  <>We don't just cut clips; we <span className="text-red-700 font-bold underline decoration-red-500/30 underline-offset-4">Architect Emotions</span>. Our movement is fueled</>,
                  <>by a relentless creative Obsession where precision is the only standard.</>,
                  <>Our goal is to forge raw, unrefined footage into Surgically Sharp masterpieces—high-impact narratives that command <span className="text-gray-900 border-b-2 border-red-600">Absolute Attention</span>.</>,
                  <>By blending technical Mastery  with elite</>,
                  <>aesthetic discipline, we ensure your message doesn't just reach an audience;</>,
                  <>it <span className="italic font-bold text-red-600">Dominates</span> the digital landscape with unmatched clarity.</>
                ].map((line, i) => (
                  <div key={i} className="overflow-hidden py-1">
                    <motion.div
                      initial={{ y: "100%", opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ 
                        duration: 0.9, 
                        delay: i * 0.08, 
                        ease: [0.16, 1, 0.3, 1] 
                      }}
                      className="text-[#1A1A1A]"
                    >
                      {line}
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Cards Column - Enhanced & Balanced */}
            <div className="space-y-6">
              {/* Rating Card */}
              <motion.div
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 30px 60px -15px rgba(239, 68, 68, 0.15)",
                  scale: 1.02 
                }}
                className="bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-xl cursor-pointer group transition-all relative overflow-hidden"
              >
                {/* Animated gradient overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-orange-500/0 group-hover:from-red-500/[0.03] group-hover:to-orange-500/[0.03] transition-all duration-700"
                />

                <div className="relative z-10">
                  <div className="flex gap-4 mb-10 items-center">
                    {[
                      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK4OfAtnOKgbngp1-P4gnncqdnzzVUWrlvXA&s", name: "Fiverr" },
                      { src: "https://www.citypng.com/public/uploads/preview/upwork-round-logo-icon-png-7017516949686332n4bo69bd8.png", name: "Upwork" },
                      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png", name: "Google" }
                    ].map((logo, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="w-14 h-14 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-md overflow-hidden"
                      >
                        <img src={logo.src} alt={logo.name} className="w-full h-full object-cover scale-110" />
                      </motion.div>
                    ))}
                  </div>

                  <motion.h3 
                    className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-gray-950 to-gray-700 bg-clip-text text-transparent"
                  >
                    2000+
                  </motion.h3>
                  <p className="text-gray-500 text-lg font-bold uppercase tracking-wider">5-Star Reviews</p>
                </div>
              </motion.div>

              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 30px 60px -15px rgba(239, 68, 68, 0.15)",
                  scale: 1.02 
                }}
                className="bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-xl cursor-pointer group transition-all relative overflow-hidden"
              >
                <div className="relative z-10 text-center py-4">
                  <h3 className="text-7xl font-black mb-2 text-red-600">20+</h3>
                  <h4 className="text-3xl font-extrabold mb-4 text-gray-950">Active Clients</h4>
                  <div className="w-16 h-1 bg-red-600 mx-auto mb-6 rounded-full" />
                  <p className="text-gray-500 text-base font-medium leading-relaxed">
                    Trusted by elite creators across four continents.
                  </p>
                </div>
              </motion.div>

              {/* Projects Card - New to fill space */}
              <motion.div
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 30px 60px -15px rgba(239, 68, 68, 0.15)",
                  scale: 1.02 
                }}
                className="bg-gradient-to-br from-red-600 to-orange-500 p-12 rounded-[2.5rem] shadow-xl text-white cursor-pointer group transition-all relative overflow-hidden"
              >
                <div className="relative z-10 text-center py-4">
                  <h3 className="text-6xl font-black mb-1">50+</h3>
                  <h4 className="text-2xl font-bold mb-4 opacity-90">Daily Edits</h4>
                  <p className="text-white/80 text-sm font-medium leading-relaxed">
                    Scaling content production without sacrificing a single drop of quality.
                  </p>
                </div>
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-32 h-32 bg-orange-400/20 rounded-full blur-2xl" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BENEFITS GRID - Premium Dark Section */}
      <section className="py-32 px-6 relative bg-[#050505] overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-[1200px] h-[1200px] bg-purple-900/10 blur-[200px] rounded-full pointer-events-none"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-[1000px] h-[1000px] bg-blue-900/10 blur-[180px] rounded-full pointer-events-none"
        />

        <div className="max-w-[1240px] mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Why Join Us?
            </motion.h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Premium benefits designed to support your growth and well-being
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: <Gift className="w-6 h-6" strokeWidth={1.5} />, 
                title: "Festival Bonuses", 
                desc: "Values that matter. We reward hard work with festival bonuses and performance incentives. 🎁",
                gradient: "from-orange-500/20 to-red-500/20"
              },
              { 
                icon: <Calendar className="w-6 h-6" strokeWidth={1.5} />, 
                title: "Generous Leave Policy", 
                desc: "Annual leaves, sick leaves, and flexible breaks for a healthy work-life balance. ✈️",
                gradient: "from-blue-500/20 to-cyan-500/20"
              },
              { 
                icon: <Plus className="w-6 h-6" strokeWidth={1.5} />, 
                title: "Premium Resources", 
                desc: "Full access to a massive library of premium assets, stock footage, and editing tools. 💎",
                gradient: "from-purple-500/20 to-pink-500/20"
              },
              { 
                icon: <Wifi className="w-6 h-6" strokeWidth={1.5} />, 
                title: "Supportive Environment", 
                desc: "A collaborative team culture with zero micro-management. We trust you. 🤝",
                gradient: "from-green-500/20 to-emerald-500/20"
              },
              { 
                icon: <Star className="w-6 h-6" strokeWidth={1.5} />, 
                title: "Emergency Fund", 
                desc: "We stand by our long-term team members with financial support when life happens. 🛡️",
                gradient: "from-yellow-500/20 to-orange-500/20"
              },
              { 
                icon: <Megaphone className="w-6 h-6" strokeWidth={1.5} />, 
                title: "Fast Skill Growth", 
                desc: "Rapid skill development through dedicated training and international client exposure. 🚀",
                gradient: "from-indigo-500/20 to-purple-500/20"
              },
              { 
                icon: <Coffee className="w-6 h-6" strokeWidth={1.5} />, 
                title: "Snacks & Beverages", 
                desc: "Unlimited tea, coffee, and quality snacks to keep you energized. ☕",
                gradient: "from-amber-500/20 to-yellow-500/20"
              },
              { 
                icon: <Gamepad2 className="w-6 h-6" strokeWidth={1.5} />, 
                title: "Rest & Gaming Zone", 
                desc: "A dedicated rest zone featuring a PS5 (coming soon) for your breaks. 🎮",
                gradient: "from-violet-500/20 to-purple-500/20"
              },
              { 
                icon: <Trophy className="w-6 h-6" strokeWidth={1.5} />, 
                title: "Indoor Sports", 
                desc: "Unwind with table tennis, pool, and other indoor games. 🏓",
                gradient: "from-teal-500/20 to-cyan-500/20"
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(124, 58, 237, 0.25)"
                }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: idx * 0.08, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0F0F0F] to-[#0A0A0A] h-full min-h-[280px] group cursor-pointer"
              >
                {/* Animated gradient background */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                    backgroundSize: '200% 200%',
                  }}
                  animate={{
                    backgroundPosition: ['200% 0%', '-200% 0%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  <div>
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="mb-6 w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-blue-500 group-hover:border-transparent transition-all duration-300 shadow-2xl shadow-purple-500/0 group-hover:shadow-purple-500/50"
                    >
                      {item.icon}
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold mb-3 text-white leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-white group-hover:bg-clip-text transition-all duration-300">
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {item.desc}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
