import React from 'react';
import { FoodItem } from '../types';
import { FoodCard } from './FoodCard';
import { Sparkles } from 'lucide-react';

interface FoodGridProps {
  items: FoodItem[];
  cartQuantities: Record<string, number>;
  onAddToCart: (item: FoodItem) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
}

export const FoodGrid: React.FC<FoodGridProps> = ({
  items,
  cartQuantities,
  onAddToCart,
  onUpdateQuantity,
}) => {
  if (items.length === 0) {
    return (
      <div className="py-16 text-center bg-[#FFFFFF] border border-dashed border-[#DEDACE] rounded-[6px] my-8">
        <p className="font-serif-lora text-lg text-[#6B6F66]">
          No items found in this category for today's lunch session.
        </p>
        <p className="font-mono-plex text-xs text-[#6B6F66] mt-1">
          Please select another filter above or check with the cafeteria counter staff.
        </p>
      </div>
    );
  }

  return (
    <section id="menu" className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Grid header info */}
      <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#DEDACE]/80">
        <div className="flex items-center gap-2 font-mono-plex text-xs text-[#6B6F66]">
          <span className="text-sm">📋</span>
          <Sparkles className="w-3.5 h-3.5 text-[#3B5BA5]" />
          <span className="font-semibold text-[#21261F]">DISPLAYING {items.length} FRESH ITEMS</span>
        </div>
        <span className="text-xs font-mono-plex text-[#6B6F66] hidden sm:inline">
          PRICE INCLUDES MEAL TAX EXEMPTION
        </span>
      </div>

      {/* 8 Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <FoodCard
            key={item.id}
            item={item}
            quantityInCart={cartQuantities[item.id] || 0}
            onAddToCart={onAddToCart}
            onUpdateQuantity={onUpdateQuantity}
          />
        ))}
      </div>
    </section>
  );
};
