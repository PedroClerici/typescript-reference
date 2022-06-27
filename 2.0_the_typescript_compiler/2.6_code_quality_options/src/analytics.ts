function sendAnalytics(data: any, unusedParameter: boolean) {
  console.log(data);
  let unusedLocal = 'Hello';
}

function add(num1: number, num2: number) {
  if (num1 + num2 > 0) {
    return num1 + num2;
  }
}
sendAnalytics('The data...', true);
