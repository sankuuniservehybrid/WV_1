import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../misc/WV_Logo_1.6.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-[90%] top-[2%] left-[5%] rounded-full right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-2xl'
          : 'bg-white/70 backdrop-blur-md shadow-lg'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20">
          <motion.div
            className="flex items-center space-x-3"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.div
              className="bg-gradient-to-br from-teal-500 to-blue-500 rounded-xl p-2"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <img src={logo} alt="Wellness Voyage Logo" className="h-9 w-9" />
            </motion.div>
            <div className="flex flex-col leading-tight">
              <a href="/" className="text-2xl font-bold text-gray-900 hover:text-teal-600 transition-colors">
                Wellness Voyage
              </a>
              <span className="text-xs text-teal-600 font-medium">
                Where Wellness meets Wonder
              </span>
            </div>
          </motion.div>

          <motion.div
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {['Home', 'How It Works', 'Specialities', 'Services', 'About Us'].map((item, index) => {
              const href = item === 'Home' ? '/' : `/${item.replace(/ /g, '')}`;
              return (
                <motion.a
                  key={item}
                  href={href}
                  className="relative text-gray-700 hover:text-teal-600 transition-colors font-medium group"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              );
            })}
          </motion.div>

          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden py-4 border-t border-gray-200"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-4">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'How It Works', href: '/HowItWorks' },
                  { name: 'Specialities', href: '/Specialities' },
                  { name: 'Services', href: '/services' },
                  { name: 'About Us', href: '/about' }
                ].map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-teal-600 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-teal-50"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
