import React from "react";
import { FaCcAmex } from "react-icons/fa";

const PaymentOption = ({ card, isSelected, onSelect }) => {
  return (
    <div
      className={`flex justify-between items-center p-4 rounded-lg border ${
        isSelected ? "bg-gray-100" : "bg-white"
      }`}
    >
      <div className="flex items-center gap-4">
        <FaCcAmex className="h-6 w-6 text-blue-800" />
        <p className="font-medium text-gray-700">
          {card.brand} (Amex card){" "}
          <span className="text-gray-500">************{card.last4}</span>
        </p>
      </div>
      <button
        onClick={() => onSelect(card.id)}
        className={`px-6 py-2 rounded-lg text-sm font-semibold transition-colors ${
          isSelected
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        {isSelected ? "Selected" : "Select"}
      </button>
    </div>
  );
};

export default PaymentOption;
