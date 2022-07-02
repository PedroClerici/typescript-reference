// More on type guards:
class Employee  {
  constructor(public name: string, public startDate: Date) {
    this.name = name;
    this.startDate = startDate;
  }
};

class Admin  {
  constructor(public name: string, public privileges: string[]) {
    this.name = name;
    this.privileges = privileges;
  }
};

type UnknownEmployee = Employee | Admin

function printEmployeeInfo(employee: UnknownEmployee) {
  console.log('Employee Name: ' + employee.name)

  if (employee instanceof Admin) {
    console.log('Privileges: ' + employee.privileges);
  }

  if (employee instanceof Employee) {
    console.log('Start Date: ' + employee.startDate)
  }
}

let admin = new Admin('Mario', ['Start-Server', 'Check-DataBase'])
let employee = new Employee('Steve', new Date())

let elevatedEmployee: Admin & Employee = {
  name: 'Scott',
  privileges: ['Check-DataBase'],
  startDate: new Date(),
}

printEmployeeInfo(admin);
console.log()
printEmployeeInfo(employee);
console.log()
printEmployeeInfo(elevatedEmployee);