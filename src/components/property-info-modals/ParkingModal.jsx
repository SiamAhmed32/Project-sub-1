import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import ModalFooter from "../ModalFooter";

const ParkingModal = ({ data, onSave, onClose }) => {
  const [formData, setFormData] = useState(
    data || { parkingTime: "2H", overview: "" }
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
      <div className="space-y-4">
        <div className="relative">
          <label htmlFor="parkingTime" className="form-label">
            Guest vehicle parking time
          </label>
          <select
            name="parkingTime"
            value={formData.parkingTime}
            onChange={handleChange}
            className="form-input appearance-none"
          >
            <option value="2H">2H</option>
            <option value="4H">4H</option>
            <option value="24H">24H</option>
          </select>
          <FiChevronDown className="absolute right-3 top-9 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>
        <div>
          <label htmlFor="overview" className="form-label">
            Write parking overview
          </label>
          <textarea
            name="overview"
            value={formData.overview}
            onChange={handleChange}
            className="form-input w-full min-h-[120px]"
            maxLength="200"
          />
          <p className="text-right text-xs text-gray-400 mt-1">
            {formData.overview.length}/200
          </p>
        </div>
      </div>
      <ModalFooter onClose={onClose} onSave={() => onSave(formData)} />
    </form>
  );
};
export default ParkingModal;
