
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { BRANDS, PRODUCTS } from '../data';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

interface BrandDetailProps {
  onAddToCart: (p: Product) => void;
}

const BrandDetail: React.FC<BrandDetailProps> = ({ onAddToCart }) => {
  const { brandId } = useParams<{ brandId: string }>();
  const navigate = useNavigate();
  const brand = BRANDS.find(b => b.id === brandId);
  
  if (!brand) return <div className="text-center py-40">BRAND NOT FOUND</div>;

  const brandProducts = PRODUCTS.filter(p => p.brand.toLowerCase() === brand.name.toLowerCase());

  return (
    <div className="space-y-0">
      {/* Brand Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={brand.banner} className="w-full h-full object-cover" alt={brand.name} />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-20 pb-16 space-y-4">
          <button 
            onClick={() => navigate(-1)} 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all text-xs font-orbitron font-bold tracking-widest mb-4 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> BACK TO TITANS
          </button>
          <div className="flex items-center gap-6">
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: 80 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="w-1 rounded-full shadow-[0_0_15px_rgba(0,242,255,0.5)]"
              style={{ backgroundColor: brand.themeColor }}
            />
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl lg:text-9xl font-black font-orbitron tracking-tighter text-white uppercase"
            >
              {brand.name}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Brand Info & Products */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-20 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <aside className="lg:col-span-4 space-y-12">
            <div className="space-y-6">
              <h3 className="text-xs font-orbitron font-black text-cyan-500 tracking-[0.4em]">MISSION STATEMENT</h3>
              <p className="text-xl text-white/80 leading-relaxed font-medium">
                {brand.story}
              </p>
              <div className="flex flex-col gap-4 pt-4">
                 <div className="flex justify-between text-xs font-orbitron border-b border-white/5 pb-2">
                    <span className="text-gray-500 uppercase">Established</span>
                    <span className="text-white">REDACTED</span>
                 </div>
                 <div className="flex justify-between text-xs font-orbitron border-b border-white/5 pb-2">
                    <span className="text-gray-500 uppercase">HQ Region</span>
                    <span className="text-white">GLOBAL DISTRICT</span>
                 </div>
                 <div className="flex justify-between text-xs font-orbitron border-b border-white/5 pb-2">
                    <span className="text-gray-500 uppercase">Tier Status</span>
                    <span className="text-cyan-400">PRIME ENGINEER</span>
                 </div>
              </div>
              <button className="w-full py-4 border border-white/10 rounded-xl font-orbitron font-black text-[10px] tracking-widest hover:bg-white hover:text-obsidian transition-all flex items-center justify-center gap-2 uppercase active:scale-95">
                Official Lab Website <ExternalLink size={14} />
              </button>
            </div>
            
            <div className="p-8 rounded-3xl border border-white/5 bg-white/2 space-y-4">
              <h4 className="font-orbitron font-black text-xs tracking-widest">BRAND STATS</h4>
              <div className="space-y-6">
                 <div>
                    <div className="flex justify-between text-[10px] font-orbitron mb-2">
                       <span className="text-gray-500">INNOVATION SCORE</span>
                       <span className="text-cyan-400">98%</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                       <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "98%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-cyan-400" 
                       />
                    </div>
                 </div>
                 <div>
                    <div className="flex justify-between text-[10px] font-orbitron mb-2">
                       <span className="text-gray-500">ECO IMPACT</span>
                       <span className="text-green-400">84%</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                       <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "84%" }}
                        transition={{ duration: 1.5, delay: 0.7 }}
                        className="h-full bg-green-400" 
                       />
                    </div>
                 </div>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-8">
            <h2 className="text-2xl font-orbitron font-black tracking-tight mb-12 flex items-center gap-4">
              ACTIVE RELEASES <span className="h-px flex-1 bg-white/5" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {brandProducts.map(product => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
              ))}
              {brandProducts.length === 0 && (
                 <div className="col-span-full py-20 text-center text-gray-600 font-orbitron">
                    NO ACTIVE STOCK IN THIS DISTRICT.
                 </div>
              )}
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default BrandDetail;
