
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';
import { ShoppingCart, Heart, User, Search, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const { getTotalItems } = useCart();
  const location = useLocation();
  
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-primary text-2xl font-bold">🥕 Fresh Mart</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`hover:text-primary ${location.pathname === '/' ? 'text-primary font-medium' : 'text-gray-600'}`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`hover:text-primary ${location.pathname === '/products' ? 'text-primary font-medium' : 'text-gray-600'}`}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-primary ${location.pathname === '/about' ? 'text-primary font-medium' : 'text-gray-600'}`}
            >
              About
            </Link>
          </div>
          
          {/* Search bar */}
          <div className="hidden md:flex relative flex-grow max-w-md mx-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input 
              type="search" 
              placeholder="Search products..." 
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            />
          </div>
          
          {/* Action buttons */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link to="/wishlist" className="relative text-gray-600 hover:text-primary">
                  <Heart size={20} />
                </Link>
                <Link to="/cart" className="relative text-gray-600 hover:text-primary">
                  <ShoppingCart size={20} />
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {getTotalItems()}
                    </span>
                  )}
                </Link>
                <Link to="/orders" className="relative text-gray-600 hover:text-primary hidden md:block">
                  <Package size={20} />
                </Link>
                <div className="relative group">
                  <button className="text-gray-600 hover:text-primary">
                    <User size={20} />
                  </button>
                  <div className="absolute right-0 w-48 py-2 bg-white rounded-md shadow-xl z-20 hidden group-hover:block">
                    <Link 
                      to="/profile" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <Link 
                      to="/orders" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 md:hidden"
                    >
                      My Orders
                    </Link>
                    <button 
                      onClick={logout} 
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Log out
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" className="hidden md:inline-flex">
                    Log in
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="hidden md:inline-flex">
                    Sign up
                  </Button>
                </Link>
                <Link to="/login" className="md:hidden text-gray-600 hover:text-primary">
                  <User size={20} />
                </Link>
              </>
            )}
          </div>
        </div>
        
        {/* Mobile search - visible only on mobile */}
        <div className="pb-4 md:hidden">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input 
              type="search" 
              placeholder="Search products..." 
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            />
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-gray-200">
          <div className="flex justify-between py-2">
            <Link 
              to="/" 
              className={`flex-1 text-center py-2 ${location.pathname === '/' ? 'text-primary font-medium' : 'text-gray-600'}`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`flex-1 text-center py-2 ${location.pathname === '/products' ? 'text-primary font-medium' : 'text-gray-600'}`}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className={`flex-1 text-center py-2 ${location.pathname === '/about' ? 'text-primary font-medium' : 'text-gray-600'}`}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
