// src/components/RealtorForm.jsx
import React from "react";
import { FiUploadCloud } from "react-icons/fi";

const RealtorForm = () => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="font-bold text-gray-800 mb-4">Realtor verification</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label
            htmlFor="leniency"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Leniency number*
          </label>
          <input
            type="text"
            id="leniency"
            placeholder="000000000000"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 flex flex-col justify-center">
          <FiUploadCloud className="mx-auto h-6 w-6 text-gray-400 mb-1" />
          <p className="text-sm text-gray-600">
            Additional documents{" "}
            <span className="text-gray-400">(Pdf only)</span>
          </p>
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 flex flex-col justify-center">
          <FiUploadCloud className="mx-auto h-6 w-6 text-gray-400 mb-1" />
          <p className="text-sm text-gray-600">
            Agreement with landlord*{" "}
            <span className="text-gray-400">(Pdf only)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RealtorForm;
