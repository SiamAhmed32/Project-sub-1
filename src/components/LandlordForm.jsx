// src/components/LandlordForm.jsx
import React from 'react';
import { FiUploadCloud } from 'react-icons/fi';

const LandlordForm = () => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="font-bold text-gray-800 mb-4">Proof of ownership</h3>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50">
        <FiUploadCloud className="mx-auto h-8 w-8 text-gray-400 mb-2" />
        <p className="text-sm text-gray-600">Ownership doc* <span className="text-gray-400">(Pdf only)</span></p>
      </div>
    </div>
  );
};

export default LandlordForm;