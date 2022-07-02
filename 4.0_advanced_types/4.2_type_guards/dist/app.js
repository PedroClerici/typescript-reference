"use strict";
function printEmployeeInfo(employee) {
    console.log('Employee Name: ' + employee.name);
    if ('privileges' in employee) {
        console.log('Privileges: ' + employee.privileges);
    }
    if ('startDate' in employee) {
        console.log('Start Date: ' + employee.startDate);
    }
}
var admin = {
    name: 'Mario',
    privileges: ['Start-Server', 'Check-DataBase'],
};
var employee = {
    name: 'Steve',
    startDate: new Date(),
};
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