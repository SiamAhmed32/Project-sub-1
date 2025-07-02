import React from 'react';
import { FiUploadCloud } from 'react-icons/fi';
import useSelectionForm from '../hooks/useSelectionForm';

const RealtorForm = () => {
  const { formData, handleChange, handleFileChange } = useSelectionForm('realtorData');

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="font-bold text-gray-800 mb-4">Realtor verification</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="leniencyNumber" className="form-label">Leniency number*</label>
          <input type="text" id="leniencyNumber" name="leniencyNumber" value={formData.leniencyNumber} onChange={handleChange} placeholder="000000000000" className="form-input" />
        </div>
        <div className="form-upload relative">
          <input type="file" name="additionalDocs" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept=".pdf" />
          <FiUploadCloud className="mx-auto h-6 w-6 text-gray-400 mb-1" />
          <p className="text-sm text-gray-600">{formData.additionalDocs ? formData.additionalDocs.name : 'Additional documents'}</p>
        </div>
        <div className="form-upload relative">
          <input type="file" name="agreement" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept=".pdf" />
          <FiUploadCloud className="mx-auto h-6 w-6 text-gray-400 mb-1" />
          <p className="text-sm text-gray-600">{formData.agreement ? formData.agreement.name : 'Agreement with landlord*'}</p>
        </div>
      </div>
    </div>
  );
};

export default RealtorForm;
