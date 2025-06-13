import { Handshake, Building2, Globe, Award } from 'lucide-react';
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

const data = {
  benefits: [
    { icon: Handshake, title: 'Public‑Private Partnership', desc: 'Combining public and private strengths for high impact.' },
    { icon: Building2, title: 'Modern Technology', desc: 'High-end manufacturing since 2016.' },
    { icon: Globe, title: 'Regional Insight', desc: 'Deep understanding of East African markets.' },
    { icon: Award, title: 'Proven Impact', desc: 'Measured and sustainable outcomes delivered.' },
  ],
  partners: [
    { name: 'DSM', logo: 'https://panaceutics.com/wp-content/uploads/2020/11/logo-dsm.svg' },
    { name: 'IFC', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMWTTJVY33LpzRl5QMPAHJUCf19RRfxoLM-q8H6xiwQou3t8cN9snMyIwOY6jS0phUt_c&usqp=CAU' }, // Replaced with a more generic placeholder, ensure actual logo is used
    { name: 'FMO', logo: 'https://www.fmo.nl/l/library/download/urn:uuid:605749ef-5bdd-414b-97cd-6e435ef1420b/fmo+rainbow+logo.png?scaleType=1&width=194' },
    { name: 'Govt. of Rwanda', logo: 'https://www.gov.rw/index.php?eID=dumpFile&t=f&f=1686&token=bbbb57e8d97711973cf02637df254ced6259f00f' },
  ],
};

export const Partnership = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [20, 0]);

  return (
    <section id="partnership-section" className="py-24 bg-gray-50">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ opacity, y }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.1 }}
        variants={staggerContainer}
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          variants={fadeInUp}
        >
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Strategic Alliances
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Building strong partnerships to create sustainable impact across East Africa.
          </p>
        </motion.div>

        {/* Partner Logos */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
        >
          {data.partners.map((partner, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 w-auto mx-auto object-contain"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Partnership Benefits */}
        <motion.div 
          className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {data.benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
