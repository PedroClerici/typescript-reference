// Type guards:
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
}

type UnknownEmployee = Admin | Employee;

function printEmployeeInfo(employee: UnknownEmployee) {
  console.log('Employee Name: ' + employee.name)

  if ('privileges' in employee) {
    console.log('Privileges: ' + employee.privileges);
  }

  if ('startDate' in employee) {
    console.log('Start Date: ' + employee.startDate)
  }
}

let admin: Admin = {
  name: 'Mario',
  privileges: ['Start-Server', 'Check-DataBase'],
}

let employee: Employee = {
  name: 'Steve',
  startDate: new Date(),
}

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