import partnerLogos from "@/assets/partner-logos.jpg";

const PartnerLogos = () => {
  // Mock partner data
  const partners = [
    "TechCorp", "MediaFlow", "Creative Co", "VideoLab", "StreamPro", 
    "ContentMax", "FilmTech", "EditSuite", "StoryBoard", "PixelForge"
  ];

  return (
    <section className="py-16 overflow-hidden border-y border-border">
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <div className="sticky-note p-6 max-w-lg mx-auto text-center">
          <h2 className="text-2xl font-bold text-charcoal mb-2">Trusted by</h2>
          <p className="text-muted-foreground">Leading brands worldwide</p>
        </div>
      </div>

      {/* Infinite Marquee */}
      <div className="relative">
        <div className="flex animate-marquee">
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="flex shrink-0 items-center gap-16 pr-16">
              {partners.map((partner, index) => (
                <div
                  key={`${setIndex}-${index}`}
                  className="flex items-center justify-center w-32 h-16 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-sm font-semibold text-muted-foreground">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
        
        {/* Fade gradients */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default PartnerLogos;