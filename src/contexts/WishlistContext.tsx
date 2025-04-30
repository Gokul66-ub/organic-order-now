
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { Product } from '../types';
import { 
  getWishlist, 
  saveWishlist, 
  addToWishlist as addToLocalWishlist, 
  removeFromWishlist as removeFromLocalWishlist 
} from '../utils/localStorage';
import { toast } from 'sonner';
import { useAuth } from './AuthContext';

interface WishlistContextType {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Product[]>([]);
  const { isAuthenticated } = useAuth();
  
  useEffect(() => {
    if (isAuthenticated) {
      setItems(getWishlist());
    } else {
      setItems([]);
    }
  }, [isAuthenticated]);

  const addItem = (product: Product) => {
    if (!isAuthenticated) {
      toast.error('Please log in to add items to your wishlist');
      return;
    }
    
    if (isInWishlist(product.id)) {
      toast.info('This item is already in your wishlist');
      return;
    }
    
    const updatedItems = [...items, product];
    setItems(updatedItems);
    addToLocalWishlist(product);
    toast.success(`${product.name} added to wishlist`);
  };

  const removeItem = (productId: string) => {
    const updatedItems = items.filter(item => item.id !== productId);
    setItems(updatedItems);
    removeFromLocalWishlist(productId);
    toast.info('Item removed from wishlist');
  };

  const isInWishlist = (productId: string): boolean => {
    return items.some(item => item.id === productId);
  };

  const clearWishlist = () => {
    setItems([]);
    saveWishlist([]);
  };

  return (
    <WishlistContext.Provider value={{ 
      items, 
      addItem, 
      removeItem, 
      isInWishlist, 
      clearWishlist 
    }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
