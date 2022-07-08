// Decorator factories:
function WithTemplate(template: string, hookId: string) {
  return function(_: Function) {
    const element = document.getElementById(hookId);
    if (element) {
      element.innerHTML = template;
    }
  }
}

@WithTemplate('<h1>My User Instance</h1>', 'app')
class User {
  name = 'Steve';

  constructor() {
    console.log('Creating user...');
  }
}

const user = new User();