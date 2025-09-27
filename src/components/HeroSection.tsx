import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import { useState, useEffect } from "react";
import heroVideoPoster from "@/assets/hero-video-poster.jpg";

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // trigger entrance animations after mount
    const t = setTimeout(() => setMounted(true), 40);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Enhanced CSS animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 179, 0, 0.3); }
          50% { box-shadow: 0 0 30px rgba(255, 179, 0, 0.6), 0 0 50px rgba(255, 179, 0, 0.2); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(1deg); }
          75% { transform: rotate(-1deg); }
        }
        
        @keyframes bounce-soft {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .shimmer-text {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 3s ease-in-out infinite;
        }
        
        .breathe-animation {
          animation: breathe 4s ease-in-out infinite;
        }
        
        .wiggle-animation {
          animation: wiggle 2s ease-in-out infinite;
        }
        
        .bounce-soft {
          animation: bounce-soft 2s ease-in-out infinite;
        }
        
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
        
        .brand-logo-hover {
          transition: all 0.3s ease;
        }
        
        .brand-logo-hover:hover {
          transform: scale(1.1) rotate(5deg);
          filter: brightness(1.2);
        }
        
        .entrepreneur-avatar {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .entrepreneur-avatar:hover {
          transform: scale(1.15);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
          z-index: 10;
        }
        
        .video-container {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .video-container:hover {
          transform: scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .play-button {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .play-button::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.6s ease;
        }
        
        .play-button:hover::before {
          width: 100%;
          height: 100%;
        }
        
        .editing-overlay-left,
        .editing-overlay-right {
          transition: all 0.3s ease;
        }
        
        .editing-overlay-left:hover,
        .editing-overlay-right:hover {
          transform: scale(1.1);
          opacity: 0.9;
        }
        
        .brand-strip {
          background: linear-gradient(90deg, #ef4444, #dc2626, #b91c1c);
          background-size: 200% 200%;
          animation: gradient-shift 6s ease infinite;
        }
        
        .logo-entrance {
          animation: float 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        
        .text-glow {
          text-shadow: 0 0 10px rgba(255, 179, 0, 0.3);
        }
        
        .sticky-note-enhanced {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }
        
        .sticky-note-enhanced::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, transparent, rgba(255, 179, 0, 0.1), transparent);
          border-radius: inherit;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .sticky-note-enhanced:hover::before {
          opacity: 1;
        }
      `}</style>

      <section className="min-h-screen flex items-center justify-center px-4 py-8 relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-tape-yellow/20 rounded-full float-animation"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-coral-accent/20 rounded-full float-animation" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-20 w-2 h-2 bg-tape-yellow/20 rounded-full float-animation" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-10 w-3 h-3 bg-coral-accent/20 rounded-full float-animation" style={{animationDelay: '0.5s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div>
            {/* Logo with enhanced animation */}
            <div className={`mb-6 flex justify-center transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="logo-entrance hover-lift">
                <img 
                  src="/public/logo/logo.png" 
                  alt="Company Logo" 
                  className="h-16 md:h-20 w-auto object-contain"
                />
              </div>
            </div>
            
            {/* Enhanced animated editing overlays */}
            <div className="editing-overlay-left pointer-events-none hover:scale-110 transition-transform duration-300">
              <svg viewBox="0 0 120 64" width="120" height="64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="8" width="36" height="24" rx="4" fill="#fff" opacity="0.95" />
                <rect x="44" y="8" width="36" height="24" rx="4" fill="#fff" opacity="0.9" />
                <rect x="84" y="8" width="36" height="24" rx="4" fill="#fff" opacity="0.85" />
                <rect x="6" y="36" width="100" height="8" rx="3" fill="#FFB300">
                  <animate attributeName="width" values="6;100;6" dur="3s" repeatCount="indefinite" />
                </rect>
                <circle cx="6" cy="40" r="3" fill="#FF6F61">
                  <animate attributeName="cx" from="6" to="100" dur="3s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>

            <div className="editing-overlay-right pointer-events-none hover:scale-110 transition-transform duration-300">
              <svg viewBox="0 0 120 64" width="120" height="64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="-12" y="8" width="36" height="24" rx="4" fill="#fff" opacity="0.95" />
                <rect x="28" y="8" width="36" height="24" rx="4" fill="#fff" opacity="0.9" />
                <rect x="68" y="8" width="36" height="24" rx="4" fill="#fff" opacity="0.85" />
                <rect x="6" y="36" width="100" height="8" rx="3" fill="#FFB300">
                  <animate attributeName="width" values="100;6;100" dur="3.2s" repeatCount="indefinite" />
                </rect>
                <circle cx="100" cy="40" r="3" fill="#FFB300">
                  <animate attributeName="cx" from="100" to="6" dur="3.2s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>

            {/* Enhanced headline with shimmer effect */}
            <h1 className={`text-3xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-1 leading-tight relative transform transition-all duration-800 ease-out -mt-6 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}>
              <span className={`pen-draw block transition-all duration-700 ease-out hover:text-glow ${mounted ? 'opacity-100 translate-y-0 delay-50' : 'opacity-0 translate-y-2'}`}> Launch a done-for-you</span>
              <span className={`text-coral-accent pen-draw block transition-all duration-800 ease-out hover:scale-105 transform origin-center ${mounted ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-2'}`}>Video Sales engine</span>
              <span className={`text-tape-yellow pen-draw block transition-all duration-900 ease-out hover:text-glow transform hover:scale-105 ${mounted ? 'opacity-100 translate-y-0 delay-150' : 'opacity-0 translate-y-2'}`}>this month.</span>
              {/* Enhanced animated hand-drawn underline */}
              <svg className="absolute left-0 -bottom-2 w-full h-6 pointer-events-none" viewBox="0 0 400 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 20 Q 200 2 390 20" stroke="#FFB300" strokeWidth="4" strokeLinecap="round" className="drop-shadow-sm">
                  <animate attributeName="stroke-dasharray" from="0,400" to="400,0" dur="1.2s" fill="freeze" />
                </path>
              </svg>
            </h1>

            {/* Enhanced entrepreneur avatars */}
            <div className={`mt-4 flex justify-center transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0 delay-350' : 'opacity-0 translate-y-4'}`}>
              <div className="relative breathe-animation">
                <div className="flex items-center -space-x-3">
                  <img src="/entrepreneurs/7HdwNsOD_400x400.png" alt="brand" className="entrepreneur-avatar w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-sm relative z-10" />
                  <img src="/entrepreneurs/1644180906552.png" alt="brand" className="entrepreneur-avatar w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-sm relative z-10" />
                  <img src="/entrepreneurs/FR8QOqkdsCPqaLh59ht9JqMHlgjxEU3A5ATylOLLOSrsxem1zQY5HTUJ1R3nW6Os0J9Uos1wWAs900-c-k-c0x00ffffff-no-rj.png" alt="brand" className="entrepreneur-avatar w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-sm relative z-10" />
                  <img src="/entrepreneurs/VYCKwtkM9XtsZ2yy5JfT3PUzSXZYB1yuvOuYrDEj2HdL6RU47T4JAmC-9HL2rsoH_BUog1KaGgs900-c-k-c0x00ffffff-no-rj.png" alt="brand" className="entrepreneur-avatar w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-sm relative z-10" />
                  <div className="relative">
                    <img src="/entrepreneurs/zS8KNLhN29kcM_wg0sriI0Jg4yMZS-GcIPSu8icVFIG82IC4dpwFaFn0dfVfWH4NB8Hlmli1Hgs900-c-k-c0x00ffffff-no-rj.png" alt="brand" className="entrepreneur-avatar w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-sm relative z-10" />
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-charcoal text-white text-xs font-bold flex items-center justify-center ring-2 ring-white shadow bounce-soft">9+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Video Player */}
          <div className="relative mt-4 mb-4 group flex-shrink-0">
            <div className={`sticky-note sticky-note-enhanced p-4 max-w-3xl mx-auto transform transition-all duration-900 ease-out ${mounted ? 'opacity-100 scale-100 translate-y-0 delay-400' : 'opacity-0 scale-95 translate-y-6'}`}>
              <div className="relative aspect-video bg-muted rounded-lg overflow-hidden shadow-md video-container">
                <img
                  src={heroVideoPoster}
                  alt="Video editing workspace showcase"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/20 flex items-center justify-center transition-all duration-300">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="play-button w-20 h-20 bg-tape-yellow/90 hover:bg-tape-yellow rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group-hover:scale-105 shadow-lg pulse-glow relative z-10"
                    aria-pressed={isPlaying}
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-charcoal transition-transform duration-200" />
                    ) : (
                      <Play className="w-8 h-8 text-charcoal ml-1 transition-transform duration-200" />
                    )}
                  </button>
                </div>
                {/* Enhanced animated hand-drawn market arrow */}
                <svg className="absolute left-4 bottom-4 w-32 h-16 pointer-events-none animate-market-arrow hover:scale-110 transition-transform duration-300" viewBox="0 0 128 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 28 Q 32 4 64 24 Q 96 44 124 8" stroke="#FF6F61" strokeWidth="4" strokeLinecap="round" fill="none" className="drop-shadow-sm">
                    <animate attributeName="stroke-dasharray" from="0,200" to="200,0" dur="1.5s" fill="freeze" />
                  </path>
                  <circle cx="124" cy="8" r="4" fill="#FFB300" className="drop-shadow-sm">
                    <animate attributeName="r" from="0" to="4" dur="0.7s" fill="freeze" />
                  </circle>
                </svg>
              </div>
            </div>
          </div>

          {/* Enhanced brand logos with gradient background */}
          <div className="mt-16">
            <div className={`relative left-1/2 right-1/2 w-screen -translate-x-1/2 transform transition-all duration-900 ease-out ${mounted ? 'opacity-100 translate-y-0 delay-500' : 'opacity-0 translate-y-6'}`}>
              <div className="brand-strip border-t-2 border-b-2 border-red-600 py-4 shadow-lg">
                <div className="max-w-6xl mx-auto px-4">
                  <div className="flex items-center justify-center gap-10 flex-wrap">
                    <img src="/brands/01HZPHHYKN7PRCHF92X9KV8BPG.png" alt="brand" className="brand-logo-hover max-h-12 object-contain filter brightness-0 invert" />
                    <img src="/brands/1667599512761.png" alt="brand" className="brand-logo-hover max-h-12 object-contain filter brightness-0 invert" />
                    <img src="/brands/acer-predator-logo-png_seeklogo-441422.png" alt="brand" className="brand-logo-hover max-h-12 object-contain filter brightness-0 invert" />
                    <img src="/brands/DC_Logo_1640x624-d44ea81f-a7d0-4746-b50e-399afa2a81c9.png" alt="brand" className="brand-logo-hover max-h-12 object-contain filter brightness-0 invert" />
                    <img src="/brands/Logo_Blackberry_Large_a979164e-916a-4c09-bbac-51df3d96f65a_1200x1200.png" alt="brand" className="brand-logo-hover max-h-12 object-contain filter brightness-0 invert" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;