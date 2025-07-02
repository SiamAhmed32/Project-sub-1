// src/components/ModalFooter.jsx
import React from 'react';

const ModalFooter = ({ onClose, onSave, saveButtonText = "Add" }) => {
  return (
    <div className="flex justify-end items-center gap-4 mt-8">
      <button
        type="button"
        onClick={onClose}
        className="text-gray-600 font-medium hover:text-gray-900 text-sm px-6 py-2"
      >
        Cancel
      </button>
      <button
        type="button"
        onClick={onSave}
        className="bg-blue-600 text-white font-semibold px-8 py-2.5 rounded-lg hover:bg-blue-700 text-sm"
      >
        {saveButtonText}
      </button>
    </div>
  );
};

export default ModalFooter;
