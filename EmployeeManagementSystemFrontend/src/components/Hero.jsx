// src/components/Hero.jsx (Based on attachments 1, 13, 14 - Combined hero layout)
import React from 'react';
// import heroImage from '../assets/hero-image.png'; // Professional office collaboration image

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Empower — The Smarter Way to Manage Your Workforce
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Streamline employee management, attendance, payroll, and performance — all in one powerful platform. Automate admin tasks, boost engagement, and keep teams thriving.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-purple-700 transition">
            Get Started
          </button>
          <button className="border border-purple-600 text-purple-600 px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition">
            Request Demo
          </button>
        </div>
        {/* Hero image - adapt from attachment 1/14: Women collaborating in office */}
        <div className="relative max-w-4xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" // Placeholder for HR/office image
            alt="Team collaborating on employee management"
            className="rounded-lg shadow-xl mx-auto"
          />
          {/* Overlay elements from image 1: Speech bubbles, etc. - simplified */}
          <div className="absolute top-10 left-10 bg-orange-100 p-4 rounded-lg text-sm">
            Add your team
          </div>
          <div className="absolute bottom-10 right-10 bg-purple-100 p-4 rounded-lg text-sm">
            Lauren
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;