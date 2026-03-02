const breeds = [
  {
    name: 'Gir',
    origin: 'Gujarat',
    image: 'https://girorganic.com/cdn/shop/articles/what-is-gir-cow-453725.jpg?v=1673547600',
    features: ['High milk yield (10-15 L)', 'Heat & disease resistant', 'Long lifespan'],
    milk: '10-15 L/day'
  },
  {
    name: 'Sahiwal',
    origin: 'Punjab',
    image: 'https://media.newindianexpress.com/TNIE/import/2017/12/3/original/State_eyeggggs.jpg?w=1200&h=1200&auto=format%2Ccompress&fit=max&enlarge=true',
    features: ['Premium milk producer', 'Excellent feed conversion', 'Docile'],
    milk: '8-12 L/day'
  },
  {
    name: 'Red Sindhi',
    origin: 'Pakistan/Rajasthan',
    image: 'https://cpimg.tistatic.com/6661303/b/4/dairy-farm-jersey-cow.jpg',
    features: ['Compact built', 'Heat tolerant', 'Disease resistant'],
    milk: '6-10 L/day'
  },
  {
    name: 'Rathi',
    origin: 'Rajasthan',
    image: 'https://goelvetpharma.com/cdn/shop/files/27_medium.png?v=1754636380',
    features: ['Drought resilient', 'Efficient grazers', 'Hardy'],
    milk: '5-8 L/day'
  }
];

export default function Breeds() {
  return (
    <section id="breeds" className="py-24 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4">
            Indian Cattle Breeds
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Premium Indian Cow Varieties
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Specialized care for India's most prized cattle breeds, each bred for specific climatic conditions and exceptional productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {breeds.map((breed, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={breed.image}
                  alt={breed.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-amber-600 to-orange-600 px-4 py-2 rounded-full text-white text-sm font-bold">
                  {breed.origin}
                </div>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{breed.name}</h3>
                <div className="mb-6 pb-6 border-b-2 border-amber-200">
                  <div className="text-xs text-gray-600 mb-1 uppercase tracking-wide font-semibold">Daily Milk Yield</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
                    {breed.milk}
                  </div>
                </div>
                <ul className="space-y-3">
                  {breed.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm font-medium">
                      <span className="text-amber-600 mt-1 font-bold">●</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
