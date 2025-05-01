const isValidParenthesis = (str) => {
  const stack = [];
  const brackets = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  for (let char of str) {
    if (brackets[char]) {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (!top || brackets[top] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
console.log(isValidParenthesis("()")); //true
console.log(isValidParenthesis("{")); //false

//Reverse string using the stack
function reverseStr(str) {
  const stack = [];
  for (let char of str) {
    stack.push(char);
  }
  let reversedStr = "";
  while (stack.length > 0) {
    reversedStr += stack.pop();
  }
  return reversedStr;
}
console.log(reverseStr("Hello")); //output: olleH
console.log(reverseStr("anugraha")); //output: aharguna
