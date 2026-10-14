//caesarCipher.js

export default function caesarCipher(plaintext, shift) {
  let codedString = "";

  for (let char of plaintext) {
    const unicode = char.charCodeAt(0);

    if (unicode >= 97 && unicode <= 122) {
      const discriminant = (unicode + shift - 97) % 26;
      const newunicode = 97 + discriminant;
      codedString += String.fromCharCode(newunicode);
    } else if (unicode >= 65 && unicode <= 90) {
      const discriminant = (unicode + shift - 65) % 26;
      const newunicode = 65 + discriminant;
      codedString += String.fromCharCode(newunicode);
    } else {
      codedString += char;
    }
  }
  return codedString;
}
