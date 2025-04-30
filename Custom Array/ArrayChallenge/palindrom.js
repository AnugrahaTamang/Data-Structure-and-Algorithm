//If the reverse string is equal to the original one then that word is a palindrome. Example cddc👉cddc ➡️
const findPalidrom = (str) => str.split("").reverse().join("") === str;
console.log(findPalidrom("Anugraha")); //false
console.log(findPalidrom("cddc")); //true
console.log(findPalidrom("apple")); //false
console.log(findPalidrom("abba")); //true
