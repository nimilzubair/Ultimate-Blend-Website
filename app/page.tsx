import { Target, Users, Award, TrendingUp } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Committed to developing and providing the best chemical blends for concrete 
            manufacturers to achieve durable, sustainable, and innovative building solutions.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Who We Are</h2>
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <p className="text-lg">
                Ultimate Blend Pvt Ltd is a leading manufacturer of high-performance chemical 
                blends for the construction industry in Pakistan. We specialize in producing 
                concrete admixtures, accelerators, retarders, and cement grinding aids that 
                help our customers achieve superior results in their projects.
              </p>
              <p className="text-lg">
                Our company was founded on the principles of innovation, quality, and customer 
                service. We understand that the construction industry demands reliable, 
                consistent products that perform under pressure, and we are committed to 
                delivering exactly that.
              </p>
              <p className="text-lg">
                With state-of-the-art manufacturing facilities, rigorous quality control 
                processes, and a team of experienced chemical engineers, we ensure that 
                every product that leaves our facility meets the highest standards of 
                excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-xl mr-4">
                  <Target className="text-blue-600" size={28} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Our Vision</h2>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Ultimate Blend Pvt Ltd is committed to developing and providing the best 
                blends for concrete manufacturers to achieve durable, sustainable, and 
                innovative building solutions for consistent quality.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-xl mr-4">
                  <Users className="text-blue-600" size={28} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
              </div>
              <p className="text-slate-700 leading-relaxed">
                To provide our concrete manufacturing partners with superior, high-performance 
                chemical blends through rigorous research, quality assurance, and responsive 
                technical support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-200 group-hover:scale-110 transition-transform">
                <Award className="text-blue-600" size={36} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Quality Excellence</h3>
              <p className="text-slate-600 leading-relaxed">
                We maintain rigorous quality control standards to ensure every product 
                meets or exceeds industry specifications.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-200 group-hover:scale-110 transition-transform">
                <TrendingUp className="text-blue-600" size={36} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Innovation</h3>
              <p className="text-slate-600 leading-relaxed">
                Continuous research and development to create cutting-edge solutions 
                for the evolving construction industry.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-200 group-hover:scale-110 transition-transform">
                <Users className="text-blue-600" size={36} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Customer Partnership</h3>
              <p className="text-slate-600 leading-relaxed">
                We work closely with our customers to understand their needs and 
                provide tailored solutions and technical support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Leadership</h2>
            <div className="bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-2">Faheem Ahmed</h3>
              <p className="text-blue-400 font-semibold mb-6 text-lg">Chief Executive Officer</p>
              <p className="text-slate-300 leading-relaxed text-lg">
                Under the leadership of CEO Faheem Ahmed, Ultimate Blend Pvt Ltd has grown 
                to become a trusted name in the chemical manufacturing industry. With a vision 
                for excellence and a commitment to innovation, our team continues to push the 
                boundaries of what&apos;s possible in construction chemistry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}