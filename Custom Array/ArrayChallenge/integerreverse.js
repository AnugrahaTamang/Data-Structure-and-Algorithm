const reverseInt = (num) => {
  const one = num.toString().split("").reverse().join("");
  return parseInt(one) * Math.sign(num);
};
console.log(reverseInt(123));
