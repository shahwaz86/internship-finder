import React from "react";
import InternshipList from "./components/InternshipList";
import AddInternship from "./components/AddInternship";
import SearchInternship from "./components/SearchInternship";
import RecommendInternship from "./components/RecommendInternship";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Smart Internship Finder</h1>

      <AddInternship />

      <SearchInternship />

      <RecommendInternship />

      <InternshipList />
    </div>
  );
}

export default App;