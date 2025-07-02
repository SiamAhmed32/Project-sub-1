import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import ModalFooter from "../ModalFooter";

const UtilitiesProviderModal = ({ data, onSave, onClose }) => {
  const [formData, setFormData] = useState(
    data || { utilityType: "", companyName: "" }
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(formData);
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <label htmlFor="utilityType" className="form-label">
            Utility type*
          </label>
          <select
            name="utilityType"
            value={formData.utilityType}
            onChange={handleChange}
            className="form-input appearance-none"
          >
            <option value="">Select</option>
            <option>Internet</option>
            <option>Cable</option>
            <option>Electricity</option>
            <option>Gas</option>
            <option>Water</option>
          </select>
          <FiChevronDown className="absolute right-3 top-9 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>
        <div>
          <label htmlFor="companyName" className="form-label">
            Provider company name*
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="form-input"
          />
        </div>
      </div>
      <ModalFooter onClose={onClose} onSave={() => onSave(formData)} />
    </form>
  );
};
export default UtilitiesProviderModal;
