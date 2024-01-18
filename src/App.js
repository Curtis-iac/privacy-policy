import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PrivacyPolicyScreen from "./PrivacyPolicyScreen";
import './App.css';

function Home() {
  return (
    <div>
    <PrivacyPolicyScreen />
        <Link to="/privacy-policy" className="App-link">
      .
        </Link>

    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyScreen />} />
      </Routes>
    </Router>
  );
}

export default App;