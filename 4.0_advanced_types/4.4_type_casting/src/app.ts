// Type casting in TypeScript:
const form = document.querySelector('form')!;
// Type casting examples:
const email = document.getElementById('email') as HTMLInputElement;
const password = <HTMLInputElement>document.getElementById('password');

form.addEventListener('submit', e => {
  e.preventDefault();

  let passwordCensured = '';
  for (let i = 0; i < password.value.length; i++) {
    passwordCensured += '*';
  }

  alert(`Your email is: ${email.value}\nYour password is: ${passwordCensured}`);
});
