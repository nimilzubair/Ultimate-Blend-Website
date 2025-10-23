import { Package, Zap, Clock, Wrench } from "lucide-react";

export default function ProductsPage() {
  const products = [
    {
      icon: <Package className="text-blue-600" size={36} />,
      title: "Concrete Admixtures",
      description:
        "High-performance admixtures that improve workability, durability, and long-term performance of concrete.",
      features: [
        "Enhanced flowability and workability retention",
        "Slump control and extended working time",
        "Reduced cracking risk",
        "Compatible with various cement types",
      ],
      applications: [
        "Ready-mix concrete",
        "Pre-cast concrete",
        "High-early-strength concrete",
        "Infrastructure projects",
      ],
    },
    {
      icon: <Zap className="text-blue-600" size={36} />,
      title: "Accelerators",
      description:
        "Advanced accelerator formulations for faster early strength gain and reduced formwork cycles.",
      features: [
        "Rapid early strength development",
        "Faster formwork removal",
        "Improved cold weather performance",
        "Customizable dosage for specific needs",
      ],
      applications: [
        "Cold weather concreting",
        "Precast elements",
        "Repair and rehabilitation",
        "Fast-track construction",
      ],
    },
    {
      icon: <Clock className="text-blue-600" size={36} />,
      title: "Retarders",
      description:
        "Specialized retarding admixtures for extended workability and temperature stability.",
      features: [
        "Extended workability window",
        "Temperature stability in hot climates",
        "Controlled setting time",
        "Consistent performance",
      ],
      applications: [
        "Hot weather concreting",
        "Large concrete pours",
        "Long-distance transportation",
        "Complex architectural elements",
      ],
    },
    {
      icon: <Wrench className="text-blue-600" size={36} />,
      title: "Cement Grinding Aids",
      description:
        "Innovative grinding aids designed to improve cement production efficiency and quality.",
      features: [
        "Enhanced grinding efficiency",
        "Reduced energy consumption",
        "Improved cement fineness",
        "Increased throughput",
      ],
      applications: [
        "Cement manufacturing",
        "Portland cement production",
        "Blended cement systems",
        "Quality optimization",
      ],
      note: "Coming to market in early 2026",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Our Products
          </h1>
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl">
            Integrated chemical solutions delivering consistent performance,
            quality, and value
          </p>
        </div>
      </section>

      {/* Products Detail */}
      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                <div className="p-5 sm:p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row items-start mb-5 sm:mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg mr-0 sm:mr-4 mb-3 sm:mb-0 flex-shrink-0">
                      {product.icon}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                        {product.title}
                      </h3>
                      {product.note && (
                        <p className="text-xs sm:text-sm text-blue-600 font-semibold mb-1 sm:mb-2">
                          {product.note}
                        </p>
                      )}
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 sm:mb-4 text-base sm:text-lg">
                        Key Benefits
                      </h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-xs sm:text-sm"
                          >
                            <span className="text-blue-600 mr-2 mt-1">•</span>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 sm:mb-4 text-base sm:text-lg">
                        Applications
                      </h4>
                      <ul className="space-y-2">
                        {product.applications.map((app, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-xs sm:text-sm"
                          >
                            <span className="text-blue-600 mr-2 mt-1">•</span>
                            <span className="text-gray-600">{app}</span>
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

      {/* Technical Support */}
      <section className="py-12 sm:py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Technical Support & Service
            </h2>
            <p className="text-blue-100 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              Our commitment doesn&apos;t end with product delivery. We provide
              comprehensive technical support including on-site testing,
              mix-design optimization, pilot trials, and performance monitoring.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 p-5 sm:p-6 rounded-lg border border-white/20 text-center">
              <h3 className="font-bold text-base sm:text-lg mb-2">
                Laboratory Testing
              </h3>
              <p className="text-blue-100 text-xs sm:text-sm">
                Comprehensive analysis and quality assurance
              </p>
            </div>
            <div className="bg-white/10 p-5 sm:p-6 rounded-lg border border-white/20 text-center">
              <h3 className="font-bold text-base sm:text-lg mb-2">
                On-Site Trials
              </h3>
              <p className="text-blue-100 text-xs sm:text-sm">
                Field testing and performance validation
              </p>
            </div>
            <div className="bg-white/10 p-5 sm:p-6 rounded-lg border border-white/20 text-center">
              <h3 className="font-bold text-base sm:text-lg mb-2">
                24/7 Support
              </h3>
              <p className="text-blue-100 text-xs sm:text-sm">
                Always-on technical assistance
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
