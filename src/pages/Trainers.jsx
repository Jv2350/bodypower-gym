import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMedal } from 'react-icons/fa';
import { trainers as trainerData } from '../data/gymData';

const Trainers = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    fetchTrainers();
  }, []);

  const fetchTrainers = () => {
    const data = [...trainerData].sort(
      (a, b) => new Date(a.created_at) - new Date(b.created_at)
    );
    setTrainers(data);
  };

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
              Our Expert <span className="text-gradient">Trainers</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet our certified professionals dedicated to your fitness success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer, index) => (
              <motion.div
                key={trainer.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-primary transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={trainer.image_url}
                    alt={trainer.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
                </div>

                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                  <FaMedal />
                  <span>{trainer.experience_years}+ Years</span>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    {trainer.name}
                  </h3>
                  <p className="text-primary font-semibold mb-3">{trainer.specialty}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{trainer.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-br from-primary/20 to-primary-dark/20 border border-primary/30 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-heading font-bold text-white mb-4">
              Want Personal Training?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get one-on-one attention from our expert trainers. Personalized workout plans,
              nutrition guidance, and dedicated support to help you reach your goals faster.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:scale-105"
            >
              Book a Session
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Trainers;
