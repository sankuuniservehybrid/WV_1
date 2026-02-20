import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Destinations from './components/Destinations';
import CTA from './components/CTA';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import HowItWorksPage from './pages/Howitworks';
import Partnerpage from './pages/Partner';
import Specialitiespage from './pages/Specialities';
import ServicesPage from './pages/our_services';
import Profilepage from './pages/Profile';

import ServicesPage_Medical_opinion from './pages/services_desc/medical_opinion';
import ServicesPage_Pre_travel from './pages/services_desc/Pre_travel';
import ServicesPage_Visa_assistance from './pages/services_desc/visa_assistance';


// import Careerpage from './pages/career';
import Authpage from './pages/auth';


function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <Destinations />
      <CTA />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/HowItWorks" element={<HowItWorksPage />} />
        <Route path="/partner" element={<Partnerpage />} />
        <Route path="/Specialities" element={<Specialitiespage />} />
        <Route path="/services" element={<ServicesPage />} />

        <Route path="/services/medical_opinion" element={<ServicesPage_Medical_opinion />} />
        <Route path="/services/pre_travel" element={<ServicesPage_Pre_travel />} />
        <Route path="/services/visa_assistance" element={<ServicesPage_Visa_assistance />} />

        <Route path="/profile" element={<Profilepage />} />
        {/* <Route path="/career" element={<Careerpage />} /> */}
        <Route path="/auth" element={<Authpage />} />
      </Routes>
    </Router>
  );
}

export default App;
