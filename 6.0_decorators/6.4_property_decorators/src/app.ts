// Property decorators:
function Logger(target: any, propertyName: string | Symbol) {
  console.log('Running Property Decorator...');
  console.log(target, propertyName);
}

class product {
  @Logger
  title: string;
  _price: number;

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

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
