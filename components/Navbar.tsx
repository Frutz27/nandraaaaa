
import React, { useState } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Search, User, ArrowLeft } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartOpen: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartOpen }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Shop All', path: '/shop' },
    { label: 'Brands', path: '/brands' },
    { label: 'New Release', path: '/new-release' },
    { label: 'Limited', path: '/limited' },
    { label: 'Promo', path: '/promo' },
    { label: 'Community', path: '/community' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 lg:px-12 lg:py-8 bg-[#000000]/80 backdrop-blur-2xl border-b border-white/5">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <AnimatePresence mode="wait">
            {!isHome && (
              <motion.button
                key="back-button"
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: -20 }}
                onClick={() => navigate(-1)}
                className="flex items-center gap-3 text-gray-500 hover:text-cyan-400 transition-all group"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 group-hover:border-cyan-500 group-hover:shadow-[0_0_15px_rgba(0,242,255,0.3)] transition-all">
                  <ArrowLeft size={18} />
                </div>
                <span className="font-orbitron text-[9px] font-black tracking-[0.3em] hidden lg:block uppercase">SYSTEM_BACK</span>
              </motion.button>
            )}
          </AnimatePresence>
          
          <Link 
            to="/" 
            className="inline-block text-3xl font-black font-orbitron tracking-tighter bg-clip-text text-transparent bg-cyber-gradient hover:opacity-80 transition-opacity"
          >
            NDRAASTEP
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `
                relative font-orbitron text-[10px] uppercase tracking-[0.3em] font-black py-2 transition-all duration-300
                ${isActive ? 'text-cyan-400' : 'text-gray-500 hover:text-white'}
              `}
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 w-full h-[3px] bg-cyan-400 shadow-[0_0_15px_rgba(0,242,255,1)]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-8">
          <button className="text-gray-500 hover:text-cyan-400 transition-colors">
            <Search size={22} strokeWidth={1.5} />
          </button>
          <button className="text-gray-500 hover:text-cyan-400 transition-colors">
            <User size={22} strokeWidth={1.5} />
          </button>
          <button 
            onClick={onCartOpen}
            className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/30 transition-all active:scale-90"
          >
            <ShoppingCart size={22} strokeWidth={1.5} className="text-gray-500 group-hover:text-cyan-400 transition-colors" />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 45 }}
                  className="absolute -top-1 -right-1 w-6 h-6 bg-cyan-500 text-obsidian text-[10px] font-black font-orbitron rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.6)]"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
