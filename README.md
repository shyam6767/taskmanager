# Task Manager
 
A full stack task management web app built with Spring Boot and React. Create, update, and delete tasks with priority levels and status tracking.
 
---
 
## Live Demo
 
| Layer | Link |
|---|---|
| Web App | [taskmanager-seven-rouge.vercel.app](https://taskmanager-seven-rouge.vercel.app/) |
| API | [taskmanager-3u3t.onrender.com](https://taskmanager-3u3t.onrender.com) |
 
---
 
## Tech Stack
 
| Layer | Technology |
|---|---|
| Frontend | React, CSS |
| Backend | Java, Spring Boot, Spring Data JPA |
| Database | MySQL (Clever Cloud) |
| Deployment | Vercel (frontend), Render (backend) |
 
---
 
## Features
 
- Add tasks with title, description and priority
- Update task status — Pending, In Progress, Completed
- Delete tasks
- Data persists across sessions via MySQL database
---
 
## API Reference
 
Base URL: `https://taskmanager-3u3t.onrender.com`
 
| Method | Endpoint | Description |
|---|---|---|
| GET | /tasks | Fetch all tasks |
| POST | /tasks | Create a new task |
| PUT | /tasks/{id} | Update a task |
| DELETE | /tasks/{id} | Delete a task |
 
**POST /tasks request body:**
```json
{
  "title": "Task title",
  "description": "Optional description",
  "priority": "High"
}
```
 
---
 
## Project Structure
 
```
taskmanager-project/
├── src/
│   └── main/
│       ├── java/com/shyam/taskmanager/
│       │   ├── TaskmanagerApplication.java
│       │   ├── Task.java
│       │   ├── TaskRepository.java
│       │   └── TaskController.java
│       └── resources/
│           └── application.properties
├── frontend/
│   └── src/
│       └── App.js
├── Dockerfile
└── pom.xml
```
 
---
 
## Run Locally
 
### Backend
```bash
# Run Spring Boot app from VS Code
# Open TaskmanagerApplication.java and click Run
# API starts on http://localhost:8080
```
 
### Frontend
```bash
cd frontend
npm install
npm start
# App starts on http://localhost:3000
```
 
---
 
## Contributors
 
- [shyam6767](https://github.com/shyam6767)