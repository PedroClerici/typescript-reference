// Using types in TypeScript:
// Adding types to function parameters:
function add(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Invalid input!');
    }
    return num1 + num2;
}
function concatenate(str1, str2) {
    return str1 + str2;
}
var number1 = 5;
var number2 = 2.8;
var string1 = 'Hello, ';
var string2 = 'world!';
var numResult = add(number1, number2);
var strResult = concatenate(string1, string2);
var nanResult = add(string2, number2); // <- TypeScript will trow errors in case that the
// parameters types don't match but will still compile.
console.log(numResult);
console.log(strResult);
console.log(nanResult);
