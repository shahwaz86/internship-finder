const express = require("express");
const router = express.Router();

const {
  getAllInternships,
  addInternship,
  deleteInternship,
  searchInternship,
  recommendInternships
} = require("../controllers/internshipController");

router.get("/internships", getAllInternships);

router.post("/internships", addInternship);

router.delete("/internships/:id", deleteInternship);

router.get("/internships/search", searchInternship);

router.post("/recommend", recommendInternships);

module.exports = router;