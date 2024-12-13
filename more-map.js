const numbers = [10, 20, 30, 40, 50, 60]

const doubled = numbers.map(n => n * 2);
// console.log(doubled);

const addFive = numbers.map(num => num + 5);
// console.log(addFive);

const friends = ['tom', 'john', 'micheal', 'oliver'];

const lengths = friends.map(frnd => frnd.length);
// console.log(lengths);
const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter);

