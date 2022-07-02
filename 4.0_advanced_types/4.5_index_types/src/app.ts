// Index properties:
interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a capital letter!' }
  [prop: string]: string;
  [prop: number]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email',
  500: 'Error code'
};