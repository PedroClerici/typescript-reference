// Creating decorators:
function Logger(constructor: Function) {
  console.log('Logging....');
  console.log(constructor);
}

// NOTE: The decorator runs when JavaScript finds the class definition.
@Logger
class User {
  name = 'Steve';

  constructor() {
    console.log('Creating user...');
  }
}

const user = new User();