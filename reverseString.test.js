//reverse string
import reverseString from "./reverseString.js";

test("reverseString is a function", () => {
  expect(typeof reverseString).toBe("function");
});

test("reverseString reverses a String:Happy paths", () => {
  const testCases = [
    { input: "good", expected: "doog" },
    { input: "keep", expected: "peek" },
    { input: "Radar", expected: "radaR" },
  ];

  testCases.forEach(({ input, expected }) => {
    const recieved = reverseString(input);
    expect(recieved).toBe(expected);
  });
});
