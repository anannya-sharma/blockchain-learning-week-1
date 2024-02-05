// Question 2
// Write a JavaScript program that logs numbers from 1 to 100.
// For multiples of 3, log "Fizz" instead of the number.
// For multiples of 5, log "Buzz" instead of the number.
// For numbers that are multiples of both 3 and 5, log "FizzBuzz".

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

//----------------***---------------//

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  }
  if (i % 5 === 0) {
    console.log("Buzz");
  }
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
}
