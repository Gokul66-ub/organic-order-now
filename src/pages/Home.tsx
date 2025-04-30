
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ProductGrid from '../components/product/ProductGrid';
import { Button } from '@/components/ui/button';
import { products, categories } from '../utils/sampleData';
import { ArrowRight, ShieldCheck, Truck, Leaf, Star } from 'lucide-react';

const Home = () => {
  // Get featured products (first 8)
  const featuredProducts = products.slice(0, 8);
  
  // Get discounted products
  const discountedProducts = products.filter(product => product.discountPercentage).slice(0, 4);
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section py-28 text-white">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Fresh &amp; Healthy Groceries
              <span className="block text-secondary-100">Delivered to Your Door</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/80">
              Farm-fresh produce, sustainably sourced and carefully selected for your family.
              Experience the difference quality makes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/products">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg">
                  Shop Now
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-b from-indigo-50/50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 text-gradient">Shop by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Browse our wide selection of fresh, organic products organized by category</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6">
            {categories.slice(1).map((category) => (
              <Link
                key={category.id}
                to={`/products?category=${category.name}`}
                className="glass-card hover:shadow-xl transition-all hover:-translate-y-1 text-center flex flex-col items-center p-6 rounded-xl"
              >
                <span className="text-3xl mb-3">{category.icon}</span>
                <span className="font-medium capitalize text-gray-800">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-20 grid-pattern">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gradient">Featured Products</h2>
              <p className="text-gray-600 mt-2">Handpicked selections from our best products</p>
            </div>
            <Link to="/products" className="text-primary flex items-center font-medium hover:underline">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>
      
      {/* Special Offers Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 text-gradient">Special Offers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Limited-time discounts on selected products</p>
          </div>
          <ProductGrid products={discountedProducts} />
          <div className="text-center mt-12">
            <Link to="/products">
              <Button>View All Offers</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 text-gradient">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We're committed to providing the best shopping experience</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="glass-card p-8 rounded-xl hover:shadow-md transition-all text-center">
              <div className="bg-primary/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">100% Organic</h3>
              <p className="text-gray-600">All our products are certified organic and sustainably sourced from trusted farmers.</p>
            </div>
            <div className="glass-card p-8 rounded-xl hover:shadow-md transition-all text-center">
              <div className="bg-primary/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-gray-600">We deliver your order within 24 hours to ensure maximum freshness.</p>
            </div>
            <div className="glass-card p-8 rounded-xl hover:shadow-md transition-all text-center">
              <div className="bg-primary/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Payment</h3>
              <p className="text-gray-600">Multiple secure payment options for your convenience and safety.</p>
            </div>
            <div className="glass-card p-8 rounded-xl hover:shadow-md transition-all text-center">
              <div className="bg-primary/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Guarantee</h3>
              <p className="text-gray-600">We stand behind the quality of every product we sell.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-white/80 mb-8">Stay updated with our latest products, special offers, and healthy recipes!</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-6 py-4 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent text-gray-800"
                required
              />
              <Button type="submit" className="bg-white text-primary hover:bg-indigo-100 px-8 py-4">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
