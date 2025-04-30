
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  const { addItem: addToWishlist, isInWishlist, removeItem: removeFromWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id);
  
  const handleAddToCart = () => {
    addItem(product, 1);
  };
  
  const handleWishlistToggle = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };
  
  // Calculate discounted price if there's a discount
  const discountedPrice = product.discountPercentage 
    ? (product.price * (1 - product.discountPercentage / 100)).toFixed(2)
    : null;
  
  return (
    <div className="bg-white rounded-xl overflow-hidden product-card shadow-md border border-indigo-50">
      {/* Discount Badge */}
      {product.discountPercentage && (
        <div className="absolute top-3 left-3 bg-secondary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
          {product.discountPercentage}% OFF
        </div>
      )}
      
      {/* Wishlist Button */}
      <button 
        onClick={handleWishlistToggle}
        className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md z-10 transition-transform hover:scale-110"
        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart 
          size={18} 
          className={isWishlisted ? "fill-pink-500 text-pink-500" : "text-gray-500"}
        />
      </button>

      {/* Product Image */}
      <Link to={`/products/${product.id}`} className="block overflow-hidden">
        <div className="h-56 overflow-hidden relative">
          <img 
            src={product.imageUrl} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-5">
        {/* Category Badge */}
        <div className={`mb-2 inline-block category-badge category-${product.category}`}>
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </div>
        
        {/* Product Name */}
        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        {/* Rating */}
        <div className="mt-2 flex items-center">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={15}
                className={`${
                  i < Math.round(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-xs text-gray-600">({product.rating})</span>
        </div>
        
        {/* Price */}
        <div className="mt-3 flex items-center">
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
          onClick={handleAddToCart}
          className="mt-4 w-full flex items-center justify-center gap-2 py-5 bg-gradient-to-r from-primary to-primary-700"
        >
          <ShoppingCart size={16} />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
