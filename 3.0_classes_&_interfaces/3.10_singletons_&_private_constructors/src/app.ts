// Singletons & private constructors:
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

// Creating a Singleton Class:
class AccountingDepartment extends Department {
  private reports: string[] = [];
  private static instance: AccountingDepartment;

  private constructor(id:number) {
    super('Accounting', id);
  }

  static getInstance() {
    if(!AccountingDepartment) {
      this.instance = new AccountingDepartment(1);
    }

    return this.instance;
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  logReports() {
    for (let report of this.reports) {
      console.log(report);
    }
  }
}

const accounting = AccountingDepartment.getInstance();
console.log(accounting);

accounting.addEmployees('Steve');
accounting.addEmployees('Scott');
accounting.addEmployees('Maria');

accounting.logEmployees();
accounting.describe();