import { motion } from "framer-motion";

const BrandLogos = () => {
  const brands = [
    { name: "Brand 1", logo: "/brands/01HZPHHYKN7PRCHF92X9KV8BPG.png", needsInvert: true },
    { name: "Brand 2", logo: "/brands/1667599512761.png" },
    { name: "Brand 3", logo: "/brands/coursera.png", needsInvert: true },
  ];

  const otherbrands = [
    { name: "Apple", logo: "/brands/microsoft.png" },
    { name: "Danger Coffee", logo: "/brands/DC_Logo_1640x624-d44ea81f-a7d0-4746-b50e-399afa2a81c9.png" },
    { name: "Blackberry", logo: "/brands/Logo_Blackberry_Large_a979164e-916a-4c09-bbac-51df3d96f65a_1200x1200.png" },
    { name: "Predator", logo: "/brands/acer-predator-logo-png_seeklogo-441422.png" },
    { name: "Fiverr", logo: "/brands/fiverrr.png" },
  ];

  // Universal white logo styling with special size for Coursera
  const getLogoClass = (brand: any) => {
    // Check if it's the Coursera logo for special scaling
    const isCourseraLogo = brand.logo.includes('coursera');
    const sizeClass = isCourseraLogo ? 'h-16 md:h-24' : 'h-10 md:h-14';
    
    // Universal filter: brightness-0 turns everything black, invert makes it white
    return `${sizeClass} w-auto object-contain brightness-0 invert opacity-95 transition-all duration-300 hover:scale-110 hover:opacity-100 hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] cursor-pointer transform-gpu`;
  };

  const MarqueeRow = ({ items, reverse = false, speed = 40 }: { items: typeof brands, reverse?: boolean, speed?: number }) => {
    const duplicatedItems = [...items, ...items, ...items, ...items];
    return (
      <div className="relative w-full overflow-hidden py-4">
        {/* Gradient fades using the Background Color (#050505) */}
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none" />
        
        <motion.div
          className="flex whitespace-nowrap items-center gap-12"
          initial={{ x: reverse ? "-50%" : "0%" }}
          animate={{ x: reverse ? "0%" : "-50%" }}
          transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
          style={{ width: "max-content" }}
        >
          {duplicatedItems.map((brand, idx) => (
            <div key={`${brand.name}-${idx}`} className="flex-shrink-0 flex items-center justify-center min-w-[100px]">
              <img
                src={brand.logo}
                alt={brand.name}
                className={getLogoClass(brand)}
              />
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <section className="w-full bg-[#050505] py-16 md:py-24 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-[#FFB300]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <p className="text-white/40 text-xs font-black uppercase tracking-[0.4em] mb-4">Trusted by Market Leaders</p>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#FFB300] to-transparent mx-auto" />
        </div>

        {/* Desktop View (Static, Centered) */}
        <div className="hidden md:flex flex-col gap-12">
          <div className="flex items-center justify-center gap-24 lg:gap-32">
            {otherbrands.map((brand, idx) => (
              <motion.div 
                key={`row1-${idx}`} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex-shrink-0 flex items-center justify-center group"
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className={getLogoClass(brand)}
                />
              </motion.div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-24 lg:gap-32">
            {[...brands].reverse().map((brand, idx) => (
              <motion.div 
                key={`row2-${idx}`} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                className="flex-shrink-0 flex items-center justify-center group"
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className={getLogoClass(brand)}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile View (Infinite Marquee Scrolling) */}
        <div className="flex md:hidden flex-col gap-8">
          <MarqueeRow items={otherbrands} speed={25} />
          <MarqueeRow items={brands} reverse speed={20} />
        </div>
      </div>
    </section>
  );
};


export default BrandLogos;




