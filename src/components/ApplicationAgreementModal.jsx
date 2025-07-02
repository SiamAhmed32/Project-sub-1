import React, { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";

const ApplicationAgreementModal = ({ data, onSave }) => {
  const [formData, setFormData] = useState(
    data || {
      agreementFile: null,
      acceptsImmigrants: false,
    }
  );

  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({ ...prev, acceptsImmigrants: e.target.checked }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        agreementFile: e.target.files[0].name,
      }));
    }
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div>
      <div className="space-y-4">
        <div>
          <label className="form-label">Upload agreement</label>
          <div className="form-upload relative">
            <input
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleFileChange}
              accept=".pdf"
            />
            <FiUploadCloud className="h-6 w-6 text-gray-400" />
            <span className="text-sm text-gray-600">
              {formData.agreementFile ? formData.agreementFile : "(Pdf only)"}
            </span>
          </div>
        </div>

        <div>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="acceptsImmigrants"
              checked={formData.acceptsImmigrants}
              onChange={handleCheckboxChange}
              className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-gray-700">
              Accept immigrant & international student application
            </span>
          </label>
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

export default ApplicationAgreementModal;
