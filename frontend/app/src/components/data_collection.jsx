import React from "react";

const DataCollectForm = () => {
  const collectData = () => {
    // Implement your collectData function logic here
    // This function will be called when the "Submit" button is clicked
    console.log("Data collected");
  };

  return (
    <div id="datacollectform" className="p-4 flex gap-4">
      <form id="healthForm" className="space-y-4 space-x-4">
        
        <label htmlFor="age" className="text-black text-lg font-semibold">
          Age:
        </label>
        <input
          type="number"
          id="age"
          name="age"
          required
          className="form-select border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-500"
        />

        <label htmlFor="sex" className="text-black text-lg font-semibold">
          Sex:
        </label>
        <select
          id="sex"
          name="sex"
          required
          className="form-select border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-500 w-1/4"
        >
          <option value="1">Male</option>
          <option value="0">Female</option>
        </select>

        <label
          htmlFor="strokeType"
          className="text-black text-lg font-semibold"
        >
          Stroke Type:
        </label>
        <select
          id="strokeType"
          name="strokeType"
          required
          className="form-select border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-500 w-1/4"
        >
          <option value="1">LAA</option>
          <option value="0">CE</option>
        </select>

        <label
          htmlFor="smoker"
          className="text-black text-lg font-semibold"
        >
          Smoker:
        </label>
        <select
          id="smoker"
          name="smoker"
          required
          className="form-select border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-500 w-1/4"
        >
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>

        <label
          htmlFor="arrhythmia"
          className="text-black text-lg font-semibold"
        >
          Arrhythmia:
        </label>
        <select
          id="arrhythmia"
          name="arrhythmia"
          required
          className="form-select border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-500 w-1/4"
        >
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>

        <label
          htmlFor="diabetics"
          className="text-black text-lg font-semibold"
        >
          Diabetics:
        </label>
        <select
          id="diabetics"
          name="diabetics"
          required
          className="form-select border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-500 w-1/4"
        >
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>

        <label
          htmlFor="hypertension"
          className="text-black text-lg font-semibold"
        >
          Hypertension:
        </label>
        <select
          id="hypertension"
          name="hypertension"
          required
          className="form-select border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-500 w-1/4"
        >
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>

        <label
          htmlFor="smoker"
          className="text-black text-lg font-semibold"
        >
          Smoker:
        </label>
        <select
          id="smoker"
          name="smoker"
          required
          className="form-select border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-500 w-1/4"
        >
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>

        <label
          htmlFor="smoker"
          className="text-black text-lg font-semibold"
        >
          Smoker:
        </label>
        <select
          id="smoker"
          name="smoker"
          required
          className="form-select border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-500 w-1/4"
        >
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>

        <label
          htmlFor="smoker"
          className="text-black text-lg font-semibold"
        >
          Smoker:
        </label>
        <select
          id="smoker"
          name="smoker"
          required
          className="form-select border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-500 w-1/4"
        >
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>

        {/* ... Other form elements with similar structure */}

        <button type="button" onClick={collectData} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DataCollectForm;
