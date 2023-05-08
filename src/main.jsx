import React from "react";
import ReactDOM from "react-dom/client";
import { SignupForm } from "./html";

function App() {
  return <SignupForm />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
