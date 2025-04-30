
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../types';
import { 
  saveUser, 
  getUserByEmail, 
  saveCurrentUser, 
  getCurrentUser, 
  logoutUser, 
  updateUser 
} from '../utils/localStorage';
import { toast } from 'sonner';

interface AuthContextType {
  currentUser: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  signup: (name: string, email: string, password: string) => boolean;
  logout: () => void;
  updateProfile: (user: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Check if user is already logged in
    const user = getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    const user = getUserByEmail(email);
    
    if (!user || user.password !== password) {
      toast.error('Invalid email or password');
      return false;
    }
    
    saveCurrentUser(user.id);
    setCurrentUser(user);
    setIsAuthenticated(true);
    toast.success('Login successful');
    return true;
  };

  const signup = (name: string, email: string, password: string): boolean => {
    const existingUser = getUserByEmail(email);
    
    if (existingUser) {
      toast.error('Email already in use');
      return false;
    }
    
    const newUser: User = {
      id: uuidv4(),
      name,
      email,
      password
    };
    
    saveUser(newUser);
    saveCurrentUser(newUser.id);
    setCurrentUser(newUser);
    setIsAuthenticated(true);
    toast.success('Account created successfully');
    return true;
  };

  const logout = () => {
    logoutUser();
    setCurrentUser(null);
    setIsAuthenticated(false);
    toast.info('You have been logged out');
  };

  const updateProfile = (user: User) => {
    updateUser(user);
    setCurrentUser(user);
    toast.success('Profile updated successfully');
  };

  return (
    <AuthContext.Provider value={{ currentUser, isAuthenticated, login, signup, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
