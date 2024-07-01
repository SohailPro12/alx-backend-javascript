export default function getListStudentIds(Students) {
  if (Array.isArray(Students)) {
    return Students.map((student) => student.id);
  } else {
    return [];
  }
}