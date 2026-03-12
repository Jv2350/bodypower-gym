import { Link } from "react-router-dom";
import {
  FaDumbbell,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import bodypower from "../assets/logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Membership Plans", path: "/membership" },
    { name: "Our Trainers", path: "/trainers" },
    { name: "Facilities", path: "/facilities" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-primary p-2 rounded-lg">
                {/* <FaDumbbell className="text-2xl text-white" /> */}
                <div className="bg-white rounded-lg group-hover:scale-110 transition-transform duration-300 w-12 h-12 flex items-center justify-center overflow-hidden">
                  <img
                    src={bodypower}
                    alt="Body Power Gym Logo"
                    className="w-full h-full object-contain scale-100 transform"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-white">
                  BODY POWER GYM
                </h3>
                <p className="text-xs text-gray-400">Best Gym in Kamothe</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Transform your body and mind at Navi Mumbai's premier fitness
              destination.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/bodypowerkamothe/"
                className="bg-gray-800 hover:bg-primary text-white p-2.5 rounded-lg transition-colors"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/bodypowerkamothe/"
                className="bg-gray-800 hover:bg-primary text-white p-2.5 rounded-lg transition-colors"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://www.threads.com/@bodypowerkamothe"
                className="bg-gray-800 hover:bg-primary text-white p-2.5 rounded-lg transition-colors"
              >
                <FaThreads size={18} />
              </a>
              <a
                href="https://wa.me/917045813690"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-green-600 text-white p-2.5 rounded-lg transition-colors"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-heading font-bold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary text-sm transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-bold text-white mb-4">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  1st Floor, Trimurti Enclave, Plot No. 6, Opposite Saksham
                  Mall, Sector 9, Kamothe, Panvel, Navi Mumbai 410209
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-primary flex-shrink-0" />
                <a
                  href="tel:07045813690"
                  className="text-gray-400 hover:text-primary text-sm transition-colors"
                >
                  07045813690
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-primary flex-shrink-0" />
                <a
                  href="mailto:info@bodypowergym.com"
                  className="text-gray-400 hover:text-primary text-sm transition-colors"
                >
                  info@bodypowergym.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-bold text-white mb-4">
              Opening Hours
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaClock className="text-primary mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-white font-medium">Monday - Saturday</p>
                  <p className="text-gray-400">5:00 AM - 11:00 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <FaClock className="text-primary mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-white font-medium">Sunday</p>
                  <p className="text-gray-400">6:00 PM - 10:00 PM</p>
                </div>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-xs text-gray-500 mb-2">Rating</p>
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {"★".repeat(4)}
                  {"☆".repeat(1)}
                </div>
                <span className="text-sm text-gray-400">4.4 (387 reviews)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Body Power Gym. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
