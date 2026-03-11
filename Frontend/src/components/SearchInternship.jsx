import React, { useState } from "react";
import API from "../api";

function SearchInternship() {

  const [skill, setSkill] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {

    const res = await API.get(`/internships/search?skill=${skill}`);

    setResults(res.data);
  };

  return (
    <div>

      <h2>Search Internship</h2>

      <input
        placeholder="Enter skill"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />

      <button onClick={handleSearch}>
        Search
      </button>

      {results.map((i) => (
        <div key={i.id} className="card">
          <h3>{i.role}</h3>
          <p>{i.company}</p>
        </div>
      ))}

    </div>
  );
}

export default SearchInternship;