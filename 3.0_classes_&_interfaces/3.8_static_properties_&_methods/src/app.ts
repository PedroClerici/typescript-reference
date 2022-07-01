// Read-only property:
class Department {
  // public name: string;
  private readonly id: number;
  // Static property example:
  private static id: number = 1;
  private employees: string[] = [];

  constructor(public name: string) {
    this.name = name;
    this.id = Department.id;
    Department.id++;
  }

  // Static method example:
  static describe(department: Department) {
    console.log(`Department (${department.id}): ${department.name}`);
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployees(this: Department, employee: string)  {
    this.employees.push(employee);
    // this.id++;
  }

  logEmployees(this: Department) {
    for (let employee of this.employees) {
      console.log(employee);
    }
  }
}

const accounting = new Department('Accounting');
const itDepartment = new Department('IT Department');

accounting.describe();
Department.describe(itDepartment);