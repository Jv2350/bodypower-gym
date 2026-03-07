import { motion } from 'framer-motion';
import { FaDumbbell, FaRunning, FaFireAlt } from 'react-icons/fa';

const WorkoutPlans = () => {
  const plans = [
    {
      icon: <FaDumbbell className="text-4xl" />,
      title: 'Beginner Program',
      duration: '4 Weeks',
      description: 'Perfect for those starting their fitness journey',
      workouts: [
        'Full body workout - 3x per week',
        'Basic compound exercises',
        'Light cardio sessions',
        'Flexibility training'
      ]
    },
    {
      icon: <FaFireAlt className="text-4xl" />,
      title: 'Weight Loss Program',
      duration: '8 Weeks',
      description: 'Intensive fat burning and cardio focused',
      workouts: [
        'HIIT training - 4x per week',
        'Circuit training',
        'Cardio intervals',
        'Core strengthening'
      ]
    },
    {
      icon: <FaDumbbell className="text-4xl" />,
      title: 'Muscle Building',
      duration: '12 Weeks',
      description: 'Advanced strength and hypertrophy training',
      workouts: [
        'Split routine - 5x per week',
        'Progressive overload',
        'Heavy compound lifts',
        'Isolation exercises'
      ]
    },
    {
      icon: <FaRunning className="text-4xl" />,
      title: 'Athletic Performance',
      duration: '10 Weeks',
      description: 'Enhance speed, agility, and power',
      workouts: [
        'Plyometric training',
        'Speed drills',
        'Functional movements',
        'Sport-specific exercises'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            Workout <span className="text-gradient">Plans</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Structured programs designed by certified trainers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-primary transition-all duration-300"
            >
              <div className="text-primary mb-4">{plan.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
              <p className="text-primary text-sm font-semibold mb-3">{plan.duration}</p>
              <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
              <ul className="space-y-2">
                {plan.workouts.map((workout, idx) => (
                  <li key={idx} className="text-gray-300 text-sm flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{workout}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">
            All workout plans are customized based on your fitness level and goals
          </p>
          <a
            href="/membership"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105"
          >
            Get Your Custom Plan
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkoutPlans;
