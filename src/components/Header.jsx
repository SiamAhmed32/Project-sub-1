import React from "react";
import { FiGrid } from "react-icons/fi";

const Header = ({ showExit = true }) => {
  return (
    <header className="bg-white p-4 border-b">
      <div className="container mx-auto flex justify-between items-center max-w-5xl">
        <div className="flex items-center gap-2">
          <FiGrid className="text-blue-600 h-6 w-6" />
          <span className="text-xl font-bold text-gray-800">RentYard</span>
        </div>

        {showExit && (
          <button className="text-gray-600 font-medium hover:text-gray-900 border border-gray-300 px-4 py-1.5 rounded-lg text-sm">
            Exit
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
