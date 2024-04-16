import React, { useState } from "react";
import { Link } from "react-router-dom";

const DataCollectForm = () => {
  const [formData, setFormData] = useState({
    age: "",
    sex: "1",
    strokeType: "1",
    smoker: "1",
    arrhythmia: "1",
    diabetics: "1",
    hypertension: "1",
    obesity: "1",
    tia: "1",
    osa: "1",
    cs: "1",
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
    <div class="max-w-4xl mx-auto p-4">
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2">
          <label for="age" class="block text-lg font-semibold text-black">
            Age:
          </label>
          <input
            type="number"
            id="age"
            name="age"
            required
            class="form-input border border-gray-300 rounded-md"
            value={formData.age}
            onchange={handleInputChange}
          />
        </div>

        <div>
          <label for="sex" class="block text-lg font-semibold text-black">
            Sex:
          </label>
          <select
            id="sex"
            name="sex"
            required
            class="form-select border border-gray-300 rounded-md w-full"
            value={formData.sex}
            onchange={handleInputChange}
          >
            <option value="1">Male</option>
            <option value="0">Female</option>
          </select>
        </div>

        <div>
          <label
            for="strokeType"
            class="block text-lg font-semibold text-black"
          >
            Stroke Type:
          </label>
          <select
            id="strokeType"
            name="strokeType"
            required
            class="form-select border border-gray-300 rounded-md w-full"
            value={formData.strokeType}
            onchange={handleInputChange}
          >
            <option value="1">LAA</option>
            <option value="0">CE</option>
          </select>
        </div>

        <div>
          <label for="smoker" class="block text-lg font-semibold text-black">
            Smoker:
          </label>
          <select
            id="smoker"
            name="smoker"
            required
            class="form-select border border-gray-300 rounded-md w-full"
            value={formData.smoker}
            onchange={handleInputChange}
          >
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <div>
          <label
            for="arrhythmia"
            class="block text-lg font-semibold text-black"
          >
            Arrhythmia:
          </label>
          <select
            id="arrhythmia"
            name="arrhythmia"
            required
            class="form-select border border-gray-300 rounded-md w-full"
            value={formData.arrhythmia}
            onchange={handleInputChange}
          >
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <div>
          <label for="diabetics" class="block text-lg font-semibold text-black">
            Diabetics:
          </label>
          <select
            id="diabetics"
            name="diabetics"
            required
            class="form-select border border-gray-300 rounded-md w-full"
            value={formData.diabetics}
            onchange={handleInputChange}
          >
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <div>
          <label
            for="hypertension"
            class="block text-lg font-semibold text-black"
          >
            Hypertension:
          </label>
          <select
            id="hypertension"
            name="hypertension"
            required
            class="form-select border border-gray-300 rounded-md w-full"
            value={formData.hypertension}
            onchange={handleInputChange}
          >
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <div>
          <label for="obesity" class="block text-lg font-semibold text-black">
            Obesity:
          </label>
          <select
            id="obesity"
            name="obesity"
            required
            class="form-select border border-gray-300 rounded-md w-full"
            value={formData.obesity}
            onchange={handleInputChange}
          >
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <div>
          <label for="tia" class="block text-lg font-semibold text-black">
            Transient ischemic attack:
          </label>
          <select
            id="tia"
            name="tia"
            required
            class="form-select border border-gray-300 rounded-md w-full"
            value={formData.tia}
            onchange={handleInputChange}
          >
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <div>
          <label for="osa" class="block text-lg font-semibold text-black">
            OSA:
          </label>
          <select
            id="osa"
            name="osa"
            required
            class="form-select border border-gray-300 rounded-md w-full"
            value={formData.osa}
            onchange={handleInputChange}
          >
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <div>
          <label for="cs" class="block text-lg font-semibold text-black">
            Carotid stenosis:
          </label>
          <select
            id="cs"
            name="cs"
            required
            class="form-select border border-gray-300 rounded-md w-full"
            value={formData.cs}
            onchange={handleInputChange}
          >
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <div>
          <label for="npstrokes" class="block text-lg font-semibold text-black">
            Number of previous strokes:
          </label>
          <input
            type="number"
            id="npstrokes"
            name="npstrokes"
            required
            class="form-input border border-gray-300 rounded-md w-full"
            value={formData.npstrokes}
            onchange={handleInputChange}
          />
        </div>
      </div>

      <div class="mt-8 flex gap-4">
        <button
          type="button"
          onclick={collectData}
          class="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold"
        >
          Submit
        </button>
        {planResult && (
          <a
            href={`/plans/${planResult}`}
            class="border-2 border-blue-400 rounded-md px-4 py-2 text-blue-400 font-semibold"
          >
            Get the Plan
          </a>
        )}
      </div>

      <div class="mt-8 text-center">
        {planResult && (
          <div class="text-3xl font-serif">
            <p>{`Plan: ${planResult}`}</p>
          </div>
        )}
      </div>
    </div>

    // <div>
    //   <div id="datacollectform" className="p-4 flex gap-4">
    //     <form id="healthForm" className="space-y-4 space-x-4">
    //       <div className="flex flex-col">
    //       <label htmlFor="age" className="text-black text-lg font-semibold">
    //         Age:
    //       </label>
    //       <input
    //         type="number"
    //         id="age"
    //         name="age"
    //         required
    //         className="form-select border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-500 w-1/6"
    //         value={formData.age}
    //         onChange={handleInputChange}
    //       />
    //       </div>

    //       <label htmlFor="sex" className="text-black text-lg font-semibold">
    //         Sex:
    //       </label>
    //       <select
    //         id="sex"
    //         name="sex"
    //         required
    //         className="form-select border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-500 w-1/6"
    //         value={formData.sex}
    //         onChange={handleInputChange}
    //       >
    //         <option value="1">Male</option>
    //         <option value="0">Female</option>
    //       </select>

    //       <label
    //         htmlFor="strokeType"
    //         className="text-black text-lg font-semibold"
    //       >
    //         Stroke Type:
    //       </label>
    //       <select
    //         id="strokeType"
    //         name="strokeType"
    //         required
    //         className="form-select border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-500 w-1/6"
    //         value={formData.strokeType}
    //         onChange={handleInputChange}
    //       >
    //         <option value="1">LAA</option>
    //         <option value="0">CE</option>
    //       </select>

    //       <label htmlFor="smoker" className="text-black text-lg font-semibold">
    //         Smoker:
    //       </label>
    //       <select
    //         id="smoker"
    //         name="smoker"
    //         required
    //         className="form-select border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-500 w-1/6"
    //         value={formData.smoker}
    //         onChange={handleInputChange}
    //       >
    //         <option value="1">Yes</option>
    //         <option value="0">No</option>
    //       </select>

    //       <label
    //         htmlFor="arrhythmia"
    //         className="text-black text-lg font-semibold"
    //       >
    //         Arrhythmia:
    //       </label>
    //       <select
    //         id="arrhythmia"
    //         name="arrhythmia"
    //         required
    //         className="form-select border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-500 w-1/6"
    //         value={formData.arrhythmia}
    //         onChange={handleInputChange}
    //       >
    //         <option value="1">Yes</option>
    //         <option value="0">No</option>
    //       </select>

    //       <label
    //         htmlFor="diabetics"
    //         className="text-black text-lg font-semibold"
    //       >
    //         Diabetics:
    //       </label>
    //       <select
    //         id="diabetics"
    //         name="diabetics"
    //         required
    //         className="form-select border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-500 w-1/6"
    //         value={formData.diabetics}
    //         onChange={handleInputChange}
    //       >
    //         <option value="1">Yes</option>
    //         <option value="0">No</option>
    //       </select>

    //       <label
    //         htmlFor="hypertension"
    //         className="text-black text-lg font-semibold"
    //       >
    //         Hypertension:
    //       </label>
    //       <select
    //         id="hypertension"
    //         name="hypertension"
    //         required
    //         className="form-select border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-500 w-1/6"
    //         value={formData.hypertension}
    //         onChange={handleInputChange}
    //       >
    //         <option value="1">Yes</option>
    //         <option value="0">No</option>
    //       </select>

    //       <label htmlFor="obesity" className="text-black text-lg font-semibold">
    //         Obesity:
    //       </label>
    //       <select
    //         id="obesity"
    //         name="obesity"
    //         required
    //         className="form-select border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-500 w-1/6"
    //         value={formData.obesity}
    //         onChange={handleInputChange}
    //       >
    //         <option value="1">Yes</option>
    //         <option value="0">No</option>
    //       </select>

    //       <label htmlFor="tia" className="text-black text-lg font-semibold">
    //         Transient ischemic attack:
    //       </label>
    //       <select
    //         id="tia"
    //         name="tia"
    //         required
    //         className="form-select border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-500 w-1/6"
    //         value={formData.tia}
    //         onChange={handleInputChange}
    //       >
    //         <option value="1">Yes</option>
    //         <option value="0">No</option>
    //       </select>

    //       <label htmlFor="osa" className="text-black text-lg font-semibold">
    //         OSA:
    //       </label>
    //       <select
    //         id="osa"
    //         name="osa"
    //         required
    //         className="form-select border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-500 w-1/6"
    //         value={formData.osa}
    //         onChange={handleInputChange}
    //       >
    //         <option value="1">Yes</option>
    //         <option value="0">No</option>
    //       </select>

    //       <label htmlFor="cs" className="text-black text-lg font-semibold">
    //         Carotid stenosis:
    //       </label>
    //       <select
    //         id="cs"
    //         name="cs"
    //         required
    //         className="form-select border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-500 w-1/6"
    //         value={formData.cs}
    //         onChange={handleInputChange}
    //       >
    //         <option value="1">Yes</option>
    //         <option value="0">No</option>
    //       </select>

    //       <label
    //         htmlFor="npstrokes"
    //         className="text-black text-lg font-semibold"
    //       >
    //         Number of previous strokes:
    //       </label>
    //       <input
    //         type="number"
    //         id="npstrokes"
    //         name="npstrokes"
    //         required
    //         className="form-select border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-500"
    //         value={formData.npstrokes}
    //         onChange={handleInputChange}
    //       />
    //       <div>
    //         <button
    //           type="button"
    //           onClick={collectData}
    //           className=" bg-green-500 border rounded-lg px-2 py-2 text-white font-semibold"
    //         >
    //           Submit
    //         </button>
    //       </div>
    //     </form>
    //   </div>

    //   <div className="space-y-5 text-center">
    //     <div className=" text-center">
    //       {planResult && (
    //         <div className="mt-4 text-center">
    //           <p className="text-3xl font-serif">{`Plan: ${planResult}`}</p>
    //         </div>
    //       )}
    //     </div>
    //     <div className="text-center font-serif text-3xl text-blue-400 ">
    //       <Link
    //         to={`/plans/${planResult}`}
    //         className="border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-500"
    //       >
    //         Get the Plan
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default DataCollectForm;
