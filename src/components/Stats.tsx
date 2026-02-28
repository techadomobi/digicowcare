import { Users, Award, MapPin, Clock } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '15,000+',
    label: 'Happy Farmers',
    color: 'text-blue-600'
  },
  {
    icon: Award,
    value: '25+',
    label: 'Years Experience',
    color: 'text-emerald-600'
  },
  {
    icon: MapPin,
    value: '200+',
    label: 'Villages Covered',
    color: 'text-amber-600'
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Support Available',
    color: 'text-rose-600'
  }
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-amber-700 via-orange-600 to-amber-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-6 backdrop-blur-sm border border-white/30">
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-5xl font-bold text-white mb-3">{stat.value}</div>
              <div className="text-amber-50 font-semibold text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
