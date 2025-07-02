import React, { useState } from "react";

const LeasingInfoModal = ({ onSave }) => {
  const [formData, setFormData] = useState({
    managerName: "Alex Johan",
    managerPhone: "+880",
    managerEmail: "leasing@rentyard.com",
    sameAsProperty: true,
  });

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
        <div>
          <label htmlFor="managerName" className="form-label">
            Leasing manager name*
          </label>
          <input
            type="text"
            id="managerName"
            name="managerName"
            value={formData.managerName}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div>
          <label htmlFor="managerPhone" className="form-label">
            Leasing manager Phone number*
          </label>
          <input
            type="text"
            id="managerPhone"
            name="managerPhone"
            value={formData.managerPhone}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="managerEmail" className="form-label">
            Leasing manager email*
          </label>
          <input
            type="email"
            id="managerEmail"
            name="managerEmail"
            value={formData.managerEmail}
            onChange={handleChange}
            className="form-input"
          />
        </div>
      </div>

      <div className="mt-6">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="sameAsProperty"
            checked={formData.sameAsProperty}
            onChange={handleChange}
            className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-gray-700">Address(same as property)</span>
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

export default LeasingInfoModal;
