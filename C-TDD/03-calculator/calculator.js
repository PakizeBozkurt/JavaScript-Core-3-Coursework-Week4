function add(rawNumbers) {
  if (rawNumbers === "") {
    return 0;
  }
  if(!rawNumbers.includes(",")) {
      return parseInt(rawNumbers);
  }
  let numbers = rawNumbers.split(",");
  return parseInt(numbers[0]) + parseInt(numbers[1]);
}
module.exports = add;
