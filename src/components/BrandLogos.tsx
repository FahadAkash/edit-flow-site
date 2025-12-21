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
        {/* Gradient fades using the Brand Red (#E63946) */}
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#E63946] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[#E63946] to-transparent pointer-events-none" />
        
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
    <section className="w-full bg-[#E63946] py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Desktop View (Static, Centered) */}
        <div className="hidden md:flex flex-col gap-12">
          <div className="flex items-center justify-center gap-24">
            {otherbrands.map((brand, idx) => (
              <div key={`row1-${idx}`} className="flex-shrink-0 flex items-center justify-center">
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className={getLogoClass(brand)}
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-24">
            {[...brands].reverse().map((brand, idx) => (
              <div key={`row2-${idx}`} className="flex-shrink-0 flex items-center justify-center">
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className={getLogoClass(brand)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View (Infinite Marquee Scrolling) */}
        <div className="flex md:hidden flex-col gap-6">
          <MarqueeRow items={otherbrands} speed={25} />
          <MarqueeRow items={brands} reverse speed={20} />
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;




