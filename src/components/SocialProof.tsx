import { useState } from "react";
import { Star, ChevronDown } from "lucide-react";
import { motion, Variants, AnimatePresence } from "framer-motion";

const SocialProof = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  
  const reviews = [
    {
      id: 1,
      type: "facebook",
      author: "John Martinez",
      role: "Business Owner",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Simply phenomenal work! The editing quality is top-notch and the turnaround time was incredible. Highly recommend!!!",
      rating: 5,
      likes: 24,
      color: "bg-blue-50",
      size: "normal"
    },
    {
      id: 2,
      type: "youtube",
      author: "Mike Lawson",
      verified: true,
      content: "Highly recommended!!! Highly!",
      rating: 5,
      likes: 10,
      color: "bg-white",
      size: "compact"
    },
    {
      id: 3,
      type: "facebook",
      author: "Sarah Chen",
      content: "Best video editor I've worked with. The attention to detail is amazing and they really understand what makes content viral.",
      rating: 5,
      likes: 156,
      color: "bg-blue-50",
      size: "tall"
    },
    {
      id: 4,
      type: "google",
      author: "Clayton Bates",
      content: "Parvir is a legend. I've tried jumping on the calls with him. I've one thing about Parvir is you can tell he cares a lot about what he does, constant improvements, up the good work mate. Cheers",
      rating: 5,
      date: "Sep 19, 2024",
      color: "bg-white",
      size: "wide"
    },
    {
      id: 5,
      type: "facebook",
      author: "Emma Rodriguez",
      content: "Changed the thumbnail for listening to your CTR videos - CTR going at 20% rn",
      likes: 45,
      color: "bg-yellow-50",
      size: "compact"
    },
    {
      id: 6,
      type: "discord",
      author: "Jason Samona",
      content: "Wow I cannot stop watching the videos so many ideas have popped up to my head like wow adrenaline rush 😱🤯💯",
      color: "bg-green-50",
      size: "normal"
    },
    {
      id: 7,
      type: "facebook",
      author: "David Kim",
      content: "The video is starting to take off 🔥",
      likes: 89,
      color: "bg-blue-50",
      size: "compact"
    },
    {
      id: 8,
      type: "email",
      author: "Lazaroius Dimitrakis",
      content: "Hand I finished all the courses twice, I would like to commend you on very much for the knowledge, you are very good teacher and showed me the way.",
      color: "bg-purple-50",
      size: "tall"
    },
    {
      id: 9,
      type: "youtube",
      author: "Paul Messenger",
      content: "I love your community 💯 1,400+ on YouTube. You videos are so rich in information and so easy to understand.",
      likes: 34,
      color: "bg-white",
      size: "normal"
    },
    {
      id: 10,
      type: "facebook",
      author: "Hazel Rane",
      content: "Just wanted to let you know that not only was the video in the program helpful but the calendar information but your demeanor is very refraising putting it into practice.",
      color: "bg-yellow-50",
      size: "wide"
    },
    {
      id: 11,
      type: "facebook",
      author: "Jesse Burman",
      content: "Hand, I just want to say that your course videos are the best I've seen by any YT expert. You didn't 'gatekeeper' the truly valuable money-making and learning info.",
      color: "bg-green-50",
      size: "tall"
    },
    {
      id: 12,
      type: "facebook",
      author: "Trace Martin",
      content: "Hi Hand, I just wanted to let you know I'm really getting value out of your trainings and I'm starting to see results put in the work, no matter how long it takes to become one of the best.",
      likes: 67,
      color: "bg-blue-50",
      size: "normal"
    },
    {
      id: 13,
      type: "linkedin",
      author: "Marcus Thompson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      content: "Absolutely game-changing! My channel went from 10K to 500K subscribers in 6 months. The editing is pure magic.",
      rating: 5,
      likes: 203,
      color: "bg-blue-50",
      size: "wide"
    },
    {
      id: 14,
      type: "twitter",
      author: "Alex Rivera",
      content: "Just hit 1M views on my latest video! All thanks to the incredible editing and storytelling. Best investment ever! 🚀",
      likes: 127,
      color: "bg-white",
      size: "compact"
    },
    {
      id: 15,
      type: "facebook",
      author: "Lisa Park",
      content: "The team doesn't just edit, they transform your raw footage into cinematic masterpieces. My engagement rate tripled!",
      rating: 5,
      likes: 94,
      color: "bg-yellow-50",
      size: "normal"
    },
    {
      id: 16,
      type: "instagram",
      author: "Ryan Foster",
      content: "Been working with them for 8 months now. Every single video hits different. The quality is insane! 🔥🔥🔥",
      likes: 156,
      color: "bg-purple-50",
      size: "tall"
    },
    {
      id: 17,
      type: "google",
      author: "Jennifer Walsh",
      content: "Professional, creative, and always on time. They understand YouTube algorithm better than anyone I've worked with.",
      rating: 5,
      date: "Oct 5, 2024",
      color: "bg-white",
      size: "compact"
    },
    {
      id: 18,
      type: "discord",
      author: "Tom Henderson",
      content: "The community alone is worth it. Add the top-tier editing services and you've got the complete package. No cap! 💯",
      color: "bg-green-50",
      size: "normal"
    },
    {
      id: 19,
      type: "facebook",
      author: "Nina Patel",
      content: "My ROI has been 10x what I paid. The videos look so professional that brands are now reaching out to ME for sponsorships!",
      likes: 178,
      color: "bg-blue-50",
      size: "wide"
    },
    {
      id: 20,
      type: "youtube",
      author: "Chris Anderson",
      verified: true,
      content: "Best decision I made for my channel! The editing quality is Hollywood-level. My watch time increased by 400%!",
      rating: 5,
      likes: 89,
      color: "bg-white",
      size: "tall"
    },
    {
      id: 21,
      type: "email",
      author: "Sophia Martinez",
      content: "I was skeptical at first, but now I can't imagine making videos without this team. They bring ideas to life in ways I never thought possible.",
      color: "bg-yellow-50",
      size: "normal"
    },
    {
      id: 22,
      type: "linkedin",
      author: "Brandon Lee",
      content: "Working with professionals who actually care about your success. The attention to detail and creative input is unmatched.",
      rating: 5,
      likes: 142,
      color: "bg-purple-50",
      size: "compact"
    },
    {
      id: 23,
      type: "twitter",
      author: "Olivia Wright",
      content: "My latest video got 2M+ views in 48 hours. The editing made it go absolutely viral. THANK YOU! 🙏✨",
      likes: 234,
      color: "bg-green-50",
      size: "wide"
    },
    {
      id: 24,
      type: "facebook",
      author: "Daniel Cooper",
      content: "From the thumbnails to the final edit, everything is perfect. My conversion rate went from 2% to 15%. Incredible work!",
      rating: 5,
      likes: 167,
      color: "bg-blue-50",
      size: "tall"
    },
    {
      id: 25,
      type: "instagram",
      author: "Maya Johnson",
      content: "The storytelling is next level! They took my boring footage and made it compelling. My followers doubled in a month! 📈",
      likes: 198,
      color: "bg-white",
      size: "compact"
    },
    {
      id: 26,
      type: "google",
      author: "Kevin Brown",
      content: "I've tried 5 different editors before. None come close to this level of quality and professionalism. Worth every penny!",
      rating: 5,
      date: "Nov 12, 2024",
      color: "bg-yellow-50",
      size: "normal"
    },
    {
      id: 27,
      type: "discord",
      author: "Rachel Green",
      content: "The course + editing combo is unbeatable. I'm learning while they handle my videos. Smart investment! 💪",
      color: "bg-purple-50",
      size: "wide"
    },
    {
      id: 28,
      type: "facebook",
      author: "Tyler Scott",
      content: "My videos now look like they're made by a Netflix production team. The color grading alone is worth it!",
      likes: 112,
      color: "bg-green-50",
      size: "tall"
    }
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
                className={`${review.color} p-4 rounded-lg shadow-md border-2 border-charcoal/10 hover:shadow-xl transition-shadow duration-300 ${getSizeClass(review.size)}`}
              >
                {/* Author Info */}
                <div className="flex items-center gap-3 mb-3">
                  {review.avatar && (
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-charcoal/10 flex-shrink-0">
                      <img
                        src={review.avatar}
                        alt={review.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-charcoal text-sm truncate">
                        {review.author}
                      </h4>
                      {review.verified && (
                        <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                    </div>
                    {review.role && (
                      <p className="text-xs text-charcoal/60 truncate">{review.role}</p>
                    )}
                  </div>
                </div>

                {/* Rating */}
                {review.rating && (
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                )}

                {/* Content */}
                <p className="text-charcoal text-sm leading-relaxed mb-3">
                  {review.content}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between text-xs text-charcoal/50">
                  {review.likes && (
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" />
                      </svg>
                      <span>{review.likes}</span>
                    </div>
                  )}
                  {review.date && <span>{review.date}</span>}
                  {review.type && (
                    <span className="text-xs font-medium capitalize bg-charcoal/10 px-2 py-1 rounded">
                      {review.type}
                    </span>
                  )}
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
