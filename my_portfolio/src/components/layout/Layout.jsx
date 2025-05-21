// src/components/layout/Layout.jsx
import { useState } from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Mobile menu button */}
      <div className="block md:hidden absolute top-4 left-4 z-50">
        <button onClick={toggleMenu} className="text-cyan-400 p-2">
          <div className="flex flex-col space-y-1.5">
            <div className="w-6 h-0.5 bg-cyan-400"></div>
            <div className="w-6 h-0.5 bg-cyan-400"></div>
            <div className="w-6 h-0.5 bg-cyan-400"></div>
          </div>
        </button>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* Main Content */}
      <div className="ml-0 md:ml-48 p-4">
        {children}
      </div>
    </div>
  );
};

export default Layout;