import { Droplet, Hammer, Layers, Zap, Square, Shield, Factory, Home, Building, Brush, Wrench } from "lucide-react";

export default function ProductsPage() {
  const productCategories = [
    {
      icon: <Droplet className="text-white" size={32} />,
      title: "Concrete Admixtures",
      products: [
        "High strength super plasticizer",
        "Polycarboxylate based plasticizer",
        "Slump retention admixtures",
        "Air entraining admixture",
        "Shotcrete Accelerator"
      ]
    },
    {
      icon: <Factory className="text-white" size={32} />,
      title: "Cement Additives",
      products: [
        "Improved grinding efficiency",
        "Reduce energy cost",
        "Improved durability and performance"
      ]
    },
    {
      icon: <Layers className="text-white" size={32} />,
      title: "Tile Adhesives & Grouts",
      products: [
        "Standard grade adhesives",
        "Better adhesion than traditional cement mortar",
        "Reduced shrinkage and hollowness",
        "Suitable for interior and exterior use",
        "Quality aggregates and polymers"
      ]
    },
    {
      icon: <Square className="text-white" size={32} />,
      title: "Cementitious Grouts",
      products: [
        "Restricted grout",
        "General purpose non-shrink grout",
        "Bearing / Bedding grout"
      ]
    },
    {
      icon: <Shield className="text-white" size={32} />,
      title: "Waterproofing Solutions",
      products: [
        "Crystalline capillary coating",
        "Integral waterproofing admixture",
        "Powder based waterproofing",
        "Crystalline waterproofing admixture"
      ]
    },
    {
      icon: <Home className="text-white" size={32} />,
      title: "Dry Mix Mortars & Plasters",
      products: [
        "Factory manufactured dry mortars",
        "Easy handling - Just add water",
        "Low wastage & environmentally friendly",
        "Quality assurance & standard quality",
        "Saves man hours & improves productivity"
      ]
    },
    {
      icon: <Building className="text-white" size={32} />,
      title: "Epoxy Floorings & Coatings",
      products: [
        "Hard wearing & durable solutions",
        "Easy to clean seamless surface",
        "Chemically resistant surface",
        "Improves safety & productivity",
        "Cost-efficient flooring solution"
      ]
    },
    {
      icon: <Wrench className="text-white" size={32} />,
      title: "Building Care & Maintenance",
      products: [
        "Crack fillers & repair mortars",
        "Epoxy coatings & waterproofing",
        "Cement & gypsum based wall coatings",
        "Surface sealers & protective coatings",
        "SBR and related chemicals"
      ]
    },
    {
      icon: <Zap className="text-white" size={32} />,
      title: "Shotcrete Accelerators",
      products: [
        "Environmentally friendly and safer to handle",
        "Suitable for dry and wet mix shotcrete",
        "Long-term durability guaranteed"
      ]
    },
    {
      icon: <Hammer className="text-white" size={32} />,
      title: "Industrial Flooring",
      products: [
        "Non-metallic floor hardener",
        "Acrylic floor sealer",
        "Self-leveling epoxy resin coating",
        "Epoxy based mortar"
      ]
    },
    {
      icon: <Brush className="text-white" size={32} />,
      title: "Decorative Concrete",
      products: [
        "Stamped concrete solutions",
        "Acid staining floors",
        "Micro topping flooring",
        "Wash terrazzo floors",
        "Polished concrete countertops"
      ]
    },
    {
      icon: <Shield className="text-white" size={32} />,
      title: "Building Insulation",
      products: [
        "Energy efficiency solutions",
        "Reduces heating & cooling costs by 60-70%",
        "Various insulation materials & systems",
        "Improves building envelope performance"
      ]
    },
    {
      icon: <Factory className="text-white" size={32} />,
      title: "Industrial Chemicals",
      products: [
        "Pharmaceuticals, Agriculture, Sugar Mills",
        "Textile, Foods, Fertilizer industries",
        "Construction & Water Treatment",
        "Specialty chemical solutions"
      ]
    },
    {
      icon: <Droplet className="text-white" size={32} />,
      title: "Joint Sealants",
      products: [
        "Polyurethane sealant",
        "Polysulphides sealant",
        "High-performance sealing solutions"
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Our Products</h1>
          <p className="text-sm sm:text-base lg:text-lg text-blue-100 max-w-3xl leading-relaxed">
            Since 1999, delivering reliable, high-quality outcomes through focused effort, end-to-end solutions, 
            and green credentials for the construction ecosystem. Backed by fully equipped laboratories and qualified engineers.
          </p>
        </div>
      </section>

      

      {/* Products Grid */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Complete Solutions</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              High-quality chemical solutions for diverse construction and industrial applications
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-5 sm:p-6">
                  <div className="bg-white/20 w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="p-5 sm:p-6">
                  <ul className="space-y-2.5 sm:space-y-3">
                    {category.products.map((product, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm">
                        <span className="text-blue-600 mr-2 mt-1 flex-shrink-0">◆</span>
                        <span className="text-gray-700 leading-relaxed">{product}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-12 sm:py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Product Advantages
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-4 sm:p-6 rounded-xl text-center">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">High Performance</h3>
              <p className="text-xs sm:text-sm text-gray-600">Superior efficiency and results</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-4 sm:p-6 rounded-xl text-center">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Quality Assured</h3>
              <p className="text-xs sm:text-sm text-gray-600">Consistent and reliable products</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-4 sm:p-6 rounded-xl text-center">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Droplet className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Eco-Friendly</h3>
              <p className="text-xs sm:text-sm text-gray-600">Sustainable formulations</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-4 sm:p-6 rounded-xl text-center">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Square className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Cost Effective</h3>
              <p className="text-xs sm:text-sm text-gray-600">Affordable and efficient</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-12 sm:py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Quality & Technical Support</h2>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Quality Control</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Backed by a fully equipped laboratory with qualified engineers and chemists. Regular tests ensure 
                  quality of finished products for various construction & industrial applications.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Technical Support</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Vigorous onsite support & quality systems maintain product quality and solve construction problems. 
                  Our technical team provides excellent services and troubleshooting where needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}