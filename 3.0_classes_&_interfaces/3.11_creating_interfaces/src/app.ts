// Creating Interfaces in TypeScript:
interface User {
  name: string,
  age: number,

  greet(phrase: string): void;
}

let user1: User;

user1 = {
  name: 'Steve',
  age: 22,

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
};

user1.greet("Hi there, I'm");