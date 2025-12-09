import { useState } from "react";
import { Play, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ReelsCarousel = () => {
  const [activeTab, setActiveTab] = useState("youtube");
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState(3);

  const tabs = [
    { id: "youtube", label: "Youtube Videos" },
    { id: "shorts", label: "Shorts" },
    { id: "saas", label: "ADS/UGC" },
    { id: "ads", label: "Thumbnails" }
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
        title: "How TicketMaster and Live Nation's Dominance Hurts Fans and Artists",
        duration: "14:20",
        videoUrl: "https://www.youtube.com/embed/K7Wfih1vK00"
      }
    ],
    shorts: [
      { id: 11, title: "Aliyah Hook", duration: "00:30", videoUrl: "/video/Aliyah hook 5.mp4", thumbnail: "" },
      { id: 12, title: "Compton ALV", duration: "00:30", videoUrl: "/video/Compton ALV1.mp4", thumbnail: "" },
      { id: 13, title: "Dr. Lockhart", duration: "00:30", videoUrl: "/video/Dr Lockhart S 01.mp4", thumbnail: "" },
      { id: 14, title: "Elijah Kanoho", duration: "00:30", videoUrl: "/video/Elijah Kanoho 9 16.mp4", thumbnail: "" },
      { id: 15, title: "Finished Track", duration: "00:30", videoUrl: "/video/Finished Track Video.mp4", thumbnail: "" },
      { id: 16, title: "Formula 1", duration: "00:30", videoUrl: "/video/Formula 1 Principle.mp4", thumbnail: "" },
      { id: 17, title: "GetKing", duration: "00:30", videoUrl: "/video/Getking ALV.mp4", thumbnail: "" },
      { id: 18, title: "Law Firm Owners", duration: "00:30", videoUrl: "/video/Law firm owners 2.mp4", thumbnail: "" },
      { id: 19, title: "Lifestyle Vlog", duration: "00:30", videoUrl: "/video/Life Style Vlog Style video.mp4", thumbnail: "" },
      { id: 20, title: "Devin Style", duration: "00:30", videoUrl: "/video/Mastering Devin Style.mp4", thumbnail: "" },
      { id: 21, title: "Nano Tech", duration: "00:30", videoUrl: "/video/Nano Tech.mp4", thumbnail: "" },
      { id: 22, title: "Proven System", duration: "00:30", videoUrl: "/video/Proven System Finale.mp4", thumbnail: "" },
      { id: 23, title: "Real Estate", duration: "00:30", videoUrl: "/video/Real estate.mp4", thumbnail: "" },
      { id: 24, title: "Thrive Revival", duration: "00:30", videoUrl: "/video/Thrive Revival Walmart.mp4", thumbnail: "" },
      { id: 25, title: "Testimonial", duration: "00:30", videoUrl: "/video/testimonial lockhart.mp4", thumbnail: "" },
      { id: 26, title: "Playback Demo", duration: "00:30", videoUrl: "/video/videoplayback_2.mp4", thumbnail: "" }
    ],
    saas: [
      {
        id: 30,
        thumbnail: "https://img.youtube.com/vi/EsQnJ82HPSQ/maxresdefault.jpg",
        title: "UGC Ad Creative 1",
        duration: "00:30",
        videoUrl: "https://www.youtube.com/embed/EsQnJ82HPSQ"
      },
      {
        id: 31,
        thumbnail: "https://img.youtube.com/vi/TuBv-hf3H5k/maxresdefault.jpg",
        title: "UGC Ad Creative 2",
        duration: "00:30",
        videoUrl: "https://www.youtube.com/embed/TuBv-hf3H5k"
      },
      {
        id: 32,
        thumbnail: "https://img.youtube.com/vi/xbFtm0FefUM/maxresdefault.jpg",
        title: "UGC Ad Creative 3",
        duration: "00:30",
        videoUrl: "https://www.youtube.com/embed/xbFtm0FefUM"
      },
      {
        id: 33,
        thumbnail: "https://img.youtube.com/vi/m8PdJJ-cChQ/maxresdefault.jpg",
        title: "UGC Ad Creative 4",
        duration: "00:30",
        videoUrl: "https://www.youtube.com/embed/m8PdJJ-cChQ"
      },
      {
        id: 34,
        thumbnail: "https://img.youtube.com/vi/O6dDnh_49no/maxresdefault.jpg",
        title: "UGC Ad Creative 5",
        duration: "00:30",
        videoUrl: "https://www.youtube.com/embed/O6dDnh_49no"
      },
      {
        id: 35,
        thumbnail: "https://img.youtube.com/vi/2fv_OYUng7I/maxresdefault.jpg",
        title: "UGC Product Video",
        duration: "02:00",
        videoUrl: "https://www.youtube.com/embed/2fv_OYUng7I"
      }
    ],
    ads: [
      { id: 40, thumbnail: "/Thubnails/AI-GOLDRUSH-thumbnail-deisgn.png", title: "AI Goldrush", videoUrl: "", duration: "" },
      { id: 41, thumbnail: "/Thubnails/DIET-loagn-thumbnail-deisgn.jpg", title: "Diet Logan", videoUrl: "", duration: "" },
      { id: 42, thumbnail: "/Thubnails/I--SCAMMED--MICROSOFT-thumbnail-design.png", title: "I Scammed Microsoft", videoUrl: "", duration: "" },
      { id: 43, thumbnail: "/Thubnails/ITS-worth-it-thumbnail-deisgn.jpg", title: "It's Worth It", videoUrl: "", duration: "" },
      { id: 44, thumbnail: "/Thubnails/Is-Marketing-Really-Worth-It.jpg", title: "Is Marketing Worth It", videoUrl: "", duration: "" },
      { id: 45, thumbnail: "/Thubnails/Live-Here-In-thumbnail-design.jpg", title: "Live Here In", videoUrl: "", duration: "" },
      { id: 46, thumbnail: "/Thubnails/Logan-breakfast-thumbnail-deisgn.jpg", title: "Logan Breakfast", videoUrl: "", duration: "" },
      { id: 47, thumbnail: "/Thubnails/Multi-Agent-Explained--thumbnail-deisgn.jpg", title: "Multi Agent Explained", videoUrl: "", duration: "" },
      { id: 48, thumbnail: "/Thubnails/OWN-PAYMENT-ASSISTANCE-PROGRAM-thumbnail-deisgn-.jpg", title: "Payment Assistance", videoUrl: "", duration: "" },
      { id: 49, thumbnail: "/Thubnails/logan-face-with-chatgpt-03.jpg", title: "Logan with ChatGPT", videoUrl: "", duration: "" }
    ]
  };

  const allCurrentVideos = videos[activeTab as keyof typeof videos];
  const currentVideos = allCurrentVideos.slice(0, visibleItems);
  const hasMore = visibleItems < allCurrentVideos.length;

  const handleShowMore = () => {
    setVisibleItems(prev => prev + 3);
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setPlayingVideo(null);
    setVisibleItems(3);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: { opacity: 0 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-normal text-charcoal mb-12"
          >
            Featured Projects
          </motion.h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-6 mb-20">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-10 py-5 rounded-2xl font-normal text-xl transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-2xl scale-105'
                    : 'bg-transparent text-charcoal hover:bg-muted border-2 border-charcoal/10'
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {currentVideos.map((video) => (
              <motion.div
                key={video.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -10,
                  transition: { type: "spring" as const, stiffness: 300, damping: 20 }
                }}
                className={`group relative ${activeTab === 'shorts' || activeTab === 'saas' ? 'aspect-[9/16]' : 'aspect-video'} bg-black rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 border border-white/10`}
              >
                {activeTab === 'ads' ? (
                   // Thumbnails Rendering (Static)
                   <div className="w-full h-full relative cursor-pointer group">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                         <p className="text-white font-semibold text-2xl">{video.title}</p>
                      </div>
                   </div>
                ) : video.videoUrl.startsWith('/') ? (
                  // Local Video Rendering
                  <div 
                    className="w-full h-full cursor-pointer relative"
                    onClick={() => setPlayingVideo(playingVideo === video.id ? null : video.id)}
                  >
                    <video
                      src={video.videoUrl}
                      className="w-full h-full object-cover"
                      autoPlay={true}
                      muted={playingVideo !== video.id}
                      loop
                      playsInline
                      controls={playingVideo === video.id}
                    />
                    {playingVideo !== video.id && (
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                           <Play className="w-10 h-10 text-white fill-white" />
                        </div>
                      </div>
                    )}
                    {/* Title Overlay for Local Video */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 opacity-100 transition-opacity pointer-events-none">
                      <p className="text-white text-xl font-medium truncate">{video.title}</p>
                    </div>
                  </div>
                ) : (
                  // YouTube Embed Rendering
                  playingVideo === video.id ? (
                  <iframe
                    src={`${video.videoUrl}?autoplay=1`}
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
                        <div className="w-24 h-24 bg-[#e63946] rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-2xl border-4 border-white/20">
                          <Play className="w-12 h-12 text-white ml-2" fill="white" />
                        </div>
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-6 left-6 bg-black/80 text-white px-4 py-2 rounded-xl text-lg font-medium pointer-events-none backdrop-blur-md border border-white/10">
                      {video.duration}
                    </div>

                    {/* Video Controls Bar (Visual only) */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/90 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="flex items-center gap-4">
                        <Play className="w-6 h-6 text-white" fill="currentColor" />
                        <div className="flex-1 h-2 bg-white/30 rounded-full overflow-hidden">
                          <div className="h-full bg-[#e63946] w-1/3 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show More Button */}
        {hasMore && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-20"
          >
            <button
              onClick={handleShowMore}
              className="group flex flex-col items-center gap-3 text-charcoal hover:text-[#e63946] transition-colors"
            >
              <span className="text-lg font-medium">Show More Projects</span>
              <div className="w-14 h-14 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-[#e63946] group-hover:border-[#e63946] group-hover:text-white transition-all duration-300">
                <ChevronDown className="w-8 h-8 animate-bounce" />
              </div>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ReelsCarousel;