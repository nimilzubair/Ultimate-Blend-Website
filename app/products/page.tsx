"use client";
import React from "react";

export default function ProductsPage() {
  const productCategories = [
    {
      title: "Concrete Admixtures",
      bgImage: "/concrete-mix.png",
      products: [
        "High strength super plasticizer",
        "Polycarboxylate based plasticizer",
        "Slump retention admixtures",
        "Air entraining admixture",
        "Shotcrete Accelerator",
      ],
    },
    {
      title: "Cement Additives",
      bgImage: "/cement-prod.jpg",
      products: [
        "Improved grinding efficiency",
        "Reduce energy cost",
        "Improved durability",
        "Enhanced performance",
        "Sustainable solutions",
      ],
    },
    {
      title: "Tile Adhesives & Grouts",
      bgImage: "/tile-prod.png",
      products: [
        "Standard grade adhesives",
        "Superior adhesion strength",
        "Reduced shrinkage",
        "Interior & exterior use",
        "Long-lasting performance",
      ],
    },
    {
      title: "Cementitious Grouts",
      bgImage: "/cementous-grout.webp",
      products: [
        "Restricted grout",
        "Non-shrink grout",
        "Bearing grout",
        "Bedding grout",
        "High-flow options",
      ],
    },
    {
      title: "Waterproofing Solutions",
      bgImage: "/Waterproofing-Products.webp",
      products: [
        "Crystalline coating",
        "Integral waterproofing",
        "Powder-based systems",
        "Capillary admixtures",
        "Complete protection",
      ],
    },
    {
      title: "Joint Sealants",
      bgImage: "/joint-prod.webp",
      products: [
        "Polyurethane sealant",
        "Polysulphide sealant",
        "Weather resistance",
        "High-performance sealing",
        "Durable solutions",
      ],
    },
    {
      title: "Shotcrete Accelerators",
      bgImage: "/shotcrete-prod.jpg",
      products: [
        "Eco-friendly formula",
        "Safe handling",
        "Dry & wet mix compatible",
        "Long-term durability",
        "Rapid setting time",
      ],
    },
    {
      title: "Industrial Flooring",
      bgImage: "/flooring.png",
      products: [
        "Non-metallic hardener",
        "Acrylic floor sealer",
        "Self-leveling epoxy",
        "Epoxy mortar",
        "Heavy-duty coating",
      ],
    },
    {
      title: "Industrial Chemicals",
      bgImage: "/indus-chem-prod.png",
      products: [
        "Pharmaceutical grade",
        "Agricultural solutions",
        "Textile applications",
        "Water treatment",
        "Specialty chemicals",
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
     {/* Hero Section */}
<section className="relative text-white py-12 sm:py-16 lg:py-28 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-gray-800 to-blue-900">
    <div className="absolute inset-0 bg-[url('/hero-product.jpg')] bg-cover bg-center opacity-50"></div>
  </div>

  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center z-10">
    <div className="inline-block mb-2 sm:mb-4 px-3 py-1 sm:px-4 sm:py-1.5 bg-blue-600/40 backdrop-blur-sm rounded-full border border-blue-300/40">
      <span className="text-xs sm:text-sm font-medium text-white">
        Since 2010
      </span>
    </div>
    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-3 sm:mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
      Our Products
    </h1>
    <p className="text-sm sm:text-base lg:text-lg max-w-3xl mx-auto text-gray-100 leading-relaxed">
      Delivering reliable, high-quality outcomes through focused effort,
      end-to-end solutions, and green credentials for the construction
      ecosystem.
    </p>
  </div>
</section>

      {/* Product Grid Section */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
              Complete Solutions
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-3 sm:mb-6"></div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              High-quality chemical solutions for diverse construction and
              industrial applications
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className="group relative h-[340px] sm:h-[380px] lg:h-[420px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* ✅ Background Layer - Clear Images */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.bgImage})` }}
                ></div>

                {/* Overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/60 to-transparent"></div>

                {/* Foreground Content */}
                <div className="absolute inset-0 p-4 sm:p-5 lg:p-6 flex flex-col justify-end">
                  <div className="transform transition-all duration-500 group-hover:-translate-y-2">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 lg:mb-4 drop-shadow-lg">
                      {category.title}
                    </h3>
                    <div className="bg-white/90 backdrop-blur-lg rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 shadow-xl cursor-pointer transition-all hover:scale-[1.02]">
                      <ul className="space-y-1.5 sm:space-y-2 lg:space-y-2.5 list-disc list-inside text-left">
                        {category.products.map((item, i) => (
                          <li key={i} className="text-xs sm:text-sm text-gray-800">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* Quality Section */}
<section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Quality and Technical Support
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto"></div>
    </div>

    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {/* Quality Control Card */}
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
        {/* Background Image with More Transparency */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 blur-[1px]"
          style={{ backgroundImage: "url('/quality-control.jpg')" }}
        ></div>
        
        {/* Dark Overlay for Better Text Contrast */}
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Quality Control
          </h3>
          <p className="text-gray-900 leading-relaxed font-semibold">
            Backed by a fully equipped laboratory with qualified engineers
            and chemists. Regular tests ensure quality of finished products
            for various construction and industrial applications.
          </p>
        </div>
      </div>

      {/* Technical Support Card */}
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
        {/* Background Image with More Transparency */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 blur-[1px]"
          style={{ backgroundImage: "url('/technical-support.jpg')" }}
        ></div>
        
        {/* Dark Overlay for Better Text Contrast */}
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Technical Support
          </h3>
          <p className="text-gray-900 leading-relaxed font-semibold">
            Vigorous onsite support and quality systems maintain product
            quality and solve construction problems. Our technical team
            provides excellent services and troubleshooting where needed.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}