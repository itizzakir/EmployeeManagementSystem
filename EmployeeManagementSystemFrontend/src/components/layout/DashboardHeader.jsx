import React from 'react';
import { useAuth } from '../../context/AuthContext';

const DashboardHeader = () => {
  const { currentUser, logout } = useAuth();

  return (
    <header
      className="bg-white shadow-sm p-4 flex justify-end items-center"
    >
      <div className="flex items-center space-x-4">
        <span className="text-slate-600 font-medium hidden sm:inline">
          Welcome, {currentUser?.name || currentUser?.personalDetails?.fullName}!
        </span>
        <button
          onClick={logout}
          className="bg-purple-100 text-purple-700 px-5 py-2 rounded-lg font-medium hover:bg-purple-200 transition-colors"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;