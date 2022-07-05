// Generic Classes:
class DataStorage<T> {
  data: T[] = [];

  add(items: T | T[]) {
    if(items instanceof Array) {
      this.data.push(...items);
    } else {
      this.data.push(items);
    }
    return this
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) !== -1) {
      this.data.splice(this.data.indexOf(item), 1);
    }
    return this
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage
  .add('I like potatoes')
  .add(['Good morning', 'Hello, world!'])
  .removeItem('I like potatoes');
console.log(textStorage.getItems());

const luckyNumbers = new DataStorage<number>();
luckyNumbers
  .add(20)
  .add([35, 91, 55])
  .removeItem(91);
console.log(luckyNumbers.getItems());