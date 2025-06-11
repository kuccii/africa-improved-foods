import { Heart, Briefcase, Sprout, TrendingUp } from 'lucide-react';

export const Impact = () => {
  const impactStats = [
    {
      icon: Heart,
      title: 'Nutrition',
      value: '1.6M+',
      description: 'Daily nutritious meals produced for people across Africa',
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: Briefcase,
      title: 'Employment',
      value: '500+',
      description: 'Local jobs created with coaching, training and mentorship programs',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Sprout,
      title: 'Local Sourcing',
      value: '250+',
      description: 'Cooperatives providing farming assistance and capacity building',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: TrendingUp,
      title: 'Investment',
      value: '$65M',
      description: 'Invested in Rwanda with best-in-class technology',
      color: 'bg-orange-100 text-orange-600',
    },
  ];

  const initiatives = [
    {
      title: 'Nutrition Impact',
      description: 'AIF has developed a range of nutritious products, made in Africa from cereals grown in Africa, fortified with essential vitamins and macro nutrients to tackle stunting on the continent.',
      image: 'https://images.pexels.com/photos/6069090/pexels-photo-6069090.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Employment Development',
      description: 'AIF places importance on hiring local talents and helps promote their development through coaching, trainings and mentorship programs.',
      image: 'https://images.pexels.com/photos/5256816/pexels-photo-5256816.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Farmer Support',
      description: 'Provides farming assistance through seed development, agronomy, and capacity building to farmers. Additionally provides post harvest handling help.',
      image: 'https://images.pexels.com/photos/1482101/pexels-photo-1482101.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="impact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-6">Our Impact</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Measuring success through tangible improvements in nutrition, employment, 
            and agricultural development across East Africa.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="glass-card p-8 text-center"
              >
                <div className={`w-16 h-16 rounded-full ${stat.color} flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <h3 className="text-lg font-semibold gradient-text mb-2">{stat.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
              </div>
            );
          })}
        </div>

        {/* Initiatives */}
        <div className="space-y-16">
          {initiatives.map((initiative, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              <div className="flex-1 glass-card p-8">
                <h3 className="text-3xl font-bold gradient-text mb-6">{initiative.title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{initiative.description}</p>
              </div>
              
              <div className="flex-1">
                <div 
                  className="h-80 bg-cover bg-center rounded-xl shadow-lg"
                  style={{ backgroundImage: `url("${initiative.image}")` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};