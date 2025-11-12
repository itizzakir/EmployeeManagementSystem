// src/components/SeamlesslyConnected.jsx (Attachment 8: Integrations)
import React from 'react';

const SeamlesslyConnected = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Seamlessly Connected to Your Tools</h2>
        <p className="text-xl text-gray-600 mb-12">
          Integrate with Google Suite, Jira, Outlook, and more. Keep everyone in sync and make HR processes part of the daily workflow, not extra work.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {/* Logos - placeholders for integrations */}
          <img src="https://via.placeholder.com/100x40?text=Google" alt="Google" className="h-10" />
          <img src="https://via.placeholder.com/100x40?text=Jira" alt="Jira" className="h-10" />
          <img src="https://via.placeholder.com/100x40?text=Outlook" alt="Outlook" className="h-10" />
          <img src="https://via.placeholder.com/100x40?text=Slack" alt="Slack" className="h-10" />
        </div>
      </div>
    </section>
  );
};

export default SeamlesslyConnected;