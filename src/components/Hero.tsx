import { ArrowRight, Play } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoModalProps {
  videoId: string | null;
  onClose: () => void;
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
      staggerChildren: 0.2,
      delayChildren: 0.3,
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

const VideoModal: React.FC<VideoModalProps> = ({ videoId, onClose }) => {
  if (!videoId) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden max-w-4xl w-full mx-auto z-10 aspect-video">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-3xl font-bold z-20 hover:text-gray-300 transition-colors"
        >
          &times;
        </button>
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video player"
        ></iframe>
      </div>
    </div>
  );
};

const slides = [
  {
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Building a Better Future for Africa',
    subtitle:
      `Addressing hunger and malnutrition through resilient food systems and accessible nutrition.`,
  },
  {
    image: 'https://africaimprovedfoods.com/wp-content/uploads/2023/04/Local-Development-Dropdown-menu.jpg',
    title: 'Empowering Farmers',
    subtitle:
      `Partnering with 250+ cooperatives to strengthen Africa's agricultural backbone.`,
  },
  {
    image: 'https://africaimprovedfoods.com/wp-content/uploads/2023/04/Our-Solutions-1.png',
    title: 'Investing in Growth',
    subtitle:
      `Over $65M invested in nutrition and agriculture to power Rwanda's future.`,
  },
];

export const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const openVideoModal = (videoId: string) => {
    setSelectedVideoId(videoId);
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
    setSelectedVideoId(null);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Slide Image */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-center"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            backgroundImage: `url(${slides[current].image})`,
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </motion.div>
      </AnimatePresence>

      {/* Slide Content */}
      <motion.div 
        className="relative z-10 max-w-5xl text-center px-6 text-white"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
          variants={fadeInUp}
        >
          {slides[current].title}
        </motion.h1>
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12"
          variants={fadeInUp}
        >
          {slides[current].subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-6"
          variants={fadeInUp}
        >
          <button
            onClick={() => {
              const impactSection = document.getElementById('impact-section');
              if (impactSection) {
                impactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all"
          >
            Learn About Our Impact <ArrowRight size={20} />
          </button>
          <button
            className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all"
            onClick={() => openVideoModal('tSklYGnjQhI')}
          >
            <Play size={20} />
            Watch Our Story
          </button>
        </motion.div>
      </motion.div>
      <VideoModal videoId={selectedVideoId} onClose={closeVideoModal} />
    </section>
  );
};
