// Using interfaces as function types:

interface addFn {
  (num1:number, num2: number): number
}
// or
// type addFn = (num1:number, num2: number) => number;

let add: addFn;

add = (num1: number, num2: number) => num1 + num2;
