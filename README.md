# Smart Internship Finder (Full Stack)

**Name:** Shahwaz Alam
**Email:** [your-email@gmail.com](mailto:your-email@gmail.com)
**Skill Track:** Java & API Development
**Assessment:** Deloitte Graduate Hiring Assessment

---

# Project Overview

Smart Internship Finder is a **full-stack web application** that helps students discover internship opportunities based on their technical skills.

The system allows users to:

* View available internships
* Add new internship opportunities
* Search internships by skill
* Get internship recommendations based on skill matching

The backend exposes REST APIs built with **Node.js and Express**, while the frontend is built with **React** to provide an interactive user interface.

---

# Technologies Used

## Backend

* Node.js
* Express.js
* REST API
* Middleware

## Frontend

* React.js
* Axios
* CSS

---

# Project Architecture

```
smart-internship-finder
│
├── backend
│   ├── index.js
│   ├── routes
│   │   └── internshipRoutes.js
│   ├── controllers
│   │   └── internshipController.js
│   ├── data
│   │   └── internships.js
│   └── middleware
│       └── logger.js
│
├── frontend
│   ├── src
│   │   ├── App.js
│   │   ├── api.js
│   │   └── components
│   │       ├── InternshipList.js
│   │       ├── AddInternship.js
│   │       ├── SearchInternship.js
│   │       └── RecommendInternship.js
```

---

# Backend API Endpoints

### Get All Internships

GET /api/internships

Returns the list of all available internships.

---

### Add Internship

POST /api/internships

Example request body:

{
"company": "Netflix",
"role": "Backend Intern",
"skills": ["node","express","mongodb"]
}

---

### Search Internship by Skill

GET /api/internships/search?skill=node

Returns internships that require the specified skill.

---

### Recommend Internships

POST /api/recommend

Example request body:

{
"skills": ["react","node"]
}

Returns internships sorted by **skill match score**.

---

### Delete Internship

DELETE /api/internships/:id

Removes an internship from the system.

---

# Recommendation Algorithm

The system calculates internship relevance by comparing the user's skills with the required internship skills.

Example logic:

1. Compare user skills with internship skills
2. Count matching skills
3. Assign a **match score**
4. Sort internships by highest score

This helps users quickly find the **most relevant internships**.

---

# Running the Project

## Backend Setup

Navigate to backend folder

```
npm install
node index.js
```

Backend will run at:

```
http://localhost:3000
```

---

## Frontend Setup

Navigate to frontend folder

```
npm install
npm start
```

Frontend will run at:

```
http://localhost:3001
```

---

# Features

* RESTful API design
* Internship search by skill
* Skill-based recommendation engine
* Request logging middleware
* Modular backend architecture
* React-based user interface

---

# Future Improvements

Possible enhancements for production use:

* Database integration (MongoDB)
* User authentication
* Resume upload and skill extraction
* Pagination and filtering
* Internship application tracking

---

# Conclusion

This project demonstrates a **full-stack solution** for discovering internships based on skills. It highlights backend API design, recommendation logic, and frontend integration.

Developed as part of the **Deloitte Graduate Hiring Assessment**.
