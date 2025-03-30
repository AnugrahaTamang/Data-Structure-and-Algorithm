const palindrom = (str) => str.split("").reverse().join("") === str;
console.log(palindrom("Hello"));
console.log(palindrom("cddc"));
