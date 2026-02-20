import { Search, Users, Calendar, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    icon: Search,
    title: 'Consultation',
    description: 'Share your medical needs with our team of experts who will evaluate your case.',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Matching',
    description: 'We connect you with the best specialists and facilities for your treatment.',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Calendar,
    title: 'Planning',
    description: 'We arrange all travel, accommodation, and medical appointments seamlessly.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: CheckCircle,
    title: 'Treatment',
    description: 'Receive world-class care with our support team available throughout your stay.',
    color: 'from-green-500 to-emerald-500',
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Process</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
            Your Journey to Better Health
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Four simple steps to access world-class medical care anywhere in the world.
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-teal-400 to-blue-400 -z-10"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                    style={{ originX: 0 }}
                  />
                )}
                <motion.div
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                    ease: "easeOut"
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                  }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  <motion.div
                    className="bg-gradient-to-br from-teal-600 to-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 relative z-10"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15 + 0.2,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ rotate: 360 }}
                  >
                    {index + 1}
                  </motion.div>

                  <motion.div
                    className={`bg-gradient-to-br ${step.color} text-white w-14 h-14 rounded-xl flex items-center justify-center mb-6`}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15 + 0.3,
                      type: "spring"
                    }}
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1
                    }}
                  >
                    <Icon className="h-7 w-7" />
                  </motion.div>

                  <motion.h3
                    className="text-xl font-bold text-gray-900 mb-3"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.4 }}
                  >
                    {step.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-600 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.5 }}
                  >
                    {step.description}
                  </motion.p>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
