import { Target, Users, Award, TrendingUp, CheckCircle } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">About Us</h1>
          <p className="text-sm sm:text-base lg:text-lg text-blue-100 max-w-2xl leading-relaxed">
            Committed to developing and providing the best chemical blends for concrete 
            manufacturers to achieve durable, sustainable, and innovative building solutions.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Who We Are</h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
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
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="bg-blue-600 p-2.5 sm:p-3 rounded-lg mr-3 sm:mr-4">
                  <Target className="text-white" size={20} />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Ultimate Blend Pvt Ltd is committed to developing and providing the best 
                blends for concrete manufacturers to achieve durable, sustainable, and 
                innovative building solutions for consistent quality.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="bg-blue-600 p-2.5 sm:p-3 rounded-lg mr-3 sm:mr-4">
                  <CheckCircle className="text-white" size={20} />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                To provide our concrete manufacturing partners with superior, high-performance 
                chemical blends through rigorous research, quality assurance, and responsive 
                technical support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                <Award className="text-white" size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Quality Excellence</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We maintain rigorous quality control standards to ensure every product 
                meets or exceeds industry specifications.
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                <TrendingUp className="text-white" size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Innovation</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Continuous research and development to create cutting-edge solutions 
                for the evolving construction industry.
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow sm:col-span-2 md:col-span-1">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Customer Partnership</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We work closely with our customers to understand their needs and 
                provide tailored solutions and technical support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Leadership</h2>
            <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20 shadow-xl">
              <div className="text-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-300 to-blue-400 rounded-2xl mx-auto mb-4 sm:mb-6 shadow-lg"></div>
                <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Faheem Ahmed</h3>
                <p className="text-blue-300 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Chief Executive Officer</p>
                <p className="text-sm sm:text-base text-blue-100 leading-relaxed max-w-2xl mx-auto">
                  Under the leadership of CEO Faheem Ahmed, Ultimate Blend Pvt Ltd has grown 
                  to become a trusted name in the chemical manufacturing industry. With a vision 
                  for excellence and a commitment to innovation, our team continues to push the 
                  boundaries of what's possible in construction chemistry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">15+</div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">500+</div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">ISO</div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">Certified Facilities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">100%</div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">Quality Assured</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}