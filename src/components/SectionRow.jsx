import React from "react";
import { FiPlus, FiEdit, FiTrash2 } from "react-icons/fi";

const SectionRow = ({
  title,
  label,
  isRequired,
  hasData,
  onAdd,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h4 className="font-medium text-gray-800">
          {title}
          {isRequired && <span className="text-red-500 ml-1">(Required)</span>}
        </h4>
        {label && !hasData && <p className="text-sm text-gray-500">{label}</p>}
      </div>

      {hasData ? (
        <div className="flex gap-3">
          <button
            onClick={onEdit}
            className="text-gray-500 hover:text-blue-600"
          >
            <FiEdit className="h-5 w-5" />
          </button>
          <button
            onClick={onDelete}
            className="text-gray-500 hover:text-red-600"
          >
            <FiTrash2 className="h-5 w-5" />
          </button>
        </div>
      ) : (
        <button
          onClick={onAdd}
          className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          <FiPlus />
          Add
        </button>
      )}
    </div>
  );
};

export default SectionRow;
