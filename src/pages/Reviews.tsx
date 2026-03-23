import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, CheckCircle } from 'lucide-react';

export const Reviews = () => {
  const reviews = [
    { name: "Sarah Miller", date: "2 weeks ago", text: "The Ugly Mug is my absolute favorite spot in Miles City. The drive-thru is incredibly fast, and the staff is always so friendly. Their cinnamon rolls are a must-try!", stars: 5 },
    { name: "David Thompson", date: "1 month ago", text: "Great coffee and even better atmosphere. I love coming here to get some work done. The upstairs seating is quiet and very comfortable.", stars: 5 },
    { name: "Emily Watson", date: "3 days ago", text: "Best latte I've had in a long time. You can tell they use high-quality beans. The breakfast burritos are also fantastic!", stars: 5 },
    { name: "Michael Reed", date: "2 months ago", text: "Family friendly! My kids love the little play area upstairs. It makes it so much easier for me to enjoy my coffee while they are entertained.", stars: 5 },
    { name: "Jessica Lane", date: "1 week ago", text: "Fast service, great prices, and the best local vibe. Supporting local businesses like this is a no-brainer.", stars: 5 },
    { name: "Robert G.", date: "3 weeks ago", text: "I pass through Miles City often for work and I always make sure to stop here. Consistent quality every single time.", stars: 5 },
    { name: "Karen S.", date: "1 month ago", text: "The seasonal drinks are always so creative and delicious. I look forward to seeing what they come up with next!", stars: 5 },
    { name: "Chris B.", date: "2 months ago", text: "A true local gem. Friendly faces and the best caffeine fix in town.", stars: 5 },
    { name: "Amanda P.", date: "4 days ago", text: "The quiche is to die for! Perfectly flaky crust and so much flavor.", stars: 5 },
    { name: "Jason K.", date: "1 month ago", text: "Strong coffee, fast drive-thru, and friendly people. What more could you ask for?", stars: 5 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-cream min-h-screen py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-coffee-dark mb-6">What Our Community Says</h1>
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
            </div>
            <span className="text-2xl font-bold text-coffee-dark">4.8 / 5.0</span>
          </div>
          <p className="text-coffee-dark/60 max-w-2xl mx-auto">
            Based on over 500+ reviews from our amazing Miles City locals and travelers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-coffee-light/10 relative"
            >
              <Quote className="absolute top-6 right-6 text-sage/20" size={40} />
              <div className="flex text-yellow-500 mb-4">
                {[...Array(review.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-coffee-dark/80 mb-6 leading-relaxed italic">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-coffee-medium/10 rounded-full flex items-center justify-center text-coffee-medium font-bold">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-coffee-dark flex items-center gap-1">
                    {review.name} <CheckCircle size={14} className="text-sage" />
                  </h4>
                  <p className="text-xs text-coffee-dark/40">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-coffee-dark/60 mb-6">Have you visited us recently? We'd love to hear about your experience!</p>
          <a 
            href="https://www.google.com/maps" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            Leave a Review on Google
          </a>
        </div>
      </div>
    </motion.div>
  );
};
