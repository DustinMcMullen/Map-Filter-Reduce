var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
const doubledNumbers = numbers.map(function (num) {
  return num * 2;
});
// console.log(doubledNumbers);
// Returns: [6, 112, 4, 96, 10]

//Filter - Create a new array by keeping the items that return true.
const numGreaterThanFour = numbers.filter(function (num) {
  return 4 < num;
});
// console.log(numGreaterThanFour);
// Returns: [56, 48, 5]

//Reduce - Accumulate a value by doing something to each item in an array.
const numbersSum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
});
// console.log(numbersSum);
// Returns: 114

//Find - find the first item that matches from an array.
const firstNumGtrThanTen = numbers.find(function (num) {
  return num > 10;
});
// console.log(firstNumGtrThanTen);
// Returns: 56

//FindIndex - find the index of the first item that matches.
const IndexofFirstNumAboveTen = numbers.findIndex(function (num) {
  return num > 10;
});
// console.log(IndexofFirstNumAboveTen);
// Returns: 1

// CHALLENGE:
// return only meaning of objects in emojipedia array.
// truncate Text of eavh meaning to 100 characters
import emojipedia from "./emojipedia";

const emojiMeanings = emojipedia.map(function (emoji) {
  return emoji.meaning.slice(0, 100);
});
console.log(emojiMeanings);
