function add(rawNumbers) {
  let numbers = rawNumbers.split(",");
  let negativeNumber = [];
  let result = 0;
  for (const number of numbers) {
      if (number < 0 ){
          negativeNumber.push(number);
      }
    if(number <= 1000){
      result += Number(number);  
    }
   if (negativeNumber.length > 0){
       throw"negatives not allowed: -1" + negativeNumber.join(" ");
   } 
  }
  return result;
}
module.exports = add;

