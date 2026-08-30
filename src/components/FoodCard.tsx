import React from 'react';
import { FoodItem } from '../types';
import { Check, Flame, Clock } from 'lucide-react';

interface FoodCardProps {
  item: FoodItem;
  quantityInCart: number;
  onAddToCart: (item: FoodItem) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
}

export const FoodCard: React.FC<FoodCardProps> = ({
  item,
  quantityInCart,
  onAddToCart,
  onUpdateQuantity,
}) => {
  // Category specific tag colors
  const getTagColorClass = (category: string) => {
    switch (category) {
      case "Today's Special":
        return 'text-[#C1442B] border-[#C1442B] bg-[#C1442B]/5';
      case 'Lunch':
        return 'text-[#3B5BA5] border-[#3B5BA5] bg-[#3B5BA5]/5';
      case 'Breakfast':
        return 'text-[#7FA98C] border-[#7FA98C] bg-[#7FA98C]/5';
      case 'Snacks':
        return 'text-[#21261F] border-[#6B6F66] bg-[#F7F5EF]';
      case 'Beverages':
        return 'text-[#3B5BA5] border-[#3B5BA5] bg-[#3B5BA5]/5';
      default:
        return 'text-[#6B6F66] border-[#DEDACE] bg-[#F7F5EF]';
    }
  };

  return (
    <div 
      className="canteen-card flex flex-col justify-between p-4 sm:p-5 transition-all duration-300 ease-out hover:shadow-[0_12px_28px_rgba(33,38,31,0.12)] hover:-translate-y-1.5 hover:border-[#21261F] group bg-[#FFFFFF]"
      id={`food-card-${item.id}`}
    >
      <div>
        {/* Top Image Placeholder Area with Food Emoji in center */}
        <div className={`w-full aspect-[4/3] rounded-[6px] ${item.placeholderBg || 'bg-[#F7F5EF]'} border border-[#DEDACE] relative overflow-hidden flex items-center justify-center mb-4 group-hover:border-[#6B6F66]/40 transition-colors shadow-2xs`}>
          {/* Subtle notebook graph grid pattern background overlay */}
          <div className="absolute inset-0 bg-notebook-grid opacity-30 pointer-events-none" />
          
          {/* Large centered food emoji */}
          <span className="text-5xl sm:text-6xl drop-shadow-sm select-none transform transition-transform duration-300 group-hover:scale-110">
            {item.emoji}
          </span>

          {/* Corner badge / chit label */}
          <div className="absolute top-2 left-2">
            <span className={`stamp-badge text-[10px] bg-white/90 backdrop-blur-xs py-0.5 px-1.5 ${getTagColorClass(item.category)}`}>
              {item.category.toUpperCase()}
            </span>
          </div>

          {/* Quick dietary icon or prep time */}
          {item.dietary && item.dietary[0] && (
            <div className="absolute bottom-2 right-2">
              <span className="text-[10px] font-mono-plex font-medium bg-white/90 text-[#21261F] px-1.5 py-0.5 rounded-[3px] border border-[#DEDACE]/80 shadow-2xs">
                {item.dietary[0]}
              </span>
            </div>
          )}
        </div>

        {/* Title and Price row */}
        <div className="flex items-start justify-between gap-2 mb-1.5">
          {/* Item Title in Lora serif */}
          <h3 className="font-serif-lora font-bold text-base sm:text-lg text-[#21261F] leading-snug group-hover:text-[#3B5BA5] transition-colors">
            {item.name}
          </h3>

          <div className="text-right shrink-0">
            <span className="font-mono-plex font-bold text-base sm:text-lg text-[#21261F]">
              ${item.price.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Short Description in Inter */}
        <p className="font-sans-inter text-xs sm:text-sm text-[#6B6F66] leading-relaxed line-clamp-2">
          {item.description}
        </p>
      </div>

      {/* Footer Area: Meta tags & Action Button */}
      <div className="mt-4 pt-3.5 border-t border-[#DEDACE] space-y-3">
        {/* Calorie & Prep Meta */}
        <div className="flex items-center justify-between text-[11px] font-mono-plex text-[#6B6F66]">
          {item.calories && (
            <span className="flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-[#C1442B]" />
              <span>{item.calories} kcal</span>
            </span>
          )}
          {item.prepTime && (
            <span className="flex items-center gap-1 text-[10.5px]">
              <Clock className="w-3.5 h-3.5 text-[#7FA98C]" />
              <span>{item.prepTime}</span>
            </span>
          )}
        </div>

        {/* Action Button with 🛒 Cart icon */}
        {quantityInCart === 0 ? (
          <button
            onClick={() => onAddToCart(item)}
            id={`add-to-cart-btn-${item.id}`}
            className="w-full py-2.5 px-4 bg-[#FFFFFF] hover:bg-[#21261F] text-[#21261F] hover:text-[#F7F5EF] border border-[#21261F] rounded-[6px] text-xs font-mono-plex font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-150 cursor-pointer shadow-xs active:scale-[0.98]"
          >
            <span className="text-sm">🛒</span>
            <span>Add to Cart</span>
          </button>
        ) : (
          <div className="flex items-center justify-between bg-[#F7F5EF] border border-[#21261F] rounded-[6px] p-1">
            <button
              onClick={() => onUpdateQuantity(item.id, -1)}
              id={`decrease-cart-btn-${item.id}`}
              className="w-8 h-8 rounded-[4px] bg-[#FFFFFF] text-[#21261F] hover:bg-[#DEDACE] flex items-center justify-center font-mono-plex font-bold text-sm border border-[#DEDACE] cursor-pointer"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <div className="flex items-center gap-1.5 font-mono-plex text-xs font-bold text-[#21261F]">
              <Check className="w-3.5 h-3.5 text-[#7FA98C]" />
              <span>{quantityInCart} in Tray</span>
            </div>
            <button
              onClick={() => onUpdateQuantity(item.id, 1)}
              id={`increase-cart-btn-${item.id}`}
              className="w-8 h-8 rounded-[4px] bg-[#21261F] text-[#F7F5EF] hover:bg-[#3B5BA5] flex items-center justify-center font-mono-plex font-bold text-sm cursor-pointer"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
