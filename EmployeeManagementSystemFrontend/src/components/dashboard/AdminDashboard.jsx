// src/components/dashboard/AdminDashboard.jsx
import React, { useState } from 'react';
import { employeeUsers as initialData } from '../../data/mockData';
import EmployeeList from './EmployeeList';
import EmployeeForm from './EmployeeForm';
import Modal from '../common/Modal';
import {
  PersonalDetailsView,
  ProfessionalDetailsView,
  ProjectHistoryView,
  FinanceView,
} from './ViewOnlyDetails';

const AdminDashboard = () => {
  const [employees, setEmployees] = useState(initialData);

  // ✨ State management for different modal types
  const [modalState, setModalState] = useState({
    isOpen: false,
    mode: null, // 'add', 'edit', 'view'
    data: null, // The employee data for 'edit' or 'view'
  });

  const handleOpenAddModal = () => {
    setModalState({ isOpen: true, mode: 'add', data: null });
  };

  const handleOpenEditModal = (employee) => {
    setModalState({ isOpen: true, mode: 'edit', data: employee });
  };

  const handleOpenViewModal = (employee) => {
    setModalState({ isOpen: true, mode: 'view', data: employee });
  };

  const handleCloseModal = () => {
    setModalState({ isOpen: false, mode: null, data: null });
  };

  const handleDeleteEmployee = (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      setEmployees(employees.filter((emp) => emp.id !== id));
    }
  };

  const handleSaveEmployee = (formData) => {
    if (modalState.mode === 'edit') {
      // Edit
      setEmployees(
        employees.map((emp) => (emp.id === modalState.data.id ? formData : emp))
      );
    } else {
      // Add
      const newEmployee = { 
        ...formData, 
        id: `emp${employees.length + 10}`, // simple unique id
        password: 'password123' // Default password for new user
      };
      setEmployees([...employees, newEmployee]);
    }
    handleCloseModal();
  };

  // ✨ Helper to get modal title
  const getModalTitle = () => {
    if (modalState.mode === 'add') return 'Add New Employee';
    if (modalState.mode === 'edit') return 'Edit Employee';
    if (modalState.mode === 'view') return `Viewing ${modalState.data.personalDetails.fullName}`;
    return '';
  };

  return (
    // ✨ Changed layout to max-w-7xl
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-slate-800">Employee List</h2>
        <button
          onClick={handleOpenAddModal}
          className="bg-purple-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors shadow-sm flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Add Employee
        </button>
      </div>

      <EmployeeList
        employees={employees}
        onView={handleOpenViewModal}
        onEdit={handleOpenEditModal}
        onDelete={handleDeleteEmployee}
      />

      <Modal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        title={getModalTitle()}
        // ✨ Use a larger modal for form/view
        size={modalState.mode === 'view' ? 'max-w-4xl' : 'max-w-6xl'} 
      >
        {modalState.mode === 'add' && (
          <EmployeeForm
            employeeToEdit={null}
            onSave={handleSaveEmployee}
            onCancel={handleCloseModal}
          />
        )}
        {modalState.mode === 'edit' && (
          <EmployeeForm
            employeeToEdit={modalState.data}
            onSave={handleSaveEmployee}
            onCancel={handleCloseModal}
          />
        )}
        {/* ✨ Render read-only views for 'view' mode */}
        {modalState.mode === 'view' && modalState.data && (
          <div className="space-y-8">
            <PersonalDetailsView data={modalState.data.personalDetails} />
            <ProfessionalDetailsView data={modalState.data.professionalDetails} />
            <ProjectHistoryView data={modalState.data.projectDetails} />
            <FinanceView data={modalState.data.financeDetails} />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AdminDashboard;