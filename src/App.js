import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QuantumCats from "./components/QuantumCats";
import OrdinalMaxiBiz from "./components/OrdinalMaxiBiz";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/quantum-cats" element={<QuantumCats />} />
          <Route path="/ordinal-maxi-biz" element={<OrdinalMaxiBiz />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
