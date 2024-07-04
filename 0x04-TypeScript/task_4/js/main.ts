import * as Subjects from "./subjects"; // Import all from subjects folder

// Export constants for each subject
export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

// Create a teacher object with experience in Cpp
const cTeacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
};

// Function to display subject information and call methods
function displaySubjectInfo(subject: Subjects.Subject, teacher: Subjects.Teacher) {
  subject.setTeacher(teacher); // Set the teacher for the subject
  console.log(subject.getRequirements()); // Print requirements
  console.log(subject.getAvailableTeacher()); // Print available teacher
}

// Display information for each subject
displaySubjectInfo(cpp, cTeacher);
displaySubjectInfo(java, cTeacher);
displaySubjectInfo(react, cTeacher);
