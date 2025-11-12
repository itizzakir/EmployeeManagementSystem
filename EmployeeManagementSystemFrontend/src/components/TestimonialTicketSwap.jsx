// src/components/TestimonialTicketSwap.jsx (Attachment 3: Testimonial with scores)
import React from 'react';
// import testimonialImage1 from '../assets/testimonial-image1.png';
// import testimonialImage2 from '../assets/testimonial-image2.png';

const TestimonialTicketSwap = () => {
  return (
    <section className="py-20 px-4 bg-purple-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" // Placeholder
            alt="Woman in meeting"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="flex-1 space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-purple-600">94% Engagement Scores</h3>
            <p className="text-gray-600">Lift in engagement scores with Empower</p>
            <div className="flex items-center space-x-4 mt-4">
              <button className="text-purple-600">&larr;</button>
              <p className="text-sm">People Lead at TicketSwap</p>
              <button className="text-purple-600">Read more &rarr;</button>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1613664245717-bba9a620e9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" // Placeholder
            alt="Man in office"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialTicketSwap;