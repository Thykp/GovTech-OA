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

module.exports = router;