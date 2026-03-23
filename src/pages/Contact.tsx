import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Mail, ExternalLink, Car, Coffee } from 'lucide-react';

export const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-cream min-h-screen py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-coffee-dark mb-6">Visit Us</h1>
          <p className="text-lg text-coffee-dark/60 max-w-2xl mx-auto">
            Located in the heart of Miles City. Stop in for a cozy sit-down or swing through our fast drive-thru.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-3xl space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-sage/10 p-3 rounded-xl text-sage">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-1">Address</h3>
                  <p className="text-coffee-dark/70">115 N 7th St,<br />Miles City, MT 59301</p>
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=115+N+7th+St+Miles+City+MT+59301" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-coffee-medium font-bold text-sm flex items-center gap-1 mt-2 hover:underline"
                  >
                    Get Directions <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-sage/10 p-3 rounded-xl text-sage">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-1">Hours</h3>
                  <ul className="text-coffee-dark/70 space-y-1">
                    <li className="flex justify-between w-48"><span>Mon - Fri:</span> <span>6:30 AM - 2 PM</span></li>
                    <li className="flex justify-between w-48"><span>Saturday:</span> <span>8:00 AM - 2 PM</span></li>
                    <li className="flex justify-between w-48"><span>Sunday:</span> <span>Closed</span></li>
                  </ul>
                  <p className="text-xs text-sage font-bold mt-2 uppercase tracking-widest">Open early for your commute!</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-sage/10 p-3 rounded-xl text-sage">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-1">Phone</h3>
                  <a href="tel:4068748459" className="text-coffee-dark/70 hover:text-coffee-medium transition-colors">(406) 874-8459</a>
                  <p className="text-sm text-coffee-dark/40 mt-1">Call ahead for large orders!</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-coffee-dark text-cream p-6 rounded-3xl flex items-center gap-4">
                <Car size={32} className="text-sage" />
                <div>
                  <h4 className="font-bold">Drive-Thru</h4>
                  <p className="text-sm text-cream/70">Fast & convenient service.</p>
                </div>
              </div>
              <div className="bg-coffee-medium text-cream p-6 rounded-3xl flex items-center gap-4">
                <Coffee size={32} className="text-cream" />
                <div>
                  <h4 className="font-bold">Dine-In</h4>
                  <p className="text-sm text-cream/70">Cozy seating + kids area.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2724.475438885664!2d-105.8428846!3d46.4101186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5330368c8c8c8c8c%3A0x8c8c8c8c8c8c8c8c!2s115%20N%207th%20St%2C%20Miles%20City%2C%20MT%2059301!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="The Ugly Mug Location"
            ></iframe>
            <div className="absolute inset-0 bg-coffee-dark/10 pointer-events-none" />
          </div>
        </div>

        <div className="mt-20 text-center bg-sage/10 p-12 rounded-[3rem] border border-sage/20">
          <h2 className="text-3xl font-serif font-bold text-coffee-dark mb-4">Parking & Access</h2>
          <p className="text-coffee-dark/70 max-w-2xl mx-auto mb-8">
            We have plenty of street parking available right in front of the shop. Our drive-thru entrance is clearly marked—just follow the signs for a quick caffeine fix!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:4068748459" className="btn-primary">Call Us</a>
            <Link to="/menu" className="btn-outline">View Menu</Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
