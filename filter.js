// filter selects elements based on a condition and returns an array with the elements that fullfilled the condition
const numbers = [10, 20, 30, 40, 50, 60];

const players = [75, 65, 67, 72, 55, 59];

// const selected = players.filter(p => p > 70)
// const selected = players.filter(p => p > 80)
// const selected = players.filter(p => p > 50)

const selected = players.filter(p => p % 2 === 1)
console.log(selected);
const friends = ['tom', 'john', 'micheal', 'oliver', 'tim', 'joshua'];

const oddFriends = friends.filter(friend => friend.length > 4);
console.log(oddFriends);
