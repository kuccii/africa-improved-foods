import { Target, Users, Globe, Lightbulb } from 'lucide-react';

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
        'Implementing a Value Chain approach to develop local maize and soy farming to much higher standards.',
    },
    {
      icon: Globe,
      title: 'Regional Impact',
      description:
        'Partnering with over 250+ cooperatives to source raw inputs from smallholder farmers across East Africa.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description:
        'Best-in-class technology and manufacturing processes, operational since December 2016.',
    },
  ];

  return (
    <section id="about" className="relative bg-white py-24 overflow-hidden">
      {/* Decorative SVG Shapes */}
      <svg
        className="absolute top-10 left-0 w-40 h-40 text-green-200 opacity-30"
        fill="none"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="100" fill="currentColor" />
      </svg>
      <svg
        className="absolute bottom-20 right-0 w-56 h-56 text-green-300 opacity-25"
        fill="none"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <rect width="200" height="200" fill="currentColor" rx="48" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
        {/* Header */}
        <header className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-5xl font-extrabold text-emerald-700 tracking-tight mb-6 leading-tight">
            About Africa Improved Foods
          </h2>
          <p className="text-lg text-gray-700 max-w-xl mx-auto leading-relaxed">
            An African food champion with an impact mission at its core, addressing hunger and
            malnutrition by building resilient food systems and offering consumers nutritious,
            affordable, and accessible products with inputs sourced from local farmers.
          </p>
        </header>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          {features.map(({ icon: Icon, title, description }, idx) => (
            <article
              key={idx}
              className="bg-white/90 backdrop-blur-md rounded-3xl shadow-lg p-10 flex flex-col items-start hover:scale-[1.04] transition-transform duration-300 cursor-pointer"
              role="region"
              aria-labelledby={`feature-title-${idx}`}
              tabIndex={0}
            >
              <div className="bg-emerald-100 p-4 rounded-xl mb-6 flex items-center justify-center shadow-inner">
                <Icon className="w-10 h-10 text-emerald-600" />
              </div>
              <h3
                id={`feature-title-${idx}`}
                className="text-2xl font-semibold text-emerald-700 mb-3"
              >
                {title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </article>
          ))}
        </div>

        {/* Vision Section */}
        <section className="rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-r from-emerald-50 to-white">
          {/* Text Content */}
          <div className="p-16 flex flex-col justify-center">
            <h3 className="text-4xl font-bold text-emerald-800 mb-8 leading-tight">
              Our Vision
            </h3>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed max-w-xl">
              An impact driven African food champion addressing hunger and malnutrition by building
              resilient and sustainable food systems, offering consumers nutritious, affordable
              and accessible products.
            </p>
            <h4 className="text-3xl font-semibold text-emerald-700 mb-5">
              Our Approach
            </h4>
            <p className="text-gray-700 leading-relaxed max-w-xl">
              Our ambition is to become an African food champion social enterprise addressing hunger
              and malnutrition by building resilient food systems and offering consumers nutritious,
              affordable, preferred and accessible products. Our business strategy is centered around
              investing in our key capabilities for long-term sustainability.
            </p>
          </div>

          {/* Image with angled overlay */}
          <div className="relative min-h-[384px]">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="African farmland or food production"
              className="object-cover w-full h-full"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/70 via-emerald-700/40 to-transparent" />
          </div>
        </section>
      </div>
    </section>
  );
};
