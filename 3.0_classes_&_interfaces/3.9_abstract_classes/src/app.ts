// Abstract classes in (TypeScript / JavaScript):
abstract class Department {
  private employees: string[] = [];

  constructor(public name: string, private readonly id: number) {
    this.name = name;
  }

  abstract describe(this: Department): void;

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

  // Implementing abstract method:
  describe(this: Department): void {
    console.log('We are the IT department, we deal with computers problems and related.');
  }

  addAdmin (admin: string) {
    this.admins.push(admin);
    this.addEmployees(admin);
  }

  logAdmins() {
    for (let admin of this.admins) {
      console.log(admin);
    }
  }
}

// OBS: you can't create a instance of a abstract class:
// const accounting = new Department('Accounting', 0);

const itDepartment = new ITDepartment(1);
itDepartment.describe();
itDepartment.addAdmin('Steve');
itDepartment.logAdmins();
itDepartment.logEmployees();