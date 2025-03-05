'use strict';
const { supabase } = require('../util/db');
const studentTable = 'student';

module.exports = {

    async getStudentandTeacher() {
        const { data, error } = await supabase
            .from(studentTable)
            .select(`
                id, 
                name, 
                teacher_student(teacher_id, teacher:teacher(name)), 
                enrollments(gpa)
            `);

        if (error) {
            throw new Error(error.message);
        }

        return data;
    },
    
}