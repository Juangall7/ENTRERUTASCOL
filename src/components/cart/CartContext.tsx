
"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, Activity, TourPackage } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  type: 'product' | 'activity' | 'package';
};

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: any, type: 'product' | 'activity' | 'package') => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  cartCount: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const addToCart = (item: any, type: 'product' | 'activity' | 'package') => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [
        ...prev,
        {
          id: item.id,
          name: item.name || item.title,
          price: item.price,
          image: item.image,
          quantity: 1,
          type,
        },
      ];
    });
    toast({
      title: "Agregado al carrito",
      description: `${item.name || item.title} ha sido añadido.`,
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const clearCart = () => setCart([]);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, cartCount, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
