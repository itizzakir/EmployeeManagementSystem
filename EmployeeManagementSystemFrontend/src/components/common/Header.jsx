// src/components/common/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false); 

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Logo />
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/#features"
              className="text-slate-600 hover:text-purple-600 transition-colors"
            >
              Features
            </a>
            <a
              href="/#integrations"
              className="text-slate-600 hover:text-purple-600 transition-colors"
            >
              Integrations
            </a>
            <a
              href="/#customers"
              className="text-slate-600 hover:text-purple-600 transition-colors"
            >
              Customers
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsLoginOpen(!isLoginOpen)}
                className="text-slate-600 font-medium hover:text-purple-600 transition-colors"
              >
                Log In
              </button>
              {isLoginOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-slate-200">
                  <Link
                    to="/login/admin"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                    onClick={() => setIsLoginOpen(false)}
                  >
                    Admin Login
                  </Link>
                  <Link
                    to="/login/employee"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                    onClick={() => setIsLoginOpen(false)}
                  >
                    Employee Login
                  </Link>
                </div>
              )}
            </div>
            {/* ✨ Changed "Get Started Free" to "Admin Signup" */}
            <Link
              to="/signup/admin"
              className="bg-purple-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors shadow-sm"
            >
              Admin Signup
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;