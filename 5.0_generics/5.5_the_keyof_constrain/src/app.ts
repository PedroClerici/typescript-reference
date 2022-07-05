// The "keyof" constrain:
function extractAndReturn<T, U extends keyof T>(object: T, key: U) {
  return object[key];
}

const user = {
  name: 'Scott',
  age: 18,
  hobbies: ['Sports', 'Programming'],
}

console.log(extractAndReturn(user, 'name'));
console.log(extractAndReturn(user, 'hobbies'));