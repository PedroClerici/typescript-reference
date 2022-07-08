"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorator factories:
function WithTemplate(template, hookId) {
    return function (_) {
        const element = document.getElementById(hookId);
        if (element) {
            element.innerHTML = template;
        }
    };
}
let User = class User {
    constructor() {
        this.name = 'Steve';
        console.log('Creating user...');
    }
};
User = __decorate([
    WithTemplate('<h1>My User Instance</h1>', 'app')
], User);
const user = new User();
//# sourceMappingURL=app.js.map