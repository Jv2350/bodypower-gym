import { motion } from 'framer-motion';
import { FaDumbbell, FaUsers, FaAward, FaClock, FaHeart, FaChartLine } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: <FaUsers />, number: '5000+', label: 'Happy Members' },
    { icon: <FaAward />, number: '15+', label: 'Years Experience' },
    { icon: <FaDumbbell />, number: '50+', label: 'Equipment Pieces' },
    { icon: <FaClock />, number: '18', label: 'Hours Daily' },
  ];

  const values = [
    {
      icon: <FaHeart />,
      title: 'Passion for Fitness',
      description: 'We live and breathe fitness, inspiring our members to achieve their best.'
    },
    {
      icon: <FaUsers />,
      title: 'Community First',
      description: 'Building a supportive community where everyone motivates each other.'
    },
    {
      icon: <FaChartLine />,
      title: 'Results Driven',
      description: 'Focused on delivering measurable results and transformations.'
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl font-heading font-bold text-white mb-6">
              About <span className="text-gradient">Body Power Gym</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Best Gym in Kamothe, Kharghar and Navi Mumbai
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center"
              >
                <div className="text-primary text-3xl mb-3 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold text-white mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Body Power Gym has been a cornerstone of fitness excellence in Navi Mumbai for over 15 years.
                  Located in the heart of Kamothe, we've helped thousands of individuals transform their lives
                  through fitness.
                </p>
                <p>
                  What started as a small fitness center has grown into one of the most respected gyms in the
                  region, known for our state-of-the-art facilities, expert trainers, and supportive community.
                </p>
                <p>
                  We believe fitness is not just about building muscles, it's about building confidence,
                  discipline, and a healthy lifestyle that lasts a lifetime. Our approach combines modern
                  training techniques with personalized attention to help each member achieve their unique goals.
                </p>
                <p>
                  With a 4.4 rating from over 387 reviews, we're proud to be recognized as the best gym in
                  Kamothe, Kharghar, and the wider Navi Mumbai area.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg"
                alt="Gym facility"
                className="rounded-xl w-full h-48 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg"
                alt="Weight training"
                className="rounded-xl w-full h-48 object-cover mt-8"
              />
              <img
                src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg"
                alt="Cardio zone"
                className="rounded-xl w-full h-48 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/703016/pexels-photo-703016.jpeg"
                alt="Personal training"
                className="rounded-xl w-full h-48 object-cover mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-gray-400 text-lg">What drives us every day</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-8 hover:border-primary transition-all duration-300"
              >
                <div className="text-primary text-4xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Ready to Start Your <span className="text-gradient">Journey?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Join Body Power Gym today and experience the difference
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/membership"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105"
              >
                View Membership Plans
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
