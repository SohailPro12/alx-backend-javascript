export default function updateStudentGradeByCity(Students, city, newGrades) {
  const defaultGrade = { grade: 'N/A'};
  return Students
  .filter((Student) => Student.location === city)
  .map((Student) => ({
      id: Student.id,
      firstName: Student.firstName,
      location: Student.location,
      grade: (newGrades
         .filter((grade) => grade.StudentId === Student.id)
         .pop() || defaultGrade).grade
   }));
}