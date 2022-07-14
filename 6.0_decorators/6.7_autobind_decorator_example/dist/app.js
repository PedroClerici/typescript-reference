"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Creating a auto bind decorator:
function AutoBind(target, methodName, descriptor) {
    const originalMethod = descriptor.value;
    const adjustedDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const bindFunction = originalMethod.bind(this);
            return bindFunction;
        }
    };
    return adjustedDescriptor;
}
class Printer {
    constructor(message) {
        this.message = message;
    }
    showMessage() {
        alert(this.message);
    }
}
__decorate([
    AutoBind
], Printer.prototype, "showMessage", null);
const printer = new Printer('Hello, world!');
const button = document.querySelector('button');
// button.addEventListener('click', printer.showMessage.bind(printer));
button.addEventListener('click', printer.showMessage);
//# sourceMappingURL=app.js.map