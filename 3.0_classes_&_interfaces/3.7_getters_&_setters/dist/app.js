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
// Getter and Setters in (TypeScript / JavaScript):
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
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id) {
        var _this = _super.call(this, 'Accounting', id) || this;
        _this.reports = [];
        _this.lastReport = _this.reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        // Getter example:
        get: function () {
            if (!this.lastReport) {
                throw new Error('No report found');
            }
            return this.lastReport;
        },
        // Setter example:
        set: function (report) {
            this.addReport(report);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
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
var accounting = new AccountingDepartment(1);
accounting.describe();
accounting.addEmployee('Steve');
accounting.addEmployee('Mario');
accounting.logEmployees();
// accounting.addReport('Steve is banned in this department because...');
accounting.mostRecentReport = 'Steve is banned in this department because...';
accounting.logReports();
console.log(accounting.mostRecentReport);
//# sourceMappingURL=app.js.map