import React from 'react';
import { Category } from '../types';

interface CategoryFiltersProps {
  categories: Category[];
  selectedCategory: Category;
  onSelectCategory: (cat: Category) => void;
  itemCounts: Record<string, number>;
}

export const CategoryFilters: React.FC<CategoryFiltersProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  itemCounts,
}) => {
  const getCategoryEmoji = (cat: Category) => {
    switch (cat) {
      case 'All':
        return '🍽️';
      case 'Breakfast':
        return '🍳';
      case 'Lunch':
        return '🍱';
      case 'Snacks':
        return '🍟';
      case 'Beverages':
        return '🥤';
      case "Today's Special":
        return '⭐';
      default:
        return '🍴';
    }
  };

  const getCategoryDisplayLabel = (cat: Category) => {
    if (cat === "Today's Special") {
      return "Special";
    }
    return cat;
  };

  return (
    <div className="py-6 border-b border-[#DEDACE] bg-[#F7F5EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          {/* Section heading with icon */}
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono-plex text-xs font-semibold text-[#6B6F66] uppercase tracking-wider flex items-center gap-1.5">
                <span>🍳</span> Browse By Course
              </span>
              <span className="w-8 h-[1px] bg-[#DEDACE]"></span>
            </div>
            <h2 className="font-serif-lora font-bold text-2xl text-[#21261F] mt-0.5 flex items-center gap-2">
              <span>📋</span> Today's Canteen Menu
            </h2>
          </div>

          {/* Filter Pills with Emojis */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count = itemCounts[cat] ?? 0;
              const emoji = getCategoryEmoji(cat);
              const label = getCategoryDisplayLabel(cat);

              return (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  id={`filter-pill-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  className={`
                    whitespace-nowrap px-3.5 py-2 rounded-[6px] text-xs font-mono-plex font-medium transition-all duration-150 flex items-center gap-2 cursor-pointer border
                    ${isSelected 
                      ? 'bg-[#21261F] text-[#F7F5EF] border-[#21261F] shadow-xs' 
                      : 'bg-[#FFFFFF] text-[#21261F] border-[#DEDACE] hover:border-[#21261F] hover:bg-[#F7F5EF]'
                    }
                  `}
                >
                  <span className="text-sm">{emoji}</span>
                  <span>{label}</span>
                  {count > 0 && (
                    <span 
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                        isSelected 
                          ? 'bg-[#FFFFFF]/20 text-[#F7F5EF]' 
                          : 'bg-[#F7F5EF] text-[#6B6F66] border border-[#DEDACE]'
                      }`}
                    >
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
};
