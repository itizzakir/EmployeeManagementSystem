// src/components/PeopleFirstSoftware.jsx (Attachment 10: Products overview)
import React from 'react';

const PeopleFirstSoftware = () => {
  return (
    <section className="py-20 px-4 bg-purple-100">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-lg text-gray-600 mb-4">
          With Empower, you get rock-solid and secure operations, plus tools that make people engaged, valued, and ambitious.
        </p>
        <div className="flex justify-center space-x-1 mb-8">
          <button className="bg-purple-500 text-white px-6 py-3 rounded-l-lg">HRS</button>
          <button className="bg-gray-200 text-gray-700 px-6 py-3">People Strategy</button>
          <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-r-lg">Empower AI</button>
        </div>
      </div>
    </section>
  );
};

export default PeopleFirstSoftware;