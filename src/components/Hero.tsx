import { ArrowRight, Play } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Modal Animation
const fadeInUp = {
  initial: { opacity: 0, y: 30, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 20,
    },
  },
};

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Modal Component
interface VideoModalProps {
  videoId: string | null;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ videoId, onClose }) => {
  if (!videoId) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close video modal"
      />
      <motion.div
        className="relative bg-black rounded-xl overflow-hidden shadow-2xl aspect-video w-full max-w-5xl z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.4 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-20"
          aria-label="Close"
        >
          &times;
        </button>
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameBorder="0"
          allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Company story video"
        />
      </motion.div>
    </div>
  );
};

// Slide Data
const slides = [
  {
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1600',
    titleParts: [
      { text: 'Building a', animate: false },
      { text: 'Better ', animate: true },
      { text: 'Future for Africa', animate: false }
    ],
    subtitle:
      'Addressing hunger and malnutrition through resilient food systems and accessible nutrition.',
  },
  {
    image: 'https://africaimprovedfoods.com/wp-content/uploads/2023/04/Local-Development-Dropdown-menu.jpg',
    titleParts: [
      { text: 'Empowering', animate: false },
      { text: 'Farmers', animate: true }
    ],
    subtitle:
      'Partnering with 250+ cooperatives to strengthen Africa\'s agricultural backbone.',
  },
  {
    image: 'https://africaimprovedfoods.com/wp-content/uploads/2023/04/Our-Solutions-1.png',
    titleParts: [
      { text: 'Investing in', animate: false },
      { text: 'Growth', animate: false }
    ],
    subtitle:
      'Over $65M invested in nutrition and agriculture to power Rwanda\'s future.',
  },
];

// Hero Component
export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoId, setVideoId] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background Slide */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <div className="absolute inset-0 bg-black/85" />
        </motion.div>
      </AnimatePresence>

      {/* Text Content */}
      <motion.div
        className="relative z-10 px-6 max-w-4xl text-center"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6 text-shadow-lg"
          variants={fadeInUp}
        >
          {slides[currentSlide].titleParts.map((part, index) => (
            <span key={index} className={part.animate ? "gradient-hero-text animate-gradient" : ""}>
              {part.text}{index < slides[currentSlide].titleParts.length - 1 ? ' ' : ''}
            </span>
          ))}
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 text-shadow-md"
          variants={fadeInUp}
        >
          {slides[currentSlide].subtitle}
        </motion.p>

        {/* Call to Action */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6"
          variants={fadeInUp}
        >
          <button
            onClick={() =>
              document.getElementById('impact-section')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all shadow-lg hover:shadow-xl"
          >
            Learn About Our Impact <ArrowRight size={20} />
          </button>
          <button
            onClick={() => setVideoId('tSklYGnjQhI')}
            className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all shadow-lg hover:shadow-xl"
          >
            <Play size={20} /> Watch Our Story
          </button>
        </motion.div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {videoId && <VideoModal videoId={videoId} onClose={() => setVideoId(null)} />}
      </AnimatePresence>
    </section>
  );
};
