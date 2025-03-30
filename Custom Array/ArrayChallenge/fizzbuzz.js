const one = (n) => {
  for (let i = 0; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("fizzbuzz");
    } else if (i % 3 == 0) {
      console.log("fizz");
    } else if (i % 3 == 0) {
      console.log("BUZZ");
    } else {
      console.log(n);
    }
  }
};
console.log(one(15));
