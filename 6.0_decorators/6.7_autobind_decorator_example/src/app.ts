// Creating a auto bind decorator:
function AutoBind(target: any, methodName: string | Symbol, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const bindFunction = originalMethod.bind(this);
      return bindFunction;
    }
  };
  return adjustedDescriptor;
}

class Printer {
  message: string;

  constructor(message: string) {
    this.message = message;
  }

  @AutoBind
  showMessage() {
    alert(this.message);
  }
}

const printer = new Printer('Hello, world!');

const button = document.querySelector('button')!;
// button.addEventListener('click', printer.showMessage.bind(printer));
button.addEventListener('click', printer.showMessage);