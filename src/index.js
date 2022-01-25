import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import Homepage from "./homePage";
import ResearchPage from "./researchPage";
import SurveyPage from "./surveyPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="research" element={<ResearchPage />} />
        <Route path="survey" element={<SurveyPage />} />
      </Routes>
    </BrowserRouter>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);
