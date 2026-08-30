import React from 'react';
import { Utensils, HeartHandshake, ShieldAlert, Clock, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#21261F] text-[#F7F5EF] pt-12 pb-8 border-t-4 border-[#3B5BA5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-[#F7F5EF]/15">
          
          {/* Brand & Canteen mission */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-[4px] bg-[#3B5BA5] text-white flex items-center justify-center">
                <Utensils className="w-4 h-4" />
              </div>
              <span className="font-serif-lora font-bold text-xl text-[#F7F5EF] tracking-tight">
                School Canteen
              </span>
            </div>
            <p className="font-sans-inter text-xs text-[#DEDACE]/80 leading-relaxed">
              Serving wholesome, balanced, and affordable meals to students and faculty every school day. Prepared fresh every morning with local ingredients.
            </p>
            <div className="pt-1">
              <span className="stamp-badge text-[#7FA98C] border-[#7FA98C] text-[10px]">
                GRADE A HYGIENE RATED
              </span>
            </div>
          </div>

          {/* Operating Service Hours */}
          <div className="space-y-2.5 font-mono-plex text-xs">
            <div className="flex items-center gap-2 text-[#7FA98C] font-bold uppercase tracking-wider text-xs">
              <Clock className="w-4 h-4" />
              <span>Service Windows</span>
            </div>
            <ul className="space-y-2 text-[#DEDACE]/90">
              <li className="flex justify-between border-b border-[#F7F5EF]/10 pb-1">
                <span>Breakfast:</span>
                <span className="font-semibold text-white">07:30 – 08:30 AM</span>
              </li>
              <li className="flex justify-between border-b border-[#F7F5EF]/10 pb-1">
                <span>Morning Recess:</span>
                <span className="font-semibold text-white">09:45 – 10:15 AM</span>
              </li>
              <li className="flex justify-between border-b border-[#F7F5EF]/10 pb-1">
                <span>Lunch Break:</span>
                <span className="font-semibold text-white">11:45 – 01:15 PM</span>
              </li>
              <li className="flex justify-between">
                <span>After-School Snack:</span>
                <span className="font-semibold text-white">03:15 – 04:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Allergen & Dietary Guidelines */}
          <div className="space-y-2.5 text-xs font-sans-inter">
            <div className="flex items-center gap-2 text-[#C1442B] font-mono-plex font-bold uppercase tracking-wider text-xs">
              <ShieldAlert className="w-4 h-4 text-[#C1442B]" />
              <span>Allergen Notice</span>
            </div>
            <p className="text-[#DEDACE]/80 leading-relaxed">
              Our kitchen is strictly nut-aware. Vegetarian, gluten-free, and halal certified meals are clearly tagged on daily tickets. Please notify canteen staff of severe allergies.
            </p>
            <div className="pt-1 font-mono-plex text-[11px] text-[#DEDACE]/70">
              Inquiries: canteen-dietary@school.edu
            </div>
          </div>

          {/* Canteen Location & Cards */}
          <div className="space-y-2.5 font-mono-plex text-xs">
            <div className="flex items-center gap-2 text-[#3B5BA5] font-bold uppercase tracking-wider text-xs">
              <MapPin className="w-4 h-4 text-[#3B5BA5]" />
              <span>Location &amp; Card</span>
            </div>
            <p className="font-sans-inter text-xs text-[#DEDACE]/80 leading-relaxed">
              Building C, Ground Level East Wing. Top up student meal balances via the Parent Portal or at the bursar kiosk.
            </p>
            <div className="p-2.5 bg-[#FFFFFF]/5 rounded-[4px] border border-[#F7F5EF]/10">
              <span className="text-[10px] text-[#DEDACE]/60 block">PAYMENT ACCEPTED</span>
              <span className="font-bold text-white text-[11px]">Smart Student ID • Cash • NFC</span>
            </div>
          </div>

        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono-plex text-[#DEDACE]/60">
          <div>
            <span>© 2026 School Canteen Service • Task 05 Prototype</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="stamp-badge text-[#DEDACE]/80 border-[#DEDACE]/40 text-[10px]">
              CANTEEN v2.4 PROTOTYPE
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
