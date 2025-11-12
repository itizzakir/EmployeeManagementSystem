// src/components/LeapsomeAIHeavyLifting.jsx (Attachment 6: AI heavy lifting)
import React from 'react';

const LeapsomeAIHeavyLifting = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-100 to-indigo-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Empower AI Handles the Heavy Lifting
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Drafting policies, surfacing insights, and suggesting next steps — so you have more time for the human side of HR.
        </p>
        <button className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700">
          See Empower AI
        </button>
        {/* Progress image from attachment */}
        <div className="mt-12 max-w-4xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Placeholder for progress/people
            alt="Progress with people"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default LeapsomeAIHeavyLifting;