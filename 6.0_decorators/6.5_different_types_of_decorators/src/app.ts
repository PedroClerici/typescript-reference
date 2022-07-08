// Different types of decorators:
function PropertyDecorator(target: any, propertyName: string | Symbol) {
  console.log('Running Property Decorator...');
  console.log(target);
  console.log(propertyName);
  console.log();
}

function AccessorDecorator(
  target: any,
  propertyName: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Running Accessor Decorator...');
  console.log(target);
  console.log(propertyName);
  console.log(descriptor);
  console.log();
}

function MethodDecorator(
  target: any,
  propertyName: string | Symbol,
  descriptor: PropertyDescriptor,
) {
  console.log('Running Method Decorator...');
  console.log(target);
  console.log(propertyName);
  console.log(descriptor);
  console.log();
}

function ParameterDecorator(
  target: any,
  propertyName: string | Symbol,
  position: number,
) {
  console.log('Running Parameter Decorator...');
  console.log(target);
  console.log(propertyName);
  console.log(position);
  console.log();
}

class product {
  @PropertyDecorator
  title: string;
  _price: number;

  @AccessorDecorator
  set price(newPrice: number) {
    if (newPrice > 0) {
      this._price = newPrice;
    } else {
      throw new Error('Invalid Price!');
    }
  }

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  @MethodDecorator
  getPriceWithTax(@ParameterDecorator tax: number) {
    return this._price * (1 + tax);
  }
}
