function nextInLine(arr, item) {
    // accepts arr and item

    arr.push(item);
    //adds an argument/value to the end of an array

    // arr.shift(); deletes first item in array
  
    return arr.shift(); 
  }
  
  // Setup
  var testArr = [1,2,3,4,5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));
  
  // used solution from https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-stand-in-line/18307