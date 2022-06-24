// Using types in TypeScript:

// Adding types to function parameters:
function add(num1: number, num2:number) {
  // if (typeof num1 !== 'number' || typeof num2 !== 'number') {
  //   throw new Error('Invalid input!');
  // }
  return num1 + num2;
}

function concatenate(str1:string, str2:string) {
  return str1 + str2;
}

// Type assignment:
let number1: number;
number1 = 5;
// or
let number2: number = 2.8;

let string1 = 'Hello, '
let string2 = 'world!'

const numResult = add(number1, number2);
const strResult = concatenate(string1, string2);
const nanResult = add(string2, number2); // <- TypeScript will trow errors in case that the
                                         // parameters types don't match but will still compile.

console.log(numResult);
console.log(strResult);
console.log(nanResult);