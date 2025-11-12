// src/components/FeaturesEfficiency.jsx (Attachment 2: Features grid)
import React from 'react';
// import icon1 from '../assets/icon-workflow.png'; // Automated workflows icon
// import icon2 from '../assets/icon-coaching.png';
// import icon3 from '../assets/icon-empower.png';

const FeaturesEfficiency = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto flex items-center justify-center">
              {/* Icon placeholder */}
              <span className="text-2xl">⚙️</span>
            </div>
            <h3 className="text-2xl font-semibold">Automated Workflows, Payroll & AI Checks</h3>
            <p className="text-gray-600">Boost efficiency with seamless automation for attendance and payroll processing.</p>
          </div>
          <div className="space-y-4">
            <div className="w-16 h-16 bg-indigo-100 rounded-full mx-auto flex items-center justify-center">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="text-2xl font-semibold">Better Coaching Guidance & Smart Insights</h3>
            <p className="text-gray-600">Unlock actionable analytics for performance and employee development.</p>
          </div>
          <div className="space-y-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center">
              <span className="text-2xl">👥</span>
            </div>
            <h3 className="text-2xl font-semibold">Empower Employees & Transparent Feedback</h3>
            <p className="text-gray-600">Foster engagement with clear goals, real-time feedback, and growth tools.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesEfficiency;