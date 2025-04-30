
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { Product, CartItem } from '../types';
import { 
  getCart, 
  saveCart, 
  addToCart as addToLocalCart, 
  removeFromCart as removeFromLocalCart, 
  updateCartItemQuantity as updateLocalCartItem 
} from '../utils/localStorage';
import { toast } from 'sonner';
import { useAuth } from './AuthContext';

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const { isAuthenticated } = useAuth();
  
  useEffect(() => {
    if (isAuthenticated) {
      setItems(getCart());
    } else {
      setItems([]);
    }
  }, [isAuthenticated]);

  const addItem = (product: Product, quantity: number = 1) => {
    if (!isAuthenticated) {
      toast.error('Please log in to add items to your cart');
      return;
    }
    
    const updatedItems = [...items];
    const existingItem = updatedItems.find(item => item.product.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      updatedItems.push({ product, quantity });
    }
    
    setItems(updatedItems);
    saveCart(updatedItems);
    addToLocalCart(product, quantity);
    toast.success(`${product.name} added to cart`);
  };

  const removeItem = (productId: string) => {
    const updatedItems = items.filter(item => item.product.id !== productId);
    setItems(updatedItems);
    removeFromLocalCart(productId);
    toast.info('Item removed from cart');
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    
    const updatedItems = items.map(item => 
      item.product.id === productId ? { ...item, quantity } : item
    );
    
    setItems(updatedItems);
    updateLocalCartItem(productId, quantity);
  };

  const clearCart = () => {
    setItems([]);
    saveCart([]);
  };

  const getTotalItems = (): number => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = (): number => {
    return items.reduce((total, item) => {
      const price = item.product.discountPercentage 
        ? item.product.price * (1 - item.product.discountPercentage / 100)
        : item.product.price;
      return total + (price * item.quantity);
    }, 0);
  };

  return (
    <CartContext.Provider value={{ 
      items, 
      addItem, 
      removeItem, 
      updateQuantity, 
      clearCart, 
      getTotalItems, 
      getTotalPrice 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
