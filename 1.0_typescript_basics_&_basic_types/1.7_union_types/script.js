// Union Types in TypeScript:
function combine(input1, input2) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
var combinedAges = combine(15, 17);
console.log(combinedAges);
var combinedNames = combine('Steve', 'Brown');
console.log(combinedNames);
