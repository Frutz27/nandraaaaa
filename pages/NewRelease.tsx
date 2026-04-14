
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Bell } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data';
import { Product } from '../types';

interface NewReleaseProps {
  onAddToCart: (p: Product) => void;
}

const NewRelease: React.FC<NewReleaseProps> = ({ onAddToCart }) => {
  return (
    <div className="max-w-[1600px] mx-auto px-6 lg:px-20 py-20">
      <div className="relative mb-32">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full" />
        <h1 className="text-5xl lg:text-9xl font-orbitron font-black tracking-tighter relative z-10">
          NEW <br />
          <span className="text-cyan-500">RELEASES</span>
        </h1>
        <div className="mt-8 flex items-center gap-4 text-xs font-orbitron tracking-widest text-gray-400">
           <Calendar size={16} className="text-cyan-500" /> SYNCED TO GLOBAL DROP SERVER
        </div>
      </div>

      {/* Featured Drop */}
      <section className="mb-32">
        <div className="bg-[#0a0a0a] rounded-[40px] border border-white/5 overflow-hidden flex flex-col lg:flex-row">
           <div className="lg:w-1/2 relative h-[500px]">
              <img src={PRODUCTS[0].image} className="w-full h-full object-cover" alt="Featured Drop" />
              <div className="absolute top-8 left-8 px-4 py-2 bg-obsidian/80 backdrop-blur-xl border border-white/10 rounded-full flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                 <span className="text-[10px] font-orbitron font-bold tracking-widest text-white">LIVE_DROP</span>
              </div>
           </div>
           <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center space-y-6">
              <span className="text-cyan-500 font-orbitron text-[10px] font-black tracking-[0.4em] uppercase">FEATURED RELEASE</span>
              <h2 className="text-4xl lg:text-6xl font-orbitron font-black tracking-tight">{PRODUCTS[0].name}</h2>
              <p className="text-gray-400 text-lg">
                The latest innovation in propulsion technology. Featuring a new dual-density foam core and recycled carbon filaments for 15% better energy return.
              </p>
              <div className="flex gap-4 pt-6">
                 <button onClick={() => onAddToCart(PRODUCTS[0])} className="px-10 py-5 bg-white text-black font-orbitron font-black text-xs tracking-widest rounded-xl hover:bg-cyan-400 transition-all flex items-center gap-3">
                   SECURE PAIR
                 </button>
                 <button className="w-16 h-16 flex items-center justify-center border border-white/10 rounded-xl text-white hover:bg-white/5 transition-colors">
                    <Bell size={24} />
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* Recent Drops Grid */}
      <section>
        <div className="flex items-center justify-between mb-16">
           <h3 className="text-2xl font-orbitron font-black tracking-tight">RECENTLY <span className="text-cyan-500">DEVOPS</span></h3>
           <div className="flex gap-2">
              <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-orbitron font-bold tracking-widest">SORT: NEWEST</button>
           </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {PRODUCTS.map(p => (
             <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
           ))}
        </div>
      </section>

      {/* Drop Timeline */}
      <section className="mt-40 border-t border-white/5 pt-20">
         <div className="max-w-2xl mb-16">
            <h2 className="text-4xl font-orbitron font-black mb-4">INCOMING <span className="text-purple-500">TRANSMISSIONS</span></h2>
            <p className="text-gray-500">Stay ahead of the trend curve. These drops are currently in final testing.</p>
         </div>
         
         <div className="space-y-4">
            {[
              { date: 'OCT 24', name: 'YEEZY DIGITAL-V3', brand: 'Adidas', status: 'In Transit' },
              { date: 'OCT 28', name: 'AIR FORCE ZERO', brand: 'Nike', status: 'Factory Sealed' },
              { date: 'NOV 02', name: 'PUMA VELOCITY SHOCK', brand: 'Puma', status: 'Prototype Phase' }
            ].map((drop, idx) => (
              <div key={idx} className="group flex items-center p-8 bg-white/2 border border-white/5 rounded-2xl hover:bg-white/5 transition-all cursor-pointer">
                 <div className="w-32 font-orbitron font-black text-cyan-500">{drop.date}</div>
                 <div className="flex-1">
                    <h4 className="font-orbitron font-black tracking-tight">{drop.name}</h4>
                    <p className="text-[10px] text-gray-500 font-orbitron uppercase tracking-widest">{drop.brand}</p>
                 </div>
                 <div className="hidden md:block px-4 py-1 border border-white/10 rounded text-[8px] font-orbitron uppercase tracking-widest text-gray-400 group-hover:border-cyan-500 group-hover:text-cyan-400 transition-colors">
                    {drop.status}
                 </div>
                 <button className="ml-8 w-12 h-12 flex items-center justify-center bg-white/5 rounded-full hover:bg-white text-obsidian transition-all">
                    <Bell size={18} />
                 </button>
              </div>
            ))}
         </div>
      </section>
    </div>
  );
};

export default NewRelease;
