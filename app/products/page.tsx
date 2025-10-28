import ProductCard from '@/components/ProductCard';

export default function ProductsPage() {
  const productCategories = [
    {
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
      title: "Cement Additives",
      products: [
        "Improved grinding efficiency",
        "Reduce energy cost",
        "Improved durability and performance"
      ]
    },
    {
      title: "Tile Adhesives & Grouts",
      products: [
        "Standard grade adhesives",
        "Better adhesion than traditional cement mortar",
        "Reduced shrinkage and hollowness",
        "Suitable for interior and exterior use"
      ]
    },
    {
      title: "Cementitious Grouts",
      products: [
        "Restricted grout",
        "General purpose non-shrink grout",
        "Bearing / Bedding grout"
      ]
    },
    {
      title: "Waterproofing Solutions",
      products: [
        "Crystalline capillary coating",
        "Integral waterproofing admixture",
        "Powder based waterproofing",
        "Crystalline waterproofing admixture"
      ]
    },
    {
      title: "Joint Sealants",
      products: [
        "Polyurethane sealant",
        "Polysulphides sealant",
        "High-performance sealing solutions"
      ]
    },
    {
      title: "Shotcrete Accelerators",
      products: [
        "Environmentally friendly and safer to handle",
        "Suitable for dry and wet mix shotcrete",
        "Long-term durability guaranteed"
      ]
    },
    {
      title: "Industrial Flooring",
      products: [
        "Non-metallic floor hardener",
        "Acrylic floor sealer",
        "Self-leveling epoxy resin coating",
        "Epoxy based mortar"
      ]
    },
    {
      title: "Industrial Chemicals",
      products: [
        "Pharmaceuticals, Agriculture, Sugar Mills",
        "Textile, Foods, Fertilizer industries",
        "Construction & Water Treatment",
        "Specialty chemical solutions"
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
            Since 2010, delivering reliable, high-quality outcomes through focused effort, end-to-end solutions, 
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
              <ProductCard
                key={index}
                title={category.title}
                products={category.products}
              />
            ))}
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