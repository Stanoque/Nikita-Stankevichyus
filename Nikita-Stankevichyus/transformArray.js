const transform = function trasformArrayIntoFunctionArray(baseArray) {

  // via method map we forming a new array, containing function, that return respective elements from the original array
  let resultArray = baseArray.map(function(element){
    return function(){
      return element;
    }
  });
  
  return resultArray;
}
