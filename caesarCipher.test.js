import caesarCipher from "./caesarCipher.js";

test("caesarCipher is a function", () => {
  expect(typeof caesarCipher).toBe("function");
});

test("caesarCipher shift string by shift factor", () => {
  const received = caesarCipher("abc", 1);
  const expected = "bcd";

  expect(received).toBe(expected);
});

test("caesarCipher shift string by shift factor", () => {
  const received = caesarCipher("kml", 2);
  const expected = "mon";

  expect(received).toBe(expected);
});

test("caesarCipher shift string by shift factor", () => {
  const received = caesarCipher("xyz", 3);
  const expected = "abc";

  expect(received).toBe(expected);
});

test("caesarCipher preserves case", () => {
  const received = caesarCipher("HeLLo", 3);
  const expected = "KhOOr";

  expect(received).toBe(expected);
});

test("caesarCipher preserve non alphabetical characters", () => {
  const received = caesarCipher("Hello, World!", 3);
  const expected = "Khoor, Zruog!";

  expect(received).toBe(expected);
});
