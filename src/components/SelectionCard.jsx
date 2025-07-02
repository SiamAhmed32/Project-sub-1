import React from "react";

const SelectionCard = ({ icon, title, description, isSelected, onClick }) => {
  const cardClasses = `
    border-2 rounded-xl p-4 cursor-pointer transition-all duration-200
    flex items-start gap-4
    ${
      isSelected
        ? "border-blue-600 bg-blue-50"
        : "border-gray-200 bg-white hover:border-blue-400"
    }
  `;

  return (
    <div className={cardClasses} onClick={onClick}>
      <div
        className={`mt-1 text-2xl ${
          isSelected ? "text-blue-600" : "text-gray-500"
        }`}
      >
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default SelectionCard;
