// Write a JavaScript function called fibonacci that takes a number n as a parameter and returns the nth number in the Fibonacci sequence.

// By Recursion
function fibonacciRecursion(num) {
  if (num == 0 || num == 1) {
    return num;
  }
  return fibonacciRecursion(num - 1) + fibonacciRecursion(num - 2);
}

let output = fibonacciRecursion(5);
console.log(output);
