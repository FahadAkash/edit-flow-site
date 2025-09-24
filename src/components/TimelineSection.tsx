import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Calendar, CheckCircle } from "lucide-react";

const TimelineSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const timelineData = [
    {
      id: 1,
      year: "2019",
      title: "Agency Founded",
      description: "Started with a passion for storytelling and a small team of creative professionals.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      stats: "3 Team Members"
    },
    {
      id: 2,
      year: "2020",
      title: "First Viral Video",
      description: "Produced our first video that reached 5M+ views, establishing our reputation for viral content.",
      image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop",
      stats: "5M+ Views"
    },
    {
      id: 3,
      year: "2021",
      title: "100 Client Milestone",
      description: "Reached 100 satisfied clients and expanded our services to include full video strategy.",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=400&fit=crop",
      stats: "100+ Clients"
    },
    {
      id: 4,
      year: "2022",
      title: "Industry Recognition",
      description: "Won 'Best Video Marketing Agency' award and launched our proprietary editing workflow.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
      stats: "Award Winner"
    },
    {
      id: 5,
      year: "2023",
      title: "Global Expansion",
      description: "Opened offices in 3 countries and assembled a team of 50+ creative professionals.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
      stats: "50+ Team Members"
    },
    {
      id: 6,
      year: "2024",
      title: "AI-Powered Workflows",
      description: "Integrated cutting-edge AI tools while maintaining our human creative touch.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      stats: "Next-Gen Tech"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleItems(prev => [...prev, id]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineItems = containerRef.current?.querySelectorAll('[data-id]');
    timelineItems?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4 bg-accent/10" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="sticky-note p-8 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Our <span className="text-coral-accent">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              From startup to industry leader - see how we've grown alongside our clients
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-tape-yellow rounded-full"></div>

          {timelineData.map((item, index) => (
            <div
              key={item.id}
              data-id={item.id}
              className={`relative mb-16 ${
                index % 2 === 0 ? 'pr-1/2' : 'pl-1/2 flex justify-end'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-tape-yellow border-4 border-paper-white rounded-full z-10"></div>

              {/* Content */}
              <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div
                  className={`sticky-note p-6 transition-all duration-700 ${
                    visibleItems.includes(item.id)
                      ? index % 2 === 0 
                        ? 'animate-slide-in-left' 
                        : 'animate-slide-in-right'
                      : 'opacity-0'
                  }`}
                >
                  <Card className="border-none shadow-none bg-transparent p-0">
                    {/* Year badge */}
                    <div className="inline-flex items-center gap-2 bg-coral-accent text-white px-3 py-1 rounded-full text-sm font-bold mb-4">
                      <Calendar className="w-4 h-4" />
                      {item.year}
                    </div>

                    {/* Image */}
                    <div className="aspect-video rounded-lg overflow-hidden mb-4">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-bold text-charcoal mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-2 text-tape-yellow font-semibold">
                        <CheckCircle className="w-4 h-4" />
                        {item.stats}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;