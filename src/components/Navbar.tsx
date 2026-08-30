import React, { useState } from 'react';
import { Utensils, ShoppingBag, Clock, Menu, X, Bell } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F7F5EF]/95 backdrop-blur-sm border-b border-[#DEDACE]">
      {/* Top Notice Bar */}
      <div className="bg-[#21261F] text-[#F7F5EF] px-4 py-1.5 text-xs font-mono-plex flex items-center justify-between border-b border-[#21261F]">
        <div className="flex items-center gap-2 max-w-7xl mx-auto w-full justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#7FA98C] animate-pulse"></span>
            <span className="font-medium tracking-wide">CANTEEN SERVICE: ACTIVE</span>
            <span className="hidden sm:inline text-[#DEDACE]/60">|</span>
            <span className="hidden sm:inline text-[#DEDACE]/90">Period 4 • Lunch Window Open (11:45 AM - 1:15 PM)</span>
          </div>
          <div className="hidden md:flex items-center gap-3 text-xs text-[#DEDACE]/80">
            <span>Pickup: Counter A & B</span>
            <span>•</span>
            <span>Student Card Accepted</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand */}
          <button 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center gap-3 group text-left focus:outline-none"
            id="brand-logo-btn"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[6px] bg-[#21261F] text-[#F7F5EF] flex items-center justify-center border border-[#21261F] shadow-sm group-hover:bg-[#3B5BA5] transition-colors">
              <Utensils className="w-5 h-5 text-[#F7F5EF]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif-lora font-bold text-xl sm:text-2xl text-[#21261F] tracking-tight">
                  School Canteen
                </span>
                <span className="hidden sm:inline-block border border-dashed border-[#6B6F66] text-[#21261F] text-[10px] font-mono-plex px-1.5 py-0.5 rounded-[4px]">
                  EST. 1984
                </span>
              </div>
              <p className="text-[11px] font-mono-plex text-[#6B6F66] uppercase tracking-wider">
                Fresh Daily Student Dining
              </p>
            </div>
          </button>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => handleNavClick('menu')}
              className="px-4 py-2 text-sm font-medium text-[#21261F] hover:text-[#3B5BA5] hover:bg-[#FFFFFF] border border-transparent hover:border-[#DEDACE] rounded-[6px] transition-all"
              id="nav-menu-link"
            >
              Menu
            </button>
            <button
              onClick={() => handleNavClick('cart')}
              className="px-4 py-2 text-sm font-medium text-[#21261F] hover:text-[#3B5BA5] hover:bg-[#FFFFFF] border border-transparent hover:border-[#DEDACE] rounded-[6px] transition-all flex items-center gap-2 relative"
              id="nav-cart-link"
            >
              <ShoppingBag className="w-4 h-4 text-[#3B5BA5]" />
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="bg-[#C1442B] text-white text-[11px] font-mono-plex font-bold px-1.5 py-0.2 rounded-full min-w-[20px] text-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => handleNavClick('order-status')}
              className="px-4 py-2 text-sm font-medium text-[#21261F] hover:text-[#3B5BA5] hover:bg-[#FFFFFF] border border-transparent hover:border-[#DEDACE] rounded-[6px] transition-all flex items-center gap-2"
              id="nav-status-link"
            >
              <Clock className="w-4 h-4 text-[#7FA98C]" />
              <span>Order Status</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => handleNavClick('cart')}
              className="p-2 text-[#21261F] bg-white border border-[#DEDACE] rounded-[6px] relative"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-5 h-5 text-[#3B5BA5]" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#C1442B] text-white text-[10px] font-mono-plex font-bold px-1.5 py-0.2 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#21261F] bg-white border border-[#DEDACE] rounded-[6px]"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#DEDACE] bg-[#FFFFFF] px-4 pt-3 pb-5 space-y-2 shadow-md">
          <button
            onClick={() => handleNavClick('menu')}
            className="w-full text-left px-3 py-2.5 rounded-[6px] text-sm font-medium text-[#21261F] hover:bg-[#F7F5EF] flex items-center justify-between"
          >
            <span>Today's Menu</span>
            <span className="text-xs font-mono-plex text-[#6B6F66]">8 Items</span>
          </button>
          <button
            onClick={() => handleNavClick('cart')}
            className="w-full text-left px-3 py-2.5 rounded-[6px] text-sm font-medium text-[#21261F] hover:bg-[#F7F5EF] flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-[#3B5BA5]" />
              <span>Cart & Summary</span>
            </div>
            <span className="bg-[#C1442B] text-white text-xs font-mono-plex font-bold px-2 py-0.5 rounded-full">
              {cartCount} items
            </span>
          </button>
          <button
            onClick={() => handleNavClick('order-status')}
            className="w-full text-left px-3 py-2.5 rounded-[6px] text-sm font-medium text-[#21261F] hover:bg-[#F7F5EF] flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#7FA98C]" />
              <span>Order Status & Ticket</span>
            </div>
            <span className="stamp-badge text-[10px] text-[#3B5BA5] border-[#3B5BA5]">
              LIVE
            </span>
          </button>
        </div>
      )}
    </header>
  );
};
