
const BrandLogos = () => {
  const brands = [
    { name: "Microsoft Team", logo: "/profile_brands/5th.png" },
    { name: "Coursera", logo: "/profile_brands/first.jpg" },
    { name: "Organifi", logo: "/profile_brands/eight.jpg" },
    { name: "KOH", logo: "/profile_brands/sec.jpg" },
    { name: "Mara Labs", logo: "/profile_brands/seven.jpg" },
    { name: "*create", logo: "/profile_brands/sixth.jpg" },
    { name: "Manna", logo: "/profile_brands/thirds.jpg" },
  ];

  return (
    <section className="w-full bg-[#E63946] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center group"
            >
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="w-20 h-20 rounded-full object-cover border-[3px] border-white shadow-xl grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110 group-hover:rotate-3"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
