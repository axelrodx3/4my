'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const PortfolioGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Sample portfolio data - replace with your actual portfolio items
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Elegant Design",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=800&fit=crop&crop=center",
      description: "A sophisticated web design showcasing modern aesthetics"
    },
    {
      id: 2,
      title: "Creative Vision",
      category: "Photography",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center",
      description: "Capturing moments with artistic precision"
    },
    {
      id: 3,
      title: "Brand Identity",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=600&fit=crop&crop=center",
      description: "Creating memorable brand experiences"
    },
    {
      id: 4,
      title: "Digital Art",
      category: "Digital Art",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=1000&fit=crop&crop=center",
      description: "Exploring the intersection of technology and creativity"
    },
    {
      id: 5,
      title: "Minimalist Approach",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=700&fit=crop&crop=center",
      description: "Less is more in this clean, focused design"
    },
    {
      id: 6,
      title: "Abstract Expression",
      category: "Digital Art",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=700&h=500&fit=crop&crop=center",
      description: "Bold colors and dynamic compositions"
    }
  ];

  const categories = ['All', 'Web Design', 'Photography', 'Branding', 'Digital Art'];

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 bg-white">
      <div className="container-max section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-4">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-pink to-primary-pink-soft mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A curated collection of creative work that represents my passion for design and innovation.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary-pink text-white'
                  : 'text-gray-600 hover:text-primary-pink hover:bg-primary-pink/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg bg-gray-100"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <h3 className="font-serif text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-300 mb-4">{item.description}</p>
                    <button className="btn-outline border-white text-white hover:bg-white hover:text-black">
                      View Project
                    </button>
                  </div>
                </div>

                {/* Pink Accent on Hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-pink transition-colors duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-black mb-2 group-hover:text-primary-pink transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 uppercase tracking-wide">
                  {item.category}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-outline">
            Load More Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
