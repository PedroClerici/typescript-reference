// Creating Types in TypeScript:
type Combinable = number | string;
type ConversionDescriptor =  'as-number' | 'as-string';

function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor) {
  if (
    (typeof input1 === 'number' && typeof input2 === 'number')
    || resultConversion == 'as-number'
  ) {
    return +input1 + +input2;
  } else {
    return input1.toString() + input2.toString();
  }
}

const combinedAges = combine('15', 17, 'as-number');
console.log(combinedAges);

const combinedAges2 = combine('1', 17, 'as-string');
console.log(combinedAges2);

const combinedNames = combine('Steve', 'Brown', 'as-string');
console.log(combinedNames);