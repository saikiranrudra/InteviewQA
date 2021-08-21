let string = "a #$3 @" // input string
let result = "" // output string

let strLength = string.length;

for(let i = 0; i < strLength - 1; i++) {
  let count = parseInt(string[i + 1]);
  if(!isNaN(count)) {
    // If next Element is a number 
    for(let j = 0; j < count; j++) {
      result += string[i];
    }
  } else {
    // If next Element is not a number
    result += string[i];
  }
}

// consider last character is not a number
let number = parseInt(string[strLength - 1]);
if(isNaN(number)) {
  result += string[strLength - 1];
}


console.log(result);

