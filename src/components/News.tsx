import { CalendarDays, ArrowRight, FileText, Image } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

interface NewsProps {
  limit?: number;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 0.5
    }
  }
};

const staggerContainer = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

export const News = ({ limit }: NewsProps) => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [20, 0]);

  const newsItems = [
    {
      title: 'AIF Hosts Ethiopian Minister\'s Visit',
      excerpt: 'Read more about the visit and its significance.',
      date: 'September 05, 2024',
      category: 'Company News',
      image: 'https://africaimprovedfoods.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-17-at-10.15.44-PM-7-2048x1360.jpeg',
      link: '/news'
    },
    {
      title: 'How CFO Jurgen Paulis found his African rhythm',
      excerpt: 'Learn more about Jurgen Paulis\'s journey and insights.',
      date: 'September 07, 2023',
      category: 'Featured Articles',
      image: 'https://africaimprovedfoods.com/wp-content/uploads/2023/09/Jurgen-Paulis-2048x1366.png',
      link: '/news'
    },
    {
      title: 'Madagascan President H.E. Andry Rajoelina visits AIF',
      excerpt: 'Details on the presidential visit to Africa Improved Foods.',
      date: 'August 14, 2023',
      category: 'Company News',
      image: 'https://africaimprovedfoods.com/wp-content/uploads/2023/08/Madagascar-Presidents-visit-to-AIF-1536x1024.jpg',
      link: '/news'
    },
    {
      title: 'Zambian President H.E. Hakainde Hichilema visits AIF',
      excerpt: 'Learn about the Zambian President\'s visit and its implications.',
      date: 'July 18, 2023',
      category: 'Company News',
      image: 'https://africaimprovedfoods.com/wp-content/uploads/2023/07/Zambian_President_Visit_02-1536x1024-1.jpg',
      link: '/news'
    },
    {
      title: 'Angolan embassy delegation visits AIF',
      excerpt: 'Information on the Angolan delegation\'s visit and collaboration.',
      date: 'July 18, 2023',
      category: 'Company News',
      image: 'https://africaimprovedfoods.com/wp-content/uploads/2023/07/Angolan_Embassy_Delegation_Visits_AIF_02-1536x1024-1.jpg',
      link: '/news'
    },
    {
      title: 'Nootri launches new portfolio',
      excerpt: 'Discover the new products launched by Nootri.',
      date: 'July 18, 2023',
      category: 'Products',
      image: 'https://africaimprovedfoods.com/wp-content/uploads/2023/09/Nootri-Relaunch-1536x1024.png',
      link: '/news'
    },
    {
      title: 'AIF streets naming ceremony',
      excerpt: 'Read about the ceremony and its significance.',
      date: 'January 09, 2023',
      category: 'Company News',
      image: 'https://africaimprovedfoods.com/wp-content/uploads/2023/01/TKX07641-min-scaled-2560x1280.jpeg',
      link: '/news'
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

  const displayedNews = limit ? newsItems.slice(0, limit) : newsItems;

  return (
    <section id="news-section" className="py-24 bg-gray-50">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ opacity, y }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.1 }}
        variants={staggerContainer}
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          variants={fadeInUp}
        >
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Latest News
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Stay updated with our latest developments and achievements.
          </p>
        </motion.div>

        {/* News Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={staggerContainer}
        >
          {displayedNews.map((news, index) => (
            <motion.article
              key={index}
              className="relative bg-white rounded-3xl shadow-xl overflow-hidden group"
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {news.category}
                  </span>
                  <h3 className="text-xl font-bold text-white leading-tight">{news.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <CalendarDays className="h-4 w-4 mr-2 text-teal-600" />
                  <span>{news.date}</span>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">{news.excerpt}</p>
                <Link
                  to={news.link}
                  className="inline-flex items-center text-teal-600 hover:text-teal-800 font-semibold transition-colors duration-300"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        {limit && (
          <motion.div 
            className="text-center mt-16"
            variants={fadeInUp}
          >
            <Link
              to="/news"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-teal-600 hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl"
            >
              View All News
              <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};