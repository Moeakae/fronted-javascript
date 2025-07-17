// task_4/js/subjects/Java.ts
/// <reference path="Subject.ts" />

namespace Subjects {
  export interface Teacher {
    firstName: string;
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    teacher?: Teacher;

    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingJava > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}

