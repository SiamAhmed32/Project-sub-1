import React, { useRef } from "react";
import { FiUploadCloud, FiX } from "react-icons/fi";

const ImageUploader = ({
  label,
  description,
  file,
  onFileSelect,
  onFileRemove,
}) => {
  const fileInputRef = useRef(null);

  const handleBoxClick = () => {
    if (!file) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      onFileSelect(selectedFile);
    }
  };

  return (
    <div
      className="form-upload h-full w-full flex-col p-2 text-center relative group"
      onClick={handleBoxClick}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/png, image/jpeg, image/webp, video/mp4"
      />

      {file ? (
        <>
          <img
            src={URL.createObjectURL(file)}
            alt={file.name}
            className="h-full w-full object-cover rounded-md"
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onFileRemove();
            }}
            className="absolute top-1 right-1 bg-black bg-opacity-50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
            title="Remove"
          >
            <FiX className="h-4 w-4" />
          </button>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <FiUploadCloud className="mx-auto h-8 w-8 text-gray-400 mb-2" />
          {label && (
            <p className="text-sm font-semibold text-gray-600">{label}</p>
          )}
          {description && (
            <p className="text-xs text-gray-500">{description}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
