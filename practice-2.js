/**
 * You have an odd array.[1, 3, 5, 7, 9].
 * Now convert this array into an even array(array with even numbers)[2,4,6,8,10]. Do this using for loop & array.map() method.
 */
const oddArray = [1, 3, 5, 7, 9];
const evenArray = [];
for(let num of oddArray){
  const evenValue = num + 1;
  evenArray.push(evenValue);
}

console.log(evenArray);

const evenArray2 = oddArray.map(num => num + 1);
console.log(evenArray2);




/**
 * You are given an array: [33, 50, 79, 78, 90, 101, 30].
 * Now return/get all the elements which are divisible by 10 using array.filter() method.
 * Now do the same task of question 2. But do this using array.find() method. Then compare the output of question 2 & question 3.
 */

const arr = [33, 50, 79, 78, 90, 101, 30];

const divisibleByTen = arr.filter(num => num % 10 === 0);
console.log(divisibleByTen);
const divisibleByTen2 = arr.find(num => num % 10 === 0);
console.log(divisibleByTen2);
