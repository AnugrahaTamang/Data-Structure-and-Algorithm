//sentence capitalization. - make the string lowercase - convert string to array - capitalize each word - convert array back to string
const capitalize = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};
console.log(capitalize("hello world"));
console.log(capitalize("hello i am anugraha tamang from dhading Nepal"));
