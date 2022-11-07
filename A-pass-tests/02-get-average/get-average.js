// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  let filtered = numbers.filter((item) => typeof item === "number");
  let sumNumbers = 0;
  for (let i = 0; i <= filtered.length; i++) {
    sum = +filtered[i];
  }
  return sum / filtered.length;
}

module.exports = average;