// src/components/Footer.jsx (Attachment 11: Footer)
import React from 'react';
import Logo from './Logo';

const Footer = ({ currentYear }) => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div className="col-span-1">
          <Logo /> {/* Reuse, but white */}
          <p className="text-gray-400 mt-4">Empowering businesses with smart employee management.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Documents</a></li>
            <li><a href="#" className="hover:text-white">ROI Calculator</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Partners</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Team & Pricing</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; {currentYear} Empower. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;