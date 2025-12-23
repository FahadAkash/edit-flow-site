import { motion } from "framer-motion";
import { ArrowRight, Zap, Twitter, Youtube, Linkedin, Instagram, MessageSquare, Mic, Music } from "lucide-react";

/**
 * MeetTheFounder - Ultra-Modern Dark Section
 * Replaces old red theme with a sleek, premium dark aesthetic that matches the brand.
 */
const MeetTheFounder = () => {
  const socialLinks = [
    { icon: <Twitter size={20} />, url: "#", label: "Twitter" },
    { icon: <Youtube size={20} />, url: "#", label: "YouTube" },
    { icon: <Linkedin size={20} />, url: "#", label: "LinkedIn" },
    { icon: <Instagram size={20} />, url: "#", label: "Instagram" },
    { icon: <Music size={20} />, url: "#", label: "TikTok" },
    { icon: <Mic size={20} />, url: "#", label: "Podcast" }
  ];

  return (
    <section className="py-32 px-4 bg-[#050505] relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,179,0,0.03)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(255,179,0,0.02)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#FFB300]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
          
          {/* Left Content Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            {/* Minimal Header */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="w-10 h-[2px] bg-[#FFB300] shadow-[0_0_10px_#FFB300]" />
              <span className="text-[#FFB300] text-[10px] font-black uppercase tracking-[0.5em]">
                Meet The Architect
              </span>
            </motion.div>

            {/* Typography Masterpiece */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-7xl md:text-9xl text-white mb-10 font-black tracking-tighter leading-[0.85]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Ahmed <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB300] via-[#FFD700] to-[#FF8000]">Yousuf</span>
            </motion.h2>

            {/* Social Engagement Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <div className="flex items-center gap-5 bg-white/[0.03] backdrop-blur-2xl rounded-full px-8 py-4 border border-white/10 shadow-inner">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    aria-label={social.label}
                    whileHover={{ scale: 1.25, y: -4, color: "#FFB300" }}
                    className="text-white/30 transition-all hover:drop-shadow-[0_0_8px_rgba(255,179,0,0.5)]"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              <div className="px-6 py-2 rounded-full border border-white/5 bg-white/[0.01] text-[10px] text-white/20 font-bold uppercase tracking-widest hidden sm:block">
                @AhmedYousufOfficial
              </div>
            </motion.div>

            {/* Narrative Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-8 text-white/50 leading-relaxed text-xl font-medium max-w-2xl"
            >
              <p className="border-l-2 border-[#FFB300]/30 pl-8 italic">
                Ahmed is the founder of <span className="text-white font-bold tracking-tight">Kontent Protocol</span>, a results-driven agency helping entrepreneurs transform educational content into high-converting digital assets.
              </p>
              <p className="text-lg font-normal leading-loose pl-8">
                Specializing in premium video systems for industry titans like <span className="text-white">Coursera</span>, <span className="text-[#FFB300]">Neutonic</span>, and <span className="text-white">Microsoft</span>, Ahmed's team blends cinematic storytelling with AI-driven strategies to dominate digital attention.
              </p>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12"
            >
              <motion.a
                href="https://forms.gle/925ARc2RbCocoS5A7"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-4 bg-gradient-to-r from-[#FFB300] to-[#FF8000] text-black px-12 py-6 rounded-[24px] font-black text-sm uppercase tracking-widest shadow-[0_20px_40px_-10px_rgba(255,179,0,0.3)] group transition-all"
              >
                <span>Partner With Us</span>
                <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" strokeWidth={3} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Visual Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Cinematic Frame */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#FFB300] to-[#FF8000] rounded-[60px] blur-[2px] opacity-20 group-hover:opacity-40 transition duration-1000" />
              
              <div className="relative z-10 w-full aspect-[4/5] rounded-[50px] overflow-hidden border border-white/10 shadow-2xl bg-[#111]">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  src="/founder/founder.png"
                  alt="Ahmed Yousuf"
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000"
                />
                
                {/* Immersive Overlay Badge */}
                <div className="absolute bottom-8 right-8 left-8 p-8 bg-black/60 backdrop-blur-3xl border border-white/10 rounded-[35px] flex items-center gap-6 shadow-2xl translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="w-16 h-16 bg-[#FFB300] rounded-2xl flex items-center justify-center shadow-lg shadow-[#FFB300]/20 rotate-3 group-hover:rotate-0 transition-transform">
                    <Zap className="text-black fill-black" size={32} />
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-1">Impact Driven</p>
                    <p className="text-3xl font-black text-white leading-none tracking-tighter">1,500+ <span className="text-lg font-bold text-white/60">REV</span></p>
                  </div>
                </div>
              </div>

              {/* Decorative Accents */}
              <div className="absolute -top-10 -right-10 w-40 h-40 border-t-2 border-r-2 border-[#FFB300]/20 rounded-tr-[50px] -z-10" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 border-b-2 border-l-2 border-white/10 rounded-bl-[50px] -z-10" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MeetTheFounder;