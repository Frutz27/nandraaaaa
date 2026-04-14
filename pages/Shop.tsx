
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ChevronDown, LayoutGrid, List } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data';
import { Product } from '../types';

interface ShopProps {
  onAddToCart: (p: Product) => void;
  filterLimited?: boolean;
}

const Shop: React.FC<ShopProps> = ({ onAddToCart, filterLimited }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeBrand, setActiveBrand] = useState<string>('All');

  const categories = ['All', 'Men', 'Women', 'Unisex'];
  const brands = ['All', 'Nike', 'Adidas', 'Puma', 'New Balance'];

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesLimited = filterLimited ? p.limited : true;
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesBrand = activeBrand === 'All' || p.brand === activeBrand;
    return matchesLimited && matchesCategory && matchesBrand;
  });

  return (
    <div className="max-w-[1600px] mx-auto px-6 lg:px-20 py-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <h1 className="text-5xl lg:text-7xl font-orbitron font-black tracking-tighter mb-4">
            {filterLimited ? 'LIMITED' : 'SHOP'} <span className="text-cyan-500">ARCHIVE</span>
          </h1>
          <p className="text-gray-500 font-orbitron text-xs tracking-widest">SHOWING {filteredProducts.length} ITEMS AVAILABLE</p>
        </div>
        
        {/* View Toggles */}
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg text-cyan-400">
            <LayoutGrid size={20} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-transparent border border-white/10 rounded-lg text-gray-500 hover:text-white transition-colors">
            <List size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Filters Sidebar */}
        <aside className="lg:col-span-3 space-y-10">
          <div className="space-y-6">
            <h3 className="font-orbitron font-black text-sm tracking-widest flex items-center gap-2">
              <Filter size={16} className="text-cyan-500" /> CATEGORIES
            </h3>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-[10px] font-orbitron font-bold transition-all border ${
                    activeCategory === cat 
                    ? 'bg-cyan-500 text-obsidian border-cyan-500' 
                    : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/20'
                  }`}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-orbitron font-black text-sm tracking-widest">BRANDS</h3>
            <div className="space-y-2">
              {brands.map(brand => (
                <button
                  key={brand}
                  onClick={() => setActiveBrand(brand)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-xs font-orbitron font-bold transition-all flex items-center justify-between border ${
                    activeBrand === brand
                    ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                    : 'bg-white/2 text-gray-500 border-white/5 hover:bg-white/5'
                  }`}
                >
                  {brand.toUpperCase()}
                  {activeBrand === brand && <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                </button>
              ))}
            </div>
          </div>

          {/* Futuristic Cat Companion */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden group relative shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <div className="absolute top-2 right-2 flex gap-1 z-10">
               <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
               <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            </div>
            <h4 className="font-orbitron font-black text-[9px] text-cyan-400 mb-3 tracking-[0.4em] uppercase">SYSTEM_MASCOT v2.0</h4>
            <div className="relative aspect-square rounded-xl overflow-hidden border border-white/10 bg-[#050505]">
              <img 
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmZ0eHR6eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/3o7TKSjP9Y81S0D2V2/giphy.gif" 
                alt="Cyber Cat"
                className="w-full h-full object-cover mix-blend-screen opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              {/* Scanline effect */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,242,255,0.05)_50%)] bg-[length:100%_4px] pointer-events-none" />
            </div>
            <div className="mt-4 flex justify-between items-center">
              <p className="text-[8px] text-gray-400 font-orbitron tracking-[0.2em] uppercase">Status: <span className="text-cyan-400">SYNCED</span></p>
              <div className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                <span className="text-[7px] font-orbitron font-black text-cyan-400 uppercase tracking-widest">NEURAL_ID: 8829</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="lg:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map(product => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard product={product} onAddToCart={onAddToCart} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-20 text-center space-y-4">
              <h2 className="text-3xl font-orbitron font-black text-white/20 uppercase tracking-tighter">NO ITEMS DETECTED</h2>
              <button 
                onClick={() => {setActiveBrand('All'); setActiveCategory('All');}}
                className="text-cyan-500 font-orbitron text-xs tracking-widest hover:text-cyan-400 transition-colors"
              >
                RESET FILTERS
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Shop;
