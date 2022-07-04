// Creating Generic Functions:
function merge<T, U>(obj1: T, obj2: U) {
  return Object.assign(obj1, obj2);
}

let mergedObj = merge({ name: 'Steve' }, { age: 18 });
console.log(mergedObj.name);