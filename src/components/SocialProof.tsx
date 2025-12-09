import { useState } from "react";
import { Star, ChevronDown } from "lucide-react";
import { motion, Variants, AnimatePresence } from "framer-motion";

const SocialProof = () => {
  const [visibleCount, setVisibleCount] = useState(20);

  // Screenshot images to cycle through
  const screenshots = [
    "/reviews/Screenshot 2025-12-04 214247.png",
    "/reviews/Screenshot 2025-12-04 214315.png",
    "/reviews/Screenshot 2025-12-04 214339.png",
    "/reviews/Screenshot 2025-12-04 214404.png"
  ];

  // Get screenshot for a review based on its ID (cycles through available screenshots)
  const getScreenshot = (id: number) => screenshots[(id - 1) % screenshots.length];
  
  const reviews = [
    { id: 1, type: "facebook", size: "normal" },
    { id: 2, type: "youtube", size: "compact" },
    { id: 3, type: "facebook", size: "tall" },
    { id: 4, type: "google", size: "wide" },
    { id: 5, type: "facebook", size: "compact" },
    { id: 6, type: "discord", size: "normal" },
    { id: 7, type: "facebook", size: "compact" },
    { id: 8, type: "email", size: "tall" },
    { id: 9, type: "youtube", size: "normal" },
    { id: 10, type: "facebook", size: "wide" },
    { id: 11, type: "facebook", size: "tall" },
    { id: 12, type: "facebook", size: "normal" },
    { id: 13, type: "linkedin", size: "wide" },
    { id: 14, type: "twitter", size: "compact" },
    { id: 15, type: "facebook", size: "normal" },
    { id: 16, type: "instagram", size: "tall" },
    { id: 17, type: "google", size: "compact" },
    { id: 18, type: "discord", size: "normal" },
    { id: 19, type: "facebook", size: "wide" },
    { id: 20, type: "youtube", size: "tall" },
    { id: 21, type: "email", size: "normal" },
    { id: 22, type: "linkedin", size: "compact" },
    { id: 23, type: "twitter", size: "wide" },
    { id: 24, type: "facebook", size: "tall" },
    { id: 25, type: "instagram", size: "compact" },
    { id: 26, type: "google", size: "normal" },
    { id: 27, type: "discord", size: "wide" },
    { id: 28, type: "facebook", size: "tall" }
  ];

  const visibleReviews = reviews.slice(0, visibleCount);
  const hasMore = visibleCount < reviews.length;

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 8, reviews.length));
  };

  const getSizeClass = (size: string) => {
    switch(size) {
      case "tall":
        return "row-span-2";
      case "wide":
        return "col-span-2";
      case "compact":
        return "";
      default:
        return "";
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-charcoal mb-4"
          >
            Client <span className="text-coral-accent">Results</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Real feedback from real clients across all platforms
          </motion.p>
        </div>

        {/* Grid of Reviews with Random Sizes */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto gap-4" 
          style={{ gridAutoFlow: 'dense' }}
        >
          <AnimatePresence>
            {visibleReviews.map((review) => (
              <motion.div
                key={review.id}
                variants={itemVariants}
                initial="hidden"
                animate={{
                  opacity: 1,
                  y: [0, -6, 0, -3, 0],
                  rotate: [0, 0.5, 0, -0.5, 0]
                }}
                transition={{
                  y: {
                    duration: 4 + (review.id % 3),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: (review.id % 5) * 0.5
                  },
                  rotate: {
                    duration: 5 + (review.id % 4),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: (review.id % 4) * 0.3
                  }
                }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.2 } }}
                className={`bg-white p-2 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300 overflow-hidden ${getSizeClass(review.size)}`}
              >
                {/* Screenshots - multiple for larger cards, object-contain to show full comments */}
                {review.size === "tall" ? (
                  // Tall cards: 2 screenshots stacked vertically
                  <div className="flex flex-col gap-1 h-full">
                    <img
                      src={getScreenshot(review.id)}
                      alt="Client review"
                      className="w-full flex-1 rounded-md object-contain object-top"
                    />
                    <img
                      src={getScreenshot(review.id + 1)}
                      alt="Client review"
                      className="w-full flex-1 rounded-md object-contain object-top"
                    />
                  </div>
                ) : review.size === "wide" ? (
                  // Wide cards: 2 screenshots side by side
                  <div className="flex gap-1 h-full">
                    <img
                      src={getScreenshot(review.id)}
                      alt="Client review"
                      className="flex-1 h-full rounded-md object-contain"
                    />
                    <img
                      src={getScreenshot(review.id + 1)}
                      alt="Client review"
                      className="flex-1 h-full rounded-md object-contain"
                    />
                  </div>
                ) : (
                  // Normal/compact: single screenshot - full view
                  <img
                    src={getScreenshot(review.id)}
                    alt="Client review"
                    className="w-full h-full rounded-md object-contain"
                  />
                )}
                
                {/* Platform Badge */}
                <div className="absolute bottom-2 right-2">
                  <span className="text-xs font-medium capitalize bg-black/80 text-white px-2 py-1 rounded">
                    {review.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* See More Button */}
        {hasMore && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mt-10"
          >
            <motion.button
              onClick={loadMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-coral-accent text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              See More Reviews
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </motion.button>
          </motion.div>
        )}

        {/* Showing count */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-4 text-muted-foreground"
        >
          Showing {visibleCount} of 500+ reviews
        </motion.p>

        {/* Stats Footer */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-coral-accent mb-2">500+</div>
            <div className="text-sm text-muted-foreground">5-Star Reviews</div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-coral-accent mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-coral-accent mb-2">1000+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-coral-accent mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
