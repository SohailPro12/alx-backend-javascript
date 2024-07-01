export default function getStudentIdsSum(Students) {
  return Students.reduce((max, Student) => max + Student.id, 0);
}
