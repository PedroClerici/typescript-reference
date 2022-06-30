"use strict";
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        this.name = name;
    }
    User.prototype.greet = function (phrase) {
        console.log(phrase + ' ' + this.name);
    };
    return User;
}());
var user = new User('Steve');
user.greet('Hello, my name is');
//# sourceMappingURL=app.js.map