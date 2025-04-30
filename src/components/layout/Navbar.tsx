
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';
import { 
  ShoppingCart, 
  Heart, 
  User, 
  Search, 
  Package, 
  Home, 
  PackageOpen, 
  Info, 
  X 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  isOpen: boolean;
  toggleNavbar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, toggleNavbar }) => {
  const { isAuthenticated, logout } = useAuth();
  const { getTotalItems } = useCart();
  const location = useLocation();
  
  return (
    <nav className={`vertical-navbar ${isOpen ? 'open' : ''}`}>
      <div className="flex flex-col h-full">
        {/* Mobile Close Button */}
        <div className="md:hidden flex justify-end p-4">
          <Button variant="ghost" size="icon" onClick={toggleNavbar} className="text-white hover:bg-white/10">
            <X size={24} />
          </Button>
        </div>
        
        {/* Logo */}
        <div className="p-6">
          <Link to="/" className="flex items-center space-x-2" onClick={() => toggleNavbar()}>
            <span className="text-white text-2xl font-bold">🥕 Fresh Mart</span>
          </Link>
        </div>
        
        {/* Search box */}
        <div className="px-6 py-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-indigo-300" />
            </div>
            <input 
              type="search" 
              placeholder="Search products..." 
              className="pl-10 pr-4 py-2 w-full border border-indigo-400/50 bg-indigo-50/10 rounded-lg text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>
        </div>
        
        {/* Navigation Links */}
        <div className="px-6 py-8 flex-grow">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`flex items-center px-4 py-3 rounded-lg transition-colors ${location.pathname === '/' 
                ? 'bg-white text-primary font-medium' 
                : 'text-white hover:bg-white/10'}`}
              onClick={() => toggleNavbar()}
            >
              <Home size={20} className="mr-3" />
              Home
            </Link>
            
            <Link 
              to="/products" 
              className={`flex items-center px-4 py-3 rounded-lg transition-colors ${location.pathname === '/products' 
                ? 'bg-white text-primary font-medium' 
                : 'text-white hover:bg-white/10'}`}
              onClick={() => toggleNavbar()}
            >
              <PackageOpen size={20} className="mr-3" />
              Products
            </Link>
            
            <Link 
              to="/about" 
              className={`flex items-center px-4 py-3 rounded-lg transition-colors ${location.pathname === '/about' 
                ? 'bg-white text-primary font-medium' 
                : 'text-white hover:bg-white/10'}`}
              onClick={() => toggleNavbar()}
            >
              <Info size={20} className="mr-3" />
              About
            </Link>
            
            {isAuthenticated && (
              <>
                <Link 
                  to="/orders" 
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${location.pathname === '/orders' 
                    ? 'bg-white text-primary font-medium' 
                    : 'text-white hover:bg-white/10'}`}
                  onClick={() => toggleNavbar()}
                >
                  <Package size={20} className="mr-3" />
                  Orders
                </Link>
                
                <Link 
                  to="/wishlist" 
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${location.pathname === '/wishlist' 
                    ? 'bg-white text-primary font-medium' 
                    : 'text-white hover:bg-white/10'}`}
                  onClick={() => toggleNavbar()}
                >
                  <Heart size={20} className="mr-3" />
                  Wishlist
                </Link>
              </>
            )}
          </div>
        </div>
        
        {/* User Actions */}
        <div className="mt-auto p-6 border-t border-indigo-500/50">
          {isAuthenticated ? (
            <div className="flex flex-col space-y-3">
              <Link 
                to="/cart" 
                className="flex items-center justify-between px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white"
                onClick={() => toggleNavbar()}
              >
                <div className="flex items-center">
                  <ShoppingCart size={20} className="mr-3" />
                  Cart
                </div>
                {getTotalItems() > 0 && (
                  <span className="bg-white text-primary font-bold text-xs rounded-full h-6 w-6 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Link>
              
              <Link 
                to="/profile" 
                className="flex items-center px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white"
                onClick={() => toggleNavbar()}
              >
                <User size={20} className="mr-3" />
                Profile
              </Link>
              
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary w-full mt-2"
                onClick={() => {
                  logout();
                  toggleNavbar();
                }}
              >
                Log out
              </Button>
            </div>
          ) : (
            <div className="flex flex-col space-y-3">
              <Link 
                to="/login" 
                className="w-full" 
                onClick={() => toggleNavbar()}
              >
                <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary">
                  Log in
                </Button>
              </Link>
              
              <Link 
                to="/signup" 
                className="w-full"
                onClick={() => toggleNavbar()}
              >
                <Button className="w-full bg-white text-primary hover:bg-indigo-100">
                  Sign up
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
