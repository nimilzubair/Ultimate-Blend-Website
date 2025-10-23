'use client';

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`${formData.subject} - Contact Form`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Company: ${formData.company}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}`
    );

    window.location.href = `mailto:info@ultimate-blend.com?subject=${subject}&body=${body}`;
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
      setSubmitSuccess(false);
    }, 3000);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 sm:mb-4">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl leading-relaxed">
            Get in touch with our team. We&apos;re here to answer your questions and help you 
            find the right solutions for your needs.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 sm:gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Get In Touch</h2>
              <p className="text-gray-700 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                Have questions about our products or services? Our team is ready to assist you. 
                Reach out to us through any of the following channels:
              </p>

              <div className="space-y-5 sm:space-y-6">
                <div className="flex items-start group">
                  <div className="bg-blue-100 p-3 sm:p-4 rounded-xl mr-4 border border-blue-200 group-hover:bg-blue-200 transition-colors">
                    <MapPin className="text-blue-600" size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Office Address</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      Karachi, Sindh<br />
                      Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-blue-100 p-3 sm:p-4 rounded-xl mr-4 border border-blue-200 group-hover:bg-blue-200 transition-colors">
                    <Phone className="text-blue-600" size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Phone</h3>
                    <a href="tel:+923052006600" className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base">
                      021 3432 0417
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-blue-100 p-3 sm:p-4 rounded-xl mr-4 border border-blue-200 group-hover:bg-blue-200 transition-colors">
                    <Mail className="text-blue-600" size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Email</h3>
                    <a href="mailto:info@ultimate-blend.com" className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base">
                      info@ultimate-blend.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-8 bg-gradient-to-br from-blue-50 to-gray-50 p-5 sm:p-6 rounded-2xl border border-blue-200">
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
                    Your email client has been opened. Please send the email to complete your message.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {["name", "email", "phone", "company"].map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2 capitalize">
                      {field === "name" ? "Full Name *" :
                       field === "email" ? "Email Address *" :
                       field === "phone" ? "Phone Number" :
                       "Company Name"}
                    </label>
                    <input
                      type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                      id={field}
                      name={field}
                      required={field === "name" || field === "email"}
                      value={(formData as any)[field]}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                      placeholder={
                        field === "name" ? "John Doe" :
                        field === "email" ? "john@example.com" :
                        field === "phone" ? "+92 300 0000000" :
                        "Your Company"
                      }
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
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
                  <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
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
      <section className="py-14 sm:py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            For urgent inquiries or technical support, please call us directly. 
            Our team is available during business hours to assist you.
          </p>
          <a
            href="tel:+923052006600"
            className="inline-flex items-center bg-white text-blue-900 hover:bg-gray-100 font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-xl transition-colors shadow-xl text-sm sm:text-base"
          >
            <Phone className="mr-2" size={18} />
            Call Now: 021 3432 0417
          </a>
        </div>
      </section>
    </div>
  );
}
