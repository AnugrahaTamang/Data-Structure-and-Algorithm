const capitalize = (str) => {
  return str
    .toLowerCase()
    .split("")
    .map((d) => d[0].toUppercase() + d.slice(1))
    .join("");
};
console.log(capitalize("hello sir"));
