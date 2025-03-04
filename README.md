# GovTech-OA

## SQL Script
```bash
-- Insert Teachers
INSERT INTO teachers (id, name) VALUES
(gen_random_uuid(), 'Dr. Smith'),
(gen_random_uuid(), 'Prof. Johnson');

-- Insert Students
INSERT INTO students (id, name) VALUES
(gen_random_uuid(), 'Alice'),
(gen_random_uuid(), 'Bob'),
(gen_random_uuid(), 'Charlie'),
(gen_random_uuid(), 'David'),
(gen_random_uuid(), 'Eve'),
(gen_random_uuid(), 'Frank'),
(gen_random_uuid(), 'Grace'),
(gen_random_uuid(), 'Hannah'),
(gen_random_uuid(), 'Isaac'),
(gen_random_uuid(), 'Jack');

-- Assign Teachers to Students (5 per teacher)
INSERT INTO teacher_student (teacher_id, student_id)
SELECT (SELECT id FROM teachers ORDER BY RANDOM() LIMIT 1), id FROM students ORDER BY RANDOM() LIMIT 5;

INSERT INTO teacher_student (teacher_id, student_id)
SELECT (SELECT id FROM teachers ORDER BY RANDOM() LIMIT 1), id FROM students ORDER BY RANDOM() OFFSET 5 LIMIT 5;

-- Insert Courses
INSERT INTO courses (id, name) VALUES
(gen_random_uuid(), 'Mathematics'),
(gen_random_uuid(), 'Science'),
(gen_random_uuid(), 'History'),
(gen_random_uuid(), 'Literature'),
(gen_random_uuid(), 'Computer Science');

-- Insert Enrollments (Mock GPA Mapping: A=4.0, B=3.0, C=2.0, D=1.0, F=0.0)
INSERT INTO enrollments (student_id, course_id, semester, grade, gpa)
SELECT
    (SELECT id FROM students ORDER BY RANDOM() LIMIT 1),
    (SELECT id FROM courses ORDER BY RANDOM() LIMIT 1),
    '2023-S1',
    'A',
    4.0;

INSERT INTO enrollments (student_id, course_id, semester, grade, gpa)
SELECT
    (SELECT id FROM students ORDER BY RANDOM() LIMIT 1),
    (SELECT id FROM courses ORDER BY RANDOM() LIMIT 1),
    '2023-S2',
    'B',
    3.0;

```
