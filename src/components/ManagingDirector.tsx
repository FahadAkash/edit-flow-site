import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Twitter, Mail } from "lucide-react";

/**
 * ManagingDirector Section
 * A premium, high-impact section featuring the Managing Director.
 * Complementary to the MeetTheFounder section.
 */
const ManagingDirector = () => {
  const socialLinks = [
    { icon: <Linkedin size={20} />, url: "#", label: "LinkedIn" },
    { icon: <Twitter size={20} />, url: "#", label: "Twitter" },
    { icon: <Mail size={20} />, url: "mailto:contact@editflow.com", label: "Email" }
  ];

  return (
    <section className="pt-40 pb-40 px-4 bg-[#050505] relative overflow-hidden">
      {/* Background Ambience - Intensified */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(255,179,0,0.06)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(255,179,0,0.04)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-[#FFB300]/8 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-[2800px] mx-auto px-4 md:px-12 2xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
          
          {/* Left Visual Column (5 cols) - Flipped from Founder section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 relative order-2 lg:order-1"
          >
            <div className="relative group">
              {/* Animated Glow Border */}
              <div className="absolute -inset-1 bg-gradient-to-bl from-[#FFB300] to-[#FF8000] rounded-[60px] blur-[2px] opacity-20 group-hover:opacity-40 transition duration-1000" />
              
              <div className="relative z-10 w-full aspect-[4/5] rounded-[50px] overflow-hidden border border-white/10 shadow-2xl bg-[#111]">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  src="/founder/image.png"
                  alt="Esmam Ahsan"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
                />
                
                 
              </div>

              {/* Decorative Geometric Accents */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 border-b-2 border-r-2 border-[#FFB300]/20 rounded-br-[50px] -z-10" />
              <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-white/10 rounded-tl-[50px] -z-10" />
            </div>
          </motion.div>

          {/* Right Content Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-8 order-1 lg:order-2"
          >
            {/* Tagline */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="w-10 h-[2px] bg-[#FFB300] shadow-[0_0_10px_#FFB300]" />
              <span className="text-[#FFB300] text-[10px] font-black uppercase tracking-[0.5em]">
                Strategic Leadership
              </span>
            </motion.div>

            {/* Name & Title */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl md:text-7xl 2xl:text-9xl text-white mb-6 font-black tracking-tighter leading-[0.85]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Esmam <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB300] via-[#FFD700] to-[#FF8000]">Ahsan</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-white/40 text-sm 2xl:text-2xl font-bold uppercase tracking-widest mb-12"
            >
              Managing Director
            </motion.p>

            {/* Narrative - Increased width to fill space naturally */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8 text-white/50 leading-relaxed text-xl 2xl:text-4xl font-medium max-w-4xl 2xl:max-w-6xl mb-12"
            >
              <p className="border-l-2 border-[#FFB300]/30 pl-8 italic">
                Esmam orchestrates the synergy between <span className="text-white font-bold">creative vision</span> and <span className="text-white font-bold">operational scale</span>. With a focus on delivering high-retention content at speed, he ensures every project exceeds industry standards.
              </p>
               
            </motion.div>

            {/* Socials & CTA */}
             
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ManagingDirector;
