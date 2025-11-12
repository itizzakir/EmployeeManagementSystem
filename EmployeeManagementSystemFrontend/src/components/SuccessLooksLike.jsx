// src/components/SuccessLooksLike.jsx (Attachment 12: Success metrics)
import React from 'react';
// import successImages from '../assets/success-images.png';

const SuccessLooksLike = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Success Looks Like with Empower</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center">
              <span className="text-2xl">📉</span>
            </div>
            <h3 className="text-2xl font-semibold">30% Less Tedious Busywork</h3>
            <p className="text-gray-600">Automated admin for HR.</p>
          </div>
          <div className="space-y-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-2xl font-semibold">90% Manager Feedback Tools</h3>
            <p className="text-gray-600">Faster insights and coaching.</p>
          </div>
          <div className="space-y-4">
            <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-2xl font-semibold">Faster Reporting with AI Insights</h3>
            <p className="text-gray-600">Real-time analytics for decisions.</p>
          </div>
        </div>
        {/* Testimonial card */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Success testimonial"
              className="rounded-lg"
            />
          </div>
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
            <h4>TicketSwap</h4>
            <p>Empowering employee management success.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessLooksLike;