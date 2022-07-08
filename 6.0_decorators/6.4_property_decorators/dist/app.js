"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Property decorators:
function Logger(target, propertyName) {
    console.log('Running Property Decorator...');
    console.log(target, propertyName);
}
class product {
    constructor(title, price) {
        this.title = title;
        this._price = price;
    }
    set price(newPrice) {
        if (newPrice > 0) {
            this._price = newPrice;
        }
        else {
            throw new Error('Invalid Price!');
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Logger
], product.prototype, "title", void 0);
//# sourceMappingURL=app.js.map