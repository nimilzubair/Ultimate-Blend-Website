"use client";
import Image from "next/image";
import { Target, Users, Award, TrendingUp, CheckCircle } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section - Full Page */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full">
            <Image
              src="/hero-lab.jpg"
              alt="Chemical Laboratory"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex flex-col items-center justify-center text-center px-4">
          {/* Logo and Company Name */}
          <div className="mb-6 flex flex-col items-center">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 mb-4">
              <Image
                src="/logo.png"
                alt="Ultimate Blend Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="text-4xl sm:text-6xl font-bold text-gray-900 mb-2">
              Ultimate Blend
            </div>
            <div className="text-lg sm:text-xl text-gray-800 font-medium">
              Private Limited
            </div>
          </div>
          <p className="text-gray-900 text-sm sm:text-lg max-w-2xl leading-relaxed mb-6 font-semibold">
            Performance Driven Consistency, Total Solution Excellence &amp; Sustainable Innovation
          </p>
          <a
            href="#about"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg text-sm sm:text-base transition"
          >
            Learn More
          </a>
        </div>
      </section>

    {/* Company Overview */}
<section id="about" className="py-10 sm:py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-6">Who We Are</h2>
          <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
            <p>
              Established in 2010, Ultimate Blend Private Limited is a manufacturer and supplier of construction 
              chemicals whose expertise is providing tailored products to the customers. Having the best technical 
              resources in the industry, enables us to deliver unique solutions which are economical and effective. 
              Our proficiency in concrete technology and knowledge of materials is what makes us unique.
            </p>
            <p>
              We design and deliver chemicals to ready-mix concrete producers, cement manufacturers, construction 
              contractors, and infrastructure developers to help them enhance the performance and durability of 
              modern construction projects.
            </p>
            <p>
              Backed by a fully equipped laboratory at our own premises with a team of qualified engineers and 
              chemists, we carry out regular tests to maintain quality of finished products for various 
              construction & industrial applications. Vigorous onsite support & quality systems allow for 
              maintaining the quality of our products, as well as solve construction and industrial problems.
            </p>
            <p>
              Operating on a customer first philosophy, Ultimate Blend has carved its name in the ever-demanding 
              needs of its industry, by offering world class services and fulfilling customer requirements via 
              quality manufacturing and rigid quality control of products.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md">
          <Image
            src="/chem-lab.jpg"
            alt="Ultimate Blend Chemical Laboratory"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Management Profile */}
<section className="py-10 sm:py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">Management Profile</h2>
      
      {/* Slider on mobile, grid on desktop */}
      <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6 space-x-6 sm:grid sm:grid-cols-2 sm:gap-8 sm:space-x-0 sm:overflow-visible">
        {/* Mr. Faheem Ahmed */}
        <div className="min-w-full snap-center sm:min-w-0 bg-white border border-gray-200 p-6 rounded-lg flex-shrink-0">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Mr. Faheem Ahmed</h3>
          <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <p>
              Seasoned building material specialist with over 35 years of extensive hands-on experience in sales and marketing within the building materials industry.
            </p>
            <p>
              Distinguished career with significant achievements and contributions to the industry. Internationally recognized speaker at notable cement conferences including INTERCEM and CEMTRADE.
            </p>
          </div>
        </div>

        {/* Mr. M. Kashif */}
        <div className="min-w-full snap-center sm:min-w-0 bg-white border border-gray-200 p-6 rounded-lg flex-shrink-0">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Mr. M. Kashif</h3>
          <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <p>
              Engineering graduate and MBA in marketing with versatile capabilities demonstrated across multiple avenues in construction and building materials industry since 2007.
            </p>
            <p>
              Professional experience includes associations at management positions with different national and multinational companies in cement, ready-mix concrete and construction chemical industries.
            </p>
          </div>
        </div>
      </div>

      {/* Slide Indicators - Only visible on mobile */}
      <div className="flex justify-center gap-2 mt-4 sm:hidden">
        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
      </div>
    </div>
  </div>
</section>
     {/* Vision & Mission - Horizontal Scroll on Mobile */}
<section className="relative py-10 sm:py-16 bg-gray-50 overflow-hidden">
  <Image
    src="/vision-mission.jpg"
    alt="Vision and Mission"
    fill
    className="object-cover opacity-20 absolute inset-0" 
  />
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex overflow-x-auto pb-4 space-x-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-x-0 max-w-5xl mx-auto">
      <div className="min-w-[280px] sm:min-w-0 bg-white/40 backdrop-blur-sm border border-blue-100 p-5 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"> {/* Reduced opacity to 40% */}
        <div className="flex items-center mb-3">
          <div className="bg-blue-600 p-2 rounded-lg mr-3">
            <Target className="text-white" size={18} />
          </div>
          <h2 className="text-lg sm:text-2xl font-bold text-gray-900">Our Vision</h2>
        </div>
        <p className="text-xs sm:text-base text-gray-700 leading-relaxed">
          Engineer and formulate intelligent, ecofriendly solutions, for the global construction industry, to 
          experience a healed and healthier future together.
        </p>
      </div>
      <div className="min-w-[280px] sm:min-w-0 bg-white/40 backdrop-blur-sm border border-blue-100 p-5 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"> {/* Reduced opacity to 40% */}
        <div className="flex items-center mb-3">
          <div className="bg-blue-600 p-2 rounded-lg mr-3">
            <CheckCircle className="text-white" size={18} />
          </div>
          <h2 className="text-lg sm:text-2xl font-bold text-gray-900">Our Mission</h2>
        </div>
        <p className="text-xs sm:text-base text-gray-700 leading-relaxed">
          Foster a culture that disseminates happiness, nurtures and empowers people to devise and deliver 
          optimally viable products and services to the customers.
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
      <section className="relative py-10 sm:py-16 bg-gray-50 overflow-hidden">
        <Image
          src="/services.jpg"
          alt="Industrial Services"
          fill
          className="object-cover opacity-30 absolute inset-0"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-3xl font-bold text-center text-gray-900 mb-6 sm:mb-12">
            Our Expert Services
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm border border-blue-100/30 p-4 sm:p-8 rounded-xl shadow-sm">
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                <div className="flex items-start animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span className="text-xs sm:text-base text-gray-700">Chemicals supplies</span>
                </div>
                <div className="flex items-start animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span className="text-xs sm:text-base text-gray-700">Concrete mix design consultation</span>
                </div>
                <div className="flex items-start animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span className="text-xs sm:text-base text-gray-700">Provide reliable performance driven additives to our customer</span>
                </div>
                <div className="flex items-start animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span className="text-xs sm:text-base text-gray-700">Ensure consistent quality</span>
                </div>
                <div className="flex items-start animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0" />
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
                <p className="text-xs sm:text-base text-gray-700">Affordable cost &amp; high performance efficiency</p>
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
                <p className="text-xs sm:text-base text-gray-700">Total solution approach from design mix trials to aftersales services</p>
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
                <p className="text-xs sm:text-base text-gray-700">Ecofriendly process supporting sustainability goals</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-4 sm:p-6 rounded-xl shadow-sm">
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-base font-bold">+</span>
                <p className="text-xs sm:text-base text-gray-700">A robust technical support backbone for smooth operations</p>
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
              <div className="text-2xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">15+</div>
              <div className="text-[10px] sm:text-sm text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">100+</div>
              <div className="text-[10px] sm:text-sm text-gray-600 font-medium">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">ISO</div>
              <div className="text-[10px] sm:text-sm text-gray-600 font-medium">Certified Facility</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">100%</div>
              <div className="text-[10px] sm:text-sm text-gray-600 font-medium">Quality Assured</div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}