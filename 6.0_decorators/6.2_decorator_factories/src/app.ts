// Decorator factories:
function Logger(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

@Logger('Logging User...')
class User {
  name = 'Steve';

  constructor() {
    console.log('Creating user...');
  }
}

const user = new User();