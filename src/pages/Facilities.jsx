import { motion } from 'framer-motion';
import {
  FaDumbbell,
  FaHeartbeat,
  FaRunning,
  FaUserMd,
  FaShower,
  FaLock,
  FaWifi,
  FaParking,
  FaFirstAid,
  FaMusic
} from 'react-icons/fa';

const Facilities = () => {
  const mainFacilities = [
    {
      icon: <FaDumbbell className="text-5xl" />,
      title: 'Weight Training Zone',
      description: 'Comprehensive free weights area with dumbbells, barbells, and Olympic lifting platforms',
      image: 'https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg'
    },
    {
      icon: <FaHeartbeat className="text-5xl" />,
      title: 'Cardio Equipment',
      description: 'Latest treadmills, ellipticals, stationary bikes, and rowing machines with entertainment systems',
      image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg'
    },
    {
      icon: <FaRunning className="text-5xl" />,
      title: 'Functional Training Area',
      description: 'Dedicated space for CrossFit, HIIT, and functional fitness with battle ropes, TRX, and more',
      image: 'https://images.pexels.com/photos/3838389/pexels-photo-3838389.jpeg'
    },
    {
      icon: <FaUserMd className="text-5xl" />,
      title: 'Personal Training',
      description: 'One-on-one coaching with certified trainers for customized fitness programs',
      image: 'https://images.pexels.com/photos/703016/pexels-photo-703016.jpeg'
    }
  ];

  const amenities = [
    { icon: <FaShower />, title: 'Clean Showers', description: 'Modern shower facilities' },
    { icon: <FaLock />, title: 'Secure Lockers', description: 'Personal storage lockers' },
    { icon: <FaWifi />, title: 'Free WiFi', description: 'High-speed internet' },
    { icon: <FaParking />, title: 'Parking', description: 'Ample parking space' },
    { icon: <FaFirstAid />, title: 'First Aid', description: 'Safety equipment available' },
    { icon: <FaMusic />, title: 'Music System', description: 'Motivating workout music' }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl font-heading font-bold text-white mb-6">
              World-Class <span className="text-gradient">Facilities</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              State-of-the-art equipment and amenities for your complete fitness experience
            </p>
          </motion.div>

          <div className="space-y-16">
            {mainFacilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="text-primary mb-4">{facility.icon}</div>
                  <h3 className="text-3xl font-heading font-bold text-white mb-4">
                    {facility.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {facility.description}
                  </p>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="relative rounded-2xl overflow-hidden group">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              Additional <span className="text-gradient">Amenities</span>
            </h2>
            <p className="text-gray-400 text-lg">Everything you need for a complete gym experience</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-primary transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-primary text-3xl mb-3 flex justify-center">
                  {amenity.icon}
                </div>
                <h4 className="text-white font-bold mb-1">{amenity.title}</h4>
                <p className="text-gray-400 text-xs">{amenity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Experience Our <span className="text-gradient">Facilities</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Visit us for a free tour and see why we're the best gym in Navi Mumbai
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105"
              >
                Schedule a Tour
              </a>
              <a
                href="tel:07045813690"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
