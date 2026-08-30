import React from 'react';
import { CartItem } from '../types';
import { ShoppingBag, Trash2, ArrowRight, RotateCcw, CreditCard } from 'lucide-react';

interface CartSectionProps {
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onResetSampleCart: () => void;
  onCheckout: () => void;
  studentName: string;
  setStudentName: (name: string) => void;
  studentId: string;
  setStudentId: (id: string) => void;
}

export const CartSection: React.FC<CartSectionProps> = ({
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onResetSampleCart,
  onCheckout,
  studentName,
  setStudentName,
  studentId,
  setStudentId,
}) => {
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const studentDiscount = subtotal > 8 ? 1.00 : 0.00; // Canteen student allowance
  const total = Math.max(0, subtotal - studentDiscount);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <section id="cart" className="py-12 bg-[#F7F5EF] border-t border-b border-[#DEDACE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-8">
          <div className="flex items-center gap-2">
            <span className="stamp-badge text-[#3B5BA5] border-[#3B5BA5] bg-[#FFFFFF]">
              <span>🛒</span> SECTION 05 • LUNCH TRAY
            </span>
          </div>
          <h2 className="font-serif-lora font-bold text-2xl sm:text-3xl text-[#21261F] mt-2 flex items-center gap-2">
            <span>🧾</span> Cart &amp; Order Summary
          </h2>
          <p className="font-sans-inter text-sm text-[#6B6F66] mt-1">
            Review your selected meal items, student identification details, and cafeteria subtotal before placing your lunch chit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Cart Items Table / List */}
          <div className="lg:col-span-7">
            <div className="canteen-card p-5 sm:p-7 shadow-xs hover:shadow-[0_8px_24px_rgba(33,38,31,0.08)] transition-all duration-200">
              
              {/* Header with restore sample button */}
              <div className="flex items-center justify-between pb-4 border-b border-[#DEDACE] mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🛒</span>
                  <span className="font-serif-lora font-bold text-lg text-[#21261F]">
                    Selected Tray Items ({totalItems})
                  </span>
                </div>

                <button
                  onClick={onResetSampleCart}
                  id="reset-sample-cart-btn"
                  className="text-xs font-mono-plex text-[#3B5BA5] hover:text-[#21261F] flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] border border-dashed border-[#3B5BA5]/40 hover:border-[#21261F] bg-[#FFFFFF] cursor-pointer"
                  title="Reset to 3 sample items"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset Sample Items</span>
                </button>
              </div>

              {/* Items List */}
              {cart.length === 0 ? (
                <div className="py-12 text-center text-[#6B6F66]">
                  <p className="font-serif-lora text-base">Your lunch tray is currently empty.</p>
                  <p className="font-mono-plex text-xs mt-1">Select items from the menu above or tap 'Reset Sample Items'.</p>
                </div>
              ) : (
                <div className="divide-y divide-[#DEDACE]">
                  {cart.map((item) => {
                    const itemSubtotal = item.price * item.quantity;
                    return (
                      <div key={item.id} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        
                        {/* Item Details */}
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono-plex px-1.5 py-0.5 rounded-[3px] bg-[#F7F5EF] border border-[#DEDACE] text-[#6B6F66]">
                              {item.category}
                            </span>
                            <span className="font-serif-lora font-bold text-[#21261F] text-base">
                              {item.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-xs font-mono-plex text-[#6B6F66] mt-1">
                            <span>Unit Price: ${item.price.toFixed(2)}</span>
                            <span>•</span>
                            <span className="font-semibold text-[#21261F]">Item Subtotal: ${itemSubtotal.toFixed(2)}</span>
                          </div>
                        </div>

                        {/* Quantity Controls & Delete */}
                        <div className="flex items-center gap-3 self-end sm:self-center">
                          <div className="flex items-center border border-[#21261F] rounded-[4px] bg-[#F7F5EF] overflow-hidden">
                            <button
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              id={`cart-decrease-${item.id}`}
                              className="w-7 h-7 flex items-center justify-center font-mono-plex font-bold text-sm bg-white hover:bg-[#DEDACE] text-[#21261F] cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <span className="w-8 text-center font-mono-plex font-bold text-xs text-[#21261F]">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              id={`cart-increase-${item.id}`}
                              className="w-7 h-7 flex items-center justify-center font-mono-plex font-bold text-sm bg-white hover:bg-[#DEDACE] text-[#21261F] cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>

                          <button
                            onClick={() => onRemoveItem(item.id)}
                            id={`cart-remove-${item.id}`}
                            className="p-1.5 text-[#6B6F66] hover:text-[#C1442B] hover:bg-[#C1442B]/10 rounded-[4px] transition-colors cursor-pointer"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                      </div>
                    );
                  })}
                </div>
              )}

              {/* Student identification form fields */}
              <div className="mt-6 pt-5 border-t border-[#DEDACE] bg-[#F7F5EF] p-4 rounded-[6px] border">
                <div className="flex items-center gap-2 mb-3">
                  <CreditCard className="w-4 h-4 text-[#3B5BA5]" />
                  <span className="font-mono-plex text-xs font-bold text-[#21261F] uppercase tracking-wider">
                    Student Order Credentials
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono-plex text-[#6B6F66] mb-1">
                      STUDENT NAME
                    </label>
                    <input
                      type="text"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      id="student-name-input"
                      className="w-full bg-[#FFFFFF] border border-[#DEDACE] focus:border-[#21261F] rounded-[4px] px-3 py-1.5 text-xs font-mono-plex text-[#21261F] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono-plex text-[#6B6F66] mb-1">
                      STUDENT CARD ID / GRADE
                    </label>
                    <input
                      type="text"
                      value={studentId}
                      onChange={(e) => setStudentId(e.target.value)}
                      placeholder="e.g. STU-9482 (Grade 10)"
                      id="student-id-input"
                      className="w-full bg-[#FFFFFF] border border-[#DEDACE] focus:border-[#21261F] rounded-[4px] px-3 py-1.5 text-xs font-mono-plex text-[#21261F] outline-none"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Order Summary & Checkout Receipt */}
          <div className="lg:col-span-5">
            <div className="canteen-card p-6 sm:p-7 shadow-sm bg-[#FFFFFF] relative">
              
              {/* Top chit punched-hole stamp header */}
              <div className="border-b-2 border-dashed border-[#DEDACE] pb-4 mb-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono-plex text-xs font-bold text-[#6B6F66] uppercase tracking-wider">
                    CANTEEN RECEIPT DOCKET
                  </span>
                  <span className="stamp-badge text-[#7FA98C] border-[#7FA98C] text-[10px]">
                    VERIFIED TRAY
                  </span>
                </div>
                <div className="text-[11px] font-mono-plex text-[#6B6F66] mt-1 flex justify-between">
                  <span>DATE: TODAY</span>
                  <span>CANTEEN TERMINAL #02</span>
                </div>
              </div>

              {/* Breakdown lines */}
              <div className="space-y-3 font-mono-plex text-xs">
                <div className="flex justify-between text-[#6B6F66]">
                  <span>Items Subtotal ({totalItems} pcs)</span>
                  <span className="font-medium text-[#21261F]">${subtotal.toFixed(2)}</span>
                </div>

                {studentDiscount > 0 && (
                  <div className="flex justify-between text-[#7FA98C]">
                    <span>Lunch Subsidy (Orders &gt; $8.00)</span>
                    <span className="font-bold">-${studentDiscount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between text-[#6B6F66]">
                  <span>State Meal Tax (School Exempt)</span>
                  <span className="text-[#21261F]">$0.00</span>
                </div>

                <div className="pt-3 border-t border-[#DEDACE] flex justify-between items-baseline">
                  <div>
                    <span className="font-serif-lora font-bold text-lg text-[#21261F]">
                      Final Total
                    </span>
                    <span className="block text-[10px] text-[#6B6F66] font-mono-plex">
                      Charged to Student Meal Account
                    </span>
                  </div>
                  <span className="font-mono-plex font-bold text-2xl text-[#21261F]">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <div className="mt-6 pt-4 border-t-2 border-dashed border-[#DEDACE]">
                <button
                  onClick={onCheckout}
                  disabled={cart.length === 0}
                  id="checkout-btn"
                  className="w-full py-3.5 px-4 bg-[#21261F] hover:bg-[#3B5BA5] disabled:bg-[#DEDACE] disabled:text-[#6B6F66] disabled:cursor-not-allowed text-[#F7F5EF] font-mono-plex font-bold text-xs uppercase tracking-wider rounded-[6px] flex items-center justify-center gap-2 transition-all duration-150 cursor-pointer shadow-xs"
                >
                  <span>Confirm &amp; Place Order</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] font-mono-plex text-[#6B6F66] text-center mt-3">
                  Tap to place docket &amp; generate live pickup stamp below.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
