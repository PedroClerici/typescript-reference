// Optional parameters and properties:
interface Greeter {
  name?: string,

  greet(phrase: string): void;
}

class User implements Greeter {
  constructor(public name?: string) {
    this.name = name;
  }
  
  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    }

    console.log('Hi!');
  } 
}

let user = new User();
user.greet('Hello, my name is');