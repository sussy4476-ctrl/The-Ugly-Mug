import React from 'react';
import { motion } from 'motion/react';
import { Coffee, Croissant, Utensils, Zap, IceCream } from 'lucide-react';

const MenuSection = ({ title, icon: Icon, items }: { title: string, icon: any, items: any[] }) => (
  <div className="mb-16">
    <div className="flex items-center gap-3 mb-8 border-b border-coffee-light/30 pb-4">
      <div className="bg-coffee-medium p-2 rounded-lg text-white">
        <Icon size={24} />
      </div>
      <h2 className="text-3xl font-serif font-bold text-coffee-dark">{title}</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
      {items.map((item, i) => (
        <div key={i} className="flex justify-between items-start group">
          <div className="flex-grow">
            <h4 className="font-bold text-lg text-coffee-dark group-hover:text-coffee-medium transition-colors">{item.name}</h4>
            <p className="text-sm text-coffee-dark/60">{item.desc}</p>
          </div>
          <span className="font-bold text-coffee-medium ml-4">{item.price}</span>
        </div>
      ))}
    </div>
  </div>
);

export const Menu = () => {
  const coffeeItems = [
    { name: "Latte", desc: "Espresso with steamed milk and a light layer of foam.", price: "$4.25" },
    { name: "Mocha", desc: "Espresso, chocolate, and steamed milk topped with whipped cream.", price: "$4.75" },
    { name: "Cappuccino", desc: "Equal parts espresso, steamed milk, and foam.", price: "$4.25" },
    { name: "Americano", desc: "Espresso shots topped with hot water.", price: "$3.00" },
    { name: "Cold Brew", desc: "Slow-steeped for 24 hours for a smooth, bold flavor.", price: "$4.50" },
    { name: "Caramel Macchiato", desc: "Vanilla syrup, steamed milk, espresso, and caramel drizzle.", price: "$4.95" }
  ];

  const bakeryItems = [
    { name: "Famous Cinnamon Roll", desc: "Huge, soft, and topped with our signature cream cheese frosting.", price: "$5.50" },
    { name: "Daily Muffin", desc: "Ask about today's fresh-baked flavor.", price: "$3.75" },
    { name: "Cheese Danish", desc: "Flaky pastry with a sweet cream cheese center.", price: "$4.25" },
    { name: "Quiche of the Day", desc: "Savory egg custard in a buttery crust.", price: "$6.50" }
  ];

  const breakfastItems = [
    { name: "Breakfast Burrito", desc: "Eggs, cheese, potatoes, and your choice of bacon or sausage.", price: "$8.50" },
    { name: "Egg Bake", desc: "A hearty, crustless quiche-style breakfast bake.", price: "$7.50" },
    { name: "Oatmeal Bowl", desc: "Steel-cut oats with brown sugar, nuts, and berries.", price: "$5.95" }
  ];

  const lotusItems = [
    { name: "Lotus Energy Drink", desc: "Plant-based energy with your choice of fruit flavors.", price: "$5.25" },
    { name: "Italian Soda", desc: "Sparkling water with flavored syrup and cream.", price: "$3.50" },
    { name: "Iced Tea", desc: "Freshly brewed black or green tea.", price: "$2.75" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-cream min-h-screen py-20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-coffee-dark mb-6">Our Menu</h1>
          <p className="text-lg text-coffee-dark/60 max-w-2xl mx-auto">
            Locally roasted beans, organic ingredients, and fresh baked goods made in-house every single morning.
          </p>
          <div className="mt-8 flex justify-center gap-4 text-sm font-bold uppercase tracking-widest text-sage">
            <span>Locally Roasted</span>
            <span>•</span>
            <span>Fresh Baked Daily</span>
            <span>•</span>
            <span>Organic Beans</span>
          </div>
        </div>

        <MenuSection title="Coffee & Espresso" icon={Coffee} items={coffeeItems} />
        
        <div className="bg-sage/10 p-8 rounded-3xl mb-16 border border-sage/20 flex flex-col md:flex-row items-center gap-6">
          <div className="bg-sage text-white p-4 rounded-2xl">
            <Croissant size={32} />
          </div>
          <div>
            <h3 className="text-2xl font-serif font-bold text-coffee-dark mb-2">The Perfect Pair</h3>
            <p className="text-coffee-dark/70">Nothing goes better with our locally roasted coffee than a warm, fresh-baked cinnamon roll. Grab one before they sell out!</p>
          </div>
        </div>

        <MenuSection title="Fresh Bakery" icon={Croissant} items={bakeryItems} />
        <MenuSection title="Breakfast Foods" icon={Utensils} items={breakfastItems} />
        <MenuSection title="Energy & Cold Drinks" icon={Zap} items={lotusItems} />

        <div className="text-center mt-20 p-12 glass-card rounded-3xl">
          <h3 className="text-2xl font-serif font-bold mb-4">Seasonal Specials</h3>
          <p className="text-coffee-dark/70 mb-6">We're always whipping up something new! Ask your barista about our current seasonal drinks and limited-time bakery items.</p>
          <a href="tel:4068748459" className="btn-primary inline-flex">Call Ahead to Order</a>
        </div>
      </div>
    </motion.div>
  );
};
