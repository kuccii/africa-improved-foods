import { motion } from 'framer-motion';
import { Products } from '../components/Products';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const productCategories = [
  {
    title: 'Sustainable Agriculture',
    description: 'Innovative farming solutions for better yields and environmental protection.',
    icon: '🌱',
    features: [
      'Climate-smart farming techniques',
      'Water conservation systems',
      'Organic farming methods'
    ]
  },
  {
    title: 'Food Processing',
    description: 'State-of-the-art processing facilities ensuring quality and safety.',
    icon: '🏭',
    features: [
      'Advanced quality control',
      'Hygienic processing methods',
      'Sustainable packaging'
    ]
  },
  {
    title: 'Distribution Network',
    description: 'Efficient logistics and supply chain management.',
    icon: '🚚',
    features: [
      'Cold chain logistics',
      'Real-time tracking',
      'Last-mile delivery solutions'
    ]
  }
];

const certifications = [
  {
    name: 'ISO 22000',
    description: 'Food Safety Management System',
    icon: '🏆'
  },
  {
    name: 'Organic Certification',
    description: 'Certified Organic Production',
    icon: '🌿'
  },
  {
    name: 'Fair Trade',
    description: 'Ethical Trading Practices',
    icon: '🤝'
  }
];

export const ProductsPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-teal-50 to-purple-50 text-gray-800">
      {/* Decorative background elements */}
      <div className="absolute w-96 h-96 bg-purple-200/30 rounded-full blur-3xl -top-20 -right-20 z-0" />
      <div className="absolute w-96 h-96 bg-teal-200/20 rounded-full blur-2xl -bottom-32 -left-32 z-0" />

      {/* Main content container */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-16"
        >
          {/* Product categories */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl font-extrabold gradient-text text-center mb-12">Our Product Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {productCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-6 cursor-pointer"
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4 text-emerald-600">{category.icon}</div>
                  <h3 className="text-xl font-semibold gradient-text mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                  <ul className="space-y-2">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="text-emerald-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Full-width Products Section below product categories */}
      <motion.div
        className="w-full mt-16 relative z-10"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <div className="glass-card p-8 w-full">
          <Products />
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div variants={fadeInUp} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="gradient-section p-8">
          <h2 className="text-4xl font-extrabold gradient-text text-center mb-12">Our Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="glass-card p-8 cursor-pointer"
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-5xl mb-4 text-teal-600 text-center">{cert.icon}</div>
                <h3 className="text-xl font-semibold gradient-text text-center mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-center">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Why choose us */}
      <motion.div variants={fadeInUp} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pb-16">
        <div className="gradient-section p-8">
          <h2 className="text-4xl font-extrabold gradient-text text-center mb-12">Why Choose Our Products?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold gradient-text mb-2">Quality Assured</h3>
              <p className="text-gray-600 leading-relaxed">All our products meet the highest quality standards and certifications, ensuring safety and efficacy for our consumers.</p>
            </motion.div>
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold gradient-text mb-2">Sustainable Practices</h3>
              <p className="text-gray-600 leading-relaxed">We are committed to environmentally conscious production methods and responsible sourcing, from farm to table.</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
