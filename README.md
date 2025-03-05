# GovTech Product Operations Tooling Backend Assignment <br> By Kendrick Poon (SMU Y2)
<p>
This assignment is option 2 of the assignment provided in the document. It is a REST API backend designed for a school database system.
</p>
<p>
It enables querying and updating student data efficiently using JavaScript + Node.js + Express + Supabase (PostgreSQL) as the backend.
</p>
<p>
The backend follows a MVC architecture where the backend is structured into /backend/api that are API endpoints and /backend/model folders that query Supabase for data.
</p>

## Tech Stack
<p align="center">
<a href="https://www.python.org/"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="Javascript" height="40"/></a>&nbsp;&nbsp;
<a href="https://go.dev/"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Golang" width="70"/></a>&nbsp;&nbsp;
<a href="https://go.dev/"><img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="Golang" width="100"/></a>&nbsp;&nbsp;
<a href="https://www.postgresql.org/"><img src="https://www.vectorlogo.zone/logos/supabase/supabase-ar21~bgwhite.svg" alt="Supabase" height="65"/></a>&nbsp;&nbsp;
<a href="https://www.docker.com/"><img src="https://www.docker.com/wp-content/uploads/2022/03/horizontal-logo-monochromatic-white.png" alt="Docker" height="30"/></a>&nbsp;&nbsp;
<br>
<i>Javascript · Node.js · Express · Supabase · Docker </i>

## Technical Architecture (Backend)
<img width="634" alt="Screenshot 2025-03-05 at 11 59 12 AM" src="https://github.com/user-attachments/assets/1fe09fd6-5715-4c29-97cb-5ed93db3d9ff" />
<img width="682" alt="Screenshot 2025-03-05 at 12 01 14 PM" src="https://github.com/user-attachments/assets/e0489972-ddf0-4443-8490-d872b5ddab36" />


## Database Architecture (Supabase)
![supabase-schema-rpguwdcndshpwzivbpem](https://github.com/user-attachments/assets/ea3ccea9-c09e-43f9-a59b-b737f60367dc)

## Features

- Stores student, teacher, course, and grade data in a structured database. (Bonus)
- Provides REST API endpoints to retrieve and update student records.
- Uses Supabase for cloud-based PostgreSQL storage. (Bonus)
- Dockerized for easy deployment. (Bonus)

## Prerequisites

- [Node.js](https://nodejs.org/) (if running locally)
- [Docker](https://www.docker.com/) (for containerized deployment)
- [Postman] (to test API Endpoint)
- [Browser] (if testing endpoints on web browser)
- Mock Data has already been inserted into Supabase
- Supabase .env keys (below)
- Create a .env file in the project root with the required Supabase credentials:
```bash
SUPABASE_URL="https://rpguwdcndshpwzivbpem.supabase.co"
SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwZ3V3ZGNuZHNocHd6aXZicGVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwNjc4OTAsImV4cCI6MjA1NjY0Mzg5MH0.k1e3KnW6bKjsnGrM2BRKkkqBs26D5sf0io9xSV2wueQ"
```

## Setup Instructions

### Option 1 (With Docker):
#### Build and Start the Container
```bash
docker-compose up --build
```
Server should be running on localhost:3000
#### Stopping the Containers
```bash
docker-compose down
```
<br>

### Option 2 (Without Docker, running locally):
```bash
npm i
npm run start
```

## API Endpoints
### 1. Retrieve Student Information
#### Get /student
Expected Response:
```bash
[
    {
        "id": "3d945b8c-3f00-49e0-b2a7-3e58d5853ef9",
        "name": "Alice",
        "teacher": "Dr. Smith",
        "cumulativeGPA": "2.25"
    },
    {
        "id": "e119ca4b-41f4-42ba-9cf2-8586c4fbe0fa",
        "name": "Bob",
        "teacher": "Prof. Johnson",
        "cumulativeGPA": "1.38"
    },
    {
        "id": "e7351274-e75e-45d8-8b5c-54814a60adde",
        "name": "Charlie",
        "teacher": "Prof. Johnson",
        "cumulativeGPA": "2.88"
    },
    {
        "id": "ac1107c2-94d3-44bd-a4e6-fe5a9ecf147d",
        "name": "David",
        "teacher": "Prof. Johnson",
        "cumulativeGPA": "1.75"
    },
    {
        "id": "e43fdde9-9da2-4cca-b407-1bd5504659c5",
        "name": "Eve",
        "teacher": "Prof. Johnson",
        "cumulativeGPA": "2.63"
    },
    {
        "id": "db064ae2-b640-4768-afb2-a8e9f7e8cb3f",
        "name": "Frank",
        "teacher": "Prof. Johnson",
        "cumulativeGPA": "2.63"
    },
    {
        "id": "cfdfed52-877e-4b20-bc8b-de8df2b1a939",
        "name": "Grace",
        "teacher": "Dr. Smith",
        "cumulativeGPA": "2.00"
    },
    {
        "id": "2fd73e18-183d-4ce2-b254-f842368a1df6",
        "name": "Hannah",
        "teacher": "Dr. Smith",
        "cumulativeGPA": "1.88"
    },
    {
        "id": "4200dcc6-fe8f-4f85-9cc8-199dbe0d0f71",
        "name": "Isaac",
        "teacher": "Dr. Smith",
        "cumulativeGPA": "2.50"
    },
    {
        "id": "0e4ed037-a388-436c-a202-e31c49344c05",
        "name": "Jack",
        "teacher": "Prof. Johnson",
        "cumulativeGPA": "3.38"
    }
]
```

### 2. Reassign Student to a New Teacher
#### Put /student/reassign
Request Body:
```bash
{
  "studentId": "insert_new_student_id_here",
  "teacherId": "insert_new_teacher_id_here"
}
```

Expected Response:
```bash
{
  "message": "Student reassigned successfully"
}
```

To check, can call /student to see the change in reassignment of teacher

### 3. Retrieve Cumulative GPA Within a Timeframe (Bonus)
#### Get /student/specific?from=YYYY-SS&to=YYYY-SS
Example:
```bash
http://localhost:3000/student/specific?from=2023-S1&to=2026-S2
```
Change the "from" and "to" values respectively to get the desired cGPA in the timeframe specified

## Assumptions & Notes
- The database schema follows a structured relation between students, teachers, and courses.
- All students take one course per semester, and their GPA is calculated accordingly.
- The API adheres to REST principles and uses JSON responses.

## Personal thoughts and reflection
I was inspired to do something similar that I had done from my past project at SMU .Hack HEAP where I also used a Node, Express and Supabase stack for a MVC Backend. I Chose to use this architecture as it is easily scalable and very easy to read and onboard for new developers.
<br>
The Frontend would call an API Endpoint which is routed via the /api/index.js file which then routes the api to the correct folder (in this case /api/student). Once in the /student route, it calls upon the API Endpoint and then calls the async function in the Models folder /model/student.js. 
<br>
The models interact directly with the database (Supabase) to query for the needed data and sends it back to the api to be loaded in the frontend.
<br>
Supabase was my go to cloud PostgreSQL database as it offers easy setup and a relational database which i used to map out the foreign key needed to link the student and teacher.








