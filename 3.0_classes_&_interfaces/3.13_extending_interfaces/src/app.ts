// Extending interfaces:
interface Named {
  name: string
}

interface Greeter extends Named {
  greet(phrase: string): void;
}

class User implements Greeter {
  constructor(public name: string) {
    this.name = name;
  }
  
  greet(phrase: string): void {
    console.log(phrase + ' ' + this.name);
  } 
}

let user = new User('Steve');
user.greet('Hello, my name is');