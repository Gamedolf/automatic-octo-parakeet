const reverseString = (str) => {
  // deconstruct the string
  const [head, ...tail] = str;

  switch (str.length) {
    case 0:
    case 1: return str;
    default: return reverseString(tail) + head;
  }
}

console.log(reverseString("abcb"));
console.log(reverseString("test"));
console.log(reverseString("racecar"));