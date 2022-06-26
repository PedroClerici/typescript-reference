// Function return types & void.
function greeting(time, name) {
    if (time === void 0) { time = 'day'; }
    if (name === void 0) { name = 'user'; }
    return "Good ".concat(time, ", ").concat(name, ".");
}
console.log(greeting('morning', 'Steve'));
// The void return means that the function has no return.
function logGreeting(time, name) {
    if (time === void 0) { time = 'day'; }
    if (name === void 0) { name = 'user'; }
    console.log("Good ".concat(time, ", ").concat(name, "."));
}
logGreeting('evening', 'Maria');
