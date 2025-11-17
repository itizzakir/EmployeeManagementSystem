import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Logo from '../common/Logo';

// SVGs for icons (as used in your EmployeeList)
const HomeIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);
const UserIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);
const UsersIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 016-6h6m6 0v1H9m6-6a4 4 0 100-5.292M12 14.646V17.5" />
  </svg>
);


const Sidebar = () => {
  const { currentUser } = useAuth();

  // Define links based on role
  const adminLinks = [
    { name: 'Dashboard', to: '/dashboard/admin', icon: <HomeIcon /> },
    { name: 'Employees', to: '/dashboard/employees', icon: <UsersIcon /> }, // Example
  ];

  const employeeLinks = [
    { name: 'My Dashboard', to: '/dashboard/employee', icon: <UserIcon /> },
  ];

  const links = currentUser?.role === 'admin' ? adminLinks : employeeLinks;

  // Base link style
  const baseLink = "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors";
  // Style for when the link is active
  const activeLink = "bg-purple-600 text-white font-medium";
  // Style for when the link is inactive
  const inactiveLink = "text-slate-600 hover:bg-slate-200 hover:text-slate-900";

  return (
    <div className="w-64 h-screen bg-white shadow-lg p-6 flex flex-col">
      <div className="mb-8">
        <Logo disableLink={true} />
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.to}
                end // Use 'end' for exact matching on parent routes
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? activeLink : inactiveLink}`
                }
              >
                {link.icon}
                <span>{link.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="border-t pt-4">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Empower</p>
      </div>
    </div>
  );
};

export default Sidebar;