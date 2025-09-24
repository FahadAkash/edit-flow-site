import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import { useState } from "react";
import heroVideoPoster from "@/assets/hero-video-poster.jpg";


const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10 h-full flex flex-col justify-center">
        {/* ...existing code... */}

        <div className="sticky-note p-1 mb-8  mx-auto relative">
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
          <h1 className="text-5xl md:text-7xl font-bold text-charcoal mb-6 leading-tight relative">
            <span className="pen-draw block"> Launch a done-for-you</span>
            <span className="text-coral-accent pen-draw block">Video Sales engine</span>
           
            <span className="text-tape-yellow pen-draw block">this month.</span>
            {/* Animated hand-drawn underline */}
            <svg className="absolute left-0 -bottom-2 w-full h-6 pointer-events-none" viewBox="0 0 400 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 20 Q 200 2 390 20" stroke="#FFB300" strokeWidth="4" strokeLinecap="round">
                <animate attributeName="stroke-dasharray" from="0,400" to="400,0" dur="1.2s" fill="freeze" />
              </path>
            </svg>
          </h1>
        </div>

        {/* Trusted By Section */}
        <div className="mb-8">
          <div className="flex justify-center -space-x-4 mb-3">
            {[
              '1644180906552.png',
              '7HdwNsOD_400x400.png',
              'FR8QOqkdsCPqaLh59ht9JqMHlgjxEU3A5ATylOLLOSrsxem1zQY5HTUJ1R3nW6Os0J9Uos1wWAs900-c-k-c0x00ffffff-no-rj.png',
              'VYCKwtkM9XtsZ2yy5JfT3PUzSXZYB1yuvOuYrDEj2HdL6RU47T4JAmC-9HL2rsoH_BUog1KaGgs900-c-k-c0x00ffffff-no-rj.png',
              'zS8KNLhN29kcM_wg0sriI0Jg4yMZS-GcIPSu8icVFIG82IC4dpwFaFn0dfVfWH4NB8Hlmli1Hgs900-c-k-c0x00ffffff-no-rj.png'
            ].map((image, index) => (
              <div
                key={index}
                className="relative w-14 h-14 rounded-full border-2 border-white overflow-hidden transition-transform hover:scale-110 hover:z-10 shadow-lg"
                style={{
                  transform: `translateX(${index * 2}px)`,
                  zIndex: 5 - index,
                }}
              >
                <img
                  src={`/entrepreneurs/${image}`}
                  alt={`Trusted Entrepreneur ${index + 1}`}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            ))}
            {/* Plus 9 More Circle */}
            <div
              className="relative w-14 h-14 rounded-full border-2 border-white overflow-hidden transition-transform hover:scale-110 hover:z-10 shadow-lg bg-tape-yellow/90 flex items-center justify-center group"
              style={{
                transform: `translateX(10px)`,
                zIndex: 0,
              }}
            >
              <span className="text-charcoal font-bold text-sm group-hover:scale-110 transition-transform">
                +9
              </span>
            </div>
          </div>
          <p className="text-lg text-charcoal/80 font-medium mt-6">
            Trusted by <span className="text-tape-yellow font-bold">100+</span> Entrepreneurs Building Real Influence
          </p>
        </div>

        {/* Video Player */}
        <div className="relative mb-8 group">
          <div className="sticky-note p-4 max-w-2xl mx-auto">
            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
              <img 
                src={heroVideoPoster}
                alt="Video editing workspace showcase"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-charcoal/20 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-20 h-20 bg-tape-yellow/90 hover:bg-tape-yellow rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group-hover:scale-105"
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

        {/* Marquee with agency highlights (moved here) */}
        <div className="overflow-hidden mb-4">
          <div className="marquee whitespace-nowrap text-coral-accent text-lg font-bold tracking-wider" style={{fontFamily: 'Comic Sans MS, Marker Felt, cursive'}}>
            Award-winning editors &bull; 100+ happy brands &bull; Viral content experts &bull; Fast turnaround &bull; Social-first storytelling &bull; Creative direction &bull; YouTube, TikTok, Reels, Shorts &bull; Big agency energy &bull; <span className="text-tape-yellow">Hand-drawn magic</span> &bull; <span className="text-charcoal">Let’s create together!</span>
          </div>
        </div>

        {/* CTA */}
        <div className="arrow-doodle">
          <Button variant="default" size="lg" className="text-lg px-8 py-4">
            Work with us
          </Button>
        </div>

  {/* Floating Software Logos & More (start lower so they don't overlap the header/video) */}
  <div className="absolute inset-x-0 top-[65%] h-[35%] overflow-visible pointer-events-none z-0">
          {/* Adobe Premiere Pro */}
          <div className="absolute bottom-32 left-16 animate-float-1 opacity-60">
            <div className="sticky-note p-3 bg-gradient-to-br from-purple-100 to-purple-200 border border-purple-300/30">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-md flex items-center justify-center text-xs font-bold text-white">
                Pr
              </div>
            </div>
          </div>

          {/* After Effects */}
          <div className="absolute bottom-24 right-20 animate-float-2 opacity-60">
            <div className="sticky-note p-3 bg-gradient-to-br from-blue-100 to-blue-200 border border-blue-300/30">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-md flex items-center justify-center text-xs font-bold text-white">
                Ae
              </div>
            </div>
          </div>

          {/* CapCut */}
          <div className="absolute bottom-16 left-20 animate-float-3 opacity-60">
            <div className="sticky-note p-3 bg-gradient-to-br from-pink-100 to-pink-200 border border-pink-300/30">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-600 to-pink-800 rounded-md flex items-center justify-center text-xs font-bold text-white">
                CC
              </div>
            </div>
          </div>

          {/* DaVinci Resolve */}
          <div className="absolute bottom-40 right-24 animate-float-4 opacity-60">
            <div className="sticky-note p-3 bg-gradient-to-br from-orange-100 to-orange-200 border border-orange-300/30">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-600 to-orange-800 rounded-md flex items-center justify-center text-xs font-bold text-white">
                DR
              </div>
            </div>
          </div>

          {/* Final Cut Pro */}
          <div className="absolute bottom-10 left-32 animate-float-5 opacity-60">
            <div className="sticky-note p-3 bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300/30">
              <div className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-900 rounded-md flex items-center justify-center text-xs font-bold text-white">
                FC
              </div>
            </div>
          </div>

          {/* Photoshop */}
          <div className="absolute bottom-20 right-44 animate-float-6 opacity-60">
            <div className="sticky-note p-3 bg-gradient-to-br from-blue-100 to-blue-200 border border-blue-300/30">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-700 to-blue-900 rounded-md flex items-center justify-center text-xs font-bold text-white">
                Ps
              </div>
            </div>
          </div>

          {/* Illustrator */}
          <div className="absolute bottom-8 right-36 animate-float-7 opacity-60">
            <div className="sticky-note p-3 bg-gradient-to-br from-yellow-100 to-yellow-200 border border-yellow-300/30">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-md flex items-center justify-center text-xs font-bold text-black">
                Ai
              </div>
            </div>
          </div>

          {/* Canva */}
          <div className="absolute bottom-4 left-44 animate-float-8 opacity-60">
            <div className="sticky-note p-3 bg-gradient-to-br from-cyan-100 to-cyan-200 border border-cyan-300/30">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-md flex items-center justify-center text-xs font-bold text-white">
                Ca
              </div>
            </div>
          </div>

          {/* Decorative paper clips and tape */}
          <div className="absolute bottom-56 right-32 animate-wiggle opacity-40">
            <div className="w-4 h-8 bg-tape-yellow/60 rounded-sm transform rotate-12"></div>
          </div>
          <div className="absolute bottom-48 left-40 animate-pulse opacity-40">
            <div className="w-6 h-3 bg-coral-accent/40 rounded-full transform -rotate-12"></div>
          </div>

          {/* Hand-drawn sparkles */}
          <svg className="absolute bottom-40 left-1/2 animate-sparkle" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 2 L16 30 M2 16 L30 16 M8 8 L24 24 M24 8 L8 24" stroke="#FFB300" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <svg className="absolute bottom-10 right-1/3 animate-sparkle" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2 L12 22 M2 12 L22 12" stroke="#FF6F61" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;