// Array Types in TypeScript:
// Array examples:
var names;
names = ['Maria', 'Shaun', 'Steve', 'John'];
var numbers;
numbers = [1, 2.7, 3.14, 81, 73];
var randomArray;
randomArray = [7, 'Steve', true, { vegetable: 'tomato' }];
console.log(names, typeof names);
console.log(numbers, typeof numbers);
console.log(randomArray, typeof randomArray);
/* const person:
{
  name: string;
  age: number;
  hobbies : string[];
} = */ var person = {
    name: 'Scott',
    age: 30,
    hobbies: ['Cooking', 'Gaming']
};
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
