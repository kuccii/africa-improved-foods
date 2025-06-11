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
    <div className="min-h-screen relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="decorative-circle w-72 h-72 -top-40 right-1/4 absolute" />
      <div className="decorative-circle w-96 h-96 -bottom-48 -left-48 absolute" />
      <div className="decorative-square w-40 h-40 top-1/3 -right-20 rotate-45 absolute" />

      {/* Main content container */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-4xl font-bold gradient-text mb-8 mt-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Products
        </motion.h1>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-16"
        >
          {/* Product categories */}
          <motion.div variants={fadeInUp}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {productCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-6 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold gradient-text mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
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
        className="w-full mt-8 relative z-10"
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
          <h2 className="text-2xl font-semibold gradient-text mb-4">Our Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="text-lg font-semibold gradient-text mb-2">{cert.name}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Why choose us */}
      <motion.div variants={fadeInUp} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="gradient-section p-8">
          <h2 className="text-2xl font-semibold gradient-text mb-4">Why Choose Our Products?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold gradient-text mb-2">Quality Assured</h3>
              <p className="text-gray-600">All our products meet the highest quality standards and certifications.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold gradient-text mb-2">Sustainable Practices</h3>
              <p className="text-gray-600">Environmentally conscious production methods and responsible sourcing.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
