import { Award, Shield, CheckCircle, FileCheck } from "lucide-react";

export default function CertificationsPage() {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Certifications & Quality
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Committed to the highest standards of quality, safety, and environmental responsibility
          </p>
        </div>
      </section>

      {/* Quality Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Quality You Can Verify. Traceability You Can Trust.
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              At Ultimate Blend, quality is not just a promise—it's a commitment backed by 
              rigorous testing, certification, and continuous improvement. Our quality 
              management system ensures every product meets or exceeds international standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "ISO Certified", desc: "Quality management systems in place" },
              { icon: Shield, title: "Safety Compliant", desc: "Meets all safety and handling standards" },
              { icon: CheckCircle, title: "Batch Traceability", desc: "Complete tracking from production to delivery" },
              { icon: FileCheck, title: "QA/QC Systems", desc: "Rigorous testing at every stage" }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow border border-blue-100">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md border border-blue-200">
                  <item.icon className="text-blue-600" size={28} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
            Our Quality Assurance Process
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
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
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200">
                <div className="text-5xl font-bold text-blue-600 mb-4">{step.num}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
            Our Certifications & Compliance
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-blue-200">
                <div className="flex items-start mb-4">
                  <div className="bg-white p-3 rounded-xl mr-4 shadow-md border border-blue-100">
                    <cert.icon className="text-blue-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{cert.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{cert.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traceability */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">End-to-End Traceability</h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Every product batch is assigned a unique identifier, allowing complete traceability 
              from raw materials to final delivery. This ensures accountability and enables rapid 
              response in case of any quality concerns.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
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
                <div key={idx} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <h3 className="font-bold text-lg mb-2 text-white">{item.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Commitment to Excellence</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
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