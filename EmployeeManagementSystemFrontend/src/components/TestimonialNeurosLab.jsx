// src/components/TestimonialNeurosLab.jsx (Attachment 9: Testimonial quote)
import React from 'react';
// import quoteImage from '../assets/quote-image.png';

const TestimonialNeurosLab = () => {
  return (
    <section className="py-20 px-4 bg-indigo-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Team working
            alt="Team discussion"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl font-bold">Neuros Lab</h3>
          <blockquote className="text-gray-700 italic text-lg">
            "Empower HR offers not only features but support from the very beginning — that personal touch made all the difference."
          </blockquote>
          <div className="flex items-center space-x-4">
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
              alt="Liza"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold">Liza Sayre</p>
              <p className="text-sm text-gray-500">Chief People Officer & Partner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialNeurosLab;