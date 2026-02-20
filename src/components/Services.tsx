import { Heart, Plane, FileCheck, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    icon: Heart,
    title: 'Medical Matching',
    description: 'Connect with India\'s top specialists and hospitals specializing in your medical condition.',
    color: 'bg-red-100 text-red-600',
    gradient: 'from-red-500 to-pink-500',
  },
  {
    icon: Plane,
    title: 'Cross-Border Travel',
    description: 'Seamless arrangements including international flights, visas, hotels, and local transport.',
    color: 'bg-blue-100 text-blue-600',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FileCheck,
    title: 'Documentation & Visa',
    description: 'Complete support with medical records transfer, visa processing, and travel documentation.',
    color: 'bg-green-100 text-green-600',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Headphones,
    title: 'Multilingual Support',
    description: 'Round-the-clock assistance in Vietnamese, Burmese, Khmer, Sinhala, and English.',
    color: 'bg-teal-100 text-teal-600',
    gradient: 'from-teal-500 to-cyan-500',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
            Comprehensive Care at Every Step
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to post-treatment follow-up, we provide end-to-end support for your medical journey.
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                className="group relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
                <motion.div
                  className={`${service.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}
                  whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="h-7 w-7" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
