import React, { useState } from "react";

const AboutPropertyModal = ({ data, onSave }) => {
  const [text, setText] = useState(data || "");

  const handleSave = () => {
    onSave(text);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type message here"
        className="form-input w-full min-h-[150px]"
      />

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

export default AboutPropertyModal;
