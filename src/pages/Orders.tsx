
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { useAuth } from '../contexts/AuthContext';
import { getOrders } from '../utils/localStorage';
import { Button } from '@/components/ui/button';
import { User, Package } from 'lucide-react';

const Orders = () => {
  const { currentUser, isAuthenticated } = useAuth();
  const orders = getOrders();
  
  // If user is not authenticated, redirect to login
  if (!isAuthenticated || !currentUser) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="bg-white p-8 rounded-lg shadow-sm max-w-md mx-auto">
            <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <User size={40} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Account Access Required</h2>
            <p className="text-gray-600 mb-6">Please log in to view your order history.</p>
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
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Order History</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <User size={24} className="text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">{currentUser.name}</h3>
                    <p className="text-sm text-gray-500">{currentUser.email}</p>
                  </div>
                </div>
              </div>
              
              <nav className="p-4">
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50"
                    >
                      Personal Information
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/orders"
                      className="block px-4 py-2 rounded-md bg-primary-100 text-primary font-medium"
                    >
                      Order History
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/wishlist"
                      className="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50"
                    >
                      Wishlist
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            {orders.length > 0 ? (
              <div className="space-y-6">
                {orders.map((order) => (
                  <div key={order.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    {/* Order Header */}
                    <div className="p-6 border-b border-gray-200">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-medium text-lg">Order #{order.id.slice(0, 8)}</h3>
                          <p className="text-sm text-gray-500">
                            Placed on {new Date(order.date).toLocaleDateString()}
                          </p>
                        </div>
                        <div>
                          <span 
                            className={`px-3 py-1 text-xs font-medium rounded-full ${
                              order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                              order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                              order.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                              order.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                              'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Order Items */}
                    <div className="p-6 border-b border-gray-200">
                      <h4 className="font-medium mb-4">Items</h4>
                      <div className="space-y-4">
                        {order.items.map((item) => (
                          <div key={item.product.id} className="flex items-center">
                            <div className="w-16 h-16 flex-shrink-0">
                              <img
                                src={item.product.imageUrl}
                                alt={item.product.name}
                                className="w-full h-full object-cover rounded-md"
                              />
                            </div>
                            <div className="ml-4 flex-grow">
                              <h5 className="font-medium">{item.product.name}</h5>
                              <p className="text-sm text-gray-500">
                                Quantity: {item.quantity} x ${item.product.price.toFixed(2)}
                              </p>
                            </div>
                            <div>
                              <span className="font-medium">
                                ${(item.quantity * item.product.price).toFixed(2)}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Order Summary */}
                    <div className="p-6 border-b border-gray-200 bg-gray-50">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">Order Total:</h4>
                        <span className="text-lg font-bold text-primary">${order.total.toFixed(2)}</span>
                      </div>
                    </div>
                    
                    {/* Order Actions */}
                    <div className="p-6 flex justify-between items-center">
                      <Link to="/products" className="text-primary hover:underline">
                        Buy Again
                      </Link>
                      <Button variant="outline">Track Order</Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <Package size={48} className="mx-auto text-gray-400 mb-4" />
                <h2 className="text-2xl font-bold mb-4">No Orders Yet</h2>
                <p className="text-gray-600 mb-6">
                  You haven't placed any orders yet. Start shopping to see your orders here.
                </p>
                <Link to="/products">
                  <Button>Shop Now</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
