//FizzBuzz: 1. print numbers from 1 to n. 2. if number is divisible by 3 print "fizz". 3. if the number is divisible by 5, print the buzz. 4. if number is divisible by 3 and 5, pring the fizzbuzz. 5. else print the number.
const FizzBuzz = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(`Number: ${i}`);
    }
  }
};
FizzBuzz(15);
