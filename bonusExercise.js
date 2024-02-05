//Write a JavaScript function called hasUniqueChars that takes a string as a parameter and returns true if the string has all unique characters and false if it does not.

//Solution type 1

function hasUniqueChars(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] == undefined) {
      obj[str[i]] = 1;
    } else {
      return false;
    }
  }
  return true;
}

let output1 = hasUniqueChars("abcd");
console.log("Test1", output1);

let output2 = hasUniqueChars("aabc");
console.log("Test2", output2);

// Solution type 2

function hasUniqueCharsB(str) {
  let uniqueSet = new Set();
  for (let i = 0; i < str.length; i++) {
    if (uniqueSet.has(str[i])) {
      return false;
    }
    uniqueSet.add(str[i]);
  }
  return true;
}

let output11 = hasUniqueCharsB("abcd");
console.log("Test1", output1);

let output22 = hasUniqueCharsB("aabc");
console.log("Test2", output2);
