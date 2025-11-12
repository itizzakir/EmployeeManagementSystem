// src/components/LeapAIEmpowers.jsx (Attachment 7: AI that empowers)
import React from 'react';
// import aiImage from '../assets/ai-image.png';

const LeapAIEmpowers = () => {
  return (
    <section className="py-20 px-4 bg-purple-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold text-purple-600">AI That Empowers, Not Replaces</h2>
          <div className="bg-orange-100 p-4 rounded-lg inline-block">
            <p>Engagement pulse up 23%</p>
          </div>
          <p className="text-gray-600">Empower AI boosts productivity while keeping the human touch in employee management.</p>
        </div>
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Team at desk
            alt="Team using AI"
            className="rounded-lg shadow-md"
          />
          {/* Bubble */}
          <div className="absolute -bottom-10 right-10 bg-purple-100 p-3 rounded-full">AI</div>
        </div>
      </div>
    </section>
  );
};

export default LeapAIEmpowers;