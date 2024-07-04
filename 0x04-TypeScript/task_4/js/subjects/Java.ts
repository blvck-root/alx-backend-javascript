namespace Subjects {
  // Add experienceTeachingJava to Teacher interface using declaration merging
  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingC?: number; // Existing property from Cpp.ts
    experienceTeachingReact?: number; // Existing property from React.ts
    experienceTeachingJava?: number; // Optional property
  }

  export class Java {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      if (!this.teacher || !this.teacher.experienceTeachingJava) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
