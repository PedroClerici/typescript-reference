"use strict";
// "private" and "public" access modifiers.
var Department = /** @class */ (function () {
    function Department(name) {
        // the "private" key work makes this propriety only accessible inside of the class.
        this.employees = [];
        this.name = name;
    }
    Department.prototype.describe = function () {
        console.log('Department: ' + this.name);
    };
    Department.prototype.addEmployees = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.logEmployees = function () {
        for (var _i = 0, _a = this.employees; _i < _a.length; _i++) {
            var employee = _a[_i];
            console.log(employee);
        }
    };
    return Department;
}());
var accounting = new Department('Accounting');
console.log(accounting);
accounting.addEmployees('Steve');
accounting.addEmployees('Scott');
accounting.addEmployees('Maria');
// accounting.employees.push('Ana');
accounting.logEmployees();
accounting.describe();
//# sourceMappingURL=app.js.map