import React from "react";
import { FiUploadCloud, FiChevronDown } from "react-icons/fi";

const CompanyForm = () => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="font-bold text-gray-800 mb-6">Company & office info</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6">
        <div className="lg:col-span-1">
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Company name*
          </label>
          <input
            type="text"
            id="companyName"
            defaultValue="Runyan trade center"
            className="form-input"
          />
        </div>
        <div className="lg:col-span-1">
          <label
            htmlFor="companyId"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Company Identifier(EIN/TIN)*
          </label>
          <input
            type="text"
            id="companyId"
            defaultValue="Name"
            className="form-input"
          />
        </div>
        <div className="lg:col-span-1">
          <label
            htmlFor="jobTitle"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Your job title*
          </label>
          <input
            type="text"
            id="jobTitle"
            defaultValue="Manager"
            className="form-input"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Agreement with landlord/owner*
          </label>
          <div className="form-upload">
            <FiUploadCloud className="h-5 w-5 text-gray-400" />
            <span className="text-sm text-gray-600">(Pdf only)</span>
          </div>
        </div>

        <div className="relative">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Country/Region*
          </label>
          <select id="country" className="form-input appearance-none">
            <option>Choose country</option>
            <option>United States</option>
            <option>Canada</option>
          </select>
          <FiChevronDown className="absolute right-3 top-9 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>
        <div>
          <label
            htmlFor="street"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Street address*
          </label>
          <input
            type="text"
            id="street"
            defaultValue="111 Austin Ave"
            className="form-input"
          />
        </div>
        <div>
          <label
            htmlFor="apt"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Apt, suit, unit (if applicable)
          </label>
          <input
            type="text"
            id="apt"
            defaultValue="3050"
            className="form-input"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone number*
          </label>
          <input
            type="text"
            id="phone"
            defaultValue="+880"
            className="form-input"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Contact email*
          </label>
          <input
            type="email"
            id="email"
            defaultValue="majarul/2025@gmail.com"
            className="form-input"
          />
        </div>
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            City/Town*
          </label>
          <input
            type="text"
            id="city"
            defaultValue="Dallas"
            className="form-input"
          />
        </div>
        <div className="relative">
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            State/Territory*
          </label>
          <select id="state" className="form-input appearance-none">
            <option>Choose state</option>
            <option>Texas</option>
            <option>California</option>
          </select>
          <FiChevronDown className="absolute right-3 top-9 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>
        <div>
          <label
            htmlFor="zip"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Zip code*
          </label>
          <input
            type="text"
            id="zip"
            defaultValue="75061"
            className="form-input"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyForm;
