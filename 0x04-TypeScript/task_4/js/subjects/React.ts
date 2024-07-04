namespace Subjects {
  // Add experienceTeachingReact to Teacher interface using declaration merging
  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingC?: number; // Existing property from Cpp.ts
    experienceTeachingReact?: number; // Optional property
  }

  export class React {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      if (!this.teacher || !this.teacher.experienceTeachingReact) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
