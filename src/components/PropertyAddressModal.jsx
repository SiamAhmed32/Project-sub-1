import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import ModalFooter from "./ModalFooter";
import { toast } from "react-toastify";

const PropertyAddressModal = ({ data, onClose, onSave }) => {
  const [formData, setFormData] = useState(
    data || {
      propName: "",
      totalUnit: "",
      street: "",
      city: "",
      state: "",
      zip: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (
      !formData.propName ||
      !formData.totalUnit ||
      !formData.street ||
      !formData.city ||
      !formData.state ||
      !formData.zip
    ) {
      toast.error("Please fill in all required fields marked with *");
      return false;
    }
    return true;
  };

  const handleSave = () => {
    if (validate()) {
      onSave(formData);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSave();
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
        <div>
          <label htmlFor="propName" className="form-label">
            Property name as identifier*
          </label>
          <input
            type="text"
            id="propName"
            name="propName"
            value={formData.propName}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="totalUnit" className="form-label">
            Total apartment unit*
          </label>
          <input
            type="number"
            id="totalUnit"
            name="totalUnit"
            value={formData.totalUnit}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="website" className="form-label">
            Property website(optional)
          </label>
          <input
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="relative">
          <label htmlFor="country" className="form-label">
            Country/Region*
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="form-input appearance-none"
          >
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
          </select>
          <FiChevronDown className="absolute right-3 top-9 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>
        <div>
          <label htmlFor="street" className="form-label">
            Street address*
          </label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="apt" className="form-label">
            Apt, suite, unit (if applicable)
          </label>
          <input
            type="text"
            id="apt"
            name="apt"
            value={formData.apt}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="city" className="form-label">
            City/Town*
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="relative">
          <label htmlFor="state" className="form-label">
            State/Territory*
          </label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="form-input appearance-none"
          >
            <option value="">Choose State</option>
            <option value="Texas">Texas</option>
            <option value="California">California</option>
          </select>
          <FiChevronDown className="absolute right-3 top-9 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>
        <div>
          <label htmlFor="zip" className="form-label">
            Zip code*
          </label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            className="form-input"
          />
        </div>
      </div>
      <ModalFooter onClose={onClose} onSave={handleSave} />
    </form>
  );
};

export default PropertyAddressModal;
