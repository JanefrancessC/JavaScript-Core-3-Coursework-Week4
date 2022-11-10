// int is an integer
// a factorial is the product of all non-negative integers
// less than or equal to the iniital number.

// for example the factorial of 5 is 120
// 120 = 1 * 2 * 3 * 4 * 5

// calculate and return the factorial of int
// note: factorial of 0 is 1

function factorial(int) {
  // return int * (int - 1)
   let result = 1;
  for (let i = 1; i <= int; i++) {
   
    result *= i;
  }
  return result;
}
// console.log(factorial(10));

module.exports = factorial;
