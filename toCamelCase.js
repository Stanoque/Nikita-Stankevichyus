const toCamelCase = function dashedUnderscoredToCamelCase(string) {

  // function is immutable
  let workString = string;

  console.log(workString);

  const regExp = /[-|_]/g;

  workString.replace(regExp, ' ');

  console.log(workString);
}

console.log('kek');

toCamelCase("the-stealth-warrior");