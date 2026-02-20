import { Award, Heart, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-teal-50/30 to-blue-50/30 overflow-hidden">
      <Header />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12" ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.span
                className="text-teal-600 font-semibold text-sm uppercase tracking-wider"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                About Wellness Voyage
              </motion.span>
              <motion.h1
                className="mt-3 text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Connecting Patients with Excellence
              </motion.h1>
              <motion.p
                className="mt-6 text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Wellness Voyage is a leading medical tourism facilitator specializing in connecting patients from Vietnam, Myanmar, Cambodia, and Sri Lanka with India's finest medical institutions and specialists.
              </motion.p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-teal-50 to-blue-50 p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-300 rounded-full blur-3xl animate-pulse"></div>
              </div>
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-6 relative z-10"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Our Mission
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed relative z-10"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                We understand that seeking medical treatment across borders can be daunting. Our mission is to make the journey seamless, affordable, and focused entirely on your recovery and well-being. We believe that everyone deserves access to world-class healthcare, regardless of where they live.
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "Our Expertise",
                  description: "We have perfected the art of medical coordination across borders, ensuring every patient receives personalized, world-class care tailored to their specific needs.",
                  color: "bg-teal-100 text-teal-600",
                  delay: 0.8
                },
                {
                  icon: Heart,
                  title: "Our Commitment",
                  description: "We prioritize patient welfare above all else. Every decision we make is guided by our commitment to affordable, accessible, and excellent healthcare for all.",
                  color: "bg-blue-100 text-blue-600",
                  delay: 0.9
                },
                {
                  icon: Users,
                  title: "Local Teams",
                  description: "Our multilingual teams in each source country speak your language and understand your culture, making communication natural and care personal.",
                  color: "bg-green-100 text-green-600",
                  delay: 1.0
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: item.delay, duration: 0.6 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      className={`${item.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 relative z-10`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="h-7 w-7" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed relative z-10">
                      {item.description}
                    </p>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              className="bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-3xl p-12 shadow-2xl relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-300 rounded-full blur-3xl"></div>
              </div>
              <motion.h2
                className="text-3xl font-bold mb-6 relative z-10"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                Why Partner with Us?
              </motion.h2>
              <ul className="space-y-4 relative z-10">
                {[
                  'Extensive network of vetted, JCI-accredited hospitals across major Indian cities',
                  'Expert medical coordinators fluent in Vietnamese, Burmese, Khmer, Sinhala, and English',
                  'Comprehensive support from initial consultation through post-treatment follow-up',
                  'Complete visa, travel, and accommodation arrangements handled for you',
                  'Dedicated patient coordinators assigned to each patient for personalized care',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1.3 + index * 0.1, duration: 0.4 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.svg
                      className="h-6 w-6 text-teal-200 mr-4 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1, rotate: 360 } : {}}
                      transition={{ delay: 1.3 + index * 0.1, duration: 0.5 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </motion.svg>
                    <span className="text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.9, duration: 0.5 }}
              >
                Ready to Take the Next Step?
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 2.0, duration: 0.5 }}
              >
                Contact us today for a free consultation. Our team is ready to answer your questions and help you begin your journey to better health.
              </motion.p>
              <motion.a
                href="/partner"
                className="inline-block bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-lg font-medium shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 2.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
