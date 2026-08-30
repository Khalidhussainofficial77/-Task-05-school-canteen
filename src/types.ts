export type Category = 
  | "All"
  | "Breakfast" 
  | "Lunch" 
  | "Snacks" 
  | "Beverages" 
  | "Today's Special";

export interface FoodItem {
  id: string;
  name: string;
  price: number;
  category: "Breakfast" | "Lunch" | "Snacks" | "Beverages" | "Today's Special";
  description: string;
  emoji: string;
  placeholderBg?: string;
  tag?: string;
  calories?: number;
  dietary?: string[];
  prepTime?: string;
  isSpecial?: boolean;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
}

export type OrderState = 'Preparing' | 'Ready for Pickup' | 'Order Placed' | 'Collected';

export interface OrderTicket {
  ticketNumber: string;
  studentName: string;
  counter: string;
  status: OrderState;
  estimatedMinutes: number;
  placedTime: string;
  itemsSummary: string;
  total: number;
}
