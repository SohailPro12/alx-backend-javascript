export default function updateStudentGradeByCity(Students, city, newGrades) {
 return Students.filter((Student) => newGrades.id === Student.id)
    .map((Student) => {
        if (Student.location === city && Student.id === newGrades.id) {
            Student.grade = newGrades.grade;
        }
    });
}