
import React, { ReactNode, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  
  return (
    <div className="sidebar-layout">
      <Button 
        variant="outline" 
        size="icon" 
        className="mobile-toggle rounded-full bg-white shadow-md"
        onClick={toggleMobileNav}
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle menu</span>
      </Button>
      
      <Navbar isOpen={isMobileNavOpen} toggleNavbar={toggleMobileNav} />
      
      <div className="main-content">
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
