
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BRANDS } from '../data';
import { ArrowRight } from 'lucide-react';

const Brands: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-6 lg:px-20 py-20">
      <div className="max-w-3xl mb-20">
        <h1 className="text-5xl lg:text-8xl font-orbitron font-black tracking-tighter mb-8">
          THE <span className="text-cyan-500">TITANS</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Exploring the digital showrooms of the world's most innovative footwear engineers. Each brand represents a unique philosophy of design and performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {BRANDS.map((brand, idx) => (
          <Link key={brand.id} to={`/brands/${brand.id}`}>
            <motion.div 
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[400px] rounded-[40px] overflow-hidden border border-white/5 bg-[#0a0a0a]"
            >
              <img 
                src={brand.banner} 
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-60 transition-all duration-1000"
                alt={brand.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-12 flex flex-col justify-end">
                <div 
                  className="w-16 h-1 w-12 rounded-full mb-6 group-hover:w-24 transition-all duration-500"
                  style={{ backgroundColor: brand.themeColor }}
                />
                <h2 className="text-4xl lg:text-6xl font-orbitron font-black text-white mb-4">{brand.name}</h2>
                <p className="text-gray-300 max-w-sm mb-8 leading-relaxed line-clamp-2">{brand.story}</p>
                <div className="flex items-center gap-4 text-white font-orbitron text-xs tracking-widest font-black uppercase">
                  ENTER SHOWROOM <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
              
              {/* Floating logo/icon badge */}
              <div className="absolute top-8 right-8 w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 group-hover:rotate-12 transition-transform">
                <span className="text-2xl font-black font-orbitron opacity-40">{brand.name[0]}</span>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Experimental Brand Section */}
      <section className="mt-32 p-12 lg:p-24 bg-white/2 border border-white/5 rounded-[40px] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-500/5 blur-[120px] rounded-full -mr-32" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <span className="text-cyan-500 font-orbitron text-[10px] font-black tracking-[0.4em] uppercase">COMING SOON / ENCRYPTED</span>
            <h2 className="text-4xl lg:text-6xl font-orbitron font-black tracking-tighter">LAB-X EXPERIMENTAL</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              We're partnering with independent digital artists and carbon-engineers to bring hyper-limited prototype footwear to NdraaStep.
            </p>
            <button className="px-10 py-5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-orbitron font-black text-xs tracking-widest rounded-full hover:bg-cyan-500 hover:text-obsidian transition-all">
              RECEIVE ALERTS
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
             {[1,2,3,4].map(i => (
               <div key={i} className="aspect-square bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center">
                  <span className="text-white/10 font-orbitron font-black text-4xl">?</span>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brands;
