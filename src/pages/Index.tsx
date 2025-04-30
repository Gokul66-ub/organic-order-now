
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingBag, ShieldCheck, Truck, Users } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-800 text-white py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                Shop Smart, Live Better
              </h1>
              <p className="text-xl mb-8 text-white/90 max-w-md">
                Discover quality products at competitive prices. Join thousands of satisfied customers today.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    <ShoppingBag className="mr-2 h-5 w-5" /> Shop Now
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Shopping Experience" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <ShoppingBag className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Quality Products</h3>
              <p className="text-gray-600 text-center">Carefully selected inventory to ensure you get the best.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Truck className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Fast Delivery</h3>
              <p className="text-gray-600 text-center">Quick and reliable shipping to your doorstep.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <ShieldCheck className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Secure Payments</h3>
              <p className="text-gray-600 text-center">Your transactions are protected with advanced encryption.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Customer Support</h3>
              <p className="text-gray-600 text-center">Dedicated team ready to assist you anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-secondary-600 text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Shopping?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join our community of smart shoppers and discover a better way to shop online.
          </p>
          <Link to="/signup">
            <Button size="lg" className="bg-white text-secondary hover:bg-white/90">
              Create an Account
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
