const express = require("express");
const app = express();

const logger = require("./middleware/logger");

const internshipRoutes = require("./routes/internshipRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger);

app.use("/api", internshipRoutes);

app.get("/", (req, res) => {
  res.send("Smart Internship Finder API is running");
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});