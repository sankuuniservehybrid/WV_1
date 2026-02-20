import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Cardiology_logo from "../misc/Services_logo/cardio.png";
import oncology_logo from "../misc/Services_logo/oncology.png";
import orthopedic_logo from "../misc/Services_logo/orthopedic.png";
import Neurology_Logo from "../misc/Services_logo/neurology.png";
import liver_logo from "../misc/Services_logo/liver.png";
import Fertility_logo from "../misc/Services_logo/fertility.png";
import Kidney_logo from "../misc/Services_logo/kidney.png";
import bone_logo from "../misc/Services_logo/bone.png";
import genocology_logo from "../misc/Services_logo/genecology.png";
import weight_loss_logo from "../misc/Services_logo/weight_loss.png";

export default function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-teal-50/20 to-blue-50/20 overflow-hidden">
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
                Medical Specialties
              </motion.span>
              <motion.h1
                className="mt-3 text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                World-Class Treatment Across All Specialties
              </motion.h1>
              <motion.p
                className="mt-6 text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Access India's finest medical institutions offering comprehensive care across all major specialties with state-of-the-art facilities and expert physicians.
              </motion.p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-gray-50 to-blue-50/30 p-12 rounded-3xl shadow-lg relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-8 relative z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Our Medical Specialties
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-8 relative z-10">
                {[
                  { category: 'Cardiology', items: [''] , logo : Cardiology_logo },
                  { category: 'Oncology', items: [''], logo : oncology_logo },
                  { category: 'Orthopedics', items: [''] , logo : orthopedic_logo},
                  { category: 'Fertility & IVF', items: [''], logo : Fertility_logo },
                  { category: 'Neurology', items: [''] , logo : Neurology_Logo},
                  { category: 'Liver Transplant', items: [''], logo : liver_logo },
                  { category: 'Kidney Transplant', items: [''], logo : Kidney_logo },
                  { category: 'Bone Marrow', items: [''], logo : bone_logo },
                  { category: 'Gynecology', items: [''] , logo : genocology_logo},
                  { category: 'Weight Loss', items: [''] , logo : weight_loss_logo},
                ].map((specialty, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 relative overflow-hidden group cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.08, duration: 0.5 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.img
                      src={specialty.logo}
                      alt={`${specialty.category} Logo`}
                      className="h-20 w-30 mb-4 relative z-10"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    />
                    <h3 className="text-xl font-bold text-teal-600 mb-6 relative z-10">{specialty.category}</h3>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.6, duration: 0.5 }}
              >
                Ready to Take the Next Step?
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.7, duration: 0.5 }}
              >
                Contact us today for a free consultation. Our team is ready to answer your questions and help you begin your journey to better health.
              </motion.p>
              <motion.a
                href="/partner"
                className="inline-block bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-lg font-medium shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.8, duration: 0.5 }}
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
