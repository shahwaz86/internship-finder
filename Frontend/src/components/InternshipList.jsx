import React, { useEffect, useState } from "react";
import API from "../api";

function InternshipList() {

  const [internships, setInternships] = useState([]);

  const fetchInternships = async () => {
    const res = await API.get("/internships");
    setInternships(res.data);
  };

  useEffect(() => {
    fetchInternships();
  }, []);

  return (
    <div>
      <h2>All Internships</h2>

      {internships.map((i) => (
        <div key={i.id} className="card">
          <h3>{i.role}</h3>
          <p>{i.company}</p>
          <p>Skills: {i.skills.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}

export default InternshipList;