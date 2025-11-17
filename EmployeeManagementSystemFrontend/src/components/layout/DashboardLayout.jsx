// src/components/layout/DashboardLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-slate-100">
      {/* Sidebar */}
      <div>
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Dashboard-specific Header */}
        <DashboardHeader />

        {/* Main Content (Page) */}
        <main
          className="flex-1 overflow-x-hidden overflow-y-auto p-8"
        >
          <Outlet /> {/* This is where your pages will render */}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;