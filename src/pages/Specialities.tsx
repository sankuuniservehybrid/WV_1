//import { MessageSquare , FileText , Plane , Heart , HeartHandshake , Home as HomeIcon} from 'lucide-react';
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
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <div>
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Services</span>
              <h1 className="mt-3 text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Services We Provide
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Wellness Voyage is a leading medical tourism facilitator specializing in connecting patients from Vietnam, Myanmar, Cambodia, and Sri Lanka with India's finest medical institutions and specialists.
              </p>
            </div>

            {/* <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-12 rounded-3xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We understand that seeking medical treatment across borders can be daunting. Our mission is to make the journey seamless, affordable, and focused entirely on your recovery and well-being. We believe that everyone deserves access to world-class healthcare, regardless of where they live.
              </p>
            </div> */}

            {/* <div className="grid md:grid-cols-1 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-teal-100 text-teal-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <MessageSquare className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Initial Consultation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Share your medical reports and concerns with us. Our team reviews your case and connects you with the right specialists
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 text-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <FileText className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Treatment Plan</h3>
                <p className="text-gray-600 leading-relaxed">
                  Receive a detailed treatment plan with cost estimates, hospital options, and expected outcomes from top medical professionals.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-green-100 text-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <Plane className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Travel Arrangements</h3>
                <p className="text-gray-600 leading-relaxed">
                  We handle all logistics including visa assistance, flight bookings, airport pickup, and accommodation near the hospital.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-green-100 text-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Medical Treatment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Receive world-class treatment at our partner hospitals with continuous support from our care coordinators.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-green-100 text-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <HeartHandshake className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Post-Treatment Care</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get comprehensive follow-up care, rehabilitation support, and regular check-ins with your medical team.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-green-100 text-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <HomeIcon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Return & Recovery</h3>
                <p className="text-gray-600 leading-relaxed">
                  Safe journey home with detailed recovery instructions and ongoing remote consultation support as needed.
                </p>
              </div>

            </div> */}
            

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

            <div className="bg-gray-50 p-12 rounded-3xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">What We Offer</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { category: 'Cardiology', items: [''] , logo : Cardiology_logo },
                  { category: 'Oncology', items: [''], logo : oncology_logo },
                  { category: 'Orthopedics', items: [''] , logo : orthopedic_logo},
                  { category: 'Fertility & IVF', items: [''], logo : Fertility_logo },
                  { category: 'Neurology', items: [''] , logo : Neurology_Logo},
                  { category: 'Liver Tansplant', items: [''], logo : liver_logo },
                  { category: 'Kidney Transplant', items: [''], logo : Kidney_logo },
                  { category: 'Bone Marrow', items: [''], logo : bone_logo },
                  { category: 'Gynecology', items: [''] , logo : genocology_logo},
                  { category: 'weight loss', items: [''] , logo : weight_loss_logo},

                ].map((specialty, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl">
                    <img src= {specialty.logo} alt="Services Logo" className="h-20 w-30 text-white group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold text-teal-600 mb-6">{specialty.category}</h3>
                    <ul className="space-y-2">
                      {specialty.items.map((item, idx) => (
                        <li key={idx} className="text-gray-600"> {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
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
