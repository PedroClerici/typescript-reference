// Union Types in TypeScript:
function combine(input1: number | string, input2: number | string) {
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    return input1 + input2;
  } else {
    return input1.toString() + input2.toString();
  }
}

const combinedAges = combine(15, 17);
console.log(combinedAges);

const combinedNames = combine('Steve', 'Brown');
console.log(combinedNames);