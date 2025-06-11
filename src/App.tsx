import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { NewsPage } from './pages/NewsPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  const { scrollYProgress } = useScroll();
  const circle1Y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const circle2Y = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);
  const circle3Y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <Router>
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100">
        {/* Animated Background Circles */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-green-200 opacity-30 blur-3xl top-[10%] left-[15%]"
          style={{ y: circle1Y }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full bg-green-300 opacity-20 blur-3xl bottom-[15%] right-[10%]"
          style={{ y: circle2Y }}
        />
        <motion.div
          className="absolute w-[250px] h-[250px] rounded-full bg-green-100 opacity-25 blur-2xl top-[50%] right-[30%]"
          style={{ y: circle3Y }}
        />

        {/* Static Decorative Shapes */}
        <div className="absolute w-[200px] h-[200px] bg-green-100 opacity-20 blur-2xl rounded-3xl top-[5%] left-[5%]" />
        <div className="absolute w-[150px] h-[150px] bg-green-200 opacity-10 blur-2xl rounded-full bottom-[10%] right-[5%]" />

        <Navigation />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
