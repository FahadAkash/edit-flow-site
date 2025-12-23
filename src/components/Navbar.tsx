import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, ArrowRight, Zap, PlayCircle } from "lucide-react";

/**
 * Premium, Ultra-Modern Navbar Component
 * Featuring dynamic glassmorphism, floating pill architecture, and refined micro-interactions.
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  
  const { scrollY } = useScroll();
  const navHeight = useTransform(scrollY, [0, 50], ["80px", "64px"]);
  const navPadding = useTransform(scrollY, [0, 50], ["24px", "12px"]);
  const navOpacity = useTransform(scrollY, [0, 50], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/#hero" },
    { name: "Testimonials", href: "/#portfolio" },
    { name: "Portfolio", href: "/#case-studies" },
    { name: "Shorts", href: "/#shorts" },
    { name: "About us", href: "/#founder" },
    { name: "Process", href: "/#process" },
    { name: "Careers", href: "/careers" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof menuItems[0]) => {
    // If it's a direct page link like /careers, allow default navigation
    if (!item.href.includes("#")) {
      return; 
    }

    const isHomePage = window.location.pathname === "/";
    
    // If we're on the home page and clicking a hash link, smooth scroll
    if (isHomePage) {
      e.preventDefault();
      const targetId = item.href.replace(/^.*#/, "");
      const elem = document.getElementById(targetId);
      
      if (elem) {
        const offset = 100;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = elem.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    // If not on home page, let the <a> tag handle navigation to /#section
    
    setMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
      <motion.nav
        style={{ height: navHeight, opacity: navOpacity }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full max-w-[1200px] pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
          isScrolled 
            ? "bg-black/40 backdrop-blur-2xl px-4 rounded-full border border-white/10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)] scale-[0.98]" 
            : "bg-transparent px-6 rounded-none border-transparent scale-100"
        }`}
      >
        <div className="h-full flex items-center justify-between relative">
          
          {/* LEFT: Branding Section */}
          <div className="flex items-center gap-6">
            {/* Dual Logo Setup (Matching Screenshot) */}
            <div 
              className="flex items-center gap-4 group cursor-pointer" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {/* Logo 1: MetroMedia Logo Only */}
              <div className="flex items-center">
                <div className="relative">
                  <div className="absolute -inset-2 bg-[#FFB300]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-700" />
                  {/* <img 
                    src="/logo/logo.png" 
                    alt="Metro Media" 
                    className="h-8 md:h-10 w-auto object-contain relative z-10 transition-transform duration-500 group-hover:scale-105"
                  /> */}
                </div>
              </div>

            </div>
          </div>

          {/* CENTER: Desktop Navigation Pill */}
          <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-full p-1 shadow-inner relative z-10">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`relative px-5 py-2 text-[13px] font-bold tracking-wide transition-all duration-500 rounded-full group ${
                  activeItem === item.name 
                    ? "text-white" 
                    : "text-white/40 hover:text-white"
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {activeItem === item.name && (
                  <motion.div
                    layoutId="navbarActiveIndicator"
                    className="absolute inset-0 bg-white/10 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.2)] border border-white/10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
                {/* Micro-Interaction: Dot on hover */}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#FFB300] rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
              </a>
            ))}
          </div>

          {/* RIGHT: Action & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://forms.gle/925ARc2RbCocoS5A7"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative group hidden sm:flex overflow-hidden rounded-full"
            >
              {/* Premium Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#FFB300] to-[#FFA500] rounded-full blur-xl opacity-0 group-hover:opacity-50 transition duration-700" />
              
              <div className="relative bg-[#FFB300] text-black px-8 py-3 rounded-full font-black text-[11px] uppercase tracking-[0.1em] flex items-center gap-2 shadow-xl shadow-[#FFB300]/20 border border-white/30 overflow-hidden">
                <span className="relative z-10">HIRE US</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[3px] relative z-10" />
                
                {/* High-End Shimmer Effect */}
                <motion.div 
                  animate={{ 
                    left: ["-100%", "200%"] 
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3, 
                    ease: "easeInOut",
                    repeatDelay: 1
                  }}
                  className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-[25deg] z-0"
                />
              </div>
            </motion.a>

            {/* Mobile Menu Toggle Button */}
            <button 
              className="lg:hidden w-[44px] h-[44px] flex items-center justify-center text-white bg-white/5 rounded-full border border-white/10 transition-all hover:bg-white/10 active:scale-90"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileMenuOpen ? "close" : "open"}
                  initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>

        </div>
      </motion.nav>

      {/* Mobile Menu Overlay - Full Screen Glassmorphism */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="lg:hidden fixed inset-0 bg-black/80 z-[-1] pointer-events-auto"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.1 }}
              className="absolute top-24 left-6 right-6 bg-zinc-900 border border-white/10 rounded-[40px] p-10 flex flex-col gap-8 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-6">
                {menuItems.map((item, idx) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.05 }}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`text-3xl font-black transition-all duration-300 ${
                      activeItem === item.name 
                        ? "text-[#FFB300] translate-x-3" 
                        : "text-white/40 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
              
              <div className="h-[1px] bg-white/5 w-full my-2" />
              
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                href="https://forms.gle/925ARc2RbCocoS5A7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#FFB300] text-black py-6 rounded-3xl font-black text-center text-xl shadow-[0_20px_40px_-10px_rgba(255,179,0,0.4)] flex items-center justify-center gap-3 active:scale-95"
              >
                Let's Build Something <ArrowRight size={24} strokeWidth={4} />
              </motion.a>

              <div className="flex justify-center items-center gap-3 text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">
                <PlayCircle size={14} className="text-[#FFB300]" />
                Revolutionizing Content
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
