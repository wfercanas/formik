import React from "react";
import ReactDOM from "react-dom/client";
// import { SignupForm } from "./html";
// import { SignupForm } from "./yup";
// import { SignupForm } from "./boilerplate";
// import { SignupForm } from "./context";
import { SignupForm } from "./useField";

function App() {
  return <SignupForm />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
