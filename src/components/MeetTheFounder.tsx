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
            <span className="inline-block bg-black/20 backdrop-blur-sm text-white text-sm font-normal px-4 py-1.5 rounded mb-6 border border-white/10">
              Behind the Brand
            </span>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl text-white mb-4 tracking-tight font-normal">
              MEET PARVIR
            </h2>

            {/* Underline with Social Icons */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-1 bg-white/30"></div>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    aria-label={social.label}
                    className="text-white/80 hover:text-white transition-colors text-lg"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Bio Paragraphs */}
            <div className="space-y-4 text-white/90 leading-relaxed font-normal">
              <p>
                Parvir is the founder of EditFlow, a premier video editing agency that has helped 
                <span className="text-white font-medium border-b border-white/30"> hundreds of content creators</span> transform 
                their raw footage into viral, engaging content.
              </p>
              <p>
                He's grown his agency from a solo freelancer to a full team of editors, 
                serving clients who have collectively gained <span className="text-white font-medium border-b border-white/30">millions of views</span> and 
                <span className="text-white font-medium border-b border-white/30"> thousands of subscribers</span>.
              </p>
              <p>
                With years of experience in video editing and a deep understanding of what makes 
                content perform on YouTube, TikTok, and Instagram, Parvir is passionate about 
                helping creators focus on what they do best while his team handles the editing magic.
              </p>
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-8 bg-black text-white px-8 py-3 rounded-full font-normal hover:bg-gray-900 transition-colors shadow-lg"
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
              {/* Circle Background - Changed to complement red */}
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-black/10 overflow-hidden shadow-2xl border-4 border-white/10">
                {/* Profile Image - Replace with actual image */}
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
                  alt="Parvir - Founder of EditFlow"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              {/* Decorative elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-2xl"
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
