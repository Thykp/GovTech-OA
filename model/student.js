'use strict';
const { supabase } = require('../util/db');
const studentTable = 'student';
const teacherStudentTable = 'teacher_student';

module.exports = {

    async getStudentandTeacher() {
        const { data, error } = await supabase
            .from(studentTable)
            .select(`
                id, 
                name, 
                teacher_student(teacher_id, teacher:teacher(name)), 
                enrollments(gpa, semester)
            `);

        if (error) {
            throw new Error(error.message);
        }

        return data;
    },

    async assignTeacher(studentId, teacherId) {
        const { data, error } = await supabase
            .from(teacherStudentTable)
            .update({ teacher_id: teacherId })
            .eq('student_id', studentId);

        if (error) {
            throw new Error(error.message);
        }

        return data;
    }

}