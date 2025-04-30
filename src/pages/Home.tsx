
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ProductGrid from '../components/product/ProductGrid';
import { Button } from '@/components/ui/button';
import { products, categories } from '../utils/sampleData';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  // Get featured products (first 8)
  const featuredProducts = products.slice(0, 8);
  
  // Get discounted products
  const discountedProducts = products.filter(product => product.discountPercentage).slice(0, 4);
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section py-24 text-white">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Fresh Organic Groceries</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Delivered to your doorstep. Farm-fresh produce, sustainably sourced and carefully selected for your family.
          </p>
          <Link to="/products">
            <Button className="text-lg py-6 px-8">Shop Now</Button>
          </Link>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
            {categories.slice(1).map((category) => (
              <Link
                key={category.id}
                to={`/products?category=${category.name}`}
                className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow"
              >
                <span className="text-3xl mb-2">{category.icon}</span>
                <span className="font-medium capitalize">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link to="/products" className="text-primary flex items-center hover:underline">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>
      
      {/* Special Offers Section */}
      <section className="py-16 bg-primary-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Special Offers</h2>
          <ProductGrid products={discountedProducts} />
          <div className="text-center mt-10">
            <Link to="/products">
              <Button>View All Offers</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Fresh Mart?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">100% Organic</h3>
              <p className="text-gray-600">All our products are certified organic and sustainably sourced from trusted farmers.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-gray-600">We deliver your order within 24 hours to ensure maximum freshness.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Payment</h3>
              <p className="text-gray-600">Multiple secure payment options for your convenience and safety.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-8">Stay updated with our latest products, special offers, and healthy recipes!</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg focus:ring-primary focus:border-primary"
                required
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
