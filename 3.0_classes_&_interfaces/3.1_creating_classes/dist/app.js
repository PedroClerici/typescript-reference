"use strict";
// Creating classes in typescript:
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.describe = function () {
        console.log('Department: ' + this.name);
    };
    return Department;
}());
var accounting = new Department('Accounting');
console.log(accounting);
accounting.describe();
var departmentCopy = { name: 'AccountingCopy', describe: accounting.describe };
departmentCopy.describe();
//# sourceMappingURL=app.js.map