import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const AboutSection = () => {
  const comparisons = [
    {
      feature: "Response Time",
      us: "Same day response",
      others: "3-5 business days"
    },
    {
      feature: "Revision Rounds",
      us: "Unlimited until perfect",
      others: "2-3 revisions max"
    },
    {
      feature: "Project Management",
      us: "Dedicated project manager",
      others: "Generic support email"
    },
    {
      feature: "Video Strategy",
      us: "Full content strategy included",
      others: "Just editing services"
    },
    {
      feature: "Platform Optimization",
      us: "Multi-platform versions",
      others: "One-size-fits-all"
    },
    {
      feature: "Performance Tracking",
      us: "Analytics & optimization",
      others: "Deliver and forget"
    },
    {
      feature: "Creative Input",
      us: "Collaborative ideation",
      others: "Follow brief exactly"
    },
    {
      feature: "Industry Expertise",
      us: "5+ years specialization",
      others: "General video editing"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const itemVariantsRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="py-12 px-4 bg-[#f6f7eb]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="sticky-peach push-pin p-8 max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Why Choose <span className="text-[#d72638]">Us?</span>
            </h2>
            <p className="text-xl text-gray-700">
              We're not just another video editing service. Here's what makes us different.
            </p>
          </motion.div>
        </div>

        {/* Comparison Table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Our Agency */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sticky-mint paper-clip rotate-random-1 p-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-black mb-2">
                Our <span className="text-[#d72638]">Agency</span>
              </h3>
              <p className="text-gray-700">
                Specialized video editing that drives results
              </p>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {comparisons.map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="p-4 border-4 border-[#d72638]/20 bg-white hover:bg-[#d72638]/5 transition-colors shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-[#d72638] rounded-full mt-1">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black text-sm mb-1">
                          {item.feature}
                        </h4>
                        <p className="text-gray-800 font-medium">
                          {item.us}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Other Agencies */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="sticky-lavender rotate-random-2 p-8 opacity-90"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-black mb-2">
                Other <span className="text-gray-500">Agencies</span>
              </h3>
              <p className="text-gray-600">
                Standard editing services with limited scope
              </p>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {comparisons.map((item, index) => (
                <motion.div key={index} variants={itemVariantsRight}>
                  <Card className="p-4 border-4 border-gray-200 bg-gray-50/50">
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-gray-200 rounded-full mt-1">
                        <X className="w-3 h-3 text-gray-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-500 text-sm mb-1">
                          {item.feature}
                        </h4>
                        <p className="text-gray-500">
                          {item.others}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="sticky-note p-6 max-w-lg mx-auto bg-coral-accent/10 cursor-pointer"
          >
            <h3 className="text-2xl font-bold text-charcoal mb-3">
              Ready to see the difference?
            </h3>
            <p className="text-muted-foreground mb-4">
              Join 500+ brands who've transformed their content with us
            </p>
            <div className="text-4xl font-bold text-coral-accent">
              500+ <span className="text-lg text-muted-foreground">Happy Clients</span>
            </div>
          </motion.div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
