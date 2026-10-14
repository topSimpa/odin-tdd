import calculator from "./calculator.js";

test("calculator is a function", () => {
  expect(typeof calculator).toBe("object");
});

test("calculator contains add, multiply, divide, & subtract", () => {
  const testCases = ["add", "subtract", "divide", "multiply"];

  testCases.forEach((testCase) => {
    const recieved = calculator[testCase];
    expect(typeof recieved).toBe("function");
  });
});

test("calculator can add", () => {
  const testCases = [
    { a: 3, b: 5 },
    { a: 7, b: 8 },
    { a: 2.1, b: 5.0 },
    { a: 2.0, b: 7.0 },
  ];

  testCases.forEach(({ a, b }) => {
    const received = calculator.add(a, b);
    const expected = a + b;
    expect(received).toBe(expected);
  });
});

test("calculator can subtract", () => {
  const testCases = [
    { a: 3, b: 1 },
    { a: 1, b: 4 },
    { a: 3.1, b: 2.2 },
    { a: 4.0, b: 1.2 },
  ];

  testCases.forEach(({ a, b }) => {
    const received = calculator.subtract(a, b);
    const expected = a - b;

    expect(received).toBe(expected);
  });
});

test("calculator can divide", () => {
  const testCases = [
    { a: 4, b: 2 },
    { a: 3, b: 2 },
    { a: 5.0, b: 2.5 },
    { a: 6, b: 3.0 },
  ];

  testCases.forEach(({ a, b }) => {
    const received = calculator.divide(a, b);
    const expected = a / b;

    expect(received).toBe(expected);
  });
});

test("calculator can multiply", () => {
  const testCases = [
    { a: 3, b: 4 },
    { a: 5.0, b: 4.0 },
    { a: 6.0, b: 2 },
  ];
  testCases.forEach(({ a, b }) => {
    const received = calculator.multiply(a, b);
    const expected = a * b;
    expect(received).toBe(expected);
  });
});
