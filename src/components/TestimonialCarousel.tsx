import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CEO",
      company: "TechReview Pro",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "Our channel went from 50K to 2.5M subscribers in just 6 months. The editing quality and storytelling completely transformed our content strategy.",
      rating: 5,
      result: "2.5M subscribers gained"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Marketing Director",
      company: "FitLife Brand",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "The team doesn't just edit videos - they engineer viral content. Our engagement rates increased by 400% after working with them.",
      rating: 5,
      result: "400% engagement increase"
    },
    {
      id: 3,
      name: "Lisa Rodriguez",
      role: "Founder",
      company: "CreativeCo Studio",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Professional, creative, and results-driven. They turned our boring product demos into compelling stories that actually convert.",
      rating: 5,
      result: "300% conversion rate boost"
    },
    {
      id: 4,
      name: "David Park",
      role: "Content Manager",
      company: "EduTech Solutions",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      content: "Best investment we made for our content strategy. The videos they produce consistently hit 1M+ views and drive real business results.",
      rating: 5,
      result: "1M+ views per video"
    },
    {
      id: 5,
      name: "Emma Thompson",
      role: "Brand Manager",
      company: "Fashion Forward",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      content: "They understand our brand voice perfectly and create content that resonates with our audience. ROI has been incredible.",
      rating: 5,
      result: "500% ROI improvement"
    },
    {
      id: 6,
      name: "Alex Kim",
      role: "Startup Founder",
      company: "InnovateLab",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "From concept to final edit, they handle everything. The quality is consistently outstanding and delivery is always on time.",
      rating: 5,
      result: "Always on-time delivery"
    }
  ];

  // Gentle auto-scroll effect
  useEffect(() => {
    if (isHovered) return;
    const container = scrollRef.current;
    if (!container) return;
    let frame: number;
    const scrollStep = 0.3; // px per frame, very gentle
    function animate() {
      if (!container) return;
      container.scrollLeft += scrollStep;
      // Loop scroll
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
        container.scrollLeft = 0;
      }
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isHovered]);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = 400; // width + gap
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="sticky-note p-8 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              What Clients <span className="text-tape-yellow">Say</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it - hear from the brands we've helped grow
            </p>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Fade gradients */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>

          <div 
            ref={scrollRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="sticky-note p-6 shrink-0 w-96 hover:scale-105 transition-transform duration-300"
              >
                <Card className="border-none shadow-none bg-transparent p-0 h-full">
                  {/* Quote icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-coral-accent" />
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <p className="text-charcoal leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-tape-yellow text-tape-yellow" />
                    ))}
                  </div>

                  {/* Result highlight */}
                  <div className="bg-accent p-3 rounded-lg mb-4">
                    <p className="text-sm font-semibold text-coral-accent">
                      Result: {testimonial.result}
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                      <img 
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
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

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "2000+", label: "Videos Created" },
            { value: "100M+", label: "Total Views" },
            { value: "98%", label: "Client Retention" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="sticky-note p-4">
                <div className="text-3xl font-bold text-coral-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;