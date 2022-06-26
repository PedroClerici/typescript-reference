// Function return types & void.
function greeting(time: string = 'day', name: string = 'user'): string {
  return `Good ${time}, ${name}.`;
}

console.log(greeting('morning', 'Steve'));

// The void return means that the function has no return.
function logGreeting(time: string = 'day', name: string = 'user'): void {
  console.log(`Good ${time}, ${name}.`);
}

logGreeting('evening', 'Maria');
