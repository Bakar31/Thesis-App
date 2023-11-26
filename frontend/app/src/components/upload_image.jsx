import React, { useState } from "react";

const UploadImage = () => {
  const [previewImage, setPreviewImage] = useState("");

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setPreviewImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    // Implement your upload logic here
    // This function will be called when the "Upload Image" button is clicked
    // You can send the previewImage to your server or perform any other actions
    console.log("Upload Image clicked");
  };

  return (
    <div id="uploadArea" className="flex flex-col items-center space-y-4">
      <input
        type="file"
        id="fileInput"
        accept="image/*"
        className="hidden"
        onChange={handleFileInputChange}
      />
      <div
        id="previewBox"
        className="w-80 h-80 border border-gray-300 rounded-lg overflow-hidden"
      >
        <img
          id="previewImage"
          src={previewImage || "#"}
          alt="Preview"
          className={`w-full h-full ${previewImage ? "" : "hidden"}`}
        />
      </div>

      <div className="flex gap-5">
        <label
          htmlFor="fileInput"
          id="fileInputBtn"
          className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-600"
        >
          Select Image
        </label>
        <button
          id="uploadBtn"
          onClick={handleUploadClick}
          className="bg-green-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-green-600"
        >
          Upload Image
        </button>
      </div>
    </div>
  );
};

export default UploadImage;
