// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Logo from '../components/common/Logo';

const LoginPage = () => {
  const { role } = useParams(); // 'admin' or 'employee'
  const { login } = useAuth();
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const title = role === 'admin' ? 'Admin Login' : 'Employee Login';
  const idLabel =
    role === 'admin' ? 'Admin ID' : 'Employment Code or Company Email';

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    const success = login(role, id, password);
    if (!success) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center py-12 px-4">
      <div className="mb-8">
        <Logo />
      </div>
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-6">
          {title}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="id"
              className="block text-sm font-medium text-slate-700"
            >
              {idLabel}
            </label>
            <input
              id="id"
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-transform hover:scale-105 shadow-lg"
          >
            Log In
          </button>
        </form>
        
        <div className="text-center mt-6">
          <Link to="/" className="text-sm text-purple-600 hover:text-purple-800">
            &larr; Back to Home
          </Link>
          {role === 'admin' && (
            <p className="text-sm text-slate-600 mt-2">
              Don't have an account?{' '}
              <Link to="/signup/admin" className="font-medium text-purple-600 hover:text-purple-800">
                Sign up
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;