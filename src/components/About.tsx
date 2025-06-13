import { Target, Users, Globe, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export const About = () => {
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

  const values = [
    {
      title: 'Sustainability',
      description: 'Committed to environmentally responsible practices and long-term impact in all our operations.',
    },
    {
      title: 'Innovation',
      description: 'Continuously seeking new and effective solutions to address complex food security and agricultural challenges.',
    },
    {
      title: 'Community',
      description: 'Building strong partnerships and empowering local communities through inclusive growth and development.',
    },
  ];

  return (
    <section id="about" className="relative bg-gradient-to-br from-green-50 to-orange-50 py-24 overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 bg-white/30 backdrop-blur-lg rounded-3xl shadow-xl p-8 md:p-12 border border-white border-opacity-30"
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.05 }}
        variants={fadeInUp}
      >
        {/* Section Heading */}
        <motion.header 
          className="text-center mb-20 max-w-4xl mx-auto"
          variants={fadeInUp}
        >
          <h2 className="text-6xl font-extrabold text-gray-900 leading-tight mb-6">
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
          variants={fadeInUp}
          viewport={{ once: false, amount: 0.3 }}
        >
          {features.map(({ icon: Icon, title, description }, index) => (
            <motion.article
              key={index}
              className="glass-card-about p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 cursor-pointer border border-white border-opacity-20"
              tabIndex={0}
              aria-labelledby={`feature-${index}`}
              variants={fadeInUp}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
            >
              <div className="bg-gradient-to-br from-emerald-400 to-green-600 p-4 rounded-xl mb-6 inline-flex items-center justify-center shadow-md">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 id={`feature-${index}`} className="text-xl font-semibold text-gray-900 mb-3">
                {title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">{description}</p>
            </motion.article>
          ))}
        </motion.div>

        {/* Vision & Image Section */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-3xl bg-white/50 shadow-2xl border border-white border-opacity-30"
          variants={fadeInUp}
          viewport={{ once: false, amount: 0.3 }}
          whileHover={{ 
            scale: 1.01,
            transition: { duration: 0.2, ease: "easeOut" }
          }}
        >
          <div className="p-10 sm:p-16 flex flex-col justify-center">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We aim to be an impact-driven African food champion. By building sustainable, resilient food systems,
              we provide affordable, nutritious, and accessible products to improve food security and livelihoods.
            </p>
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">Our Approach</h4>
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
            <div className="absolute inset-0 bg-gradient-to-tr from-green-900/70 via-green-700/40 to-transparent" />
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div 
          className="mt-24"
          variants={fadeInUp}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="glass-card-about p-8 text-center rounded-3xl shadow-xl border border-white border-opacity-20"
                variants={fadeInUp}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
