import React from 'react';
import { OrderTicket, OrderState } from '../types';
import { Clock, CheckCircle2, ChefHat, Bell, Sparkles, MapPin, User, Ticket } from 'lucide-react';

interface OrderStatusSectionProps {
  currentOrder: OrderTicket;
  onSetStatus: (status: OrderState) => void;
}

export const OrderStatusSection: React.FC<OrderStatusSectionProps> = ({
  currentOrder,
  onSetStatus,
}) => {
  // Stamp style helper function for each status
  const getStampClasses = (status: OrderState) => {
    switch (status) {
      case 'Preparing':
        return 'text-[#3B5BA5] border-[#3B5BA5] bg-[#3B5BA5]/8';
      case 'Ready for Pickup':
        return 'text-[#7FA98C] border-[#7FA98C] bg-[#7FA98C]/10 animate-pulse';
      case 'Order Placed':
        return 'text-[#21261F] border-[#21261F] bg-[#F7F5EF]';
      case 'Collected':
        return 'text-[#6B6F66] border-[#6B6F66] bg-[#FFFFFF]';
      default:
        return 'text-[#21261F] border-[#21261F]';
    }
  };

  const getStatusIcon = (status: OrderState) => {
    switch (status) {
      case 'Preparing':
        return <ChefHat className="w-5 h-5 text-[#3B5BA5]" />;
      case 'Ready for Pickup':
        return <Bell className="w-5 h-5 text-[#7FA98C]" />;
      case 'Order Placed':
        return <Clock className="w-5 h-5 text-[#21261F]" />;
      case 'Collected':
        return <CheckCircle2 className="w-5 h-5 text-[#6B6F66]" />;
    }
  };

  const allStatuses: OrderState[] = [
    'Order Placed',
    'Preparing',
    'Ready for Pickup',
    'Collected'
  ];

  return (
    <section id="order-status" className="py-12 bg-[#F7F5EF] border-b border-[#DEDACE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="stamp-badge text-[#7FA98C] border-[#7FA98C] bg-[#FFFFFF]">
                <span>🏷️</span> SECTION 06 • LIVE CHIT STATUS
              </span>
            </div>
            <h2 className="font-serif-lora font-bold text-2xl sm:text-3xl text-[#21261F] mt-2 flex items-center gap-2">
              <span>⏱️</span> Order Status &amp; Stamp Badges
            </h2>
            <p className="font-sans-inter text-sm text-[#6B6F66] mt-1 max-w-2xl">
              Authentic dashed-border stamps reflecting real-time kitchen preparation and cafeteria collection states.
            </p>
          </div>

          {/* Interactive Stamp Selector Demo */}
          <div className="bg-[#FFFFFF] p-2 rounded-[6px] border border-[#DEDACE] shadow-2xs">
            <span className="text-[10px] font-mono-plex text-[#6B6F66] px-2 block mb-1 font-semibold uppercase">
              Interactive State Switcher:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {allStatuses.map((st) => {
                const isActive = currentOrder.status === st;
                return (
                  <button
                    key={st}
                    onClick={() => onSetStatus(st)}
                    id={`status-toggle-${st.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    className={`
                      px-2.5 py-1 text-xs font-mono-plex font-bold rounded-[4px] border transition-all cursor-pointer
                      ${isActive 
                        ? 'bg-[#21261F] text-[#F7F5EF] border-[#21261F]' 
                        : 'bg-[#F7F5EF] text-[#6B6F66] border-dashed border-[#DEDACE] hover:border-[#21261F] hover:text-[#21261F]'
                      }
                    `}
                  >
                    {st}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Live Ticket & Stamp Showroom */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Active Docket Card */}
          <div className="lg:col-span-8">
            <div className="canteen-card p-6 sm:p-8 bg-[#FFFFFF] relative shadow-sm">
              
              {/* Paper Top Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b-2 border-dashed border-[#DEDACE]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[6px] bg-[#21261F] text-[#F7F5EF] flex items-center justify-center">
                    <Ticket className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-plex text-[#6B6F66] uppercase tracking-wider block">
                      CANTEEN DOCKET TICKET
                    </span>
                    <span className="font-mono-plex font-bold text-xl text-[#21261F]">
                      {currentOrder.ticketNumber}
                    </span>
                  </div>
                </div>

                {/* Main Prominent Stamp Badge */}
                <div className="text-right">
                  <div className={`stamp-badge-lg ${getStampClasses(currentOrder.status)}`}>
                    {getStatusIcon(currentOrder.status)}
                    <span>{currentOrder.status}</span>
                  </div>
                </div>
              </div>

              {/* Order Information Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-b border-[#DEDACE]">
                <div className="bg-[#F7F5EF] p-3.5 rounded-[4px] border border-[#DEDACE]">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono-plex text-[#6B6F66]">
                    <User className="w-3.5 h-3.5 text-[#3B5BA5]" />
                    <span>STUDENT NAME</span>
                  </div>
                  <p className="font-serif-lora font-bold text-sm text-[#21261F] mt-1">
                    {currentOrder.studentName || "Alex Morgan"}
                  </p>
                  <span className="text-[10px] font-mono-plex text-[#6B6F66]">
                    STU-9482 • Grade 10
                  </span>
                </div>

                <div className="bg-[#F7F5EF] p-3.5 rounded-[4px] border border-[#DEDACE]">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono-plex text-[#6B6F66]">
                    <MapPin className="w-3.5 h-3.5 text-[#C1442B]" />
                    <span>PICKUP COUNTER</span>
                  </div>
                  <p className="font-serif-lora font-bold text-sm text-[#21261F] mt-1">
                    {currentOrder.counter}
                  </p>
                  <span className="text-[10px] font-mono-plex text-[#6B6F66]">
                    Hot Meal Express Lane
                  </span>
                </div>

                <div className="bg-[#F7F5EF] p-3.5 rounded-[4px] border border-[#DEDACE]">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono-plex text-[#6B6F66]">
                    <Clock className="w-3.5 h-3.5 text-[#7FA98C]" />
                    <span>ESTIMATED WAIT</span>
                  </div>
                  <p className="font-serif-lora font-bold text-sm text-[#21261F] mt-1">
                    {currentOrder.status === 'Ready for Pickup' 
                      ? 'Ready Now!' 
                      : currentOrder.status === 'Collected' 
                        ? 'Completed' 
                        : `~${currentOrder.estimatedMinutes} Minutes`}
                  </p>
                  <span className="text-[10px] font-mono-plex text-[#6B6F66]">
                    Placed: {currentOrder.placedTime}
                  </span>
                </div>
              </div>

              {/* Progress Steps Indicator */}
              <div className="py-6 border-b border-[#DEDACE]">
                <span className="text-[10px] font-mono-plex text-[#6B6F66] uppercase tracking-wider block mb-3">
                  KITCHEN DISPATCH PIPELINE
                </span>
                <div className="grid grid-cols-4 gap-2 text-center font-mono-plex text-xs">
                  {allStatuses.map((step, idx) => {
                    const stepIndex = allStatuses.indexOf(currentOrder.status);
                    const isCompleted = stepIndex >= idx;
                    const isCurrent = currentOrder.status === step;

                    return (
                      <div key={step} className="space-y-1.5">
                        <div 
                          className={`h-2 rounded-full transition-colors ${
                            isCurrent
                              ? 'bg-[#3B5BA5]'
                              : isCompleted
                                ? 'bg-[#21261F]'
                                : 'bg-[#DEDACE]'
                          }`} 
                        />
                        <span className={`text-[10px] sm:text-xs block font-medium ${
                          isCurrent ? 'text-[#3B5BA5] font-bold' : isCompleted ? 'text-[#21261F]' : 'text-[#6B6F66]'
                        }`}>
                          {step}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Order contents summary */}
              <div className="pt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono-plex text-[#6B6F66]">
                <div>
                  <span className="font-bold text-[#21261F]">Items on Chit:</span> {currentOrder.itemsSummary}
                </div>
                <div className="text-right">
                  <span className="font-bold text-[#21261F]">Total Amount: ${currentOrder.total.toFixed(2)}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Stamp Style Showcase / Legend */}
          <div className="lg:col-span-4 space-y-4">
            <div className="canteen-card p-5 sm:p-6 bg-[#FFFFFF] shadow-xs">
              <h3 className="font-serif-lora font-bold text-lg text-[#21261F] pb-3 border-b border-[#DEDACE]">
                Canteen Stamp Catalog
              </h3>
              <p className="font-sans-inter text-xs text-[#6B6F66] my-3">
                Standardized dashed-border stamps applied to physical and digital meal vouchers:
              </p>

              <div className="space-y-3.5 font-mono-plex">
                
                {/* Preparing Stamp */}
                <div className="p-3 bg-[#F7F5EF] rounded-[4px] border border-[#DEDACE] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#6B6F66] block">IN THE KITCHEN</span>
                    <span className="font-bold text-xs text-[#21261F]">Chef cooking meal</span>
                  </div>
                  <span className="stamp-badge text-[#3B5BA5] border-[#3B5BA5] bg-white">
                    PREPARING
                  </span>
                </div>

                {/* Ready for Pickup Stamp */}
                <div className="p-3 bg-[#F7F5EF] rounded-[4px] border border-[#DEDACE] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#6B6F66] block">AT THE COUNTER</span>
                    <span className="font-bold text-xs text-[#21261F]">Call ticket at Tray 2</span>
                  </div>
                  <span className="stamp-badge text-[#7FA98C] border-[#7FA98C] bg-white">
                    READY FOR PICKUP
                  </span>
                </div>

                {/* Order Placed Stamp */}
                <div className="p-3 bg-[#F7F5EF] rounded-[4px] border border-[#DEDACE] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#6B6F66] block">POS QUEUE</span>
                    <span className="font-bold text-xs text-[#21261F]">Docket queued</span>
                  </div>
                  <span className="stamp-badge text-[#21261F] border-[#21261F] bg-white">
                    ORDER PLACED
                  </span>
                </div>

                {/* Collected Stamp */}
                <div className="p-3 bg-[#F7F5EF] rounded-[4px] border border-[#DEDACE] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#6B6F66] block">ARCHIVED</span>
                    <span className="font-bold text-xs text-[#21261F]">Picked up by student</span>
                  </div>
                  <span className="stamp-badge text-[#6B6F66] border-[#6B6F66] bg-white">
                    COLLECTED
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
