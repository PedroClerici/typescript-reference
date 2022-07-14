"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const registeredValidator = {};
function Required(target, propertyName) {
    registeredValidator[target.constructor.name] = Object.assign(Object.assign({}, registeredValidator[target.constructor.name]), { [propertyName]: ['required'] });
}
function PositiveNumber(target, propertyName) {
    registeredValidator[target.constructor.name] = Object.assign(Object.assign({}, registeredValidator[target.constructor.name]), { [propertyName]: ['positive'] });
}
function validate(object) {
    const objectValidatorConfig = registeredValidator[object.constructor.name];
    if (!objectValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const property in objectValidatorConfig) {
        for (const validator of objectValidatorConfig[property]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!object[property];
                    break;
                case 'positive':
                    isValid = isValid && object[property] > 0;
                    break;
            }
        }
    }
    return isValid;
}
class Course {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector('form');
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleNode = document.getElementById('title');
    const priceNode = document.getElementById('price');
    const title = titleNode.value;
    const price = +priceNode.value;
    const createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        alert('Invalid input, please try again...');
        return;
    }
    else {
        console.log(createdCourse);
    }
});
//# sourceMappingURL=app.js.map