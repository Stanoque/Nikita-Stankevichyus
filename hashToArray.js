const hashToArray = function convertHashToArray(hash) {

  // function is immutable
  let workHash = hash;
  
  const ownProps = Object.getOwnPropertyNames(workHash);
  
  // we know for sure how many elements the result array will contain
  const resultArray = new Array(ownProps.length);


  for(let i = 0; i < ownProps.length; i++) {
    
    // first evaluate an element of the array as array itself
    resultArray[i] = [];

    // the first is the key
    resultArray[i][0] = ownProps[i];

    // the second is the value
    resultArray[i][1] = workHash[ownProps[i]]; 

  }


  return resultArray;
  
}
