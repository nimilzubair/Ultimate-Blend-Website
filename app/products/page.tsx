import { Package, Zap, Clock, Wrench } from "lucide-react";
import Image from "next/image";

export default function ProductsPage() {
  const products = [
    {
      icon: <Package className="text-blue-600" size={40} />,
      title: "Concrete Admixtures",
      description: "High-performance admixtures that improve workability, durability, and long-term performance of concrete.",
      features: [
        "Enhanced flowability and workability retention",
        "Slump control and extended working time",
        "Reduced cracking risk",
        "Compatible with various cement types"
      ],
      applications: [
        "Ready-mix concrete",
        "Pre-cast concrete",
        "High-early-strength concrete",
        "Infrastructure projects"
      ]
    },
    {
      icon: <Zap className="text-blue-600" size={40} />,
      title: "Accelerators",
      description: "Advanced accelerator formulations for faster early strength gain and reduced formwork cycles.",
      features: [
        "Rapid early strength development",
        "Faster formwork removal",
        "Improved cold weather performance",
        "Customizable dosage for specific needs"
      ],
      applications: [
        "Cold weather concreting",
        "Precast elements",
        "Repair and rehabilitation",
        "Fast-track construction"
      ]
    },
    {
      icon: <Clock className="text-blue-600" size={40} />,
      title: "Retarders",
      description: "Specialized retarding admixtures for extended workability and temperature stability.",
      features: [
        "Extended workability window",
        "Temperature stability in hot climates",
        "Controlled setting time",
        "Consistent performance"
      ],
      applications: [
        "Hot weather concreting",
        "Large concrete pours",
        "Long-distance transportation",
        "Complex architectural elements"
      ]
    },
    {
      icon: <Wrench className="text-blue-600" size={40} />,
      title: "Cement Grinding Aids",
      description: "Innovative grinding aids designed to improve cement production efficiency and quality.",
      features: [
        "Enhanced grinding efficiency",
        "Reduced energy consumption",
        "Improved cement fineness",
        "Increased throughput"
      ],
      applications: [
        "Cement manufacturing",
        "Portland cement production",
        "Blended cement systems",
        "Quality optimization"
      ],
      note: "Coming to market in early 2026"
    }
  ];

  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Our Products
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Integrated chemical solutions delivering consistent performance, quality, and value
          </p>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Performance-Driven Chemical Blends
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                Our comprehensive product portfolio is designed to meet the diverse needs of 
                concrete manufacturers, ready-mix suppliers, and cement plants. Each product 
                is formulated with precision chemistry to deliver reliable, field-proven results.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/products-overview.jpg" 
                alt="Ultimate Blend Products" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Detail */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {products.map((product, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow border border-slate-200"
              >
                <div className="grid md:grid-cols-3">
                  <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 flex items-center justify-center border-r border-slate-200">
                    <div className="text-center">
                      <div className="bg-white p-4 rounded-2xl shadow-md mb-4 inline-block border border-blue-100">
                        {product.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">{product.title}</h3>
                      {product.note && (
                        <p className="text-sm text-blue-600 mt-3 font-semibold bg-blue-50 px-3 py-1 rounded-full inline-block">
                          {product.note}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="md:col-span-2 p-8">
                    <p className="text-slate-700 mb-8 text-lg leading-relaxed">{product.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-slate-900 mb-4 text-lg">Key Benefits</h4>
                        <ul className="space-y-3">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-blue-600 mr-3 mt-1 flex-shrink-0">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              </span>
                              <span className="text-slate-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-4 text-lg">Applications</h4>
                        <ul className="space-y-3">
                          {product.applications.map((app, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-blue-600 mr-3 mt-1 flex-shrink-0">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              </span>
                              <span className="text-slate-600">{app}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Support */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Technical Support & Service</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Our commitment doesn&apos;t end with product delivery. We provide comprehensive 
              technical support including on-site testing, mix-design optimization, pilot 
              trials, and performance monitoring.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="font-bold text-xl mb-3 text-white">Laboratory Testing</h3>
              <p className="text-slate-300">Comprehensive analysis and quality assurance</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="font-bold text-xl mb-3 text-white">On-Site Trials</h3>
              <p className="text-slate-300">Field testing and performance validation</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="font-bold text-xl mb-3 text-white">24/7 Support</h3>
              <p className="text-slate-300">Always-on technical assistance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}