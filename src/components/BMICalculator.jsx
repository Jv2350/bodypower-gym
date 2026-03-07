import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalculator } from 'react-icons/fa';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();

    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);

      if (bmiValue < 18.5) {
        setCategory('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setCategory('Normal weight');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setCategory('Overweight');
      } else {
        setCategory('Obese');
      }
    }
  };

  const getCategoryColor = () => {
    if (category === 'Underweight') return 'text-blue-400';
    if (category === 'Normal weight') return 'text-green-400';
    if (category === 'Overweight') return 'text-yellow-400';
    if (category === 'Obese') return 'text-red-400';
    return 'text-gray-400';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8"
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-primary p-3 rounded-lg">
          <FaCalculator className="text-2xl text-white" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-white">
          BMI Calculator
        </h3>
      </div>

      <form onSubmit={calculateBMI} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Height (cm)
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
            min="100"
            max="250"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter your height in cm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Weight (kg)
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
            min="30"
            max="200"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter your weight in kg"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-bold transition-all duration-300"
        >
          Calculate BMI
        </button>
      </form>

      {bmi && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-8 p-6 bg-gray-900 rounded-xl border border-gray-700 text-center"
        >
          <p className="text-gray-400 mb-2">Your BMI</p>
          <p className="text-5xl font-bold text-primary mb-2">{bmi}</p>
          <p className={`text-xl font-semibold ${getCategoryColor()}`}>
            {category}
          </p>

          <div className="mt-6 pt-6 border-t border-gray-700">
            <p className="text-sm text-gray-400 mb-3">BMI Categories:</p>
            <div className="grid grid-cols-2 gap-2 text-xs text-left">
              <div className="text-blue-400">{'< 18.5'}</div>
              <div className="text-gray-300">Underweight</div>
              <div className="text-green-400">18.5 - 24.9</div>
              <div className="text-gray-300">Normal weight</div>
              <div className="text-yellow-400">25 - 29.9</div>
              <div className="text-gray-300">Overweight</div>
              <div className="text-red-400">{'≥ 30'}</div>
              <div className="text-gray-300">Obese</div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default BMICalculator;
