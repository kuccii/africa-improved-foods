import { ArrowRight, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image + Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 sm:scale-100 transition-transform duration-[4000ms] ease-out"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1600")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/20 mix-blend-multiply"></div>
      </div>

      {/* Decorative Glow Circles */}
      <div className="absolute -top-20 left-1/4 w-96 h-96 bg-green-400 opacity-20 rounded-full filter blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-yellow-200 opacity-10 rounded-full filter blur-2xl z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Building a <span className="bg-gradient-to-r from-green-400 to-lime-300 bg-clip-text text-transparent">Better Future</span> for Africa
          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            An African food champion addressing hunger and malnutrition by building resilient food systems 
            and offering consumers nutritious, affordable, and accessible products.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
            <button className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 flex items-center space-x-2 transform hover:scale-105">
              <span>Learn About Our Impact</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button className="group border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 flex items-center space-x-2">
              <Play className="h-5 w-5" />
              <span>Watch Our Story</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-300 mb-2">1.6M+</div>
              <div className="text-sm sm:text-base text-gray-300">Daily Nutritious Meals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-300 mb-2">250+</div>
              <div className="text-sm sm:text-base text-gray-300">Farmer Cooperatives</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-300 mb-2">$65M</div>
              <div className="text-sm sm:text-base text-gray-300">Investment in Rwanda</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
