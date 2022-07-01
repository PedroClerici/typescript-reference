"use strict";
// Read-only property:
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
        this.employees = [];
        this.name = name;
        this.id = Department.id;
        Department.id++;
    }
    // Static method example:
    Department.describe = function (department) {
        console.log("Department (".concat(department.id, "): ").concat(department.name));
    };
    Department.prototype.describe = function () {
        console.log("Department (".concat(this.id, "): ").concat(this.name));
    };
    Department.prototype.addEmployees = function (employee) {
        this.employees.push(employee);
        // this.id++;
    };
    Department.prototype.logEmployees = function () {
        for (var _i = 0, _a = this.employees; _i < _a.length; _i++) {
            var employee = _a[_i];
            console.log(employee);
        }
    };
    // Static property example:
    Department.id = 1;
    return Department;
}());
var accounting = new Department('Accounting');
var itDepartment = new Department('IT Department');
accounting.describe();
Department.describe(itDepartment);
//# sourceMappingURL=app.js.map