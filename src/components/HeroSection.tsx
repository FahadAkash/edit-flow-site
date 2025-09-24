import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import { useState } from "react";
import heroVideoPoster from "@/assets/hero-video-poster.jpg";

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="sticky-note p-8 mb-8 max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-charcoal mb-6 leading-tight">
            Your Story,
            <span className="text-coral-accent"> Perfectly</span>
            <br />
            <span className="text-tape-yellow">Edited</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
            We transform your raw footage into compelling stories that captivate and inspire your audience.
          </p>
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
          <Button variant="default" size="lg" className="text-lg px-8 py-4">
            Work with us
          </Button>
        </div>

        {/* Floating Software Logos */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Adobe Premiere Pro */}
          <div className="absolute top-20 left-16 animate-float-1 opacity-60">
            <div className="sticky-note p-3 bg-gradient-to-br from-purple-100 to-purple-200 border border-purple-300/30">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-md flex items-center justify-center text-xs font-bold text-white">
                Pr
              </div>
            </div>
          </div>

          {/* After Effects */}
          <div className="absolute top-32 right-20 animate-float-2 opacity-60">
            <div className="sticky-note p-3 bg-gradient-to-br from-blue-100 to-blue-200 border border-blue-300/30">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-md flex items-center justify-center text-xs font-bold text-white">
                Ae
              </div>
            </div>
          </div>

          {/* CapCut */}
          <div className="absolute bottom-40 left-20 animate-float-3 opacity-60">
            <div className="sticky-note p-3 bg-gradient-to-br from-pink-100 to-pink-200 border border-pink-300/30">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-600 to-pink-800 rounded-md flex items-center justify-center text-xs font-bold text-white">
                CC
              </div>
            </div>
          </div>

          {/* DaVinci Resolve */}
          <div className="absolute bottom-60 right-24 animate-float-4 opacity-60">
            <div className="sticky-note p-3 bg-gradient-to-br from-orange-100 to-orange-200 border border-orange-300/30">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-600 to-orange-800 rounded-md flex items-center justify-center text-xs font-bold text-white">
                DR
              </div>
            </div>
          </div>

          {/* Final Cut Pro */}
          <div className="absolute top-60 left-32 animate-float-5 opacity-60">
            <div className="sticky-note p-3 bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300/30">
              <div className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-900 rounded-md flex items-center justify-center text-xs font-bold text-white">
                FC
              </div>
            </div>
          </div>

          {/* Decorative paper clips and tape */}
          <div className="absolute top-28 right-32 animate-wiggle opacity-40">
            <div className="w-4 h-8 bg-tape-yellow/60 rounded-sm transform rotate-12"></div>
          </div>
          
          <div className="absolute bottom-48 left-40 animate-pulse opacity-40">
            <div className="w-6 h-3 bg-coral-accent/40 rounded-full transform -rotate-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;