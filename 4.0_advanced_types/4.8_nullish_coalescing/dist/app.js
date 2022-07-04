"use strict";
// Type casting in TypeScript:
var form = document.querySelector('form');
// Type casting examples:
var email = document.getElementById('email');
var password = document.getElementById('password');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var passwordCensured = '';
    for (var i = 0; i < password.value.length; i++) {
        passwordCensured += '*';
    }
    alert("Your email is: ".concat(email.value, "\nYour password is: ").concat(passwordCensured));
});
//# sourceMappingURL=app.js.map