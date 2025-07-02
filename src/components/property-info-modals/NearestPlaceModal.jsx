import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import ModalFooter from "../ModalFooter";

const NearestPlaceModal = ({ data, onSave, onClose, placeType }) => {
  const [formData, setFormData] = useState(
    data || { type: "", distance: 1.5, unit: "Mile", name: "" }
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const typeOptions = {
    institution: ["High school", "College", "University"],
    station: ["Bus station", "Train station", "Airport"],
    landmark: ["Museum", "Park", "Temple"],
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(formData);
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
        <div className="relative">
          <label htmlFor="type" className="form-label">
            Nearest {placeType} type*
          </label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="form-input appearance-none"
          >
            <option value="">Select</option>
            {typeOptions[placeType]?.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <FiChevronDown className="absolute right-3 top-9 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>
        <div className="flex items-end gap-2">
          <div className="flex-grow">
            <label htmlFor="distance" className="form-label">
              Distance from property*
            </label>
            <input
              type="number"
              name="distance"
              value={formData.distance}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="relative">
            <select
              name="unit"
              value={formData.unit}
              onChange={handleChange}
              className="form-input appearance-none pr-8"
            >
              <option>Mile</option>
              <option>Km</option>
            </select>
            <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="name" className="form-label">
            Nearest {placeType} name*
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
          />
        </div>
      </div>
      <ModalFooter onClose={onClose} onSave={() => onSave(formData)} />
    </form>
  );
};
export default NearestPlaceModal;
