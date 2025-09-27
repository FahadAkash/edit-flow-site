import React, { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

// Sketch-style 2D vector icons (hand-drawn look)
const SketchLightbulb = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 18h6" />
    <path d="M10 22h4" opacity="0.9" />
    <path d="M12 2a6 6 0 00-4 10c0 2 1 3 1 3h6s1-1 1-3a6 6 0 00-4-10z" />
    <path d="M9 9l-1-1" opacity="0.6" />
    <path d="M15 9l1-1" opacity="0.6" />
  </svg>
);

const SketchPen = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 21l3-1 11-11 1-3-3 1L3 21z" />
    <path d="M14 6l4 4" opacity="0.9" />
  </svg>
);

const SketchVideo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2.5" y="5" width="15" height="13" rx="2" />
    <path d="M20 8l3-2v12l-3-2" />
    <path d="M9 10l4 2-4 2V10z" />
  </svg>
);

const SketchImage = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <path d="M21 15l-5-5-7 7" />
  </svg>
);

const SketchSend = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 2L11 13" />
    <path d="M22 2l-7 20 2-9 9-9z" />
    <path d="M11 13l-9 2 9-2z" opacity="0.6" />
  </svg>
);

const ProcessTimeline = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [activeStep, setActiveStep] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const processData = [
    {
      id: 1,
      step: "01",
      title: "Idea Analysis",
      description: "We take your ideas and analyze them thoroughly based on our experience and existing market standards.",
      icon: SketchLightbulb,
      color: "from-amber-400 to-orange-500"
    },
    {
      id: 2,
      step: "02", 
      title: "Writing Content",
      description: "We will give you proven script frameworks that the biggest creators and companies use.",
      icon: SketchPen,
      color: "from-blue-400 to-indigo-500"
    },
    {
      id: 3,
      step: "03",
      title: "Editing the Video", 
      description: "We make the best quality videos using advanced motion graphics that bring your message to life.",
      icon: SketchVideo,
      color: "from-purple-400 to-pink-500"
    },
    {
      id: 4,
      step: "04",
      title: "Creating Thumbnail",
      description: "We analyze other thumbnails in your niche and are able to replicate best performing results.",
      icon: SketchImage,
      color: "from-green-400 to-emerald-500"
    },
    {
      id: 5,
      step: "05",
      title: "Post the Video",
      description: "All that's left now is to post the video and start counting the leads that come in.",
      icon: SketchSend,
      color: "from-red-400 to-rose-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '0');
            if (!visibleItems.includes(id)) {
              setTimeout(() => {
                setVisibleItems(prev => [...prev, id]);
                setActiveStep(id);
              }, (id - 1) * 200); // Stagger animation
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    const timelineItems = containerRef.current?.querySelectorAll('[data-id]');
    timelineItems?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, [visibleItems]);

  return (
    <section className="py-12 px-4 relative overflow-hidden" ref={containerRef}>
      {/* Paper texture background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='paper' patternUnits='userSpaceOnUse' width='100' height='100'%3E%3Crect fill='%23f8f6f0' width='100' height='100'/%3E%3Cpath d='M0 0L50 50L100 0' stroke='%23e8e4d9' stroke-width='0.5' fill='none'/%3E%3Cpath d='M0 100L50 50L100 100' stroke='%23e8e4d9' stroke-width='0.5' fill='none'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23paper)'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* Ink splatter decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gray-800 rounded-full opacity-5 blur-sm transform rotate-12"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gray-700 rounded-full opacity-10 blur-md transform -rotate-45"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gray-600 rounded-full opacity-8 blur-lg"></div>

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12 relative">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-white/80 rounded-lg transform -rotate-1 shadow-lg border border-gray-200"></div>
            <div className="relative bg-white/90 p-8 rounded-lg border-2 border-gray-300 shadow-xl transform rotate-1 backdrop-blur-sm">
              <div className="absolute top-2 left-4 w-2 h-2 bg-red-400 rounded-full shadow-md"></div>
              <div className="absolute top-2 right-4 w-2 h-2 bg-blue-400 rounded-full shadow-md"></div>
              
              <h2 className="text-5xl md:text-6xl font-bold mb-4 relative">
                <span className="ink-text handwritten">Our</span>
                <span className="ml-4 ink-text handwritten relative">Process
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-amber-200 rounded transform -skew-x-12 opacity-60"></div>
                </span>
              </h2>
              <p className="text-xl max-w-2xl mx-auto leading-relaxed ink-muted handwritten">
                Our strategy to get <span className="font-semibold ink-text">you leads</span> with content
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central sketchy line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
            <div className="w-full h-full bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600 rounded-full relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-300 to-transparent opacity-50 rounded-full transform rotate-1"></div>
            </div>
          </div>

          {processData.map((item, index) => {
            const Icon = item.icon;
            const isVisible = visibleItems.includes(item.id);
            const isActive = activeStep === item.id;
            const isLeft = index % 2 === 0;

            return (
              <div
                key={item.id}
                data-id={item.id}
                className={`relative mb-12 ${isLeft ? 'pr-1/2' : 'pl-1/2 flex justify-end'}`}
              >
                {/* Animated timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className={`relative transition-all duration-1000 ${
                    isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  }`}>
                    {/* Outer ring with pulse effect */}
                    <div className={`absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-r ${item.color} animate-pulse opacity-30`}></div>
                    
                    {/* Main dot */}
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} border-4 border-white shadow-xl flex items-center justify-center transform transition-transform duration-300 ${
                      isActive ? 'scale-110' : 'scale-100'
                    }`}>
                      <Icon className="w-6 h-6 text-white stroke-[1.6]" />
                    </div>
                    
                    {/* Step number */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg">
                      {item.step}
                    </div>
                  </div>
                </div>

                {/* Content card */}
                <div className={`w-full max-w-md ${isLeft ? 'pr-12' : 'pl-12'} relative`}>
                  <div
                    className={`transition-all duration-1000 ease-out ${
                      isVisible
                        ? 'opacity-100 translate-x-0 translate-y-0'
                        : `opacity-0 ${isLeft ? '-translate-x-20' : 'translate-x-20'} translate-y-8`
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    {/* Paper-style card with ink effects */}
                    <div className="relative group">
                      {/* Shadow layers for paper effect */}
                      <div className="absolute -inset-1 bg-gray-200 rounded-lg transform rotate-1 opacity-60"></div>
                      <div className="absolute -inset-2 bg-gray-100 rounded-lg transform -rotate-1 opacity-40"></div>
                      
                      {/* Main card */}
                      <Card className={`relative bg-[rgb(255,253,247)] border-2 border-[rgba(44,24,16,0.08)] shadow-xl p-8 rounded-lg transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                        isActive ? 'ring-4 ring-amber-200 ring-opacity-50' : ''
                      }`}>
                        {/* Ink stain decoration */}
                        <div className={`absolute top-4 ${isLeft ? 'right-4' : 'left-4'} w-8 h-8 bg-gradient-to-r ${item.color} rounded-full opacity-20 blur-sm`}></div>
                        
                        {/* Step indicator */}
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${item.color} text-white font-bold text-lg mb-4 shadow-lg`}>
                          {item.step}
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold mb-3 relative ink-text handwritten">
                          {item.title}
                          <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-amber-100 rounded transform -skew-x-12 opacity-60"></div>
                        </h3>

                        {/* Description */}
                        <p className="leading-relaxed ink-muted handwritten">
                          {item.description}
                        </p>

                        {/* Decorative corner tear */}
                        <div className="absolute top-0 right-0 w-4 h-4 bg-gray-100 transform rotate-45 translate-x-2 -translate-y-2 opacity-60"></div>
                      </Card>
                    </div>
                  </div>
                </div>

                {/* Connection line to dot */}
                <div className={`absolute top-6 ${isLeft ? 'right-6' : 'left-6'} w-6 h-0.5 bg-gray-300 transform transition-all duration-1000 ${
                  isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                }`} style={{ transformOrigin: isLeft ? 'right' : 'left', transitionDelay: `${index * 200 + 400}ms` }}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom decoration */}
        <div className="text-center mt-12">
          <div className="relative inline-block">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-lg opacity-50"></div>
            <div className="relative bg-white border-2 border-gray-300 rounded-full px-8 py-4 shadow-lg">
              <p className="text-lg font-semibold text-gray-700">Ready to start your journey?</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .ink-text {
          color: #2c1810; /* dark ink color */
          font-family: 'Europa Grotesk SH', 'Courier New', monospace;
          font-weight: 700;
          text-shadow: 0.5px 0.5px 0 rgba(44,24,16,0.06);
        }

        .handwritten {
          transform: rotate(-0.6deg);
        }

        .ink-muted {
          color: #3b2b20; /* softer ink color for body text */
          opacity: 0.95;
          font-family: 'Courier New', monospace;
        }

        @keyframes sketch-draw {
          0% { stroke-dasharray: 0 100; }
          100% { stroke-dasharray: 100 0; }
        }
      `}</style>
    </section>
  );
};

export default ProcessTimeline;