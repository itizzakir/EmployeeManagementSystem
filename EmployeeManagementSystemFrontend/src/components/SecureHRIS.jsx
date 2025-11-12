// src/components/SecureHRIS.jsx (Attachment 4: Modern employee-friendly HRIS)
import React from 'react';
// import profileImage from '../assets/profile-image.png';

const SecureHRIS = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">A Modern, Employee-Friendly HRIS</h2>
          <p className="text-xl text-gray-600">
            Empower's secure HRIS automates workflows, ensures compliance, and keeps everything connected in one place — no more manual hassle.
          </p>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700">
            Learn more
          </button>
        </div>
        <div className="flex-1 relative">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            {/* Profile card from image */}
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                alt="Profile"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-semibold">Amit</h4>
                <p className="text-sm text-gray-500">Last name</p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-sm">Email: amit@company.com</p>
              <button className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm">Active</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecureHRIS;