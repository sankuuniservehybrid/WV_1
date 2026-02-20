// import { ArrowRight } from 'lucide-react';

// export default function Hero() {
//   return (
//     <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-blue-50 -z-10"></div>

//       <div className="max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div className="space-y-8">
//             <div className="inline-block">
//               <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
//                 Medical Tourism Experts
//               </span>
//             </div>

//             <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
//               Where
//               <span className="text-teal-600"> Wellness</span> meets <span className="text-teal-600"> Wonder </span>
//             </h1>

//             <p className="text-xl text-gray-600 leading-relaxed">
//               From Vietnam, Myanmar, Cambodia, and Sri Lanka to India's finest hospitals.
//               Get advanced treatment you deserve with seamless support across borders.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4">
//               {/* <button className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-all transform hover:scale-105 font-medium flex items-center justify-center group"
//                       onClick={() => window.location.href = "/career"}
//               >
//                 Career
//                 <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//               </button> */}
//               <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-teal-600 hover:text-teal-600 transition-all font-medium" 
//                       onClick={() => window.location.href = "/partner"}
//               >
//                 Contact US
//               </button>
//             </div>

//             {/* <div className="flex items-center gap-8 pt-4">
//               <div>
//                 <div className="text-3xl font-bold text-gray-900">40+</div>
//                 <div className="text-sm text-gray-600">Partner Hospitals</div>
//               </div>
//               <div className="h-12 w-px bg-gray-300"></div>
//               <div>
//                 <div className="text-3xl font-bold text-gray-900">8</div>
//                 <div className="text-sm text-gray-600">Indian Cities</div>
//               </div>
//               <div className="h-12 w-px bg-gray-300"></div>
//               <div>
//                 <div className="text-3xl font-bold text-gray-900">3k+</div>
//                 <div className="text-sm text-gray-600">Patients Treated</div>
//               </div>
//             </div> */}
//           </div>

//           <div className="relative">
//             <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-500 rounded-3xl transform rotate-3 animate-float"></div>
//             <img
//               src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1200"
//               alt="Medical professionals"
//               className="relative rounded-3xl shadow-2xl object-cover w-full h-[500px] animate-float"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import hero from "../misc/WV_Hero_image.jpg";


export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-blue-50 -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block">
              <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
                Medical Tourism Experts
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Where
              <span className="text-teal-600"> Wellness</span> meets
              <span className="text-teal-600"> Wonder </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              From Vietnam, Myanmar, Cambodia, and Sri Lanka to India's finest hospitals.
              Get advanced treatment you deserve with seamless support across borders.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-teal-600 hover:text-teal-600 transition-all font-medium"
                onClick={() => window.location.href = "/partner"}
              >
                Contact US
              </button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-500 rounded-3xl"
              animate={{ rotate: [3, 6, 3] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.img
              // src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1200"
              src={hero}
              alt="Medical professionals"
              className="relative rounded-3xl shadow-2xl object-cover w-full h-[500px]"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

