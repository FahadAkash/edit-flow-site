import { useState } from "react";
import { Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ReelsCarousel = () => {
  const [activeTab, setActiveTab] = useState("youtube");
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const tabs = [
    { id: "youtube", label: "Youtube Videos" },
    { id: "shorts", label: "Shorts" },
    { id: "saas", label: "SAAS Videos" },
    { id: "ads", label: "Ad Creatives & VSL" }
  ];

  const videos = {
    youtube: [
      {
        id: 1,
        thumbnail: "https://img.youtube.com/vi/eOt0VgC8tks/maxresdefault.jpg",
        title: "Drake vs. Universal Music Group: The Legal Battle That Could Change the Music Industry",
        duration: "10:00",
        videoUrl: "https://www.youtube.com/embed/eOt0VgC8tks"
      },
      {
        id: 2,
        thumbnail: "https://img.youtube.com/vi/2iQ6clokEPo/maxresdefault.jpg",
        title: "💰Is Sales the Perfect Career for YOU? Career Deep Dive",
        duration: "15:30",
        videoUrl: "https://www.youtube.com/embed/2iQ6clokEPo"
      },
      {
        id: 3,
        thumbnail: "https://img.youtube.com/vi/u_12sSli1Uk/maxresdefault.jpg",
        title: "Trading Premium",
        duration: "08:45",
        videoUrl: "https://www.youtube.com/embed/u_12sSli1Uk"
      },
      {
        id: 4,
        thumbnail: "https://img.youtube.com/vi/sC8ydMWDSUM/maxresdefault.jpg",
        title: "Broke to $75,000 week Easy Blueprint",
        duration: "12:20",
        videoUrl: "https://www.youtube.com/embed/sC8ydMWDSUM"
      },
      {
        id: 5,
        thumbnail: "https://img.youtube.com/vi/uHJD-18kEXg/maxresdefault.jpg",
        title: "Video 4",
        duration: "05:00",
        videoUrl: "https://www.youtube.com/embed/uHJD-18kEXg"
      },
      {
        id: 6,
        thumbnail: "https://img.youtube.com/vi/tCVEG4oXaUM/maxresdefault.jpg",
        title: "AMG Recording CAM 5 06",
        duration: "03:15",
        videoUrl: "https://www.youtube.com/embed/tCVEG4oXaUM"
      },
      {
        id: 7,
        thumbnail: "https://img.youtube.com/vi/jzrb54hJBBQ/maxresdefault.jpg",
        title: "Video 5",
        duration: "04:30",
        videoUrl: "https://www.youtube.com/embed/jzrb54hJBBQ"
      },
      {
        id: 8,
        thumbnail: "https://img.youtube.com/vi/iyCTu_EpD2E/maxresdefault.jpg",
        title: "5 Boring Business",
        duration: "11:10",
        videoUrl: "https://www.youtube.com/embed/iyCTu_EpD2E"
      },
      {
        id: 9,
        thumbnail: "https://img.youtube.com/vi/BcuPrB26k5c/maxresdefault.jpg",
        title: "What Is HEDIS",
        duration: "06:50",
        videoUrl: "https://www.youtube.com/embed/BcuPrB26k5c"
      },
      {
        id: 10,
        thumbnail: "https://img.youtube.com/vi/K7Wfih1vK00/maxresdefault.jpg",
        title: "How TicketMaster and Live Nation’s Dominance Hurts Fans and Artists",
        duration: "14:20",
        videoUrl: "https://www.youtube.com/embed/K7Wfih1vK00"
      }
    ],
    shorts: [
      {
        id: 1,
        thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=700&fit=crop",
        title: "Quick Tip #1",
        duration: "00:45"
      },
      {
        id: 2,
        thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=700&fit=crop",
        title: "Quick Tip #2",
        duration: "00:30"
      },
      {
        id: 3,
        thumbnail: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=700&fit=crop",
        title: "Quick Tip #3",
        duration: "00:52"
      },
      {
        id: 4,
        thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=700&fit=crop",
        title: "Quick Tip #4",
        duration: "00:38"
      }
    ],
    saas: [
      {
        id: 1,
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
        title: "SaaS Product Demo",
        duration: "03:45"
      },
      {
        id: 2,
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
        title: "Analytics Dashboard",
        duration: "04:12"
      },
      {
        id: 3,
        thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=450&fit=crop",
        title: "Team Collaboration",
        duration: "02:55"
      },
      {
        id: 4,
        thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=450&fit=crop",
        title: "Project Management",
        duration: "03:30"
      }
    ],
    ads: [
      {
        id: 1,
        thumbnail: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&h=450&fit=crop",
        title: "Product Launch Ad",
        duration: "01:30"
      },
      {
        id: 2,
        thumbnail: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&h=450&fit=crop",
        title: "Brand Story",
        duration: "02:00"
      },
      {
        id: 3,
        thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=450&fit=crop",
        title: "Sales Funnel Video",
        duration: "03:15"
      },
      {
        id: 4,
        thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop",
        title: "VSL Campaign",
        duration: "05:00"
      }
    ]
  };

  const currentVideos = videos[activeTab as keyof typeof videos];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    },
    exit: { opacity: 0 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-charcoal mb-8"
          >
            Featured Projects
          </motion.h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setPlayingVideo(null);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-charcoal hover:bg-muted border-2 border-charcoal/20'
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {currentVideos.map((video) => (
              <motion.div
                key={video.id}
                variants={itemVariants}
                className="group relative aspect-video bg-black rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                {playingVideo === video.id && (video as any).videoUrl ? (
                  <iframe
                    src={`${(video as any).videoUrl}?autoplay=1`}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    {/* Thumbnail */}
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                      onClick={() => setPlayingVideo(video.id)}
                    >
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                          <Play className="w-8 h-8 text-white ml-1" fill="white" />
                        </div>
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 left-3 bg-black/80 text-white px-2 py-1 rounded text-sm font-medium pointer-events-none">
                      {video.duration}
                    </div>

                    {/* Video Controls Bar (like YouTube) */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/90 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="flex items-center gap-2">
                        {/* Play button */}
                        <button className="text-white hover:text-red-500 transition-colors">
                          <Play className="w-5 h-5" fill="currentColor" />
                        </button>

                        {/* Progress bar */}
                        <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-red-600"
                            style={{ width: '0%' }}
                          ></div>
                        </div>

                        {/* Control icons */}
                        <div className="flex items-center gap-1">
                          <button className="text-white/70 hover:text-white p-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
                            </svg>
                          </button>
                          <button className="text-white/70 hover:text-white p-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ReelsCarousel;