// Functions as types.
function add(num1, num2) {
    return num1 + num2;
}
function printValue(value) {
    console.log(value);
}
function addAndHandle(num1, num2, callBack) {
    callBack(num1 + num2);
}
// let combineValues: Function;
var combineValues;
combineValues = add;
// combineValues = 5;
console.log(combineValues(5, 5));
addAndHandle(7, 7, function (result) {
    console.log(result);
});
