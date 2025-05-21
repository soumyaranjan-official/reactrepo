// src/components/layout/Sidebar.jsx (with routing)
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';

const Sidebar = ({ isOpen, toggleMenu }) => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className={`fixed top-0 left-0 h-full w-48 bg-black border-r border-gray-800 z-40 transition-transform duration-300 ${isOpen ? 'transform-none' : '-translate-x-full md:translate-x-0'}`}>
      <div className="flex justify-end p-4 md:hidden">
        <button onClick={toggleMenu} className="text-cyan-400">
          <X size={20} />
        </button>
      </div>
      <nav className="flex flex-col mt-8">
        <Link to="/" className={`py-3 px-6 font-medium hover:bg-gray-900 ${isActive('/') ? 'text-cyan-400' : 'text-white'}`}>Home</Link>
        <Link to="/about" className={`py-3 px-6 font-medium hover:bg-gray-900 ${isActive('/about') ? 'text-cyan-400' : 'text-white'}`}>About</Link>
        <Link to="/resume" className={`py-3 px-6 font-medium hover:bg-gray-900 ${isActive('/resume') ? 'text-cyan-400' : 'text-white'}`}>Resume</Link>
        <Link to="/projects" className={`py-3 px-6 font-medium hover:bg-gray-900 ${isActive('/projects') ? 'text-cyan-400' : 'text-white'}`}>Projects And Blogs</Link>
        <Link to="/hobbies" className={`py-3 px-6 font-medium hover:bg-gray-900 ${isActive('/hobbies') ? 'text-cyan-400' : 'text-white'}`}>Hobbies</Link>
        <Link to="/contact" className={`py-3 px-6 font-medium hover:bg-gray-900 ${isActive('/contact') ? 'text-cyan-400' : 'text-white'}`}>Contact</Link>
      </nav>
    </div>
  );
};

export default Sidebar;