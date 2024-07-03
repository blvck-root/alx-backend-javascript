export default function(students, city, newGrades) {
  if (!Array.isArray(students)) return [];

  const defaultGrade = { grade: "N/A" };
  return students
    .filter((student) => student.location === city)
    .map((student) => ({
      ...student,
      grade: (newGrades
        .filter((grade) => grade.studentId === student.id)
        .pop() || defaultGrade).grade,
    }));
}
