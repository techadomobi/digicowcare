import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-5 py-2.5 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold">
              🐄 Premium Cow Care Solutions
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Expert Care for Your
              <span className="bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent"> Indian Cattle</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Comprehensive veterinary services, premium nutrition, and wellness programs specifically designed for Gir, Sahiwal, Red Sindhi, and Rathi cattle breeds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-amber-700 to-orange-600 text-white rounded-xl font-bold hover:shadow-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
                Book Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white text-amber-700 rounded-xl font-bold hover:bg-amber-50 transition-all duration-300 border-2 border-amber-700">
                View Products
              </button>
            </div>
          </div>
          <div className="relative lg:h-[550px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/20 to-orange-300/20 rounded-3xl transform -rotate-2"></div>
            <img
              src="https://images.stockcake.com/public/7/9/d/79d3e657-4137-4b19-865c-a4569791cd6d_medium/cows-in-meadow-stockcake.jpg"
              alt="Indian Cow Care"
              className="relative rounded-3xl shadow-2xl object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
