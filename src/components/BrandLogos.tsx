
const BrandLogos = () => {
  const brands = [
    { name: "Brand 1", logo: "/brands/01HZPHHYKN7PRCHF92X9KV8BPG.png" },
    { name: "Brand 2", logo: "/brands/1667599512761.png" },
     
  ];
  const otherbrands = [
    { name: "Apple", logo: "/brands/microsoft.png" },
    { name: "Danger Coffee", logo: "/brands/DC_Logo_1640x624-d44ea81f-a7d0-4746-b50e-399afa2a81c9.png" },
    { name: "Blackberry", logo: "/brands/Logo_Blackberry_Large_a979164e-916a-4c09-bbac-51df3d96f65a_1200x1200.png" },
    { name: "Predator", logo: "/brands/acer-predator-logo-png_seeklogo-441422.png" },
    
  ]

  return (
    <section className="w-full bg-[#E63946] py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-6">
          {/* First Row */}
          <div className="flex items-center justify-center gap-8 md:gap-20 overflow-x-auto no-scrollbar py-1">
            {otherbrands.map((otherbrands, idx) => (
              <div
                key={`row1-${idx}`}
                className="flex-shrink-0 flex items-center justify-center group"
              >
                <img 
                  src={otherbrands.logo} 
                  alt={otherbrands.name}
                  className="h-10 md:h-14 w-auto object-contain grayscale contrast-125 invert mix-blend-screen opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* Second Row (Reversed for variety) */}
          <div className="flex items-center justify-center gap-8 md:gap-20 overflow-x-auto no-scrollbar py-1">
            {[...brands].reverse().map((brand, idx) => (
              <div
                key={`row2-${idx}`}
                className="flex-shrink-0 flex items-center justify-center group"
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="h-10 md:h-14 w-auto object-contain grayscale contrast-125 invert mix-blend-screen opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
