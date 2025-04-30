
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2, ShoppingCart, ArrowRight } from 'lucide-react';

const Cart = () => {
  const { items, removeItem, updateQuantity, getTotalItems, getTotalPrice } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  // If user is not authenticated, redirect to login
  if (!isAuthenticated) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="bg-white p-8 rounded-lg shadow-sm max-w-md mx-auto">
            <ShoppingCart size={48} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Your cart is waiting</h2>
            <p className="text-gray-600 mb-6">Please log in to view your cart and complete your purchase.</p>
            <Link to="/login">
              <Button className="w-full">Log In</Button>
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              Don't have an account?{' '}
              <Link to="/signup" className="text-primary hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </Layout>
    );
  }
  
  // If cart is empty
  if (items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="bg-white p-8 rounded-lg shadow-sm max-w-md mx-auto">
            <ShoppingCart size={48} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Looks like you haven't added any products to your cart yet.</p>
            <Link to="/products">
              <Button className="w-full">Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Table Header - Only visible on larger screens */}
              <div className="hidden md:grid grid-cols-12 gap-4 p-4 font-medium text-gray-700 bg-gray-50">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-1 text-center">Remove</div>
              </div>
              
              {/* Cart Items */}
              <div className="divide-y divide-gray-200">
                {items.map((item) => {
                  // Calculate item price (consider discounts)
                  const itemPrice = item.product.discountPercentage
                    ? item.product.price * (1 - item.product.discountPercentage / 100)
                    : item.product.price;
                  
                  return (
                    <div key={item.product.id} className="p-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                      {/* Product Info */}
                      <div className="col-span-1 md:col-span-6 flex items-center space-x-4">
                        <Link to={`/products/${item.product.id}`} className="w-20 h-20 flex-shrink-0">
                          <img
                            src={item.product.imageUrl}
                            alt={item.product.name}
                            className="w-full h-full object-cover rounded-md"
                          />
                        </Link>
                        <div>
                          <Link
                            to={`/products/${item.product.id}`}
                            className="font-medium text-gray-800 hover:text-primary"
                          >
                            {item.product.name}
                          </Link>
                          <p className="text-sm text-gray-500">{item.product.unit}</p>
                        </div>
                      </div>
                      
                      {/* Price */}
                      <div className="col-span-1 md:col-span-2 text-center flex md:block items-center justify-between">
                        <span className="md:hidden text-gray-600">Price:</span>
                        <span className="font-medium">${itemPrice.toFixed(2)}</span>
                      </div>
                      
                      {/* Quantity */}
                      <div className="col-span-1 md:col-span-3 flex items-center justify-between md:justify-center">
                        <span className="md:hidden text-gray-600">Quantity:</span>
                        <div className="flex items-center">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 rounded-l-md border border-gray-300 bg-gray-100"
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={14} />
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => {
                              const value = parseInt(e.target.value);
                              if (!isNaN(value) && value >= 1 && value <= item.product.stock) {
                                updateQuantity(item.product.id, value);
                              }
                            }}
                            className="w-12 p-1 text-center border-y border-gray-300"
                            min="1"
                            max={item.product.stock}
                          />
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 rounded-r-md border border-gray-300 bg-gray-100"
                            disabled={item.quantity >= item.product.stock}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                      
                      {/* Remove Button */}
                      <div className="col-span-1 text-center flex md:block items-center justify-between">
                        <span className="md:hidden text-gray-600">Remove:</span>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="text-red-500 hover:text-red-700"
                          aria-label="Remove item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Continue Shopping Link */}
            <div className="mt-6">
              <Link to="/products" className="text-primary hover:underline flex items-center">
                <ArrowRight size={16} className="mr-1 transform rotate-180" />
                Continue Shopping
              </Link>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-3 pb-4 border-b border-gray-200">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({getTotalItems()} items)</span>
                  <span className="font-medium">${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${(getTotalPrice() * 0.1).toFixed(2)}</span>
                </div>
              </div>
              
              <div className="flex justify-between py-4 border-b border-gray-200">
                <span className="text-lg font-bold">Total</span>
                <span className="text-lg font-bold text-primary">
                  ${(getTotalPrice() + (getTotalPrice() * 0.1)).toFixed(2)}
                </span>
              </div>
              
              <Button onClick={() => navigate('/checkout')} className="w-full mt-6">
                Proceed to Checkout
              </Button>
              
              <div className="mt-6 text-center text-sm text-gray-500">
                <p>We accept:</p>
                <div className="flex justify-center space-x-2 mt-2">
                  <img src="https://i.imgur.com/IHp6rjS.png" alt="Payment Methods" className="h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
