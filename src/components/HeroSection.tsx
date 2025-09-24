import { Button } from "@/components/ui/button";
import { Play, Pause, TrendingUp, Users, Award, Zap, Target, Sparkles } from "lucide-react";
import { useState } from "react";
import heroVideoPoster from "@/assets/hero-video-poster.jpg";

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const agencyStats = [
    { icon: Users, value: "500+", label: "Happy Clients", delay: "0s" },
    { icon: TrendingUp, value: "2.5M+", label: "Views Generated", delay: "0.5s" },
    { icon: Award, value: "98%", label: "Success Rate", delay: "1s" },
    { icon: Zap, value: "24/7", label: "Support", delay: "1.5s" }
  ];

  const softwareIcons = [
    { name: "Pr", color: "from-purple-600 to-purple-800", position: "top-20 left-16", animation: "float-1" },
    { name: "Ae", color: "from-blue-600 to-blue-800", position: "top-32 right-20", animation: "float-2" },
    { name: "Ps", color: "from-blue-500 to-blue-700", position: "bottom-60 left-24", animation: "float-3" },
    { name: "Ai", color: "from-orange-500 to-orange-700", position: "top-60 left-32", animation: "float-4" },
    { name: "CC", color: "from-pink-600 to-pink-800", position: "bottom-40 left-20", animation: "float-3" },
    { name: "DR", color: "from-orange-600 to-orange-800", position: "bottom-60 right-24", animation: "float-4" },
    { name: "FC", color: "from-gray-700 to-gray-900", position: "top-60 left-32", animation: "float-5" },
    { name: "Au", color: "from-purple-500 to-purple-700", position: "bottom-80 right-32", animation: "float-1" }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Drawing Lines Animation */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="drawingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--coral-accent))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--tape-yellow))" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          
          {/* Animated drawing paths */}
          <path 
            d="M100,200 Q300,100 500,200 T900,200" 
            stroke="url(#drawingGradient)" 
            strokeWidth="3" 
            fill="none"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            className="animate-draw-line"
            style={{ animationDelay: "2s" }}
          />
          <path 
            d="M200,600 Q400,500 600,600 T1000,600" 
            stroke="url(#drawingGradient)" 
            strokeWidth="2" 
            fill="none"
            strokeDasharray="800"
            strokeDashoffset="800"
            className="animate-draw-line"
            style={{ animationDelay: "3s" }}
          />
          
          {/* Animated stars/sparkles */}
          <g className="animate-pulse" style={{ animationDelay: "4s" }}>
            <path d="M150,150 L155,160 L165,160 L157,167 L160,177 L150,170 L140,177 L143,167 L135,160 L145,160 Z" fill="hsl(var(--tape-yellow))" opacity="0.6" />
            <path d="M950,180 L955,190 L965,190 L957,197 L960,207 L950,200 L940,207 L943,197 L935,190 L945,190 Z" fill="hsl(var(--coral-accent))" opacity="0.6" />
            <path d="M200,500 L205,510 L215,510 L207,517 L210,527 L200,520 L190,527 L193,517 L185,510 L195,510 Z" fill="hsl(var(--tape-yellow))" opacity="0.6" />
          </g>
        </svg>
        
        {/* Market-style arrows and annotations */}
        <div className="absolute top-1/4 right-1/4 animate-fade-in-up" style={{ animationDelay: "5s" }}>
          <div className="sticky-coral paper-clip rotate-random-2 p-3 text-xs font-bold">
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              <span>ROI ↗ 400%</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-1/3 left-1/4 animate-fade-in-up" style={{ animationDelay: "6s" }}>
          <div className="sticky-mint push-pin rotate-random-4 p-3 text-xs font-bold">
            <div className="flex items-center gap-1">
              <Target className="w-4 h-4" />
              <span>Viral Content</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Agency Stats Bar */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {agencyStats.map((stat, index) => (
            <div 
              key={index}
              className="sticky-note p-4 animate-fade-in-up"
              style={{ animationDelay: stat.delay }}
            >
              <div className="flex items-center gap-2">
                <div className="p-2 bg-tape-yellow/20 rounded-full">
                  <stat.icon className="w-4 h-4 text-charcoal" />
                </div>
                <div className="text-left">
                  <div className="text-lg font-bold text-charcoal">{stat.value}</div>
                  <div className="text-xs text-charcoal/70">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="sticky-note p-8 mb-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-coral-accent animate-pulse" />
            <span className="text-sm font-semibold text-coral-accent uppercase tracking-wider">
              Premier Video Agency
            </span>
            <Sparkles className="w-6 h-6 text-coral-accent animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-charcoal mb-6 leading-tight">
            Your Story,
            <span className="text-coral-accent"> Perfectly</span>
            <br />
            <span className="text-tape-yellow">Edited</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
            We transform your raw footage into viral content that drives real business results. 
            <span className="font-semibold text-coral-accent"> 500+ brands trust us.</span>
          </p>
          
          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-6 mb-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Same Day Response</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Unlimited Revisions</span>
            </div>
          </div>
        </div>

        {/* Video Player */}
        <div className="relative mb-8 group">
          <div className="sticky-note p-4 max-w-3xl mx-auto">
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
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="arrow-doodle">
          <Button variant="default" size="lg" className="text-lg px-8 py-4 animate-pulse">
            Work with us
          </Button>
        </div>

        {/* Floating Software Logos & Sticky Notes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {softwareIcons.map((software, index) => (
            <div 
              key={index}
              className={`absolute ${software.position} animate-${software.animation} opacity-70 hover:opacity-100 transition-opacity`}
            >
              <div className={`sticky-note p-3 ${index % 2 === 0 ? 'paper-clip' : 'push-pin'} rotate-random-${(index % 6) + 1}`}>
                <div className={`w-10 h-10 bg-gradient-to-br ${software.color} rounded-lg flex items-center justify-center text-xs font-bold text-white shadow-lg`}>
                  {software.name}
                </div>
              </div>
            </div>
          ))}

          {/* Creative Task Notes */}
          <div className="absolute top-16 right-1/4 sticky-mint paper-clip rotate-random-2 animate-float-1 p-3 text-xs opacity-80">
            <p className="text-charcoal font-medium">Edit Timeline</p>
          </div>
          <div className="absolute bottom-1/3 left-1/4 sticky-peach push-pin rotate-random-4 animate-float-3 p-3 text-xs opacity-80">
            <p className="text-charcoal font-medium">Color Grade</p>
          </div>
          <div className="absolute top-1/3 right-12 sticky-lavender rotate-random-1 animate-float-2 p-3 text-xs opacity-80">
            <p className="text-charcoal font-medium">Sound Mix</p>
          </div>
          <div className="absolute top-1/2 left-12 sticky-sky paper-clip rotate-random-3 animate-float-4 p-3 text-xs opacity-80">
            <p className="text-charcoal font-medium">Motion Graphics</p>
          </div>
          <div className="absolute bottom-1/4 right-1/3 sticky-lemon push-pin rotate-random-5 animate-float-1 p-3 text-xs opacity-80">
            <p className="text-charcoal font-medium">Brand Story</p>
          </div>
          
          {/* Agency credentials floating */}
          <div className="absolute top-1/4 left-12 sticky-coral rotate-random-2 animate-float-2 p-4 text-xs opacity-75">
            <div className="text-center">
              <Award className="w-6 h-6 mx-auto mb-1 text-charcoal" />
              <p className="text-charcoal font-bold">Award Winning</p>
              <p className="text-charcoal/70">Agency 2024</p>
            </div>
          </div>
          
          <div className="absolute bottom-1/4 left-1/3 sticky-sky push-pin rotate-random-4 animate-float-3 p-4 text-xs opacity-75">
            <div className="text-center">
              <Users className="w-6 h-6 mx-auto mb-1 text-charcoal" />
              <p className="text-charcoal font-bold">50+ Experts</p>
              <p className="text-charcoal/70">Creative Team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;