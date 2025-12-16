import { useState } from "react";
import { Play, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const ReelsCarousel = () => {
  const [activeTab, setActiveTab] = useState("youtube");
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState(6);

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
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    },
    exit: { opacity: 0, scale: 0.5, transition: { duration: 0.2 } }
  } as Variants;

  return (
    <section className="py-32 px-4 bg-black relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-900/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-900/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block text-sm font-semibold tracking-widest text-[#e63946] uppercase mb-4"
          >
            Portfolio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
          >
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e63946] to-[#ff6b6b]">Works</span>
          </motion.h2>
          
          {/* Tabs - Glass Pill Design */}
          <div className="flex flex-wrap justify-center gap-4 mb-24">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 relative overflow-hidden ${
                  activeTab === tab.id
                    ? 'text-white shadow-xl shadow-red-900/40'
                    : 'text-gray-400 hover:text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm border border-white/10'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#e63946]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            {currentVideos.map((video) => (
              <motion.div
                layout
                key={video.id}
                variants={itemVariants}
                className={`group relative ${activeTab === 'shorts' || activeTab === 'saas' ? 'aspect-[9/16] max-w-sm mx-auto w-full' : 'aspect-video'} rounded-3xl overflow-hidden bg-black shadow-2xl ring-1 ring-black/5 hover:ring-[#e63946]/50 transition-all duration-500`}
              >
                {activeTab === 'ads' ? (
                   // Thumbnails Rendering (Static)
                   <div className="w-full h-full relative cursor-pointer">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                         <p className="text-white font-bold text-2xl leading-tight">{video.title}</p>
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
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 transform scale-90 group-hover:scale-110 transition-all duration-500 shadow-2xl group-hover:bg-[#e63946] group-hover:border-transparent">
                           <Play className="w-8 h-8 text-white fill-white ml-1" />
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-100 transition-opacity pointer-events-none">
                      <p className="text-white text-lg font-medium">{video.title}</p>
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
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                    
                    {/* Dark Gradient Bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Center Play Button */}
                    <div 
                      className="absolute inset-0 flex items-center justify-center cursor-pointer"
                      onClick={() => setPlayingVideo(video.id)}
                    >
                      <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 transform group-hover:scale-110 transition-all duration-500 shadow-2xl group-hover:bg-[#e63946] group-hover:border-[#e63946]">
                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                      </div>
                    </div>

                    {/* Content Info */}
                    <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-center gap-3 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 delay-100">
                        <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium tracking-wide">
                          {video.duration}
                        </span>
                        <span className="text-white/60 text-xs uppercase tracking-wider font-semibold">
                          YouTube
                        </span>
                      </div>
                      <h3 className="text-white text-xl font-bold leading-snug line-clamp-2 group-hover:text-red-200 transition-colors duration-300">
                        {video.title}
                      </h3>
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
              className="group relative px-12 py-5 bg-white/5 text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 overflow-hidden shadow-2xl hover:shadow-red-900/40 ring-1 ring-white/20"
            >
              <span className="relative z-10 flex items-center gap-3">
                Load More Projects
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#e63946] to-[#d00000] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ReelsCarousel;