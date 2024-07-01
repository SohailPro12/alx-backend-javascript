export default function updateStudentGradeByCity(Students, city, newGrades) {
 return Students.filter((Student) => newGrades.studentId === Student.id)
    .map((Student) => {
        if (Student.location === city && Student.id === newGrades.studentId) {
            Student.grade = newGrades.grade;
        }
    });
}