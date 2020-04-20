"use strict";

function stringReverse(sentence) {


  // function which reverses a word
  function reverseWord(word) {

    // function is immutable
    var workWord = word;

    // arrays are easier to manipulate
    workWord = workWord.split('');

    // reversing word
    workWord.reverse();

    // mergin word back to string
    workWord = workWord.join('');

    return workWord;

  }


  // function is immutable
  var workString = sentence;

  /*
  * Separator is not specified, so I chose this regexp 
  * FIXME: for some reason this regexp leaves spaces in beggining and end of the string untouched
  * This works perfectly fine ('cause the example suggests to leave them)
  * But this behaviour of the split function is unexpected. I would like to ask for some explanations, if it's possible
  */
  var separatorRegExp = /\s/g;

  workString = workString.split(separatorRegExp);


  // reversing each word of the string
  for(var i = 0; i < workString.length; i++) {
    
    workString[i] = reverseWord(workString[i]);

  }

  workString = workString.join(' ');

  return workString;

}