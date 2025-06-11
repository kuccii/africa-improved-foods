import { Heart, Briefcase, Sprout, TrendingUp } from 'lucide-react';

export const Impact = () => {
  const impactStats = [
    {
      icon: Heart,
      title: 'Nutrition',
      value: '1.6M+',
      description: 'Nutritious meals delivered daily across Africa.',
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: Briefcase,
      title: 'Employment',
      value: '500+',
      description: 'Jobs created with mentorship, coaching, and training.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Sprout,
      title: 'Local Sourcing',
      value: '250+',
      description: 'Cooperatives empowered through farming assistance.',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: TrendingUp,
      title: 'Investment',
      value: '$65M',
      description: 'Invested in Rwanda using cutting-edge technology.',
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
    <section id="impact" className="py-24 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Our Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transforming lives through nutrition, local sourcing, and sustainable employment across East Africa.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-24">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white shadow-xl rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-full ${stat.color} flex items-center justify-center mx-auto mb-5`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">{stat.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{stat.description}</p>
              </div>
            );
          })}
        </div>

        {/* Initiatives */}
        <div className="space-y-24">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className={`flex flex-col-reverse ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12`}
            >
              <div className="flex-1 bg-gray-50 rounded-2xl p-10 shadow-md">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{initiative.title}</h3>
                <p className="text-base text-gray-700 leading-relaxed">{initiative.description}</p>
              </div>

              <div className="flex-1 w-full">
                <div
                  className="h-80 w-full bg-cover bg-center rounded-2xl shadow-lg"
                  style={{ backgroundImage: `url(${initiative.image})` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
