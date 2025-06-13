import { motion } from 'framer-motion';
import { News } from '../components/News';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.3, ease: "easeOut" } 
  }
};

export const NewsPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-green-50 to-orange-50 text-gray-800 py-16">
      {/* Background Blurs */}
      <div className="absolute w-96 h-96 bg-purple-200/30 rounded-full blur-3xl -top-20 -left-20 z-0" />
      <div className="absolute w-96 h-96 bg-teal-200/20 rounded-full blur-2xl -bottom-32 -right-32 z-0" />

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        viewport={{ once: false, amount: 0.5 }}
      >
        {/* <motion.h1
          className="text-4xl font-extrabold text-gray-900 text-center mb-12"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          viewport={{ once: false, amount: 0.15 }}
        >
          Our Latest News
        </motion.h1> */}
        <News />
      </motion.div>
    </div>
  );
}; 