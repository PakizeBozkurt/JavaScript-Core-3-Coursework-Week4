let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  // Arrange
  let arr = [3, 21, 88, 4, 36];
  let expectedResult = 88;
  // Act
  let output = getLargestNumber(arr);
  // Assert
  expect(output).toEqual(expectedResult);
  expect(arr).toEqual([3, 21, 88, 4, 36]);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
