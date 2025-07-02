import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import ModalFooter from "../ModalFooter";

const PetFeesModal = ({ data, onClose, onSave }) => {
  const [formData, setFormData] = useState(
    data || {
      petType: "",
      maxWeight: 100,
      oneTimeFee: 100,
      securityDeposit: 100,
      monthlyRent: 100,
    }
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
        <div className="relative md:col-span-1">
          <label htmlFor="petType" className="form-label">
            Pet type*
          </label>
          <select
            name="petType"
            value={formData.petType}
            onChange={handleChange}
            className="form-input appearance-none"
          >
            <option value="">Select</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Other">Other</option>
          </select>
          <FiChevronDown className="absolute right-3 top-9 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>
        <div>
          <label htmlFor="maxWeight" className="form-label">
            Max weight(LB)*
          </label>
          <input
            type="number"
            name="maxWeight"
            value={formData.maxWeight}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="oneTimeFee" className="form-label">
            One time pet fee*
          </label>
          <input
            type="number"
            name="oneTimeFee"
            value={formData.oneTimeFee}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="securityDeposit" className="form-label">
            Pet Security Deposit*
          </label>
          <input
            type="number"
            name="securityDeposit"
            value={formData.securityDeposit}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="monthlyRent" className="form-label">
            Monthly pet rent*
          </label>
          <input
            type="number"
            name="monthlyRent"
            value={formData.monthlyRent}
            onChange={handleChange}
            className="form-input"
          />
        </div>
      </div>
      <ModalFooter onClose={onClose} onSave={() => onSave(formData)} />
    </form>
  );
};
export default PetFeesModal;
