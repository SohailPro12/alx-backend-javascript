//task 1
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index:string]: any;
}
// task 2
export interface Directors extends Teacher {
  numberOfReports: number;
}

//task 3
export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// task 4 
export class StudentClass implements IStudentClass {
  private _firstName!: string;
  private _lastName!: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this._firstName;
  }
}
export interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

export function createStudent(ctor: IStudentClassConstructor, firstName: string, lastName: string): IStudentClass {
  return new ctor(firstName, lastName);
}


export interface IStudentClassConstructor {
  new (firstName: string, lastName: string): IStudentClass;
}

