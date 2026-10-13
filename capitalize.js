//capitalize.js

export default function capitalize(str) {
  const splitedString = str.split("");
  splitedString[0] = splitedString[0].toUpperCase();

  const newStr = splitedString.reduce((newStr, char) => newStr + char);

  return newStr;
}
