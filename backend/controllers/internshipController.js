let internships = require("../data/internships");

exports.getAllInternships = (req, res) => {
  res.json(internships);
};

exports.addInternship = (req, res) => {
  const { company, role, skills } = req.body;

  if (!company || !role || !skills) {
    return res.status(400).json({
      message: "company, role, and skills are required"
    });
  }

  const newInternship = {
    id: internships.length + 1,
    company,
    role,
    skills
  };

  internships.push(newInternship);

  res.status(201).json({
    message: "Internship added successfully",
    data: newInternship
  });
};

exports.deleteInternship = (req, res) => {
  const id = parseInt(req.params.id);

  const index = internships.findIndex(i => i.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Internship not found"
    });
  }

  internships.splice(index, 1);

  res.json({
    message: "Internship deleted successfully"
  });
};

exports.searchInternship = (req, res) => {
  const skill = req.query.skill;

  if (!skill) {
    return res.status(400).json({
      message: "Skill query parameter required"
    });
  }

  const result = internships.filter(internship =>
    internship.skills.includes(skill.toLowerCase())
  );

  res.json(result);
};

exports.recommendInternships = (req, res) => {
  const { skills } = req.body;

  if (!skills || skills.length === 0) {
    return res.status(400).json({
      message: "Skills array required"
    });
  }

  const recommendations = internships.map(internship => {

    const internshipSkills = Array.isArray(internship.skills)
      ? internship.skills
      : [];

    const matchCount = internshipSkills.filter(skill =>
      skills.includes(skill)
    ).length;

    return {
      ...internship,
      matchScore: matchCount
    };
  });

  recommendations.sort((a, b) => b.matchScore - a.matchScore);

  res.json(recommendations);
};