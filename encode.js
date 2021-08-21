let string = "a #$$$ @"; // input string
let result = ""; // output string
let last = string.length - 1;

let counter = 1; // ittrative count letters

for(let i = 0; i < last - 1; i++) {

  if(string[i] === string[i + 1]) {
    // count till next element is same as current
    counter++;
    continue;
  } else {
    result += counter === 1 ? string[i] : string[i] + counter;  
    counter = 1;
  }  

}

/**
 * Handle last element Edge Case
 * 1. last element is number
 * 2. last element is character
 */
result +=  counter === 1 ? string[last] : string[last] + counter;

console.log(result);


