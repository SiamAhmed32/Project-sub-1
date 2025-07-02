import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const InfoDisplayBox = ({ children, onEdit, onDelete }) => {
  return (
    <div className="flex justify-between items-start p-4 border border-gray-200 rounded-lg mt-2 bg-gray-50">
      <div className="text-sm text-gray-700 leading-6">{children}</div>

      <div className="flex gap-3 ml-4">
        <button onClick={onEdit} className="text-gray-500 hover:text-blue-600">
          <FiEdit className="h-5 w-5" />
        </button>
        <button onClick={onDelete} className="text-gray-500 hover:text-red-600">
          <FiTrash2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default InfoDisplayBox;
