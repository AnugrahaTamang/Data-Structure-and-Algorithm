//This is all about the integer reverse.
const ReverseInt = (num) => {
  const reversed = num.toString().split("").reverse().join("");
  console.log(parseInt(reversed));
};
ReverseInt(123); //321
ReverseInt(123456789); //output: 987654321
