import React from 'react';
import { PortfolioItem } from '../types';

const items: PortfolioItem[] = [
  { id: '1', title: 'StartUp Indo Hoodie', category: 'Jacket', imageUrl: 'https://picsum.photos/id/823/600/600' },
  { id: '2', title: 'Bank Central Uniform', category: 'Uniform', imageUrl: 'https://picsum.photos/id/668/600/600' },
  { id: '3', title: 'Tech Event T-Shirt', category: 'T-Shirt', imageUrl: 'https://picsum.photos/id/804/600/600' },
  { id: '4', title: 'Mining Corp Vest', category: 'Vest', imageUrl: 'https://picsum.photos/id/433/600/600' },
  { id: '5', title: 'Coffee Shop Apron', category: 'Merchandise', imageUrl: 'https://picsum.photos/id/292/600/600' },
  { id: '6', title: 'University Almamater', category: 'Uniform', imageUrl: 'https://picsum.photos/id/534/600/600' },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">Hasil Karya Kami</h2>
          <p className="mt-4 text-lg text-secondary">Kepercayaan klien adalah bukti kualitas kami</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-blue-300 text-sm font-medium">{item.category}</span>
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;