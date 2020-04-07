"use strict";

var transform = function trasformArrayIntoFunctionArray(baseArray) {

  // via map method we're forming a new array, containing function, that return respective elements from the original array
  var resultArray = baseArray.map(

    function(element){

      return function(){

        return element;

      }

  });
  
  return resultArray;
}