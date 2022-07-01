// Inheritance in (TypeScript / JavaScript):
class Department {
  private employees: string[] = [];

  constructor(public name: string, private readonly id: number) {
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

class ITDepartment extends Department {
  private admins: string[] = [];

  constructor(id:number) {
    super('IT Department', id);
  }

  addAdmin (admin: string) {
    this.admins.push(admin);
  }

  logAdmins() {
    for (let admin of this.admins) {
      console.log(admin);
    }
  }
}

const itDepartment = new ITDepartment(1);
itDepartment.describe();
itDepartment.addAdmin('Steve');
itDepartment.logAdmins();