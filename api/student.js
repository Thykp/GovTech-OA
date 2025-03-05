const express = require('express');
const router = express.Router();
const student = require('../model/student');

router.get('/', async (req, res) => {

    try {

        const AllStudentandTeacher = await student.getStudentandTeacher();

        const response = AllStudentandTeacher.map(student => {
            const totalGPA = student.enrollments ? student.enrollments.reduce((sum, e) => sum + e.gpa, 0) : 0;
            const cumulativeGPA = student.enrollments && student.enrollments.length > 0 ? (totalGPA / student.enrollments.length).toFixed(2) : 'N/A';

            return {
                id: student.id,
                name: student.name,
                teacher: student.teacher_student?.[0]?.teacher?.name || 'No Teacher Assigned',
                cumulativeGPA
            };
        });

        res.json(response);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});

router.put('/reassign', async (req, res) => {

    try {

        const { studentId, teacherId } = req.body;

        const reassign = await student.assignTeacher(studentId, teacherId);

        res.json({ message: 'Student reassigned successfully' });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});

router.get('/specific', async (req, res) => {

    try {

        const { from, to } = req.body;
        
        const AllStudentandTeacher = await student.getStudentandTeacher();

        const response = AllStudentandTeacher.map(student => {
            const filteredGPA = student.enrollments
                .filter(e => e.semester >= from && e.semester <= to)
                .map(e => e.gpa);

            const cumulativeGPA = filteredGPA.length ? (filteredGPA.reduce((sum, g) => sum + g, 0) / filteredGPA.length).toFixed(2) : 'N/A';

            return {
                id: student.id,
                name: student.name,
                teacher: student.teacher_student?.[0]?.teacher?.name || 'No Teacher Assigned',
                cumulativeGPA
            };
        });

        res.json(response);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});

module.exports = router;