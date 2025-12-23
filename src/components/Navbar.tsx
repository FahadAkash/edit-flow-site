import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#hero" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Shorts", href: "#shorts" },
    { name: "Founder", href: "#founder" },
    { name: "Process", href: "#process" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = elem.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled 
          ? "py-3 bg-black/40 backdrop-blur-xl border-b border-white/5" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative">
            <div className="absolute -inset-1 bg-[#FFB300] rounded-full blur opacity-0 group-hover:opacity-20 transition duration-500" />
            <img 
              src="/logo/logo.png" 
              alt="Metro Media House" 
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col border-l border-white/10 pl-3">
            <span className="text-lg font-bold tracking-tight text-white leading-none">
              METRO<span className="text-[#FFB300]">MEDIA</span>
            </span>
            <span className="text-[10px] text-white/40 uppercase tracking-[0.2em] mt-1 font-medium">
              Editing House
            </span>
          </div>
        </div>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md rounded-full px-2 py-1 border border-white/10">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="px-5 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
            >
              {item.name}
              <span className="absolute bottom-1 left-5 right-5 h-[1px] bg-[#FFB300] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 transform-origin-offset" />
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <motion.a
            href="https://forms.gle/925ARc2RbCocoS5A7"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:flex items-center gap-2 bg-[#FFB300] hover:bg-[#ffae00] text-black px-6 py-2.5 rounded-full font-bold text-sm shadow-[0_0_20px_rgba(255,179,0,0.2)] transition-all"
          >
            Hire 
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0A0A]/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-lg font-medium text-white/80 hover:text-[#FFB300] transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://forms.gle/925ARc2RbCocoS5A7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#FFB300] text-black py-4 rounded-xl font-bold text-center mt-2 shadow-lg shadow-[#FFB300]/20"
              >
                Hire Me Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
