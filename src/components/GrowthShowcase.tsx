import { TrendingUp, Users, Eye, MessageCircle, BarChart3, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import banner1 from "/results/banner1.png";
import mellanda from "/results/mellanda.png";

const GrowthShowcase = () => {
  const [currentSet, setCurrentSet] = useState(0);
  const [slideDirection, setSlideDirection] = useState('right');
  
  const analyticsData = [
    // Set 1
    {
      main: banner1,
      metrics: [
        { title: "Subscriber Growth", value: "+2.5M", subtitle: "Last 6 Months", color: "bg-sticky-peach" },
        { title: "Watch Time", value: "47M hrs", subtitle: "Total Hours", color: "bg-sticky-sky" },
        { title: "Engagement Rate", value: "12.8%", subtitle: "Avg. Per Video", color: "bg-sticky-lavender" },
        { title: "Revenue", value: "$2.1M", subtitle: "This Quarter", color: "bg-sticky-lemon" }
      ]
    },
    // Set 2
    {
      main: mellanda,
      metrics: [
        { title: "Video Uploads", value: "156", subtitle: "This Year", color: "bg-sticky-sky" },
        { title: "Avg. View Duration", value: "8.2 min", subtitle: "Per Session", color: "bg-sticky-lemon" },
        { title: "Click-Through Rate", value: "15.3%", subtitle: "Thumbnail CTR", color: "bg-sticky-peach" },
        { title: "Comments", value: "89K", subtitle: "Total Interactions", color: "bg-sticky-lavender" }
      ]
    },
    // Set 3
    {
      main: banner1,
      metrics: [
        { title: "Viral Videos", value: "23", subtitle: "Over 1M Views", color: "bg-sticky-lavender" },
        { title: "Retention Rate", value: "78%", subtitle: "Avg. Retention", color: "bg-sticky-peach" },
        { title: "Shares", value: "145K", subtitle: "Social Shares", color: "bg-sticky-sky" },
        { title: "ROI", value: "400%", subtitle: "Investment Return", color: "bg-sticky-lemon" }
      ]
    }
  ];

  const nextSet = () => {
    setSlideDirection('right');
    setCurrentSet((prev) => (prev + 1) % analyticsData.length);
  };

  const prevSet = () => {
    setSlideDirection('left');
    setCurrentSet((prev) => (prev - 1 + analyticsData.length) % analyticsData.length);
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

  const positions = ["-top-20 -left-16", "-top-12 -right-12", "bottom-12 -left-24", "-bottom-12 -right-20"];
  const rotations = ["-5deg", "5deg", "-6deg", "6deg"];
  const delays = ["0s", "0.5s", "1s", "1.5s"];

  return (
    <section className="py-12 px-4 relative overflow-hidden">
      {/* Hand-drawn analytics styles with animations */}
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
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-6deg); }
          50% { transform: translateY(-20px) rotate(-6deg); }
        }
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(3deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(6deg); }
          50% { transform: translateY(-20px) rotate(6deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(-3deg); }
          50% { transform: translateY(-20px) rotate(-3deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 107, 107, 0.3); }
          50% { box-shadow: 0 0 30px rgba(255, 107, 107, 0.6); }
        }
        @keyframes draw-line {
          from { stroke-dashoffset: 1000; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes count-up {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-6deg); }
          25% { transform: rotate(-4deg); }
          75% { transform: rotate(-8deg); }
        }
        @keyframes wiggle-1 {
          0%, 100% { transform: rotate(3deg); }
          25% { transform: rotate(5deg); }
          75% { transform: rotate(1deg); }
        }
        @keyframes wiggle-2 {
          0%, 100% { transform: rotate(6deg); }
          25% { transform: rotate(8deg); }
          75% { transform: rotate(4deg); }
        }
        @keyframes wiggle-3 {
          0%, 100% { transform: rotate(-3deg); }
          25% { transform: rotate(-1deg); }
          75% { transform: rotate(-5deg); }
        }
        @keyframes slide-in-left {
          from { transform: translateX(-20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slide-in-right {
          from { transform: translateX(20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .analytics-card {
          animation: float 6s ease-in-out infinite;
        }
        .analytics-card:nth-child(2) {
          animation: float-1 6s ease-in-out infinite;
        }
        .analytics-card:nth-child(3) {
          animation: float-2 6s ease-in-out infinite;
        }
        .analytics-card:nth-child(4) {
          animation: float-3 6s ease-in-out infinite;
        }
        .analytics-card:hover {
          animation: float 6s ease-in-out infinite, wiggle 0.5s ease-in-out;
        }
        .analytics-card:nth-child(2):hover {
          animation: float-1 6s ease-in-out infinite, wiggle-1 0.5s ease-in-out;
        }
        .analytics-card:nth-child(3):hover {
          animation: float-2 6s ease-in-out infinite, wiggle-2 0.5s ease-in-out;
        }
        .analytics-card:nth-child(4):hover {
          animation: float-3 6s ease-in-out infinite, wiggle-3 0.5s ease-in-out;
        }
        .sketch-border {
          filter: drop-shadow(3px 3px 8px rgba(0,0,0,0.15));
        }
      `}</style>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12">
          <div className="sticky-mint  paper-clip rotate-random-1 p-8 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Real Results for 
              <span className="text-coral-accent"> Real Clients</span>
            </h2>
            <p className="text-xl text-charcoal/70">
              We don't just edit videos—we engineer viral content that drives measurable growth
            </p>
          </div>
        </div>

        {/* Scattered analytics showcase */}
        <div className="relative min-h-[400px] mb-12">
          <div 
            key={currentSet}
            className="relative transition-all duration-500 ease-in-out transform"
          >
            {/* Main central image */}
            <div className="max-w-4xl mx-auto z-10 relative">
              <div className="overflow-visible relative group bg-transparent image-container no-bg">
                <img 
                  src={analyticsData[currentSet].main}
                  alt="YouTube growth analytics dashboard"
                  className={`w-full h-full object-cover bg-transparent image-fix ${slideDirection === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left'}`}
                  style={{
                    // clipPath: `polygon(
                    //   2% 1%, 5% 0.5%, 8% 1.5%, 12% 0.8%, 15% 1.2%, 18% 0.5%, 22% 1%, 25% 0.3%, 
                    //   28% 1.5%, 32% 0.7%, 35% 1%, 38% 0.5%, 42% 1.2%, 45% 0.8%, 48% 1%, 52% 0.5%, 
                    //   55% 1.2%, 58% 0.7%, 62% 1%, 65% 0.5%, 68% 1.5%, 72% 0.8%, 75% 1%, 78% 0.5%, 
                    //   82% 1.2%, 85% 0.7%, 88% 1%, 92% 0.5%, 95% 1.2%, 98% 0.7%,
                    //   99% 5%, 99.5% 8%, 98.5% 12%, 99.2% 15%, 98.8% 18%, 99.5% 22%, 99% 25%, 
                    //   99.7% 28%, 98.5% 32%, 99.3% 35%, 99% 38%, 99.5% 42%, 98.8% 45%, 99% 48%, 
                    //   99.5% 52%, 98.8% 55%, 99.3% 58%, 99% 62%, 99.5% 65%, 98.5% 68%, 99.2% 72%, 
                    //   99% 75%, 99.5% 78%, 98.8% 82%, 99.3% 85%, 99% 88%, 99.5% 92%, 98.7% 95%, 99% 98%,
                    //   98% 99%, 95% 99.5%, 92% 98.5%, 88% 99.2%, 85% 98.8%, 82% 99.5%, 78% 99%, 
                    //   75% 99.7%, 72% 98.5%, 68% 99.3%, 65% 99%, 62% 99.5%, 58% 98.8%, 55% 99%, 
                    //   52% 99.5%, 48% 98.8%, 45% 99.3%, 42% 99%, 38% 99.5%, 35% 98.5%, 32% 99.2%, 
                    //   28% 99%, 25% 99.5%, 22% 98.8%, 18% 99.3%, 15% 99%, 12% 99.5%, 8% 98.7%, 5% 99%, 2% 98.5%,
                    //   1% 95%, 0.5% 92%, 1.5% 88%, 0.8% 85%, 1.2% 82%, 0.5% 78%, 1% 75%, 0.3% 72%, 
                    //   1.5% 68%, 0.7% 65%, 1% 62%, 0.5% 58%, 1.2% 55%, 0.8% 52%, 1% 48%, 0.5% 45%, 
                    //   1.2% 42%, 0.7% 38%, 1% 35%, 0.5% 32%, 1.5% 28%, 0.8% 25%, 1% 22%, 0.5% 18%, 
                    //   1.2% 15%, 0.7% 12%, 1% 8%, 0.5% 5%, 1.2% 2%
                    // )`,
                    filter: 'contrast(1.05) brightness(0.98)',
                  }}
                />
              </div>
            </div>

            {/* Animated Analytics Cards - TURNED OFF AS REQUESTED */}
            {/* 
            {analyticsData[currentSet].metrics.map((analytic, index) => (
              <div
                key={index}
                className={`w-72 absolute ${positions[index]} analytics-card sketch-border`}
                style={{ 
                  animationDelay: delays[index]
                } as React.CSSProperties}
              >
                <div className={`${analytic.color} p-6 relative overflow-hidden`}
                  style={{
                    clipPath: `polygon(
                      2% 1%, 8% 0.5%, 15% 1.2%, 22% 0.7%, 28% 1.5%, 35% 0.8%, 42% 1%, 48% 0.5%, 
                      55% 1.2%, 62% 0.7%, 68% 1.5%, 75% 0.8%, 82% 1.2%, 88% 0.5%, 95% 1%, 98% 0.7%,
                      99% 8%, 99.5% 15%, 98.8% 22%, 99.2% 28%, 98.7% 35%, 99.3% 42%, 98.8% 48%, 
                      99.5% 55%, 98.7% 62%, 99.2% 68%, 98.8% 75%, 99.3% 82%, 98.7% 88%, 99% 95%,
                      98% 99%, 92% 99.5%, 85% 98.8%, 78% 99.2%, 72% 98.7%, 65% 99.3%, 58% 98.8%, 
                      52% 99.5%, 45% 98.7%, 38% 99.2%, 32% 98.8%, 25% 99.3%, 18% 98.7%, 12% 99%, 5% 98.5%,
                      1% 92%, 0.5% 85%, 1.2% 78%, 0.8% 72%, 1.5% 65%, 0.7% 58%, 1.2% 52%, 
                      0.5% 45%, 1.3% 38%, 0.8% 32%, 1% 25%, 0.7% 18%, 1.2% 12%, 0.8% 5%
                    )`
                  }}
                >
                  {/* Hand-drawn border effect */}
                  {/* <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: 'blur(0.5px)' }}>
                    <rect
                      x="3"
                      y="3"
                      width="calc(100% - 6px)"
                      height="calc(100% - 6px)"
                      fill="none"
                      stroke="#2C3E50"
                      strokeWidth="2"
                      strokeDasharray="5,3"
                      strokeLinecap="round"
                      style={{
                        strokeDashoffset: 1000,
                        animation: 'draw-line 2s ease-out forwards',
                        animationDelay: delays[index]
                      }}
                    />
                  </svg>

                  <div className="relative z-10">
                    <div className="text-sm font-bold text-charcoal/60 mb-2 uppercase tracking-wide">
                      {analytic.title}
                    </div>
                    <div 
                      className="text-4xl font-black text-charcoal mb-1"
                      style={{
                        animation: 'count-up 0.8s ease-out forwards',
                        animationDelay: `calc(${delays[index]} + 0.3s)`
                      }}
                    >
                      {analytic.value}
                    </div>
                    <div className="text-xs font-medium text-charcoal/50">
                      {analytic.subtitle}
                    </div>

                    {/* Mini trend line */}
                    {/* <svg className="w-full h-12 mt-3" viewBox="0 0 100 30">
                      <path
                        d={`M 0,${25 - (index * 3)} Q 25,${20 - (index * 2)} 50,${15 - index} T 100,${10 - (index * 2)}`}
                        fill="none"
                        stroke="#FF6B6B"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeDasharray="200"
                        style={{
                          strokeDashoffset: 200,
                          animation: 'draw-line 1.5s ease-out forwards',
                          animationDelay: `calc(${delays[index]} + 0.5s)`,
                          filter: 'drop-shadow(0 2px 4px rgba(255,107,107,0.3))'
                        }}
                      />
                      {/* Dots on the line */}
                      {/* {[0, 33, 66, 100].map((x, i) => (
                        <circle
                          key={i}
                          cx={x}
                          cy={25 - (index * 3) - (i * 3)}
                          r="2.5"
                          fill="#FF6B6B"
                          style={{
                            animation: 'count-up 0.5s ease-out forwards',
                            animationDelay: `calc(${delays[index]} + ${0.7 + i * 0.1}s)`,
                            transformOrigin: `${x}px ${25 - (index * 3) - (i * 3)}px`
                          }}
                        />
                      ))}
                    </svg>
                  </div>

                  {/* Paper texture overlay */}
                  {/* <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                      backgroundImage: `repeating-linear-gradient(
                        0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px
                      )`
                    }}
                  />
                </div>
              </div>
            ))} */}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSet}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-tape-yellow rounded-full flex items-center justify-center shadow-lg z-50 hover:scale-110 transition-transform"
          >
            <ChevronLeft className="w-6 h-6 text-charcoal" />
          </button>
          <button 
            onClick={nextSet}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-tape-yellow rounded-full flex items-center justify-center shadow-lg z-50 hover:scale-110 transition-transform"
          >
            <ChevronRight className="w-6 h-6 text-charcoal" />
          </button>

          {/* Navigation Dots */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {analyticsData.map((_, index) => (
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