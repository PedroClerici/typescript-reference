// "private" and "public" access modifiers.
class Department {
  // OBS: public is default.
  public name: string;
  // the "private" key work makes this propriety only accessible inside of the class.
  private employees: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  describe(this: Department) {
    console.log('Department: ' + this.name);
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

const accounting = new Department('Accounting');
console.log(accounting);

accounting.addEmployees('Steve');
accounting.addEmployees('Scott');
accounting.addEmployees('Maria');
// accounting.employees.push('Ana');

accounting.logEmployees();
accounting.describe();