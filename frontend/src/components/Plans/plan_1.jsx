import React, { useState } from "react";
import Markdown from "react-markdown";
import { saveAs } from "file-saver";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import RemirrorEditorLive from "../Editor/Editor.tsx";

const Plan1 = () => {
  const initialPlan = `
  ## Patient Name:

  ### Date:
  
  ## Conditions:

- Cardioembolic stroke in 65+ yr old with afib (Atrial fibrillation/Arrhythmia), HTN (Hypertension), previous TIA (Transient ischemic attack)

## Guidelines:

- Assess bleeding risk and choose warfarin, apixaban, rivaroxaban, or edoxaban based on patient factors.
- Maintain INR 2-3 if on warfarin; ensure compliance with NOACs
- Hypertension management:
  - Lifestyle modification: low salt diet, exercise, weight loss if BMI >25
  - Medications: ACEI or ARB first line, add calcium channel blocker or thiazide diuretic to reach goal BP
  - Monthly home BP monitoring; adjust meds to maintain BP <130/80 mmHg
- Statin therapy even if normal cholesterol
  - Check baseline lipids, repeat lipid panel at 3 months, and adjust the dose to reach LDL <70 mg/dL
- Lifestyle modification:
  - Smoking cessation if a smoker
    - Offer counseling, nicotine replacement, and/or pharmacologic support
  - Diet:
    - Meet with a registered dietician to review the Mediterranean diet principles:
      - Emphasize fruits, vegetables, whole grains, legumes, nuts and olive oil
      - Limit red meat to a few times per month
      - Avoid processed foods, sweets, and sugary beverages
      - Limit alcohol to 1 drink per day maximum
      - Increase intake of omega-3 fatty acids like fish and walnuts
    - Reduce salt intake to <2.3 grams (1500 mg sodium) daily
    - Ask about food preferences and come up with an individualized meal plan
    - Refer to community resources like cooking classes focused on healthy cooking
  - Exercise:
    - Get clearance from a neurologist before starting the exercise program
    - Start with low-impact cardio like walking, swimming, or stationary bike 2-3 times per week
    - Gradually increase to 30-40 minutes of moderate-intensity cardio 5 times per week
    - Incorporate resistance training 2-3 times per week once tolerated
    - Consider referral for physical therapy for a guided rehab program
    - Advise checking heart rate and staying under the maximum heart rate target
    - Encourage finding enjoyable activities like dancing, golf, yoga, and group classes
  - Weight Management:
    - Calculate BMI - refer to a dietician if BMI > 25 kg/m2
    - Set realistic weight loss goals, like losing 1 lb per week
    - Keep food and exercise journals to identify areas for improvement
    - Consider commercial weight loss programs that provide social support
    - Make dietary changes for calorie reduction like reducing portion sizes
    - Incorporate strength training to maintain muscle mass in weight loss
    - Follow up monthly to assess progress and barriers
  - Social support systems and stress reduction techniques

## Treatment Plan:

- Apixaban 5mg BID (Twice daily dosing)[1]
- Lisinopril 40mg daily, titrate as needed[2]
- Atorvastatin 40mg daily[3]
- Aspirin 81mg + clopidogrel 75mg daily x 30 days, then transition to apixaban alone [4]
- Cardiac monitoring and cardiology follow-up [5]

## Follow up:

- Cardiology referral to evaluate for AF ablation if high risk of recurrence
- Physical/occupational therapy evaluation if needed
- Ophthalmologic exam for retinal emboli
- Labs at regular intervals: CBC, CMP, INR if on warfarin

## References:

1. Chan, Noel C., and John W. Eikelboom. "How I manage anticoagulant therapy in older individuals with atrial fibrillation or venous thromboembolism." Blood, The Journal of the American Society of Hematology 133.21 (2019): 2269-2278.
2. Fleg, Jerome L., Wilbert S. Aronow, and William H. Frishman. "Cardiovascular drug therapy in the elderly: benefits and challenges." Nature Reviews Cardiology 8.1 (2011): 13-28.
3. Diener, Hans-Christoph, and Graeme J. Hankey. "Primary and secondary prevention of ischemic stroke and cerebral hemorrhage: JACC focus seminar." Journal of the American College of Cardiology 75.15 (2020): 1804-1818.
4. Pop, Călin, Diana Țînț, and Antoniu Petris. "Management of antithrombotic therapy in patients with atrial fibrillation and acute coronary syndromes." Reviews in Cardiovascular Medicine 22.3 (2021): 659-675.
5. Hawkins, Nathaniel M., et al. "Impact of cardiology follow-up care on treatment and outcomes of patients with new atrial fibrillation discharged from the emergency department." EP Europace 22.5 (2020): 695-703.

`;
  const [markdownContent, setMarkdownContent] = useState(initialPlan);

  const handleDownload = async () => {
    const blob = new Blob([markdownContent], { type: "text/markdown" });
    saveAs(blob, "plan.md");
  };

  const handleMarkdownChange = (newContent) => {
    setMarkdownContent(newContent);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Comprehensive Rehabilitation Plan
      </h1>
      {/* <div className="mb-4 prose-none">
        <SimpleMDE
          value={markdownContent}
          onChange={(value) => setMarkdownContent(value)}
        />
      </div>
      <article class="prose">
        <Markdown>{markdownContent}</Markdown>
      </article> */}
      {/* <div className="markdown">
        <Markdown>{markdownContent}</Markdown>
      </div> */}

      <article class="prose">
        <div className="max-w-screen-2xl w-screen">
          <RemirrorEditorLive
            initialContent={initialPlan || ""}
            onChange={handleMarkdownChange}
          ></RemirrorEditorLive>
        </div>
      </article>

      <button
        className="mt-4 bg-green-500 border rounded-lg px-2 py-2 text-white"
        onClick={handleDownload}
      >
        Download
      </button>
    </div>
  );
};

export default Plan1;
