
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { Heart, ShoppingCart } from 'lucide-react';
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
    <div className="bg-white rounded-lg shadow-md overflow-hidden product-card transition-all duration-300">
      {/* Discount Badge */}
      {product.discountPercentage && (
        <div className="absolute top-2 left-2 bg-secondary text-white text-xs font-semibold px-2 py-1 rounded-full">
          {product.discountPercentage}% OFF
        </div>
      )}
      
      {/* Wishlist Button */}
      <button 
        onClick={handleWishlistToggle}
        className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-sm z-10"
      >
        <Heart 
          size={18} 
          className={isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400"}
        />
      </button>

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
        
        {/* Rating */}
        <div className="mt-2 flex items-center">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="ml-1 text-xs text-gray-600">({product.rating})</span>
        </div>
        
        {/* Add to Cart Button */}
        <Button 
          onClick={handleAddToCart}
          className="mt-4 w-full flex items-center justify-center gap-2"
        >
          <ShoppingCart size={16} />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
