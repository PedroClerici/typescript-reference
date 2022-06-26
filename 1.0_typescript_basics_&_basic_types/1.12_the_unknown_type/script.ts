// The "unknown" type in TypeScript:
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Test'

// userName = userInput;

if (typeof userInput === 'string') {
  userName = userInput;
}