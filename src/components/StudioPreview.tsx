import { motion } from "framer-motion";

const StudioPreview = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#e63946]/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-900/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Office Images (2 images) */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group"
            >
              <img 
                src="/founder/1.png" 
                alt="Studio Setup" 
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-6">
                <span className="text-xs font-bold tracking-widest text-[#e63946] uppercase">Main Workspace</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group"
            >
              <img 
                src="/founder/2.png" 
                alt="Editing Suite" 
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-6">
                <span className="text-xs font-bold tracking-widest text-[#e63946] uppercase">Creative Corner</span>
              </div>
            </motion.div>
          </div>

          {/* Middle: Content Information */}
          <div className="lg:col-span-4 flex flex-col justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-[#e63946] font-bold tracking-widest uppercase text-sm mb-4">Quality Over Gigs</h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Stop Hiring <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e63946] to-red-400">Freelancers!!!</span></h2>
              
              <div className="space-y-6 text-left max-w-sm mx-auto">
                <p className="text-gray-200 text-lg leading-relaxed font-medium">
                  We work with a dedicated <span className="text-white border-b-2 border-[#e63946]">in-house team</span> that operates full-time, not scattered freelancers.
                </p>
                <p className="text-gray-400 text-base leading-relaxed">
                  Every project follows a structured workflow with internal quality checks, ensuring consistency, reliability, and high standards. 
                </p>
                <p className="text-gray-400 text-base leading-relaxed">
                  We take your work seriously, meet deadlines, and treat your content as a long-term partnership, not a quick gig — which has helped us maintain a <span className="text-white font-bold">4.9/5-star rating</span> across major platforms like Fiverr and Upwork.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Founder Image */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(230,57,70,0.1)] group"
            >
              <img 
                src="/founder/founder.png" 
                alt="Ahmed Yousuf" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black via-black/40 to-transparent">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-white">Ahmed Yousuf</p>
                    <p className="text-[#e63946] font-medium text-sm">Founder & CEO</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                     <span className="text-xl">✍️</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StudioPreview;
