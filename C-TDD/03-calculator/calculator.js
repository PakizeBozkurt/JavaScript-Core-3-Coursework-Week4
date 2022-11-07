function add(rawNumbers) {
  let numbers = rawNumbers.split(",");
  let result = 0;
  for (const number of numbers) {
    result += Number(number);
  }
  return result;
}
module.exports = add;

