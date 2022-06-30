"use strict";
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        this.name = name;
    }
    User.prototype.greet = function (phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        console.log('Hi!');
    };
    return User;
}());
var user = new User();
user.greet('Hello, my name is');
//# sourceMappingURL=app.js.map