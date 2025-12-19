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
              Behind the Brand
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
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end relative"
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/30 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative">
              {/* Office Image 1 (Behind - Top Left) */}
              <motion.div
                initial={{ opacity: 0, x: -30, rotate: -15 }}
                whileInView={{ opacity: 0.9, x: 0, rotate: -12 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute -top-12 -left-4 md:-left-20 w-48 h-36 md:w-60 md:h-44 rounded-xl overflow-hidden border-4 border-white/10 shadow-lg z-0"
              >
                <img src="/founder/1.png" alt="Office" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500" />
              </motion.div>

              {/* Office Image 2 (Behind - Bottom Right) */}
              <motion.div
                initial={{ opacity: 0, x: 30, rotate: 15 }}
                whileInView={{ opacity: 0.9, x: 0, rotate: 12 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute top-20 -right-4 md:-right-20 w-48 h-36 md:w-60 md:h-44 rounded-xl overflow-hidden border-4 border-white/10 shadow-lg z-0"
              >
                <img src="/founder/2.png" alt="Office" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500" />
              </motion.div>

              {/* Main Circular Profile */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10 w-72 h-72 md:w-96 md:h-96 rounded-full p-3 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md border border-white/30 shadow-[0_0_80px_rgba(0,0,0,0.3)]"
              >
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
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
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-3 border-2 border-white/20 rounded-full"
                  style={{ 
                    borderStyle: "dashed",
                    borderSpacing: "10px"
                  }}
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-6 border border-white/10 rounded-full"
                />
              </motion.div>

              {/* Floating Stats/Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20"
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-white text-[#e63946] px-8 py-3 rounded-full shadow-2xl font-bold text-sm md:text-base border-2 border-white/50 backdrop-blur-sm"
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