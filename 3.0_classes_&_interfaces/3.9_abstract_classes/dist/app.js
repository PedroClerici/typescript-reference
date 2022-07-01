"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Abstract classes in (TypeScript / JavaScript):
var Department = /** @class */ (function () {
    function Department(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
        this.name = name;
    }
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
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id) {
        var _this = _super.call(this, 'IT Department', id) || this;
        _this.admins = [];
        return _this;
    }
    // Implementing abstract method:
    ITDepartment.prototype.describe = function () {
        console.log('We are the IT department, we deal with computers problems and related.');
    };
    ITDepartment.prototype.addAdmin = function (admin) {
        this.admins.push(admin);
        this.addEmployees(admin);
    };
    ITDepartment.prototype.logAdmins = function () {
        for (var _i = 0, _a = this.admins; _i < _a.length; _i++) {
            var admin = _a[_i];
            console.log(admin);
        }
    };
    return ITDepartment;
}(Department));
// OBS: you can't create a instance of a abstract class:
// const accounting = new Department('Accounting', 0);
var itDepartment = new ITDepartment(1);
itDepartment.describe();
itDepartment.addAdmin('Steve');
itDepartment.logAdmins();
itDepartment.logEmployees();
//# sourceMappingURL=app.js.map