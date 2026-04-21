import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Franchise', path: '/franchise' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Contact', path: '/contact' },
  ];

  const activeLinkClass = ({ isActive }) =>
    cn(
      'text-sm font-medium transition-all px-4 py-2 rounded-full',
      isActive ? 'bg-slate-100 text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
    );

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 w-full px-4 flex justify-center">
      <div className="w-full max-w-6xl bg-white/70 backdrop-blur-xl border border-slate-200/50 rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]">
        <div className="flex justify-between items-center px-6 h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="flex items-center">
              <img src={logo} alt="Novatrix Formulations Logo" className="h-12 md:h-14 w-auto object-contain" />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={activeLinkClass}>
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-slate-500 hover:text-slate-900 transition-colors hover:bg-slate-100 p-2.5 rounded-full">
              <Search className="w-4 h-4" />
            </button>
            <NavLink 
              to="/contact" 
              className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-transform hover:-translate-y-0.5 shadow-[0_10px_20px_-10px_rgba(14,165,233,0.5)]"
            >
              Get Quote
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
             <NavLink 
              to="/contact" 
              className="bg-[#0ea5e9] text-white px-4 py-1.5 rounded-full font-semibold text-xs shadow-sm"
            >
              Quote
            </NavLink>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-500 hover:text-slate-900 focus:outline-none p-1.5 hover:bg-slate-100 rounded-full"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-[32px] shadow-2xl shadow-slate-200/50 p-3 overflow-hidden">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'block px-5 py-3.5 rounded-2xl text-base font-medium transition-all',
                    isActive ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
