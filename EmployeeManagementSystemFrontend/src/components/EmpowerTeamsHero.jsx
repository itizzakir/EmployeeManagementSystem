// src/components/EmpowerTeamsHero.jsx (Attachment 13: Empower teams with logos)
import React from 'react';

const EmpowerTeamsHero = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Empowering Teams at 1500+ Leading Organizations
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          HR shouldn’t be a trade-off between compliance & culture.
        </p>
        <button className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 mb-12">
          Book Your Demo
        </button>
        {/* Logos */}
        <div className="flex flex-wrap justify-center gap-12">
          <img src="https://via.placeholder.com/100x40?text=Spotify" alt="Spotify" className="h-10" />
          <img src="https://via.placeholder.com/100x40?text=Snocks" alt="Snocks" className="h-10" />
          {/* Add more */}
        </div>
      </div>
    </section>
  );
};

export default EmpowerTeamsHero;