"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function WithTemplate(hookId) {
    console.log('Rendering template...');
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(...args) {
                super(...args);
                const element = document.getElementById(hookId);
                const header = document.createElement('h1');
                header.innerText = this.name;
                if (element) {
                    element.append(header);
                }
                else {
                    throw new Error("Could'nt find element with hookId");
                }
            }
        };
    };
}
let User = class User {
    constructor(name) {
        console.log('Creating user...');
        this.name = name;
    }
};
User = __decorate([
    WithTemplate('app')
], User);
const names = ['Steve', 'Maria', 'Scott'];
names.forEach(name => {
    new User(name);
});
//# sourceMappingURL=app.js.map