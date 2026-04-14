
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, CreditCard } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemove, onUpdateQuantity }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-[#080808] border-l border-white/10 z-[101] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/2">
              <h2 className="text-xl font-orbitron font-black tracking-tight flex items-center gap-3">
                SECURE CART <span className="text-[10px] px-2 py-0.5 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded">ENCRYPTED</span>
              </h2>
              <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors text-gray-400">
                <X size={24} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center space-y-4 opacity-30">
                  <div className="w-16 h-16 border-2 border-dashed border-white rounded-full flex items-center justify-center">
                    <Trash2 size={24} />
                  </div>
                  <p className="font-orbitron text-xs tracking-[0.2em]">CART EMPTY. AWAITING DATA...</p>
                </div>
              ) : (
                <AnimatePresence initial={false}>
                  {items.map(item => (
                    <motion.div 
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex gap-4 group"
                    >
                      <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-contain p-2" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="font-bold text-sm text-white">{item.name}</h3>
                            <button onClick={() => onRemove(item.id)} className="text-gray-500 hover:text-red-500 transition-colors">
                              <Trash2 size={16} />
                            </button>
                          </div>
                          <p className="text-[10px] text-gray-500 uppercase tracking-widest">{item.brand}</p>
                        </div>
                        <div className="flex justify-between items-end">
                          <div className="flex items-center gap-3 bg-white/5 rounded-md px-2 py-1 border border-white/10">
                            <button onClick={() => onUpdateQuantity(item.id, -1)} className="p-1 hover:text-cyan-400 transition-colors">
                              <Minus size={14} />
                            </button>
                            <span className="text-xs font-orbitron w-4 text-center">{item.quantity}</span>
                            <button onClick={() => onUpdateQuantity(item.id, 1)} className="p-1 hover:text-cyan-400 transition-colors">
                              <Plus size={14} />
                            </button>
                          </div>
                          <p className="font-orbitron font-bold text-cyan-400">${item.price * item.quantity}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 bg-white/5 border-t border-white/5 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Subtotal</span>
                    <span className="font-orbitron font-bold text-white">${total}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Shipping</span>
                    <span className="text-cyan-400 font-bold uppercase text-[10px] tracking-widest">Calculated at Checkout</span>
                  </div>
                  <div className="h-px bg-white/10 my-4" />
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-orbitron font-bold">TOTAL</span>
                    <span className="text-2xl font-orbitron font-black text-cyan-400">${total}</span>
                  </div>
                </div>
                <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-obsidian font-orbitron font-black py-4 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-[0.98]">
                  <CreditCard size={20} />
                  PROCESS CHECKOUT
                </button>
                <p className="text-[8px] text-center text-gray-600 font-orbitron tracking-widest uppercase">
                  All transactions secured by quantum-shield encryption
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
