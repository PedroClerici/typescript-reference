// Shorthand Initialization:
class Department {
  // public name: string;
  // private id: number;
  private employees: string[] = [];

  constructor(public name: string, private id: number) {
    this.name = name;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployees(this: Department, employee: string)  {
    this.employees.push(employee);
  }

  logEmployees(this: Department) {
    for (let employee of this.employees) {
      console.log(employee);
    }
  }
}

const accounting = new Department('Accounting', 1);
console.log(accounting);

accounting.addEmployees('Steve');
accounting.addEmployees('Scott');
accounting.addEmployees('Maria');
// accounting.employees.push('Ana');

accounting.logEmployees();
accounting.describe();