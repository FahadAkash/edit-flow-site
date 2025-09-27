import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";

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

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="sticky-peach push-pin rotate-random-3 p-8 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Why Choose <span className="text-tape-yellow">Us?</span>
            </h2>
            <p className="text-xl text-charcoal/70">
              We're not just another video editing service. Here's what makes us different.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Our Agency */}
          <div className="sticky-mint paper-clip rotate-random-1 p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-charcoal mb-2">
                Our <span className="text-tape-yellow">Agency</span>
              </h3>
              <p className="text-charcoal/70">
                Specialized video editing that drives results
              </p>
            </div>

            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <Card key={index} className="p-4 border-2 border-tape-yellow/30 bg-tape-yellow/5">
                  <div className="flex items-start gap-3">
                    <div className="p-1 bg-tape-yellow rounded-full mt-1">
                      <Check className="w-3 h-3 text-charcoal" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal text-sm mb-1">
                        {item.feature}
                      </h4>
                      <p className="text-charcoal font-medium">
                        {item.us}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Other Agencies */}
          <div className="sticky-lavender rotate-random-2 p-8 opacity-75">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-charcoal mb-2">
                Other <span className="text-charcoal/60">Agencies</span>
              </h3>
              <p className="text-charcoal/60">
                Standard editing services with limited scope
              </p>
            </div>

            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <Card key={index} className="p-4 border-2 border-muted bg-muted/30">
                  <div className="flex items-start gap-3">
                    <div className="p-1 bg-muted-foreground/20 rounded-full mt-1">
                      <X className="w-3 h-3 text-muted-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-muted-foreground text-sm mb-1">
                        {item.feature}
                      </h4>
                      <p className="text-muted-foreground">
                        {item.others}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="sticky-note p-6 max-w-lg mx-auto bg-coral-accent/10">
            <h3 className="text-2xl font-bold text-charcoal mb-3">
              Ready to see the difference?
            </h3>
            <p className="text-muted-foreground mb-4">
              Join 500+ brands who've transformed their content with us
            </p>
            <div className="text-4xl font-bold text-coral-accent">
              500+ <span className="text-lg text-muted-foreground">Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
