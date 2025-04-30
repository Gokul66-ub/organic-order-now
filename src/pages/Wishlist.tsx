
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { useWishlist } from '../contexts/WishlistContext';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart } from 'lucide-react';

const Wishlist = () => {
  const { items, removeItem } = useWishlist();
  const { addItem } = useCart();
  const { isAuthenticated } = useAuth();
  
  // If user is not authenticated, redirect to login
  if (!isAuthenticated) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="bg-white p-8 rounded-lg shadow-sm max-w-md mx-auto">
            <Heart size={48} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Your wishlist is waiting</h2>
            <p className="text-gray-600 mb-6">Please log in to view your saved items.</p>
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
  
  // If wishlist is empty
  if (items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="bg-white p-8 rounded-lg shadow-sm max-w-md mx-auto">
            <Heart size={48} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-6">Save items you like by clicking the heart icon on any product.</p>
            <Link to="/products">
              <Button className="w-full">Browse Products</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Wishlist</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((product) => {
            // Calculate discounted price if there's a discount
            const discountedPrice = product.discountPercentage 
              ? (product.price * (1 - product.discountPercentage / 100)).toFixed(2)
              : null;
            
            return (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden relative product-card transition-all duration-300">
                {/* Remove Button */}
                <button 
                  onClick={() => removeItem(product.id)}
                  className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-sm z-10"
                >
                  <Heart size={18} className="fill-red-500 text-red-500" />
                </button>
                
                {/* Discount Badge */}
                {product.discountPercentage && (
                  <div className="absolute top-2 left-2 bg-secondary text-white text-xs font-semibold px-2 py-1 rounded-full">
                    {product.discountPercentage}% OFF
                  </div>
                )}
                
                {/* Product Image */}
                <Link to={`/products/${product.id}`}>
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </Link>
                
                {/* Product Info */}
                <div className="p-4">
                  {/* Category Badge */}
                  <div className={`mb-2 inline-block category-badge category-${product.category}`}>
                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                  </div>
                  
                  {/* Product Name */}
                  <Link to={`/products/${product.id}`}>
                    <h3 className="text-lg font-semibold text-gray-800 hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  
                  {/* Price */}
                  <div className="mt-2 flex items-center">
                    {discountedPrice ? (
                      <>
                        <span className="text-lg font-bold text-primary">${discountedPrice}</span>
                        <span className="ml-2 text-sm text-gray-500 line-through">${product.price.toFixed(2)}</span>
                      </>
                    ) : (
                      <span className="text-lg font-bold text-primary">${product.price.toFixed(2)}</span>
                    )}
                    <span className="ml-1 text-sm text-gray-600">/{product.unit}</span>
                  </div>
                  
                  {/* Add to Cart Button */}
                  <Button 
                    onClick={() => addItem(product, 1)}
                    className="mt-4 w-full flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-10 text-center">
          <Link to="/products">
            <Button variant="outline">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Wishlist;
