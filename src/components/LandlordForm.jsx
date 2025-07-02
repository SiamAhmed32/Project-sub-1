import React from 'react';
import { FiUploadCloud } from 'react-icons/fi';
import useSelectionForm from '../hooks/useSelectionForm';

const LandlordForm = () => {
  const { formData, handleFileChange } = useSelectionForm('landlordData');

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="font-bold text-gray-800 mb-4">Proof of ownership</h3>
      <div className="form-upload relative">
        <input
          type="file"
          name="ownershipDoc"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleFileChange}
          accept=".pdf"
        />
        <FiUploadCloud className="mx-auto h-8 w-8 text-gray-400 mb-2" />
        <p className="text-sm text-gray-600">
          {formData.ownershipDoc ? formData.ownershipDoc.name : 'Ownership doc* (Pdf only)'}
        </p>
      </div>
    </div>
  );
};

export default LandlordForm;
