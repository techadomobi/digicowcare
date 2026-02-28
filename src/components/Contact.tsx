import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4">
            Contact Us
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Questions about services or need expert consultation? Reach out anytime. We're committed to supporting your cattle care needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex gap-4 p-6 bg-white rounded-2xl border-2 border-amber-100 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center text-2xl">
                  📍
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Visit Our Office</h3>
                <p className="text-gray-700 leading-relaxed">
                  123 Dairy Farm Road<br />
                  Gujarat Agricultural Hub<br />
                  Ahmedabad, Gujarat 380001<br />
                  India
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white rounded-2xl border-2 border-orange-100 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-orange-100 text-orange-700 rounded-2xl flex items-center justify-center text-2xl">
                  ☎️
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Call Now</h3>
                <p className="text-gray-700 leading-relaxed font-medium">
                  Main: <a href="tel:+911234567890" className="text-amber-700 hover:text-orange-700">+91 123 456 7890</a><br />
                  Emergency: <a href="tel:+919876543210" className="text-amber-700 hover:text-orange-700">+91 987 654 3210</a><br />
                  Toll Free: <a href="tel:18001234567" className="text-amber-700 hover:text-orange-700">1800-123-4567</a>
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white rounded-2xl border-2 border-yellow-100 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-yellow-100 text-yellow-700 rounded-2xl flex items-center justify-center text-2xl">
                  ✉️
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-700 leading-relaxed">
                  General: <a href="mailto:care@digivetcare.in" className="text-amber-700 hover:text-orange-700">care@digivetcare.in</a><br />
                  Support: <a href="mailto:support@digivetcare.in" className="text-amber-700 hover:text-orange-700">support@digivetcare.in</a><br />
                  Sales: <a href="mailto:sales@digivetcare.in" className="text-amber-700 hover:text-orange-700">sales@digivetcare.in</a>
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white rounded-2xl border-2 border-amber-100 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center text-2xl">
                  🕐
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Operating Hours</h3>
                <p className="text-gray-700 leading-relaxed">
                  Mon - Sat: 8:00 AM - 8:00 PM<br />
                  Sunday: 9:00 AM - 5:00 PM<br />
                  <span className="font-semibold">24/7 Emergency Available</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-10 border-2 border-gray-100 shadow-xl">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-5 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-amber-500 focus:bg-white outline-none transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-3">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-5 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-amber-500 focus:bg-white outline-none transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-5 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-amber-500 focus:bg-white outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-bold text-gray-900 mb-3">
                  Service Required
                </label>
                <select
                  id="service"
                  className="w-full px-5 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-amber-500 focus:bg-white outline-none transition-all font-medium"
                >
                  <option>Select a service</option>
                  <option>Clinical Consultation</option>
                  <option>Vaccination Program</option>
                  <option>Nutritional Guidance</option>
                  <option>Emergency Care</option>
                  <option>Breeding Services</option>
                  <option>Product Purchase</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-5 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-amber-500 focus:bg-white outline-none transition-all resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-amber-700 to-orange-600 text-white rounded-2xl font-bold hover:shadow-xl transition-all duration-300 text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
