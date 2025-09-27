import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Youtube, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-charcoal text-white">
      <div className="max-w-6xl mx-auto">
        {/* Main CTA */}
        <div className="text-center mb-12">
          <div className="sticky-note p-8 max-w-2xl mx-auto bg-paper-white">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Ready to Go <span className="text-coral-accent">Viral?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Let's create content that doesn't just get views - it drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Book Free Consultation
              </Button>
            </div>
          </div>
        </div>

        {/* Footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-tape-yellow mb-4">
              VideoCreators Pro
            </h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              We're a team of creative professionals who specialize in turning raw footage 
              into viral content that drives real business results. From concept to final edit, 
              we handle everything.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-tape-yellow hover:bg-white/10">
                <Youtube className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-coral-accent hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-tape-yellow hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-coral-accent hover:bg-white/10">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-tape-yellow transition-colors">Video Editing</a></li>
              <li><a href="#" className="hover:text-tape-yellow transition-colors">Content Strategy</a></li>
              <li><a href="#" className="hover:text-tape-yellow transition-colors">Social Media Videos</a></li>
              <li><a href="#" className="hover:text-tape-yellow transition-colors">Brand Storytelling</a></li>
              <li><a href="#" className="hover:text-tape-yellow transition-colors">Animation</a></li>
              <li><a href="#" className="hover:text-tape-yellow transition-colors">Live Stream Setup</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3 text-white/70">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-coral-accent" />
                <span>hello@videocreators.pro</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-coral-accent" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-coral-accent" />
                <span>Los Angeles, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/60 text-sm">
            © 2024 VideoCreators Pro. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;