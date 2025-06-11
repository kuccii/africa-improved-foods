import { Calendar, ArrowRight, FileText, Image } from 'lucide-react';

export const News = () => {
  const newsItems = [
    {
      title: 'AIF Expands Production Capacity to Meet Growing Demand',
      excerpt: 'New manufacturing lines added to increase daily production of nutritious foods across our facility in Rwanda.',
      date: '2024-01-15',
      category: 'Company News',
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Partnership with Local Farmers Reaches New Milestone',
      excerpt: 'Over 300 cooperatives now partnering with AIF, providing sustainable income for thousands of smallholder farmers.',
      date: '2024-01-10',
      category: 'Impact',
      image: 'https://images.pexels.com/photos/2518861/pexels-photo-2518861.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'New Nootri Product Line Launches Across East Africa',
      excerpt: 'Enhanced formulation provides even better nutrition for children and families throughout the region.',
      date: '2024-01-05',
      category: 'Products',
      image: 'https://images.pexels.com/photos/6393316/pexels-photo-6393316.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const mediaResources = [
    {
      title: 'AIF Brand Guidelines',
      type: 'PDF',
      size: '2.4 MB',
      icon: FileText,
    },
    {
      title: 'Product Images',
      type: 'ZIP',
      size: '15.2 MB',
      icon: Image,
    },
    {
      title: 'Executive Photos',
      type: 'ZIP',
      size: '8.7 MB',
      icon: Image,
    },
    {
      title: 'Facility Images',
      type: 'ZIP',
      size: '12.1 MB',
      icon: Image,
    },
  ];

  return (
    <section id="news" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-6">Newsroom</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Stay updated with the latest news, announcements, and media resources from Africa Improved Foods.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* News Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-8">Latest News</h3>
            
            <div className="space-y-8">
              {newsItems.map((item, index) => (
                <article 
                  key={index}
                  className="glass-card overflow-hidden group"
                >
                  <div className="md:flex">
                    <div 
                      className="md:w-48 h-48 md:h-auto bg-cover bg-center"
                      style={{ backgroundImage: `url("${item.image}")` }}
                    ></div>
                    
                    <div className="p-6 flex-1">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                          {item.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(item.date).toLocaleDateString()}
                        </div>
                      </div>
                      
                      <h4 className="text-xl font-semibold gradient-text mb-3 group-hover:text-green-600 transition-colors duration-300">
                        {item.title}
                      </h4>
                      
                      <p className="text-gray-700 mb-4 leading-relaxed">{item.excerpt}</p>
                      
                      <button className="text-green-600 hover:text-green-700 font-medium flex items-center space-x-1 group">
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Media Resources Sidebar */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-8">Media Resources</h3>
            
            <div className="glass-card p-6">
              <p className="text-gray-700 mb-6">
                Download our media resources including brand guidelines, product images, and executive photos.
              </p>
              
              <div className="space-y-4">
                {mediaResources.map((resource, index) => {
                  const Icon = resource.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="bg-green-100 p-2 rounded-lg">
                          <Icon className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <div className="font-medium gradient-text">{resource.title}</div>
                          <div className="text-sm text-gray-600">{resource.type} • {resource.size}</div>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400" />
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Contact for Media */}
            <div className="mt-8 glass-card p-6">
              <h4 className="text-lg font-semibold gradient-text mb-3">Media Inquiries</h4>
              <p className="text-gray-700 mb-4">
                For press inquiries and additional media resources, please contact our media relations team.
              </p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300">
                Contact Media Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};