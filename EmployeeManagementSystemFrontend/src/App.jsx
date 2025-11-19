// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import AdminSignupPage from './pages/AdminSignupPage';
import DashboardLayout from './components/layout/DashboardLayout';

// Import your pages
import AdminDashboardPage from './pages/AdminDashboardPage'; 
import EmployeeDashboardPage from './pages/EmployeeDashboardPage';

const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login/:role" element={<LoginPage />} />
      <Route path="/signup/admin" element={<AdminSignupPage />} />
      
      {/* Dashboard Layout Wrapper */}
      <Route element={<DashboardLayout />}>
        
        {/* Admin Routes */}
        <Route path="/dashboard/admin" element={<AdminDashboardPage />} />
        <Route path="/dashboard/employees" element={<AdminDashboardPage />} /> {/* ✨ ADD THIS LINE */}

        {/* Employee Route */}
        <Route path="/dashboard/employee" element={<EmployeeDashboardPage />} />
        
      </Route>
    </Routes>
  );
};

export default App;