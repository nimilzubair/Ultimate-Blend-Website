import { Target, Users, Award, TrendingUp, CheckCircle } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-10 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">About Us</h1>
          <p className="text-xs sm:text-base lg:text-lg text-blue-100 max-w-3xl leading-relaxed">
            Performance Driven Consistency, Total Solution Excellence & Sustainable Innovation
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-6">Who We Are</h2>
            <div className="space-y-2 sm:space-y-4 text-xs sm:text-base text-gray-700 leading-relaxed">
              <p>
                Established in 1999, Ultimate Blend Private Limited has evolved into a premier manufacturer and supplier 
                of construction chemicals, proudly catering to diverse industries with quality products manufactured at 
                our state-of-the-art plant. Our expertise lies in providing tailored solutions that are both economical 
                and effective, leveraging the best technical resources in the industry.
              </p>
              <p>
                We design and deliver specialized chemicals for ready-mix concrete producers, cement manufacturers, 
                construction contractors, and ready-mix suppliers. Our proficiency in concrete technology and deep 
                knowledge of materials enables us to deliver unique solutions that address specific customer requirements.
              </p>
              <p>
                Backed by a fully equipped laboratory and rigorous quality control processes, we source raw materials 
                from quality suppliers worldwide. Our technical personnel work closely with customers to offer excellent 
                services, product selections, and troubleshooting support, ensuring complete satisfaction for both 
                internal and external stakeholders.
              </p>
              <p>
                Operating on a customer-first philosophy, we have carved our name in the industry by offering world-class 
                services and building mutually valuable long-term relationships with vendors and clients alike. Our 
                commitment to innovation, quality assurance, and sustainable practices has made us a trusted partner 
                of the entire engineering community associated with the construction industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Management Profile */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-6 text-center">Management Profile</h2>
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-4 sm:p-8 rounded-xl shadow-sm">
              <div className="space-y-2 sm:space-y-4 text-xs sm:text-base text-gray-700 leading-relaxed">
                <p>
                  <span className="font-semibold text-gray-900">Mr. Kamil Ahmed</span>, a chemical engineer with an MBA in marketing, brings extensive domestic and international experience to Ultimate Blends (Pvt) Ltd.
                </p>
                <p>
                  Since 2007, he has accumulated comprehensive expertise in the construction and building materials industry. His distinguished career has progressed from commercial manager to technical manager and technical director.
                </p>
                <p>
                  Mr. Kamil is internationally recognized as a speaker at notable cement conferences, including INTERCEM and CEMTECH, where he shares his knowledge and insights with industry professionals worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Horizontal Scroll on Mobile */}
      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto pb-4 space-x-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-x-0 max-w-5xl mx-auto">
            <div className="min-w-[280px] sm:min-w-0 bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-5 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <div className="bg-blue-600 p-2 rounded-lg mr-3">
                  <Target className="text-white" size={18} />
                </div>
                <h2 className="text-lg sm:text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-xs sm:text-base text-gray-700 leading-relaxed">
                Engineer and formulate intelligent, ecofriendly solutions, for the global construction industry, to 
                experience a faster and healthier future together.
              </p>
            </div>
            <div className="min-w-[280px] sm:min-w-0 bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-5 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <div className="bg-blue-600 p-2 rounded-lg mr-3">
                  <CheckCircle className="text-white" size={18} />
                </div>
                <h2 className="text-lg sm:text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-xs sm:text-base text-gray-700 leading-relaxed">
                Foster a culture that demonstrates happiness, nurtures and supports people to devise and deliver optimally 
                built products and services to the customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Horizontal Scroll on Mobile */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-3xl font-bold text-center text-gray-900 mb-6 sm:mb-12">Our Core Values</h2>
          <div className="flex overflow-x-auto pb-4 space-x-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-x-0 max-w-5xl mx-auto">
            <div className="min-w-[260px] sm:min-w-0 text-center bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2">Quality Excellence</h3>
              <p className="text-xs sm:text-base text-gray-600 leading-relaxed">
                We maintain rigorous quality control standards to ensure every product 
                meets or exceeds industry specifications.
              </p>
            </div>
            <div className="min-w-[260px] sm:min-w-0 text-center bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-xs sm:text-base text-gray-600 leading-relaxed">
                Continuous research and development to create cutting-edge solutions 
                for the evolving construction industry.
              </p>
            </div>
            <div className="min-w-[260px] sm:min-w-0 text-center bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2">Customer Partnership</h3>
              <p className="text-xs sm:text-base text-gray-600 leading-relaxed">
                We work closely with our customers to understand their needs and 
                provide tailored solutions and technical support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expert Services */}
      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-3xl font-bold text-center text-gray-900 mb-6 sm:mb-12">Our Expert Services</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-4 sm:p-8 rounded-xl shadow-sm">
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-0.5 text-base font-bold">+</span>
                  <span className="text-xs sm:text-base text-gray-700">Chemicals supplies</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-0.5 text-base font-bold">+</span>
                  <span className="text-xs sm:text-base text-gray-700">Concrete mix design consultation</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-0.5 text-base font-bold">+</span>
                  <span className="text-xs sm:text-base text-gray-700">Provide reliable performance driven additives</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-0.5 text-base font-bold">+</span>
                  <span className="text-xs sm:text-base text-gray-700">Ensure consistent quality</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-0.5 text-base font-bold">+</span>
                  <span className="text-xs sm:text-base text-gray-700">Confirmed timely deliveries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Sectors */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4">Major Sectors We Serve</h2>
          <p className="text-center text-blue-100 mb-8 sm:mb-12 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Delivering reliable, high-quality outcomes through focused effort, end-to-end solutions, and 
            green credentials for the construction ecosystem
          </p>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto">
            {/* Row 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/20 text-center hover:bg-white/20 transition-all">
              <h3 className="font-semibold text-xs sm:text-sm">Pharma Industries</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/20 text-center hover:bg-white/20 transition-all">
              <h3 className="font-semibold text-xs sm:text-sm">Textile Industries</h3>
            </div>

            {/* Row 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/20 text-center hover:bg-white/20 transition-all">
              <h3 className="font-semibold text-xs sm:text-sm">Sugar Industries</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/20 text-center hover:bg-white/20 transition-all">
              <h3 className="font-semibold text-xs sm:text-sm">Highways</h3>
            </div>

            {/* Row 3 */}
            <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/20 text-center hover:bg-white/20 transition-all">
              <h3 className="font-semibold text-xs sm:text-sm">Commercial Projects</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/20 text-center hover:bg-white/20 transition-all">
              <h3 className="font-semibold text-xs sm:text-sm">Cement Grinding</h3>
            </div>

            {/* Row 4 */}
            <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/20 text-center hover:bg-white/20 transition-all">
              <h3 className="font-semibold text-xs sm:text-sm">Ready Mix</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/20 text-center hover:bg-white/20 transition-all">
              <h3 className="font-semibold text-xs sm:text-sm">Underpasses</h3>
            </div>

            {/* Row 5 - Last item spans 2 columns */}
            <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/20 text-center hover:bg-white/20 transition-all col-span-2">
              <h3 className="font-semibold text-xs sm:text-sm">Dams Construction</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose UBPL - Compact Grid */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-3xl font-bold text-center text-gray-900 mb-6 sm:mb-12">Why Choose UBPL</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-4 sm:p-6 rounded-xl shadow-sm">
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-base font-bold">+</span>
                <p className="text-xs sm:text-base text-gray-700">Affordable cost & high performance efficiency</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-4 sm:p-6 rounded-xl shadow-sm">
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-base font-bold">+</span>
                <p className="text-xs sm:text-base text-gray-700">Standardised product range</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-4 sm:p-6 rounded-xl shadow-sm">
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-base font-bold">+</span>
                <p className="text-xs sm:text-base text-gray-700">Total solution approach from design mix trials to aftersales</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-4 sm:p-6 rounded-xl shadow-sm">
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-base font-bold">+</span>
                <p className="text-xs sm:text-base text-gray-700">Quality and traceability you can audit with confidence</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-4 sm:p-6 rounded-xl shadow-sm">
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-base font-bold">+</span>
                <p className="text-xs sm:text-base text-gray-700">Eco-friendly process supporting sustainability goals</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-4 sm:p-6 rounded-xl shadow-sm">
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-base font-bold">+</span>
                <p className="text-xs sm:text-base text-gray-700">Robust technical support for smooth operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-8 text-center text-gray-900">Chief Executive Officer</h2>
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-4 sm:p-8 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mx-auto mb-3 sm:mb-6 shadow-lg"></div>
                <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2 text-gray-900">Mr. Faheem Ahmed</h3>
                <p className="text-blue-600 font-semibold mb-2 sm:mb-4 text-xs sm:text-base">Chief Executive Officer</p>
                <p className="text-xs sm:text-base text-gray-700 leading-relaxed max-w-2xl mx-auto mb-3">
                  A seasoned building material specialist with over 35 years of extensive experience in sales and marketing. Since 2018, he has led the Trading business with DGKCL.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 max-w-2xl mx-auto">
                  <div className="bg-white/60 backdrop-blur-sm border border-blue-200 p-3 rounded-xl">
                    <p className="text-[10px] sm:text-xs font-semibold text-gray-900 mb-1">Education</p>
                    <p className="text-[10px] sm:text-xs text-gray-700">MBA in Marketing, Preston University Karachi</p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm border border-blue-200 p-3 rounded-xl">
                    <p className="text-[10px] sm:text-xs font-semibold text-gray-900 mb-1">Recognition</p>
                    <p className="text-[10px] sm:text-xs text-gray-700">International speaker at INTERCEM & CEMTRADE</p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm border border-blue-200 p-3 rounded-xl">
                    <p className="text-[10px] sm:text-xs font-semibold text-gray-900 mb-1">Network</p>
                    <p className="text-[10px] sm:text-xs text-gray-700">1,700+ LinkedIn followers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 sm:py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">14+</div>
              <div className="text-[10px] sm:text-sm text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">500+</div>
              <div className="text-[10px] sm:text-sm text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">ISO</div>
              <div className="text-[10px] sm:text-sm text-gray-600 font-medium">Certified Facilities</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">100%</div>
              <div className="text-[10px] sm:text-sm text-gray-600 font-medium">Quality Assured</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}