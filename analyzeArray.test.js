//analyzeArray.test.js
import analyzeArray from "./analyzeArray.js";

test("analyzeArray is a function", () => {
  expect(typeof analyzeArray).toBe("function");
});

test("analyzeArray return an object that contain correct analysis", () => {
  const testCases = [
    {
      input: [1, 8, 3, 4, 2, 6],
      expected: {
        average: 4,
        min: 1,
        max: 8,
        length: 6,
      },
    },
    {
      input: [1, 0, 1, 3, 5],
      expected: {
        average: 2,
        min: 0,
        max: 5,
        length: 5,
      },
    },
    {
      input: [2, 3, 3, 6, 8, 9],
      expected: {
        average: 31 / 6,
        min: 2,
        max: 9,
        length: 6,
      },
    },
  ];

  testCases.forEach(({ input, expected }) => {
    const received = analyzeArray(input);

    expect(received).toMatchObject(expected);
  });
});
