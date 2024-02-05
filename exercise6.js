//Write a JavaScript function called calculateFactorial that takes a number as a parameter and returns its factorial.

//By recusion
function calculateFactorial(num) {
  if (num == 0 || num == 1) {
    return 1;
  }
  return num * calculateFactorial(num - 1);
}

let factorial = calculateFactorial(5);
console.log(factorial);
