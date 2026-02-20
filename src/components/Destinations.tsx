import { MapPin, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import delhi from "../misc/delhi.png";
import mumbai from "../misc/mumbai.jpeg";
import bangalore from "../misc/bangalore.png";
import hydrabad from "../misc/hyedrabad.png";
import kolkata from "../misc/Kolkata.jpg";
import chennai from "../misc/chennai.jpg";

import Apollo_Hospital from "../misc/Hosp Logo/Apollo Hospital Logo.png";
import Manipal_Hospitals from "../misc/Hosp Logo/Manipal Hospitals.png";
import Heal_Cancer_Hospital from "../misc/Hosp Logo/Heal Cancer Hospital.jpg";
import Fortis_Hospital from "../misc/Hosp Logo/Fotis Hospital.png";
import Desun_Hospital from "../misc/Hosp Logo/Desun Hospital.png";
import CK_Birla_Hospital from "../misc/Hosp Logo/CK Birla Hospitals.png";
import ASG_Eye_Hospital from "../misc/Hosp Logo/ASG Eye Hospital.png";
import Agarwal_eye_Hospital from "../misc/Hosp Logo/Agarwal Eye Hospital.png";

const destinations = [
  {
    city: 'Kolkata',
    image: `${kolkata}`,
    hospitals: 8,
    hospitalList: [
      { name: 'Apollo Hospital', logo: `${Apollo_Hospital}` },
      { name: 'Manipal Hospital', logo: `${Manipal_Hospitals}` },
      { name: 'HEAL Cancer Hospital', logo: `${Heal_Cancer_Hospital}` },
      { name: 'Fortis Hospital', logo: `${Fortis_Hospital}` },
      { name: 'Desun Hospital', logo: `${Desun_Hospital}` },
      { name: 'C.K. Birla Hospital', logo: `${CK_Birla_Hospital}` },
      { name: 'ASG Eye Hospital', logo: `${ASG_Eye_Hospital}` },
      { name: 'Agarwal Eye Hospital', logo: `${Agarwal_eye_Hospital}` },
    ],
  },
  {
    city: 'Delhi',
    image: `${delhi}`,
    hospitals: 8,
    hospitalList: [
      { name: 'Mav Saket Hospital', logo: '/logos/amri.png' },
      { name: 'Max Smart Hospital', logo: '/logos/apollo.png' },
      { name: 'Mav BLK Hospital', logo: '/logos/fortis.png' },
      { name: 'Artimis Hospital', logo: '/logos/fortis.png' },
      { name: 'Fortis Hospital', logo: `${Fortis_Hospital}` },
      { name: 'Medanta Hospital', logo: '/logos/fortis.png' },
      { name: 'Mav lagoon Hospital', logo: '/logos/fortis.png' },
      { name: 'C.K. Birla Hospital', logo: `${CK_Birla_Hospital}` },
    ],
  },
  {
    city: 'Mumbai',
    image: `${mumbai}`,
    hospitals: 4,
    hospitalList: [
      { name: 'Mav Navavati Hospital', logo: '/logos/amri.png' },
      { name: 'HEAL Cancer Hospital', logo: `${Heal_Cancer_Hospital}` },
      { name: 'Kokilaben Hospital', logo: '/logos/fortis.png' },
      { name: 'Apollo Hospital', logo: `${Apollo_Hospital}` },
    ],
  },
  {
    city: 'Bangalore',
    image: `${bangalore}`,
    hospitals: 4,
    hospitalList: [
      { name: 'HEAL Cancer Hospital', logo: `${Heal_Cancer_Hospital}` },
      { name: 'Manipal Hospital', logo: `${Manipal_Hospitals}` },
      { name: 'Aster Hospital', logo: '/logos/fortis.png' },
      { name: 'Rainbow children Hospital', logo: '/logos/fortis.png' },
    ],
  },
  {
    city: 'Hyderabad',
    image: `${hydrabad}`,
    hospitals: 7,
    hospitalList: [
      { name: 'Rainbow children Hospital', logo: '/logos/amri.png' },
      { name: 'Yashoda Hospital', logo: '/logos/apollo.png' },
      { name: 'Star Hospital', logo: '/logos/fortis.png' },
      { name: 'Apollo Hospital', logo: `${Apollo_Hospital}` },
      { name: 'KolaEpic Hospital', logo: '/logos/fortis.png' },
      { name: 'Kamenin Hospital', logo: '/logos/fortis.png' },
      { name: 'TX Hospital', logo: '/logos/fortis.png' },
    ],
  },
  {
    city: 'Chennai',
    image: `${chennai}`,
    hospitals: 7,
    hospitalList: [
      { name: 'Apollo Hospital', logo: `${Apollo_Hospital}` },
      { name: 'Apollo Proton Hospital', logo: '/logos/apollo.png' },
      { name: 'MAM Hospital', logo: '/logos/fortis.png' },
      { name: 'SIMS Hospital', logo: '/logos/fortis.png' },
      { name: 'Kauvery Hospital', logo: '/logos/apollo.png' },
      { name: 'GEMS Hospital', logo: '/logos/fortis.png' },
      { name: 'Rainbow Children Hospital', logo: '/logos/fortis.png' },
    ],
  },
];

export default function Destinations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="destinations" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Medical Excellence Across India</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
            Leading Medical Centers
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Access India's premier hospitals and specialists across major cities, each offering world-class treatment and care.
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <motion.div
                className="cursor-pointer rounded-2xl overflow-hidden shadow-lg bg-white"
                whileHover={{
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={destination.image}
                    alt={destination.city}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <motion.div
                    className="absolute bottom-4 left-4 flex items-center text-white"
                    initial={{ x: -20, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <MapPin className="h-6 w-6 mr-2" />
                    <span className="text-3xl font-bold">{destination.city}</span>
                  </motion.div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Award className="h-5 w-5 mr-2 text-teal-600" />
                    <span className="font-medium">{destination.hospitals} Top-Tier Hospitals</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute left-0 right-0 top-full mt-3 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto"
                initial={{ y: -10 }}
                whileHover={{ y: 0 }}
              >
                <p className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                  Partner Hospitals
                </p>

                <div className="space-y-2 max-h-40 overflow-y-auto custom-scrollbar">
                  {destination.hospitalList.map((hospital, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <img
                        src={hospital.logo}
                        alt={hospital.name}
                        className="h-8 w-8 object-contain"
                      />
                      <span className="text-sm text-gray-600">
                        {hospital.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
