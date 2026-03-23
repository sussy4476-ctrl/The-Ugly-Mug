import React from 'react';
import { motion } from 'motion/react';
import { Star, Coffee, Clock, MapPin, ChevronRight, Users, Heart, Zap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-coffee-dark text-cream">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000" 
          alt="Cozy Coffee Shop Interior" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-dark via-coffee-dark/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="text-sm font-bold uppercase tracking-widest text-sage">4.8⭐ Local Favorite</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
            Miles City’s Favorite Coffee Spot — <span className="text-sage italic">Fast, Fresh, and Made With Heart.</span>
          </h1>
          
          <p className="text-xl text-cream/80 mb-10 leading-relaxed">
            Whether you're swinging through the drive-thru or settling into our cozy upstairs seating, we've got the perfect brew and fresh-baked treats waiting for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
              <MapPin size={20} /> Get Directions
            </Link>
            <Link to="/menu" className="btn-outline border-cream text-cream hover:bg-cream hover:text-coffee-dark text-lg px-8 py-4">
              <Coffee size={20} /> View Menu
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 text-sm font-semibold text-cream/60 uppercase tracking-wider">
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-sage" /> Locally Owned</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-sage" /> Fresh Baked Daily</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-sage" /> Drive-Thru Convenience</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProblemSolution = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800" 
                alt="Perfect Latte Art" 
                className="rounded-2xl shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-sage/20 rounded-2xl -z-0" />
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-dark leading-tight">
              Tired of burnt coffee and impersonal chain lines?
            </h2>
            <p className="text-lg text-coffee-dark/70 leading-relaxed">
              We get it. Morning commutes are stressful enough without settling for mediocre coffee. At The Ugly Mug, we believe your daily caffeine fix should be the highlight of your day, not a chore.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="bg-sage/10 p-2 rounded-lg text-sage shrink-0">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Fast & Friendly</h4>
                  <p className="text-coffee-dark/60">We know you're busy. Our team is trained to get you your favorite drink quickly without sacrificing quality.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-sage/10 p-2 rounded-lg text-sage shrink-0">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Small-Town Heart</h4>
                  <p className="text-coffee-dark/60">You're more than just an order number here. We're proud to be a part of the Miles City community.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturedOfferings = () => {
  const items = [
    {
      title: "Specialty Coffee",
      desc: "Locally roasted, organic, and fair-trade beans brewed to perfection.",
      img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=400",
      link: "/menu"
    },
    {
      title: "Fresh Bakery",
      desc: "Made-in-house daily. Our cinnamon rolls are legendary for a reason.",
      img: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&q=80&w=400",
      link: "/menu"
    },
    {
      title: "Breakfast Items",
      desc: "Hearty burritos and egg bakes to fuel your Montana adventures.",
      img: "https://images.unsplash.com/photo-1541510910359-d278497b34ee?auto=format&fit=crop&q=80&w=400",
      link: "/menu"
    }
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-dark mb-4">Handcrafted For You</h2>
          <p className="text-lg text-coffee-dark/60 max-w-2xl mx-auto">From the first sip to the last bite, we use only the finest local ingredients.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="glass-card rounded-3xl overflow-hidden group"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold mb-3">{item.title}</h3>
                <p className="text-coffee-dark/70 mb-6">{item.desc}</p>
                <Link to={item.link} className="text-coffee-medium font-bold flex items-center gap-1 hover:gap-2 transition-all">
                  See More <ChevronRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Sarah M.", text: "The best cinnamon rolls in Montana, hands down. And the drive-thru is so fast even when the line looks long!", stars: 5 },
    { name: "Jake R.", text: "My go-to spot every morning. The staff knows my order by heart and the coffee is always consistent.", stars: 5 },
    { name: "Linda K.", text: "Love the upstairs seating area. It's the perfect place to get some work done while the kids play in the little corner.", stars: 5 },
    { name: "Tom D.", text: "Locally roasted coffee makes a huge difference. You can tell they care about quality here.", stars: 5 }
  ];

  return (
    <section className="py-24 bg-coffee-dark text-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">What Our Locals Say</h2>
          <div className="flex justify-center gap-1 text-yellow-500 mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
          </div>
          <p className="text-sage font-bold uppercase tracking-widest">4.8 Stars on Google</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 italic text-lg leading-relaxed">
              <div className="flex text-yellow-500 mb-4">
                {[...Array(review.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              "{review.text}"
              <p className="mt-4 font-bold not-italic text-sage">— {review.name}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/reviews" className="btn-outline border-cream text-cream hover:bg-cream hover:text-coffee-dark">
            Read More Reviews
          </Link>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { title: "Stop By", desc: "Visit our cozy shop on N 7th St or swing through the drive-thru.", icon: MapPin },
    { title: "Order Your Favorite", desc: "Choose from our wide menu of coffee, lotus, and fresh treats.", icon: Coffee },
    { title: "Enjoy Your Moment", desc: "Take a breath, savor the flavor, and start your day right.", icon: Heart }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-coffee-dark">Easy As 1-2-3</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="text-center space-y-4">
              <div className="w-20 h-20 bg-sage/10 rounded-full flex items-center justify-center mx-auto text-sage">
                <step.icon size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold">{step.title}</h3>
              <p className="text-coffee-dark/60">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "Do you have dairy-free options?", a: "Yes! We offer oat, almond, and soy milk for all our coffee drinks." },
    { q: "Do you offer takeout?", a: "Absolutely. You can order inside for takeout or use our convenient drive-thru." },
    { q: "Is there seating?", a: "Yes, we have plenty of seating, including a cozy upstairs area perfect for working or meeting friends." },
    { q: "Are kids welcome?", a: "We love families! We even have a dedicated kids' area upstairs to keep the little ones entertained." }
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif font-bold text-coffee-dark text-center mb-12">Common Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
              <h4 className="font-bold text-lg mb-2 text-coffee-dark">{faq.q}</h4>
              <p className="text-coffee-dark/70">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-24 bg-sage text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src="https://www.transparenttextures.com/patterns/coffee-beans.png" alt="" className="w-full h-full" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
          Ready for the best coffee in Miles City?
        </h2>
        <p className="text-xl mb-12 opacity-90">
          Open early at 6:30 AM. Stop in before work or swing through the drive-thru!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact" className="btn-primary bg-coffee-dark hover:bg-black text-lg px-10 py-5">
            Stop By Today
          </Link>
          <a href="tel:4068748459" className="btn-outline border-white text-white hover:bg-white hover:text-sage text-lg px-10 py-5">
            Call Ahead
          </a>
        </div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <ProblemSolution />
      <FeaturedOfferings />
      <Testimonials />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
    </motion.div>
  );
};
