// Functions as types.
function add(num1: number, num2: number) {
  return num1 + num2;
}

function printValue(value: number | string) {
  console.log(value);
}

function addAndHandle(num1: number, num2: number, callBack: (num: number) => void) {
  callBack(num1 + num2)
}

// let combineValues: Function;
let combineValues: (a: number, b:number) => number;

combineValues = add;
// combineValues = 5;

console.log(combineValues(5, 5));

addAndHandle(7, 7, result => {
  console.log(result);
})