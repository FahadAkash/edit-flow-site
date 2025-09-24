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

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 animate-wiggle">
          <div className="w-16 h-16 bg-coral-accent/20 rounded-full"></div>
        </div>
        <div className="absolute bottom-32 right-10 animate-bounce">
          <div className="w-8 h-8 bg-tape-yellow/30 rotate-45"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;