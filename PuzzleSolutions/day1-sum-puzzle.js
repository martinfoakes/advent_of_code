const { puzzleInput } = require("../InputData/day1-input");

const sumTo2020 = (inputArray) => {
  /**
   * Take an Array of number as input, find which two numbers within it add to 2020
   * Return the Sum of those two numbers
   */
  for (let i = 0; i < inputArray.length; i++) {
    const firstNum = inputArray[i];
    for (let index = 0; index < inputArray.length; index++) {
      //   const element = inputArray[index];
      if (firstNum === inputArray[index]) {
        continue;
      } else if (firstNum + inputArray[index] === 2020) {
        return {
          num1: firstNum,
          num2: inputArray[index],
          total: firstNum * inputArray[index],
        };
      }
    }
  }
};

console.log(sumTo2020(puzzleInput));
