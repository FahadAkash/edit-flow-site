import { TrendingUp, Users, Eye, MessageCircle, BarChart3, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import youtubeGrowth from "/results/banner1.png";

const GrowthShowcase = () => {
  const [currentSet, setCurrentSet] = useState(0);
  
  // Define analytics data instead of image sets with meaningful information
  const analyticsSets = [
    // Set 1 - YouTube Growth Focus
    {
      main: youtubeGrowth,
      analytics: [
        { 
          type: "bar", 
          title: "Subscriber Growth",
          data: [150, 220, 350, 580, 920, 1450, 2500], 
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          position: { top: "-2.5rem", left: "-2rem" }, 
          rotate: "-rotate-6",
          color: "bg-coral-accent"
        },
        { 
          type: "line", 
          title: "View Retention %",
          data: [30, 45, 50, 60, 55, 70, 80], 
          labels: ["10s", "20s", "30s", "40s", "50s", "60s", "70s"],
          position: { top: "5rem", right: "-1rem" }, 
          rotate: "rotate-3",
          color: "bg-tape-yellow"
        },
        { 
          type: "pie", 
          title: "Content Type",
          segments: [40, 30, 20, 10], 
          labels: ["Tutorials", "Reviews", "Vlogs", "Shorts"],
          position: { bottom: "0", left: "-3rem" }, 
          rotate: "rotate-6",
          colors: ["bg-coral-accent", "bg-tape-yellow", "bg-primary", "bg-charcoal"]
        },
        { 
          type: "area", 
          title: "Watch Time (hrs)",
          data: [200, 350, 400, 500, 450, 600, 700], 
          labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7"],
          position: { bottom: "2.5rem", right: "-2rem" }, 
          rotate: "-rotate-3",
          color: "bg-primary"
        }
      ]
    },
    // Set 2 - Engagement Focus
    {
      main: youtubeGrowth,
      analytics: [
        { 
          type: "bar", 
          title: "Monthly Views",
          data: [4500, 7200, 12500, 18900, 25600, 32100, 47000], 
          labels: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb"],
          position: { top: "-2rem", right: "-2.5rem" }, 
          rotate: "rotate-6",
          color: "bg-tape-yellow"
        },
        { 
          type: "line", 
          title: "Avg. Watch Time",
          data: [25, 40, 45, 55, 50, 65, 75], 
          labels: ["V1", "V2", "V3", "V4", "V5", "V6", "V7"],
          position: { top: "4rem", left: "-2rem" }, 
          rotate: "-rotate-4",
          color: "bg-coral-accent"
        },
        { 
          type: "pie", 
          title: "Audience Demographics",
          segments: [35, 35, 20, 10], 
          labels: ["18-24", "25-34", "35-44", "45+"],
          position: { bottom: "1rem", right: "-3rem" }, 
          rotate: "-rotate-6",
          colors: ["bg-tape-yellow", "bg-coral-accent", "bg-primary", "bg-charcoal"]
        },
        { 
          type: "area", 
          title: "Earnings ($)",
          data: [1500, 3000, 3500, 4500, 4000, 5500, 6500], 
          labels: ["M1", "M2", "M3", "M4", "M5", "M6", "M7"],
          position: { bottom: "3rem", left: "-1.5rem" }, 
          rotate: "rotate-3",
          color: "bg-coral-accent"
        }
      ]
    },
    // Set 3 - Performance Focus
    {
      main: youtubeGrowth,
      analytics: [
        { 
          type: "bar", 
          title: "Subscribers Gained",
          data: [5500, 7500, 9800, 12500, 15600, 18900, 25000], 
          labels: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
          position: { top: "-3rem", left: "25%" }, 
          rotate: "-rotate-3",
          color: "bg-primary"
        },
        { 
          type: "line", 
          title: "Engagement Rate %",
          data: [35, 50, 55, 65, 60, 75, 85], 
          labels: ["E1", "E2", "E3", "E4", "E5", "E6", "E7"],
          position: { top: "6rem", right: "25%" }, 
          rotate: "rotate-6",
          color: "bg-tape-yellow"
        },
        { 
          type: "pie", 
          title: "Traffic Sources",
          segments: [30, 40, 20, 10], 
          labels: ["Suggested", "Search", "External", "Direct"],
          position: { bottom: "2rem", left: "33%" }, 
          rotate: "-rotate-6",
          colors: ["bg-primary", "bg-coral-accent", "bg-tape-yellow", "bg-charcoal"]
        },
        { 
          type: "area", 
          title: "Impressions",
          data: [25000, 40000, 45000, 55000, 50000, 65000, 75000], 
          labels: ["D1", "D2", "D3", "D4", "D5", "D6", "D7"],
          position: { bottom: "4rem", right: "33%" }, 
          rotate: "rotate-4",
          color: "bg-coral-accent"
        }
      ]
    }
  ];

  const nextSet = () => {
    setCurrentSet((prev) => (prev + 1) % analyticsSets.length);
  };

  const prevSet = () => {
    setCurrentSet((prev) => (prev - 1 + analyticsSets.length) % analyticsSets.length);
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

  // Function to render hand-drawn bar chart
  const renderBarChart = (data: number[], color: string, title: string, labels: string[]) => {
    return (
      <div className="flex flex-col h-full">
        <div className="text-xs font-bold text-charcoal p-1 text-center">{title}</div>
        <div className="flex items-end h-full gap-1 p-2 flex-grow">
          {data.map((value, index) => (
            <div 
              key={index} 
              className={`${color} w-3 rounded-t-sm relative group transition-all duration-500 ease-out hover:scale-110`}
              style={{ 
                height: `${(value / Math.max(...data)) * 80 + 10}%`,
                transform: `rotate(${Math.random() * 4 - 2}deg)`,
                animation: `growUp 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-charcoal whitespace-nowrap">
                {value >= 1000 ? `${(value/1000).toFixed(1)}k` : value}
              </div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-charcoal/70 whitespace-nowrap">
                {labels[index]}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Function to render hand-drawn line chart
  const renderLineChart = (data: number[], color: string, title: string, labels: string[]) => {
    // Create SVG path for line chart
    let pathData = "";
    let points = "";
    
    data.forEach((value, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = 100 - (value / Math.max(...data)) * 80 - 10;
      
      if (index === 0) {
        pathData += `M ${x} ${y} `;
      } else {
        pathData += `L ${x} ${y} `;
      }
      
      points += `${x},${y} `;
    });
    
    return (
      <div className="flex flex-col h-full">
        <div className="text-xs font-bold text-charcoal p-1 text-center">{title}</div>
        <div className="w-full h-full p-2 flex-grow">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Grid lines */}
            {[0, 25, 50, 75, 100].map((y, i) => (
              <line 
                key={i} 
                x1="0" 
                y1={y} 
                x2="100" 
                y2={y} 
                stroke="#e5e5e5" 
                strokeWidth="0.5" 
                strokeDasharray="2,2"
              />
            ))}
            
            {/* Line path */}
            <path 
              d={pathData} 
              fill="none" 
              stroke={`hsl(${color === 'bg-coral-accent' ? '6, 93%, 71%' : color === 'bg-tape-yellow' ? '356, 83%, 41%' : '0, 0%, 10%'})`} 
              strokeWidth="2" 
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                strokeDasharray: 100,
                strokeDashoffset: 100,
                animation: `drawLine 1s ease-out ${0.3}s forwards`
              }}
            />
            
            {/* Data points */}
            {data.map((value, index) => {
              const x = (index / (data.length - 1)) * 100;
              const y = 100 - (value / Math.max(...data)) * 80 - 10;
              return (
                <circle 
                  key={index} 
                  cx={x} 
                  cy={y} 
                  r="2" 
                  fill={`hsl(${color === 'bg-coral-accent' ? '6, 93%, 71%' : color === 'bg-tape-yellow' ? '356, 83%, 41%' : '0, 0%, 10%'})`}
                  style={{
                    animation: `popIn 0.3s ease-out ${0.5 + index * 0.1}s both`
                  }}
                >
                  <title>{value}{title.includes('%') ? '%' : ''}</title>
                </circle>
              );
            })}
            
            {/* X-axis labels */}
            {labels.map((label, index) => {
              const x = (index / (labels.length - 1)) * 100;
              return (
                <text 
                  key={index}
                  x={x} 
                  y="100" 
                  textAnchor="middle" 
                  fontSize="3" 
                  fill="hsl(0, 0%, 10%)"
                  className="text-charcoal/70"
                >
                  {label}
                </text>
              );
            })}
          </svg>
        </div>
      </div>
    );
  };

  // Function to render hand-drawn pie chart
  const renderPieChart = (segments: number[], colors: string[], title: string, labels: string[]) => {
    let cumulativePercentage = 0;
    const radius = 35;
    const centerX = 50;
    const centerY = 45;
    
    return (
      <div className="flex flex-col h-full">
        <div className="text-xs font-bold text-charcoal p-1 text-center">{title}</div>
        <div className="w-full h-full flex items-center justify-center p-2 flex-grow">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {segments.map((percentage, index) => {
              const startAngle = (cumulativePercentage / 100) * 360;
              cumulativePercentage += percentage;
              const endAngle = (cumulativePercentage / 100) * 360;
              
              // Convert angles to radians
              const startAngleRad = (startAngle - 90) * Math.PI / 180;
              const endAngleRad = (endAngle - 90) * Math.PI / 180;
              
              // Calculate start and end points
              const startX = centerX + radius * Math.cos(startAngleRad);
              const startY = centerY + radius * Math.sin(startAngleRad);
              const endX = centerX + radius * Math.cos(endAngleRad);
              const endY = centerY + radius * Math.sin(endAngleRad);
              
              // Determine if large arc is needed
              const largeArcFlag = percentage > 50 ? 1 : 0;
              
              // Create path data
              const pathData = `M ${centerX} ${centerY} L ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY} Z`;
              
              return (
                <g key={index}>
                  <path 
                    d={pathData}
                    fill={`hsl(${colors[index] === 'bg-coral-accent' ? '6, 93%, 71%' : 
                          colors[index] === 'bg-tape-yellow' ? '356, 83%, 41%' : 
                          colors[index] === 'bg-primary' ? '356, 83%, 41%' : '0, 0%, 10%'})`}
                    stroke="white"
                    strokeWidth="1"
                    style={{
                      transform: `rotate(${Math.random() * 4 - 2}deg)`,
                      transformOrigin: "center",
                      animation: `fadeIn 0.5s ease-out ${index * 0.2}s both`
                    }}
                  />
                  <text
                    x={(startX + endX) / 2}
                    y={(startY + endY) / 2}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="4"
                    fontWeight="bold"
                    fill="white"
                  >
                    {percentage}%
                  </text>
                </g>
              );
            })}
            
            {/* Legend */}
            {labels.map((label, index) => (
              <g key={index}>
                <rect 
                  x="5" 
                  y={70 + index * 6} 
                  width="4" 
                  height="4" 
                  fill={`hsl(${colors[index] === 'bg-coral-accent' ? '6, 93%, 71%' : 
                        colors[index] === 'bg-tape-yellow' ? '356, 83%, 41%' : 
                        colors[index] === 'bg-primary' ? '356, 83%, 41%' : '0, 0%, 10%'})`}
                />
                <text 
                  x="10" 
                  y={73 + index * 6} 
                  fontSize="3" 
                  fill="hsl(0, 0%, 10%)"
                  className="text-charcoal"
                >
                  {label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    );
  };

  // Function to render hand-drawn area chart
  const renderAreaChart = (data: number[], color: string, title: string, labels: string[]) => {
    // Create SVG path for area chart
    let pathData = "";
    let points = "";
    
    data.forEach((value, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = 100 - (value / Math.max(...data)) * 80 - 10;
      
      if (index === 0) {
        pathData += `M ${x} 100 L ${x} ${y} `;
      } else {
        pathData += `L ${x} ${y} `;
      }
      
      points += `${x},${y} `;
    });
    
    // Close the path
    pathData += `L 100 100 Z`;
    
    return (
      <div className="flex flex-col h-full">
        <div className="text-xs font-bold text-charcoal p-1 text-center">{title}</div>
        <div className="w-full h-full p-2 flex-grow">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Grid lines */}
            {[0, 25, 50, 75, 100].map((y, i) => (
              <line 
                key={i} 
                x1="0" 
                y1={y} 
                x2="100" 
                y2={y} 
                stroke="#e5e5e5" 
                strokeWidth="0.5" 
                strokeDasharray="2,2"
              />
            ))}
            
            {/* Area path */}
            <path 
              d={pathData} 
              fill={`hsl(${color === 'bg-coral-accent' ? '6, 93%, 71%, 0.3' : 
                         color === 'bg-tape-yellow' ? '356, 83%, 41%, 0.3' : 
                         color === 'bg-primary' ? '356, 83%, 41%, 0.3' : '0, 0%, 10%, 0.3'})`}
              stroke={`hsl(${color === 'bg-coral-accent' ? '6, 93%, 71%' : 
                           color === 'bg-tape-yellow' ? '356, 83%, 41%' : 
                           color === 'bg-primary' ? '356, 83%, 41%' : '0, 0%, 10%'})`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                strokeDasharray: 200,
                strokeDashoffset: 200,
                animation: `drawLine 1.2s ease-out forwards`
              }}
            />
            
            {/* Line path */}
            <path 
              d={pathData.split('L')[0] + ' ' + pathData.split('L').slice(1).join('L').split('L')[0] + ' ' + pathData.split('L').slice(2).join('L').replace(' Z', '')} 
              fill="none" 
              stroke={`hsl(${color === 'bg-coral-accent' ? '6, 93%, 71%' : 
                           color === 'bg-tape-yellow' ? '356, 83%, 41%' : 
                           color === 'bg-primary' ? '356, 83%, 41%' : '0, 0%, 10%'})`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                strokeDasharray: 100,
                strokeDashoffset: 100,
                animation: `drawLine 1s ease-out 0.3s forwards`
              }}
            />
            
            {/* Data points */}
            {data.map((value, index) => {
              const x = (index / (data.length - 1)) * 100;
              const y = 100 - (value / Math.max(...data)) * 80 - 10;
              return (
                <circle 
                  key={index} 
                  cx={x} 
                  cy={y} 
                  r="2" 
                  fill={`hsl(${color === 'bg-coral-accent' ? '6, 93%, 71%' : 
                               color === 'bg-tape-yellow' ? '356, 83%, 41%' : 
                               color === 'bg-primary' ? '356, 83%, 41%' : '0, 0%, 10%'})`}
                  style={{
                    animation: `popIn 0.3s ease-out ${0.5 + index * 0.1}s both`
                  }}
                >
                  <title>{value}{title.includes('$') ? '$' : title.includes('hrs') ? 'hrs' : ''}</title>
                </circle>
              );
            })}
            
            {/* X-axis labels */}
            {labels.map((label, index) => {
              const x = (index / (labels.length - 1)) * 100;
              return (
                <text 
                  key={index}
                  x={x} 
                  y="100" 
                  textAnchor="middle" 
                  fontSize="3" 
                  fill="hsl(0, 0%, 10%)"
                  className="text-charcoal/70"
                >
                  {label}
                </text>
              );
            })}
          </svg>
        </div>
      </div>
    );
  };

  return (
    <section className="py-12 px-4 relative overflow-hidden">
      {/* Enhanced styles with animations */}
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
        @keyframes growUp {
          from {
            height: 0;
            opacity: 0;
          }
          to {
            height: var(--final-height);
            opacity: 1;
          }
        }
        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes popIn {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          70% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(1deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
        .float-animation {
          animation: float 4s ease-in-out infinite;
        }
        .float-delay-1 {
          animation-delay: 0.5s;
        }
        .float-delay-2 {
          animation-delay: 1s;
        }
        .float-delay-3 {
          animation-delay: 1.5s;
        }
        .hand-drawn-border {
          position: relative;
          background: transparent !important;
        }
        .hand-drawn-border::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 2px solid;
          border-radius: 8px;
          border-color: inherit;
          transform: rotate(0.5deg);
          pointer-events: none;
        }
        .analytics-container {
          position: absolute;
          width: 16rem; /* w-64 = 16rem */
          transform-origin: center;
          background: transparent !important;
        }
        .chart-container {
          background: transparent !important;
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

        {/* Analytics showcase */}
        <div className="relative min-h-[600px] mb-12">
          <div 
            key={currentSet}
            className="relative w-full h-full"
          >
            {/* Analytics visualizations - placed behind main image */}
            

            {/* Main central image - placed in front */}
            <div className="max-w-4xl mx-auto z-10 relative">
              <div className="w-full h-full overflow-visible relative group bg-transparent image-container no-bg">
                <img 
                  src={analyticsSets[currentSet].main}
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

            {/* Decorative elements */}
           
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
            {analyticsSets.map((_, index) => (
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