// Getter and Setters in (TypeScript / JavaScript):
class Department {
  private employees: string[] = [];
  private reports: string[] = [];
  private lastReport: string = this.reports[0];

  constructor(public name: string, private readonly id: number) {
    this.name = name;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  // Getter example:
  get mostRecentReport() {
    if (!this.lastReport) {
      throw new Error('No report found');
    }

    return this.lastReport;
  }

  // Setter example:
  set mostRecentReport(report: string) {
    this.addReport(report);
  }

  private addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  logReports() {
    for (let report of this.reports) {
      console.log(report);
    }
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

const accounting = new Department('Accounting', 1);

accounting.describe();
accounting.addEmployee('Steve');
accounting.addEmployee('Mario');
accounting.logEmployees();
// accounting.addReport('Something wrong happened...');
accounting.mostRecentReport = 'Something wrong happened...';
accounting.logReports();
console.log(accounting.mostRecentReport);