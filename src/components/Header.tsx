import { Phone, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-gradient-to-r from-amber-700 to-amber-600 text-white py-2.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+911234567890" className="flex items-center gap-2 hover:bg-white/10 px-3 py-1 rounded transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 123 456 7890</span>
            </a>
            <a href="mailto:care@digivetcare.in" className="hidden sm:flex items-center gap-2 hover:bg-white/10 px-3 py-1 rounded transition-colors">
              <Mail className="w-4 h-4" />
              <span>care@digivetcare.in</span>
            </a>
          </div>
          <div className="text-xs sm:text-sm font-semibold">
            24/7 Emergency Veterinary Services
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
              🐄
            </div>
            <div>
              <div className="font-bold text-2xl bg-gradient-to-r from-amber-700 to-amber-600 bg-clip-text text-transparent">DigiVetCare</div>
              <div className="text-xs text-gray-600 font-medium">Specialized Care for Indian Cattle</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-1">
            <a href="#home" className="text-gray-700 hover:text-amber-700 px-4 py-2 rounded-lg font-medium transition-all hover:bg-amber-50">Home</a>
            <a href="#services" className="text-gray-700 hover:text-amber-700 px-4 py-2 rounded-lg font-medium transition-all hover:bg-amber-50">Services</a>
            <a href="#breeds" className="text-gray-700 hover:text-amber-700 px-4 py-2 rounded-lg font-medium transition-all hover:bg-amber-50">Breeds</a>
            <a href="#products" className="text-gray-700 hover:text-amber-700 px-4 py-2 rounded-lg font-medium transition-all hover:bg-amber-50">Products</a>
            <a href="#about" className="text-gray-700 hover:text-amber-700 px-4 py-2 rounded-lg font-medium transition-all hover:bg-amber-50">About</a>
            <a href="#contact" className="text-gray-700 hover:text-amber-700 px-4 py-2 rounded-lg font-medium transition-all hover:bg-amber-50">Contact</a>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-gray-100 pt-4">
            <a href="#home" className="block text-gray-700 hover:text-amber-700 hover:bg-amber-50 font-medium transition-all py-2.5 px-4 rounded-lg">Home</a>
            <a href="#services" className="block text-gray-700 hover:text-amber-700 hover:bg-amber-50 font-medium transition-all py-2.5 px-4 rounded-lg">Services</a>
            <a href="#breeds" className="block text-gray-700 hover:text-amber-700 hover:bg-amber-50 font-medium transition-all py-2.5 px-4 rounded-lg">Breeds</a>
            <a href="#products" className="block text-gray-700 hover:text-amber-700 hover:bg-amber-50 font-medium transition-all py-2.5 px-4 rounded-lg">Products</a>
            <a href="#about" className="block text-gray-700 hover:text-amber-700 hover:bg-amber-50 font-medium transition-all py-2.5 px-4 rounded-lg">About</a>
            <a href="#contact" className="block text-gray-700 hover:text-amber-700 hover:bg-amber-50 font-medium transition-all py-2.5 px-4 rounded-lg">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
}
