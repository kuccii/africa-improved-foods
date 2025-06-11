import { useState } from 'react';
import { Users, Building } from 'lucide-react';

export const Products = () => {
  const [activeCategory, setActiveCategory] = useState('institutional');

  const institutionalProducts = [
    {
      name: 'Super Cereal Plus',
      description:
        'A highly specialized cereal made from pre-cooked grains blended with skimmed milk powder, sugar, soy oil and micronutrients. Used to treat and prevent moderate acute malnutrition among young children aged 6+ months.',
      image:
        'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Specialized cereal', 'Pre-cooked grains', 'Micronutrients', '6+ months'],
    },
    {
      name: 'Shisha Kibondo Infants',
      description:
        'A highly nutritious complementary porridge for infants and young children older than 6 months. A blend of maize, soya, milk powder, sugar, vitamins & minerals.',
      image:
        'https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Complementary food', 'Maize & soya blend', 'Essential vitamins', 'Mineral fortified'],
    },
    {
      name: 'Shisha Kibondo Mothers',
      description:
        'A highly nutritious porridge for pregnant or breastfeeding women. Essential for good health of the mother and her unborn child. A blend of maize, soya, vitamins and minerals.',
      image:
        'https://images.pexels.com/photos/5938323/pexels-photo-5938323.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Maternal nutrition', 'Pregnancy support', 'Natural ingredients', 'Vitamin enriched'],
    },
  ];

  const consumerProducts = [
    {
      name: 'Nootri',
      description:
        'Specifically created to provide essential nutrients such as proteins, vitamins & minerals to support healthy body and mind development for strong growth of children.',
      image:
        'https://images.pexels.com/photos/6393316/pexels-photo-6393316.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Essential nutrients', 'Child development', 'Natural grains', 'Aflatoxin free'],
    },
    {
      name: 'Nootri Baby',
      description:
        'Instant infant cereals specifically created to provide essential nutrients to support healthy body and mind development for strong growth of children.',
      image:
        'https://images.pexels.com/photos/5029857/pexels-photo-5029857.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Instant cereals', 'Infant nutrition', 'Easy preparation', 'Growth support'],
    },
    {
      name: "Nootri All'Family",
      description:
        'Delicious and instant breakfast cereals to enjoy with your family every morning. A convenient way to contribute to the healthy growth of your children.',
      image:
        'https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Family breakfast', 'Instant preparation', 'Nutritious start', 'Delicious taste'],
    },
  ];

  const products = activeCategory === 'institutional' ? institutionalProducts : consumerProducts;

  return (
    <section
      id="products"
      className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      {/* Abstract Gradient Shapes */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-tr from-emerald-500/30 via-emerald-300/20 to-transparent rounded-full blur-3xl animate-blob"
        style={{ animationDuration: '7s', animationTimingFunction: 'ease-in-out' }}
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-to-bl from-emerald-600/25 via-emerald-400/15 to-transparent rounded-full blur-3xl animate-blob animation-delay-2000"
        style={{ animationDuration: '10s', animationTimingFunction: 'ease-in-out' }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-tr from-emerald-700/20 via-emerald-500/10 to-transparent rounded-full blur-3xl animate-blob animation-delay-4000"
        style={{ animationDuration: '8s', animationTimingFunction: 'ease-in-out' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            Our Products
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Nutritious, affordable, and accessible products made in Africa from cereals grown in Africa,
            fortified with essential vitamins and macronutrients to tackle stunting on the continent.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="p-1 flex space-x-2 bg-gray-800 rounded-lg shadow-inner">
            <button
              onClick={() => setActiveCategory('institutional')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeCategory === 'institutional'
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <Building className="h-5 w-5" />
              <span className="text-sm sm:text-base">Institutional</span>
            </button>
            <button
              onClick={() => setActiveCategory('consumer')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeCategory === 'consumer'
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <Users className="h-5 w-5" />
              <span className="text-sm sm:text-base">Consumer</span>
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-gray-800/20 backdrop-blur-sm rounded-xl flex flex-col transition-transform duration-300 hover:scale-[1.05] shadow-md hover:shadow-lg"
            >
              <div className="relative h-52 overflow-hidden rounded-t-3xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-3xl" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-emerald-400 mb-2 tracking-wide">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                  {product.description}
                </p>
                <ul className="text-sm text-emerald-300 space-y-1 list-disc list-inside">
                  {product.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blob animations */}
      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(20px, -30px) scale(1.05);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.95);
          }
        }
        .animate-blob {
          animation-name: blob;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};
