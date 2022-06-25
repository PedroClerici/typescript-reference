function combine(input1, input2, resultConversion) {
    if ((typeof input1 === 'number' && typeof input2 === 'number')
        || resultConversion == 'as-number') {
        return +input1 + +input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
var combinedAges = combine('15', 17, 'as-number');
console.log(combinedAges);
var combinedAges2 = combine('1', 17, 'as-string');
console.log(combinedAges2);
var combinedNames = combine('Steve', 'Brown', 'as-string');
console.log(combinedNames);
