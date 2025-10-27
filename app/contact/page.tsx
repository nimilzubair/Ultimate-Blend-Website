'use client';

import { useState, ChangeEvent, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: ''
        });
      } else {
        alert(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-blue-100 max-w-2xl leading-relaxed">
            Get in touch with our team. We&apos;re here to answer your questions and help you 
            find the right solutions for your needs.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Get In Touch</h2>
              <p className="text-gray-700 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                Have questions about our products or services? Our team is ready to assist you. 
                Reach out to us through any of the following channels:
              </p>

              <div className="space-y-5 sm:space-y-6">
                <div className="flex items-start group">
                  <div className="bg-blue-100 p-3 sm:p-4 rounded-xl mr-4 border border-blue-200 group-hover:bg-blue-200 transition-colors flex-shrink-0">
                    <MapPin className="text-blue-600" size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Office Address</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      Plot # E-71, P&amp;T Co-Operative Housing Society,<br />
                      Sector 31-D, Korangi Township, Karachi
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-blue-100 p-3 sm:p-4 rounded-xl mr-4 border border-blue-200 group-hover:bg-blue-200 transition-colors flex-shrink-0">
                    <Phone className="text-blue-600" size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Phone</h3>
                    <a href="tel:+92213432041" className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base block">
                      021-34320417
                    </a>
                    <a href="tel:+923212000978" className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base block mt-1">
                      +92 321 2000978
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-blue-100 p-3 sm:p-4 rounded-xl mr-4 border border-blue-200 group-hover:bg-blue-200 transition-colors flex-shrink-0">
                    <Mail className="text-blue-600" size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Email</h3>
                    <a href="mailto:ultimateblend2025@outlook.com" className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base break-all">
                      ultimateblend2025@outlook.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-8 bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-5 sm:p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 text-base sm:text-lg">Business Hours</h3>
                <div className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5 sm:mb-6">Send Us a Message</h2>
              
              {submitSuccess && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-5 sm:mb-6 flex items-center">
                  <CheckCircle className="text-green-600 mr-3 flex-shrink-0" size={22} />
                  <p className="text-green-800 text-xs sm:text-sm">
                    Your message has been sent successfully! We&apos;ll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="+92 300 0000000"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                  >
                    <option value="">Select a subject</option>
                    <option value="Product Inquiry">Product Inquiry</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Request Quote">Request Quote</option>
                    <option value="Partnership Opportunity">Partnership Opportunity</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all text-sm sm:text-base"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-600/30 text-sm sm:text-base"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2" size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            For urgent inquiries or technical support, please call us directly. 
            Our team is available during business hours to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+92213432041"
              className="inline-flex items-center bg-white text-blue-900 hover:bg-gray-100 font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-xl transition-colors shadow-xl text-sm sm:text-base"
            >
              <Phone className="mr-2" size={18} />
              Call: 021-34320417
            </a>
            <a
              href="tel:+923212000978"
              className="inline-flex items-center bg-white text-blue-900 hover:bg-gray-100 font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-xl transition-colors shadow-xl text-sm sm:text-base"
            >
              <Phone className="mr-2" size={18} />
              Call: +92 321 2000978
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}