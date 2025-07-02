import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const ChargesModal = ({ data, onSave }) => {
  const [formData, setFormData] = useState(
    data || {
      applicationFee: 100,
      applicantType: "all",
      adminFee: 15,
      notApplicable: false,
    }
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
        <div className="flex items-end gap-2">
          <div className="flex-grow">
            <label htmlFor="applicationFee" className="form-label">
              Application fee(one-time)*
            </label>
            <input
              type="number"
              id="applicationFee"
              name="applicationFee"
              value={formData.applicationFee}
              onChange={handleChange}
              className="form-input"
              disabled={formData.notApplicable}
            />
          </div>
          <div className="relative">
            <select
              name="applicantType"
              value={formData.applicantType}
              onChange={handleChange}
              className="form-input appearance-none pr-8"
              disabled={formData.notApplicable}
            >
              <option value="all">All 18+ applicant</option>
              <option value="single">Single applicant</option>
            </select>
            <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div>
          <label htmlFor="adminFee" className="form-label">
            Admin fee(one-time)*
          </label>
          <input
            type="number"
            id="adminFee"
            name="adminFee"
            value={formData.adminFee}
            onChange={handleChange}
            className="form-input"
            disabled={formData.notApplicable}
          />
        </div>
      </div>

      <div className="mt-6">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="notApplicable"
            checked={formData.notApplicable}
            onChange={handleChange}
            className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-gray-700">
            Type 0 if charges not applicable
          </span>
        </label>
      </div>

      <div className="flex justify-end mt-8">
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white font-semibold px-8 py-2.5 rounded-lg hover:bg-blue-700 text-sm"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ChargesModal;
