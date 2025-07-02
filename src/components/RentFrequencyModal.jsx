import React, { useState } from "react";
import { FiChevronDown, FiCalendar } from "react-icons/fi";

const RentFrequencyModal = ({ data, onSave }) => {
  const [formData, setFormData] = useState(
    data || {
      frequency: "Monthly",
      reminderDate: "28th Every month",
      dueDate: "5th Every month",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6">
        <div className="relative">
          <label htmlFor="frequency" className="form-label">
            Rent payment frequency*
          </label>
          <select
            id="frequency"
            name="frequency"
            value={formData.frequency}
            onChange={handleChange}
            className="form-input appearance-none pr-8"
          >
            <option>Monthly</option>
            <option>Quarterly</option>
            <option>Yearly</option>
          </select>
          <FiChevronDown className="absolute right-3 top-9 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>

        <div className="relative">
          <label htmlFor="reminderDate" className="form-label">
            Rent Reminder/Statement date*
          </label>
          <input
            type="text"
            id="reminderDate"
            name="reminderDate"
            value={formData.reminderDate}
            onChange={handleChange}
            className="form-input pr-10"
          />
          <FiCalendar className="absolute right-3 top-9 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>

        <div className="relative">
          <label htmlFor="dueDate" className="form-label">
            Rent due date*
          </label>
          <input
            type="text"
            id="dueDate"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="form-input pr-10"
          />
          <FiCalendar className="absolute right-3 top-9 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>
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

export default RentFrequencyModal;
