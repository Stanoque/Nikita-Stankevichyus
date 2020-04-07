"use strict";

/*
* I have a feeling that this function neglect a lot of exceptions and potential errors.
* Which is confirmed by seemingly complex polyfill of the 'bind' method at MDN.
* But nevertheless this prototype method got through my tests, so I call it functional.
*/

Function.prototype.myBind = function bindPolyfill(context) {
  
  // remembering which function is being binded
  var currentFunction = this;

  // arguments passed to 'myBind' method, expect for context object
  var preArguments = [].slice.call(arguments, 1);

  // resulting function
  return function() {

    // arguments passed during actual call of the resulting function
    var callArguments = [].slice.call(arguments);

    // using apply to emulate 'bind' method
    currentFunction.apply(context, preArguments.concat(callArguments));
  }
}