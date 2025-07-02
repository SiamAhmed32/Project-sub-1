import React from "react";
import { FiUploadCloud, FiChevronDown } from "react-icons/fi";
import useSelectionForm from "../hooks/useSelectionForm";

const CompanyForm = () => {
  const { formData, handleChange, handleFileChange } =
    useSelectionForm("companyData");

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="font-bold text-gray-800 mb-6">Company & office info</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6">
        <div>
          <label htmlFor="companyName" className="form-label">
            Company name*
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="companyId" className="form-label">
            Company Identifier(EIN/TIN)*
          </label>
          <input
            type="text"
            name="companyId"
            value={formData.companyId}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="jobTitle" className="form-label">
            Your job title*
          </label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-upload relative">
          <label className="form-label absolute -top-6">
            Agreement with landlord/owner*
          </label>
          <input
            type="file"
            name="agreement"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            accept=".pdf"
          />
          <FiUploadCloud className="h-5 w-5 text-gray-400" />
          <span className="text-sm text-gray-600">
            {formData.agreement ? formData.agreement.name : "(Pdf only)"}
          </span>
        </div>
        <div className="relative">
          <label htmlFor="country" className="form-label">
            Country/Region*
          </label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="form-input appearance-none"
          >
            <option value="">Choose country</option>
            <option>United States</option>
            <option>Canada</option>
          </select>
          <FiChevronDown className="absolute right-3 top-9 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>
        <div>
          <label htmlFor="street" className="form-label">
            Street address*
          </label>
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="apt" className="form-label">
            Apt, suit, unit (if applicable)
          </label>
          <input
            type="text"
            name="apt"
            value={formData.apt}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="phone" className="form-label">
            Phone number*
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="email" className="form-label">
            Contact email*
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
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
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="form-input appearance-none"
          >
            <option value="">Choose state</option>
            <option>Texas</option>
            <option>California</option>
          </select>
          <FiChevronDown className="absolute right-3 top-9 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>
        <div>
          <label htmlFor="zip" className="form-label">
            Zip code*
          </label>
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            className="form-input"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyForm;
