var transform = function trasformArrayIntoFunctionArray(baseArray) {

  // via method map we forming a new array, containing function, that return respective elements from the original array
  var resultArray = baseArray.map(function(element){
    return function(){
      return element;
    }
  });
  
  return resultArray;
}

var baseArray = [10, 20, 30, 40, 50];
var newArray = transform(baseArray);