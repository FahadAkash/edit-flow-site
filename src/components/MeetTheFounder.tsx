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

          {/* Right Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="relative w-[340px] h-[340px] md:w-[450px] md:h-[450px] flex items-center justify-center">
              
              {/* Studio Image 1 (Top Left) */}
              <motion.div
                initial={{ opacity: 0, x: -20, rotate: -10 }}
                whileInView={{ opacity: 1, x: 0, rotate: -6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute top-0 left-0 md:-left-8 w-40 h-32 md:w-56 md:h-40 rounded-xl overflow-hidden border-4 border-white shadow-xl z-0"
              >
                <img src="/founder/1.png" alt="Studio Setup" className="w-full h-full object-cover" />
              </motion.div>

              {/* Studio Image 2 (Bottom Right) */}
              <motion.div
                initial={{ opacity: 0, x: 20, rotate: 10 }}
                whileInView={{ opacity: 1, x: 0, rotate: 6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-4 right-0 md:-right-4 w-40 h-32 md:w-56 md:h-40 rounded-xl overflow-hidden border-4 border-white shadow-xl z-0"
              >
                <img src="/founder/2.png" alt="Recording Room" className="w-full h-full object-cover" />
              </motion.div>

              {/* Main Profile Circle */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-56 h-56 md:w-80 md:h-80 rounded-full bg-white p-2 shadow-2xl relative z-10"
              >
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="/founder/founder.png"
                    alt="Ahmed Yousuf - Founder"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </motion.div>

               

              {/* Decorative Sparkle */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-2 left-8 md:left-4 text-4xl"
              >
                ✨
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheFounder;