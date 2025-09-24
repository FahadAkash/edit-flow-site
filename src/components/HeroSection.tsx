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

        {/* Floating Software Logos & Sticky Notes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Adobe Premiere Pro */}
          <div className="absolute top-20 left-16 animate-float-1 opacity-60">
            <div className="sticky-lavender paper-clip rotate-random-1 p-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-md flex items-center justify-center text-xs font-bold text-white">
                Pr
              </div>
            </div>
          </div>

          {/* After Effects */}
          <div className="absolute top-32 right-20 animate-float-2 opacity-60">
            <div className="sticky-sky push-pin rotate-random-3 p-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-md flex items-center justify-center text-xs font-bold text-white">
                Ae
              </div>
            </div>
          </div>

          {/* CapCut */}
          <div className="absolute bottom-40 left-20 animate-float-3 opacity-60">
            <div className="sticky-coral paper-clip rotate-random-2 p-3">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-600 to-pink-800 rounded-md flex items-center justify-center text-xs font-bold text-white">
                CC
              </div>
            </div>
          </div>

          {/* DaVinci Resolve */}
          <div className="absolute bottom-60 right-24 animate-float-4 opacity-60">
            <div className="sticky-peach rotate-random-4 p-3">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-600 to-orange-800 rounded-md flex items-center justify-center text-xs font-bold text-white">
                DR
              </div>
            </div>
          </div>

          {/* Final Cut Pro */}
          <div className="absolute top-60 left-32 animate-float-5 opacity-60">
            <div className="sticky-lemon push-pin rotate-random-5 p-3">
              <div className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-900 rounded-md flex items-center justify-center text-xs font-bold text-white">
                FC
              </div>
            </div>
          </div>

          {/* Creative Task Notes */}
          <div className="absolute top-16 right-1/4 sticky-mint paper-clip rotate-random-2 animate-float-1 p-3 text-xs">
            <p className="text-charcoal font-medium">Edit Timeline</p>
          </div>
          <div className="absolute bottom-1/3 left-1/4 sticky-peach push-pin rotate-random-4 animate-float-3 p-3 text-xs">
            <p className="text-charcoal font-medium">Color Grade</p>
          </div>
          <div className="absolute top-1/3 right-12 sticky-lavender rotate-random-1 animate-float-2 p-3 text-xs">
            <p className="text-charcoal font-medium">Sound Mix</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;