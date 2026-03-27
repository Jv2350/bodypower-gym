import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaDumbbell,
  FaUsers,
  FaTrophy,
  FaHeartbeat,
  FaStar,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';
import { useEffect, useState } from 'react';
import BMICalculator from '../components/BMICalculator';
import WorkoutPlans from '../components/WorkoutPlans';
import DietPlans from '../components/DietPlans';
import { memberReviews, membershipPlans } from '../data/gymData';

const Home = () => {
  const [reviews, setReviews] = useState([]);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetchReviews();
    fetchPlans();
  }, []);

  const fetchReviews = () => {
    const data = [...memberReviews]
      .filter((review) => review.is_approved)
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .slice(0, 3);
    setReviews(data);
  };

  const fetchPlans = () => {
    const data = [...membershipPlans]
      .sort((a, b) => a.duration_months - b.duration_months)
      .slice(0, 3);
    setPlans(data);
  };

  const benefits = [
    {
      icon: <FaDumbbell className="text-4xl" />,
      title: 'Modern Equipment',
      description: 'State-of-the-art gym equipment for optimal training'
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: 'Expert Trainers',
      description: 'Certified professionals to guide your fitness journey'
    },
    {
      icon: <FaTrophy className="text-4xl" />,
      title: 'Proven Results',
      description: 'Thousands of successful transformations'
    },
    {
      icon: <FaHeartbeat className="text-4xl" />,
      title: 'Personalized Plans',
      description: 'Custom workout and diet plans for your goals'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-black text-white mb-6">
              TRANSFORM YOUR
              <span className="block text-gradient mt-2">BODY & MIND</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Best Gym in Kamothe, Kharghar & Navi Mumbai
            </p>
            <div className="flex items-center justify-center space-x-2 mb-10">
              <div className="flex text-yellow-400 text-xl">
                {'★'.repeat(4)}{'☆'.repeat(1)}
              </div>
              <span className="text-gray-300 font-medium">4.4 Rating • 387 Reviews</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/membership"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2 group"
              >
                <span>JOIN NOW</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
              >
                CONTACT US
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4"
            >
              Why Choose <span className="text-gradient">Body Power Gym</span>
            </motion.h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Your premier fitness destination in Navi Mumbai
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-primary transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-primary mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              Membership <span className="text-gradient">Plans</span>
            </h2>
            <p className="text-gray-400 text-lg">Choose the perfect plan for your fitness journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-gray-800 rounded-xl overflow-hidden ${plan.is_popular ? 'ring-2 ring-primary' : ''
                  }`}
              >
                {plan.is_popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-bold">
                    POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">₹{plan.price}</span>
                    <span className="text-gray-400">/{plan.duration_months} month{plan.duration_months > 1 ? 's' : ''}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-gray-300">
                        <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/membership"
                    className={`block text-center w-full py-3 rounded-lg font-bold transition-all duration-300 ${plan.is_popular
                        ? 'bg-primary hover:bg-primary-dark text-white'
                        : 'bg-gray-700 hover:bg-primary text-white'
                      }`}
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/membership"
              className="inline-block text-primary hover:text-primary-light font-semibold"
            >
              View All Plans <FaArrowRight className="inline ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              What Our <span className="text-gradient">Members Say</span>
            </h2>
            <p className="text-gray-400 text-lg">Real transformations, real results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
              >
                <div className="flex text-yellow-400 mb-4">
                  {Array(review.rating).fill('★')}
                </div>
                <p className="text-gray-300 mb-4 italic">"{review.review_text}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {review.member_name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{review.member_name}</p>
                    <p className="text-gray-400 text-sm">Verified Member</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:scale-105"
            >
              Start Your Transformation Today
            </Link>
          </div>
        </div>
      </section>

      <WorkoutPlans />
      <DietPlans />

      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <BMICalculator />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-heading font-bold text-white mb-6">
                Why Track Your BMI?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold mb-1">Monitor Progress</p>
                    <p className="text-gray-400 text-sm">Track your fitness journey with measurable data</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold mb-1">Set Realistic Goals</p>
                    <p className="text-gray-400 text-sm">Understand your starting point and target</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold mb-1">Health Indicator</p>
                    <p className="text-gray-400 text-sm">Get insights into your overall health status</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  to="/membership"
                  className="block text-center bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-bold transition-all duration-300"
                >
                  Get Professional Guidance
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
