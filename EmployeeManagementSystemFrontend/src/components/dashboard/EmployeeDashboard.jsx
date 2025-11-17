// src/components/dashboard/EmployeeDashboard.jsx
import React from 'react';
import { motion } from 'framer-motion'; // ✨ Import
import {
  PersonalDetailsView,
  ProfessionalDetailsView,
  ProjectHistoryView,
  FinanceView,
} from './ViewOnlyDetails';

// ✨ Define animation "variants"
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // ✨ Each child will animate 0.2s after the previous one
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 }, // ✨ Start invisible and 20px down
  visible: {
    opacity: 1,
    y: 0, // ✨ Animate to full opacity at original position
    transition: { type: 'spring', stiffness: 100 },
  },
};

const EmployeeDashboard = ({ employee }) => {
  const handleDownloadPayslips = () => {
    alert('Downloading last 6 months payslips...');
  };

  return (
    // ✨ 1. Use motion.div and apply the container variants
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* ✨ 2. Wrap each card in a motion.div with the item variants */}
      <motion.div className="lg:col-span-2" variants={itemVariants}>
        <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col sm:flex-row justify-between items-center gap-4">
          <h2 className="text-xl font-semibold text-slate-800">My Payslips</h2>
          <button
            onClick={handleDownloadPayslips}
            className="bg-purple-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors shadow-sm w-full sm:w-auto"
          >
            Download Last 6 Months
          </button>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <PersonalDetailsView data={employee.personalDetails} />
      </motion.div>
      <motion.div variants={itemVariants}>
        <ProfessionalDetailsView data={employee.professionalDetails} />
      </motion.div>
      <motion.div variants={itemVariants}>
        <ProjectHistoryView data={employee.projectDetails} />
      </motion.div>
      <motion.div variants={itemVariants}>
        <FinanceView data={employee.financeDetails} />
      </motion.div>
    </motion.div>
  );
};

export default EmployeeDashboard;