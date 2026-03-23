import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { About } from './pages/About';
import { Reviews } from './pages/Reviews';
import { Contact } from './pages/Contact';
import { LandingPage } from './pages/LandingPage';
import { AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <Router>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/promo" element={<LandingPage />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </Router>
  );
}
