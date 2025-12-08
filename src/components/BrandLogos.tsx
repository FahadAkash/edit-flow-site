const BrandLogos = () => {
  const brands = [
    { name: "neutonic", logo: "neutonic" },
    { name: "Campfire Circle", logo: "🏕️" },
    { name: "NV", logo: "NV" },
    { name: "DANGER COFFEE", logo: "⚠️ DANGER\nCOFFEE" },
    { name: "organifi", logo: "organifi" },
  ];

  return (
    <section className="w-full bg-[#E63946] py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-around gap-8">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center text-white font-bold text-xl md:text-2xl whitespace-pre-line text-center"
              style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}
            >
              {brand.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
