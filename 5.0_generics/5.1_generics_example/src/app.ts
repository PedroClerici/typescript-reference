// Generics Examples:
const names: Array<string> = [] // Array<string> === string[]

const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});

promise.then(data => {
  // data.split();
  console.log(data);
})