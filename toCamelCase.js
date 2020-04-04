const toCamelCase = function dashedUnderscoredToCamelCase(string) {

  // function is immutable
  let workString = string;


  // regular expression to find dash and underscore in the string
  const dashUnderscoreRegExp = /_|-/g;


  // replacing all the dashes and underscores with space to utilize separators
  workString = workString.replace(dashUnderscoreRegExp, ' ');
  workString = workString.split(' ');

  for(let i = 1; i < workString.length; i++) {

    /*
    * Firstly: we ignore the first word
    * All following words undergo next: with /^\w/ regexp we match the first letter of each word in replace function
    * Then we copy that letter with charAt(0) and convert it to uppercase
    * And we change the matched first letter of the word with its' upper counterpart
    */ 
    workString[i] = workString[i].replace(/^\w/, workString[i].charAt(0).toUpperCase());

  }

  // merging the result string
  workString = workString.join('');

  return workString;
}
