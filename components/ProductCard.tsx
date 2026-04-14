
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, ArrowUpRight } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <motion.div 
      whileHover={{ 
        y: -16,
        scale: 1.04,
        boxShadow: "0 35px 70px -15px rgba(0, 0, 0, 0.6), 0 0 35px -5px rgba(0, 242, 255, 0.4), 0 0 15px -2px rgba(0, 242, 255, 0.2)",
        borderColor: "rgba(0, 242, 255, 0.3)"
      }}
      initial={{ scale: 1, y: 0, borderColor: "rgba(255, 255, 255, 0.05)" }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 30,
        mass: 0.8
      }}
      className="group relative bg-[#0a0a0a] border rounded-2xl overflow-hidden transition-all duration-500"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-[60px] rounded-full -mr-16 -mt-16 group-hover:bg-cyan-500/20 transition-colors duration-700" />
      
      {/* Image Wrapper */}
      <div className="relative aspect-square overflow-hidden p-6">
        {product.limited && (
          <div className="absolute top-4 left-4 z-10 px-2 py-1 bg-cyan-500 text-obsidian text-[8px] font-black font-orbitron uppercase tracking-widest rounded shadow-[0_0_15px_rgba(34,211,238,0.5)]">
            LIMITED EDITION
          </div>
        )}
        <motion.img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain pointer-events-none"
          whileHover={{ scale: 1.12, rotate: -3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
        
        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
          <motion.button 
            whileHover={{ scale: 1.15, rotate: 5, backgroundColor: "#00f2ff", color: "#050505" }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-2xl transition-colors duration-200"
            onClick={() => onAddToCart(product)}
          >
            <ShoppingCart size={20} />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.15, rotate: -5, borderColor: "rgba(255, 255, 255, 0.5)" }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-black/60 text-white rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 shadow-2xl transition-all"
          >
            <Heart size={20} />
          </motion.button>
        </div>
      </div>

      {/* Info */}
      <div className="p-6 pt-0 space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[10px] font-orbitron font-bold text-gray-500 uppercase tracking-widest">{product.brand}</p>
            <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors truncate pr-2">{product.name}</h3>
          </div>
          <p className="font-orbitron font-bold text-cyan-500 text-lg">${product.price}</p>
        </div>
        <p className="text-xs text-gray-400 line-clamp-1">{product.description}</p>
        
        <div className="pt-4 flex items-center justify-between">
          <button className="text-[10px] font-orbitron font-black text-gray-500 hover:text-white flex items-center gap-1 transition-colors uppercase tracking-widest group/btn">
            View Details <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </button>
          <div className="flex gap-1">
            <motion.div 
              animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }} 
              transition={{ repeat: Infinity, duration: 2 }} 
              className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(0,242,255,1)]" 
            />
            <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
          </div>
        </div>
      </div>
      
      {/* Corner Accent */}
      <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-40 border-r-2 border-b-2 border-cyan-500 rounded-br-2xl transition-opacity duration-300" />
    </motion.div>
  );
};

export default ProductCard;
