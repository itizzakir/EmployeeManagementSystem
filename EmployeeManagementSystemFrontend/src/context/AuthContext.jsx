// src/context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { adminUser, employeeUsers } from '../data/mockData';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (role, id, password) => {
    let user = null;
    if (role === 'admin') {
      if (adminUser.id === id && adminUser.password === password) {
        user = adminUser;
        setCurrentUser(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
        navigate('/dashboard/admin');
        return true;
      }
    } else if (role === 'employee') {
      const employee = employeeUsers.find(
        (emp) =>
          (emp.professionalDetails.employmentCode === id ||
            emp.professionalDetails.companyMail === id) &&
          emp.password === password
      );
      if (employee) {
        user = employee;
        setCurrentUser(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
        navigate('/dashboard/employee');
        return true;
      }
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  // ✨ New Mock Signup Function
  const adminSignup = (fullName, email, password) => {
    // In a real app, this would be an API call.
    // Here, we just log it and return true.
    console.log('New Admin Signup:', { fullName, email, password });
    // We don't add them to mock data, just pretend it worked
    // so the user can be redirected.
    return true; 
  };

  const value = { currentUser, login, logout, adminSignup }; // ✨ Add to context value

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};