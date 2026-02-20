import {  Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from "../misc/WV_Logo_1.6.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-teal-000 rounded-lg p-2">
                {/* <Heart className="h-6 w-6 text-white" fill="white" /> */}
                <img src= {logo} alt="Wellness Voyage Logo" className="h-11 w-11 text-white" />
              </div>
              {/* <span className="text-xl font-semibold text-white">Wellness Voyage</span> */}
              <div className="flex flex-col leading-tight">
              <a href="/" className="text-2xl font-semibold text-white">
                Wellness Voyage
              </a>
              <span className="text-sm text-teal-600">
                  Where Wellness meets Wonder
              </span>
            </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Connecting patients with world-class medical care across borders.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.google.com/?zx=1763363704653&no_sw_cr=1" className="bg-gray-800 p-2 rounded-lg hover:bg-teal-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-teal-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-teal-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-teal-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Medical Opinion and Cost Estimations</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Pre-Travel Consultations</a></li>
              {/* <li><a href="#" className="hover:text-teal-400 transition-colors">Documentation</a></li> */}
              <li><a href="#" className="hover:text-teal-400 transition-colors">Visa Aassistance</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Money Exchange</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Interpreters and Translators</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Transportation Assistance</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Accomodation Options</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Admission, Appointment, Pharma Care</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Private Duty Nursing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Specialties</h3>
            <ul className="space-y-3">
              <li><a  className="hover:text-teal-400 transition-colors">Cardiology</a></li>
              <li><a  className="hover:text-teal-400 transition-colors">Oncology</a></li>
              <li><a  className="hover:text-teal-400 transition-colors">Orthopedics</a></li>
              <li><a  className="hover:text-teal-400 transition-colors">Liver Transplant</a></li>
              <li><a  className="hover:text-teal-400 transition-colors">Neurology</a></li>
              <li><a  className="hover:text-teal-400 transition-colors">Gynecology</a></li>
              <li><a  className="hover:text-teal-400 transition-colors">Liver Transplant</a></li>
              <li><a  className="hover:text-teal-400 transition-colors">Kidney transplant</a></li>
              <li><a  className="hover:text-teal-400 transition-colors">Fertility & IVF</a></li>
              <li><a  className="hover:text-teal-400 transition-colors">Bone Marrow Transplant</a></li>
              <li><a  className="hover:text-teal-400 transition-colors">Weight Loss</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Partner Hospitals</a></li>
              {/* <li><a href="/career" className="hover:text-teal-400 transition-colors">Careers</a></li> */}
              <li><a href="/partner" className="hover:text-teal-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">

            <p className="text-gray-400 text-sm">
              © 2024 Wellness Voyage. All rights reserved.
            </p>

            <div className="flex space-x-6 mt-4 md:mt-0">

              <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
                Privacy Policy
              </a>

              <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
                Terms of Service
              </a>

              <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
                Cookie Policy
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
