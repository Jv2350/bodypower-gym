import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaDumbbell, FaPhone } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import bodypower from "../assets/bodypower.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Membership', path: '/membership' },
    { name: 'Trainers', path: '/trainers' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-primary p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <FaDumbbell className="text-2xl text-white" />
            </div>
            <div>
              {/* <img src={bodypower} alt="" /> */}
              <h1 className="text-xl font-heading font-bold text-white">
                BODY POWER GYM
              </h1>
              <p className="text-xs text-gray-400">Best Gym in Kamothe</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActive(item.path)
                    ? 'bg-primary text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:07045813690"
              className="flex items-center space-x-2 text-gray-300 hover:text-primary transition-colors"
            >
              <FaPhone className="text-sm" />
              <span className="text-sm font-medium">07045813690</span>
            </a>
            <Link
              to="/membership"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Join Now
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/98 border-t border-gray-800 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${isActive(item.path)
                      ? 'bg-primary text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:07045813690"
                className="block px-4 py-3 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-all"
              >
                <FaPhone className="inline mr-2" />
                Call: 07045813690
              </a>
              <Link
                to="/membership"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-primary hover:bg-primary-dark text-white px-4 py-3 rounded-lg font-semibold transition-all"
              >
                Join Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
