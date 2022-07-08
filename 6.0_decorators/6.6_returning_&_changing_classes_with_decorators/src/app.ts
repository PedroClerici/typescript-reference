function WithTemplate(hookId: string) {
  console.log('Rendering template...')
  return function<T extends { new(...args: any[]): {name: string} }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(...args: any[]) {
        super(...args);
        const element = document.getElementById(hookId);
        const header = document.createElement('h1');
        header.innerText = this.name;
        if (element) {
          element.append(header);
        } else {
          throw new Error("Could'nt find element with hookId");
        }
      }
    }
  }
}

@WithTemplate('app')
class User {
  name: string

  constructor(name: string) {
    console.log('Creating user...');
    this.name = name;
  }
}

const names = ['Steve', 'Maria', 'Scott'];

names.forEach(name => {
  new User(name);
})