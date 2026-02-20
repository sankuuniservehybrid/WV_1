import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 via-blue-600 to-teal-700 animate-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-white"
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get the Medical Care You Deserve in India
            </motion.h2>
            <motion.p
              className="text-xl text-teal-50 mb-8 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Start your consultation with our experienced coordinators. We speak your language and understand your needs.
              Connect with India's finest specialists today—completely free.
            </motion.p>

            <motion.div
              className="space-y-4 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="h-6 w-6 mr-3 text-teal-100" />
                <span className="text-lg text-teal-50 font-medium">info@wellnessvoyage.com</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                {[
                  'Vetted JCI-accredited hospitals across India',
                  'Support in Vietnamese, Burmese, Khmer & Sinhala',
                  'Complete visa and travel arrangements',
                  'Expert post-treatment follow-up',
                  'Dedicated patient coordinators',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start text-teal-50"
                    initial={{ x: -20, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.svg
                      className="h-6 w-6 text-teal-300 mr-3 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1, rotate: 360 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
