import { useState } from "react";
import { Play, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import videoPortfolio from "@/assets/video-portfolio.jpg";

const WorkGrid = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const workItems = [
    {
      id: 1,
      title: "Tech Product Launch",
      thumbnail: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop",
      category: "Product",
      duration: "2:45",
      client: "TechCorp"
    },
    {
      id: 2,
      title: "Brand Documentary",
      thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
      category: "Documentary",
      duration: "5:20",
      client: "MediaFlow"
    },
    {
      id: 3,
      title: "Social Campaign",
      thumbnail: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=600&h=400&fit=crop",
      category: "Social",
      duration: "1:30",
      client: "Creative Co"
    },
    {
      id: 4,
      title: "Event Highlight Reel",
      thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
      category: "Event",
      duration: "3:15",
      client: "VideoLab"
    },
    {
      id: 5,
      title: "Tutorial Series",
      thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop",
      category: "Education",
      duration: "4:10",
      client: "StreamPro"
    },
    {
      id: 6,
      title: "Testimonial Compilation",
      thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
      category: "Testimonial",
      duration: "2:30",
      client: "ContentMax"
    }
  ];

  const openModal = (id: number) => {
    setSelectedVideo(id);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="sticky-note p-8 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Our <span className="text-tape-yellow">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Every project tells a story. Here are some of our favorites.
            </p>
          </div>
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workItems.map((item, index) => (
            <div
              key={item.id}
              className="sticky-note p-4 hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => openModal(item.id)}
            >
              <Card className="border-none shadow-none bg-transparent p-0 overflow-hidden">
                <div className="relative group">
                  <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                    <img 
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-tape-yellow/90 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-charcoal ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 bg-coral-accent text-white text-xs px-2 py-1 rounded">
                    {item.category}
                  </div>
                  <div className="absolute top-3 right-3 bg-charcoal/80 text-white text-xs px-2 py-1 rounded">
                    {item.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-charcoal text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Client: {item.client}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-charcoal/80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl w-full">
              <div className="sticky-note p-6">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                  <img 
                    src={videoPortfolio}
                    alt="Video player"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-tape-yellow/90 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-charcoal ml-1" />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-charcoal mb-2">
                    {workItems.find(item => item.id === selectedVideo)?.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {workItems.find(item => item.id === selectedVideo)?.client}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-white hover:bg-white/20"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkGrid;