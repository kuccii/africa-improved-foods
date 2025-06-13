import { Heart, Briefcase, Sprout, TrendingUp } from 'lucide-react';
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

export const Impact = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [20, 0]);

  const impactStats = [
    {
      icon: Heart,
      title: 'Consumers & Beneficiaries',
      value: '1.6M',
      description: 'served per day.',
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: Sprout,
      title: 'Smallholder Farmers',
      value: '90K',
      description: 'impacted.',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Briefcase,
      title: 'Staff Members',
      value: '500+',
      description: 'Total staff members.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: TrendingUp,
      title: 'Net Incremental Value',
      value: '$1B',
      description: 'added in Africa within 1st 15 years.',
      color: 'bg-orange-100 text-orange-600',
    },
  ];

  const initiatives = [
    {
      title: 'Nutrition Impact',
      description:
        'AIF develops nutritious products made in Africa, using locally grown cereals fortified with essential vitamins to fight stunting across the continent.',
      image:
        'https://h40.4c9.myftpupload.com/wp-content/uploads/2023/04/Component-163-%E2%80%93-1.jpg',
    },
    {
      title: 'Employment Development',
      description:
        'AIF hires local talent and fosters growth through dedicated coaching, hands-on training, and mentorship programs.',
      image:
        'https://h40.4c9.myftpupload.com/wp-content/uploads/2023/04/Component-131-%E2%80%93-1.jpg',
    },
    {
      title: 'Farmer Support',
      description:
        'From seed development to post-harvest handling, AIF supports farmers with training, tools, and agronomy expertise.',
      image:
        'https://www.africaoutlookmag.com/media/2022/11/africa-improved-foods-1-1622209718.profileImage.2x-jpg-webp-webp.webp',
    },
  ];

  return (
    <section id="impact-section" className="py-24 bg-gradient-to-br from-orange-50 to-green-50 text-gray-800 relative overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
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
            Our Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transforming lives through nutrition, local sourcing, and sustainable employment across East Africa.
          </p>
        </motion.div>

        {/* Impact Stats */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-24"
          variants={staggerContainer}
        >
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={index}
                className="glass-card p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all duration-300 border border-white border-opacity-20"
                variants={fadeInUp}
                whileHover={{ 
                  y: -5,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br from-${stat.color.split(' ')[0].split('-')[0]}-400 to-${stat.color.split(' ')[1].split('-')[0]}-600 flex items-center justify-center mx-auto mb-5 shadow-md`}
                >
                  <Icon className="h-8 w-8 text-gray-900" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{stat.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{stat.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Initiatives */}
        <motion.div 
          className="space-y-24"
          variants={staggerContainer}
        >
          {initiatives.map((initiative, index) => (
            <motion.div 
              key={index}
              className={`flex flex-col-reverse ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12 bg-white/50 rounded-3xl shadow-xl p-6 md:p-10 border border-white border-opacity-20`}
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.01,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{initiative.title}</h3>
                <p className="text-base text-gray-700 leading-relaxed">{initiative.description}</p>
              </div>
              
              <div className="flex-1 w-full">
                <div 
                  className="h-80 w-full bg-cover bg-center rounded-2xl shadow-lg"
                  style={{ backgroundImage: `url(${initiative.image})` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
