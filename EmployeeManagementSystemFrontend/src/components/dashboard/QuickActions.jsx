// src/components/dashboard/QuickActions.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const QuickActions = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          to="/dashboard/employees"
          className="bg-purple-100 text-purple-700 p-4 rounded-lg font-medium text-center hover:bg-purple-200 transition-colors"
        >
          Manage Employees
        </Link>
        <Link
          to="/signup/admin"
          className="bg-green-100 text-green-700 p-4 rounded-lg font-medium text-center hover:bg-green-200 transition-colors"
        >
          Add New Admin
        </Link>
      </div>
    </div>
  );
};

export default QuickActions;