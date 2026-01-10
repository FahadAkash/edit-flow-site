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
    <section className="pt-0 pb-32 px-4 bg-[#050505] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(255,179,0,0.03)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(255,179,0,0.02)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#FFB300]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
          
          {/* Left Visual Column (5 cols) - Flipped from Founder section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative order-2 lg:order-1"
          >
            <div className="relative group">
              {/* Animated Glow Border */}
              <div className="absolute -inset-1 bg-gradient-to-bl from-[#FFB300] to-[#FF8000] rounded-[60px] blur-[2px] opacity-20 group-hover:opacity-40 transition duration-1000" />
              
              <div className="relative z-10 w-full aspect-square rounded-[50px] overflow-hidden border border-white/10 shadow-2xl bg-[#111]">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  src="/founder/image.png"
                  alt="Esmam Ahsan"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
                />
                
                {/* Floating Stats/Badge */}
                <div className="absolute top-8 right-8 p-6 bg-black/60 backdrop-blur-3xl border border-white/10 rounded-[30px] shadow-2xl translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="text-center">
                    <p className="text-[#FFB300] text-3xl font-black leading-none">500+</p>
                    <p className="text-white/40 text-[8px] font-black uppercase tracking-[0.3em] mt-1">Projects Led</p>
                  </div>
                </div>
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
            className="lg:col-span-7 order-1 lg:order-2"
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
              className="text-7xl md:text-9xl text-white mb-6 font-black tracking-tighter leading-[0.85]"
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
              className="text-white/40 text-sm font-bold uppercase tracking-widest mb-12"
            >
              Managing Director
            </motion.p>

            {/* Narrative */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8 text-white/50 leading-relaxed text-xl font-medium max-w-2xl mb-12"
            >
              <p className="border-l-2 border-[#FFB300]/30 pl-8 italic">
                Esmam orchestrates the synergy between <span className="text-white font-bold">creative vision</span> and <span className="text-white font-bold">operational scale</span>. With a focus on delivering high-retention content at speed, he ensures every project exceeds industry standards.
              </p>
              <p className="text-lg font-normal leading-loose pl-8">
                Leading an elite team of editors and strategists, he has built a production ecosystem where creativity thrives without bottlenecks. His systems-first approach ensures that quality remains pristine even as project volume scales, effectively bridging the gap between artistic intent and reliable delivery.
              </p>
            </motion.div>

            {/* Socials & CTA */}
            <div className="flex flex-wrap items-center gap-8">
              <motion.div 
                className="flex items-center gap-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    aria-label={social.label}
                    whileHover={{ scale: 1.2, color: "#FFB300" }}
                    className="text-white/20 transition-all hover:drop-shadow-[0_0_8px_rgba(255,179,0,0.5)]"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest border border-white/10 transition-all"
                >
                  <span>Get in Touch</span>
                  <ArrowRight size={16} />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ManagingDirector;
