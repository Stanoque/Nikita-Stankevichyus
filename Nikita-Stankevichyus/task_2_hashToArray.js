"use strict";

function hashToArray(hash) {

  // function is immutable
  var workHash = hash;
  
  var ownProps = Object.getOwnPropertyNames(workHash);
  
  // we know for sure how many elements the result array will contain
  var resultArray = new Array(ownProps.length);


  for(var i = 0; i < ownProps.length; i++) {
    
    // the first is the key, the second is the value
    resultArray.push([ownProps[i], workHash[ownProps[i]]]);

  }


  return resultArray;
  
}