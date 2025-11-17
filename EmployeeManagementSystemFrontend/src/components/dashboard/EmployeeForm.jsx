// src/components/dashboard/EmployeeForm.jsx
import React, { useState } from 'react';

// Reusable Input Field
const FormInput = ({ label, id, ...props }) => (
  <div className="col-span-12 sm:col-span-6 md:col-span-4">
    <label htmlFor={id} className="block text-sm font-medium text-slate-700">
      {label}
    </label>
    <input
      id={id}
      {...props}
      className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 disabled:bg-slate-100 disabled:text-slate-500"
    />
  </div>
);

// Reusable Address Fields
const AddressFields = ({ legend, data, onChange, namePrefix }) => (
  <fieldset className="col-span-12 md:col-span-6 grid grid-cols-12 gap-4 border p-4 rounded-md">
    <legend className="text-sm font-medium text-slate-800 px-1">
      {legend}
    </legend>
    <FormInput
      label="Address Line 1"
      id={`${namePrefix}.addressLine1`}
      name={`${namePrefix}.addressLine1`}
      value={data.addressLine1}
      onChange={onChange}
      required
    />
    <FormInput
      label="Address Line 2"
      id={`${namePrefix}.addressLine2`}
      name={`${namePrefix}.addressLine2`}
      value={data.addressLine2}
      onChange={onChange}
    />
    <FormInput
      label="City"
      id={`${namePrefix}.city`}
      name={`${namePrefix}.city`}
      value={data.city}
      onChange={onChange}
      required
    />
    <FormInput
      label="Pin Code"
      id={`${namePrefix}.pinCode`}
      name={`${namePrefix}.pinCode`}
      value={data.pinCode}
      onChange={onChange}
      pattern="\d{6}"
      title="Pin code must be 6 digits"
      required
    />
  </fieldset>
);

