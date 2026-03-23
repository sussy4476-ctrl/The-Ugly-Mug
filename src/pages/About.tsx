import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, Coffee, MapPin } from 'lucide-react';

export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-cream min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative py-32 bg-coffee-dark text-cream overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1600" 
            alt="Coffee Beans" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl text-cream/80 max-w-3xl mx-auto font-light italic">
            "More than just a coffee shop—we're a place where Miles City comes together."
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif font-bold text-coffee-dark">Locally Owned, Community Rooted</h2>
              <p className="text-lg text-coffee-dark/70 leading-relaxed">
                The Ugly Mug started with a simple dream: to bring high-quality, locally roasted coffee and fresh, made-from-scratch baked goods to our beloved Miles City community. 
              </p>
              <p className="text-lg text-coffee-dark/70 leading-relaxed">
                We believe that a coffee shop should be the heartbeat of a town. It's where you meet your neighbors, where you fuel up for a long day of work, and where you find a moment of peace in a busy world.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="space-y-2">
                  <div className="text-sage font-bold text-3xl font-serif">100%</div>
                  <p className="text-sm uppercase tracking-widest text-coffee-dark/60 font-bold">Locally Owned</p>
                </div>
                <div className="space-y-2">
                  <div className="text-sage font-bold text-3xl font-serif">Daily</div>
                  <p className="text-sm uppercase tracking-widest text-coffee-dark/60 font-bold">Fresh Baking</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800" 
                alt="Our Interior" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-6 -left-6 bg-sage text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <Heart size={40} />
                <p className="mt-4 font-bold">Made with Heart</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-coffee-dark text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">What We Stand For</h2>
            <p className="text-cream/60">The values that guide every cup we brew.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto text-sage">
                <Coffee size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold">Quality First</h3>
              <p className="text-cream/70">We source only the best organic, fair-trade beans and roast them locally for peak freshness.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto text-sage">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold">Welcoming Space</h3>
              <p className="text-cream/70">From our kids' area to our quiet upstairs seating, we've designed a space for everyone.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto text-sage">
                <MapPin size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold">Miles City Pride</h3>
              <p className="text-cream/70">We are proud to be a local business supporting our local economy and community events.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Atmosphere Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-coffee-dark mb-12">Come Say Hi!</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&q=80&w=400" alt="Coffee" className="rounded-2xl h-64 w-full object-cover" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80&w=400" alt="Bakery" className="rounded-2xl h-64 w-full object-cover" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80&w=400" alt="Interior" className="rounded-2xl h-64 w-full object-cover" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=400" alt="Latte" className="rounded-2xl h-64 w-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>
    </motion.div>
  );
};
