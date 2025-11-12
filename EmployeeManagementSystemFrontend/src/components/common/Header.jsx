import React from 'react';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Logo />
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-600 hover:text-purple-600 transition-colors">Features</a>
            <a href="#integrations" className="text-slate-600 hover:text-purple-600 transition-colors">Integrations</a>
            <a href="#pricing" className="text-slate-600 hover:text-purple-600 transition-colors">Pricing</a>
            <a href="#customers" className="text-slate-600 hover:text-purple-600 transition-colors">Customers</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-slate-600 font-medium hover:text-purple-600 transition-colors">Log In</button>
            <button className="bg-purple-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors shadow-sm">
              Get Started Free
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};export default Header;