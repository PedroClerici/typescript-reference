"use strict";
// More on type guards:
var Employee = /** @class */ (function () {
    function Employee(name, startDate) {
        this.name = name;
        this.startDate = startDate;
        this.name = name;
        this.startDate = startDate;
    }
    return Employee;
}());
;
var Admin = /** @class */ (function () {
    function Admin(name, privileges) {
        this.name = name;
        this.privileges = privileges;
        this.name = name;
        this.privileges = privileges;
    }
    return Admin;
}());
;
function printEmployeeInfo(employee) {
    console.log('Employee Name: ' + employee.name);
    if (employee instanceof Admin) {
        console.log('Privileges: ' + employee.privileges);
    }
    if (employee instanceof Employee) {
        console.log('Start Date: ' + employee.startDate);
    }
}
var admin = new Admin('Mario', ['Start-Server', 'Check-DataBase']);
var employee = new Employee('Steve', new Date());
var elevatedEmployee = {
    name: 'Scott',
    privileges: ['Check-DataBase'],
    startDate: new Date(),
};
printEmployeeInfo(admin);
console.log();
printEmployeeInfo(employee);
console.log();
printEmployeeInfo(elevatedEmployee);
//# sourceMappingURL=app.js.map