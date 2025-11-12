// src/components/ProgressStartsWithPeople.jsx (Attachment 14: Progress with people)
import React from 'react';
// import progressImage from '../assets/progress-image.png';

const ProgressStartsWithPeople = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold mb-4">Progress Starts with People, Not Paperwork</h2>
          <p className="text-lg mb-6">Free HR from admin overload and focus on what matters.</p>
          <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-100">
            See What's Possible
          </button>
        </div>
        {/* Icons below */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div><span className="text-4xl block">📋</span></div>
          <div><span className="text-4xl block">👥</span></div>
          <div><span className="text-4xl block">📈</span></div>
        </div>
        {/* Image */}
        <div className="mt-12 text-center">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Placeholder for admin to people focus
            alt="HR focusing on people"
            className="rounded-lg shadow-xl mx-auto max-w-4xl"
          />
        </div>
      </div>
    </section>
  );
};

export default ProgressStartsWithPeople;