import React, { useState } from "react";
import API from "../api";

function RecommendInternship() {

  const [skills, setSkills] = useState("");
  const [results, setResults] = useState([]);

  const handleRecommend = async () => {

    const skillsArray = skills.split(",").map(s => s.trim());

    const res = await API.post("/recommend", {
      skills: skillsArray
    });

    setResults(res.data);
  };

  return (
    <div>

      <h2>Get Recommendations</h2>

      <input
        placeholder="Enter skills (comma separated)"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
      />

      <button onClick={handleRecommend}>
        Recommend
      </button>

      {results.map((i) => (
        <div key={i.id} className="card">
          <h3>{i.role}</h3>
          <p>{i.company}</p>
          <p>Match Score: {i.matchScore}</p>
        </div>
      ))}

    </div>
  );
}

export default RecommendInternship;