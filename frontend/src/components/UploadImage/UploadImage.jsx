import React, { useState } from "react";
import { LuImagePlus } from "react-icons/lu";
import { RiQrScan2Line } from "react-icons/ri";
import { FaUpload } from "react-icons/fa";

const UploadImage = () => {
  const [previewImage, setPreviewImage] = useState("");
  const [resultText, setResultText] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    console.log({ file: file });
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setPreviewImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
      setSelectedFile(file);
    }
  };

  const handleUploadClick = async () => {
    if (!selectedFile) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("http://localhost:8000/upload/", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data);
      setResultText(data.text);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCaptureClick = async () => {
    try {
      const response = await fetch("http://192.168.223.53/capture", {
        method: "GET",
      });
      const imageData = await response.blob();
      const imageUrl = URL.createObjectURL(imageData);
      setPreviewImage(imageUrl);

      const capturedFile = new File([imageData], "captured_image.png", {
        type: "image/jpeg",
      });

      setSelectedFile(capturedFile);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div id="uploadArea" className="flex flex-col items-center space-y-4 w-1/2">
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
          className="bg-blue-500 text-white py-2 px-2 rounded cursor-pointer hover:bg-blue-600"
        >
          <LuImagePlus size={25} />
        </label>
        <button
          id="uploadBtn"
          onClick={handleCaptureClick}
          className="bg-indigo-500 text-white py-2 px-2 rounded cursor-pointer hover:bg-indigo-600"
        >
          <RiQrScan2Line size={25} />
        </button>
        <button
          id="uploadBtn"
          onClick={handleUploadClick}
          className="bg-green-500 text-white py-2 px-2 rounded cursor-pointer hover:bg-green-600"
        >
          <FaUpload size={25} />
        </button>
      </div>

      {resultText && (
        <div className="mt-4 text-center">
          <p className="font-bold">{resultText}</p>
        </div>
      )}
    </div>
  );
};

export default UploadImage;
