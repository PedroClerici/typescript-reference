// More Generic Functions Examples:
interface hasLength {
  length: number;
}

function countAndDescribe<T extends hasLength>(object: T) {
  if (object.length === 0) {
    console.log(`The object: ${typeof object}, is empty!`)
  } else {
    console.log(`The object: ${typeof object}, has the length of ${object.length}.`);
  }
}

countAndDescribe('Steve');
countAndDescribe('');
countAndDescribe([1, 2, 3, 4, 5]);
countAndDescribe('Potato');
countAndDescribe(['Scott', 'Maria', 'John']);