// ✨ Reusable component for list management (Projects, History)
const ListManager = ({ title, items, onRemove, onAdd, children }) => (
  <div className="col-span-12 space-y-4">
    <h4 className="text-md font-medium text-slate-800">{title}</h4>
    {items.length > 0 && (
      <ul className="border rounded-md divide-y">
        {items.map((item, index) => (
          <li key={index} className="p-3 flex justify-between items-center">
            <span className="text-sm">{item.displayName}</span>
            <button
              type="button"
              onClick={() => onRemove(index)}
              className="text-red-500 hover:text-red-700 text-xs"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    )}
    <div className="grid grid-cols-12 gap-4 p-4 border rounded-md bg-slate-50">
      {children}
      <div className="col-span-12 flex justify-end">
        <button
          type="button"
          onClick={onAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600"
        >
          Add {title.slice(0, -1)}
        </button>
      </div>
    </div>
  </div>
);

const EmployeeForm = ({ employeeToEdit, onSave, onCancel }) => {
  const isEditMode = !!employeeToEdit;

  const getInitialState = () => {
    if (isEditMode) return employeeToEdit;
    // Default structure for a new employee
    return {
      personalDetails: {
        fullName: '', dob: '', gender: '', age: '',
        currentAddress: { city: '', addressLine1: '', addressLine2: '', pinCode: '' },
        permanentAddress: { city: '', addressLine1: '', addressLine2: '', pinCode: '' },
        mobile: '', personalMail: '', emergencyContactName: '', emergencyContactMobile: '',
      },
      professionalDetails: {
        employmentCode: '', companyMail: '', officePhone: '', city: '',
        officeAddress: { addressLine1: '', addressLine2: '', pinCode: '' },
        reportingManager: '', hrName: '',
        employmentHistory: [], // { companyName, joiningDate, endDate }
        dateOfJoining: '',
      },
      projectDetails: [], // { projectCode, startDate, endDate, clientName, reportingManager }
      financeDetails: {
        panCard: '', aadharCard: '', bankName: '', branch: '', ifscCode: '', ctcBreakup: '',
      },
    };
  };

  const [formData, setFormData] = useState(getInitialState);

  // ✨ State for the 'add' forms
  const [historyItem, setHistoryItem] = useState({ companyName: '', joiningDate: '', endDate: '' });
  const [projectItem, setProjectItem] = useState({ projectCode: '', startDate: '', endDate: '', clientName: '', reportingManager: '' });

  // Simple deep-set for nested form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    const [section, field, subField] = name.split('.');

    if (subField) {
      // Handles nested objects like addresses
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: {
            ...prev[section][field],
            [subField]: value,
          },
        },
      }));
    } else {
      // Handles direct fields
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value,
        },
      }));
    }
  };

  // --- List Management Handlers ---
  const addHistoryItem = () => {
    setFormData(prev => ({
      ...prev,
      professionalDetails: {
        ...prev.professionalDetails,
        employmentHistory: [
          ...prev.professionalDetails.employmentHistory,
          { ...historyItem, displayName: `${historyItem.companyName} (${historyItem.joiningDate} - ${historyItem.endDate})` }
        ]
      }
    }));
    setHistoryItem({ companyName: '', joiningDate: '', endDate: '' }); // Reset form
  };

  const removeHistoryItem = (index) => {
    setFormData(prev => ({
      ...prev,
      professionalDetails: {
        ...prev.professionalDetails,
        employmentHistory: prev.professionalDetails.employmentHistory.filter((_, i) => i !== index)
      }
    }));
  };

  const addProjectItem = () => {
    setFormData(prev => ({
      ...prev,
      projectDetails: [
        ...prev.projectDetails,
        { ...projectItem, displayName: `${projectItem.clientName} (${projectItem.projectCode})` }
      ]
    }));
    setProjectItem({ projectCode: '', startDate: '', endDate: '', clientName: '', reportingManager: '' });
  };

  const removeProjectItem = (index) => {
    setFormData(prev => ({
      ...prev,
      projectDetails: prev.projectDetails.filter((_, i) => i !== index)
    }));
  };
  // --- End List Management ---


  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* --- Personal Details --- */}
      <fieldset className="grid grid-cols-12 gap-6">
        <legend className="col-span-12 text-lg font-semibold text-purple-600 border-b pb-2 mb-2">
          Personal Details
        </legend>
        <FormInput label="Full Name" name="personalDetails.fullName" value={formData.personalDetails.fullName} onChange={handleChange} required />
        <FormInput label="Date of Birth" name="personalDetails.dob" type="date" value={formData.personalDetails.dob} onChange={handleChange} disabled={isEditMode} required />
        <div className="col-span-12 sm:col-span-6 md:col-span-4">
          <label htmlFor="personalDetails.gender" className="block text-sm font-medium text-slate-700">Gender</label>
          <select id="personalDetails.gender" name="personalDetails.gender" value={formData.personalDetails.gender} onChange={handleChange} disabled={isEditMode} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 disabled:bg-slate-100 disabled:text-slate-500">
            <option value="">Select...</option> <option value="Male">Male</option> <option value="Female">Female</option> <option value="Other">Other</option>
          </select>
        </div>
        <FormInput label="Age" name="personalDetails.age" type="number" max="999" value={formData.personalDetails.age} onChange={handleChange} required />
        <FormInput label="Mobile" name="personalDetails.mobile" pattern="\d{10}" title="Mobile must be 10 digits" value={formData.personalDetails.mobile} onChange={handleChange} required />
        <FormInput label="Personal Email" name="personalDetails.personalMail" type="email" value={formData.personalDetails.personalMail} onChange={handleChange} required />
        <FormInput label="Emergency Contact Name" name="personalDetails.emergencyContactName" value={formData.personalDetails.emergencyContactName} onChange={handleChange} required />
        <FormInput label="Emergency Contact Mobile" name="personalDetails.emergencyContactMobile" pattern="\d{10}" title="Mobile must be 10 digits" value={formData.personalDetails.emergencyContactMobile} onChange={handleChange} required />
        <AddressFields legend="Current Address" namePrefix="personalDetails.currentAddress" data={formData.personalDetails.currentAddress} onChange={handleChange} />
        <AddressFields legend="Permanent Address" namePrefix="personalDetails.permanentAddress" data={formData.personalDetails.permanentAddress} onChange={handleChange} />
      </fieldset>

      {/* --- Professional Details --- */}
      <fieldset className="grid grid-cols-12 gap-6">
        <legend className="col-span-12 text-lg font-semibold text-purple-600 border-b pb-2 mb-2">
          Professional Details
        </legend>
        <FormInput label="Employment Code" name="professionalDetails.employmentCode" pattern="\d{6}" title="Must be 6 digits" value={formData.professionalDetails.employmentCode} onChange={handleChange} disabled={isEditMode} required />
        <FormInput label="Company Email" name="professionalDetails.companyMail" type="email" value={formData.professionalDetails.companyMail} onChange={handleChange} disabled={isEditMode} required />
        <FormInput label="Date of Joining" name="professionalDetails.dateOfJoining" type="date" value={formData.professionalDetails.dateOfJoining} onChange={handleChange} disabled={isEditMode} required />
        <FormInput label="Office Phone" name="professionalDetails.officePhone" pattern="\d{8,12}" title="Must be 8-12 digits" value={formData.professionalDetails.officePhone} onChange={handleChange} required />
        <FormInput label="Reporting Manager (Email/Code)" name="professionalDetails.reportingManager" value={formData.professionalDetails.reportingManager} onChange={handleChange} required />
        <FormInput label="HR Name" name="professionalDetails.hrName" value={formData.professionalDetails.hrName} onChange={handleChange} required />
        <AddressFields legend="Office Address" namePrefix="professionalDetails.officeAddress" data={formData.professionalDetails.officeAddress} onChange={handleChange} />
        
        {/* ✨ Employment History Manager */}
        <ListManager
          title="Employment History"
          items={formData.professionalDetails.employmentHistory}
          onRemove={removeHistoryItem}
          onAdd={addHistoryItem}
        >
          <FormInput label="Company Name" value={historyItem.companyName} onChange={(e) => setHistoryItem(p => ({...p, companyName: e.target.value}))} />
          <FormInput label="Joining Date" type="date" value={historyItem.joiningDate} onChange={(e) => setHistoryItem(p => ({...p, joiningDate: e.target.value}))} />
          <FormInput label="End Date" type="date" value={historyItem.endDate} onChange={(e) => setHistoryItem(p => ({...p, endDate: e.target.value}))} />
        </ListManager>

      </fieldset>

      {/* --- Project Details --- */}
      <fieldset className="grid grid-cols-12 gap-6">
        <legend className="col-span-12 text-lg font-semibold text-purple-600 border-b pb-2 mb-2">
          Project Details (Optional)
        </legend>
        
        {/* ✨ Project Details Manager */}
        <ListManager
          title="Projects"
          items={formData.projectDetails}
          onRemove={removeProjectItem}
          onAdd={addProjectItem}
        >
          <FormInput label="Client/Project Name" value={projectItem.clientName} onChange={(e) => setProjectItem(p => ({...p, clientName: e.target.value}))} />
          <FormInput label="Project Code" value={projectItem.projectCode} onChange={(e) => setProjectItem(p => ({...p, projectCode: e.target.value}))} />
          <FormInput label="Start Date" type="date" value={projectItem.startDate} onChange={(e) => setProjectItem(p => ({...p, startDate: e.target.value}))} />
          <FormInput label="End Date" type="date" value={projectItem.endDate} onChange={(e) => setProjectItem(p => ({...p, endDate: e.target.value}))} />
          <FormInput label="Reporting Manager" value={projectItem.reportingManager} onChange={(e) => setProjectItem(p => ({...p, reportingManager: e.target.value}))} />
        </ListManager>
      </fieldset>


      {/* --- Finance Details --- */}
      <fieldset className="grid grid-cols-12 gap-6">
        <legend className="col-span-12 text-lg font-semibold text-purple-600 border-b pb-2 mb-2">
          Finance Details
        </legend>
        <FormInput label="Pan Card" name="financeDetails.panCard" value={formData.financeDetails.panCard} onChange={handleChange} required />
        <FormInput label="Aadhar Card" name="financeDetails.aadharCard" value={formData.financeDetails.aadharCard} onChange={handleChange} required />
        <FormInput label="Bank Name" name="financeDetails.bankName" value={formData.financeDetails.bankName} onChange={handleChange} required />
        <FormInput label="Branch" name="financeDetails.branch" value={formData.financeDetails.branch} onChange={handleChange} required />
        <FormInput label="IFSC Code" name="financeDetails.ifscCode" value={formData.financeDetails.ifscCode} onChange={handleChange} required />
        <FormInput label="CTC Breakup" name="financeDetails.ctcBreakup" value={formData.financeDetails.ctcBreakup} onChange={handleChange} required />
      </fieldset>

      {/* --- Actions --- */}
      <div className="flex justify-end gap-4 pt-6 border-t">
        <button type="button" onClick={onCancel} className="bg-white text-slate-700 px-6 py-2 rounded-lg font-semibold hover:bg-slate-100 border border-slate-300">
          Cancel
        </button>
        <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700">
          Save Employee
        </button>
      </div>
    </form>
  );
};

export default EmployeeForm;