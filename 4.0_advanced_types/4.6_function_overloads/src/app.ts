// Function overloads:
function combine(a: number, b:number): number
function combine(a:number | string, b: number | string): string 
function combine(a:any, b: any) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  } else {
    return a + b;
  }
}

console.log(combine('2', 2));
console.log(combine(2, 2));
console.log(combine('Steve', 2));
