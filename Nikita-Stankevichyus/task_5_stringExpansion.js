"use strict";

// ES5 polyfill of "repeat" method of ES6

String.prototype.myRepeat = function(times) {

  // function is immutable
  var workChar = this;

  // string to return
  var resultString = '';

  // times is how many repeats we want
  for (var i = 0; i < times; i++) {
    resultString = resultString.concat(workChar);
  }

  return resultString;
};



function stringExpansion(string) {

  // function is immutable
  var workString = string;

  // if string is empty return null
  if(!string){return null;};

  // regexp that matches pairs of number-letter and lone letters, but don't match lone numbers
  var splitRegExp = /\d(?=\D)\D|(?<!\d)\D/g;

  // string to return
  var resultString = '';

  // splitting the string into array of pairs and lone letters, abandoning "stray" numericals
  workString = workString.match(splitRegExp);

  for(var i = 0; i < workString.length; i++) {
    
    
    if(workString[i].length > 1) {

    /*
    * If there is more than one char in the element of the array
    * We take the char at second position of the pair (index 1)
    * While parsing the first one (index 0) as integer
    * And then we create a string of repeating second-position chars via 'myRepeat' method-polyfill
    * Finally we concat this string with our resulting string
    */
      resultString = resultString.concat(workString[i].charAt(1).myRepeat(parseInt(workString[i].charAt(0))));
    } else {

      // if there is only one char, we just concat it with the resulting string
      resultString = resultString.concat(workString[i]);
    }
  }

  return resultString;

}