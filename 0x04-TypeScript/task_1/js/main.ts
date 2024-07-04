export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;  // optional
  location: string;
  [key: string]: any;  // Additional properties
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export function printTeacher(firstName: string, lastName: string): string {
  return `${firsitName[0]}. ${lastName}`;
}

export interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

export interface Student {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements Student {
  private firstName: string;
  private lastName!: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
}
