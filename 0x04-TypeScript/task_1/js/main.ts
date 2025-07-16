
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
  contract: false,
};

console.log(teacher1);

interface Director extends Teacher {
  numberOfReports: number;
  fullTimeEmployee: boolean;
}

const director1: Director = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'London',
    numberOfReports: 17,
};

console.log(director1);
interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

class StudentClass {}
interface StudentInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName?(): string;
}