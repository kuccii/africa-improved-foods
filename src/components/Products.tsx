import { useState } from 'react';
import { Users, Building, Utensils, Sprout, Leaf, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductItem {
  name: string;
  desc: string;
  img: string;
  features: string[];
}

interface ProductData {
  institutional: ProductItem[];
  consumer: ProductItem[];
}

const productData: ProductData = {
  institutional: [
    {
      name: 'Super Cereal Plus',
      desc: 'Specialized cereal with grains, milk, and micronutrients for children 6+ months.',
      img: 'https://africaimprovedfoods.com/wp-content/uploads/2023/06/Super_Cereal_Plus_packshot_facing.png',
      features: ['Pre-cooked grains', 'Micronutrients', '6+ months'],
    },
    {
      name: 'Shisha Kibondo Infants',
      desc: 'Nutritious maize-soya porridge for children 6+ months.',
      img: 'https://africaimprovedfoods.com/wp-content/uploads/2023/06/Shisha_Kibondo_Infants_packshot_facing.png',
      features: ['Maize & soya', 'Vitamins & minerals'],
    },
    {
      name: 'Shisha Kibondo Mothers',
      desc: 'Fortified porridge for pregnant and breastfeeding women.',
      img: 'https://africaimprovedfoods.com/wp-content/uploads/2023/06/Shisha_Kibondo_Mothers_packshot_facing.png',
      features: ['Maternal nutrition', 'Vitamins', 'Minerals'],
    },
  ],
  consumer: [
    {
      name: 'Nootri',
      desc: 'Nutritious cereals for child development and growth.',
      img: 'https://africaimprovedfoods.com/wp-content/uploads/2023/05/PACK-MOCKUP-NOOTRI-ALLFAMILY-50G.webp',
      features: ['Essential nutrients', 'Aflatoxin free'],
    },
    {
      name: 'Nootri Baby',
      desc: 'Instant infant cereals for healthy growth.',
      img: 'https://murukali.com/cdn/shop/files/Nootri-Baby-murukali-com-9188_1197x1197.jpg?v=1710031030',
      features: ['Instant cereals', 'Infant nutrition'],
    },
    {
      name: "Nootri All'Family",
      desc: 'Instant breakfast cereals for the whole family.',
      img: 'https://africaimprovedfoods.com/wp-content/uploads/2023/05/PACK-MOCKUP-NOOTRI-ALLFAMILY-50G.webp',
      features: ['Family use', 'Nutritious & delicious'],
    },
  ],
};

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

export const Products = () => {
  const [category, setCategory] = useState<keyof ProductData>('institutional');
  const products = productData[category];

  return (
    <section id="products-section" className="py-24 bg-gradient-to-br from-orange-50 to-green-100 text-gray-800 relative overflow-hidden">
      {/* Decorative Blur background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute w-64 h-64 bg-orange-200 rounded-full blur-3xl top-10 left-1/4 animate-blob" />
        <div className="absolute w-80 h-80 bg-green-200 rounded-full blur-3xl bottom-20 right-1/4 animate-blob animation-delay-2000" />
      </div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.15 }}
        variants={fadeInUp}
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          variants={fadeInUp}
        >
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Our Nutritious Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Providing high-quality, fortified foods for a healthier community.
          </p>
        </motion.div>

        {/* Category Buttons */}
        <motion.div 
          className="mt-8 flex justify-center space-x-4 mb-16"
          variants={fadeInUp}
        >
          <motion.button
            onClick={() => setCategory('institutional')}
            className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 font-semibold text-lg
              ${category === 'institutional' ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg' : 'bg-white text-gray-700 border border-gray-300 hover:border-emerald-400 hover:text-emerald-600'}
            `}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
          >
            <Building className="w-5 h-5" /> Institutional
          </motion.button>
          <motion.button
            onClick={() => setCategory('consumer')}
            className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 font-semibold text-lg
              ${category === 'consumer' ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg' : 'bg-white text-gray-700 border border-gray-300 hover:border-emerald-400 hover:text-emerald-600'}
            `}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
          >
            <Users className="w-5 h-5" /> Consumer
          </motion.button>
        </motion.div>

        {/* Product Grid */}
        <motion.div 
          className="grid gap-10 px-4 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto relative z-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.15 }}
          variants={fadeInUp}
        >
          {products.map((p: ProductItem, i: number) => (
            <motion.div
              key={i}
              className="glass-card p-8 rounded-3xl backdrop-filter backdrop-blur-lg border border-opacity-20 shadow-xl relative overflow-hidden transform hover:scale-[1.02] transition-all duration-300"
              variants={fadeInUp}
              whileHover={{
                y: -5,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
            >
              {/* Background Gradient Circle */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-teal-400 opacity-20 rounded-full filter blur-xl" />
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-green-400 opacity-20 rounded-full filter blur-xl" />

              <div className="relative z-10">
                <img src={p.img} alt={p.name} className="h-56 w-full object-cover rounded-xl mb-6 shadow-md" />
                <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">{p.name}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{p.desc}</p>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f: string, j: number) => (
                    <li key={j} className="flex items-center text-gray-700">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-3" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};