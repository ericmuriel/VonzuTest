import ExpeditionPage from "./pages/ExpeditionPage";
import React from "react";
import "./styles.css";
import GenericContextProvider from "./context/GenericContext";

export default function App() {
  return (
    <div className="App">
      <GenericContextProvider>
        <ExpeditionPage />
      </GenericContextProvider>
    </div>

  );
}
