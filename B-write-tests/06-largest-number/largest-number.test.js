let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  // Arrange
  // Act
  // Assert
  let numbers = [3, 21, 88, 4, 36];
  let result = 88;
  let output = getLargestNumber(numbers);
  expect(output).toEqual(result) && expect(array).toEqual(numbers);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
