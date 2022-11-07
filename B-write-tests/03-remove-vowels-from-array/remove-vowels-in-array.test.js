let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  let arr = ["Irina", "Etza", "Daniel"];

  // Act
  let result = removeVowelsFromWords(arr);

  // Assert
  let expectedResult = ["rn", "tz", "Dnl"];
  expect(result).toEqual(expectedResult);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
