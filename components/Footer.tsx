import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-12 h-12">
                <Image 
                  src="/logo.png" 
                  alt="Ultimate Blend Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Ultimate Blend Pvt Ltd</h3>
                <p className="text-xs text-blue-400">The Chemical Expert</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Leading manufacturer of high-performance chemical blends for the construction industry, 
              delivering quality and innovation since our inception.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start group">
                <MapPin className="mr-2 flex-shrink-0 mt-0.5 text-blue-400" size={16} />
                <span className="text-slate-400 text-sm">Karachi, Pakistan</span>
              </li>
              <li className="flex items-center group">
                <Phone className="mr-2 flex-shrink-0 text-blue-400" size={16} />
                <a 
                  href="tel:+923052006600" 
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  +92 305 2006600
                </a>
              </li>
              <li className="flex items-center group">
                <Mail className="mr-2 flex-shrink-0 text-blue-400" size={16} />
                <a 
                  href="mailto:info@ultimate-blend.com" 
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  info@ultimate-blend.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Ultimate Blend Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}