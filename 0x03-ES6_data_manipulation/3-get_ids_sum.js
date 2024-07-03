export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) return 0;
  return students.reduce((a, b) => a + b.id, 0,);
}
