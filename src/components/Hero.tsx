import React from 'react';
import { ArrowDown, Sparkles, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

interface HeroProps {
  onViewMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewMenu }) => {
  return (
    <section id="hero" className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-[#DEDACE] overflow-hidden">
      {/* Background notebook subtle grid */}
      <div className="absolute inset-0 bg-notebook-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Welcoming Headline & CTA */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* School bulletin stamp badge */}
            <div className="inline-flex items-center gap-2">
              <span className="stamp-badge text-[#3B5BA5] border-[#3B5BA5] bg-[#FFFFFF]">
                <Sparkles className="w-3.5 h-3.5" />
                DAILY FRESH SERVICE • TERM 2
              </span>
              <span className="text-xs font-mono-plex text-[#6B6F66] hidden sm:inline">
                UPDATED 07:15 AM
              </span>
            </div>

            {/* Main Seraphic Headline */}
            <h1 className="font-serif-lora text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[#21261F] leading-[1.18] font-bold tracking-tight">
              Welcome to the School Canteen. Browse today’s wholesome menu.
            </h1>

            {/* Secondary text */}
            <p className="font-sans-inter text-base sm:text-lg text-[#6B6F66] leading-relaxed max-w-2xl">
              Freshly prepped breakfast rolls, wholesome hot lunch bowls, artisan toasties, and chilled drinks. Skip the counter rush by checking availability and ordering ahead for fast pickup.
            </p>

            {/* CTA & Quick Badges */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                onClick={onViewMenu}
                id="hero-view-menu-btn"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#21261F] text-[#F7F5EF] font-sans-inter font-semibold text-sm rounded-[6px] hover:bg-[#3B5BA5] transition-all duration-200 shadow-sm group cursor-pointer border border-[#21261F]"
              >
                <span>View Menu</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <div className="flex items-center gap-4 text-xs font-mono-plex text-[#6B6F66]">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#7FA98C]" />
                  <span>Avg. Prep: ~3 Mins</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#3B5BA5]" />
                  <span>Nut-Aware Kitchen</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Notebook Lunch Voucher / Bulletin Card */}
          <div className="lg:col-span-5">
            <div className="canteen-card p-6 sm:p-7 relative shadow-[0_6px_24px_rgba(33,38,31,0.06)] hover:shadow-[0_12px_28px_rgba(33,38,31,0.1)] transition-all duration-200 bg-[#FFFFFF]">
              {/* Paper punched-hole style decoration */}
              <div className="flex items-center justify-between border-b border-[#DEDACE] pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#DEDACE] border border-[#6B6F66]/30"></div>
                  <span className="font-mono-plex text-xs font-bold uppercase tracking-wider text-[#21261F]">
                    DAILY CAFETERIA CHIT
                  </span>
                </div>
                <span className="stamp-badge text-[#C1442B] border-[#C1442B] text-[11px]">
                  ⭐ TODAY'S SPECIAL ON
                </span>
              </div>

              {/* Card Body */}
              <div className="space-y-4">
                <div className="bg-[#FBEBE8] p-4 rounded-[6px] border border-[#DEDACE] relative overflow-hidden">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-[6px] bg-white border border-[#DEDACE] flex items-center justify-center text-2xl shrink-0 shadow-2xs">
                        🍗
                      </div>
                      <div>
                        <span className="text-[10px] font-mono-plex font-semibold text-[#3B5BA5] uppercase tracking-wider">
                          Hot Kitchen Counter A
                        </span>
                        <h2 className="font-serif-lora font-bold text-lg text-[#21261F] mt-0.5">
                          Chef's Roast Chicken &amp; Herb Mash
                        </h2>
                      </div>
                    </div>
                    <span className="font-mono-plex font-bold text-base text-[#21261F] bg-white px-2 py-1 rounded border border-[#DEDACE] shrink-0">
                      $5.50
                    </span>
                  </div>
                  <p className="text-xs font-sans-inter text-[#6B6F66] mt-2.5 leading-normal">
                    Tender herb chicken breast, creamy Yukon mash &amp; rich savory brown gravy with sweet corn.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-mono-plex">
                  <div className="border border-dashed border-[#DEDACE] p-2.5 rounded-[4px] bg-[#FFFFFF]">
                    <span className="text-[10px] text-[#6B6F66] block">MORNING BREAK</span>
                    <span className="font-bold text-[#21261F]">09:45 – 10:15 AM</span>
                  </div>
                  <div className="border border-dashed border-[#DEDACE] p-2.5 rounded-[4px] bg-[#FFFFFF]">
                    <span className="text-[10px] text-[#6B6F66] block">LUNCH SERVICE</span>
                    <span className="font-bold text-[#21261F]">11:45 – 01:15 PM</span>
                  </div>
                </div>

                {/* Dietary badges */}
                <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-[#DEDACE]/60">
                  <span className="text-[10px] font-mono-plex px-2 py-0.5 rounded-[4px] bg-[#7FA98C]/15 text-[#21261F] border border-[#7FA98C]/40">
                    ✓ Halal Certified
                  </span>
                  <span className="text-[10px] font-mono-plex px-2 py-0.5 rounded-[4px] bg-[#3B5BA5]/10 text-[#3B5BA5] border border-[#3B5BA5]/30">
                    ✓ Freshly Baked
                  </span>
                  <span className="text-[10px] font-mono-plex px-2 py-0.5 rounded-[4px] bg-[#F7F5EF] text-[#6B6F66] border border-[#DEDACE]">
                    ✓ Card / Tap & Go
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
