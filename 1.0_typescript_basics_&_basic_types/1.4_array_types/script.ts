// Array Types in TypeScript:

// Array examples:
let names: string[];
names = ['Maria', 'Shaun', 'Steve', 'John']; 

let numbers: number[];
numbers = [1, 2.7, 3.14, 81, 73]; 

let randomArray: any[];
randomArray = [7, 'Steve', true, { vegetable: 'tomato' }];

console.log(names, typeof names);
console.log(numbers, typeof numbers);
console.log(randomArray, typeof randomArray);

/* const person: 
{
  name: string;
  age: number;
  hobbies : string[];
} = */ const person = {
  name: 'Scott',
  age: 30,
  hobbies: ['Cooking', 'Gaming'],
};

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}