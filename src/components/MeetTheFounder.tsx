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
            <span className="inline-block bg-white text-[#e63946] text-sm font-medium px-4 py-1.5 rounded-full mb-6 shadow-sm">
              Behind the Brand
            </span>

            {/* Title - Changed to font-normal */}
            <h2 className="text-4xl md:text-5xl text-white mb-4 font-normal tracking-normal">
              Ahmed Yousuf
            </h2>

            {/* Underline with Social Icons */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-1 bg-white"></div>
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    aria-label={social.label}
                    className="text-white hover:text-white/80 transition-colors text-lg"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Bio Paragraphs */}
            <div className="space-y-4 font-normal text-white leading-relaxed text-lg">
              <p>
                Ahmed Yousuf is the founder of Kontent Protocol, a results-driven content growth agency helping entrepreneurs turn educational YouTube and Instagram content into high-converting digital assets. With 1,500+ client reviews and experience working with brands like Coursera, Neutonic (baverage brand of Chris Williamson) and Microsoft and many more.
              </p>
              <p>
                He and his team specializes in premium video editing, YouTube strategy, and scalable content systems that drive real business outcomes. Starting as a solo editor and growing into a full-stack content system and personal Brand partner, Ahmed and his team blends storytelling, strategy, and AI-powered workflows to help creators grow, monetize, and build authority online.
              </p>
               
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-8 bg-white text-[#e63946] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg"
            >
              Work With Me →
            </motion.a>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Circle Background - Solid White for contrast against Red */}
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-white p-2 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden">
                  {/* Profile Image - Replace with actual image */}
                  <img
                    src="/founder/founder.png"
                    alt="Ahmed Yousuf - Founder"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-[#FFB300] rounded-full shadow-lg flex items-center justify-center text-2xl"
              >
                ✨
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-black rounded-full shadow-lg flex items-center justify-center text-white text-2xl"
              >
                🎬
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheFounder;
