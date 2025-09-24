import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ReelsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const reels = [
    {
      id: 1,
      title: "Product Launch",
      thumbnail: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=300&h=400&fit=crop",
      duration: "0:15",
      views: "2.3M"
    },
    {
      id: 2,
      title: "Behind the Scenes",
      thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=300&h=400&fit=crop",
      duration: "0:30",
      views: "1.8M"
    },
    {
      id: 3,
      title: "Tutorial Snippet",
      thumbnail: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=300&h=400&fit=crop",
      duration: "0:45",
      views: "3.1M"
    },
    {
      id: 4,
      title: "Brand Story",
      thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=400&fit=crop",
      duration: "0:22",
      views: "950K"
    },
    {
      id: 5,
      title: "Event Highlight",
      thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=400&fit=crop",
      duration: "0:18",
      views: "1.2M"
    },
    {
      id: 6,
      title: "Client Feature",
      thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=400&fit=crop",
      duration: "0:25",
      views: "2.7M"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = 240; // width + gap
    const scrollAmount = direction === 'left' ? -cardWidth * 2 : cardWidth * 2;
    
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-20 px-4 bg-accent/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="sticky-note p-8 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              <span className="text-tape-yellow">Short-Form</span> Magic
            </h2>
            <p className="text-xl text-muted-foreground">
              Bite-sized content that packs a punch and drives engagement
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reels.map((reel, index) => (
              <div
                key={reel.id}
                className="sticky-note p-4 shrink-0 hover:scale-105 transition-transform duration-300"
              >
                <Card className="w-52 border-none shadow-none bg-transparent p-0">
                  <div className="relative group cursor-pointer">
                    <div className="aspect-[3/4] rounded-lg overflow-hidden bg-muted">
                      <img 
                        src={reel.thumbnail}
                        alt={reel.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 bg-tape-yellow/90 rounded-full flex items-center justify-center">
                          <Play className="w-5 h-5 text-charcoal ml-0.5" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 bg-charcoal/80 text-white text-xs px-2 py-1 rounded">
                      {reel.duration}
                    </div>
                    <div className="absolute bottom-2 left-2 bg-charcoal/80 text-white text-xs px-2 py-1 rounded">
                      {reel.views} views
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-charcoal text-center">
                      {reel.title}
                    </h3>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              className="rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              className="rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReelsCarousel;