import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import AdminDashboard from '../components/dashboard/AdminDashboard';

const AdminDashboardPage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser || currentUser.role !== 'admin') {
      navigate('/login/admin');
    }
  }, [currentUser, navigate]);

  // ✨ THIS IS THE GUARD ✨
  // If currentUser is null OR not an admin, render nothing
  // (or a loading spinner) while the useEffect redirects.
  if (!currentUser || currentUser.role !== 'admin') {
    return null;
  }

  // If we get here, currentUser is valid AND is an admin
  return (
    <>
      <h1 className="text-3xl font-extrabold text-slate-900 mb-8 max-w-7xl mx-auto">
        Admin Dashboard
      </h1>
      <AdminDashboard />
    </>
  );
};

export default AdminDashboardPage;