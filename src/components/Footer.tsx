import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                🐄
              </div>
              <span className="text-white font-bold text-xl">DigiVetCare</span>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              India's premier veterinary care provider for indigenous cattle breeds. Blending cutting-edge science with traditional agricultural practices.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-11 h-11 bg-gray-800 hover:bg-gradient-to-r hover:from-amber-600 hover:to-orange-600 rounded-xl flex items-center justify-center transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 bg-gray-800 hover:bg-gradient-to-r hover:from-amber-600 hover:to-orange-600 rounded-xl flex items-center justify-center transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 bg-gray-800 hover:bg-gradient-to-r hover:from-amber-600 hover:to-orange-600 rounded-xl flex items-center justify-center transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 bg-gray-800 hover:bg-gradient-to-r hover:from-amber-600 hover:to-orange-600 rounded-xl flex items-center justify-center transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="text-gray-400 hover:text-amber-500 transition-colors font-medium">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-amber-500 transition-colors font-medium">Services</a></li>
              <li><a href="#breeds" className="text-gray-400 hover:text-amber-500 transition-colors font-medium">Breeds</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-amber-500 transition-colors font-medium">Products</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-amber-500 transition-colors font-medium">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-amber-500 transition-colors font-medium">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors font-medium">Clinical Consultations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors font-medium">Vaccination Programs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors font-medium">Nutritional Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors font-medium">Disease Control</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors font-medium">Emergency Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors font-medium">Breeding Services</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Get exclusive cattle care tips, health updates, and special product offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 outline-none text-sm text-white placeholder-gray-500 transition-all"
              />
              <button className="px-4 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:shadow-lg rounded-lg transition-all duration-300 font-semibold">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p className="text-gray-500 font-medium">&copy; 2024 DigiVetCare. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors font-medium">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors font-medium">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors font-medium">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
