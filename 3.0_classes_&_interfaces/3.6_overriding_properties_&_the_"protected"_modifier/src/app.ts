// Overriding properties & the "protected" modifier:
class Department {
  protected employees: string[] = [];

  constructor(public name: string, private readonly id: number) {
    this.name = name;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(this: Department, employee: string)  {
    this.employees.push(employee);
  }

  logEmployees(this: Department) {
    for (let employee of this.employees) {
      console.log(employee);
    }
  }
}

class AccountingDepartment extends Department {
  private reports: string[] = [];

  constructor(id:number) {
    super('Accounting', id);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  logReports() {
    for (let report of this.reports) {
      console.log(report);
    }
  }

  addEmployee(this: AccountingDepartment, employee: string): void {
    if (employee === 'Steve') {
      return;
    }

    this.employees.push(employee);
  }
}

const accounting = new AccountingDepartment(2);

accounting.describe();
accounting.addEmployee('Steve');
accounting.addEmployee('Mario');
accounting.logEmployees();
accounting.addReport('Steve is banned in this department because...');
accounting.logReports();