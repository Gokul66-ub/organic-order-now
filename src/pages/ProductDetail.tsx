
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { products } from '../utils/sampleData';
import { Product } from '../types';
import { Button } from '@/components/ui/button';
import { Heart, Minus, Plus, ShoppingCart, ArrowLeft } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import ProductGrid from '../components/product/ProductGrid';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const { addItem } = useCart();
  const { addItem: addToWishlist, isInWishlist, removeItem: removeFromWishlist } = useWishlist();
  
  useEffect(() => {
    // Find the product with the matching ID
    const foundProduct = products.find(p => p.id === id);
    
    if (foundProduct) {
      setProduct(foundProduct);
      
      // Find related products (same category, excluding current product)
      const related = products
        .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4);
      
      setRelatedProducts(related);
    }
  }, [id]);
  
  const handleQuantityChange = (value: number) => {
    const newQuantity = quantity + value;
    if (newQuantity >= 1 && newQuantity <= (product?.stock || 10)) {
      setQuantity(newQuantity);
    }
  };
  
  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
    }
  };
  
  const handleWishlistToggle = () => {
    if (!product) return;
    
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };
  
  // Calculate discounted price if there's a discount
  const discountedPrice = product?.discountPercentage 
    ? (product.price * (1 - product.discountPercentage / 100)).toFixed(2)
    : null;
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold">Product not found</h2>
          <p className="mt-4">The product you are looking for does not exist.</p>
          <Link to="/products" className="mt-6 inline-block text-primary hover:underline">
            Return to Products
          </Link>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/products" className="flex items-center text-primary hover:underline">
            <ArrowLeft size={16} className="mr-1" />
            Back to Products
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="bg-white rounded-lg overflow-hidden">
            <img src={product.imageUrl} alt={product.name} className="w-full h-auto object-cover" />
          </div>
          
          {/* Product Details */}
          <div>
            {/* Category Badge */}
            <div className={`mb-2 inline-block category-badge category-${product.category}`}>
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </div>
            
            {/* Product Name */}
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            
            {/* Rating */}
            <div className="mt-2 flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-gray-600">({product.rating})</span>
            </div>
            
            {/* Price */}
            <div className="mt-4">
              {discountedPrice ? (
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-primary">${discountedPrice}</span>
                  <span className="ml-3 text-lg text-gray-500 line-through">${product.price.toFixed(2)}</span>
                  <span className="ml-3 bg-secondary text-white text-sm font-semibold px-2 py-1 rounded-full">
                    {product.discountPercentage}% OFF
                  </span>
                </div>
              ) : (
                <span className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</span>
              )}
              <span className="ml-1 text-gray-600">/{product.unit}</span>
            </div>
            
            {/* Description */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
            
            {/* Stock */}
            <div className="mt-6">
              <span className={`${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
              </span>
            </div>
            
            {/* Quantity Selector */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Quantity</h3>
              <div className="flex items-center">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="p-2 rounded-l-lg border border-gray-300 bg-gray-100"
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    if (!isNaN(value) && value >= 1 && value <= product.stock) {
                      setQuantity(value);
                    }
                  }}
                  className="w-16 p-2 text-center border-y border-gray-300"
                  min="1"
                  max={product.stock}
                />
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="p-2 rounded-r-lg border border-gray-300 bg-gray-100"
                  disabled={quantity >= product.stock}
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2"
                disabled={product.stock <= 0}
              >
                <ShoppingCart size={18} />
                Add to Cart
              </Button>
              <Button 
                onClick={handleWishlistToggle}
                variant="outline"
                className={`flex-1 flex items-center justify-center gap-2 ${
                  isInWishlist(product.id) ? 'border-red-500 text-red-500 hover:bg-red-50' : ''
                }`}
              >
                <Heart 
                  size={18} 
                  className={isInWishlist(product.id) ? "fill-red-500" : ""} 
                />
                {isInWishlist(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
            <ProductGrid products={relatedProducts} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
