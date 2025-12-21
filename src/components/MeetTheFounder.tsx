import { motion } from "framer-motion";

const MeetTheFounder = () => {
  const socialLinks = [
    { icon: "X", url: "#", label: "Twitter/X" },
    { icon: "🎙️", url: "#", label: "Podcast" },
    { icon: "🎵", url: "#", label: "Spotify" },
    { icon: "▶️", url: "#", label: "YouTube" },
    { icon: "in", url: "#", label: "LinkedIn" },
    { icon: "📷", url: "#", label: "Instagram" },
    { icon: "♪", url: "#", label: "TikTok" }
  ];

  return (
    <section className="py-20 px-4 bg-[#e63946]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Tag */}
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-white text-[#e63946] text-sm font-medium px-4 py-1.5 rounded-full mb-6 shadow-sm"
            >
             
MEET THE FOUNDER & CEO!
            </motion.span>

            {/* Title */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl text-white mb-4 font-bold tracking-tight"
            >
              Ahmed Yousuf
            </motion.h2>

            {/* Underline with Social Icons */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-4 mb-8"
            >
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="w-16 h-1 bg-white origin-left"
              ></motion.div>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    aria-label={social.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -3 }}
                    className="text-white hover:text-white/80 transition-all text-lg"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Bio Paragraphs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-5 text-white/95 leading-relaxed text-base md:text-lg font-light"
            >
              <p>
                Ahmed Yousuf is the founder of Kontent Protocol, a results-driven content growth agency helping entrepreneurs turn educational YouTube and Instagram content into high-converting digital assets. With 1,500+ client reviews and experience working with brands like Coursera, Neutonic (baverage brand of Chris Williamson) and Microsoft and many more.
              </p>
              <p>
                He and his team specializes in premium video editing, YouTube strategy, and scalable content systems that drive real business outcomes. Starting as a solo editor and growing into a full-stack content system and personal Brand partner, Ahmed and his team blends storytelling, strategy, and AI-powered workflows to help creators grow, monetize, and build authority online.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 mt-10 bg-white text-[#e63946] px-10 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all shadow-xl"
            >
              Work With Me 
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Right Image Composition - Circular with Floating Widgets */}
           {/* Right Image Composition - Modern Circular Profile */}
          {/* Right Image Composition - Modern Circular Profile */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 0 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-start lg:justify-start relative ml-12 md:ml-24"
            style={{ transform: 'none' }}
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/30 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative" style={{ transform: 'none' }}>
              {/* Main Circular Profile */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0, rotate: 0 }}
                whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10 w-80 h-80 md:w-[500px] md:h-[500px] rounded-full p-4 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md border border-white/30 shadow-[0_0_100px_rgba(0,0,0,0.4)]"
              >
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl bg-black">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src="/founder/founder.png"
                    alt="Ahmed Yousuf - Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Animated Decorative Rings */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 border-2 border-white/10 rounded-full"
                  style={{ 
                    borderStyle: "dashed",
                    borderSpacing: "12px"
                  }}
                />
              </motion.div>

              {/* Floating Stats/Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-30"
                style={{ transform: 'translateX(-50%) rotate(0deg)' }}
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-white text-[#e63946] px-10 py-4 rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.3)] font-black text-sm md:text-lg border-2 border-white/50 backdrop-blur-md whitespace-nowrap"
                >
                  1,500+ Happy Clients
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheFounder;