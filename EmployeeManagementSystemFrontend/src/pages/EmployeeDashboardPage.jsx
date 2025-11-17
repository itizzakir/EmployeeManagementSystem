import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import EmployeeDashboard from '../components/dashboard/EmployeeDashboard';

const EmployeeDashboardPage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Wait for context to load
    if (!currentUser) {
      return;
    }
    
    // Check role
    if (currentUser.role !== 'employee') {
      navigate('/login/employee'); // Redirect if not employee
    }
  }, [currentUser, navigate]);

  // ✨ THIS IS THE GUARD ✨
  // If currentUser is null OR not an employee, render nothing.
  if (!currentUser || currentUser.role !== 'employee') {
    return null;
  }

  // If we get here, currentUser is valid AND is an employee
  return (
    <>
      <h1 className="text-3xl font-extrabold text-slate-900 mb-8">
        {/* This is now safe to access */}
        Welcome, {currentUser.personalDetails.fullName}
      </h1>
      <EmployeeDashboard employee={currentUser} />
    </>
  );
};

export default EmployeeDashboardPage;