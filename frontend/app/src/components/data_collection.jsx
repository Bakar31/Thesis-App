import React, { useState } from "react";

const DataCollectForm = () => {
  const [formData, setFormData] = useState({
    age: "",
    sex: "1",
    strokeType: "0",
    smoker: "0",
    arrhythmia: "0",
    diabetics: "0",
    hypertension: "0",
    obesity: "0",
    tia: "0",
    osa: "0",
    cs: "0",
    npstrokes: "",
  });
  const [planResult, setPlanResult] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const collectData = async () => {
    setPlanResult("");
    try {
      const response = await fetch("http://localhost:8000/predict/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setPlanResult(data.result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <label for="age" className="block text-lg font-semibold text-black">
            Age:
          </label>
          <input
            type="number"
            id="age"
            name="age"
            required
            className="form-input border border-gray-300 rounded-md"
            value={formData.age}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label for="sex" className="block text-lg font-semibold text-black">
            Sex:
          </label>
          <select
            id="sex"
            name="sex"
            required
            className="form-select border border-gray-300 rounded-md w-full"
            value={formData.sex}
            onChange={handleInputChange}
          >
            <option value="1">Male</option>
            <option value="0">Female</option>
          </select>
        </div>

        <div>
          <label
            for="strokeType"
            className="block text-lg font-semibold text-black"
          >
            Stroke Type:
          </label>
          <select
            id="strokeType"
            name="strokeType"
            required
            className="form-select border border-gray-300 rounded-md w-full"
            value={formData.strokeType}
            onChange={handleInputChange}
          >
            <option value="1">LAA</option>
            <option value="0">CE</option>
          </select>
        </div>

        <div>
          <label for="smoker" className="block text-lg font-semibold text-black">
            Smoker:
          </label>
          <select
            id="smoker"
            name="smoker"
            required
            className="form-select border border-gray-300 rounded-md w-full"
            value={formData.smoker}
            onChange={handleInputChange}
          >
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <div>
          <label
            for="arrhythmia"
            className="block text-lg font-semibold text-black"
          >
            Arrhythmia:
          </label>
          <select
            id="arrhythmia"
            name="arrhythmia"
            required
            className="form-select border border-gray-300 rounded-md w-full"
            value={formData.arrhythmia}
            onChange={handleInputChange}
          >
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <div>
          <label for="diabetics" className="block text-lg font-semibold text-black">
            Diabetics:
          </label>
          <select
            id="diabetics"
            name="diabetics"
            required
            className="form-select border border-gray-300 rounded-md w-full"
            value={formData.diabetics}
            onChange={handleInputChange}
          >
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <div>
          <label
            for="hypertension"
            className="block text-lg font-semibold text-black"
          >
            Hypertension:
          </label>
          <select
            id="hypertension"
            name="hypertension"
            required
            className="form-select border border-gray-300 rounded-md w-full"
            value={formData.hypertension}
            onChange={handleInputChange}
          >
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <div>
          <label for="obesity" className="block text-lg font-semibold text-black">
            Obesity:
          </label>
          <select
            id="obesity"
            name="obesity"
            required
            className="form-select border border-gray-300 rounded-md w-full"
            value={formData.obesity}
            onChange={handleInputChange}
          >
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <div>
          <label for="tia" className="block text-lg font-semibold text-black">
            Transient ischemic attack:
          </label>
          <select
            id="tia"
            name="tia"
            required
            className="form-select border border-gray-300 rounded-md w-full"
            value={formData.tia}
            onChange={handleInputChange}
          >
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <div>
          <label for="osa" className="block text-lg font-semibold text-black">
            OSA:
          </label>
          <select
            id="osa"
            name="osa"
            required
            className="form-select border border-gray-300 rounded-md w-full"
            value={formData.osa}
            onChange={handleInputChange}
          >
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <div>
          <label for="cs" className="block text-lg font-semibold text-black">
            Carotid stenosis:
          </label>
          <select
            id="cs"
            name="cs"
            required
            className="form-select border border-gray-300 rounded-md w-full"
            value={formData.cs}
            onChange={handleInputChange}
          >
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <div>
          <label for="npstrokes" className="block text-lg font-semibold text-black">
            Number of previous strokes:
          </label>
          <input
            type="number"
            id="npstrokes"
            name="npstrokes"
            required
            className="form-input border border-gray-300 rounded-md w-full"
            value={formData.npstrokes}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <button
          type="button"
          onClick={collectData}
          className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold"
        >
          Submit
        </button>
        {planResult && planResult !== "6" && (
          <a
            href={`/plans/${planResult}`}
            className="border-2 border-blue-400 rounded-md px-4 py-2 text-blue-400 font-semibold"
          >
            Get the Base Plan
          </a>
        )}
      </div>

      <div className="mt-8 text-center">
        {planResult && planResult !== "6" && (
          <div className="text-2xl font-serif">
            <p>{`Base Plan: ${planResult}`}</p>
            <p className="text-red-500 text-lg">
              This plan is not intended to be implemented directly on the
              patient. It serves as a foundation designed to save time. The
              doctor must carefully assess the plan and make any required
              adjustments.
            </p>
          </div>
        )}

        {planResult && planResult === "6" && (
          <div className="text-3xl font-serif">
            <p className="text-red-500 text-xl">
              This situation presents a challenge for automated systems to
              address adequately. To ensure optimal care, the doctor should
              devise a well-thought-out plan
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataCollectForm;
