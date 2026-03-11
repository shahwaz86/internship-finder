import React, { useState } from "react";
import API from "../api";

function AddInternship() {

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [skills, setSkills] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const skillsArray = skills.split(",").map(s => s.trim());

    await API.post("/internships", {
      company,
      role,
      skills: skillsArray
    });

    alert("Internship Added");

    setCompany("");
    setRole("");
    setSkills("");
  };

  return (
    <div>
      <h2>Add Internship</h2>

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <input
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <input
          placeholder="Skills (comma separated)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />

        <button type="submit">Add</button>

      </form>
    </div>
  );
}

export default AddInternship;