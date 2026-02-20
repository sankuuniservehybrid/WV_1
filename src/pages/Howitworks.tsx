import { MessageSquare , FileText , Plane , HeartHandshake , Home as HomeIcon} from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-teal-50/30 overflow-hidden">
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
                How It Works
              </motion.span>
              <motion.h1
                className="mt-3 text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Your Journey to Better Health
              </motion.h1>
              <motion.p
                className="mt-6 text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Follow our simple, streamlined process from initial consultation to complete recovery. We handle every detail so you can focus on healing.
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-1 gap-8">
              {[
                {
                  icon: MessageSquare,
                  title: "Initial Consultation",
                  description: "Share your medical reports and concerns with us. Our team reviews your case and connects you with the right specialists",
                  color: "bg-teal-100 text-teal-600",
                  delay: 0.5
                },
                {
                  icon: FileText,
                  title: "Treatment Plan",
                  description: "Receive a detailed treatment plan with cost estimates, hospital options, and expected outcomes from top medical professionals.",
                  color: "bg-blue-100 text-blue-600",
                  delay: 0.6
                },
                {
                  icon: Plane,
                  title: "Travel Arrangements",
                  description: "We handle all logistics including visa assistance, flight bookings, airport pickup, and accommodation near the hospital.",
                  color: "bg-purple-100 text-purple-600",
                  delay: 0.7
                },
                {
                  icon: HeartHandshake,
                  title: "Post-Treatment Care",
                  description: "Get comprehensive follow-up care, rehabilitation support, and regular check-ins with your medical team.",
                  color: "bg-green-100 text-green-600",
                  delay: 0.8
                },
                {
                  icon: HomeIcon,
                  title: "Return & Recovery",
                  description: "Safe journey home with detailed recovery instructions and ongoing remote consultation support as needed.",
                  color: "bg-orange-100 text-orange-600",
                  delay: 0.9
                }
              ].map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: step.delay, duration: 0.6 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="flex items-start gap-6">
                      <motion.div
                        className={`${step.color} w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 relative z-10`}
                        whileHover={{ rotate: 360, scale: 1.15 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="h-7 w-7" />
                      </motion.div>
                      <div className="flex-1 relative z-10">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                Ready to Take the Next Step?
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.6, duration: 0.5 }}
              >
                Contact us today for a free consultation. Our team is ready to answer your questions and help you begin your journey to better health.
              </motion.p>
              <motion.a
                href="/partner"
                className="inline-block bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-lg font-medium shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.7, duration: 0.5 }}
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
