import { MessageSquare, FileText, Plane, DollarSign, Languages, Car, Home as HomeIcon, ArrowRight, Stethoscope, HeartPulse } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    icon: MessageSquare,
    title: 'Medical Opinion and Cost Estimations',
    description: 'Expert medical opinions and transparent cost estimations from top specialists',
    color: 'from-teal-500 to-cyan-500',
    bgColor: 'bg-teal-50',
    iconColor: 'text-teal-600',
    link: '/services/medical_opinion',
    featured: true,
  },
  {
    icon: FileText,
    title: 'Pre-Travel Consultations',
    description: 'Comprehensive guidance to understand your procedure before traveling',
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    link: '/services/pre_travel',
    featured: true,
  },
  {
    icon: Plane,
    title: 'Visa Assistance',
    description: 'Complete medical visa support and documentation services',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
    link: '/services/visa_assistance',
    featured: true,
  },
  {
    icon: DollarSign,
    title: 'Money Exchange',
    description: 'Convenient currency exchange services in your home city',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-600',
    link: '/services',
    featured: false,
  },
  {
    icon: Languages,
    title: 'Interpreters and Translators',
    description: 'Fluent professionals to break language barriers at every step',
    color: 'from-rose-500 to-pink-500',
    bgColor: 'bg-rose-50',
    iconColor: 'text-rose-600',
    link: '/services',
    featured: false,
  },
  {
    icon: Car,
    title: 'Transportation Assistance',
    description: 'Complimentary airport transfers and local transport arrangements',
    color: 'from-sky-500 to-blue-500',
    bgColor: 'bg-sky-50',
    iconColor: 'text-sky-600',
    link: '/services',
    featured: false,
  },
  {
    icon: HomeIcon,
    title: 'Accommodation Options',
    description: 'Comfortable stays near hospitals matching your budget and needs',
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-50',
    iconColor: 'text-violet-600',
    link: '/services',
    featured: false,
  },
  {
    icon: Stethoscope,
    title: 'Admission, Appointment & Pharma Care',
    description: 'Full coordination of medical logistics and pharmaceutical needs',
    color: 'from-cyan-500 to-teal-500',
    bgColor: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
    link: '/services',
    featured: false,
  },
  {
    icon: HeartPulse,
    title: 'Private Duty Nursing',
    description: 'Arrangements for private nursing care tailored to your needs',
    color: 'from-fuchsia-500 to-pink-500',
    bgColor: 'bg-fuchsia-50',
    iconColor: 'text-fuchsia-600',
    link: '/services',
    featured: false,
  },
];

export default function ServicesPage() {
    const navigate = useNavigate();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
    <div className="min-h-screen bg-gradient-to-br from-white via-teal-50/20 to-blue-50/30 overflow-hidden">
      <Header />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            <motion.div
              className="text-center max-w-4xl mx-auto"
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
                Our Services
              </motion.span>
              <motion.h1
                className="mt-3 text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Comprehensive Medical Tourism Services
              </motion.h1>
              <motion.p
                className="mt-6 text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                From initial consultation to complete recovery, we provide end-to-end support for your medical journey to India's finest healthcare institutions.
              </motion.p>
            </motion.div>

            {/* <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-12 rounded-3xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We understand that seeking medical treatment across borders can be daunting. Our mission is to make the journey seamless, affordable, and focused entirely on your recovery and well-being. We believe that everyone deserves access to world-class healthcare, regardless of where they live.
              </p>
            </div> */}

            <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="relative group"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                  >
                    <motion.div
                      className="h-full bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden cursor-pointer"
                      whileHover={{
                        y: -10,
                        scale: 1.02,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                      }}
                      transition={{ duration: 0.3 }}
                      onClick={() => navigate(service.link)}
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5`}></div>
                      </div>

                      <motion.div
                        className={`${service.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10`}
                        whileHover={{
                          rotate: [0, -10, 10, -10, 0],
                          scale: 1.1
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className={`h-8 w-8 ${service.iconColor}`} />
                      </motion.div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors relative z-10">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed mb-6 relative z-10 min-h-[60px]">
                        {service.description}
                      </p>

                      <motion.div
                        className={`flex items-center gap-2 font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:gap-3 transition-all relative z-10`}
                      >
                        Learn More
                        <ArrowRight className={`w-4 h-4 ${service.iconColor} group-hover:translate-x-1 transition-transform duration-300`} />
                      </motion.div>

                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                    </motion.div>

                    {service.featured && (
                      <motion.div
                        className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                        initial={{ scale: 0, rotate: -45 }}
                        animate={isInView ? { scale: 1, rotate: 0 } : {}}
                        transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                      >
                        Popular
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
            

            {/* <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-3xl p-12">
              <h2 className="text-3xl font-bold mb-6">Why Partner with Us?</h2>
              <ul className="space-y-4">
                {[
                  'Extensive network of vetted, JCI-accredited hospitals across major Indian cities',
                  'Expert medical coordinators fluent in Vietnamese, Burmese, Khmer, Sinhala, and English',
                  'Transparent pricing with significant cost savings—50-70% less than developed countries',
                  'Comprehensive support from initial consultation through post-treatment follow-up',
                  'Complete visa, travel, and accommodation arrangements handled for you',
                  'Dedicated patient coordinators assigned to each patient for personalized care',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-6 w-6 text-teal-200 mr-4 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div> */}

            {/* <div className="bg-gray-50 p-12 rounded-3xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">What We Offer</h2>
              <div className="grid md:grid-cols-1 gap-8">
                {[
                  { category: 'Cardiac Care', items: ['Bypass Surgery', 'Valve Replacement', 'Angioplasty'] },
                  { category: 'Oncology', items: ['Cancer Treatment', 'Chemotherapy', 'Radiation Therapy'] },
                  { category: 'Orthopedics', items: ['Joint Replacement', 'Spine Surgery', 'Sports Medicine'] },
                  { category: 'Fertility & IVF', items: ['IVF Treatment', 'Egg Retrieval', 'Embryo Transfer'] },
                  { category: 'Neurology', items: ['Brain Surgery', 'Stroke Treatment', 'Neuro Imaging'] },
                  { category: 'General Surgery', items: ['Abdominal Surgery', 'Laparoscopic Surgery', 'Emergency Care'] },
                ].map((specialty, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-teal-600 mb-4">{specialty.category}</h3>
                    <ul className="space-y-2">
                      {specialty.items.map((item, idx) => (
                        <li key={idx} className="text-gray-600">• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div> */}

            <motion.div
              className="relative bg-gradient-to-br from-teal-600 via-blue-600 to-teal-700 rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10 text-center py-16 px-8">
                <motion.h2
                  className="text-3xl md:text-4xl font-bold text-white mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.1, duration: 0.5 }}
                >
                  Ready to Take the Next Step?
                </motion.h2>
                <motion.p
                  className="text-xl text-teal-50 mb-10 max-w-2xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  Contact us today for a free consultation. Our team is ready to answer your questions and help you begin your journey to better health.
                </motion.p>
                <motion.a
                  href="/partner"
                  className="inline-flex items-center gap-3 bg-white text-teal-600 px-10 py-5 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.3, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
