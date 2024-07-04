namespace Subjects {
  export class Subject {
    private teacher: Subjects.Teacher;

    constructor() {
      this.teacher = undefined;
    }

    public setTeacher(teacher: Subjects.Teacher) {
      this.teacher = teacher;
    }
  }
}
