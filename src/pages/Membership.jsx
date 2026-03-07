import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';
import { supabase } from '../lib/supabase';

const Membership = () => {
  const [plans, setPlans] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    const { data } = await supabase
      .from('membership_plans')
      .select('*')
      .order('duration_months', { ascending: true });
    if (data) setPlans(data);
  };

  const handleApply = (plan) => {
    setSelectedPlan(plan);
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const { error } = await supabase.from('membership_applications').insert([
      {
        full_name: formData.full_name,
        email: formData.email,
        phone: formData.phone,
        plan_id: selectedPlan.id
      }
    ]);

    setIsSubmitting(false);

    if (error) {
      setSubmitStatus('error');
    } else {
      setSubmitStatus('success');
      setFormData({ full_name: '', email: '', phone: '' });
      setTimeout(() => {
        setShowForm(false);
        setSubmitStatus(null);
      }, 2000);
    }
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
              Membership <span className="text-gradient">Plans</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan to start your fitness transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden ${
                  plan.is_popular ? 'ring-2 ring-primary scale-105' : ''
                }`}
              >
                {plan.is_popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-2 text-sm font-bold uppercase">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    {plan.duration_months} Month{plan.duration_months > 1 ? 's' : ''} Access
                  </p>

                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-primary">₹{plan.price}</span>
                      <span className="text-gray-400 ml-2">total</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">
                      ₹{Math.round(plan.price / plan.duration_months)}/month
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleApply(plan)}
                    className={`w-full py-4 rounded-lg font-bold text-white transition-all duration-300 hover:scale-105 ${
                      plan.is_popular
                        ? 'bg-primary hover:bg-primary-dark'
                        : 'bg-gray-700 hover:bg-primary'
                    }`}
                  >
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 mb-4">
              All plans include access to state-of-the-art equipment and facilities
            </p>
            <p className="text-sm text-gray-500">
              For corporate or group memberships, please contact us directly
            </p>
          </motion.div>
        </div>
      </section>

      {showForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-gray-700 relative"
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <FaTimes size={24} />
            </button>

            <h2 className="text-3xl font-heading font-bold text-white mb-2">
              Apply for Membership
            </h2>
            <p className="text-gray-400 mb-6">
              {selectedPlan?.name} - ₹{selectedPlan?.price}
            </p>

            {submitStatus === 'success' && (
              <div className="bg-green-500/20 border border-green-500 text-green-500 p-4 rounded-lg mb-6">
                Application submitted successfully! We'll contact you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-500/20 border border-red-500 text-red-500 p-4 rounded-lg mb-6">
                Something went wrong. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  pattern="[0-9]{10}"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="10-digit mobile number"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-bold transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-4 text-center">
              Our team will contact you within 24 hours
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Membership;
