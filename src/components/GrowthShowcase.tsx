import { TrendingUp, Users, Eye, MessageCircle, BarChart3, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import youtubeGrowth from "/results/banner1.png";

const GrowthShowcase = () => {
  const [currentSet, setCurrentSet] = useState(0);
  
  const imageSets = [
    // Set 1
    {
      main: youtubeGrowth,
      scattered: [
        { src: youtubeGrowth, position: "-top-10 -left-8", rotate: "-rotate-6" },
        { src: youtubeGrowth, position: "top-20 -right-4", rotate: "rotate-3" },
        { src: youtubeGrowth, position: "bottom-0 -left-12", rotate: "rotate-6" },
        { src: youtubeGrowth, position: "bottom-10 -right-8", rotate: "-rotate-3" }
      ]
    },
    // Set 2
    {
      main: youtubeGrowth,
      scattered: [
        { src: youtubeGrowth, position: "-top-8 -right-10", rotate: "rotate-6" },
        { src: youtubeGrowth, position: "top-16 -left-8", rotate: "-rotate-4" },
        { src: youtubeGrowth, position: "bottom-4 -right-12", rotate: "-rotate-6" },
        { src: youtubeGrowth, position: "bottom-12 -left-6", rotate: "rotate-3" }
      ]
    },
    // Set 3
    {
      main: youtubeGrowth,
      scattered: [
        { src: youtubeGrowth, position: "-top-12 left-1/4", rotate: "-rotate-3" },
        { src: youtubeGrowth, position: "top-24 right-1/4", rotate: "rotate-6" },
        { src: youtubeGrowth, position: "bottom-8 left-1/3", rotate: "-rotate-6" },
        { src: youtubeGrowth, position: "bottom-16 right-1/3", rotate: "rotate-4" }
      ]
    }
  ];

  const nextSet = () => {
    setCurrentSet((prev) => (prev + 1) % imageSets.length);
  };

  const prevSet = () => {
    setCurrentSet((prev) => (prev - 1 + imageSets.length) % imageSets.length);
  };
  
  const stats = [
    {
      icon: Users,
      label: "Subscriber Growth",
      value: "+2.5M",
      change: "+150% in 6 months",
      color: "text-tape-yellow"
    },
    {
      icon: Eye,
      label: "Total Views",
      value: "47M",
      change: "+300% increase",
      color: "text-coral-accent"
    },
    {
      icon: MessageCircle,
      label: "Engagement Rate",
      value: "12.8%",
      change: "+85% improvement",
      color: "text-primary"
    },
    {
      icon: BarChart3,
      label: "Revenue Growth",
      value: "$2.1M",
      change: "+400% ROI",
      color: "text-tape-yellow"
    }
  ];

  return (
    <section className="py-12 px-4 relative overflow-hidden">
      {/* Simplified styles without animations */}
      <style>{`
        .image-container {
          isolation: isolate;
        }
        .no-bg {
          background: transparent !important;
        }
        .image-fix {
          background: transparent !important;
          border: none !important;
          outline: none !important;
        }
      `}</style>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12">
          <div className="sticky-mint paper-clip rotate-random-1 p-8 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Real Results for 
              <span className="text-coral-accent"> Real Clients</span>
            </h2>
            <p className="text-xl text-charcoal/70">
              We don't just edit videos—we engineer viral content that drives measurable growth
            </p>
          </div>
        </div>

        {/* Scattered images showcase */}
        <div className="relative min-h-[600px] mb-12">
          <div 
            key={currentSet}
            className="relative"
          >
            {/* Main central image */}
            <div className="max-w-4xl mx-auto z-10 relative">
              <div className="  overflow-visible relative group bg-transparent image-container no-bg">
                <img 
                  src={imageSets[currentSet].main}
                  alt="YouTube growth analytics dashboard"
                  className="w-full h-full object-cover bg-transparent image-fix"
                  style={{
                    clipPath: `polygon(
                      2% 1%, 5% 0.5%, 8% 1.5%, 12% 0.8%, 15% 1.2%, 18% 0.5%, 22% 1%, 25% 0.3%, 
                      28% 1.5%, 32% 0.7%, 35% 1%, 38% 0.5%, 42% 1.2%, 45% 0.8%, 48% 1%, 52% 0.5%, 
                      55% 1.2%, 58% 0.7%, 62% 1%, 65% 0.5%, 68% 1.5%, 72% 0.8%, 75% 1%, 78% 0.5%, 
                      82% 1.2%, 85% 0.7%, 88% 1%, 92% 0.5%, 95% 1.2%, 98% 0.7%,
                      99% 5%, 99.5% 8%, 98.5% 12%, 99.2% 15%, 98.8% 18%, 99.5% 22%, 99% 25%, 
                      99.7% 28%, 98.5% 32%, 99.3% 35%, 99% 38%, 99.5% 42%, 98.8% 45%, 99% 48%, 
                      99.5% 52%, 98.8% 55%, 99.3% 58%, 99% 62%, 99.5% 65%, 98.5% 68%, 99.2% 72%, 
                      99% 75%, 99.5% 78%, 98.8% 82%, 99.3% 85%, 99% 88%, 99.5% 92%, 98.7% 95%, 99% 98%,
                      98% 99%, 95% 99.5%, 92% 98.5%, 88% 99.2%, 85% 98.8%, 82% 99.5%, 78% 99%, 
                      75% 99.7%, 72% 98.5%, 68% 99.3%, 65% 99%, 62% 99.5%, 58% 98.8%, 55% 99%, 
                      52% 99.5%, 48% 98.8%, 45% 99.3%, 42% 99%, 38% 99.5%, 35% 98.5%, 32% 99.2%, 
                      28% 99%, 25% 99.5%, 22% 98.8%, 18% 99.3%, 15% 99%, 12% 99.5%, 8% 98.7%, 5% 99%, 2% 98.5%,
                      1% 95%, 0.5% 92%, 1.5% 88%, 0.8% 85%, 1.2% 82%, 0.5% 78%, 1% 75%, 0.3% 72%, 
                      1.5% 68%, 0.7% 65%, 1% 62%, 0.5% 58%, 1.2% 55%, 0.8% 52%, 1% 48%, 0.5% 45%, 
                      1.2% 42%, 0.7% 38%, 1% 35%, 0.5% 32%, 1.5% 28%, 0.8% 25%, 1% 22%, 0.5% 18%, 
                      1.2% 15%, 0.7% 12%, 1% 8%, 0.5% 5%, 1.2% 2%
                    )`,
                    filter: 'contrast(1.05) brightness(0.98)',
                  }}
                />
              </div>
            </div>

            {/* Scattered images */}
            {imageSets[currentSet].scattered.map((image, index) => (
              <div
                key={index}
                className={`w-64 absolute ${image.position} transform transition-all cursor-pointer ${image.rotate}`}
              >
                <div className="aspect-video overflow-visible shadow-xl relative bg-transparent image-container no-bg">
                  <img 
                    src={image.src} 
                    alt={`Growth metrics ${index + 1}`} 
                    className="w-full h-full object-cover bg-transparent image-fix"
                    style={{
                      clipPath: `polygon(
                        ${2 + index}% ${1 + index * 0.3}%, ${5 + index * 0.5}% ${0.5 + index * 0.2}%, ${8 + index * 0.3}% ${1.5 + index * 0.4}%, 
                        ${12 - index * 0.2}% ${0.8 + index * 0.3}%, ${15 + index * 0.4}% ${1.2 - index * 0.2}%, ${18 - index * 0.3}% ${0.5 + index * 0.5}%, 
                        ${22 + index * 0.2}% ${1 + index * 0.3}%, ${25 - index * 0.4}% ${0.3 + index * 0.6}%, ${28 + index * 0.3}% ${1.5 - index * 0.2}%, 
                        ${32 - index * 0.2}% ${0.7 + index * 0.4}%, ${35 + index * 0.5}% ${1 - index * 0.3}%, ${38 - index * 0.3}% ${0.5 + index * 0.5}%, 
                        ${42 + index * 0.2}% ${1.2 - index * 0.2}%, ${45 + index * 0.4}% ${0.8 + index * 0.3}%, ${48 - index * 0.2}% ${1 + index * 0.2}%, 
                        ${52 + index * 0.3}% ${0.5 - index * 0.1}%, ${55 - index * 0.4}% ${1.2 + index * 0.4}%, ${58 + index * 0.2}% ${0.7 - index * 0.2}%, 
                        ${62 - index * 0.3}% ${1 + index * 0.3}%, ${65 + index * 0.4}% ${0.5 + index * 0.5}%, ${68 - index * 0.2}% ${1.5 - index * 0.3}%, 
                        ${72 + index * 0.3}% ${0.8 + index * 0.4}%, ${75 - index * 0.4}% ${1 - index * 0.2}%, ${78 + index * 0.2}% ${0.5 + index * 0.3}%, 
                        ${82 - index * 0.3}% ${1.2 + index * 0.2}%, ${85 + index * 0.4}% ${0.7 - index * 0.3}%, ${88 - index * 0.2}% ${1 + index * 0.4}%, 
                        ${92 + index * 0.3}% ${0.5 - index * 0.2}%, ${95 - index * 0.4}% ${1.2 + index * 0.5}%, ${98 + index * 0.2}% ${0.7 - index * 0.3}%,
                        99% 5%, 99.5% 8%, 98.5% 12%, 99.2% 15%, 98.8% 18%, 99.5% 22%, 99% 25%, 
                        99.7% 28%, 98.5% 32%, 99.3% 35%, 99% 38%, 99.5% 42%, 98.8% 45%, 99% 48%, 
                        99.5% 52%, 98.8% 55%, 99.3% 58%, 99% 62%, 99.5% 65%, 98.5% 68%, 99.2% 72%, 
                        99% 75%, 99.5% 78%, 98.8% 82%, 99.3% 85%, 99% 88%, 99.5% 92%, 98.7% 95%, 99% 98%,
                        98% 99%, 95% 99.5%, 92% 98.5%, 88% 99.2%, 85% 98.8%, 82% 99.5%, 78% 99%, 
                        75% 99.7%, 72% 98.5%, 68% 99.3%, 65% 99%, 62% 99.5%, 58% 98.8%, 55% 99%, 
                        52% 99.5%, 48% 98.8%, 45% 99.3%, 42% 99%, 38% 99.5%, 35% 98.5%, 32% 99.2%, 
                        28% 99%, 25% 99.5%, 22% 98.8%, 18% 99.3%, 15% 99%, 12% 99.5%, 8% 98.7%, 5% 99%, 2% 98.5%,
                        1% 95%, 0.5% 92%, 1.5% 88%, 0.8% 85%, 1.2% 82%, 0.5% 78%, 1% 75%, 0.3% 72%, 
                        1.5% 68%, 0.7% 65%, 1% 62%, 0.5% 58%, 1.2% 55%, 0.8% 52%, 1% 48%, 0.5% 45%, 
                        1.2% 42%, 0.7% 38%, 1% 35%, 0.5% 32%, 1.5% 28%, 0.8% 25%, 1% 22%, 0.5% 18%, 
                        1.2% 15%, 0.7% 12%, 1% 8%, 0.5% 5%, 1.2% 2%
                      )`
                    }}
                  />
                </div>
              </div>
            ))}

            {/* Decorative elements */}
           
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSet}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-tape-yellow rounded-full flex items-center justify-center shadow-lg z-50"
          >
            <ChevronLeft className="w-6 h-6 text-charcoal" />
          </button>
          <button 
            onClick={nextSet}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-tape-yellow rounded-full flex items-center justify-center shadow-lg z-50"
          >
            <ChevronRight className="w-6 h-6 text-charcoal" />
          </button>

          {/* Navigation Dots */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {imageSets.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSet(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSet === index ? 'bg-tape-yellow' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const colors = ['sticky-peach', 'sticky-sky', 'sticky-lavender', 'sticky-lemon'];
            const accessories = ['paper-clip', 'push-pin', '', 'paper-clip'];
            const rotations = ['rotate-random-1', 'rotate-random-3', 'rotate-random-2', 'rotate-random-4'];
            
            return (
              <div key={index} className={`${colors[index]} ${accessories[index]} ${rotations[index]} p-6`}>
                <Card className="border-none shadow-none bg-transparent p-0">
                  <div className="text-center">
                    <div className={`inline-flex p-3 rounded-full bg-charcoal/10 mb-4 ${stat.color}`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div className="text-3xl font-bold text-charcoal mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-charcoal/70 mb-2">
                      {stat.label}
                    </div>
                    <div className={`text-sm font-semibold ${stat.color}`}>
                      {stat.change}
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GrowthShowcase;