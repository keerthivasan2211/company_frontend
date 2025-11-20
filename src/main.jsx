import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CompanyProvider } from "./Context/CompanyContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CompanyProvider>
    <App />
  </CompanyProvider>
);
