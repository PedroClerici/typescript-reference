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
// Overriding properties & the "protected" modifier:
var Department = /** @class */ (function () {
    function Department(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
        this.name = name;
    }
    Department.prototype.describe = function () {
        console.log("Department (".concat(this.id, "): ").concat(this.name));
    };
    Department.prototype.addEmployee = function (employee) {
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
    ITDepartment.prototype.addAdmin = function (admin) {
        this.admins.push(admin);
    };
    ITDepartment.prototype.logAdmins = function () {
        for (var _i = 0, _a = this.admins; _i < _a.length; _i++) {
            var admin = _a[_i];
            console.log(admin);
        }
    };
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id) {
        var _this = _super.call(this, 'Accounting', id) || this;
        _this.reports = [];
        return _this;
    }
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
    };
    AccountingDepartment.prototype.logReports = function () {
        for (var _i = 0, _a = this.reports; _i < _a.length; _i++) {
            var report = _a[_i];
            console.log(report);
        }
    };
    AccountingDepartment.prototype.addEmployee = function (employee) {
        if (employee === 'Steve') {
            return;
        }
        this.employees.push(employee);
    };
    return AccountingDepartment;
}(Department));
var accounting = new AccountingDepartment(2);
var itDepartment = new ITDepartment(1);
itDepartment.describe();
itDepartment.addAdmin('Steve');
itDepartment.logAdmins();
accounting.describe();
accounting.addEmployee('Steve');
accounting.addEmployee('Mario');
accounting.logEmployees();
accounting.addReport('Steve is banned in this department because...');
accounting.logReports();
//# sourceMappingURL=app.js.map