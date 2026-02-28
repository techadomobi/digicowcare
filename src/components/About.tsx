import { Target, Eye, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div>
              <div className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4">
                About Us
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Trusted Partner in Cattle Care
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                India's premier veterinary care provider specializing exclusively in indigenous cow breeds. We combine cutting-edge modern veterinary science with traditional agricultural wisdom to ensure optimal health and productivity.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-white rounded-2xl border-2 border-amber-100 hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center font-bold text-xl">
                    🎯
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Providing world-class veterinary care and nutrition solutions that enhance the health, productivity, and prosperity of Indian cattle breeds nationwide.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-white rounded-2xl border-2 border-orange-100 hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-orange-100 text-orange-700 rounded-xl flex items-center justify-center font-bold text-xl">
                    👁️
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To be the most trusted partner for dairy farmers, fostering the prosperity of indigenous cattle breeds and sustainable agricultural practices.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-white rounded-2xl border-2 border-yellow-100 hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-yellow-100 text-yellow-700 rounded-xl flex items-center justify-center font-bold text-xl">
                    ❤️
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Our Values</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Compassion, excellence, respect for tradition, and unwavering dedication to farmer prosperity drive our every action and decision.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/3535323/pexels-photo-3535323.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Veterinary care for cattle"
                className="rounded-3xl shadow-xl object-cover h-64 w-full"
              />
              <img
                src="https://images.pexels.com/photos/3535382/pexels-photo-3535382.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Premium cattle feed"
                className="rounded-3xl shadow-xl object-cover h-64 w-full mt-8"
              />
              <img
                src="https://images.pexels.com/photos/2114018/pexels-photo-2114018.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Cow healthcare services"
                className="rounded-3xl shadow-xl object-cover h-64 w-full -mt-8"
              />
              <img
                src="https://images.pexels.com/photos/3573340/pexels-photo-3573340.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Healthy Indian cattle"
                className="rounded-3xl shadow-xl object-cover h-64 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
