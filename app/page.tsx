import { Target, Users, Award, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Committed to developing and providing the best chemical blends for concrete 
            manufacturers to achieve durable, sustainable, and innovative building solutions.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Ultimate Blend Pvt Ltd is a leading manufacturer of high-performance chemical 
                blends for the construction industry in Pakistan. We specialize in producing 
                concrete admixtures, accelerators, retarders, and cement grinding aids that 
                help our customers achieve superior results in their projects.
              </p>
              <p>
                Established in 2010, our company was founded on the principles of innovation, 
                quality, and customer service. We understand that the construction industry 
                demands reliable, consistent products that perform under pressure, and we are 
                committed to delivering exactly that.
              </p>
              <p>
                With ISO-certified facilities, rigorous quality control processes, and a team 
                of experienced chemical engineers, we ensure that every product that leaves 
                our facility meets the highest standards of excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="border border-gray-200 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Target className="text-blue-600" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Ultimate Blend Pvt Ltd is committed to developing and providing the best 
                blends for concrete manufacturers to achieve durable, sustainable, and 
                innovative building solutions for consistent quality.
              </p>
            </div>
            <div className="border border-gray-200 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Users className="text-blue-600" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To provide our concrete manufacturing partners with superior, high-performance 
                chemical blends through rigorous research, quality assurance, and responsive 
                technical support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain rigorous quality control standards to ensure every product 
                meets or exceeds industry specifications.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Continuous research and development to create cutting-edge solutions 
                for the evolving construction industry.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Partnership</h3>
              <p className="text-gray-600 leading-relaxed">
                We work closely with our customers to understand their needs and 
                provide tailored solutions and technical support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Leadership</h2>
            <div className="bg-white/10 p-8 rounded-lg border border-white/20">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-lg mx-auto mb-4"></div>
                <h3 className="text-2xl font-bold mb-2">Faheem Ahmed</h3>
                <p className="text-blue-300 font-semibold mb-4">Chief Executive Officer</p>
                <p className="text-blue-100 leading-relaxed">
                  Under the leadership of CEO Faheem Ahmed, Ultimate Blend Pvt Ltd has grown 
                  to become a trusted name in the chemical manufacturing industry. With a vision 
                  for excellence and a commitment to innovation, our team continues to push the 
                  boundaries of what&apos;s possible in construction chemistry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}