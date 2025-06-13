import { motion } from 'framer-motion';
import { About } from '../components/About';
import { Impact } from '../components/Impact';
import { Partnership } from '../components/Partnership';

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

const milestones = [
  {
    year: '2015',
    title: 'Foundation',
    description: 'Established with a vision to transform food security in Africa',
    image: '/images/foundation.jpg'
  },
  {
    year: '2017',
    title: 'First Processing Plant',
    description: 'Launched our first state-of-the-art processing facility',
    image: '/images/plant.jpg'
  },
  {
    year: '2019',
    title: 'Regional Expansion',
    description: 'Expanded operations to multiple countries across Africa',
    image: '/images/expansion.jpg'
  },
  {
    year: '2021',
    title: 'Sustainability Award',
    description: 'Recognized for sustainable agricultural practices',
    image: '/images/award.jpg'
  },
  {
    year: '2023',
    title: 'Innovation Hub',
    description: 'Established research and development center for food innovation',
    image: '/images/innovation.jpg'
  }
];

export const AboutPage = () => {
  return (
    <div className="min-h-screen py-16 relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute w-96 h-96 bg-green-200/30 rounded-full blur-3xl -top-20 -left-20 z-0" />
      <div className="absolute w-96 h-96 bg-yellow-200/20 rounded-full blur-2xl -bottom-32 -right-32 z-0" />
      <div className="absolute w-48 h-48 bg-pink-300/20 rotate-45 blur-2xl top-1/3 right-1/4 z-0" />

      {/* Full Width About */}
      <motion.div
        className="relative z-10 w-full"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <div className="glass-card p-8 w-full">
          <About />
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-16"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div className="space-y-16">
          {/* Timeline */}
          <motion.div variants={fadeInUp}>
            <div className="gradient-section p-8">
              <h2 className="text-2xl font-semibold gradient-text mb-8">Our Journey</h2>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-green-200/50" />
                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={index}
                      className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center md:items-start gap-6`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-green-600 to-green-800 rounded-full shadow-lg z-10" />

                      <div className="glass-card p-6 w-full md:w-1/2 z-10">
                        <p className="text-sm text-green-700 font-bold mb-1">{milestone.year}</p>
                        <h3 className="text-xl font-semibold gradient-text mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>

                      <div className="w-full md:w-1/2">
                        <img
                          src={milestone.image}
                          alt={milestone.title}
                          className="w-full h-64 object-cover rounded-xl shadow-md border border-gray-200"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Impact */}
          <motion.div variants={fadeInUp}>
            <div className="glass-card p-8">
              <Impact />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Full Width Partnership */}
      <motion.div
        className="relative z-10 w-full mt-16"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        <div className="glass-card p-8 w-full">
          <Partnership />
        </div>
      </motion.div>
    </div>
  );
};
