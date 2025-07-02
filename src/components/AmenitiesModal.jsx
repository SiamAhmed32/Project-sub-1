import React, { useState, useMemo } from "react";
import { FiSearch } from "react-icons/fi";

const ALL_AMENITIES = [
  "Air conditioning",
  "Cable ready",
  "Ceiling fan",
  "High ceilings",
  "Private balcony",
  "Refrigerator",
  "Wooded views",
  "W/D hookup",
  "Hardwood Floor (home)",
  "Fireplace (home)",
  "First aid kit",
  "Carbon monoxide alarm",
  "Expanded patios (home)",
  "Free parking on premises",
  "Fire extinguisher",
];

const AmenityTag = ({ amenity, isSelected, onToggle }) => {
  const baseClasses =
    "flex items-center gap-2 border rounded-md px-3 py-2 cursor-pointer transition-colors text-sm";
  const selectedClasses = "bg-blue-100 border-blue-500 text-blue-800";
  const unselectedClasses = "bg-white border-gray-300 hover:border-gray-400";

  return (
    <div
      className={`${baseClasses} ${
        isSelected ? selectedClasses : unselectedClasses
      }`}
      onClick={() => onToggle(amenity)}
    >
      <span>{amenity}</span>
    </div>
  );
};

const AmenitiesModal = ({ data, onSave }) => {
  const [selectedAmenities, setSelectedAmenities] = useState(data || []);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAmenities = useMemo(() => {
    if (!searchTerm) {
      return ALL_AMENITIES;
    }
    return ALL_AMENITIES.filter((amenity) =>
      amenity.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const toggleAmenity = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((item) => item !== amenity)
        : [...prev, amenity]
    );
  };

  const handleSave = () => {
    onSave(selectedAmenities);
  };

  return (
    <div>
      <div className="relative mb-4">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search amenities"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-input pl-10"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-[300px] overflow-y-auto pr-2">
        {filteredAmenities.map((amenity) => (
          <AmenityTag
            key={amenity}
            amenity={amenity}
            isSelected={selectedAmenities.includes(amenity)}
            onToggle={toggleAmenity}
          />
        ))}
      </div>

      <div className="flex justify-end mt-6">
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white font-semibold px-8 py-2.5 rounded-lg hover:bg-blue-700 text-sm"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AmenitiesModal;
