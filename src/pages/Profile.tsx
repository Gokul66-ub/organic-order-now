import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { User as UserIcon } from 'lucide-react';
import { User } from '../types';
import { toast } from 'sonner';

const Profile = () => {
  const { currentUser, isAuthenticated, updateProfile } = useAuth();
  const [formData, setFormData] = useState<Partial<User>>({
    name: '',
    email: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
    },
    phone: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  
  useEffect(() => {
    if (currentUser) {
      setFormData({
        ...currentUser,
        address: currentUser.address || {
          street: '',
          city: '',
          state: '',
          zipCode: '',
          country: '',
        },
      });
    }
  }, [currentUser]);
  
  // If user is not authenticated, redirect to login
  if (!isAuthenticated || !currentUser) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="bg-white p-8 rounded-lg shadow-sm max-w-md mx-auto">
            <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <UserIcon size={40} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Account Access Required</h2>
            <p className="text-gray-600 mb-6">Please log in to view and manage your profile.</p>
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
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData({
        ...formData,
        [parent]: {
          ...(formData[parent as keyof typeof formData] as any),
          [child]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!currentUser) return;
    
    // Update user profile
    updateProfile({
      ...currentUser,
      ...formData,
    } as User);
    
    setIsEditing(false);
    toast.success("Profile updated successfully!");
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Profile</h1>
        
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
                      className="block px-4 py-2 rounded-md bg-primary-100 text-primary font-medium"
                    >
                      Personal Information
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/orders"
                      className="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50"
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
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Personal Information</h2>
                {!isEditing && (
                  <Button onClick={() => setIsEditing(true)} variant="outline">
                    Edit
                  </Button>
                )}
              </div>
              
              <form onSubmit={handleSubmit}>
                {/* Basic Information */}
                <div className="mb-6">
                  <h3 className="font-medium text-gray-700 mb-4">Basic Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary disabled:bg-gray-50 disabled:text-gray-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email || ''}
                        onChange={handleInputChange}
                        disabled={true} // Email cannot be changed
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary bg-gray-50 text-gray-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary disabled:bg-gray-50 disabled:text-gray-500"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Address Information */}
                <div>
                  <h3 className="font-medium text-gray-700 mb-4">Address Information</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">
                        Street Address
                      </label>
                      <input
                        type="text"
                        id="street"
                        name="address.street"
                        value={formData.address?.street || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary disabled:bg-gray-50 disabled:text-gray-500"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="address.city"
                          value={formData.address?.city || ''}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary disabled:bg-gray-50 disabled:text-gray-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                          State/Province
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="address.state"
                          value={formData.address?.state || ''}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary disabled:bg-gray-50 disabled:text-gray-500"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                          ZIP/Postal Code
                        </label>
                        <input
                          type="text"
                          id="zipCode"
                          name="address.zipCode"
                          value={formData.address?.zipCode || ''}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary disabled:bg-gray-50 disabled:text-gray-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                          Country
                        </label>
                        <input
                          type="text"
                          id="country"
                          name="address.country"
                          value={formData.address?.country || ''}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary disabled:bg-gray-50 disabled:text-gray-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                {isEditing && (
                  <div className="mt-6 flex justify-end space-x-4">
                    <Button onClick={() => setIsEditing(false)} variant="outline" type="button">
                      Cancel
                    </Button>
                    <Button type="submit">
                      Save Changes
                    </Button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
