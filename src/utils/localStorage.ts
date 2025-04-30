
import { User, Product, CartItem, Order } from '../types';

// User related storage functions
export const saveUser = (user: User): void => {
  const users = getUsers();
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
};

export const getUsers = (): User[] => {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
};

export const getUserByEmail = (email: string): User | undefined => {
  const users = getUsers();
  return users.find(user => user.email === email);
};

export const updateUser = (updatedUser: User): void => {
  const users = getUsers();
  const index = users.findIndex(u => u.id === updatedUser.id);
  if (index !== -1) {
    users[index] = updatedUser;
    localStorage.setItem('users', JSON.stringify(users));
  }
};

// Auth related storage functions
export const saveCurrentUser = (userId: string): void => {
  localStorage.setItem('currentUser', userId);
};

export const getCurrentUserId = (): string | null => {
  return localStorage.getItem('currentUser');
};

export const getCurrentUser = (): User | null => {
  const userId = getCurrentUserId();
  if (!userId) return null;
  
  const users = getUsers();
  return users.find(user => user.id === userId) || null;
};

export const logoutUser = (): void => {
  localStorage.removeItem('currentUser');
};

// Cart related storage functions
export const getCart = (): CartItem[] => {
  const userId = getCurrentUserId();
  if (!userId) return [];
  
  const cartKey = `cart_${userId}`;
  const cart = localStorage.getItem(cartKey);
  return cart ? JSON.parse(cart) : [];
};

export const saveCart = (cart: CartItem[]): void => {
  const userId = getCurrentUserId();
  if (!userId) return;
  
  const cartKey = `cart_${userId}`;
  localStorage.setItem(cartKey, JSON.stringify(cart));
};

export const addToCart = (product: Product, quantity: number = 1): void => {
  const cart = getCart();
  const existingItem = cart.find(item => item.product.id === product.id);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ product, quantity });
  }
  
  saveCart(cart);
};

export const removeFromCart = (productId: string): void => {
  const cart = getCart();
  const updatedCart = cart.filter(item => item.product.id !== productId);
  saveCart(updatedCart);
};

export const updateCartItemQuantity = (productId: string, quantity: number): void => {
  const cart = getCart();
  const item = cart.find(item => item.product.id === productId);
  
  if (item) {
    item.quantity = quantity;
    saveCart(cart);
  }
};

// Wishlist related storage functions
export const getWishlist = (): Product[] => {
  const userId = getCurrentUserId();
  if (!userId) return [];
  
  const wishlistKey = `wishlist_${userId}`;
  const wishlist = localStorage.getItem(wishlistKey);
  return wishlist ? JSON.parse(wishlist) : [];
};

export const saveWishlist = (wishlist: Product[]): void => {
  const userId = getCurrentUserId();
  if (!userId) return;
  
  const wishlistKey = `wishlist_${userId}`;
  localStorage.setItem(wishlistKey, JSON.stringify(wishlist));
};

export const addToWishlist = (product: Product): void => {
  const wishlist = getWishlist();
  const exists = wishlist.some(item => item.id === product.id);
  
  if (!exists) {
    wishlist.push(product);
    saveWishlist(wishlist);
  }
};

export const removeFromWishlist = (productId: string): void => {
  const wishlist = getWishlist();
  const updatedWishlist = wishlist.filter(item => item.id !== productId);
  saveWishlist(updatedWishlist);
};

// Order related storage functions
export const getOrders = (): Order[] => {
  const userId = getCurrentUserId();
  if (!userId) return [];
  
  const ordersKey = `orders_${userId}`;
  const orders = localStorage.getItem(ordersKey);
  return orders ? JSON.parse(orders) : [];
};

export const saveOrder = (order: Order): void => {
  const userId = getCurrentUserId();
  if (!userId) return;
  
  const orders = getOrders();
  orders.push(order);
  
  const ordersKey = `orders_${userId}`;
  localStorage.setItem(ordersKey, JSON.stringify(orders));
};
