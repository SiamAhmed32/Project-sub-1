import React from "react";

const PlanCard = ({ plan, isSelected, onSelect }) => {
  const { name, price, description, isAnnual } = plan;

  return (
    <div
      className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
        isSelected
          ? "border-blue-600 bg-blue-50/50"
          : "border-gray-200 bg-white hover:border-blue-400"
      }`}
      onClick={() => onSelect(plan.id)}
    >
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        {isSelected && (
          <div className="flex items-center gap-2 text-sm">
            <input
              id={`autopay-${plan.id}`}
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor={`autopay-${plan.id}`} className="text-gray-600">
              Auto Pay
            </label>
          </div>
        )}
      </div>
      <div className="mt-4">
        <span className="text-4xl font-bold text-gray-900">
          ${isAnnual ? (price * 0.85).toFixed(2) : price.toFixed(2)}
        </span>
        <span className="text-gray-500">/mo</span>
      </div>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
    </div>
  );
};

export default PlanCard;
