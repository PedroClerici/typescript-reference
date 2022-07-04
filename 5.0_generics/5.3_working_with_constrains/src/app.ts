// Creating Generic Functions:
function merge<T extends object, U extends object>(obj1: T, obj2: U) {
  return Object.assign(obj1, obj2);
}

let mergedObj = merge({ name: 'Steve' }, { age: 18 });
// mergedObj = merge({ name: 'Steve' }, 30);
console.log(mergedObj.name);