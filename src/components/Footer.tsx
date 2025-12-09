import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Youtube, Instagram, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="py-12 px-4 bg-background text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Main CTA */}
        <div className="text-center mb-12">
          <div className="sticky-note p-8 max-w-2xl mx-auto bg-card">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Ready to Go <span className="text-coral-accent">Viral?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Let's create content that doesn't just get views - it drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="text-lg px-8 w-full sm:w-auto">
                  Start Your Project
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="text-lg px-8 w-full sm:w-auto">
                  Book Free Consultation
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Footer content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
        >
          {/* Company info */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <h3 className="text-2xl font-bold text-tape-yellow mb-4">
              VideoCreators Pro
            </h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              We're a team of creative professionals who specialize in turning raw footage 
              into viral content that drives real business results. From concept to final edit, 
              we handle everything.
            </p>
            <div className="flex gap-4">
              {[Youtube, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <motion.div key={i} whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                  <Button variant="ghost" size="icon" className="text-white hover:text-tape-yellow hover:bg-white/10">
                    <Icon className="w-5 h-5" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-white/70">
              {["Video Editing", "Content Strategy", "Social Media Videos", "Brand Storytelling", "Animation", "Live Stream Setup"].map((item, i) => (
                <motion.li key={i} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <a href="#" className="hover:text-tape-yellow transition-colors block">{item}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3 text-white/70">
              <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-coral-accent" />
                <span>hello@videocreators.pro</span>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-coral-accent" />
                <span>+1 (555) 123-4567</span>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-coral-accent" />
                <span>Los Angeles, CA</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-white/20 pt-4 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-white/60 text-sm">
            © 2024 VideoCreators Pro. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;