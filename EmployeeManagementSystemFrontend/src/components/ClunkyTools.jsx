// src/components/ClunkyTools.jsx (Attachment 5: Clunky tools vs platform)
import React from 'react';
// import logos from '../assets/logos.png'; // Parloa, etc. - replace with Empower partners

const ClunkyTools = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Your People Deserve More Than Clunky Tools and HR Spreadsheets
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Give them a platform that saves time for HR and builds growth. Empowering teams at 1500+ organizations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-purple-700">
            Request a Demo
          </button>
        </div>
        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          <img src="https://via.placeholder.com/100x40?text=Partner1" alt="Partner" className="h-10" />
          <img src="https://via.placeholder.com/100x40?text=Partner2" alt="Partner" className="h-10" />
          {/* Add more */}
        </div>
        {/* Badges */}
        <div className="grid md:grid-cols-3 gap-4 mt-12">
          <div className="bg-purple-100 p-4 rounded">
            <h4>Best Results</h4>
          </div>
          <div className="bg-indigo-100 p-4 rounded">
            <h4>Best UX</h4>
          </div>
          <div className="bg-blue-100 p-4 rounded">
            <h4>Best Support</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClunkyTools;