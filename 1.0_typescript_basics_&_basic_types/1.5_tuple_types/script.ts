// Tuple Types in TypeScript:

// Tuples are "arrays" where length and
// type order is enforced.

// Tuple example:
let role:[number, string];
role = [1, 'user'];
role = [2, 'admin'];

// TypeScript will trow a error in case of a wrong type:
role = ['admin', 2];
role = [true, 'user'];

console.log(role);