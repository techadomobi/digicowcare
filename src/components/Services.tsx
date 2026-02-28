import { Stethoscope, ShieldCheck, Pill, Syringe, Heart, Phone } from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: 'Clinical Consultations',
    description: 'Expert veterinary consultations for health diagnostics, treatment planning, and preventive care programs.',
    color: 'bg-amber-100 text-amber-700'
  },
  {
    icon: Syringe,
    title: 'Vaccination Programs',
    description: 'Complete immunization protocols against FMD, HS, BQ, Brucellosis, and endemic cattle diseases.',
    color: 'bg-orange-100 text-orange-700'
  },
  {
    icon: Pill,
    title: 'Nutritional Management',
    description: 'Customized diet plans and mineral supplements for optimal milk production and cattle health.',
    color: 'bg-yellow-100 text-yellow-700'
  },
  {
    icon: Heart,
    title: 'Breeding Services',
    description: 'Artificial insemination, pregnancy monitoring, and breeding programs for pure Indian breeds.',
    color: 'bg-amber-100 text-amber-700'
  },
  {
    icon: ShieldCheck,
    title: 'Disease Control',
    description: 'Treatment and management of mastitis, foot rot, metabolic disorders, and reproductive issues.',
    color: 'bg-orange-100 text-orange-700'
  },
  {
    icon: Phone,
    title: '24/7 Emergency Response',
    description: 'Round-the-clock veterinary emergency support for critical medical situations and urgent care.',
    color: 'bg-yellow-100 text-yellow-700'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4">
            Our Services
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Professional Veterinary Services
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Comprehensive care programs designed specifically for Indian cattle breeds, combining modern veterinary science with traditional agricultural practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-2xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-amber-200"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
