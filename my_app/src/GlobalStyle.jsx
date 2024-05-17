import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    .APP{
        display: grid;
        grid-template-columns: 1fr 4fr;

        &>.RCB_CLINIC{
            background-color:white;
            height: 100vh;
            /* padding: 20px; */
            color: #7F8F98;
            display: flex;
            flex-direction: column;
            gap: 40px;

            :hover{
                cursor: pointer;
            }

            &>div{
                color: #3497F9;
                font-weight: 700;
                font-size: 20px;
                padding:10px ;
            }
            &>main{
                display: flex;
                flex-direction: column;
                font-size: 17px;
                gap: 20px;

                :hover{
                    color: #3497F9;
                    background-color:#EBF5FF;
                    transition: .7s;
                    border-radius: 15px;
                }

                &>div{
                    display: flex;
                    gap:10px;
                    flex-direction: row;
                    align-items: center;
                    padding: 10px;
                }
            }

            &>.RCB_CLINIC{
                font-size: 17px;
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 10px;
                padding: 10px;
            } 
        }
        .CONTAINER{
            background-color: white;
            border-radius:7px;
            padding: 20px;
            height: 87vh;
        }
    }
    .MANAGEMENT{
        background-color: #EBF5FF;
        padding: 30px;
    }

/* DiseasePrediction.css */
.disease-prediction-container {
  font-family: Arial, sans-serif;
  padding: 20px;
}

.disease-prediction-heading {
  text-align: center;
}

.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.diseases-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.disease {
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 300px;
}

.disease-name {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.symptoms-heading {
  font-size: 1rem;
  margin-bottom: 5px;
}

.symptoms-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.symptom-item {
  margin-bottom: 5px;
}

.symptom-label {
  display: flex;
  align-items: center;
}

.symptom-select {
  margin-left: 10px;
}

.flex-row {
  flex-direction: row;
}

.predict-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 20px;
}

.predict-button:hover {
  background-color: #0056b3;
}

.prediction-container {
  margin-top: 20px;
}

.prediction {
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
}

.prediction h3 {
  margin-top: 0;
}

.consequences-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.consequences-item {
  margin-bottom: 5px;
}

`;
