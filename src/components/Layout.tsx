import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Coffee, Menu as MenuIcon, X, Phone, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Visit', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-cream/90 backdrop-blur-md border-b border-coffee-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-coffee-dark p-2 rounded-lg group-hover:rotate-12 transition-transform">
              <Coffee className="text-cream w-6 h-6" />
            </div>
            <span className="font-serif text-2xl font-bold text-coffee-dark tracking-tight">The Ugly Mug</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold uppercase tracking-wider hover:text-coffee-medium transition-colors ${
                  location.pathname === link.path ? 'text-coffee-medium' : 'text-coffee-dark/70'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:4068748459" className="btn-primary py-2 px-4 text-sm">
              <Phone size={16} /> (406) 874-8459
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-coffee-dark p-2">
              {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream border-b border-coffee-light/20 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-lg font-serif font-semibold text-coffee-dark hover:bg-coffee-light/10 rounded-xl"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a href="tel:4068748459" className="btn-primary w-full">
                  <Phone size={20} /> Call Now
                </a>
                <Link to="/contact" onClick={() => setIsOpen(false)} className="btn-outline w-full">
                  <MapPin size={20} /> Get Directions
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-coffee-dark text-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Coffee className="text-sage w-6 h-6" />
              <span className="font-serif text-2xl font-bold">The Ugly Mug</span>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed">
              Miles City's favorite local coffee spot. Locally roasted beans, fresh baked goods, and a warm Montana welcome.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-sage transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-sage transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-cream/70 text-sm">
              <li><Link to="/menu" className="hover:text-cream transition-colors">Menu</Link></li>
              <li><Link to="/about" className="hover:text-cream transition-colors">Our Story</Link></li>
              <li><Link to="/reviews" className="hover:text-cream transition-colors">Reviews</Link></li>
              <li><Link to="/contact" className="hover:text-cream transition-colors">Visit Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Hours</h4>
            <ul className="space-y-2 text-cream/70 text-sm">
              <li className="flex justify-between"><span>Mon - Fri</span> <span>6:30 AM - 2:00 PM</span></li>
              <li className="flex justify-between"><span>Sat</span> <span>8:00 AM - 2:00 PM</span></li>
              <li className="flex justify-between"><span>Sun</span> <span>Closed</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-cream/70 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-sage shrink-0" />
                <span>115 N 7th St,<br />Miles City, MT 59301</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-sage shrink-0" />
                <a href="tel:4068748459" className="hover:text-cream">(406) 874-8459</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cream/10 pt-8 text-center text-cream/40 text-xs">
          <p>&copy; {new Date().getFullYear()} The Ugly Mug. All rights reserved. Locally Owned & Operated in Miles City, MT.</p>
        </div>
      </div>
    </footer>
  );
};

const StickyMobileCTA = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 flex gap-3 bg-cream/80 backdrop-blur-lg border-t border-coffee-light/20">
      <a href="tel:4068748459" className="btn-primary flex-1 py-3 text-sm">
        <Phone size={18} /> Call Now
      </a>
      <Link to="/contact" className="btn-secondary flex-1 py-3 text-sm">
        <MapPin size={18} /> Directions
      </Link>
    </div>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};
