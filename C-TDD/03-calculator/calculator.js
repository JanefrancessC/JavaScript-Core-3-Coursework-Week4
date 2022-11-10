function add(numbers) {
  let total = 0;
  let negativeNums = [];
  let newArr = numbers.split(",").map((num) => Number(num));
  newArr.filter((num) => {
    if (num < 0) {
      negativeNums.push(num);
      // console.log(negativeNums);
      throw new Error(`negatives not allowed: ${num}`);
      //return `negatives not allowed: ${num}`;
    } else if (num <= 1000 && num > 0) {
      total += num;
    }
  });

  // let negativeNums = newArr.forEach((num) => {
  //   if (num < 0) throw new Error(`negatives not allowed: ${num}`);
  // });

  return total;
}

console.log(add("1,4,-1"));
module.exports = add;
