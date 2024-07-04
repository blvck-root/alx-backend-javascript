namespace Subjects {
  // Add experienceTeachingC to Teacher interface using declaration merging
  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingC?: number; // Optional property
  }

  export class Cpp extends Subjects.Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      if (!this.teacher || !this.teacher.experienceTeachingC) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
