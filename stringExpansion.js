const stringExpansion = function multiplyLettersByNumeric(string) {

  // function is immutable
  let workString = string;

  const numericRegExp = /\d(?=\D)\D|\d(?!\D)|(?<!\d)\D/g;

  let numerics = workString.match(numericRegExp);

  console.log(numerics);

}

stringExpansion('abcde');