import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import DiceContextProvider from "./context/DiceContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DiceContextProvider>
      <App />
    </DiceContextProvider>
  </React.StrictMode>
);
