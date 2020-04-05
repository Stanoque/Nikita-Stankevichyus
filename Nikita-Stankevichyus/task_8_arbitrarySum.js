/*
* The function is crying for refactoring, but this is the best I could come up with.
* -------------------------------------------------------------------------------------------------------------------------------
* So "arg" parameter is a feature, that allows function to pass arbitrary quantity of arguments to its' recursion call.
* Because default "arguments" can't, because "arguments" parameter is relative to each function call.
* While this "arg" remains absolute, thus making the recursion valid.
*/

const sum = function sumOfArbitraryArguments(arg){

  // if there are no arguments, return null.
  if(arg === undefined){

    return null;

  }

  // "arg"s' length undefined means that "arg" corresponds to one separate parameter, meaning that it is main non-recursive call.
  if(arg.length === undefined){

    // entering recursion
    return sum(arguments);

  } else {

    // if it is the last parameter we just returning it up the recursion.
    if(arg.length === 1){

      return arg[0];

    } else {
      
      // "remembering" current parameter's index
      let currentIndex = arg.length-1;

      // one parameter less to process
      arg.length--;

      // summing current parameter and sending the rest (with corrected length property) down in the recursion
      return arg[currentIndex] + sum(arg);

    }
  }
}