import { TrendingUp, Users, Eye, MessageCircle, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";
import youtubeGrowth from "@/assets/youtube-growth.jpg";

const GrowthShowcase = () => {
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

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="sticky-note p-8 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Real Results for 
              <span className="text-coral-accent"> Real Clients</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              We don't just edit videos—we engineer viral content that drives measurable growth
            </p>
          </div>
        </div>

        {/* Main showcase image */}
        <div className="sticky-note p-6 mb-16 max-w-4xl mx-auto">
          <div className="aspect-video rounded-lg overflow-hidden">
            <img 
              src={youtubeGrowth}
              alt="YouTube growth analytics dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="sticky-note p-6 hover:scale-105 transition-transform duration-300">
              <Card className="border-none shadow-none bg-transparent p-0">
                <div className="text-center">
                  <div className={`inline-flex p-3 rounded-full bg-muted mb-4 ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold text-charcoal mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground mb-2">
                    {stat.label}
                  </div>
                  <div className={`text-sm font-semibold ${stat.color}`}>
                    {stat.change}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Client testimonial snippet */}
        <div className="mt-16 text-center">
          <div className="sticky-note p-6 max-w-2xl mx-auto bg-accent">
            <blockquote className="text-lg italic text-charcoal mb-4">
              "Our channel went from 50K to 2.5M subscribers in just 6 months. 
              The editing quality and storytelling completely transformed our content."
            </blockquote>
            <div className="text-sm font-semibold text-coral-accent">
              — Sarah Chen, TechReview Pro
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthShowcase;