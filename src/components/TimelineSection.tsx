import React from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

// Sketch-style 2D vector icons (hand-drawn look)
const SketchLightbulb = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 18h6" />
    <path d="M10 22h4" opacity="0.9" />
    <path d="M12 2a6 6 0 00-4 10c0 2 1 3 1 3h6s1-1 1-3a6 6 0 00-4-10z" />
    <path d="M9 9l-1-1" opacity="0.6" />
    <path d="M15 9l1-1" opacity="0.6" />
  </svg>
);

const SketchPen = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 21l3-1 11-11 1-3-3 1L3 21z" />
    <path d="M14 6l4 4" opacity="0.9" />
  </svg>
);

const SketchVideo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2.5" y="5" width="15" height="13" rx="2" />
    <path d="M20 8l3-2v12l-3-2" />
    <path d="M9 10l4 2-4 2V10z" />
  </svg>
);

const SketchImage = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <path d="M21 15l-5-5-7 7" />
  </svg>
);

const SketchSend = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 2L11 13" />
    <path d="M22 2l-7 20 2-9 9-9z" />
    <path d="M11 13l-9 2 9-2z" opacity="0.6" />
  </svg>
);

const ProcessTimeline = () => {
  const processData = [
    {
      id: 1,
      step: "01",
      title: "Idea Analysis",
      description: "We take your ideas and analyze them thoroughly based on our experience and existing market standards.",
      icon: SketchLightbulb,
      color: "from-amber-400 to-orange-500"
    },
    {
      id: 2,
      step: "02", 
      title: "Writing Content",
      description: "We will give you proven script frameworks that the biggest creators and companies use.",
      icon: SketchPen,
      color: "from-blue-400 to-indigo-500"
    },
    {
      id: 3,
      step: "03",
      title: "Editing the Video", 
      description: "We make the best quality videos using advanced motion graphics that bring your message to life.",
      icon: SketchVideo,
      color: "from-purple-400 to-pink-500"
    },
    {
      id: 4,
      step: "04",
      title: "Creating Thumbnail",
      description: "We analyze other thumbnails in your niche and are able to replicate best performing results.",
      icon: SketchImage,
      color: "from-green-400 to-emerald-500"
    },
    {
      id: 5,
      step: "05",
      title: "Post the Video",
      description: "All that's left now is to post the video and start counting the leads that come in.",
      icon: SketchSend,
      color: "from-red-400 to-rose-500"
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-[#faf9f6]">
      {/* Paper texture background */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='paper' patternUnits='userSpaceOnUse' width='100' height='100'%3E%3Crect fill='%23f8f6f0' width='100' height='100'/%3E%3Cpath d='M0 0L50 50L100 0' stroke='%23e8e4d9' stroke-width='0.5' fill='none'/%3E%3Cpath d='M0 100L50 50L100 100' stroke='%23e8e4d9' stroke-width='0.5' fill='none'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23paper)'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-32 h-32 bg-amber-100/50 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ rotate: [0, -10, 5, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-0 w-40 h-40 bg-blue-100/50 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-100/50 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-200 to-orange-200 rounded-lg blur opacity-30"></div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 relative ink-text">
              Our <span className="text-coral-accent relative inline-block">
                Process
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-amber-300 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.5" />
                </svg>
              </span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-charcoal/70 max-w-2xl mx-auto font-medium"
          >
            From concept to viral sensation in 5 simple steps
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Line (Desktop) - Hidden on Mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div 
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-b from-amber-400 via-coral-accent to-purple-500"
            />
          </div>

          {/* Mobile Line */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div 
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-b from-amber-400 via-coral-accent to-purple-500"
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-24">
            {processData.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={item.id} className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                  
                  {/* Timeline Dot (Desktop Center / Mobile Left) */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, type: "spring" }}
                      className="relative"
                    >
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} p-1 shadow-lg shadow-black/5`}>
                        <div className="w-full h-full bg-white rounded-full flex items-center justify-center border-4 border-transparent">
                          <Icon className="w-6 h-6 text-charcoal" />
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-charcoal text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">
                        {item.step}
                      </div>
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className={`pl-20 md:pl-0 ${isEven ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-none shadow-md bg-white/80 backdrop-blur-sm">
                        <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${item.color}`} />
                        <div className="p-8">
                          <h3 className="text-2xl font-bold text-charcoal mb-3 group-hover:text-coral-accent transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-charcoal/70 leading-relaxed text-lg">
                            {item.description}
                          </p>
                        </div>
                        {/* Decorative background blob */}
                        <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${item.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity`} />
                      </Card>
                    </motion.div>
                  </div>

                  {/* Empty div for grid balance on desktop */}
                  <div className="hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="bg-charcoal text-white px-8 py-4 rounded-full shadow-xl hover:scale-105 transition-transform cursor-pointer flex items-center gap-3">
              <span className="font-bold text-lg">Start Your Project</span>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .ink-text {
          font-family: 'Inter', sans-serif;
          letter-spacing: -0.02em;
        }
      `}</style>
    </section>
  );
};

export default ProcessTimeline;