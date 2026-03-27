import { motion } from "framer-motion";
import { FaAppleAlt, FaCarrot, FaDrumstickBite, FaLeaf } from "react-icons/fa";

const DietPlans = () => {
  const plans = [
    {
      icon: <FaLeaf className="text-4xl" />,
      title: "Weight Loss Diet",
      calories: "1500-1800 cal/day",
      description: "Balanced calorie deficit for sustainable weight loss",
      features: [
        "High protein, low carb",
        "Rich in fiber",
        "Portion controlled meals",
        "Hydration guidelines",
      ],
    },
    {
      icon: <FaDrumstickBite className="text-4xl" />,
      title: "Muscle Gain Diet",
      calories: "2500-3000 cal/day",
      description: "Calorie surplus with optimal protein intake",
      features: [
        "High protein meals",
        "Complex carbohydrates",
        "Healthy fats",
        "Post-workout nutrition",
      ],
    },
    {
      icon: <FaAppleAlt className="text-4xl" />,
      title: "Maintenance Diet",
      calories: "2000-2200 cal/day",
      description: "Balanced nutrition for maintaining current weight",
      features: [
        "Balanced macros",
        "Whole foods focus",
        "Flexible meal timing",
        "Nutrient dense options",
      ],
    },
    {
      icon: <FaCarrot className="text-4xl" />,
      title: "Vegetarian Plan",
      calories: "Customized",
      description: "Plant-based nutrition for all fitness goals",
      features: [
        "Plant protein sources",
        "Complete amino acids",
        "Iron and B12 focus",
        "Varied meal options",
      ],
    },
  ];

  const sampleMeals = [
    {
      meal: "Breakfast",
      options: [
        "Oatmeal with fruits",
        "Egg white omelette",
        "Greek yogurt bowl",
        "Protein smoothie",
      ],
    },
    {
      meal: "Lunch",
      options: [
        "Grilled chicken salad",
        "Brown rice with dal",
        "Quinoa bowl",
        "Paneer wrap",
      ],
    },
    {
      meal: "Dinner",
      options: [
        "Grilled fish with vegetables",
        "Chicken breast with sweet potato",
        "Vegetable stir fry",
        "Lentil curry",
      ],
    },
    {
      meal: "Snacks",
      options: ["Mixed nuts", "Protein bar", "Fruits", "Roasted chickpeas"],
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            Diet <span className="text-gradient">Plans</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Nutrition guidance tailored to your fitness goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
              <h3 className="text-xl font-bold text-white mb-2">
                {plan.title}
              </h3>
              <p className="text-primary text-sm font-semibold mb-3">
                {plan.calories}
              </p>
              <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
              <ul className="space-y-2">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-gray-300 text-sm flex items-start"
                  >
                    <span className="text-primary mr-2">✓</span>
                    <span>{feature}</span>
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
          className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8"
        >
          <h3 className="text-3xl font-heading font-bold text-white mb-8 text-center">
            Sample Meal Options
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sampleMeals.map((mealTime, index) => (
              <div key={index}>
                <h4 className="text-primary font-bold mb-3">{mealTime.meal}</h4>
                <ul className="space-y-2">
                  {mealTime.options.map((option, idx) => (
                    <li key={idx} className="text-gray-300 text-sm">
                      • {option}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">
            Get personalized diet plans with our premium membership
          </p>
          <a
            href="/membership"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105"
          >
            Start Your Nutrition Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DietPlans;
