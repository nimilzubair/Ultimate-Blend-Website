import { Award, Shield, CheckCircle, FileCheck } from "lucide-react";
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
              Quality You Can Verify. Traceability You Can Trust.
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              At Ultimate Blend, quality is not just a promise—it&apos;s a commitment backed by 
              rigorous testing, certification, and continuous improvement. Our quality 
              management system ensures every product meets or exceeds international standards.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "ISO Certified", desc: "Quality management systems in place" },
              { icon: Shield, title: "Safety Compliant", desc: "Meets all safety and handling standards" },
              { icon: CheckCircle, title: "Batch Traceability", desc: "Complete tracking from production to delivery" },
              { icon: FileCheck, title: "QA/QC Systems", desc: "Rigorous testing at every stage" }
            ].map((item, idx) => (
              <div key={idx} className="bg-blue-50 p-5 sm:p-6 rounded-lg text-center border border-blue-100">
                <div className="bg-white w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-blue-200">
                  <item.icon className="text-blue-600" size={22} />
                </div>
                <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Process */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-10 sm:mb-12">
            Our Quality Assurance Process
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                num: "01",
                title: "Raw Material Testing",
                desc: "Every batch of raw materials undergoes rigorous testing before being approved for production. We verify purity, composition, and quality against strict specifications."
              },
              {
                num: "02",
                title: "Production Monitoring",
                desc: "Continuous monitoring throughout the manufacturing process ensures consistency. Real-time quality checks and automated systems maintain precise formulations."
              },
              {
                num: "03",
                title: "Final Product Testing",
                desc: "Comprehensive testing of finished products in our state-of-the-art laboratory. Products are released only after passing all quality parameters."
              }
            ].map((step, idx) => (
              <div key={idx} className="border border-gray-200 p-6 sm:p-8 rounded-lg">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-3 sm:mb-4">{step.num}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-4">{step.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Details */}
      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-10 sm:mb-12">
            Our Certifications & Compliance
          </h2>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-10 sm:mb-16">
            {[
              {
                icon: Award,
                title: "ISO Quality Management",
                desc: "Our facilities operate under ISO quality management standards, ensuring consistent product quality and continuous improvement in all processes."
              },
              {
                icon: Shield,
                title: "Safety Standards",
                desc: "Full compliance with occupational health and safety standards. Our products meet all required safety specifications for handling and application."
              },
              {
                icon: CheckCircle,
                title: "Environmental Compliance",
                desc: "Committed to environmental sustainability. Our manufacturing processes and products meet environmental protection standards."
              },
              {
                icon: FileCheck,
                title: "Product Testing",
                desc: "All products undergo extensive laboratory and field testing. Test reports and technical data sheets available for every batch."
              }
            ].map((cert, idx) => (
              <div key={idx} className="bg-blue-50 rounded-lg p-5 sm:p-6 border border-blue-100">
                <div className="flex items-start mb-3 sm:mb-4">
                  <div className="bg-white p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 border border-blue-200">
                    <cert.icon className="text-blue-600" size={22} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">{cert.title}</h3>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{cert.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certificate Image */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-5 sm:mb-6">
              Our Certificate
            </h3>
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="relative h-[400px] sm:h-[600px]">
                <Image 
                  src="/certificate.jpg"
                  alt="Ultimate Blend Certification"
                  fill
                  className="object-contain p-3 sm:p-4"
                />
              </div>
              <div className="p-3 sm:p-4 bg-gray-50 text-center border-t border-gray-200">
                <p className="text-gray-700 font-semibold text-sm sm:text-base">
                  ISO Quality Management Certification
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traceability */}
      <section className="py-10 sm:py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              End-to-End Traceability
            </h2>
            <p className="text-blue-100 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              Every product batch is assigned a unique identifier, allowing complete traceability 
              from raw materials to final delivery. This ensures accountability and enables rapid 
              response in case of any quality concerns.
            </p>
            <div className="grid md:grid-cols-3 gap-4 sm:gap-6 text-left">
              {[
                {
                  title: "Batch Documentation",
                  desc: "Complete records of raw materials, production parameters, and quality tests"
                },
                {
                  title: "Quality Certificates",
                  desc: "Certificates of analysis provided with every delivery"
                },
                {
                  title: "Auditable Records",
                  desc: "Comprehensive records maintained for compliance and customer audits"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 p-5 sm:p-6 rounded-lg border border-white/20">
                  <h3 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base text-white">{item.title}</h3>
                  <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Commitment to Excellence
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Quality is not a destination but a journey of continuous improvement. We invest 
              in the latest testing equipment, train our team regularly, and maintain open 
              communication with our customers to ensure we consistently deliver products that 
              meet their evolving needs. Our certifications are a testament to our commitment, 
              but our real measure of success is the trust and satisfaction of our customers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
