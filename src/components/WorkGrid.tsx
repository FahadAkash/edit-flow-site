import { useState } from "react";
import { Play, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type VideoItem = {
  id: number;
  title: string;
  thumbnail: string;
  category: string;
  duration: string;
  client: string;
  type: string;
  videoUrl?: string;
  clientMessage?: string;
  clientLogo?: string;
  rating?: number;
};

const WorkGrid = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("shorts");

  const workItems: Record<'youtube' | 'shorts' | 'saas' | 'ads', VideoItem[]> = {
    youtube: [
      {
        id: 1,
        title: "Drake vs. Universal Music Group: The Legal Battle That Could Change the Music Industry",
        thumbnail: "https://img.youtube.com/vi/eOt0VgC8tks/maxresdefault.jpg",
        category: "Documentary",
        duration: "10:00",
        client: "Music Industry",
        type: "youtube",
        videoUrl: "https://www.youtube.com/watch?v=eOt0VgC8tks",
        clientMessage: "An in-depth look at the legal battle.",
        clientLogo: "/brands/01HZPHHYKN7PRCHF92X9KV8BPG.png",
        rating: 5
      },
      {
        id: 2,
        title: "💰Is Sales the Perfect Career for YOU? Career Deep Dive",
        thumbnail: "https://img.youtube.com/vi/2iQ6clokEPo/maxresdefault.jpg",
        category: "Career",
        duration: "15:30",
        client: "Career Guide",
        type: "youtube",
        videoUrl: "https://www.youtube.com/watch?v=2iQ6clokEPo",
        clientMessage: "Helping people decide on their career path.",
        clientLogo: "/brands/1667599512761.png",
        rating: 5
      },
      {
        id: 3,
        title: "Trading Premium",
        thumbnail: "https://img.youtube.com/vi/u_12sSli1Uk/maxresdefault.jpg",
        category: "Finance",
        duration: "8:45",
        client: "Trading Pro",
        type: "youtube",
        videoUrl: "https://www.youtube.com/watch?v=u_12sSli1Uk",
        clientMessage: "Expert trading advice.",
        clientLogo: "/brands/acer-predator-logo-png_seeklogo-441422.png",
        rating: 4
      },
      {
        id: 4,
        title: "Broke to $75,000 week Easy Blueprint",
        thumbnail: "https://img.youtube.com/vi/sC8ydMWDSUM/maxresdefault.jpg",
        category: "Business",
        duration: "12:20",
        client: "Entrepreneur",
        type: "youtube",
        videoUrl: "https://www.youtube.com/watch?v=sC8ydMWDSUM",
        clientMessage: "A blueprint for success.",
        clientLogo: "/brands/DC_Logo_1640x624-d44ea81f-a7d0-4746-b50e-399afa2a81c9.png",
        rating: 5
      },
      {
        id: 5,
        title: "Video 4",
        thumbnail: "https://img.youtube.com/vi/uHJD-18kEXg/maxresdefault.jpg",
        category: "Portfolio",
        duration: "5:00",
        client: "Client Work",
        type: "youtube",
        videoUrl: "https://www.youtube.com/watch?v=uHJD-18kEXg",
        clientMessage: "Showcasing video editing skills.",
        clientLogo: "/brands/Logo_Blackberry_Large_a979164e-916a-4c09-bbac-51df3d96f65a_1200x1200.png",
        rating: 4
      },
      {
        id: 6,
        title: "AMG Recording CAM 5 06",
        thumbnail: "https://img.youtube.com/vi/tCVEG4oXaUM/maxresdefault.jpg",
        category: "Production",
        duration: "3:15",
        client: "AMG",
        type: "youtube",
        videoUrl: "https://www.youtube.com/watch?v=tCVEG4oXaUM",
        clientMessage: "Behind the scenes footage.",
        clientLogo: "/brands/01HZPHHYKN7PRCHF92X9KV8BPG.png",
        rating: 5
      },
      {
        id: 7,
        title: "Video 5",
        thumbnail: "https://img.youtube.com/vi/jzrb54hJBBQ/maxresdefault.jpg",
        category: "Portfolio",
        duration: "4:30",
        client: "Client Work",
        type: "youtube",
        videoUrl: "https://www.youtube.com/watch?v=jzrb54hJBBQ",
        clientMessage: "Another example of great editing.",
        clientLogo: "/brands/1667599512761.png",
        rating: 5
      },
      {
        id: 8,
        title: "5 Boring Business",
        thumbnail: "https://img.youtube.com/vi/iyCTu_EpD2E/maxresdefault.jpg",
        category: "Business",
        duration: "11:10",
        client: "Biz Insider",
        type: "youtube",
        videoUrl: "https://www.youtube.com/watch?v=iyCTu_EpD2E",
        clientMessage: "Uncovering profitable boring businesses.",
        clientLogo: "/brands/acer-predator-logo-png_seeklogo-441422.png",
        rating: 4
      },
      {
        id: 9,
        title: "What Is HEDIS",
        thumbnail: "https://img.youtube.com/vi/BcuPrB26k5c/maxresdefault.jpg",
        category: "Healthcare",
        duration: "6:50",
        client: "HealthOrg",
        type: "youtube",
        videoUrl: "https://www.youtube.com/watch?v=BcuPrB26k5c",
        clientMessage: "Explaining complex healthcare topics.",
        clientLogo: "/brands/DC_Logo_1640x624-d44ea81f-a7d0-4746-b50e-399afa2a81c9.png",
        rating: 5
      },
      {
        id: 10,
        title: "How TicketMaster and Live Nation’s Dominance Hurts Fans and Artists",
        thumbnail: "https://img.youtube.com/vi/K7Wfih1vK00/maxresdefault.jpg",
        category: "Documentary",
        duration: "14:20",
        client: "Music News",
        type: "youtube",
        videoUrl: "https://www.youtube.com/watch?v=K7Wfih1vK00",
        clientMessage: "Investigative journalism piece.",
        clientLogo: "/brands/Logo_Blackberry_Large_a979164e-916a-4c09-bbac-51df3d96f65a_1200x1200.png",
        rating: 5
      }
    ],
    shorts: [
      {
        id: 11,
        title: "Quick CSS Tip",
        thumbnail: "https://img.youtube.com/vi/dRfEYs-SFPE/maxresdefault.jpg",
        category: "Tips",
        duration: "0:45",
        client: "WebDev Pro",
        type: "short",
        videoUrl: "https://www.youtube.com/watch?v=dRfEYs-SFPE",
        clientMessage: "Short and impactful!",
        clientLogo: "/brands/DC_Logo_1640x624-d44ea81f-a7d0-4746-b50e-399afa2a81c9.png",
        rating: 5
      },
      {
        id: 12,
        title: "JavaScript Hack",
        thumbnail: "https://img.youtube.com/vi/CSw91MyV5Ig/maxresdefault.jpg",
        category: "Coding",
        duration: "0:58",
        client: "Code Ninja",
        type: "short",
        videoUrl: "https://www.youtube.com/watch?v=CSw91MyV5Ig",
        clientMessage: "Saved us hours of development time",
        clientLogo: "/brands/Logo_Blackberry_Large_a979164e-916a-4c09-bbac-51df3d96f65a_1200x1200.png",
        rating: 4
      },
      {
        id: 13,
        title: "Design in 60 Seconds",
        thumbnail: "https://img.youtube.com/vi/9EoL1YkEIG8/maxresdefault.jpg",
        category: "Design",
        duration: "1:00",
        client: "Design Studio",
        type: "short",
        videoUrl: "https://www.youtube.com/watch?v=9EoL1YkEIG8",
        clientMessage: "Beautiful visuals and clear instructions",
        clientLogo: "/brands/01HZPHHYKN7PRCHF92X9KV8BPG.png",
        rating: 5
      },
      
    ],
    saas: [
      {
        id: 14,
        title: "SaaS Dashboard Demo",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        category: "Demo",
        duration: "3:45",
        client: "SaaS Company",
        type: "saas",
        clientMessage: "Our conversion rate increased by 150% after this demo",
        clientLogo: "/brands/1667599512761.png",
        rating: 5
      },
      {
        id: 15,
        title: "Product Walkthrough",
        thumbnail: "https://img.youtube.com/vi/w7ejDZ8SWv8/maxresdefault.jpg",
        category: "Product",
        duration: "5:20",
        client: "StartupXYZ",
        type: "saas",
        clientMessage: "Customers understand our product 3x faster now",
        clientLogo: "/brands/acer-predator-logo-png_seeklogo-441422.png",
        rating: 4
      }
    ],
    ads: [
      {
        id: 16,
        title: "Facebook Ad Campaign",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        category: "Advertisement",
        duration: "0:30",
        client: "Ad Agency",
        type: "ad",
        clientMessage: "ROAS increased by 400% with this ad",
        clientLogo: "/brands/DC_Logo_1640x624-d44ea81f-a7d0-4746-b50e-399afa2a81c9.png",
        rating: 5
      },
      {
        id: 17,
        title: "VSL for E-commerce",
        thumbnail: "https://img.youtube.com/vi/w7ejDZ8SWv8/maxresdefault.jpg",
        category: "VSL",
        duration: "2:15",
        client: "E-commerce Brand",
        type: "ad",
        clientMessage: "Sales increased by 300% in the first month",
        clientLogo: "/brands/Logo_Blackberry_Large_a979164e-916a-4c09-bbac-51df3d96f65a_1200x1200.png",
        rating: 5
      }
    ]
  };

  const tabs = [
    { id: "youtube", label: "Youtube Videos" },
    { id: "shorts", label: "Shorts" },
    { id: "saas", label: "SAAS Videos" },
    { id: "ads", label: "Ad Creatives & VSL" }
  ];

  const getCurrentItems = () => {
    return workItems[activeTab] || [];
  };

  const openModal = (id: number) => {
    setSelectedVideo(id);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  const getSelectedVideo = () => {
    const allItems = [...workItems.youtube, ...workItems.shorts, ...workItems.saas, ...workItems.ads];
    return allItems.find(item => item.id === selectedVideo);
  };

  const isShorts = activeTab === "shorts";

  // Star rating component
  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  // current selected video object (typed)
  const selected: VideoItem | undefined = getSelectedVideo();

  return (
    <>
      <style>{`
        .paper-texture {
          background-color: #f7f6f4;
          background-image: 
            radial-gradient(circle at 25px 25px, rgba(139, 69, 19, 0.1) 2%, transparent 2%),
            radial-gradient(circle at 75px 75px, rgba(139, 69, 19, 0.08) 1%, transparent 1%),
            radial-gradient(circle at 100px 50px, rgba(160, 82, 45, 0.06) 1%, transparent 1%);
          background-size: 100px 100px, 150px 150px, 80px 80px;
        }
        
        .sketchy-border {
          border: 2px solid #2c1810;
          border-radius: 8px;
          position: relative;
          filter: drop-shadow(2px 3px 4px rgba(44, 24, 16, 0.3));
        }
        
        .sketchy-border::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border: 1px solid #8b4513;
          border-radius: 8px;
          opacity: 0.6;
        }
        
        .ink-text {
          color: #2c1810;
          font-family: 'Courier New', monospace;
          font-weight: 600;
          text-shadow: 1px 1px 0px rgba(44, 24, 16, 0.1);
        }
        
        .handwritten {
          font-family: 'Comic Sans MS', cursive, sans-serif;
          transform: rotate(-0.5deg);
        }
        
        .sketch-tab {
          background: #f9f8f6;
          border: 2px solid #5d4037;
          border-radius: 12px;
          position: relative;
          transform: rotate(0.5deg);
          transition: all 0.2s ease;
        }
        
        .sketch-tab:hover {
          transform: rotate(-0.2deg) scale(1.02);
          box-shadow: 3px 4px 8px rgba(93, 64, 55, 0.2);
        }
        
        .sketch-tab.active {
          background: #e8f4fd;
          border-color: #1976d2;
          transform: rotate(-0.3deg);
          box-shadow: 2px 3px 6px rgba(25, 118, 210, 0.3);
        }
        
        .paper-card {
          background: #fefefe;
          border: 2px solid #4a4a4a;
          border-radius: 6px;
          position: relative;
          transform: rotate(0deg);
          transition: all 0.3s ease;
          box-shadow: 3px 4px 6px rgba(74, 74, 74, 0.2);
        }
        
        .paper-card:hover {
          transform: rotate(-1deg) scale(1.02);
          box-shadow: 5px 7px 12px rgba(74, 74, 74, 0.3);
        }
        
        .ink-badge {
          background: #ff6b6b;
          color: white;
          border: 1px solid #d63031;
          font-family: 'Courier New', monospace;
          font-size: 11px;
          font-weight: bold;
          transform: rotate(-2deg);
        }
        
        .duration-badge {
          background: rgba(44, 24, 16, 0.9);
          color: #f7f6f4;
          border: 1px solid #2c1810;
          font-family: 'Courier New', monospace;
          font-size: 11px;
          transform: rotate(1deg);
        }
        
        .play-sketch {
          background: #ffd93d;
          border: 2px solid #f39c12;
          color: #2c1810;
          box-shadow: inset 0 0 0 1px #f1c40f;
        }
        
        .doodle-line {
          position: relative;
        }
        
        .doodle-line::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background: repeating-linear-gradient(
            to right,
            #2c1810 0px,
            #2c1810 4px,
            transparent 4px,
            transparent 8px
          );
          opacity: 0.3;
        }

        /* Entrance animation for cards */
        @keyframes enterUp {
          0% { opacity: 0; transform: translateY(12px) scale(0.995); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .animate-card {
          opacity: 0;
          transform: translateY(12px) scale(0.995);
          animation: enterUp 420ms cubic-bezier(.2,.9,.2,1) forwards;
          animation-delay: var(--animate-delay, 0ms);
        }

        /* Slight float on hover for the card to enhance interactivity */
        .paper-card:hover {
          transform: translateY(-6px) rotate(0deg) !important;
        }
      `}</style>
      
      <section className="py-12 px-4 paper-texture min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          {/* <div className="text-center mb-12">
            <div className="relative inline-block">
              <p className="ink-text text-sm sm:text-base mb-2 tracking-wider uppercase handwritten">
                ✨ Our Creative Work ✨
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl ink-text mb-2 handwritten doodle-line">
                Some Of Our
              </h2>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl ink-text mb-4 font-bold">
                Featured Projects
              </h2>
              
               
              <div className="absolute -right-16 top-8 text-2xl transform rotate-12 opacity-70">
                ↗️
              </div>
            </div>
          </div> */}

          {/* Category Tabs */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-full">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`sketch-tab px-4 sm:px-6 py-3 text-sm sm:text-base font-medium ink-text transition-all whitespace-nowrap ${
                    activeTab === tab.id ? "active" : ""
                  }`}
                  style={{ 
                    transform: `rotate(${(index % 2 === 0 ? 0.5 : -0.5)}deg)` 
                  }}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <span className="inline-block ml-2">📌</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Video Grid */}
          <div className="flex justify-center">
            <div className={`flex flex-wrap justify-center gap-6 sm:gap-8`}>
              {getCurrentItems().map((item, index) => (
              <div
                key={item.id}
                className={`group cursor-pointer ${item.type === 'short' ? 'w-40 sm:w-48 md:w-56' : 'w-full sm:w-80 lg:w-96'}`}
                onClick={() => openModal(item.id)}
                style={{ 
                  transform: `rotate(${(index % 3 === 0 ? 0.5 : index % 3 === 1 ? -0.3 : 0.2)}deg)` 
                }}
              >
                <div
                  className="paper-card overflow-hidden animate-card"
                  style={{ ['--animate-delay' as unknown as keyof React.CSSProperties]: `${index * 80}ms` } as React.CSSProperties}
                >
                  <div className="relative">
                    <div className={`overflow-hidden bg-gray-100 ${
                      item.type === "short" ? "aspect-[9/16]" : "aspect-video"
                    }`}>
                      <img 
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          img.style.backgroundColor = '#e0e0e0';
                          img.style.display = 'none';
                        }}
                      />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 play-sketch rounded-full flex items-center justify-center shadow-lg transform rotate-12">
                          <Play className="w-4 h-4 sm:w-6 sm:h-6 text-amber-800 ml-0.5" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Duration Badge */}
                    <div className="absolute bottom-2 right-2 duration-badge px-2 py-1 rounded font-medium">
                      {item.duration}
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-2 left-2 ink-badge px-2 py-1 rounded-full font-medium">
                      {item.category}
                    </div>
                  </div>
                  
                  {/* Video Info */}
                  <div className={`p-3 sm:p-4 ${isShorts ? "text-center" : ""}`}>
                    <h3 className={`ink-text mb-1 line-clamp-2 handwritten ${
                      isShorts ? "text-sm font-medium" : "text-base sm:text-lg font-semibold"
                    }`}>
                      {item.title}
                    </h3>
                    <p className={`text-gray-600 ${isShorts ? "text-xs" : "text-sm"}`} style={{ fontFamily: 'Europa Grotesk SH, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                      ~ {item.client} ~
                    </p>
                    
                    {/* Client Message, Logo, and Rating in Circular Design */}
                    {item.clientMessage && (
                      <div className="mt-3 flex items-start gap-2">
                        {/* Client Logo (Circular) */}
                        {item.clientLogo && (
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-amber-200">
                              <img 
                                src={item.clientLogo} 
                                alt={`${item.client} logo`} 
                                className="w-full h-full object-contain bg-white p-1"
                                onError={(e) => {
                                  const img = e.target as HTMLImageElement;
                                  img.parentElement!.style.display = 'none';
                                }}
                              />
                            </div>
                          </div>
                        )}
                        
                        {/* Client Message and Rating */}
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-gray-600 italic line-clamp-2" style={{ fontFamily: 'Europa Grotesk SH, -apple-system, BlinkMacSystemFont, sans-serif' }}>{item.clientMessage}</p>
                          {item.rating && (
                            <div className="mt-1">
                              <StarRating rating={item.rating} />
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Decorative doodle corner */}
                  <div className="absolute top-1 right-1 text-amber-600 opacity-30 text-xs">
                    ✦
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>

          {/* Empty State */}
          {getCurrentItems().length === 0 && (
            <div className="text-center py-16">
              <div className="ink-text text-lg mb-4 handwritten">📝 No videos in this section yet!</div>
              <p className="text-gray-600" style={{ fontFamily: 'Courier New, monospace' }}>
                ~ Coming soon ~ ✨
              </p>
            </div>
          )}

          {/* Modal */}
          {selectedVideo && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
              <div className="relative max-w-4xl w-full">
                <div className="sketchy-border bg-white p-4 sm:p-6 shadow-2xl">
                  <div className="aspect-video bg-gray-100 overflow-hidden mb-4 relative border-2 border-gray-300 rounded">
                    {selected?.videoUrl ? (
                      <iframe
                        src={`${selected.videoUrl.replace("watch?v=","embed/")}?autoplay=1&rel=0&modestbranding=1`}
                        title={selected?.title}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <img 
                        src={selected?.thumbnail}
                        alt="Video player"
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 play-sketch rounded-full flex items-center justify-center shadow-lg transform rotate-6">
                        <Play className="w-6 h-6 sm:w-8 sm:h-8 text-amber-800 ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl sm:text-2xl ink-text font-bold mb-2 handwritten">
                      {getSelectedVideo()?.title}
                    </h3>
                    <p className="text-gray-600 mb-4" style={{ fontFamily: 'Courier New, monospace' }}>
                      Client: {getSelectedVideo()?.client} ✨
                    </p>
                    <div className="flex justify-center gap-3 flex-wrap">
                      <span className="ink-badge px-3 py-1 rounded-full font-medium">
                        {getSelectedVideo()?.category}
                      </span>
                      <span className="duration-badge px-3 py-1 rounded-full font-medium">
                        ⏱️ {getSelectedVideo()?.duration}
                      </span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeModal}
                  className="absolute -top-12 right-0 text-white hover:text-white hover:bg-white/20 w-10 h-10 rounded-full border-2 border-white"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default WorkGrid;