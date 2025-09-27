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
    <section className="min-h-screen flex items-center justify-center px-4 py-8 relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div>
          {/* Animated editing overlays (left + right) */}
          <div className="editing-overlay-left pointer-events-none">
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

          <div className="editing-overlay-right pointer-events-none">
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

          {/* Pen drawing animation headline */}
          <h1 className={`text-5xl md:text-7xl font-bold text-charcoal mb-1 leading-[0.9] relative transform transition-all duration-800 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}>
            <span className={`pen-draw block transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0 delay-50' : 'opacity-0 translate-y-2'}`}> Launch a done-for-you</span>
            <span className={`text-coral-accent pen-draw block transition-all duration-800 ease-out ${mounted ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-2'}`}>Video Sales engine</span>
            <span className={`text-tape-yellow pen-draw block transition-all duration-900 ease-out ${mounted ? 'opacity-100 translate-y-0 delay-150' : 'opacity-0 translate-y-2'}`}>this month.</span>
            {/* Animated hand-drawn underline */}
            <svg className="absolute left-0 -bottom-2 w-full h-6 pointer-events-none" viewBox="0 0 400 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 20 Q 200 2 390 20" stroke="#FFB300" strokeWidth="4" strokeLinecap="round">
                <animate attributeName="stroke-dasharray" from="0,400" to="400,0" dur="1.2s" fill="freeze" />
              </path>
            </svg>
          </h1>

          {/* Brand logos (entrepreneurs) - placed right after the header */}
          <div className={`mt-4 flex justify-center transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0 delay-350' : 'opacity-0 translate-y-4'}`}>
            <div className="relative">
              <div className="flex items-center -space-x-3">
                <img src="/entrepreneurs/7HdwNsOD_400x400.png" alt="brand" className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-sm" />
                <img src="/entrepreneurs/1644180906552.png" alt="brand" className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-sm" />
                <img src="/entrepreneurs/FR8QOqkdsCPqaLh59ht9JqMHlgjxEU3A5ATylOLLOSrsxem1zQY5HTUJ1R3nW6Os0J9Uos1wWAs900-c-k-c0x00ffffff-no-rj.png" alt="brand" className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-sm" />
                <img src="/entrepreneurs/VYCKwtkM9XtsZ2yy5JfT3PUzSXZYB1yuvOuYrDEj2HdL6RU47T4JAmC-9HL2rsoH_BUog1KaGgs900-c-k-c0x00ffffff-no-rj.png" alt="brand" className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-sm" />
                <div className="relative">
                  <img src="/entrepreneurs/zS8KNLhN29kcM_wg0sriI0Jg4yMZS-GcIPSu8icVFIG82IC4dpwFaFn0dfVfWH4NB8Hlmli1Hgs900-c-k-c0x00ffffff-no-rj.png" alt="brand" className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-sm" />
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-charcoal text-white text-xs font-bold flex items-center justify-center ring-2 ring-white shadow">9+</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Player */}
        <div className="relative mt-6 mb-4 group">
          <div className={`sticky-note p-4 max-w-3xl mx-auto transform transition-all duration-900 ease-out ${mounted ? 'opacity-100 scale-100 translate-y-0 delay-400' : 'opacity-0 scale-95 translate-y-6'}`}>
            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden shadow-md">
              <img
                src={heroVideoPoster}
                alt="Video editing workspace showcase"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-charcoal/20 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-20 h-20 bg-tape-yellow/90 hover:bg-tape-yellow rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group-hover:scale-105 shadow-lg"
                  aria-pressed={isPlaying}
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-charcoal" />
                  ) : (
                    <Play className="w-8 h-8 text-charcoal ml-1" />
                  )}
                </button>
              </div>
              {/* Animated hand-drawn market arrow */}
              <svg className="absolute left-4 bottom-4 w-32 h-16 pointer-events-none animate-market-arrow" viewBox="0 0 128 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 28 Q 32 4 64 24 Q 96 44 124 8" stroke="#FF6F61" strokeWidth="4" strokeLinecap="round" fill="none">
                  <animate attributeName="stroke-dasharray" from="0,200" to="200,0" dur="1.5s" fill="freeze" />
                </path>
                <circle cx="124" cy="8" r="4" fill="#FFB300">
                  <animate attributeName="r" from="0" to="4" dur="0.7s" fill="freeze" />
                </circle>
              </svg>
            </div>
          </div>
        </div>

        {/* CTA (disabled) */}
        {/* <div className="arrow-doodle opacity-60 pointer-events-none">
          <Button variant="default" size="lg" className="text-lg px-8 py-4 opacity-70" disabled>
            Work with us
          </Button>
        </div> */}

        {/* Brand logos row (entrepreneurs) - full-bleed red bar */}
        <div className="mt-10">
          <div className={`relative left-1/2 right-1/2 w-screen -translate-x-1/2 transform transition-all duration-900 ease-out ${mounted ? 'opacity-100 translate-y-0 delay-500' : 'opacity-0 translate-y-6'}`}>
            <div className="bg-red-500 border-t-2 border-b-2 border-red-600 py-4">
              <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-center gap-16 flex-wrap">
                  <img src="/brands/01HZPHHYKN7PRCHF92X9KV8BPG.png" alt="brand" className="max-h-12 object-contain" />
                  <img src="/brands/1667599512761.png" alt="brand" className="max-h-12 object-contain" />
                  <img src="/brands/acer-predator-logo-png_seeklogo-441422.png" alt="brand" className="max-h-12 object-contain" />
                  <img src="/brands/DC_Logo_1640x624-d44ea81f-a7d0-4746-b50e-399afa2a81c9.png" alt="brand" className="max-h-12 object-contain" />
                  <img src="/brands/Logo_Blackberry_Large_a979164e-916a-4c09-bbac-51df3d96f65a_1200x1200.png" alt="brand" className="max-h-12 object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;