import Image from "next/image";

export default function CertificationsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 sm:mb-4">
            Certifications & Quality
          </h1>
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl">
            Committed to the highest standards of quality, safety, and environmental responsibility
          </p>
        </div>
      </section>

      {/* Quality Overview */}
      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Certified Quality Excellence
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              At Ultimate Blend, our ISO certification demonstrates our commitment to maintaining 
              the highest quality standards in every aspect of our manufacturing and operations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "ISO Certified", desc: "Internationally recognized quality management system" },
              { title: "Established 2010", desc: "Over a decade of quality manufacturing excellence" },
              { title: "Research & Development", desc: "Continuous innovation in chemical solutions" },
              { title: "Quality Systems", desc: "Rigorous testing and process controls" }
            ].map((item, idx) => (
              <div key={idx} className="bg-blue-50 p-5 sm:p-6 rounded-lg text-center border border-blue-100">
                <div className="bg-white w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-blue-200">
                  <span className="text-blue-600 font-bold text-lg">{idx + 1}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ISO Certificate Display */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-10 sm:mb-12">
              Our ISO Certification
            </h2>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
              <div className="relative h-[500px] sm:h-[700px]">
                <Image 
                  src="/certificate.jpg" // Replace with your actual certificate path
                  alt="Ultimate Blend ISO 9001 Quality Management System Certification"
                  fill
                  className="object-contain p-4 sm:p-6"
                  priority
                />
              </div>
              <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-200">
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    ISO 9001:2015 Quality Management System
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Certified for consistent quality in manufacturing and supply of construction chemicals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Process */}
      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-10 sm:mb-12">
            Our Quality Assurance Process
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                num: "01",
                title: "Raw Material Testing",
                desc: "Every batch of raw materials undergoes rigorous testing before being approved for production. We verify purity, composition, and quality against strict ISO specifications."
              },
              {
                num: "02",
                title: "Production Monitoring",
                desc: "Continuous monitoring throughout the manufacturing process ensures consistency. Real-time quality checks and automated systems maintain precise formulations as per ISO standards."
              },
              {
                num: "03",
                title: "Final Product Testing",
                desc: "Comprehensive testing of finished products in our state-of-the-art laboratory. Products are released only after passing all quality parameters and ISO requirements."
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-white border border-gray-200 p-6 sm:p-8 rounded-lg shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-3 sm:mb-4">{step.num}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-4">{step.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-10 sm:mb-12">
            Our Quality Standards
          </h2>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "ISO Quality Management",
                desc: "Our facilities operate under ISO 9001:2015 quality management standards, ensuring consistent product quality and continuous improvement in all processes."
              },
              {
                title: "Research & Development",
                desc: "Continuous innovation and development of advanced chemical solutions through dedicated R&D efforts aligned with international standards."
              },
              {
                title: "Safety Compliance",
                desc: "Full compliance with occupational health and safety standards. Our products meet all required safety specifications for handling and application."
              },
              {
                title: "Batch Traceability",
                desc: "Complete tracking from raw materials to final delivery with comprehensive documentation as per ISO requirements."
              }
            ].map((cert, idx) => (
              <div key={idx} className="bg-blue-50 rounded-lg p-5 sm:p-6 border border-blue-100">
                <div className="flex items-start mb-3 sm:mb-4">
                  <div className="bg-white p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 border border-blue-200">
                    <span className="text-blue-600 font-bold text-lg">✓</span>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">{cert.title}</h3>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{cert.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-10 sm:py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Our Commitment to Excellence
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-8">
              Our ISO 9001:2015 certification is a testament to our unwavering commitment to quality. 
              We continuously invest in improving our processes, training our team, and maintaining 
              the highest standards to deliver exceptional products and services to our customers.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                {
                  title: "Continuous Improvement",
                  desc: "Regular audits and process enhancements to maintain ISO standards"
                },
                {
                  title: "Customer Focus",
                  desc: "Quality systems designed to meet and exceed customer expectations"
                },
                {
                  title: "Process Excellence",
                  desc: "Standardized procedures ensuring consistent quality delivery"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 p-5 sm:p-6 rounded-lg border border-white/20">
                  <h3 className="font-bold mb-2 text-sm sm:text-base text-white">{item.title}</h3>
                  <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}