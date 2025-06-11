import { ArrowRight, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image + Overlay with slow zoom effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-[1.15] sm:scale-[1.05] animate-zoomSlow transition-transform duration-[10000ms] ease-in-out"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1600")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40 mix-blend-multiply" />
      </div>

      {/* Decorative Glow Circles - subtle & soft */}
      <div className="absolute -top-24 left-1/4 w-[28rem] h-[28rem] bg-green-400 opacity-15 rounded-full filter blur-4xl z-0" />
      <div className="absolute bottom-8 right-1/3 w-[18rem] h-[18rem] bg-yellow-300 opacity-10 rounded-full filter blur-3xl z-0" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 text-center">
        <div className="max-w-5xl mx-auto">
          {/* MASSIVE Heading */}
          <h1
            className="
              text-[4.25rem] sm:text-[5.5rem] md:text-[6.5rem] lg:text-[7.5rem]
              font-extrabold leading-[1.05] tracking-tight
              text-white
              drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]
              select-none
              mb-8
              relative
            "
          >
            Building a{' '}
            <span
              className="
                bg-gradient-to-r from-green-400 via-lime-300 to-green-500
                bg-clip-text text-transparent
                animate-textShimmer
                select-text
              "
              style={{ 
                backgroundSize: '200% 100%',
              }}
            >
              Better Future
            </span>{' '}
            for Africa
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-16">
            An African food champion addressing hunger and malnutrition by building resilient food systems and offering consumers nutritious, affordable, and accessible products.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <button className="
              group 
              bg-green-600 hover:bg-green-700 
              text-white 
              px-10 py-5 
              rounded-3xl 
              font-semibold 
              text-lg 
              shadow-xl 
              transition-all duration-300 
              flex items-center space-x-3
              transform hover:scale-110
              select-none
            ">
              <span>Learn About Our Impact</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </button>

            <button className="
              group 
              border-2 border-white 
              text-white 
              hover:bg-white hover:text-gray-900 
              px-10 py-5 
              rounded-3xl 
              font-semibold 
              text-lg 
              shadow-xl 
              transition-all duration-300 
              flex items-center space-x-3
              select-none
            ">
              <Play className="h-6 w-6" />
              <span>Watch Our Story</span>
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 text-white">
            {[
              { number: '1.6M+', label: 'Daily Nutritious Meals' },
              { number: '250+', label: 'Farmer Cooperatives' },
              { number: '$65M', label: 'Investment in Rwanda' },
            ].map(({ number, label }, i) => (
              <div
                key={i}
                className="text-center opacity-0 animate-fadeInUp animation-delay-[calc(0.3s*var(--i))]"
                style={{ '--i': i } as React.CSSProperties}
              >
                <div className="text-5xl md:text-6xl font-extrabold text-green-300 mb-3 drop-shadow-md">
                  {number}
                </div>
                <div className="text-lg sm:text-xl text-gray-300 tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Extra Styles */}
      <style>{`
        @keyframes textShimmer {
          0% {
            background-position: 0% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .animate-textShimmer {
          animation: textShimmer 3s linear infinite;
          background-size: 200% 100%;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation-name: fadeInUp;
          animation-duration: 0.7s;
          animation-fill-mode: forwards;
          animation-timing-function: ease-out;
        }

        [style*="--i"] {
          animation-delay: calc(var(--i) * 0.3s);
        }

        /* Slow zoom background animation */
        @keyframes zoomSlow {
          0%, 100% {
            transform: scale(1.05);
          }
          50% {
            transform: scale(1.15);
          }
        }
        .animate-zoomSlow {
          animation: zoomSlow 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
