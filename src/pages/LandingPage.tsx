import React from 'react';
import { motion } from 'motion/react';
import { Star, Coffee, CheckCircle, ArrowRight, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LandingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-cream min-h-screen"
    >
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-coffee-dark text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1600" 
            alt="Coffee" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block bg-sage text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
            Limited Time Offer
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
            Skip the Chains — Discover Miles City’s Favorite Coffee Spot
          </h1>
          <p className="text-xl md:text-2xl text-cream/80 mb-12 font-light">
            Experience the difference of locally roasted beans and fresh-baked treats made with heart.
          </p>
          
          <div className="bg-white text-coffee-dark p-8 rounded-[2rem] shadow-2xl mb-12 max-w-lg mx-auto">
            <h3 className="text-2xl font-serif font-bold mb-2">Special Welcome Offer</h3>
            <p className="text-4xl font-bold text-sage mb-4">10% OFF</p>
            <p className="text-coffee-dark/60 mb-6">Your first visit! Just mention this page at the counter or drive-thru.</p>
            <Link to="/contact" className="btn-primary w-full py-4 text-lg">
              Claim Your Discount <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-sage/10 p-4 rounded-2xl text-sage">
                <Clock size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold">Fast Service</h3>
              <p className="text-coffee-dark/60">We know you're on the go. Our team gets your order right, fast.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-sage/10 p-4 rounded-2xl text-sage">
                <Coffee size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold">Locally Roasted</h3>
              <p className="text-coffee-dark/60">Organic, fair-trade beans roasted right here in Montana.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-sage/10 p-4 rounded-2xl text-sage">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold">Fresh Baked</h3>
              <p className="text-coffee-dark/60">Cinnamon rolls, muffins, and more—baked fresh every morning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center text-yellow-500 mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} size={32} fill="currentColor" />)}
          </div>
          <h2 className="text-4xl font-serif font-bold mb-12">"The best coffee in Miles City, hands down. The drive-thru is a lifesaver!"</h2>
          <p className="text-sage font-bold uppercase tracking-widest">— Sarah M., Local Resident</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-sage text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Stop by today and taste the difference.</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-primary bg-coffee-dark hover:bg-black text-lg px-10 py-5">
              Get Directions
            </Link>
            <a href="tel:4068748459" className="btn-outline border-white text-white hover:bg-white hover:text-sage text-lg px-10 py-5">
              Call Now
            </a>
          </div>
          <p className="mt-8 text-white/70">115 N 7th St, Miles City, MT • Open at 6:30 AM</p>
        </div>
      </section>
    </motion.div>
  );
};
