export default function updateStudentGradeByCity(Students, city, newGrades) {
 return Students.filter((Student) => newGrades.id === Student.id);
}