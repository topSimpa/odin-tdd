import caesarCipher from "./caesarCipher.js";

test("caesarCipher is a function", () => {
  expect(typeof caesarCipher).toBe("function");
});

test("caesarCipher shift string by shift factor", () => {
  const testCases = [
    { str: "abc", shift: 1, expected: "bcd" },
    { str: "kml", shift: 2, expected: "mon" },
    { str: "xyz", shift: 3, expected: "abc" },
    { str: "HeLLo", shift: 3, expected: "KhOOr" },
    { str: "Hello, World!", shift: 3, expected: "Khoor, Zruog!" },
    { str: "AMZ", shift: 7, expected: "HTG" },
  ];

  testCases.forEach(({ str, shift, expected }) => {
    const received = caesarCipher(str, shift);

    expect(received).toBe(expected);
  });
});
