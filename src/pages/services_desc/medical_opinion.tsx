import { MessageSquare , FileText , Plane , Heart , HeartHandshake , Home as HomeIcon, ArrowRight} from 'lucide-react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import image from "../../misc/Services_desc/MO.jpg";

import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AboutPage() {
    const navigate = useNavigate();
    return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            <div>
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
              <h1 className="mt-3 text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Connecting Patients with Excellence
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Wellness Voyage is a leading medical tourism facilitator specializing in connecting patients from Vietnam, Myanmar, Cambodia, and Sri Lanka with India's finest medical institutions and specialists.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                
                <div className="grid md:grid-cols-1 gap-8">

                    <div className="bg-blue-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="bg-teal-100 text-teal-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                        <MessageSquare className="h-7 w-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Medical Opinion and Cost Estimations</h3>
                        <p className="text-gray-600 leading-relaxed">
                        Expert opinions and cost estimations
                        </p>
                        <button onClick={() => navigate('/services/medical_opinion')} 
                                className={`w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 group`}>
                            Learn More
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="bg-blue-100 text-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                        <FileText className="h-7 w-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Pre-Travel consultations</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Understand your procedure before traveling
                        </p>
                        <button onClick={() => navigate('/services/pre_travel')} 
                                className={`w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 group`}>
                            Learn More
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="bg-green-100 text-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                        <Plane className="h-7 w-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Visa Assistance</h3>
                        <p className="text-gray-600 leading-relaxed">
                        Complete medical visa assistance
                        </p>
                        <button onClick={() => navigate('/services/visa_assistance')} 
                                className={`w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 group`}>
                            Learn More
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="bg-green-100 text-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                        <HeartHandshake className="h-7 w-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Money Exchange</h3>
                        <p className="text-gray-600 leading-relaxed">
                        Convenient currency exchange services in your city
                        </p>
                        <button onClick={() => navigate('/services')} 
                                className={`w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 group`}>
                            Learn More
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="bg-green-100 text-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                        <HomeIcon className="h-7 w-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Interpreters and Translators</h3>
                        <p className="text-gray-600 leading-relaxed">
                        Fluent professionals to break language barriers at every step
                        </p>
                        <button onClick={() => navigate('/services')} 
                                className={`w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 group`}>
                            Learn More
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="bg-green-100 text-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                        <HomeIcon className="h-7 w-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Transportation Assistance</h3>
                        <p className="text-gray-600 leading-relaxed">
                        Complimentary airport transfers.
                        </p>
                        <button onClick={() => navigate('/services')} 
                                className={`w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 group`}>
                            Learn More
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="bg-green-100 text-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                        <HomeIcon className="h-7 w-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Accomodation Opinions</h3>
                        <p className="text-gray-600 leading-relaxed">
                        Near the hospital and matching your budget and needs.
                        </p>
                        <button onClick={() => navigate('/services')} 
                                className={`w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 group`}>
                            Learn More
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="bg-green-100 text-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                        <HomeIcon className="h-7 w-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Admission, Appointment, Pharma Care</h3>
                        <p className="text-gray-600 leading-relaxed">
                        Full coordination of medical logistics
                        </p>
                        <button onClick={() => navigate('/services')} 
                                className={`w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 group`}>
                            Learn More
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="bg-green-100 text-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                        <HomeIcon className="h-7 w-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Private Duty Nursing</h3>
                        <p className="text-gray-600 leading-relaxed">
                        Arrangements of private nursing care as needed
                        </p>
                        <button onClick={() => navigate('/services')} 
                                className={`w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 group`}>
                            Learn More
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>

                    </div>
                <div className="flex flex-col space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Medical Opinion and Cost Estimations</h3>

                    <p className="text-gray-600 leading-relaxed">
                        At Wellness Voyage, we provide comprehensive Medical Opinion and Cost Estimation services designed to help patients and families make informed, confident healthcare decisions.
                        When facing a significant medical diagnosis or treatment plan, clarity is critical. Our service combines expert clinical review with transparent financial forecasting to ensure our clients understand both the medical and economic aspects of their care.
                    </p>

                    {/* <img src= "/src/misc/Services_desc/MO.jpg" alt="Services Logo" className="h-110 w-100 text-white group-hover:scale-110 transition-transform duration-300" /> */}

                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    >

                        <motion.img
                        // src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1200"
                        src={image}
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

                    <div className="group bg-gray-100 p-8 rounded-2xl shadow-lg 
                                        hover:shadow-xl transition-all duration-500 
                                        overflow-hidden max-h-32 hover:max-h-80">

                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Diagnostic Reports
                        </h3>

                        {/* Hidden content */}
                        <div className="opacity-0 group-hover:opacity-100 
                                        transition-opacity duration-500 delay-150">
                            <p className="text-gray-800 mt-4">
                            We provide comprehensive diagnostic report analysis including
                            interpretation, second opinions, and detailed cost estimations
                            for recommended procedures and treatments.
                            </p>
                        </div>

                    </div>

                    <div className="group bg-gray-100 p-8 rounded-2xl shadow-lg 
                                        hover:shadow-xl transition-all duration-500 
                                        overflow-hidden max-h-32 hover:max-h-80">

                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Imaging and laboratory results
                        </h3>

                        {/* Hidden content */}
                        <div className="opacity-0 group-hover:opacity-100 
                                        transition-opacity duration-500 delay-150">
                            <p className="text-gray-800 mt-4">
                            We provide comprehensive review and interpretation of imaging studies and laboratory investigations to support accurate clinical decision-making. Our team evaluates radiological reports (X-ray, CT, MRI, ultrasound) and diagnostic laboratory findings to identify key abnormalities, correlate results with clinical history, and assess their implications for treatment planning.
                            This service includes detailed explanations of findings, clarification of complex medical terminology, identification of potential red flags, and cost-related insights for any recommended follow-up tests or procedures. Our objective is to ensure clarity, transparency, and confidence in understanding diagnostic data before proceeding with further medical interventions.
                            </p>
                        </div>

                    </div>

                    <div className="group bg-gray-100 p-8 rounded-2xl shadow-lg 
                                        hover:shadow-xl transition-all duration-500 
                                        overflow-hidden max-h-32 hover:max-h-80">

                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Physician notes and treatment recommendations
                        </h3>

                        {/* Hidden content */}
                        <div className="opacity-0 group-hover:opacity-100 
                                        transition-opacity duration-500 delay-150">
                            <p className="text-gray-800 mt-4">
                            We conduct a structured review of physician consultation notes and prescribed treatment plans to ensure medical clarity, appropriateness, and cost transparency. Our team analyzes documented diagnoses, clinical observations, prescribed medications, recommended procedures, and follow-up plans to assess alignment with established medical standards and evidence-based guidelines.
                            This service includes interpretation of complex clinical terminology, identification of alternative therapeutic options where applicable, evaluation of treatment necessity, and estimation of projected medical costs. We aim to provide a clear, objective breakdown of the proposed care pathway, empowering informed decisions while ensuring clinical and financial accountability.
                            </p>
                        </div>

                    </div>

                    <div className="group bg-gray-100 p-8 rounded-2xl shadow-lg 
                                        hover:shadow-xl transition-all duration-500 
                                        overflow-hidden max-h-32 hover:max-h-80">

                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Surgical or procedural plans
                        </h3>

                        {/* Hidden content */}
                        <div className="opacity-0 group-hover:opacity-100 
                                        transition-opacity duration-500 delay-150">
                            <p className="text-gray-800 mt-4">
                            We provide a detailed evaluation of proposed surgical interventions and medical procedures to ensure clinical necessity, appropriateness, and cost transparency. Our review examines the indication for surgery, procedural methodology, associated risks, expected outcomes, and alignment with established clinical guidelines and best practices.
                            </p>
                        </div>

                    </div>

                    <div className="group bg-gray-100 p-8 rounded-2xl shadow-lg 
                                        hover:shadow-xl transition-all duration-500 
                                        overflow-hidden max-h-32 hover:max-h-80">

                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Confirm or reassess the diagnosis
                        </h3>

                        {/* Hidden content */}
                        <div className="opacity-0 group-hover:opacity-100 
                                        transition-opacity duration-500 delay-150">
                            <p className="text-gray-800 mt-4">
                            We provide an independent clinical review to confirm the accuracy of an existing diagnosis or reassess findings when there is uncertainty, conflicting results, or lack of treatment progress. Our team conducts a comprehensive evaluation of medical records, diagnostic reports, imaging studies, laboratory results, and physician notes to determine whether the diagnosis is supported by objective clinical evidence.
                            </p>
                        </div>

                    </div>

                    {/* <div className="bg-gray-400 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Diagnostic reports</h3>
                    </div>
                    <div className="bg-gray-400 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Imaging and laboratory results</h3>
                    </div>
                    <div className="bg-gray-400 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Physician notes and treatment recommendations</h3>
                    </div>
                    <div className="bg-gray-400 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Surgical or procedural plans</h3>
                    </div>
                    <div className="bg-gray-400 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Confirm or reassess the diagnosis</h3>
                    </div>
                    <div className="bg-gray-400 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Evaluate the appropriateness of the proposed treatment</h3>
                    </div>
                    <div className="bg-gray-400 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Identify alternative treatment options where applicable</h3>
                    </div>
                    <div className="bg-gray-400 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Clarify expected outcomes and associated risks</h3>
                    </div> */}

                </div>
            </div>

            <div className="text-center py-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Take the Next Step?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation. Our team is ready to answer your questions and help you begin your journey to better health.
              </p>
              <a
                href="/partner"
                className="inline-block bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors font-medium"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
