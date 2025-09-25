import partnerLogos from "@/assets/partner-logos.jpg";

const PartnerLogos = () => {
  // Brand images from public/brands
  const brandImages = [
    "01HZPHHYKN7PRCHF92X9KV8BPG.png",
    "1667599512761.png",
    "acer-predator-logo-png_seeklogo-441422.png",
    "DC_Logo_1640x624-d44ea81f-a7d0-4746-b50e-399afa2a81c9.png",
    "Logo_Blackberry_Large_a979164e-916a-4c09-bbac-51df3d96f65a_1200x1200.png"
  ];

  return (
  <section className="py-16 border-y border-border bg-muted/40">
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <div className="sticky-coral push-pin rotate-random-2 p-6 max-w-lg mx-auto text-center">
          <h2 className="text-2xl font-bold text-charcoal mb-2">Trusted by</h2>
        </div>
      </div>

      {/* Brand Images Grid */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {brandImages.map((img, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full h-20 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300"
            >
              <img
                src={`/brands/${img}`}
                alt={`Brand logo ${index + 1}`}
                className="max-h-16 max-w-[90%] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;