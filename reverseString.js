//reverseString.js

export default function reverseString(str) {
  const splitedString = str.split("");

  const reversedString = splitedString.reduce((newStr, char, index) => {
    return newStr.padStart(index + 1, char);
  }, "");

  return reversedString;
}
