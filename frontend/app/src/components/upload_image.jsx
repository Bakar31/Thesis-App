import React, { useState } from "react";

const UploadImage = () => {
  const [previewImage, setPreviewImage] = useState("");
  const [resultText, setResultText] = useState("");

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

  const handleUploadClick = async () => {
    const formData = new FormData();
    formData.append("file", document.getElementById("fileInput").files[0]);

    try {
      const response = await fetch("http://localhost:8000/upload/", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data.text);
      setResultText(data.text);
    } catch (error) {
      console.error("Error:", error);
    }
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

      {resultText && (
        <div className="mt-4 text-center">
          <p>{resultText}</p>
        </div>
      )}
    </div>
  );
};

export default UploadImage;
