//capitalize.test.js
import { test, expect } from "@jest/globals";
import capitalize from "./capitalize.js";

test("capitalize default export is a function", async () => {
  expect(typeof capitalize).toBe("function");
});

test("capitalize Happy path", () => {
  const testCases = [
    { input: "abdul", expected: "Abdul" },
    { input: "abraham", expected: "Abraham" },
    { input: "Apple", expected: "Apple" },
  ];

  testCases.forEach((testCase) => {
    const received = capitalize(testCase.input);
    expect(received).toBe(testCase.expected);
  });
});
