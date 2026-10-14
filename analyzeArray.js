//analyzeArray.js

export default function analyzeArray(arr) {
  return {
    average: arr.reduce((prev, next) => prev + next) / arr.length,
    min: arr.reduce((prev, next) => (next < prev ? next : prev)),
    max: arr.reduce((prev, next) => (next > prev ? next : prev)),
    length: arr.length,
  };
}
