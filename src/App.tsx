import React, { useState } from 'react';
import { Category, CartItem, FoodItem, OrderTicket, OrderState } from './types';
import { MENU_ITEMS, INITIAL_CART_ITEMS } from './data/menuData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryFilters } from './components/CategoryFilters';
import { FoodGrid } from './components/FoodGrid';
import { CartSection } from './components/CartSection';
import { OrderStatusSection } from './components/OrderStatusSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [cart, setCart] = useState<CartItem[]>(INITIAL_CART_ITEMS);
  const [studentName, setStudentName] = useState<string>('Alex Morgan');
  const [studentId, setStudentId] = useState<string>('STU-9482 (Grade 10)');

  // Active simulated order docket
  const [currentOrder, setCurrentOrder] = useState<OrderTicket>({
    ticketNumber: '#CAN-0842',
    studentName: 'Alex Morgan',
    counter: 'Counter B (Hot Kitchen)',
    status: 'Preparing',
    estimatedMinutes: 4,
    placedTime: '11:48 AM',
    itemsSummary: "1x Roast Chicken Mash, 2x Choc Cookies, 1x Orange Juice",
    total: 11.60,
  });

  const [notification, setNotification] = useState<string | null>(null);

  // Show transient toast
  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  // Category counts
  const itemCounts: Record<string, number> = {
    'All': MENU_ITEMS.length,
    'Breakfast': MENU_ITEMS.filter(i => i.category === 'Breakfast').length,
    'Lunch': MENU_ITEMS.filter(i => i.category === 'Lunch').length,
    'Snacks': MENU_ITEMS.filter(i => i.category === 'Snacks').length,
    'Beverages': MENU_ITEMS.filter(i => i.category === 'Beverages').length,
    "Today's Special": MENU_ITEMS.filter(i => i.category === "Today's Special").length,
  };

  const categories: Category[] = [
    'All',
    'Breakfast',
    'Lunch',
    'Snacks',
    'Beverages',
    "Today's Special"
  ];

  // Filter items
  const displayedItems = selectedCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === selectedCategory);

  // Cart helper maps for quick lookup
  const cartQuantities = cart.reduce((acc, item) => {
    acc[item.id] = item.quantity;
    return acc;
  }, {} as Record<string, number>);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Navigation smoothly to element
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Cart operations
  const handleAddToCart = (foodItem: FoodItem) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === foodItem.id);
      if (existing) {
        return prev.map(item =>
          item.id === foodItem.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [
          ...prev,
          {
            id: foodItem.id,
            name: foodItem.name,
            price: foodItem.price,
            quantity: 1,
            category: foodItem.category,
          }
        ];
      }
    });
    showNotification(`Added "${foodItem.name}" to lunch tray`);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart(prev => {
      return prev
        .map(item => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null);
    });
  };

  const handleRemoveItem = (id: string) => {
    const itemToRemove = cart.find(i => i.id === id);
    setCart(prev => prev.filter(item => item.id !== id));
    if (itemToRemove) {
      showNotification(`Removed "${itemToRemove.name}" from tray`);
    }
  };

  const handleResetSampleCart = () => {
    setCart(INITIAL_CART_ITEMS);
    showNotification("Restored 3 sample meal items in cart");
  };

  // Checkout handling
  const handleCheckout = () => {
    if (cart.length === 0) return;

    const newTicketNum = `#CAN-${Math.floor(1000 + Math.random() * 9000)}`;
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = subtotal > 8 ? 1.00 : 0.00;
    const finalTotal = Math.max(0, subtotal - discount);

    const summaryText = cart.map(i => `${i.quantity}x ${i.name}`).join(', ');

    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setCurrentOrder({
      ticketNumber: newTicketNum,
      studentName: studentName || "Alex Morgan",
      counter: 'Counter B (Hot Kitchen)',
      status: 'Preparing',
      estimatedMinutes: 3,
      placedTime: timeString,
      itemsSummary: summaryText,
      total: finalTotal,
    });

    showNotification(`Order ${newTicketNum} placed! Status stamp: PREPARING`);
    scrollToSection('order-status');
  };

  const handleSetOrderStatus = (status: OrderState) => {
    setCurrentOrder(prev => ({
      ...prev,
      status,
    }));
    showNotification(`Stamp updated to: ${status.toUpperCase()}`);
  };

  return (
    <div className="min-h-screen bg-[#F7F5EF] text-[#21261F] flex flex-col font-sans-inter selection:bg-[#3B5BA5]/15 selection:text-[#21261F]">
      
      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
          <div className="bg-[#21261F] text-[#F7F5EF] px-4 py-2.5 rounded-[6px] border border-[#DEDACE] shadow-lg flex items-center gap-3 font-mono-plex text-xs">
            <span className="w-2 h-2 rounded-full bg-[#7FA98C] animate-ping" />
            <span>{notification}</span>
          </div>
        </div>
      )}

      {/* 1. Nav */}
      <Navbar 
        cartCount={totalCartCount} 
        onNavigate={scrollToSection} 
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* 2. Hero Section */}
        <Hero 
          onViewMenu={() => scrollToSection('menu-filters')} 
        />

        {/* 3. Menu Category Filters */}
        <div id="menu-filters">
          <CategoryFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            itemCounts={itemCounts}
          />
        </div>

        {/* 4. Food / Product Grid (8 Food Cards) */}
        <FoodGrid
          items={displayedItems}
          cartQuantities={cartQuantities}
          onAddToCart={handleAddToCart}
          onUpdateQuantity={handleUpdateQuantity}
        />

        {/* 5. Cart / Order Summary Section */}
        <CartSection
          cart={cart}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onResetSampleCart={handleResetSampleCart}
          onCheckout={handleCheckout}
          studentName={studentName}
          setStudentName={setStudentName}
          studentId={studentId}
          setStudentId={setStudentId}
        />

        {/* 6. Order Status Stamp Example Section */}
        <OrderStatusSection
          currentOrder={currentOrder}
          onSetStatus={handleSetOrderStatus}
        />

      </main>

      {/* 7. Footer */}
      <Footer />

    </div>
  );
}
