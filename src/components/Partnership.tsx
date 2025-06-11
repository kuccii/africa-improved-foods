import { Handshake, Building2, Globe, Award } from 'lucide-react';

export const Partnership = () => {
  const partners = [
    {
      name: 'DSM',
      description: 'Global science-based company focused on nutrition, health and sustainable living',
      logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'IFC',
      description: 'International Finance Corporation - World Bank Group member',
      logo: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'FMO',
      description: 'Dutch development bank supporting sustainable private sector growth',
      logo: 'https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'Government of Rwanda',
      description: 'Strategic partnership supporting national development goals',
      logo: 'https://images.pexels.com/photos/3184342/pexels-photo-3184342.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
  ];

  const benefits = [
    {
      icon: Handshake,
      title: 'Public-Private Partnership',
      description: 'Leveraging the strengths of both public and private sectors for maximum impact.',
    },
    {
      icon: Building2,
      title: 'Best-in-Class Technology',
      description: 'State-of-the-art manufacturing facilities operational since December 2016.',
    },
    {
      icon: Globe,
      title: 'Regional Expertise',
      description: 'Deep understanding of East African markets and agricultural systems.',
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Track record of delivering sustainable solutions and measurable impact.',
    },
  ];

  return (
    <section
      id="partnership"
      className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      {/* Background shapes */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-emerald-500 via-green-400 to-emerald-600 opacity-20 blur-3xl pointer-events-none"
        style={{ filter: 'blur(120px)' }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-20 right-10 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-green-600 via-emerald-400 to-green-500 opacity-15 blur-2xl pointer-events-none"
        style={{ filter: 'blur(100px)' }}
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-10 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-green-300 via-emerald-200 to-green-300 opacity-10 blur-xl pointer-events-none"
        style={{ filter: 'blur(80px)' }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 px-4 sm:px-0">
          <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 bg-clip-text text-transparent">
            Our Partnership
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Africa Improved Foods (AIF) is a public-private partnership involving DSM, IFC, FMO, 
            and Government of Rwanda, combining expertise and resources for maximum impact.
          </p>
        </div>

        {/* Partnership Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20 px-4 sm:px-0">
          {benefits.map(({ icon: Icon, title, description }, i) => (
            <article
              key={i}
              className="bg-gray-800/20 backdrop-blur-sm rounded-xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.05] shadow-md hover:shadow-lg"
              aria-label={title}
            >
              <div className="bg-emerald-100 group-hover:bg-emerald-200 w-16 h-16 rounded-full flex items-center justify-center mb-5 transition-colors duration-300">
                <Icon className="h-9 w-9 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3 bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 bg-clip-text text-transparent">
                {title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
            </article>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="bg-gray-800/20 backdrop-blur-sm rounded-3xl p-14 shadow-md max-w-full">
          <h3 className="text-3xl font-extrabold text-center mb-14 bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 bg-clip-text text-transparent">
            Our Strategic Partners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {partners.map(({ name, description, logo }, i) => (
              <article
                key={i}
                className="bg-gray-900/10 backdrop-blur-sm rounded-xl p-8 flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-emerald-400/30"
                aria-label={`Partner: ${name}`}
              >
                <div
                  className="w-24 h-24 mb-6 rounded-full bg-cover bg-center shadow-inner"
                  style={{ backgroundImage: `url(${logo})` }}
                  role="img"
                  aria-label={`${name} logo`}
                />
                <h4 className="text-xl font-semibold mb-3 bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 bg-clip-text text-transparent">
                  {name}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Investment Highlight */}
        <div className="mt-24 bg-gray-800/20 backdrop-blur-sm rounded-3xl p-14 text-center shadow-md max-w-4xl mx-auto px-6">
          <h3 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 bg-clip-text text-transparent">
            $65 Million Investment
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Significant investment in Rwanda with best-in-class technology, demonstrating our 
            commitment to building sustainable food systems across Africa.
          </p>
        </div>
      </div>
    </section>
  );
};
