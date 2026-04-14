
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap, Globe, Cpu } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, BRANDS } from '../data';
import { Product } from '../types';
import { Link } from 'react-router-dom';

interface HomeProps {
  onAddToCart: (p: Product) => void;
}

const Home: React.FC<HomeProps> = ({ onAddToCart }) => {
  return (
    <div className="space-y-32">
      {/* Hero Cinematic Section */}
      <section className="relative h-screen min-h-[800px] flex items-center px-6 lg:px-20 overflow-hidden bg-[#020202]">
        {/* Background Video/Image Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-transparent z-10" />
          <motion.img 
            initial={{ scale: 1.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
            src="https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=1920&h=1080&fit=crop" 
            className="w-full h-full object-cover"
            alt="Hero Background"
          />
          {/* Subtle Scanline Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[11] pointer-events-none bg-[length:100%_4px,3px_100%]" />
        </div>

        <div className="relative z-20 max-w-4xl space-y-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="inline-block font-orbitron text-cyan-400 text-xs tracking-[0.6em] font-black uppercase mb-6 bg-cyan-500/10 px-5 py-2.5 border border-cyan-500/20 rounded-full backdrop-blur-md">
              SYSTEM 3.0 // OBSIDIAN ACTIVATED
            </span>
            <h1 className="text-7xl lg:text-9xl font-black font-orbitron tracking-tighter leading-[0.85] text-white uppercase">
              DEEP <br />
              <span className="text-glow-blue bg-clip-text text-transparent bg-cyber-gradient">STEALTH</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl text-gray-500 max-w-xl font-medium leading-relaxed font-orbitron tracking-tight"
          >
            Sourcing the world's most elusive footwear. Engineered for the shadows, designed for the future.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap gap-8"
          >
            <Link to="/shop" className="group px-12 py-6 bg-cyan-500 text-obsidian font-orbitron font-black text-sm tracking-[0.2em] rounded-full hover:bg-cyan-400 transition-all hover:scale-105 active:scale-95 flex items-center gap-4 shadow-[0_0_50px_rgba(34,211,238,0.3)]">
              INITIATE SHOP <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <button className="px-12 py-6 bg-white/5 border border-white/10 text-white font-orbitron font-black text-sm tracking-[0.2em] rounded-full hover:bg-white/10 transition-all flex items-center gap-4 backdrop-blur-xl group">
              VIEW SHOWROOM <Play size={22} className="group-hover:text-cyan-400 group-hover:scale-110 transition-all" />
            </button>
          </motion.div>
        </div>

        {/* Floating Side Info with Mascot */}
        <div className="absolute right-10 bottom-10 hidden lg:flex flex-col items-end gap-6 z-30">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="w-32 aspect-square rounded-full border border-cyan-500/30 bg-black/40 backdrop-blur-md overflow-hidden p-2 relative group cursor-pointer"
          >
            <div className="absolute inset-0 bg-cyan-500/5 animate-pulse" />
            <img 
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmZ0eHR6eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/3o7TKSjP9Y81S0D2V2/giphy.gif" 
              alt="Floating Mascot" 
              className="w-full h-full object-cover mix-blend-lighten"
            />
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap bg-cyan-500 text-obsidian text-[7px] font-orbitron font-black px-2 py-0.5 rounded uppercase tracking-widest">
              COMPANION_ACTIVE
            </div>
          </motion.div>
          
          <div className="text-right space-y-2 opacity-40 hover:opacity-100 transition-opacity cursor-default font-orbitron">
            <p className="text-[9px] tracking-[0.3em] uppercase">Status: <span className="text-green-500 font-black">Undetected</span></p>
            <p className="text-[9px] tracking-[0.3em] uppercase">Env: Deep_Showroom_Mode</p>
            <p className="text-[9px] tracking-[0.3em] uppercase">Time: {new Date().toLocaleTimeString()}</p>
          </div>
        </div>
      </section>

      {/* Asymmetrical Featured Section */}
      <section className="px-6 lg:px-20 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-32 h-fit">
            <h2 className="text-5xl lg:text-7xl font-orbitron font-black tracking-tighter uppercase leading-[0.9]">
              STEALTH <br />
              <span className="text-cyan-500">SERIES</span>
            </h2>
            <p className="text-gray-500 max-w-md leading-relaxed text-lg italic">
              "Footwear that absorbs more than it reveals."
            </p>
            <div className="grid grid-cols-1 gap-6">
              <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl hover:border-cyan-500/30 transition-all group">
                <Zap className="text-cyan-500 mb-4 group-hover:scale-125 transition-transform" />
                <h4 className="font-orbitron font-bold text-lg mb-2 uppercase tracking-widest text-white">Neural Response</h4>
                <p className="text-sm text-gray-500">Sole technology that maps to your nervous system for zero-latency movement.</p>
              </div>
              <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl hover:border-purple-500/30 transition-all group">
                <Globe className="text-purple-500 mb-4 group-hover:scale-125 transition-transform" />
                <h4 className="font-orbitron font-bold text-lg mb-2 uppercase tracking-widest text-white">Carbon Shadow</h4>
                <p className="text-sm text-gray-500">100% recycled aerospace carbon filaments woven for maximum durability.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">
            <div className="space-y-8 lg:mt-32">
              {PRODUCTS.slice(0, 2).map(product => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
              ))}
            </div>
            <div className="space-y-8">
              {PRODUCTS.slice(2, 4).map(product => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Showcase - Horizontal Scroll feel */}
      <section className="bg-black py-40 border-y border-white/5 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-20 mb-20">
          <h2 className="text-4xl lg:text-6xl font-orbitron font-black tracking-tighter uppercase text-center">
            ELITE <span className="text-cyan-500">TITANS</span>
          </h2>
        </div>
        
        <div className="flex gap-10 overflow-x-auto pb-16 px-6 lg:px-20 scrollbar-hide snap-x">
          {BRANDS.map((brand, idx) => (
            <motion.div 
              key={brand.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
              className="min-w-[320px] lg:min-w-[500px] group relative aspect-[4/5] bg-obsidian rounded-[3rem] overflow-hidden border border-white/5 snap-center"
            >
              <img src={brand.banner} className="w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0" alt={brand.name} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-12 flex flex-col justify-end">
                <h3 className="text-3xl font-orbitron font-black text-white mb-3 uppercase tracking-tighter">{brand.name}</h3>
                <p className="text-sm text-gray-500 mb-8 max-w-xs leading-relaxed font-orbitron">{brand.story}</p>
                <Link to={`/brands/${brand.id}`} className="w-fit px-8 py-4 bg-white/5 hover:bg-cyan-500 hover:text-obsidian border border-white/10 rounded-full text-[10px] font-orbitron font-black tracking-[0.3em] transition-all">
                  SHOWROOM ACCESS
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech CTA Section */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-20 pb-32">
        <div className="relative rounded-[4rem] bg-cyber-gradient p-1 overflow-hidden group">
          <div className="bg-[#020202] rounded-[3.9rem] px-10 py-32 lg:py-48 flex flex-col items-center text-center space-y-10 relative overflow-hidden">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="absolute -top-32 -left-32 w-64 h-64 border-[1px] border-cyan-500/10 rounded-full"
            />
            <Cpu className="w-20 h-20 text-cyan-400 mb-6 animate-pulse" />
            <h2 className="text-5xl lg:text-8xl font-orbitron font-black tracking-tighter max-w-5xl uppercase leading-[0.9]">
              JOIN THE <span className="text-glow-blue text-cyan-400">GHOST OPS</span>
            </h2>
            <p className="text-gray-500 text-xl max-w-3xl leading-relaxed font-orbitron tracking-tight">
              Unlock prototype hardware drops and biomechanic analytics only available to the elite.
            </p>
            <button className="px-16 py-8 bg-white text-black font-orbitron font-black text-sm tracking-[0.4em] rounded-full hover:bg-cyan-400 transition-all hover:scale-105 active:scale-95 shadow-[0_0_60px_rgba(255,255,255,0.15)] uppercase">
              RECRUITMENT_ON
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
