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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
        {/* Section Heading */}
        <header className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold text-emerald-700 leading-tight mb-6">
            About Africa Improved Foods
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            An African food champion focused on addressing hunger and malnutrition through sustainable food systems,
            sourcing from local farmers, and delivering nutritious, affordable products.
          </p>
        </header>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-24">
          {features.map(({ icon: Icon, title, description }, index) => (
            <article
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 cursor-pointer"
              tabIndex={0}
              aria-labelledby={`feature-${index}`}
            >
              <div className="bg-emerald-100 p-4 rounded-xl mb-6 inline-flex items-center justify-center">
                <Icon className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 id={`feature-${index}`} className="text-xl font-semibold text-emerald-800 mb-3">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </article>
          ))}
        </div>

        {/* Vision & Image Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-50 to-white shadow-2xl">
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
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="African farmland"
              className="object-cover w-full h-full"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/70 via-emerald-700/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};
