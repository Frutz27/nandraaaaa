
import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ShoppingCart, Heart, Menu, X, ArrowRight, Github, Twitter, Instagram, Globe, ArrowLeft } from 'lucide-react';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Brands from './pages/Brands';
import BrandDetail from './pages/BrandDetail';
import NewRelease from './pages/NewRelease';
import { Product, CartItem } from './types';
import { PRODUCTS } from './data';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll Progress
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const toggleWishlist = (id: string) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <div className="relative min-h-screen selection:bg-cyan-500 selection:text-white">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-cyber-gradient z-[100] transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Custom Cursor Glow */}
      <div 
        className="custom-cursor" 
        style={{ left: mousePos.x, top: mousePos.y }}
      />

      {/* Floating Back Button (Functional Back Menu) */}
      <AnimatePresence>
        {location.pathname !== '/' && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onClick={() => navigate(-1)}
            className="fixed bottom-10 left-10 z-[60] w-14 h-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-cyan-500 hover:text-obsidian hover:border-cyan-400 transition-all shadow-2xl group"
          >
            <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            <span className="absolute left-full ml-4 px-3 py-1 bg-white/10 border border-white/10 rounded-md text-[10px] font-orbitron font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">BACK</span>
          </motion.button>
        )}
      </AnimatePresence>

      <Navbar cartCount={cart.reduce((acc, i) => acc + i.quantity, 0)} onCartOpen={() => setIsCartOpen(true)} />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="pt-20 pb-20"
        >
          <Routes location={location}>
            <Route path="/" element={<Home onAddToCart={addToCart} />} />
            <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/brands/:brandId" element={<BrandDetail onAddToCart={addToCart} />} />
            <Route path="/new-release" element={<NewRelease onAddToCart={addToCart} />} />
            <Route path="/limited" element={<Shop onAddToCart={addToCart} filterLimited={true} />} />
            <Route path="/promo" element={<Home onAddToCart={addToCart} />} />
            <Route path="/community" element={<Home onAddToCart={addToCart} />} />
          </Routes>
        </motion.main>
      </AnimatePresence>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />

      {/* Footer */}
      <footer className="bg-[#080808] border-t border-white/5 py-20 px-6 lg:px-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-20" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
          <div className="space-y-6">
            <h2 className="text-3xl font-black font-orbitron tracking-tighter bg-clip-text text-transparent bg-cyber-gradient">
              NDRAASTEP
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Defining the next generation of footwear. Not just a marketplace, a digital showroom for the bold.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Instagram, Globe].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-500/20 hover:text-cyan-400 transition-all border border-white/10">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-orbitron font-bold mb-6 text-sm tracking-widest text-gray-200">EXPLORE</h3>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Digital Showroom</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Drops Calendar</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Verification Lab</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Partnerships</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-orbitron font-bold mb-6 text-sm tracking-widest text-gray-200">SUPPORT</h3>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Shipping Hub</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Returns & Claims</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-orbitron font-bold mb-6 text-sm tracking-widest text-gray-200">JOIN THE TECH</h3>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Enter Neural ID (Email)" 
                className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-500/50 transition-all text-sm pr-12"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-cyan-500 hover:text-cyan-400 transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
            <p className="text-[10px] text-gray-600 mt-3 font-orbitron">ENCRYPTED TRANSMISSION SECURE</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-20 border-t border-white/5 mt-20 flex flex-col md:row items-center justify-between text-[10px] text-gray-600 font-orbitron tracking-[0.2em]">
          <p>© 2024 NDRAASTEP INC. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#">PRIVACY_POLICY</a>
            <a href="#">TERMS_OF_SERVICE</a>
            <a href="#">SYSTEM_STATUS: ONLINE</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
