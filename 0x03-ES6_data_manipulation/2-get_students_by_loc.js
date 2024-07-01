export default function getStudentsByLocation(Students, location) {
  return Students.filter((Student) => Student.location === location);
}
