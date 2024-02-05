// Write a JavaScript function called isPalindrome that takes a string as a parameter and returns true if the string is a palindrome and false if it is not.

function isPalindrome(param) {
  for (let i = 0; i <= param.length / 2; i++) {
    if (param[param.length - i - 1].toLowerCase() !== param[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}

let output = isPalindrome("Madam");
console.log("test1", output);

let output1 = isPalindrome("12321");
console.log("test2", output1);

let output2 = isPalindrome("Hello");
console.log("test3", output2);
