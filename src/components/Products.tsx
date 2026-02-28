import { Package, Leaf, Beaker, Award } from 'lucide-react';

const products = [
  {
    category: 'Premium Feed',
    icon: Package,
    items: [
      {
        name: 'Cattle Feed Concentrate',
        description: 'High-protein cattle feed for improved milk production',
        price: '₹1,200/bag'
      },
      {
        name: 'Mineral Mixture',
        description: 'Essential minerals and vitamins for overall health',
        price: '₹850/kg'
      }
    ]
  },
  {
    category: 'Herbal Supplements',
    icon: Leaf,
    items: [
      {
        name: 'Digestive Tonic',
        description: 'Ayurvedic formulation for better digestion',
        price: '₹450/liter'
      },
      {
        name: 'Immunity Booster',
        description: 'Natural herbs to enhance disease resistance',
        price: '₹600/kg'
      }
    ]
  },
  {
    category: 'Veterinary Medicines',
    icon: Beaker,
    items: [
      {
        name: 'Anti-Mastitis Spray',
        description: 'Fast-acting treatment for udder infections',
        price: '₹320/bottle'
      },
      {
        name: 'Calcium Supplement',
        description: 'Prevents milk fever and metabolic disorders',
        price: '₹280/bottle'
      }
    ]
  },
  {
    category: 'Specialty Care',
    icon: Award,
    items: [
      {
        name: 'Hoof Care Solution',
        description: 'Complete treatment for foot problems',
        price: '₹550/pack'
      },
      {
        name: 'Wound Healing Gel',
        description: 'Advanced formula for faster recovery',
        price: '₹380/tube'
      }
    ]
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-gradient-to-b from-white to-amber-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4">
            Product Catalog
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Premium Cattle Care Products
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Carefully curated nutrition and healthcare solutions designed for maximum cow productivity and health.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:shadow-2xl transition-all duration-300 hover:border-amber-200"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                  index === 0 ? 'bg-amber-100 text-amber-700' :
                  index === 1 ? 'bg-orange-100 text-orange-700' :
                  index === 2 ? 'bg-yellow-100 text-yellow-700' :
                  'bg-amber-100 text-amber-700'
                }`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
              </div>
              <div className="space-y-4">
                {category.items.map((item, idx) => (
                  <div key={idx} className="p-5 bg-gradient-to-br from-white to-amber-50/40 rounded-2xl border-2 border-gray-100 hover:border-amber-300 transition-all duration-300 hover:shadow-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-gray-900 text-lg">{item.name}</h4>
                      <span className="bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent font-bold">{item.price}</span>
                    </div>
                    <p className="text-sm text-gray-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-700 via-orange-600 to-amber-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Need Custom Solutions?</h3>
          <p className="mb-8 text-amber-50 text-lg max-w-2xl mx-auto">Get personalized bulk orders, customized nutrition plans, and farm-specific health programs for your cattle.</p>
          <button className="px-10 py-4 bg-white text-amber-700 rounded-2xl font-bold hover:bg-amber-50 transition-all duration-300 shadow-lg">
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
}
