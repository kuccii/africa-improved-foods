import { Target, Users, Globe, Lightbulb } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 0.5
    }
  }
};

const staggerContainer = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

export const About = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [20, 0]);

  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'Addressing hunger and malnutrition by building resilient food systems and offering nutritious, affordable products.',
    },
    {
      icon: Users,
      title: 'Local Development',
      description:
        'Using a value chain approach to develop local maize and soy farming to higher agricultural standards.',
    },
    {
      icon: Globe,
      title: 'Regional Impact',
      description:
        'Collaborating with 250+ cooperatives to source raw inputs from smallholder farmers across East Africa.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description:
        'Utilizing best-in-class technology and manufacturing processes since 2016.',
    },
  ];

  return (
    <section id="about" className="relative bg-white py-24">
      {/* Decorative Background Shapes */}
      <svg
        className="absolute top-10 left-10 w-40 h-40 text-emerald-100 opacity-40"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="100" fill="currentColor" />
      </svg>
      <svg
        className="absolute bottom-20 right-10 w-56 h-56 text-emerald-200 opacity-30"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <rect width="200" height="200" fill="currentColor" rx="48" />
      </svg>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20"
        style={{ opacity, y }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.1 }}
        variants={staggerContainer}
      >
        {/* Section Heading */}
        <motion.header 
          className="text-center mb-20 max-w-3xl mx-auto"
          variants={fadeInUp}
        >
          <h2 className="text-5xl font-extrabold text-emerald-700 leading-tight mb-6">
            About Africa Improved Foods
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            An African food champion focused on addressing hunger and malnutrition through sustainable food systems,
            sourcing from local farmers, and delivering nutritious, affordable products.
          </p>
        </motion.header>

        {/* Feature Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-24"
          variants={staggerContainer}
        >
          {features.map(({ icon: Icon, title, description }, index) => (
            <motion.article
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 cursor-pointer"
              tabIndex={0}
              aria-labelledby={`feature-${index}`}
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
            >
              <div className="bg-emerald-100 p-4 rounded-xl mb-6 inline-flex items-center justify-center">
                <Icon className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 id={`feature-${index}`} className="text-xl font-semibold text-emerald-800 mb-3">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </motion.article>
          ))}
        </motion.div>

        {/* Vision & Image Section */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-50 to-white shadow-2xl"
          variants={fadeInUp}
          whileHover={{ 
            scale: 1.01,
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }}
        >
          <div className="p-10 sm:p-16 flex flex-col justify-center">
            <h3 className="text-4xl font-bold text-emerald-800 mb-6">Our Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We aim to be an impact-driven African food champion. By building sustainable, resilient food systems,
              we provide affordable, nutritious, and accessible products to improve food security and livelihoods.
            </p>
            <h4 className="text-2xl font-semibold text-emerald-700 mb-4">Our Approach</h4>
            <p className="text-gray-700 leading-relaxed">
              Our strategy centers around long-term sustainability by investing in key capabilities and
              empowering smallholder farmers through inclusive value chains, innovation, and local production.
            </p>
          </div>
          <div className="relative min-h-[384px]">
            <img
              src="https://h40.4c9.myftpupload.com/wp-content/uploads/2023/04/Component-162-%E2%80%93-1-1-1-min.jpg"
              alt="African farmland"
              className="object-cover w-full h-full"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/70 via-emerald-700/40 to-transparent" />
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div 
          className="mt-24"
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-emerald-800 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="glass-card p-8 text-center"
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
            >
              <h3 className="text-xl font-semibold gradient-text mb-3">Sustainability</h3>
              <p className="text-gray-600 leading-relaxed">Committed to environmentally responsible practices and long-term impact in all our operations.</p>
            </motion.div>
            <motion.div 
              className="glass-card p-8 text-center"
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
            >
              <h3 className="text-xl font-semibold gradient-text mb-3">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">Continuously seeking new and effective solutions to address complex food security and agricultural challenges.</p>
            </motion.div>
            <motion.div 
              className="glass-card p-8 text-center"
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
            >
              <h3 className="text-xl font-semibold gradient-text mb-3">Community</h3>
              <p className="text-gray-600 leading-relaxed">Building strong partnerships and empowering local communities through inclusive growth and development.</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
