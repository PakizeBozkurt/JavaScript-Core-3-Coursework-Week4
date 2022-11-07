let add = require("./calculator");
test("Add empty string return zero", function () {
  //Arrange

  let input = "";

  //Act

  let result = add(input);

  //Assert

  expect(result).toEqual(0);
});

test("Add string to number", function () {
  //Arrange

  let input = "5";

  //Act

  let result = add(input);

  //Assert

  expect(result).toEqual(5);
});

test("Add two number return sum", function () {
  //Arrange

  let input = "3,6";

  //Act

  let result = add(input);

  //Assert

  expect(result).toEqual(9);
});

test("Add unknown  numbers", function () {
  //Arrange

  let input = "1,2,3,4,5,6,7,8,9,10";

  //Act

  let result = add(input);

  //Assert

  expect(result).toEqual(55);
});

