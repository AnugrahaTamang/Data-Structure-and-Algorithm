function countDown(num) {
  if (num === 3) {
    console.log("And finally the stopping point ...");
    return;
  }
  console.log(num);
  countDown(num - 1);
}
countDown(7);

function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}
console.log(factorial(5)); //output: 20
