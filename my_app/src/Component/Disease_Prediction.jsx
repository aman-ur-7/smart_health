import React, { useState } from "react";

const diseases = [
  {
    name: "Influenza (Flu)",
    symptoms: [
      { name: "Fever", options: ["High", "Medium", "Low", "None"] },
      { name: "Cough", options: ["Dry", "Productive"] },
      { name: "Sore Throat", options: ["Yes", "No"] },
      { name: "Fatigue", options: ["Yes", "No"] },
    ],
    consequences: [
      "Rest and hydration are recommended",
      "Over-the-counter medications may help alleviate symptoms",
      "Avoid contact with others to prevent spreading the virus",
    ],
  },
  {
    name: "Common Cold",
    symptoms: [
      { name: "Runny Nose", options: ["Clear", "Yellow/Green"] },
      { name: "Sneezing", options: ["Yes", "No"] },
      { name: "Sore Throat", options: ["Yes", "No"] },
      { name: "Cough", options: ["Dry", "Productive"] },
    ],
    consequences: [
      "Rest and hydration are recommended",
      "Over-the-counter cold medications may help alleviate symptoms",
      "Avoid contact with others to prevent spreading the virus",
    ],
  },
  // Add more diseases...
];

const Disease_Prediction = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState({});
  const [predictedDisease, setPredictedDisease] = useState(null);

  const handleSymptomChange = (diseaseIndex, symptomIndex, option) => {
    setSelectedSymptoms((prevSelectedSymptoms) => ({
      ...prevSelectedSymptoms,
      [diseaseIndex]: {
        ...prevSelectedSymptoms[diseaseIndex],
        [symptomIndex]: option,
      },
    }));
  };

  const handlePredict = () => {
    // Implement disease prediction logic based on selected symptoms
    // For simplicity, let's just select the first disease as prediction
    setPredictedDisease(diseases[0]);
  };

  return (
    <div className="disease-prediction">
      <h1 className="disease-prediction-heading">Disease Prediction</h1>
      {diseases.map((disease, diseaseIndex) => (
        <div key={diseaseIndex} className="diseases-container">
          <h3 className="disease-name">{disease.name}</h3>
          <h4 className="symptoms-heading">Symptoms:</h4>
          <ul className="symptoms-list">
            {disease.symptoms.map((symptom, symptomIndex) => (
              <li key={symptomIndex}>
                <label className="symptom-label">
                  {symptom.name}:
                  <select
                    className="symptom-select"
                    value={selectedSymptoms[diseaseIndex]?.[symptomIndex] || ""}
                    onChange={(e) =>
                      handleSymptomChange(
                        diseaseIndex,
                        symptomIndex,
                        e.target.value
                      )
                    }
                  >
                    <option value="">Select an option</option>
                    {symptom.options.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button className="predict-button" onClick={handlePredict}>
        Predict Disease
      </button>
      {predictedDisease && (
        <div className="prediction-container">
          <h3>Prediction</h3>
          <p>{`Possible ${predictedDisease.name}`}</p>
          <h4>Consequences:</h4>
          <ul>
            {predictedDisease.consequences.map((consequence, index) => (
              <li key={index}>{consequence}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Disease_Prediction;
